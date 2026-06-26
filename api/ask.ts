/**
 * Ask Assistant — serverless answer engine.
 *
 * Flow: embed question (Voyage AI) → retrieve top chunks → stream answer (Claude) → send sources.
 * Streams back Server-Sent Events (SSE):
 *   event: status  — progress messages while thinking
 *   event: delta   — streamed answer text chunks
 *   event: sources — array of { url, title } after answer is complete
 *   event: done    — end of stream
 *   event: error   — something went wrong
 *
 * Platform notes
 * ──────────────
 * Written for Vercel Node.js runtime (export default handler).
 * For Netlify: move to netlify/functions/ask.ts, change the export to:
 *   export const handler = async (event: HandlerEvent) => { ... }
 *   and adapt req/res to use event.body / return { statusCode, body }.
 * For local dev: run `node scripts/dev-server.mjs` (see README).
 *
 * Required env vars
 * ─────────────────
 *   ANTHROPIC_API_KEY — from console.anthropic.com
 *   VOYAGE_API_KEY    — from dashboard.voyageai.com
 */

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync } from 'fs';
import { join } from 'path';

// ── Types ──────────────────────────────────────────────────────────────────────

interface ChunkMeta {
  url: string;
  title: string;
  product: string;
  text: string;       // full chunk — used to build the LLM context
  excerpt: string;    // short preview — kept for display use
}

// ── Index (loaded once per cold start, then cached) ───────────────────────────

const DIMS = 1024;   // must match DIMS in build-ask-index.mjs
let _vectors: Float32Array | null = null;
let _meta: ChunkMeta[] | null = null;

function loadIndex() {
  if (_vectors && _meta) return { vectors: _vectors, meta: _meta };
  // Vercel includes these files via vercel.json "includeFiles".
  // For local dev, process.cwd() is the project root.
  const dir = join(process.cwd(), 'public');
  const bin = readFileSync(join(dir, 'ask-index.bin'));
  _vectors = new Float32Array(bin.buffer, bin.byteOffset, bin.byteLength / 4);
  _meta = JSON.parse(readFileSync(join(dir, 'ask-index.meta.json'), 'utf-8'));
  return { vectors: _vectors, meta: _meta };
}

// ── Cosine similarity ─────────────────────────────────────────────────────────

function cosine(q: Float32Array, offset: number, vecs: Float32Array): number {
  let dot = 0, qa = 0, va = 0;
  for (let i = 0; i < DIMS; i++) {
    dot += q[i] * vecs[offset + i];
    qa  += q[i] * q[i];
    va  += vecs[offset + i] * vecs[offset + i];
  }
  return dot / (Math.sqrt(qa) * Math.sqrt(va) + 1e-10);
}

function retrieve(
  q: number[],
  vecs: Float32Array,
  meta: ChunkMeta[],
  k: number,
  product?: string,
): (ChunkMeta & { score: number })[] {
  const qf = new Float32Array(q);
  const n  = vecs.length / DIMS;

  const scores: [number, number][] = [];
  for (let i = 0; i < n; i++) scores.push([cosine(qf, i * DIMS, vecs), i]);
  scores.sort((a, b) => b[0] - a[0]);

  // Deduplicate by URL, optionally filter to current product first
  const seen    = new Set<string>();
  const results: (ChunkMeta & { score: number })[] = [];

  const addHit = (score: number, i: number) => {
    const m = meta[i];
    if (seen.has(m.url)) return;
    seen.add(m.url);
    results.push({ ...m, score });
  };

  // Pass 1: product-filtered
  if (product) {
    for (const [s, i] of scores) {
      if (meta[i].product === product) addHit(s, i);
      if (results.length >= k) break;
    }
  }
  // Pass 2: top-up with any product if we don't have enough
  if (results.length < 4) {
    for (const [s, i] of scores) {
      addHit(s, i);
      if (results.length >= k) break;
    }
  }

  return results.slice(0, k);
}

// ── Voyage AI question embedding ─────────────────────────────────────────────

const VOYAGE_MODEL = 'voyage-3.5';
const EMBED_DIMS   = 1024;   // must match DIMS in build-ask-index.mjs

async function embedQuestion(text: string): Promise<number[]> {
  const res = await fetch('https://api.voyageai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.VOYAGE_API_KEY}`,
    },
    body: JSON.stringify({
      input: [text],
      model: VOYAGE_MODEL,
      input_type: 'query',          // optimizes the embedding for retrieval queries
      output_dimension: EMBED_DIMS,
    }),
  });
  if (!res.ok) throw new Error(`Voyage Embedding ${res.status}: ${await res.text()}`);
  const json = await res.json();
  return json.data[0].embedding;
}

// ── Anthropic client ───────────────────────────────────────────────────────────

const anthropic = new Anthropic();   // reads ANTHROPIC_API_KEY from env

// ── Main handler ──────────────────────────────────────────────────────────────

export default async function handler(req: any, res: any) {
  // CORS — allow requests from the docs site on any domain
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
  if (req.method !== 'POST')   { res.status(405).json({ error: 'Method not allowed' }); return; }

  // Parse request body (Vercel auto-parses JSON; raw Node.js needs manual read)
  let body: { question?: string; product?: string } = {};
  try {
    if (req.body && typeof req.body === 'object') {
      body = req.body;
    } else {
      const raw = typeof req.body === 'string' ? req.body : await readBodyText(req);
      body = JSON.parse(raw || '{}');
    }
  } catch { /* leave body empty, caught below */ }

  const { question, product } = body;
  if (!question?.trim()) {
    res.status(400).json({ error: 'question is required' });
    return;
  }

  // SSE response headers
  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('X-Accel-Buffering', 'no');   // disable nginx/proxy buffering
  if (typeof res.flushHeaders === 'function') res.flushHeaders();

  const send = (event: string, data: unknown) =>
    res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);

  try {
    send('status', { text: 'Finding relevant docs…' });

    // 1. Embed the question
    const queryVec = await embedQuestion(question.trim());

    // 2. Find closest doc chunks
    const { vectors, meta } = loadIndex();
    const hits = retrieve(queryVec, vectors, meta, 6, product?.trim());

    send('status', { text: 'Writing answer…' });

    // 3. Build context string from top hits
    const context = hits
      .map((h, i) => `[${i + 1}] ${h.title}\n${h.text}`)
      .join('\n\n---\n\n');

    // 4. Stream answer from Claude Sonnet 4.6
    const stream = anthropic.messages.stream({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: `You are a concise, helpful documentation assistant for Testsigma.
Answer the user's question using ONLY the numbered documentation excerpts below.
Be direct. Use [N] inline to cite which excerpt supports each fact.
If the excerpts don't contain enough information, say so honestly — do not guess.

${context}`,
      messages: [{ role: 'user', content: question.trim() }],
    });

    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        send('delta', { text: event.delta.text });
      }
    }

    // 5. Send source links
    send('sources', hits.map(h => ({ url: h.url, title: h.title })));
    send('done', {});

  } catch (err: any) {
    send('error', { message: err?.message ?? 'Something went wrong. Please try again.' });
  } finally {
    res.end();
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function readBodyText(req: any): Promise<string> {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk: Buffer) => (data += chunk.toString()));
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}
