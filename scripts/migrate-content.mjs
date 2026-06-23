#!/usr/bin/env node
/**
 * Phase 2 content migration script.
 * Copies Suite Docs + Arcus Docs into src/content/docs/, converting
 * Gatsby frontmatter → Starlight frontmatter and old [[callout]] syntax
 * → Starlight :::type asides.
 *
 * Usage: node scripts/migrate-content.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from 'fs';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASTRO_ROOT  = join(__dirname, '..');
const HANDOFF     = join(ASTRO_ROOT, '..');   // design_handoff_testsigma_docs/

const SUITE_SRC   = join(HANDOFF, 'Suite Docs');
const ARCUS_SRC   = join(HANDOFF, 'Arcus Docs', 'test-management');
const SUITE_DEST  = join(ASTRO_ROOT, 'src', 'content', 'docs', 'suite');
const ARCUS_DEST  = join(ASTRO_ROOT, 'src', 'content', 'docs', 'arcus');

// Files to skip during copy
const SKIP = new Set(['index.jsx', 'sitemap.xml', '.DS_Store']);

// ── Callout type map: old → Starlight ─────────────────────────────────────
const CALLOUT_MAP = {
  info:    'note',
  note:    'note',
  tip:     'tip',
  warning: 'caution',
  danger:  'danger',
  quote:   'note',
};

// ── Frontmatter transform ─────────────────────────────────────────────────
function transformFrontmatter(yamlText) {
  const lines = yamlText.split('\n');
  const out   = [];
  let skipBlock    = false;
  let order        = null;
  let metadesc     = null;
  let hasDescField = false; // did source already have a `description:` line?

  // First pass: collect metadesc and check for description
  for (const line of lines) {
    if (/^metadesc:/.test(line)) {
      metadesc = line.replace(/^metadesc:\s*/, '').trim();
    }
    if (/^description:/.test(line)) {
      hasDescField = true;
    }
  }

  for (const line of lines) {
    // Start of a block field to drop
    if (/^contextual_links:/.test(line)) { skipBlock = true; continue; }

    if (skipBlock) {
      const isTopKey = line.length > 0 && !/^[\s\-]/.test(line);
      if (isTopKey) {
        skipBlock = false;
        // fall through
      } else {
        continue;
      }
    }

    // Fields to drop entirely
    if (/^(page_title|noindex|canonical|keywords|page_id|warning)\b/.test(line) ||
        /^social_share_/.test(line)) {
      continue;
    }

    // metadesc → emit as description (handled once, below)
    if (/^metadesc:/.test(line)) {
      out.push(`description: ${metadesc}`);
      continue;
    }

    // If source has both metadesc and description, drop the original description
    // (we already emitted description from metadesc above)
    if (/^description:/.test(line) && metadesc !== null) {
      continue;
    }

    // order → sidebar.order (collect, emit at end)
    if (/^order:/.test(line)) {
      order = line.replace(/^order:\s*/, '').trim();
      continue;
    }

    out.push(line);
  }

  // Emit sidebar.order after all regular fields
  if (order !== null) {
    out.push('sidebar:');
    out.push(`  order: ${order}`);
  }

  return out.join('\n').trimEnd();
}

// ── Callout body conversion ───────────────────────────────────────────────
function convertCallouts(body) {
  const lines  = body.split('\n');
  const result = [];
  let inCallout = false;

  for (const line of lines) {
    // Callout opener: [[type | **TITLE**:]]
    const m = line.match(/^\[\[(\w+)\s*\|(.+?)\]\]/);
    if (m) {
      const type  = CALLOUT_MAP[m[1].toLowerCase()] || 'note';
      const title = m[2].trim().replace(/\*\*/g, '').replace(/:$/, '').trim();
      result.push(`:::${type}[${title}]`);
      inCallout = true;
      continue;
    }

    // Callout body line: | content
    if (inCallout && /^\|/.test(line)) {
      result.push(line.replace(/^\|\s?/, ''));
      continue;
    }

    // First non-| line closes callout
    if (inCallout) {
      result.push(':::');
      inCallout = false;
    }

    result.push(line);
  }

  if (inCallout) result.push(':::');
  return result.join('\n');
}

// ── Single file transform ─────────────────────────────────────────────────
function transformFile(raw) {
  // Normalize Windows line endings
  const content = raw.replace(/\r\n/g, '\n');

  const match = content.match(/^---[ \t]*\n([\s\S]*?)\n---[ \t]*\n?([\s\S]*)$/);
  if (!match) {
    // No frontmatter — just convert callouts
    return convertCallouts(content);
  }

  const fm   = transformFrontmatter(match[1]);
  const body = convertCallouts(match[2]);
  return `---\n${fm}\n---\n${body}`;
}

// ── Recursive walk + copy ─────────────────────────────────────────────────
function walkAndCopy(srcDir, destDir) {
  mkdirSync(destDir, { recursive: true });
  let count = 0;

  for (const entry of readdirSync(srcDir)) {
    if (SKIP.has(entry)) continue;

    const srcPath  = join(srcDir, entry);
    // Normalise folder/file name to lowercase for clean URLs
    const destName = entry.toLowerCase();
    const destPath = join(destDir, destName);
    const stat     = statSync(srcPath);

    if (stat.isDirectory()) {
      count += walkAndCopy(srcPath, destPath);
    } else if (extname(entry) === '.md') {
      const raw         = readFileSync(srcPath, 'utf8');
      const transformed = transformFile(raw);
      writeFileSync(destPath, transformed, 'utf8');
      count++;
    }
  }

  return count;
}

// ── Main ──────────────────────────────────────────────────────────────────
console.log('Phase 2 — Migrating content...\n');

console.log('Suite Docs → src/content/docs/suite/');
const suiteCount = walkAndCopy(SUITE_SRC, SUITE_DEST);
console.log(`  ✓ ${suiteCount} files\n`);

console.log('Arcus Docs/test-management → src/content/docs/arcus/');
const arcusCount = walkAndCopy(ARCUS_SRC, ARCUS_DEST);
console.log(`  ✓ ${arcusCount} files\n`);

console.log(`Done. Total: ${suiteCount + arcusCount} files migrated.`);
