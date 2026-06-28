# Sungkar Group Landing

Multi-language landing site for Sungkar Group — Lombok tour operator. 268 pages, 5 languages (id/en/ar/ms/zh), static site.

## Commands

| Command                | Action                         |
| ---------------------- | ------------------------------ |
| `npm install`          | Install dependencies           |
| `npm run dev`          | Dev server at `localhost:4321` |
| `npm run build`        | Build to `dist/`               |
| `npm run preview`      | Preview production build       |
| `npm test`             | Run vitest                     |
| `npm run check`        | Astro type checking            |
| `npm run format`       | Auto-format all files          |
| `npm run format:check` | Check formatting (CI)          |
| `npm run astro ...`    | Astro CLI                      |

### Content Generation

| Command                      | Action                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `npm run content:build`      | Generate normalized runtime content into `src/generated/content/*`                                            |
| `npm run content:watch`      | Watch `scripts/data/` and regenerate normalized runtime content                                               |
| `npm run generate:tours`     | JSON in `scripts/data/packages/*/` → `src/content/tourPackages/{slug}/{locale}.mdx`                           |
| `npm run generate:content`   | JSON in `scripts/data/{accommodations,car-rental,destinations}/*/` → `src/content/{type}/{slug}/{locale}.mdx` |
| `npm run generate:all`       | Both of the above                                                                                             |
| `npm run images:barrel`      | Regenerate `src/assets/images/index.ts`                                                                       |
| `npm run generate:og-images` | Generate OG placeholder images for all page types                                                             |

### Validation & Formatting

| Command                       | Action                                                      |
| ----------------------------- | ----------------------------------------------------------- |
| `npm test`                    | Vitest — validates all MDX frontmatter against Zod schemas  |
| `npm run check`               | Astro type checking                                         |
| `npm run validate`            | Validates blog + guide MDX frontmatter                      |
| `npm run validate:structured` | Validates structured JSON source completeness and shape     |
| `npm run validate:build`      | Structured validation + runtime content build + Astro check |
| `npm run validate:images`     | Validates barrel file image references                      |
| `npm run check:images`        | Checks blog/guide images exist on disk                      |
| `npm run format:check`        | Check Prettier formatting (CI gate)                         |

## Architecture

### Content (MDX Content Collections)

All structured content lives in `src/content/` as MDX files generated from JSON sources:

| Content        | Generator                  | JSON Source                      | MDX Location                                     |
| -------------- | -------------------------- | -------------------------------- | ------------------------------------------------ |
| Tour packages  | `generate-tour-mdx.mjs`    | `scripts/data/packages/*/`       | `src/content/tourPackages/{slug}/{locale}.mdx`   |
| Accommodations | `generate-content-mdx.mjs` | `scripts/data/accommodations/*/` | `src/content/accommodations/{slug}/{locale}.mdx` |
| Car rental     | `generate-content-mdx.mjs` | `scripts/data/car-rental/*/`     | `src/content/car-rental/{slug}/{locale}.mdx`     |
| Destinations   | `generate-content-mdx.mjs` | `scripts/data/destinations/*/`   | `src/content/destinations/{slug}/{locale}.mdx`   |
| Blog posts     | Write directly             | —                                | `src/content/blog/{slug}/{locale}.mdx`           |
| Travel guides  | Write directly             | —                                | `src/content/guides/{slug}/{locale}.mdx`         |

Each content type has:

- A Zod schema in `src/content.config.ts`
- An async bridge function (`getPackages(locale)`, `getDestinations(locale)`, etc.) in `src/lib/content/{type}/collection.ts`
- Locale-specific translations in the MDX frontmatter (one file per locale)

## Adding Content

### New Tour Package

1. Create `scripts/data/packages/{slug}/main.json` (shared fields) and `scripts/data/packages/{slug}/locales.json` (locale blocks)
2. Run `node scripts/generate-tour-mdx.mjs`
3. Run `npm test` to validate

Each locale reads `title`, `collectionTitle`, `category`, `duration`, `summary`, `highlights`, `itinerary` from the per-locale fields in JSON. Shared fields (`region`, `collectionSlug`, `category`, `images`, `includes`, `excludes`) apply across all locales.

### New Destination / Accommodation / Vehicle

1. Create `scripts/data/{type}/{slug}/main.json` and `scripts/data/{type}/{slug}/locales.json` (`type` is one of `accommodations`, `car-rental`, `destinations`)
2. Run `node scripts/generate-content-mdx.mjs`
3. Run `npm test` to validate

### New Blog Post

Create an MDX file:

```mdx
---
# src/content/blog/cara-pilih-tour-lombok/id.mdx
title: "Cara Memilih Tour Lombok yang Tepat"
description: "Panduan memilih paket wisata Lombok sesuai kebutuhan."
publishDate: 2026-06-17
tags: ["tips", "lombok"]
readingTime: 5
author: "Tim Sungkar Group"
featuredImage: "/images/blog/tips-memilih-tour.webp"
---

Blog content in markdown...
```

For other locales, copy to `{slug}/{locale}.mdx` and translate.

### New Travel Guide

```mdx
---
# src/content/guides/waktu-terbaik-ke-lombok/id.mdx
title: "Waktu Terbaik ke Lombok"
description: "Cari tahu musim terbaik untuk liburan ke Lombok."
region: "lombok"
readingTime: 4
bestFor: ["Wisatawan pertama kali"]
keyTakeaways: ["Mei-Oktober musim kemarau", "November-April musim hujan"]
relatedDestinations: ["kuta-lombok", "gili-trawangan"]
relatedPackages: ["paket-wisata-3-hari-2-malam"]
publishDate: "2026-01-15"
---

Guide content in markdown...
```

## Adding New Images

1. Place the WebP file in the appropriate subdirectory under `src/assets/images/`
2. Run `node scripts/generate-image-barrel.mjs` to regenerate `src/assets/images/index.ts`
3. Import via `import { CATEGORY } from "@/assets/images"`

Image directories:

```
src/assets/images/
├── destinations/     # Destination thumbnails
├── gallery/          # Gallery photos
├── hero/             # Hero section backgrounds
├── brand/            # Logo, OG default
├── accommodations/   # Accommodation placeholders
├── vehicles/         # Vehicle placeholders
└── og/               # OG images (1200×630px WebP)
```

The project uses `ImageSource` (`src/lib/images.ts`), a union type of `ImageMetadata | string`. Use helper functions `getImageSrc()`, `getImageWidth()`, `getImageHeight()`, `isRemoteImage()` instead of direct `.src` access.

## i18n Architecture

| Concept                       | File                         |
| ----------------------------- | ---------------------------- |
| Locale list + helpers         | `src/lib/i18n/index.ts`      |
| UI string translations        | `src/lib/i18n/ui-strings.ts` |
| Path mapping (ID → EN routes) | `src/lib/i18n/localize.ts`   |
| Content loader with fallback  | `src/lib/i18n/loader.ts`     |
| Content translation files     | `src/lib/i18n/{locale}/`     |

- `id` = default locale (no prefix in URL)
- `en, ar, ms, zh` = prefixed (`/en/about`, `/ar/about`)
- RTL support for Arabic via `<html dir="rtl">` + Cairo Variable font

## Structured Data (JSON-LD)

Schemas are generated by `src/lib/schemas.ts`:

| Page                      | Schema                                           | Auto?               |
| ------------------------- | ------------------------------------------------ | ------------------- |
| Home, About, Contact, FAQ | `Organization` + `WebSite`                       | ✅ via `MainLayout` |
| Tour package detail       | `Product`, `BreadcrumbList`, `FAQPage`           | ✅ via template     |
| Destination detail        | `TouristAttraction`, `BreadcrumbList`, `FAQPage` | ✅                  |
| Car rental detail         | `Product`, `BreadcrumbList`                      | ✅                  |
| Blog post                 | `NewsArticle`                                    | ✅                  |
| Travel guide              | `HowTo`                                          | ✅                  |

Verify with [Google Rich Results Test](https://search.google.com/test/rich-results).

## Pre-deployment Checklist

- [ ] `npm test` — all 1,101 passing
- [ ] `npm run check` — 0 type errors
- [ ] `npm run validate:structured` — structured content source is complete
- [ ] `npm run validate:images` — all images referenced
- [ ] `npm run build` — 0 errors, all pages generated
- [ ] Check `dist/sitemap-index.xml` — all expected URLs present
- [ ] Check `dist/robots.txt` — not blocking important pages
- [ ] Preview: `npm run preview` + open several representative pages

## Testing

Vitest with test files in `tests/`. Config: `vitest.config.ts` — alias `@/` to `src/`.
