---
name: content-collections
description: >
  Manage Astro v6 content collections (blog + travel guides) for the Sungkar Group landing page.
  Trigger when the user asks to create a new blog post or travel guide, add/modify MDX files,
  update content collection schemas, add a new locale to a post, edit frontmatter, or fix
  collection validation errors. Also trigger on "write a new blog post", "create a travel guide",
  "add Chinese version of the blog", "frontmatter is wrong", or "publish a new article".
  Does NOT handle UI components (use component-library), page routing (use page-routing-i18n),
  or content data types (use content-architecture).
weight: 8
compatibility:
  - required_tools:
      - read
      - edit
      - bash
      - write
    required_commands:
      - npm run validate
      - npm test
      - npm run check
---

# Content Collections Skill

Manage Astro v6 content collections for blog posts and travel guides.

## Collection Configuration (`src/content.config.ts`)

Two collections are configured:

```typescript
const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    readingTime: z.number(),
    author: z.string().optional(),
    featuredImage: z.string().optional(),
    relatedDestinations: z.array(z.string()).optional(),
    relatedPackages: z.array(z.string()).optional(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    region: z.enum(["lombok", "sumbawa", "labuan-bajo", "general"]),
    readingTime: z.number(),
    keyTakeaways: z.array(z.string()),
    bestFor: z.array(z.string()),
    relatedDestinations: z.array(z.string()),
    relatedPackages: z.array(z.string()),
    publishDate: z.string(),
    featuredImage: z.string().optional(),
  }),
});
```

## MDX File Structure

### Blog Posts

```
src/content/blog/{slug}/
├── id.mdx     # Indonesian (source — always create first)
├── en.mdx     # English
├── ar.mdx     # Arabic
├── ms.mdx     # Malay
└── zh.mdx     # Chinese
```

### Travel Guides

```
src/content/guides/{slug}/
├── id.mdx     # Indonesian (source)
├── en.mdx     # English
├── ar.mdx     # Arabic
├── ms.mdx     # Malay
└── zh.mdx     # Chinese
```

## Creating a New Blog Post

### Step 1: Write the Indonesian source

Create `src/content/blog/{slug}/id.mdx`:

```mdx
---
title: "Post Title in Indonesian"
description: "SEO description under 160 chars"
publishDate: 2026-06-18
tags: ["lombok", "travel-tips", "budaya"]
readingTime: 5
author: "Sungkar Group"
featuredImage: "../../../assets/images/destinations/lombok.webp"
relatedDestinations: ["gili", "rinjani"]
relatedPackages: ["lombok-3d2n-package"]
---

## Section Heading

Content goes here. Use standard Markdown and MDX features.

- Lists
- **Bold text**
- [Links](/destinasi/lombok)

> Blockquotes for testimonials or highlights.

### Internal Links

Use non-locale-prefixed paths:
- `/destinasi/gili` — Astro handles locale prefixing
- `/paket-wisata/lombok/3-hari-2-malam/...`
```

### Step 2: Validate the source

```bash
npm run validate   # MDX frontmatter validation
```

### Step 3: Create locale copies

Create `{locale}.mdx` for each of `en`, `ar`, `ms`, `zh`:

```mdx
---
title: "Translated Title"
description: "Translated SEO description under 160 chars"
publishDate: 2026-06-18           # Same date
tags: ["lombok", "travel-tips"]    # Same tags
readingTime: 5                     # Same reading time
featuredImage: "../../../assets/images/destinations/lombok.webp"  # Same path
relatedDestinations: ["gili", "rinjani"]   # Same slugs
relatedPackages: ["lombok-3d2n-package"]   # Same slugs
---

Translated content body.
```

**Frontmatter rules:**
- `title` — **Must translate** for each locale
- `description` — **Must translate** (under 160 chars for SEO)
- `publishDate` — Same across all locales
- `tags` — Same across all locales (use English tags)
- `readingTime` — Same (no need to recalculate)
- `featuredImage` — Same asset path (images are shared)
- `relatedDestinations`/`relatedPackages` — Same slugs
- `author` — Same or translated
- `region` (guides only) — Same across locales

### Step 4: Write the MDX body

**Translating MDX body:**
- Translate all prose fully for each locale
- Preserve all Markdown formatting, image references, and internal links
- Internal links use non-locale-prefixed paths
- Keep formatting elements (headings, lists, blockquotes) intact
- Image references remain unchanged (shared assets)

### Step 5: Validate everything

```bash
npm run validate   # Validates all MDX frontmatter
npm test           # All tests pass
npm run check      # Type check — 0 new errors
```

## Creating a New Travel Guide

Same process as blog. Guide-specific frontmatter:

```mdx
---
title: "Guide Title"
description: "SEO description"
region: "lombok"                    # "lombok" | "sumbawa" | "labuan-bajo" | "general"
readingTime: 8
keyTakeaways:                       # Shown in the KeyTakeaways component
  - "Key takeaway 1"
  - "Key takeaway 2"
bestFor:
  - "Solo travelers"
  - "Adventure seekers"
relatedDestinations:
  - "gili"
  - "rinjani"
relatedPackages:
  - "lombok-3d2n-package"
publishDate: "2026-06-18"
featuredImage: "../../../assets/images/destinations/lombok.webp"
---
```

## Page Integration

Collection data is consumed in pages via `astro:content`:

```astro
---
import { getCollection } from "astro:content";

const allPosts = await getCollection("blog");
// Filter by locale:
const localePosts = allPosts.filter(
  (post) => post.id.endsWith(`/${locale}.mdx`)
);
// Each post has: data (frontmatter), body (MDX content), render(), id
---
```

This happens in `src/pages/blog/index.astro` and `src/pages/blog/[slug].astro` (and locale equivalents).

## Editing an Existing Post

### Update frontmatter
1. Edit `{locale}.mdx` frontmatter
2. Keep non-translated fields consistent across locales
3. Validate with `npm run validate`

### Update body content
1. Edit the MDX body in each locale file
2. Run `npm run validate`

### Add a new locale to an existing post
1. Copy an existing locale file as template
2. Translate the frontmatter `title`/`description` and body
3. Keep all other frontmatter fields identical

## Adding a New Collection

If adding a new content collection type:
1. Add to `src/content.config.ts` with `defineCollection()`
2. Create the directory `src/content/{collection}/`
3. Create MDX files following the `{slug}/{locale}.mdx` pattern
4. Add pages at `src/pages/{route}/` and `src/pages/[locale]/{en-route}/`
5. Update `docs/CODEBASE.md`

## Validation Commands

```bash
npm run validate   # MDX frontmatter validation (scripts/validate.mjs)
npm test           # Vitest passes
npm run check      # TypeScript — 0 new errors
npm run build      # Production build (catches broken MDX)
```
