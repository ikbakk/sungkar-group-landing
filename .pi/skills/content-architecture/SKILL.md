---
name: content-architecture
description: >
  Manage content data architecture for the Sungkar Group landing page. Trigger when
  the user asks to add a new content type, modify existing data schemas/types, add
  a new feature module (e.g., new section with its own data), change data structures,
  add/modify Zod validation schemas, restructure content imports/exports, or migrate
  data between modules. Also trigger on "add a new content category", "create a new
  data module", "change the types", or "add Zod schema for X". Does NOT handle
  translating content to other locales (use i18n-content-data), UI components
  (use component-library), or adding actual content data entries (use the respective
  content module).
weight: 4
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

# Content Architecture Skill

Manage the content data architecture for the Sungkar Group landing page: types, schemas, modules, and imports.

## Architecture Overview

Content data follows a layered pattern:

```
src/lib/content/
├── shared/
│   ├── types.ts            # ALL TypeScript types + Zod schemas (single source of truth)
│   ├── navigation.ts       # Re-exports navigationData as `navigation`
│   ├── contact-data.ts     # Re-exports businessInfo, contactMethods, formFields
│   ├── og-metadata.ts      # Re-exports pageOGMetadata + helpers
│   └── regions.ts          # Re-exports REGIONS, REGION_MAP, etc.
├── {feature}/              # One folder per feature (about, landing, destinations, etc.)
│   ├── index.ts            # Barrel export: re-exports data + page-content
│   └── data.ts             # Core data arrays/objects (destinations, vehicles, accommodations)
├── tourPackages/           # Region-based package data
│   ├── index.ts            # Barrel: aggregates lombok, sumbawa, labuan-bajo
│   ├── lombok.ts
│   ├── sumbawa.ts
│   └── labuan-bajo.ts
├── faqs/                   # FAQ topic files
│   ├── general.ts
│   ├── about.ts
│   ├── contact.ts
│   ├── package.ts
│   ├── sewa-mobil.ts
│   ├── reviews.ts
│   └── akomodasi.ts
├── navigationData.ts       # NavItem[] — the navigation tree
├── landing.ts              # Landing page content (HeroSection, etc.)
├── about.ts                # About page content
├── contact.ts              # Contact page content (ContactPageContent)
├── destinations.ts         # Destinations listing page content
├── tour-packages.ts        # Tour packages listing page content
├── car-rental.ts           # Car rental listing page content
├── accommodations.ts       # Accommodations listing page content
├── reviews.ts              # Reviews listing page content
└── faq.ts                  # FAQ listing page content
```

## Single Source of Truth: `src/lib/content/shared/types.ts`

ALL TypeScript interfaces/types AND Zod validation schemas live in this one file. When adding a new content type or modifying an existing one:

### 1. Add/Modify TypeScript interface

```typescript
// Before existing types or after the last one, following the same pattern
export type NewItem = {
  slug: string;
  name: string;
  region: RegionKey;
  description: string;
  image: ImageSource;
  features: string[];
  // ...
};
```

### 2. Add/modify Zod schema (for runtime validation)

```typescript
export const NewItemSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(1),
  region: regionSchema,  // Pre-defined: z.enum(["lombok", "sumbawa", "labuan-bajo"])
  description: z.string().min(1),
  image: z.object({ src: z.string() }).or(z.string()),
  features: z.array(z.string()),
});
```

**Key rules:**
- All types and schemas in ONE file — do NOT split across files
- `ImageSource` type comes from `@/lib/images` — it's `ImageMetadata | string`
- `RegionKey` is `"lombok" | "sumbawa" | "labuan-bajo"`
- Zod schemas must be exported for use in tests
- The `regionSchema` is already defined as `z.enum(["lombok", "sumbawa", "labuan-bajo"])` — reuse it

## Adding a New Feature Module

When adding a completely new page section with its own data:

### Step 1: Create the data file

Create `src/lib/content/{feature}/data.ts`:
```typescript
import type { SomeType } from "@/lib/content/shared/types";

export const someItems: SomeType[] = [
  // data entries
];
```

### Step 2: Create the page-content file (if needed)

If the feature has page-level content (hero text, section titles), create it in the feature's page-content module or in the existing page content.

### Step 3: Create barrel export

Create `src/lib/content/{feature}/index.ts`:
```typescript
export * from "./data";
```

### Step 4: Update `src/lib/i18n/loader.ts`

If the feature has per-locale content:
1. Add imports for all 5 locale modules
2. Add entries in `contentModules[locale]`
3. Ensure `loadContent()` can load it

### Step 5: Add Zod tests

Add schema validation tests in `tests/data.test.ts`:
```typescript
import { NewItemSchema } from "@/lib/content/shared/types";
import { newItems } from "@/lib/content/{feature}";

describe("NewItem data validation", () => {
  newItems.forEach((item) => {
    it(`${item.name} has valid data`, () => {
      const result = NewItemSchema.safeParse(item);
      if (!result.success) {
        const issues = result.error.issues.map(
          (i) => `  ${i.path.join(".")}: ${i.message}`
        );
        expect.fail(`Invalid item "${item.name}":\n${issues.join("\n")}`);
      }
    });
  });
});
```

### Step 6: Validate

```bash
npm test      # Schema validation tests pass
npm run check # TypeScript check — 0 new errors
```

## Modifying an Existing Type

When a type field changes (rename, add, remove):

1. Update the TypeScript interface in `types.ts`
2. Update the Zod schema in `types.ts`
3. Update ALL data files that implement the type (content source + 4 locale copies)
4. Update ALL consuming components that reference the changed field
5. Run `npm test && npm run check`

**Field removal:** Check for all usages with `rg "fieldName" src/`. Remove from types, schemas, data files, AND components.

**Field addition:** Add to types first, then schemas, then data files (adding appropriate values), then components that display it.

## Adding a New Shared Lib File

Some utility/data files live at `src/lib/` root level:

| File | Purpose |
|---|---|
| `site-config.ts` | `SITE_URL` constant |
| `regions.ts` | Region keys, labels, classNames, maps |
| `schemas.ts` | JSON-LD schema generators |
| `images.ts` | ImageSource type + helpers |
| `utils.ts` | `cn()` helper |
| `og-metadata.ts` | OG metadata + helpers |
| `card-styles.ts` | Shared card visual variants |

When adding a new shared lib file:
1. Create the file at `src/lib/{name}.ts`
2. Export the function/constant/type
3. Import using the `@/lib/{name}` alias
4. If used in multiple places, consider a barrel in `src/lib/index.ts` (or just direct imports)

## Export Convention

- Each data module has a barrel `index.ts` that re-exports from sibling files
- Feature module barrels re-export both data and page-content
- Locale i18n barrel files aggregate per-locale data
- Components import from barrels, never from individual data files directly

## Validation

After ANY content architecture change:
```bash
npm test          # All schema tests pass
npm run check     # TypeScript — 0 new errors
```
