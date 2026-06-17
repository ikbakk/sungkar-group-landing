---
name: schema-seo
description: >
  Manage JSON-LD structured data, OpenGraph metadata, and SEO meta tags for the Sungkar Group
  landing page. Trigger when the user asks to add/modify JSON-LD schemas, update OG meta tags,
  change page titles/descriptions for SEO, add schema markup for a new page/page type, fix
  structured data errors, update Twitter Card data, or optimize for search engines. Also trigger
  on "add schema to the FAQ", "fix OG image", "update page description", "add Product schema",
  or "structured data is wrong". Does NOT handle content translation (use i18n-content-data),
  UI string translations (use locale-ui-strings), or navigation (use navigation skill).
weight: 7
compatibility:
  - required_tools:
      - read
      - edit
      - bash
      - write
    required_commands:
      - npm test
      - npm run check
---

# Schema & SEO Skill

Manage JSON-LD structured data, OpenGraph metadata, and SEO meta tags.

## Architecture Overview

SEO is managed across four layers:

```
Layer 1: JSON-LD Schemas    → src/lib/schemas.ts           (10 schema generators)
Layer 2: OG Metadata         → src/lib/og-metadata.ts      (page-level + dynamic helpers)
Layer 3: Meta Tags           → src/components/seo/SEOMeta.astro (renders <title>, <meta>, OG)
Layer 4: StructuredData      → src/components/seo/StructuredData.astro (renders <script type="application/ld+json">)
```

At runtime, `MainLayout.astro` renders:
- `<SEOMeta>` for `<title>`, meta description, OG tags, canonical URL
- `<StructuredData>` for Organization + Website schema on every page
- Individual pages add additional schemas via `<StructuredData schema={...} />`

## 1. JSON-LD Schemas (`src/lib/schemas.ts`)

### Available Generators

| Generator | Schema Type | Used On |
|---|---|---|
| `generateOrganizationSchema(siteUrl)` | Organization | Every page (via MainLayout) |
| `generateWebsiteSchema(siteUrl)` | WebSite | Every page (via MainLayout) |
| `generateLocalBusinessSchema(siteUrl)` | LocalBusiness | Contact page |
| `generateBreadcrumbSchema(items, siteUrl)` | BreadcrumbList | Pages with breadcrumbs |
| `generateFAQPageSchema(faqs)` | FAQPage | FAQ sections |
| `generateTouristAttractionSchema(title, desc, image, siteUrl, slug, region?)` | TouristAttraction | Destination detail pages |
| `generateProductSchema(name, desc, price, image, url, duration?)` | Product | Tour package detail pages |
| `generateHowToSchema(title, desc, steps)` | HowTo | Travel guide pages |
| `generateArticleSchema(title, desc, image, siteUrl, slug, datePublished, dateModified?)` | NewsArticle | Blog posts |
| `generateContactPageSchema(siteUrl, businessInfo)` | LocalBusiness | Contact page |

### Adding a New Schema Generator

1. Add the generator function to `src/lib/schemas.ts` following the existing pattern
2. Update the `SchemaType` union if introducing a new schema category
3. The function should return a plain object with `@context`, `@type`, and relevant fields
4. All image URLs must be absolute (use `new URL(image.src, SITE_URL).toString()`)
5. Test with `npm test` (there are tests for schema output shapes)

### Schema URL Rules

```typescript
// Always use SITE_URL for absolute URLs:
import { SITE_URL } from "@/lib/site-config";

// Image URLs must be absolute:
`${siteUrl}/logo.png`
new URL(image.src, SITE_URL).toString()

// Page URLs:
`${siteUrl}/destinasi/${slug}`
```

### Schema Best Practices

- **FAQPage**: Each Q&A pair must be unique site-wide (Google penalizes duplicates)
- **Product**: Use `"https://schema.org/ContactForPrice"` for packages without fixed pricing
- **HowTo**: Steps map to guide sections — one step per major section
- **Breadcrumb**: Order from home to current page, matching breadcrumb component
- **AggregateRating**: Uses `reviewStats` from `@/lib/content/reviews`

## 2. OG Metadata (`src/lib/og-metadata.ts`)

### Static Page OG Data

Every static page has an entry in `pageOGMetadata`:

```typescript
export const pageOGMetadata: Record<string, OGMetadata> = {
  "/tentang-kami": {
    title: "Tentang Kami | Sungkar Group - Tour and Travel",
    description: "SEO description under 160 chars",
    image: HERO.lombok,       // ImageMetadata import
    imageAlt: "Alt text",
  },
  // ...
};
```

### Adding a New Static Page Entry

1. Import the OG image at the top of the file
2. Add entry with the page path as key
3. Follow existing format: `title`, `description` (< 160 chars), `image`, `imageAlt`
4. The `getPageOGMetadata(pathname)` function auto-resolves parent paths for fallback

### Dynamic OG Helpers

For detail pages, use the typed helpers:

```typescript
getPackageOGMetadata(title, description, image, imageAlt)
getDestinationOGMetadata(title, description, image, imageAlt)
```

These append "| Sungkar Group - Tour and Travel" to the title automatically.

### OG Image Requirements

- **Dimensions**: 1200×630px (1.91:1 aspect ratio)
- **Format**: WebP preferred, JPEG fallback
- **Size**: < 2MB for social media compliance
- **File location**: `src/assets/images/og/` for OG-specific images, or reuse category images

### Overriding in Pages

```astro
<MainLayout
  title="Custom Page Title"
  description="Custom description"
  image={CUSTOM_IMAGE}
  imageAlt="Custom alt text"
>
  <!-- Page content -->
</MainLayout>
```

When `image` is passed, it overrides the pageOGMetadata entry. When not passed, `getPageOGMetadata()` auto-resolves.

## 3. Per-Locale SEO

### Where Locale-Specific SEO Lives

In `src/lib/i18n/{locale}/og-metadata.ts`:
- Per-locale OG data files alongside other locale content
- Loaded via `loadContent(locale, "og-metadata")`
- Title, description, OG image alt all localized

### Internationalization Best Practices

- **English**: Target international travelers — use keywords like "Lombok tour", "private tour"
- **Arabic**: RTL text renders correctly in social previews — use Arabic script
- **Chinese**: Simplified Chinese, keep English proper names alongside
- **Malay**: Use Bahasa Malaysia keywords for regional search
- **Indonesian**: Local SEO focus — use Indonesian travel keywords

## 4. SEO Meta Component (`SEOMeta.astro`)

This component renders in `<head>`:
- `<title>` — Page-specific, falls back to OG metadata
- `<meta name="description">` — Under 160 chars
- `<meta property="og:*">` — All OG tags
- `<meta name="twitter:*">` — Twitter Card (summary_large_image)
- `<link rel="canonical">` — Canonical URL
- `<meta name="robots">` — `noindex` support via prop
- `<html dir="rtl">` — For Arabic locale

## 5. Adding Schema to a Page

```astro
---
import StructuredData from "@/components/seo/StructuredData.astro";
import { generateFAQPageSchema } from "@/lib/schemas";
import { faqItems } from "@/lib/content/faqs";

const faqSchema = generateFAQPageSchema(faqItems);
---

<MainLayout ...>
  <StructuredData schema={faqSchema} />
  <!-- Page content -->
</MainLayout>
```

Pages can include multiple `<StructuredData>` instances — the component renders each as a separate `<script type="application/ld+json">` block.

## Validation

```bash
npm test          # Schema validation tests (data.test.ts) pass
npm run check     # TypeScript — 0 new errors
# After deploy: test URLs in Google Rich Results Test
# https://search.google.com/test/rich-results
```
