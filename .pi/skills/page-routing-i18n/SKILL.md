---
name: page-routing-i18n
description: >
  Create and manage i18n-aware pages/routes for the Sungkar Group landing page (id, en, ar, ms, zh).
  Trigger when the user asks to add a new page, create a new route, set up locale-specific pages,
  add Astro page files for a new section, or wire up page-level content loading with i18n.
  Also trigger on "add a new page", "create about page route", "set up i18n for new section",
  or "add [locale] version of page". Does NOT handle UI components (use component-library),
  adding content data (use content-architecture), or navigation items (use navigation skill).
weight: 5
compatibility:
  - required_tools:
      - read
      - edit
      - bash
      - write
    required_commands:
      - npm test
      - npm run check
      - npm run build
---

# Page Routing & i18n Skill

Create and manage i18n-aware pages for the Sungkar Group landing page.

## Routing Architecture

The project uses Astro's file-based routing with **custom i18n** (not Astro's built-in i18n middleware):

```
src/pages/
├── index.astro                    # / (default locale: id)
├── tentang-kami.astro             # /tentang-kami
├── paket-wisata/                  # /paket-wisata
│   └── [region]/...
├── sewa-mobil/...
├── akomodasi/...
├── blog/...
├── panduan-wisata/...
├── destinasi/...
├── [locale]/                      # Non-default locales: en, ar, ms, zh
│   ├── index.astro                # /en/, /ar/, /ms/, /zh/
│   ├── about.astro                # /en/about, /ar/about, etc.
│   ├── tour-packages/...
│   ├── car-rental/...
│   ├── accommodations/...
│   ├── blog/...
│   ├── travel-guides/...
│   ├── destinations/...
│   └── ...
└── 404.astro
```

**Key rules:**
- Default locale `"id"` → root URLs (`/tentang-kami`, `/paket-wisata/...`)
- Non-default locales `"en"`, `"ar"`, `"ms"`, `"zh"` → `/${locale}/about`, `/${locale}/tour-packages/...`
- The `PATH_MAP` in `src/lib/i18n/localize.ts` maps ID→EN paths and vice versa
- `getStaticPaths()` in `[locale]` pages uses `NON_DEFAULT_LOCALES`

## Adding a New Static Page

### Step 1: Create the ID (default) page

Create `src/pages/{route}.astro`:

```astro
---
import MainLayout from "@/layouts/MainLayout.astro";
import PageHeader from "@/components/site/PageHeader.astro";
import { loadContent } from "@/lib/i18n/loader";
import { t } from "@/lib/i18n/ui-strings";

const locale = "id";
const uiStrings = t(locale);

const contentModule = await loadContent(locale, "{feature}");
const { pageContent } = contentModule;

const pageTitle = uiStrings.page.{route};
const pageDescription = pageContent.hero.description;
---

<MainLayout
  title={pageTitle}
  description={pageDescription}
  canonical="/{route}"
  locale={locale}
>
  <PageHeader
    eyebrow={pageContent.hero.eyebrow}
    title={pageContent.hero.title}
    description={pageContent.hero.description}
    breadcrumbs={[
      { label: uiStrings.breadcrumb.home, href: "/" },
      { label: uiStrings.breadcrumb.{route} },
    ]}
  />
  <!-- Section components go here -->
</MainLayout>
```

### Step 2: Create the locale pages

Create `src/pages/[locale]/{en-route}.astro`:

```astro
---
import MainLayout from "@/layouts/MainLayout.astro";
import PageHeader from "@/components/site/PageHeader.astro";
import { loadContent } from "@/lib/i18n/loader";
import { t } from "@/lib/i18n/ui-strings";
import { NON_DEFAULT_LOCALES } from "@/lib/i18n";

export async function getStaticPaths() {
  return NON_DEFAULT_LOCALES.map((locale) => ({ params: { locale } }));
}

const { locale } = Astro.params;
const uiStrings = t(locale!);

const contentModule = await loadContent(locale!, "{feature}");
const { pageContent } = contentModule;

const pageTitle = uiStrings.page.{route};
const pageDescription = pageContent.hero.description;
---

<MainLayout
  title={pageTitle}
  description={pageDescription}
  canonical={`/${locale}/{en-route}`}
  locale={locale}
>
  <PageHeader
    eyebrow={pageContent.hero.eyebrow}
    title={pageContent.hero.title}
    description={pageContent.hero.description}
    breadcrumbs={[
      { label: uiStrings.breadcrumb.home, href: `/${locale}` },
      { label: uiStrings.breadcrumb.{route} },
    ]}
  />
  <!-- Section components go here -->
</MainLayout>
```

### Step 3: Update PATH_MAP in `src/lib/i18n/localize.ts`

Add the ID→EN path mapping:
```typescript
const PATH_MAP: Record<string, string> = {
  // ... existing mappings
  "/{route}": "/{en-route}",
};
```

### Step 4: Add OG metadata in `src/lib/og-metadata.ts`

Add the page to `pageOGMetadata`:
```typescript
const pageOGMetadata: Record<string, OGMetadata> = {
  // ... existing entries
  "/{route}": {
    title: "Title | Sungkar Group",
    description: "SEO description under 160 chars",
    image: HERO.lombok,
    imageAlt: "Alt text for OG image",
  },
};
```

### Step 5: Add breadcrumb and page title in `src/lib/i18n/ui-strings.ts`

Add to the `UIStrings` interface and all 5 locale translations:
```typescript
interface UIStrings {
  breadcrumb: {
    // ...
    {route}: string;
  };
  page: {
    // ...
    {route}: string;
  };
}
```

### Step 6: Create locale page-content files

Create/update feature page-content files in each locale dir:
- `src/lib/i18n/{locale}/{feature}.ts` (for `en`, `ar`, `ms`, `zh`)
- The Indonesian source in `src/lib/content/{feature}.ts`

Reference the `locale-ui-strings` and `i18n-content-data` skills for detailed guidance on translations.

### Step 7: Wire into `src/lib/i18n/loader.ts`

Add imports and entries in `contentModules[locale]` so `loadContent()` can find the new module.

### Step 8: Validate

```bash
npm test          # Tests pass
npm run check     # TypeScript — 0 new errors
npm run build     # Production build succeeds
```

## Adding a Dynamic Detail Page

For detail pages (e.g., destination detail, package detail), follow the existing patterns:

### ID page — e.g., `src/pages/{route}/[slug].astro`

```astro
---
import MainLayout from "@/layouts/MainLayout.astro";
import { getCollection } from "astro:content";  // if MDX-driven
// OR import data directly
import { items } from "@/lib/content/{feature}";

export async function getStaticPaths() {
  return items.map((item) => ({
    params: { slug: item.slug },
  }));
}

const { slug } = Astro.params;
const item = items.find((i) => i.slug === slug);
// ... render
---
```

### Locale page — e.g., `src/pages/[locale]/{en-route}/[slug].astro`

Uses `NON_DEFAULT_LOCALES` in `getStaticPaths()` combined with locale data:

```astro
---
import MainLayout from "@/layouts/MainLayout.astro";
import { NON_DEFAULT_LOCALES } from "@/lib/i18n";

export async function getStaticPaths() {
  const paths = [];
  for (const locale of NON_DEFAULT_LOCALES) {
    const items = await loadLocaleItems(locale);
    for (const item of items) {
      paths.push({ params: { locale, slug: item.slug } });
    }
  }
  return paths;
}
// ...
---
```

## Existing Route Patterns Reference

| Route Pattern | ID Path | EN Path | Data Source |
|---|---|---|---|
| Static page | `/tentang-kami` | `/[locale]/about` | `loadContent(locale, "about")` |
| Listing page | `/paket-wisata` | `/[locale]/tour-packages` | `loadContent(locale, "packagePage")` |
| Region listing | `/paket-wisata/lombok` | `/[locale]/tour-packages/lombok` | Locale package barrel |
| Collection listing | `/paket-wisata/lombok/1-hari` | `/[locale]/tour-packages/lombok/1-day` | Locale package barrel |
| Detail page | `/paket-wisata/lombok/1-hari/slug` | `/[locale]/tour-packages/lombok/1-day/slug` | Locale package barrel |
| Dynamic detail | `/destinasi/[slug]` | `/[locale]/destinations/[slug]` | Locale destinations |
| Blog listing | `/blog` | `/[locale]/blog` | `astro:content` |
| Blog detail | `/blog/[slug]` | `/[locale]/blog/[slug]` | `astro:content` |
| Guide listing | `/panduan-wisata` | `/[locale]/travel-guides` | `astro:content` |
| 404 | `/404` | `/[locale]/404` | Static |

## Adding a 404 Page

The 404 page exists at both root and locale levels. Each locale 404:
1. Renders a custom error page component
2. Uses the locale for proper RTL/LTR styling
3. Provides locale-specific navigation links back to home

## Validation

After adding any new page:
```bash
npm run check     # TypeScript check
npm run build     # Full build (catches routing issues)
# Visit the page locally at http://localhost:4321/{route}
```
