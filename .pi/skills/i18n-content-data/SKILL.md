---
name: i18n-content-data
description: >
  Translate and manage content-level i18n data for the Sungkar Group landing page
  (id, en, ar, ms, zh). Trigger when the user asks to translate, create, edit,
  audit, or fix content data: tour package itineraries/includes/excludes,
  destination descriptions, vehicle features, accommodation perks, FAQ Q&A pairs,
  or MDX blog/travel-guide posts. Also trigger when the user says "some vehicle
  descriptions are still in Indonesian" or "translate the itinerary for Chinese"
  or "add a new FAQ question in all locales". This skill does NOT handle UI
  strings (navigation, footer, buttons, labels), page-level copy (landing hero,
  about story), OG metadata, schemas, or regions — use locale-ui-strings for that.
weight: 2
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

# i18n Content Data Skill

Manage content-level i18n data across 5 locales (`id`, `en`, `ar`, `ms`, `zh`) for the Sungkar Group landing page.

## Content Data Layers

Content data exists at two levels:

### Level 1: Source (Indonesian) — `src/lib/content/`
The authoritative content layer. All content originates in Indonesian (id). When adding new content, ALWAYS create it here first, then create locale copies.

### Level 2: Locale copies — `src/lib/i18n/{locale}/`
Each locale has a mirror of the content structure. These files are loaded via `src/lib/i18n/loader.ts` and consumed by page components through `loadContent(locale, module)`.

## File Reference

### Tour Packages — `src/lib/i18n/{locale}/tourPackages/`

Structure mirrors `src/lib/content/tourPackages/`:

```
{locale}/tourPackages/
├── index.ts                    # Barrel: aggregates lombok + sumbawa + labuan-bajo
├── lombok/
│   ├── index.ts                # Barrel: aggregates 1d, 2d1n, 3d2n, 4d3n, openTrip
│   ├── 1d.ts                   # 1-day packages (TourPackage[])
│   ├── 2d1n.ts                 # 2-day-1-night packages
│   ├── 3d2n.ts                 # 3-day-2-night packages
│   ├── 4d3n.ts                 # 4-day-3-night packages
│   └── openTrip.ts             # Open trip (e.g. MotoGP Mandalika)
├── sumbawa/
│   └── index.ts                # Sumbawa packages
└── labuan-bajo/
    └── index.ts                # Labuan Bajo packages
```

**Fields that need translation per locale:**

| Field | Translates? | Notes |
|---|---|---|
| `title` | ✅ Always | Package display name |
| `duration` | ✅ Always | e.g. "1 Day" → "1天" |
| `category` | ✅ Always | e.g. "Lombok Tour Packages" |
| `summary` | ✅ Always | Short description |
| `highlights` | ✅ Always | Array of strings |
| `itinerary` | ✅ Always | Array of day-by-day descriptions |
| `includes` | ✅ Always | Array of inclusions |
| `excludes` | ✅ Always | Array of exclusions |
| `slug` | ❌ Never | Must match source; use `slugify(data.title)` from content layer title |
| `collectionSlug` | ❌ Never | Internal routing key |
| `region` | ❌ Never | Internal routing key |
| `images` | ❌ Never | Shared assets |
| `featured` | ❌ Never | Boolean flag |

**IMPORTANT: Slugs must stay consistent.** The locale files use `createPackage(COLLECTIONS.ONE_DAY, {title: "...", ...})` which calls `slugify(data.title)`. Since locale titles are translated (non-ASCII), `slugify()` produces empty strings. To fix this, EITHER:

Option A — Define packages directly (no `createPackage`):
```typescript
{
  slug: "sendang-gile-tiu-kelep-waterfall-tour-package",  // Must match content slug
  collectionSlug: "1-hari",
  collectionTitle: "1日套餐",
  title: "...",
  region: "lombok",
  // ...
}
```

Option B — Override after `createPackage`:
```typescript
const pkg = createPackage(COLLECTIONS.ONE_DAY, { title: "...", ... });
pkg.collectionTitle = "1日套餐";  // Override collection title
// slug stays correct from content-layer title
return pkg;
```

### Destinations Data — `src/lib/i18n/{locale}/destinationsData.ts`

Per-locale copies of destination descriptions, highlights, things-to-do. Mirrors `src/lib/content/destinations/data.ts`.

### Vehicle Data — `src/lib/i18n/{locale}/sewaMobilData.ts`

Per-locale copies of vehicle features, best-for tags, descriptions. Mirrors `src/lib/content/car-rental/data.ts`.

### Accommodation Data — `src/lib/i18n/{locale}/akomodasiData.ts`

Per-locale copies of accommodation perks, highlights, descriptions. Mirrors `src/lib/content/accommodations/data.ts`.

### FAQ Data — `src/lib/i18n/{locale}/faqs/`

Per-topic FAQ Q&A arrays:

```
{locale}/faqs/
├── about.ts          # Questions about the company
├── akomodasi.ts      # Questions about accommodations
├── contact.ts        # Questions about contact/booking
├── general.ts        # General travel questions
├── package.ts        # Questions about tour packages
├── reviews.ts        # Questions about reviews
└── sewa-mobil.ts     # Questions about car rental
```

Aggregated by `{locale}/faq/data.ts` which builds `faqItems` from all topic files.

**Each FAQ item has:**
- `question` — ✅ Must translate
- `answer` — ✅ Must translate

### Blog & Travel Guide Posts — `src/content/{blog,guides}/{slug}/{locale}.mdx`

MDX files per slug per locale. Each post dir contains 5 `.mdx` files:
- `id.mdx` — Indonesian (source)
- `en.mdx` — English
- `ar.mdx` — Arabic
- `ms.mdx` — Malay
- `zh.mdx` — Chinese

**When creating a new blog/guide post:**
1. Write `id.mdx` first (the source)
2. Create locale copies using the MDX frontmatter fields:
   - `title` (string)
   - `description` (string, keep under 160 chars for SEO)
   - `image` (shared asset path)
   - `publishDate` (same across locales)
   - `tags`/`region` (same across locales)
3. The MDX body content needs full translation

**Translating MDX content:**
- Keep all frontmatter fields except `title` and `description` the same across locales
- Translate the MDX body fully
- Preserve all Markdown formatting, image references, and internal links
- For internal links, use the non-locale-prefixed path (e.g., `/paket-wisata/`) — the Astro i18n system handles locale prefixing

## Translation Rules Per Locale

### English (en)
- Natural English, not literal translation from Indonesian
- Tour package titles: descriptive, SEO-friendly
- Use "Day 1 - " prefix for itinerary items

### Malay (ms)
- Use Bahasa Malaysia (not Indonesian)
- Key differences from Indonesian:
  - `pakej` (not `paket`)
  - `penginapan` (not `akomodasi`)
  - `perkhidmatan` (not `layanan`)
  - `tempah`/`tempahan` (not `pesan`/`pemesanan`)
  - `ulasan` (same in both)
  - `pemandu` (not `sopir`)
  - `kenderaan` (not `kendaraan`)
  - `insurans` (not `asuransi`)
  - `kereta` (not `mobil`)

### Arabic (ar)
- Arabic script (UTF-8), RTL
- Day prefix: `اليوم 1 - `
- Numbers remain LTR in RTL text
- Proper names (Lombok, Gili, etc.) stay in Latin script or transliterate

### Chinese (zh)
- Simplified Chinese characters
- Day prefix: `第1天 - `
- Keep English proper names (Lombok, Gili, Sumbawa) alongside Chinese translations

## SEO Integration

Content data directly impacts SEO:

### Tour Packages
- **Package `title`** → Product schema name, Google snippet title
- **`summary`** → Meta description, JSON-LD product description
- **`highlights`** → Appear in rich snippets, key benefits
- **`itinerary`** → Structured as HowTo step schema
- **`includes`/`excludes`** → Feature list in product schema
- **Duration** → Product schema `duration` field

Guidelines:
- Keep `summary` under 160 characters for search snippet
- Include locale-appropriate keywords in package titles
- `highlights` should contain the 4-8 most unique selling points per package
- Itinerary items should be descriptive but concise

### Destinations
- **`title`** → Page title for destination detail
- **`summary`** → Meta description
- **`thingsToDo`** → Key content for rich snippets

### Vehicles
- **`features`** → Structured feature list
- **`bestFor`** → Contextual keywords

### Accommodations
- **`perks`** → Feature list for local business schema
- **`highlights`** → Visible in search snippets

### FAQ Data
- FAQ schema auto-generated from `faqItems` — used in Google rich results
- Each Q&A pair must be unique across the site (Google penalizes duplicate FAQ schema)
- Answers must be substantive (not just "Yes" or "No")

### Blog & Guides (MDX)
- Frontmatter `title` → `<title>` tag
- Frontmatter `description` → `meta description` tag
- MDX `h1`, `h2` → Heading hierarchy for search
- Internal links between posts → Site structure signals

## Workflow

### 1. Translate a new tour package

1. Add the package to `src/lib/content/tourPackages/{region}.ts` first (Indonesian)
2. Create locale copies in `src/lib/i18n/{locale}/tourPackages/{region}/`
3. For `en`, `ms`: Direct translation using the patterns below
4. For `ar`, `zh`: Use locale-appropriate scripts and day prefixes
5. Add to the locale barrel (`index.ts`) for the region
6. If the package introduces a new `collectionSlug`, add a `titleMap` entry in the locale `navigationData.ts` (covered by `locale-ui-strings` skill)

### 2. Translate a batch of content files

When translating the same content across all 4 non-ID locales:
1. Start with `en` (easiest source to translate from)
2. `ms`: Apply ID→MS word replacement map
3. `zh`: Translate each string to Simplified Chinese
4. `ar`: Translate each string to Arabic script

### 3. Audit for remaining Indonesian/English text

Check for untranslated content in a locale:
```bash
# Check zh for English text in zh data files
python3 -c "
import re
CH = re.compile(r'[\u4e00-\u9fff]')
for f in ['destinationsData.ts', 'sewaMobilData.ts', 'akomodasiData.ts']:
    with open(f'src/lib/i18n/zh/{f}') as fh:
        c = len(CH.findall(fh.read()))
    print(f'zh/{f}: {c} Chinese chars')

# Check tour packages in all locales for remaining Indonesian itinerary text
for loc in en ar ms zh:
    for f in ['3d2n.ts']:
        with open(f'src/lib/i18n/{loc}/tourPackages/lombok/{f}') as fh:
            t = fh.read()
        hari = t.count('Hari')
        print(f'{loc}/tourPackages/lombok/{f}: Hari={hari}')
"
```

### 4. Add a new FAQ question

1. Add to `src/lib/content/faqs/{topic}.ts` (Indonesian source)
2. Add to `src/lib/i18n/en/faqs/{topic}.ts` (English)
3. Add to all other locale `faqs/{topic}.ts` files
4. The `faq/data.ts` barrel auto-aggregates

### 5. Create a new blog/guide post

1. Create `src/content/{blog,guides}/{slug}/id.mdx`
2. Copy to `en.mdx`, `ar.mdx`, `ms.mdx`, `zh.mdx`
3. Translate the MDX body and frontmatter `title`/`description`
4. Validate with `npm run validate`

## Validation

After ANY content data change:
```bash
npm test          # 58 vitest tests must pass
npm run check     # Astro type check — 0 new errors
npm run validate  # MDX frontmatter validation (if blog/guide was edited)
```
