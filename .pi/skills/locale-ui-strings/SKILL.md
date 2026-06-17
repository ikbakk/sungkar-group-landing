---
name: locale-ui-strings
description: >
  Manage UI string translations for the Sungkar Group landing page (id, en, ar, ms, zh).
  Trigger when the user asks to add, edit, translate, audit, or fix any UI text in the
  navigation, header, footer, buttons, labels, breadcrumbs, CTAs, page titles, form
  labels, cookie/site banners, schema descriptions, OG metadata, or region labels.
  Also trigger when the user says "add locale support" or "translate the nav" or
  "the footer text is wrong in Arabic" or any similar UI-text-level i18n task.
  This skill does NOT handle blog posts, travel guides, tour package itinerary data,
  or data-level content (destinations, vehicles, accommodations data) — use
  i18n-content-data for that.
weight: 1
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

# Locale UI Strings Skill

Manage UI strings across 5 locales (`id`, `en`, `ar`, `ms`, `zh`) for the Sungkar Group landing page.

## Architecture Overview

The project uses a **layered i18n system**:

1. **`src/lib/i18n/ui-strings.ts`** — Central registry of ALL shared UI strings (header, footer, nav, buttons, breadcrumbs, CTA, form labels, gallery, FAQ section headers, guides labels, sewa/accommodation/page titles, blog section labels, contact/about labels, SEO keywords). Each locale has a `UIStrings` object under `translations[locale]`. Components consume these via `import { t } from "@/lib/i18n"` and call `t(locale).sectionName.key`.

2. **Locale page-content files** (`src/lib/i18n/{locale}/`) — Per-locale copies of page-level content that's too large or page-specific for `ui-strings.ts`:
   - `landing.ts` — Landing page hero, featured tours, destinations, transport, testimonials, video sections
   - `about.ts` — About page story, vision, mission, values
   - `destinationsPage.ts` — Destination listing page hero, groups, FAQ, related content
   - `contact-data.ts` — Contact methods, form field definitions (labels/placeholders/options)
   - `packagePage.ts` — Tour packages listing page hero + region descriptions
   - `sewaPage.ts` — Car rental listing page content
   - `akomodasiPage.ts` — Accommodations listing page content
   - `reviewPage.ts` — Reviews listing page content
   - `faqPage.ts` — FAQ listing page content
   - `navigationData.ts` — Navigation data (labels, collection titles via titleMap)
   - `og-metadata.ts` — OG meta tags per page
   - `schemas.ts` — JSON-LD schema descriptions
   - `regions.ts` — Region labels (Lombok, Sumbawa, Labuan Bajo) — proper nouns, rarely need translation

3. **Data-level i18n files** (`tourPackages/`, `destinationsData.ts`, `sewaMobilData.ts`, `akomodasiData.ts`, `faqs/`) — Handled by the `i18n-content-data` skill.

## File Reference

### `src/lib/i18n/ui-strings.ts`

All 5 locale translations live in ONE file. Structure:

```
translations: Record<Locale, UIStrings> = {
  id: { ... },
  en: { ... },
  ar: { ... },
  ms: { ... },
  zh: { ... },
}
```

The `UIStrings` interface defines ALL keys. To add a new string:
1. Add the key to the `UIStrings` interface
2. Add translations in all 5 locale objects under `translations`
3. Verify with `npm run check` (TypeScript catches missing keys)

### `src/lib/i18n/{locale}/` — Per-locale content files

Each locale dir (en, ar, ms, zh) mirrors the structure of `src/lib/content/`:

| File | Purpose | When to Edit |
|---|---|---|
| `landing.ts` | Landing page sections | New hero/featured/transport copy |
| `about.ts` | About page content | Update company story/mission |
| `destinationsPage.ts` | Destinations listing | Add/edit destination groups |
| `contact-data.ts` | Form field labels/options | Add form field, change placeholder |
| `packagePage.ts` | Tour packages listing | Update hero/region descriptions |
| `sewaPage.ts` | Car rental listing | Update hero/description |
| `akomodasiPage.ts` | Accommodations listing | Update hero/description |
| `reviewPage.ts` | Reviews listing | Update section text |
| `faqPage.ts` | FAQ listing | Update page description |
| `navigationData.ts` | Mega menu + collection title map | Add nav item, change collection label |
| `og-metadata.ts` | Open Graph meta tags | Add page, update descriptions |
| `schemas.ts` | JSON-LD schema generators | Update schema text |
| `regions.ts` | Region labels | Only proper place names |

### `src/lib/i18n/loader.ts`

Loads content per locale. When adding a NEW locale content module:
1. Add the import and entry in `loadContent()` switch
2. Follow the pattern of existing locale entries

## Workflow

### 1. Adding a new UI string to `ui-strings.ts`

```typescript
// 1. Add to interface
export interface UIStrings {
  // ...
  newSection: {
    newKey: string;
  };
}

// 2. Add to all 5 locales
translations: Record<Locale, UIStrings> = {
  id: { ..., newSection: { newKey: "..." } },
  en: { ..., newSection: { newKey: "..." } },
  // ...
}
```

### 2. Translating a locale page-content file

Each locale file exports a typed object. Translate ONLY the string values:
- For `zh`: Use Simplified Chinese characters
- For `ar`: Use Arabic script (RTL)
- For `ms`: Use Bahasa Malaysia (note differences from Indonesian: `pakej` not `paket`, `penginapan` not `akomodasi`, `perkhidmatan` not `layanan`, etc.)
- For `en`: Natural English, not translated from Indonesian

### 3. Auditing for missing translations

Run:
```bash
cd /path/to/project && python3 << 'EOF'
import os, re

CH = re.compile(r'[\u4e00-\u9fff]')
AR = re.compile(r'[\u0600-\u06ff]')
EN_QA = re.compile(r'"(What|Where|How|Who|Why|When|Which|Can|Are|Is|Do|Does) ')

BASE = "src/lib/i18n"

def is_bare(path):
    with open(path) as f:
        first = [l.strip() for l in f.readlines()[:5] if l.strip()]
    return all(l.startswith('export ') or l.startswith('/*') or l.startswith('//') for l in first) if first else False

for loc in ['ar', 'ms', 'zh']:
    if loc == 'ar':
        ok = lambda t: bool(AR.search(t))
    elif loc == 'zh':
        ok = lambda t: bool(CH.search(t))
    else:
        ok = lambda t: not bool(EN_QA.search(t))
    
    issues = []
    for root, dirs, files in os.walk(f"{BASE}/{loc}"):
        for f in files:
            if not f.endswith('.ts'): continue
            path = os.path.join(root, f)
            rel = os.path.relpath(path, f"{BASE}/{loc}")
            if is_bare(path): continue
            with open(path) as fh:
                content = fh.read()
            if not ok(content):
                issues.append(rel)
    
    if issues:
        print(f"❌ {loc}:")
        for i in issues: print(f"  - {i}")
    else:
        print(f"✅ {loc}: clean")
EOF
```

### 4. SEO Integration

UI strings directly impact SEO — page titles, meta descriptions, OG tags, breadcrumb text, and schema strings all influence search visibility.

**Rules:**
- **Page `<title>`** — comes from `MainLayout.astro` locale data, not ui-strings. Check the locale `og-metadata.ts` for per-page titles and descriptions.
- **OG descriptions** — in each locale's `og-metadata.ts`. Keep under 160 chars for search snippets.
- **Breadcrumb text** — in `ui-strings.ts` under `breadcrumb.*`. Must match the page title intent.
- **JSON-LD schema text** — in each locale's `schemas.ts`. Keep natural and descriptive.
- **SEO keywords** — in `ui-strings.ts` under `seo.keywords` per locale. Use comma-separated, locale-appropriate keywords.
- **Alt text on images** — in `ui-strings.ts` under `common.imageAlt*`.
- **Button/link text** — in `ui-strings.ts` under `cta.*`, `common.*`. Use action-oriented language.

### 5. Multi-file edit pattern

When the same text appears in multiple locales, update ALL 5 simultaneously:
```bash
# Example: update "Contact" label in all locales
for loc in id en ar ms zh; do
  sed -i 's/old-label/new-label/' "src/lib/i18n/$loc/someFile.ts"
done
```

### 6. RTL handling

Arabic (`ar`) is RTL. When translating to Arabic:
- Use Arabic script (UTF-8)
- Numbers remain LTR within RTL text
- URLs/hrefs stay unchanged
- Use the Cairo Variable font (auto-applied via CSS)
- For OG metadata, RTL text renders correctly in social previews

### 7. Validation

After ANY change to UI strings:
```bash
npm test          # 58 vitest tests must pass
npm run check     # Astro type check — 0 new errors (1 pre-existing ts(2339) is OK)
```

## Common Tasks

### Add a new navigation item
1. Edit all 5 `navigationData.ts` files (content source + 4 locale copies)
2. Add the item label in each locale
3. If it's a tour collection, add to `titleMap` for translated collection names

### Fix a mistranslation
1. Find the string — grep for the exact text in all locale files
2. Edit the locale file that has the incorrect text
3. Do NOT touch other locales unless the same error exists there

### Add a completely new page
1. Add OG metadata in each locale's `og-metadata.ts`
2. Add breadcrumb text in `ui-strings.ts`
3. Add page title in `ui-strings.ts` under `page.*`
4. Create the page content file in each locale dir
5. Wire into `loader.ts`
