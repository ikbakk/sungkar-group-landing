---
name: navigation
description: >
  Manage the navigation system for the Sungkar Group landing page: mega menu, mobile drawer,
  collection title maps, locale nav data, and breadcrumb structure. Trigger when the user
  asks to add a nav item, modify the mega menu, add a new collection to the tour packages
  nav, change dropdown items, update breadcrumb labels, fix nav links, or add locale nav
  translations. Also trigger on "add a new menu item", "update the navigation",
  "Paket Wisata dropdown is wrong", "the mega menu needs a new section", or "fix nav links".
  Does NOT handle page content (use content-architecture), UI primitives (use component-library),
  or locale UI strings (use locale-ui-strings).
weight: 10
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

# Navigation Skill

Manage the navigation system: mega menu structure, mobile drawer, locale nav data, and breadcrumbs.

## Navigation Architecture

Navigation data flows through three layers:

```
Layer 1: Source (ID)                            → src/lib/content/navigationData.ts
Layer 2: Locale copies (en, ar, ms, zh)         → src/lib/i18n/{locale}/navigationData.ts
Layer 3: Components                              → src/components/header/Header.astro
                                                     → NavigationDesktop.astro
                                                     → NavigationMobile.tsx (React)
```

## Data Structure (`NavItem[]`)

The `NavItem` type supports three `variant` types:

### 1. `"link"` — Simple link

```typescript
{
  label: "Beranda",
  href: "/",
  variant: "link",
}
```

### 2. `"mega"` — Mega menu with region groups + collections

```typescript
{
  label: "Paket Wisata",
  variant: "mega",
  groups: [
    {
      title: "Lombok",
      href: "/paket-wisata/lombok",

      // collections: multi-item groups (e.g., "1 Hari", "2 Hari 1 Malam")
      collections: [
        {
          title: "1 Hari",
          href: "/paket-wisata/lombok/1-hari",
          items: [
            { label: "Package Title", href: "/paket-wisata/lombok/1-hari/slug" },
          ],
        },
      ],

      // items: single-item collections (rendered as direct links)
      items: [
        { label: "Single Tour", href: "/paket-wisata/lombok/single-tour-slug" },
      ],
    },
  ],
}
```

### 3. `"dropdown"` — Simple dropdown menu

```typescript
{
  label: "Info",
  variant: "dropdown",
  items: [
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Panduan Wisata", href: "/panduan-wisata" },
    // ...
  ],
}
```

## Auto-Generated Collections

The `createPackageCollections(region)` function in `src/lib/content/navigationData.ts` auto-generates nav items from tour package data:

```typescript
const createPackageCollections = (region: "lombok" | "sumbawa" | "labuan-bajo") => {
  const regionPackages = packages.filter((pkg) => pkg.region === region);
  const grouped = regionPackages.reduce(/* groups by collectionSlug */);
  // Returns { collections, items }
  // Single-item collections → direct link (items[])
  // Multi-item collections → dropdown with children (collections[])
};
```

This function is called for each region group in the "Paket Wisata" mega menu.

## Adding a New Navigation Item

### Step 1: Edit the source navigation

Edit `src/lib/content/navigationData.ts`:

```typescript
export const navigation: NavItem[] = [
  // ... existing items
  {
    label: "New Page",        // Indonesian label
    href: "/new-page",        // ID route
    variant: "link",          // "link" | "mega" | "dropdown"
  },
];
```

### Step 2: Add locale copies

For each non-ID locale (`en`, `ar`, `ms`, `zh`), add the translated equivalent in:

```
src/lib/i18n/{locale}/navigationData.ts
```

If the locale file doesn't re-export the full `navigation` array (some locales may only have a `titleMap`), edit the existing structure.

### Step 3: For tour package collections

If the new item is part of the Paket Wisata mega menu and references tour packages, ensure:
1. The package exists in `src/lib/content/tourPackages/{region}.ts` with correct `collectionSlug`
2. A locale copy exists in `src/lib/i18n/{locale}/tourPackages/{region}/`
3. The `titleMap` (if used in locale `navigationData.ts`) has the translated collection title

### Step 4: Update breadcrumbs (if applicable)

Add breadcrumb entries in `src/lib/i18n/ui-strings.ts` under `breadcrumb.*`.

### Step 5: Validate

```bash
npm test          # Tests pass
npm run check     # TypeScript — 0 new errors
npm run build     # Build succeeds
```

## Modifying the Mega Menu

### Add a new region group

```typescript
groups: [
  // ... existing
  {
    title: "New Region",
    href: "/paket-wisata/new-region",
    ...createPackageCollections("new-region"),
  },
]
```

### Add a static collection (not auto-generated)

```typescript
{
  title: "Custom Collection",
  items: [
    { label: "Item 1", href: "/path/to/item-1" },
    { label: "Item 2", href: "/path/to/item-2" },
  ],
}
```

### Remove a group/item

1. Remove from all 5 `navigationData.ts` files
2. Check for leftover references with `rg "removed-item-label" src/`
3. Run `npm run check`

## Navigation Component Behavior

### Desktop (`NavigationDesktop.astro`)

- Uses `@data-slot/navigation-menu` for the mega menu
- `"link"` variant → simple `<a>` tag
- `"mega"` variant → mega menu with groups and collections
- `"dropdown"` variant → dropdown with items
- Mega menu groups with only `items` (single-item collections) render as links without a sub-collection wrapper

### Mobile (`NavigationMobile.tsx`)

- Uses `vaul` Drawer component
- `"link"` variant → direct link
- `"mega"` variant → accordion expansion (region title → auto-generated collections/links)
- `"dropdown"` variant → accordion expansion with items
- Single-item collections render as direct links without an accordion wrapper

## Locale Navigation Data

### File pattern
```
src/lib/i18n/{locale}/navigationData.ts
```

### Content

Each locale's navigation data exports:
- `navigation: NavItem[]` — full nav structure with translated labels
- Optional `titleMap: Record<string, string>` — translated collection titles (e.g., `"1-hari": "1 Day"`)

If a locale file only needs to override collection titles, it can export just the `titleMap` and the ID navigation structure adapts via the component.

### Translation Rules

- **en**: Translate all labels naturally. Mega menu group titles like "Lombok" stay as is (proper nouns).
- **ar**: Arabic script for all labels. Mega menu region titles stay as Latin script.
- **ms**: Use Bahasa Malaysia labels. `Paket Wisata` → `Pakej Pelancongan`
- **zh**: Simplified Chinese labels.

## Validation

```bash
npm test          # All tests pass
npm run check     # TypeScript — 0 new errors (1 pre-existing ts(2339) is OK)
# Verify in browser:
npm run dev       # Check mega menu renders all items correctly
```
