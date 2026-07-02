# SEO Fixes Plan

## Context

The current Astro SEO audit found five improvement areas:

1. Rendered package/gallery images can output empty or invalid `alt` attributes.
2. Structured data is emitted as separate JSON-LD blocks; the user asked what that means.
3. Schema/GEO discovery endpoints are missing.
4. `llms.txt` already exists and should be kept.
5. OG images should be normalized to a standard social preview size.

Goal: improve technical SEO, accessibility, and AI/search discovery without changing page content strategy or visual design.

## Clarification: what “linked structured data graph” means

Right now pages can output multiple independent JSON-LD objects, for example `Organization`, `WebSite`, `BreadcrumbList`, `FAQPage`, or `Product`. A linked graph means these objects share stable `@id` URLs and reference each other, so crawlers understand they belong to the same page and business.

Example idea:

- `https://www.sungkargroup.com/#organization` identifies Sungkar Group.
- `https://www.sungkargroup.com/#website` identifies the website and points to the organization as publisher.
- `https://www.sungkargroup.com/paket-wisata/.../#webpage` identifies one package page and points to the website and breadcrumb.
- The page’s `Product` or `Service` schema points back to the same page and provider.

This does not change visible UI. It makes structured data cleaner and easier for Google/AI systems to interpret.

## Approach

Use the existing custom SEO system rather than replacing it wholesale. The site already has:

- `src/components/seo/SEOMeta.astro`
- `src/components/seo/StructuredData.astro`
- `src/lib/schemas.ts`
- `src/lib/site-config.ts`
- `src/lib/sitemap.ts`
- `public/robots.txt`
- `public/llms.txt`
- `scripts/generate-og-images.mjs`

Recommended implementation:

1. Make image `alt` generation automatic from available props/data, especially package gallery images.
2. Add build-time SEO validation to content schemas and/or existing structured content validation.
3. Convert structured data helpers toward stable `@id` references and page-aware graph output.
4. Add schema discovery files/endpoints: `/schema/*.json`, `/schemamap.xml`, and `/.well-known/api-catalog`.
5. Normalize generated OG image dimensions to `1200x675` and ensure metadata reports those dimensions.

## Files to modify

Likely files:

- `src/components/pages/PackageDetailPage.astro`
- `src/components/packages/PackageGallery.tsx`
- `src/components/ui/OptimizedImage.astro`
- `src/content.config.ts`
- `scripts/validate-structured-content.mjs`
- `src/lib/schemas.ts`
- `src/layouts/MainLayout.astro`
- `src/components/seo/StructuredData.astro`
- `src/pages/schema/index.json.ts` or `src/pages/schema/[type].json.ts`
- `src/pages/schemamap.xml.ts`
- `src/pages/.well-known/api-catalog.ts`
- `public/robots.txt`
- `scripts/generate-og-images.mjs`
- `src/assets/images/og/*` after regeneration

## Reuse

Existing code/utilities to reuse:

- `OptimizedImage` in `src/components/ui/OptimizedImage.astro` for consistent image output.
- `tour.title`, `cabin.name`, destination titles, and gallery indexes as automatic alt text sources.
- `generateOrganizationSchema`, `generateWebsiteSchema`, `generateBreadcrumbSchema`, `generateProductSchema`, `generateServiceSchema`, and FAQ helpers in `src/lib/schemas.ts`.
- `SITE_URL` from `src/lib/site-config.ts` for all absolute IDs and endpoint URLs.
- Existing sitemap logic in `src/lib/sitemap.ts` as a pattern for XML endpoint generation.
- Existing `public/llms.txt` as the AI discovery summary.
- Existing `scripts/generate-og-images.mjs` for OG image generation.

## Steps

- [ ] Fix automatic image alt text.
  - [ ] Update package detail gallery `alt=""` to derive from package title and image index, e.g. `${tour.title} - foto ${i + 1}`.
  - [ ] Update React package gallery thumbnails from empty alt to derived labels using available props; if needed, pass `itemName`/`altBase` into `PackageGallery`.
  - [ ] Keep truly decorative images empty only when they are not useful content, and ensure output is valid `alt=""`.
  - [ ] Re-run rendered HTML scan for missing/invalid image alt output.

- [ ] Add SEO metadata validation.
  - [ ] Add Zod length constraints in `src/content.config.ts` for `title` and `description` in blog/guides collections.
  - [ ] Extend structured content validation for MDX/data-driven tour packages, accommodations, destinations, and vehicles if they do not use Astro content collections.
  - [ ] Use target ranges: title `5–120`, description `15–160`.
  - [ ] Report actionable file paths and fields when validation fails.

- [ ] Implement linked structured data graph.
  - [ ] Add schema helpers for stable IDs: organization ID, website ID, webpage ID, breadcrumb ID, product/service ID.
  - [ ] Update organization and website schemas to include `@id` and references like `publisher`/`isPartOf` where appropriate.
  - [ ] Add a page graph helper that composes page-level schema objects into one `@graph` where practical.
  - [ ] Preserve existing page-specific schemas: FAQ, ContactPage, Product, Service, TouristAttraction, BreadcrumbList.
  - [ ] Ensure all schema URLs are absolute and based on `SITE_URL`.

- [ ] Add schema/GEO discovery endpoints.
  - [ ] Add `/schema/index.json` or equivalent route listing available schema resources.
  - [ ] Add schema JSON endpoints for core entities/pages where feasible.
  - [ ] Add `/schemamap.xml` listing schema endpoint URLs.
  - [ ] Add `/.well-known/api-catalog` describing sitemap, feed, `llms.txt`, schema endpoints, and schemamap.
  - [ ] Update `public/robots.txt` with a live `Schemamap:` directive once `/schemamap.xml` exists.

- [ ] Normalize OG images.
  - [ ] Change `scripts/generate-og-images.mjs` from `1200x630` to `1200x675`.
  - [ ] Regenerate OG image assets.
  - [ ] Check generated image metadata and rendered OG tags for consistent width/height.
  - [ ] Prefer JPEG or PNG for social compatibility if current WebP previews are not accepted by target platforms; otherwise keep WebP only if confirmed acceptable for the site’s channels.

## Verification

Run verification only after all implementation tasks are complete, so any issues can be fixed in one final pass. Order matters: format first, then checks/validation/build.

- [ ] Run `npm run format`.
- [ ] Run `npm run check`.
- [ ] Run `npm run validate` and `npm run validate:structured`.
- [ ] Run `npm run build`.
- [ ] Scan `dist/**/*.html` for invalid image alt output.
- [ ] Confirm generated files exist:
  - [ ] `dist/sitemap-index.xml`
  - [ ] `dist/feed.xml`
  - [ ] `dist/llms.txt`
  - [ ] `dist/schemamap.xml`
  - [ ] `dist/.well-known/api-catalog`
  - [ ] schema JSON endpoint output
- [ ] Inspect homepage and one package page head output for canonical, hreflang, OG, robots, and JSON-LD.
- [ ] Validate a package URL with Google Rich Results Test after deploy.
- [ ] Validate `/robots.txt`, `/sitemap-index.xml`, `/schemamap.xml`, and `/.well-known/api-catalog` on production after deploy.

## Notes / decisions

- User confirmed:
  - Alt text should be automated from props/data.
  - Linked structured data graph should be implemented.
  - Schema discovery endpoints are approved.
  - OG images should be normalized.
- Keep this as a technical SEO pass; keyword research and page strategy can come after these fixes.
