// ─────────────────────────────────────────────────────────────────────────────
//  gen-redirects.mjs
//
//  The old Gatsby site auto-redirected every underscore URL to its hyphen
//  version (e.g. /manage_projects/ → /manage-projects/). This script
//  reproduces that: it scans your built pages and appends one redirect line
//  per page that contains a hyphen, into public/_redirects.
//
//  Run it AFTER `npm run build`:   node scripts/gen-redirects.mjs
//
//  You usually only need this if those underscore URLs were actually indexed
//  by Google. Check Search Console first — if no underscore URLs have traffic,
//  you can skip this entirely.
// ─────────────────────────────────────────────────────────────────────────────
import { readdir, appendFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIST = 'dist';
const pages = [];

async function walk(dir, base = '') {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const rel = join(base, entry.name);
    if (entry.isDirectory()) await walk(join(dir, entry.name), rel);
    else if (entry.name === 'index.html') {
      const url = '/' + base.replace(/\\/g, '/') + '/';
      pages.push(url.replace(/\/+/g, '/'));
    }
  }
}

await walk(DIST);

const lines = pages
  .filter((u) => u.includes('-'))
  .map((u) => `${u.replace(/-/g, '_')}\t${u}\t301`)
  .join('\n');

await appendFile(join(DIST, '_redirects'), '\n# auto-generated underscore→hyphen\n' + lines + '\n');
console.log(`Added ${pages.filter((u) => u.includes('-')).length} underscore redirects to dist/_redirects`);
