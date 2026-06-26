#!/usr/bin/env node
/**
 * Reads every doc page, splits into small sections, embeds them with Voyage AI,
 * and writes two files the Ask Assistant API reads at runtime:
 *
 *   public/ask-index.bin        — packed Float32 vectors (1024 dims per chunk)
 *   public/ask-index.meta.json  — parallel array of { url, title, product, excerpt }
 *
 * Usage:
 *   VOYAGE_API_KEY=pa-xxx node scripts/build-ask-index.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT      = join(__dirname, '..');
const DOCS_DIR  = join(ROOT, 'src', 'content', 'docs');
const PUBLIC    = join(ROOT, 'public');

const VOYAGE_API_KEY = process.env.VOYAGE_API_KEY;
// --meta-only just rewrites meta.json from local docs; no embedding, no key needed.
if (!VOYAGE_API_KEY && !process.argv.includes('--meta-only')) {
  console.error('Error: VOYAGE_API_KEY environment variable is not set.');
  console.error('Get a key at https://dashboard.voyageai.com, then run:');
  console.error('  VOYAGE_API_KEY=pa-... node scripts/build-ask-index.mjs');
  process.exit(1);
}

const VOYAGE_MODEL  = 'voyage-3.5';
const DIMS          = 1024;   // voyage-3.5 default embedding dimension
const CHUNK_MAX     = 900;    // characters per chunk before splitting further

// Throughput knobs — defaults suit Voyage's standard tier (fast). To build on the
// trial tier (3 RPM / 10K TPM, before a payment method is added) run with:
//   VOYAGE_BATCH_SIZE=12 VOYAGE_CONCURRENCY=1 VOYAGE_REQ_MIN_MS=21000
const BATCH_SIZE    = Number(process.env.VOYAGE_BATCH_SIZE)  || 128;  // texts per request
const CONCURRENCY   = Number(process.env.VOYAGE_CONCURRENCY) || 4;    // parallel requests
const REQ_MIN_MS    = Number(process.env.VOYAGE_REQ_MIN_MS)  || 0;    // min ms between request starts

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

// Embed a batch of texts in one request, with retry on 429
async function embedBatch(texts, inputType = 'document', attempt = 0) {
  const res = await fetch('https://api.voyageai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${VOYAGE_API_KEY}`,
    },
    body: JSON.stringify({
      input: texts,
      model: VOYAGE_MODEL,
      input_type: inputType,        // 'document' for the index, 'query' at search time
      output_dimension: DIMS,
    }),
  });

  if (res.status === 429) {
    if (attempt >= 6) throw new Error('Voyage rate limit: too many retries. Try again later.');
    const retryAfter = parseInt(res.headers.get('retry-after') || '0') * 1000;
    const waitMs = retryAfter || Math.min(2000 * 2 ** attempt, 60000);
    process.stdout.write(`\n  Rate limited — waiting ${Math.round(waitMs / 1000)}s…\n`);
    await new Promise(r => setTimeout(r, waitMs));
    return embedBatch(texts, inputType, attempt + 1);
  }

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Voyage Embedding API ${res.status}: ${body}`);
  }

  const json = await res.json();
  // Sort by index defensively so vectors line up with the input order
  return json.data.sort((a, b) => a.index - b.index).map(d => d.embedding);
}

// Split into batches, run CONCURRENCY batches in parallel at a time
async function embedAll(texts, inputType = 'document') {
  const batches = [];
  for (let i = 0; i < texts.length; i += BATCH_SIZE) {
    batches.push(texts.slice(i, i + BATCH_SIZE));
  }
  const waves = Math.ceil(batches.length / CONCURRENCY);
  const etaMin = REQ_MIN_MS ? Math.ceil((waves * REQ_MIN_MS) / 60000) : null;
  console.log(
    `  ${texts.length} texts across ${batches.length} batches of ≤${BATCH_SIZE}` +
    (etaMin ? ` — throttled, ~${etaMin} min` : '')
  );

  const results = new Array(texts.length);
  let done = 0;
  let lastStart = 0;

  for (let i = 0; i < batches.length; i += CONCURRENCY) {
    // Pace request starts to respect the rate limit (no-op when REQ_MIN_MS = 0)
    if (REQ_MIN_MS && lastStart) {
      const wait = REQ_MIN_MS - (Date.now() - lastStart);
      if (wait > 0) await new Promise(r => setTimeout(r, wait));
    }
    lastStart = Date.now();

    const wave = batches.slice(i, i + CONCURRENCY);
    const waveVecs = await Promise.all(wave.map(b => embedBatch(b, inputType)));

    waveVecs.forEach((vecs, w) => {
      const offset = (i + w) * BATCH_SIZE;
      for (let j = 0; j < vecs.length; j++) results[offset + j] = vecs[j];
    });

    done += wave.reduce((n, b) => n + b.length, 0);
    process.stdout.write(`  Embedded ${done}/${texts.length}…\r`);
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

  // ── Write metadata JSON ───────────────────────────────────────────────────
  // `text` is the full chunk — api/ask.ts feeds it to the LLM as context.
  // `excerpt` is a short preview kept for any display use.
  const writeMeta = () => {
    const meta = allChunks.map(({ url, title, product, text }) => ({
      url,
      title,
      product,
      text,
      excerpt: text.slice(0, 220).replace(/\n+/g, ' ').trim(),
    }));
    writeFileSync(join(PUBLIC, 'ask-index.meta.json'), JSON.stringify(meta));
  };

  // --meta-only: rewrite meta.json from the (deterministic) chunks WITHOUT
  // re-embedding. Safe only while the chunk count still matches the vector
  // file — otherwise vectors and metadata would be misaligned.
  if (process.argv.includes('--meta-only')) {
    const vecCount = statSync(join(PUBLIC, 'ask-index.bin')).size / 4 / DIMS;
    if (vecCount !== allChunks.length) {
      throw new Error(
        `Chunk count (${allChunks.length}) != index vectors (${vecCount}). ` +
        `Docs changed — run a full rebuild, not --meta-only.`
      );
    }
    writeMeta();
    console.log(`meta.json regenerated from ${allChunks.length} chunks (no embedding).`);
    return;
  }

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

  writeMeta();

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
