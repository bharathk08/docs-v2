#!/usr/bin/env node
/**
 * Reads every doc page, splits into small sections, embeds them with Voyage AI,
 * and writes two files the Ask Assistant API reads at runtime:
 *
 *   public/ask-index.bin        — packed Float32 vectors (1024 dims per chunk)
 *   public/ask-index.meta.json  — parallel array of { url, title, product, excerpt }
 *
 * Usage:
 *   VOYAGE_API_KEY=vk-xxx node scripts/build-ask-index.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = join(__dirname, '..');
const DOCS_DIR  = join(ROOT, 'src', 'content', 'docs');
const PUBLIC    = join(ROOT, 'public');

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
if (!GOOGLE_API_KEY) {
  console.error('Error: GOOGLE_API_KEY environment variable is not set.');
  console.error('Get a free key at aistudio.google.com, then run:');
  console.error('  GOOGLE_API_KEY=AIza... node scripts/build-ask-index.mjs');
  process.exit(1);
}

const GEMINI_MODEL  = 'gemini-embedding-2';
const DIMS          = 768;    // reduced from 3072 via outputDimensionality
const CONCURRENCY   = 50;     // parallel embedContent calls per wave
const WAVE_MIN_MS   = 35000;  // minimum ms per wave — keeps rate under 90 RPM free limit
const CHUNK_MAX     = 900;    // characters per chunk before splitting further

// ── Walk docs directory ────────────────────────────────────────────────────────

function walkDocs(dir, results = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      walkDocs(full, results);
    } else if (/\.(md|mdx)$/.test(name)) {
      results.push(full);
    }
  }
  return results;
}

// ── Parse frontmatter ──────────────────────────────────────────────────────────

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return { title: '', body: raw };
  const yaml  = m[1];
  const body  = m[2];
  const titleM = yaml.match(/^title:\s*['"]?(.*?)['"]?\s*$/m);
  return { title: titleM ? titleM[1].trim() : '', body };
}

// ── Strip markdown to plain text ───────────────────────────────────────────────

function toPlain(text) {
  return text
    .replace(/!\[.*?\]\(.*?\)/g, '')           // images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')   // links → label
    .replace(/```[\s\S]*?```/g, '')             // fenced code
    .replace(/`[^`\n]+`/g, '')                  // inline code
    .replace(/^>+\s?/gm, '')                    // blockquotes
    .replace(/^\s*[-*+]\s+/gm, '')              // bullets
    .replace(/^\s*\d+\.\s+/gm, '')              // numbered lists
    .replace(/\*\*([^*]+)\*\*/g, '$1')          // bold
    .replace(/\*([^*]+)\*/g, '$1')              // italic
    .replace(/#{1,6}\s*/g, '')                  // heading hashes
    .replace(/<[^>]+>/g, '')                    // HTML tags
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// ── Split a page into indexable chunks ────────────────────────────────────────

function makeChunks(title, body) {
  const chunks = [];

  // Split on H2/H3 headings so each section stays together
  const sections = body.split(/(?=^#{2,3} )/m);

  for (const section of sections) {
    const plain = toPlain(section).trim();
    if (plain.length < 50) continue;

    // Prefix every chunk with the page title so the AI always has context
    const withTitle = title ? `${title}\n\n${plain}` : plain;

    if (withTitle.length <= CHUNK_MAX) {
      chunks.push(withTitle);
    } else {
      // Split long sections on blank lines
      const paras = withTitle.split(/\n\n+/);
      let buf = '';
      for (const p of paras) {
        const candidate = buf ? buf + '\n\n' + p : p;
        if (candidate.length > CHUNK_MAX && buf) {
          if (buf.trim().length >= 50) chunks.push(buf.trim());
          // Restart with title prefix for continuity
          buf = title ? `${title}\n\n${p}` : p;
        } else {
          buf = candidate;
        }
      }
      if (buf.trim().length >= 50) chunks.push(buf.trim());
    }
  }

  // Always have at least one chunk (the page title itself)
  return chunks.length ? chunks : (title ? [title] : []);
}

// ── URL from file path ─────────────────────────────────────────────────────────

function fileToUrl(filePath) {
  const rel   = relative(DOCS_DIR, filePath).replace(/\\/g, '/');
  const slug  = rel.replace(/\.(md|mdx)$/, '').replace(/\/index$/, '');
  return `/docs/${slug}/`;
}

// ── Voyage AI batch embed ──────────────────────────────────────────────────────

// Single embedContent call with retry on 429
async function embedOne(text, taskType = 'RETRIEVAL_DOCUMENT', attempt = 0) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:embedContent?key=${GOOGLE_API_KEY}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: `models/${GEMINI_MODEL}`,
      content: { parts: [{ text }] },
      taskType,
      outputDimensionality: DIMS,
    }),
  });

  if (res.status === 429) {
    if (attempt >= 6) throw new Error('Google rate limit: too many retries. Try again later.');
    const retryAfter = parseInt(res.headers.get('retry-after') || '0') * 1000;
    const waitMs = retryAfter || Math.min(5000 * 2 ** attempt, 120000);
    process.stdout.write(`\n  Rate limited — waiting ${Math.round(waitMs / 1000)}s…\n`);
    await new Promise(r => setTimeout(r, waitMs));
    return embedOne(text, taskType, attempt + 1);
  }

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Google Embedding API ${res.status}: ${body}`);
  }

  const json = await res.json();
  return json.embedding.values;
}

// Run CONCURRENCY requests in parallel, then wait out the rate-limit window
async function embedAll(texts, taskType = 'RETRIEVAL_DOCUMENT') {
  const results = new Array(texts.length);
  const totalWaves = Math.ceil(texts.length / CONCURRENCY);
  const etaMin = Math.ceil((totalWaves * WAVE_MIN_MS) / 60000);
  console.log(`  ${texts.length} texts across ${totalWaves} waves (~${etaMin} min at free-tier rate limit)`);

  for (let i = 0; i < texts.length; i += CONCURRENCY) {
    const wave = texts.slice(i, i + CONCURRENCY);
    const waveNum = Math.floor(i / CONCURRENCY) + 1;
    const waveStart = Date.now();
    process.stdout.write(`  Wave ${waveNum}/${totalWaves}…\r`);

    const vecs = await Promise.all(wave.map(t => embedOne(t, taskType)));
    for (let j = 0; j < vecs.length; j++) results[i + j] = vecs[j];

    // Respect the free-tier rate limit between waves
    if (i + CONCURRENCY < texts.length) {
      const elapsed = Date.now() - waveStart;
      const wait = Math.max(WAVE_MIN_MS - elapsed, 300);
      process.stdout.write(`  Wave ${waveNum}/${totalWaves} done — cooling down ${Math.round(wait / 1000)}s…\r`);
      await new Promise(r => setTimeout(r, wait));
    }
  }
  return results;
}

// ── Main ───────────────────────────────────────────────────────────────────────

async function main() {
  console.log('Scanning docs...');
  const files = walkDocs(DOCS_DIR);
  console.log(`Found ${files.length} files.`);

  const allChunks = [];

  for (const file of files) {
    const raw     = readFileSync(file, 'utf-8');
    const { title, body } = parseFrontmatter(raw);
    const url     = fileToUrl(file);
    const product = file.includes('/arcus/') ? 'arcus' : 'suite';
    const chunks  = makeChunks(title, body);

    for (const text of chunks) {
      allChunks.push({ url, title, product, text });
    }
  }

  console.log(`Total chunks: ${allChunks.length}`);
  console.log('Embedding…');

  const texts      = allChunks.map(c => c.text);
  const embeddings = await embedAll(texts);
  console.log('');

  // ── Write binary vector file ──────────────────────────────────────────────

  const buffer = new Float32Array(embeddings.length * DIMS);
  for (let i = 0; i < embeddings.length; i++) {
    buffer.set(embeddings[i], i * DIMS);
  }
  writeFileSync(join(PUBLIC, 'ask-index.bin'), Buffer.from(buffer.buffer));

  // ── Write metadata JSON ───────────────────────────────────────────────────

  const meta = allChunks.map(({ url, title, product, text }) => ({
    url,
    title,
    product,
    // Keep a short excerpt for the "Related docs" panel — not the full text
    excerpt: text.slice(0, 220).replace(/\n+/g, ' ').trim(),
  }));
  writeFileSync(join(PUBLIC, 'ask-index.meta.json'), JSON.stringify(meta));

  const mb = (buffer.byteLength / 1024 / 1024).toFixed(1);
  console.log(`\nDone!`);
  console.log(`  Chunks : ${allChunks.length}`);
  console.log(`  Index  : ${mb} MB  →  public/ask-index.bin`);
  console.log(`  Meta   : public/ask-index.meta.json`);
}

main().catch(err => {
  console.error('\nFailed:', err.message);
  process.exit(1);
});
