import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// ────────────────────────────────────────────────────────────────────────────
//  Content schema
//
//  Starlight gives every docs page a standard schema (title, description,
//  sidebar order, etc.). We EXTEND it with the few extra frontmatter fields
//  your existing Markdown already uses, so your old files validate cleanly.
//
//  If a page is missing a required field, the build fails with a clear
//  message instead of silently shipping something broken.
// ────────────────────────────────────────────────────────────────────────────

export const collections = {
  // ── Changelog release notes (one markdown file per release) ──
  // Not a Starlight collection, so these files don't become pages — the
  // ChangelogFeed component reads them and renders the /changelog/ feed.
  // Frontmatter holds the meta; the markdown body holds the notes:
  //   ## New features        (or "Improvements" / "Fixes")
  //   **Item title** — one-line description
  changelog: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/changelog' }),
    schema: z.object({
      version: z.string(),
      date: z.string(),                 // e.g. "June 16, 2026"
      latest: z.boolean().default(false),
      headline: z.string(),
      // Which product feed this release belongs to. Suite entries live as flat
      // files (no need to set this); Arcus entries live under changelog/arcus/
      // and set product: arcus. <ChangelogFeed product="…" /> filters on it.
      product: z.enum(['suite', 'arcus']).default('suite'),
    }),
  }),

  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // ── carried over from your Gatsby frontmatter ──
        page_title: z.string().optional(),       // SEO <title> override
        metadesc: z.string().optional(),          // meta description
        page_id: z.string().optional(),
        warning: z.boolean().optional(),
        noindex: z.boolean().optional(),
        homeQI: z.boolean().optional(),

        // ── API Reference fields (only used on endpoint pages) ──
        // Leave these off for normal doc pages.
        api: z
          .object({
            method: z.enum(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']),
            path: z.string(),
            baseUrl: z.string().default('https://app.testsigma.com/api/v1'),
            pathParams: z.array(z.object({ name: z.string(), desc: z.string() })).default([]),
            query: z.array(z.object({ name: z.string(), desc: z.string() })).default([]),
            bodyFields: z.array(z.object({ name: z.string(), desc: z.string() })).default([]),
            // A JSON request body — an object, or an array of objects for
            // batch endpoints (e.g. updating multiple results in one call).
            requestBody: z.union([z.record(z.any()), z.array(z.any())]).optional(),
            // Multipart/form-data requests (e.g. file uploads). When set, the
            // request samples use form fields (`-F`) instead of a JSON body.
            // Use a `@filename` value to render a file field (curl `-F field=@file`).
            formData: z.record(z.any()).optional(),
            response: z.any(),
            status: z.number().default(200),
            statusText: z.string().default('OK'),
            responseAttributes: z.array(z.object({ name: z.string(), desc: z.string() })).default([]),
          })
          .optional(),
      }),
    }),
  }),
};
