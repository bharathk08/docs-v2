# Deploy guide — local → staging

Plain-English steps to take this from your laptop to a live **staging** site on
Vercel or Netlify, **without touching the production docs.** Cutover (replacing
the old site) is a later, separate decision.

---

## Step 1 — Run and test locally

You need **Node.js 18+** installed.

```bash
cd astro-docs-starter
npm install
npm run dev      # opens http://localhost:4321/docs/
```

Click around: home page, a few docs pages, the API Reference. Edit a Markdown
file and watch it update live. When happy:

```bash
npm run build    # builds the final static site into dist/
npm run preview  # previews the built site exactly as it'll deploy
```

If `build` succeeds with no errors, you're ready to deploy.

---

## Step 2 — Put it on GitHub

Create a new (private is fine) GitHub repo and push the `astro-docs-starter`
folder to it. If you use the GitHub Desktop app: "Add local repository" → point
it at the folder → Publish. (Or ask Claude Code to do this for you.)

---

## Step 3 — Deploy to staging (pick one)

Both have free tiers, auto-detect Astro, and rebuild on every push.

### Netlify
1. netlify.com → "Add new site" → "Import an existing project" → pick your repo.
2. Build command: `npm run build` · Publish directory: `dist`
3. Deploy. You get a URL like `your-site.netlify.app`.
4. `public/_redirects` is picked up automatically.

### Vercel
1. vercel.com → "Add New… Project" → import your repo.
2. Framework preset: **Astro** (auto-detected). Leave defaults.
3. Deploy. You get a URL like `your-site.vercel.app`.
4. `vercel.json` (root redirect) is picked up automatically.

Your staging site lives at `…/docs/` (the bare root redirects there).

---

## Step 4 — Safety checks on the staging URL

- ✅ **It is NOT indexed by Google.** `public/robots.txt` blocks all crawlers.
  This is on purpose — staging must not compete with your live docs.
- ✅ Spot-check pages, search (try the search box), and the API Reference.
- ✅ Share the staging URL with reviewers.

---

## Step 5 — Later: cutover (separate decision, do NOT rush)

Only when v2 is fully reviewed and you've decided to sunset the old site:

1. Run the **URL-parity checklist** in `README.md` §6 — every old URL must
   resolve on v2.
2. **Delete the two `Disallow` lines in `public/robots.txt`** so the site can be
   indexed. (Easiest thing to forget on launch day.)
3. Point the real domain / `/docs` path at this deployment.
4. Resubmit your sitemap in Google Search Console and watch for crawl errors.

Until step 5, the old site stays exactly as it is. This deployment is a parallel
preview only.
