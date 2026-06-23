# Testsigma Docs — Astro + Starlight

This is the starter for rebuilding the Testsigma documentation site on **Astro**
with the **Starlight** docs framework. It is built to be **simple, minimal, and
managed mostly by editing Markdown** — you rarely touch code.

If you are non-technical: the short version is **write Markdown files, push to
GitHub, the site rebuilds itself.** Everything below explains the few moments
where that isn't quite true.

---

## 1. What's in here

```
astro-docs-starter/
├── astro.config.mjs          ← site URL, nav sidebar, redirects, analytics (edit this)
├── src/
│   ├── content.config.ts      ← the rules each page's frontmatter must follow
│   ├── content/docs/          ← YOUR PAGES. Markdown in = pages out.
│   │   ├── index.mdx                         the home page
│   │   └── test-management/
│   │       ├── projects/manage-projects.md   a normal doc page (real content)
│   │       └── api-reference/
│   │           ├── overview.md               API intro
│   │           ├── list-projects.mdx         a GET endpoint
│   │           └── create-project.mdx        a POST endpoint
│   ├── components/Endpoint.astro  ← renders the API reference design
│   ├── styles/custom.css          ← brand colors (teal/purple). Colors only.
│   └── assets/testsigma-mark.svg  ← logo
├── public/_redirects          ← keep old URLs alive (SEO)
└── scripts/gen-redirects.mjs  ← optional: bulk underscore→hyphen redirects
```

---

## 2. Running it

You need **Node.js 18+** installed. Then, in this folder:

```bash
npm install      # one time — downloads Astro + Starlight
npm run dev      # start the local site at http://localhost:4321/docs/
npm run build    # build the final static site into dist/
```

`npm run dev` gives you a live preview that updates as you edit files. That is
your day-to-day loop.

> This project **cannot** run inside the design tool that generated it — Astro
> needs Node. Run it on your computer, or let a host (below) run it for you.

---

## 3. Adding or editing a normal page

1. Add a `.md` file under `src/content/docs/...`. **The folder path becomes the
   URL.** `src/content/docs/test-management/projects/manage-projects.md` →
   `/docs/test-management/projects/manage-projects/`.
2. Put a few lines of frontmatter at the top:

   ```markdown
   ---
   title: My page title
   description: One sentence for SEO and search.
   sidebar:
     order: 2.1   # controls position in the left nav (lower = higher up)
   ---

   Your content in **Markdown**.
   ```

3. Save. It appears in the nav and in search automatically.

Your existing Markdown bodies mostly **paste in unchanged**. Two find-and-replace
fixes when migrating old pages:

- Old callouts `[[info | **NOTE**:]]` → Starlight asides `:::note ... :::`
- Old frontmatter `order: 2.1` → `sidebar:\n  order: 2.1`
- Old `metadesc:` → also copy it into `description:` (search + SEO use it)

(An AI coding tool can do this conversion across all files in one pass.)

---

## 4. Adding an API endpoint

Each endpoint is one `.mdx` file in `api-reference/`. Copy `list-projects.mdx`,
change the `api:` block in the frontmatter, done. **You never write code
samples** — the cURL / JavaScript / Python tabs and the response panel are
generated from that block. See the comments in `list-projects.mdx`.

---

## 5. Search, SEO, analytics — already handled

- **Search**: built in (Pagefind). Nothing to configure; it indexes on build.
- **Page titles, descriptions, canonical URLs, Open Graph tags**: generated
  automatically from each page's frontmatter.
- **Google Tag Manager + HubSpot**: wired in `astro.config.mjs` (the `head`
  block). The IDs from the old site are already there.

---

## 6. The one thing to get right: URL parity (SEO)

This is the **only** high-stakes part of the move. Search engines have indexed
the current URLs; the new site must serve the **same URLs** or you lose rankings.

Already handled for you:

- **Trailing slashes** — `trailingSlash: 'always'` in the config matches the old
  site (every URL ends in `/`).
- **The `/docs` prefix** — `base: '/docs'` keeps everything under `/docs/...`.
- **Explicit moves** — listed in `astro.config.mjs` `redirects` and
  `public/_redirects`.

Your checklist before going live:

1. Export the list of current live URLs (from your sitemap or Google Search
   Console).
2. Build this site (`npm run build`) and confirm each old URL exists in `dist/`.
3. For any URL that changed, add a redirect (config or `_redirects`).
4. If old **underscore** URLs (`/manage_projects/`) were indexed, run
   `node scripts/gen-redirects.mjs` after building.
5. Point `sitemap` at the new site and resubmit in Search Console.

> If you do one technical review during this whole project, do it here.

---

## 7. Hosting (easiest path)

1. Put this folder in a GitHub repo.
2. Connect the repo to **Netlify** or **Cloudflare Pages** (both have free tiers
   and read `public/_redirects` automatically).
3. Build command `npm run build`, publish directory `dist`.
4. Every time you push a Markdown change, the site rebuilds itself.

That's the whole loop: **edit Markdown → push → live.**

---

## 8. What still needs doing (this is a starter, not the finished site)

- [ ] Migrate the rest of your Markdown pages into `src/content/docs/`
      (copy files, apply the two find-and-replace fixes from §3).
- [ ] Rebuild the full sidebar in `astro.config.mjs` (or switch sections to
      `autogenerate` so it builds itself from folders).
- [ ] Add the remaining API endpoints as `.mdx` files.
- [ ] Run the full URL-parity checklist (§6) before switching DNS.
- [ ] Confirm the brand code-block theme matches the approved design (tweak in
      `astro.config.mjs` via Starlight's `expressiveCode` theme if needed).
