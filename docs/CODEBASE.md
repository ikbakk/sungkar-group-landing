# CODEBASE

## Route -> Component Map

| Route pattern | Primary page file | Main supporting components |
| --- | --- | --- |
| `/` and `/[locale]` | `src/pages/index.astro`, `src/pages/[locale]/index.astro` | `src/components/landing/LandingPage.astro`, `src/components/landing/HeroSection.astro`, `src/components/site/PageHeader.astro` |
| `/paket-wisata/...` and `/[locale]/tour-packages/...` | `src/pages/paket-wisata/[region]/[collection]/[slug].astro`, `src/pages/[locale]/tour-packages/[region]/[collection]/[slug].astro` | `src/components/packages/PackageItinerary.astro`, `src/components/packages/BoatSpecsSection.astro`, `src/components/packages/CabinsSection.astro`, `src/components/packages/PackageIncludesExcludes.astro`, `src/components/packages/PackageTandC.astro`, `src/components/packages/PackageGallery.tsx` |
| `/destinasi/...` and `/[locale]/destinations/...` | `src/pages/destinasi/[slug].astro`, `src/pages/[locale]/destinations/[slug].astro` | `src/components/destinations/DestinationDetailPanel.astro`, `src/components/destinations/DestinationGallery.astro` |
| `/akomodasi/...` and `/[locale]/accommodations/...` | `src/pages/akomodasi/[slug].astro`, `src/pages/[locale]/accommodations/[slug].astro` | `src/components/cards/AccommodationCard.astro`, `src/components/site/PageHeader.astro` |
| `/sewa-mobil/...` and `/[locale]/car-rental/...` | `src/pages/sewa-mobil/[region]/[slug].astro`, `src/pages/[locale]/car-rental/[region]/[slug].astro` | `src/components/vehicles/VehicleDetailPanel.astro`, `src/components/cards/VehicleCard.astro` |
| `/blog/...` and `/[locale]/blog/...` | `src/pages/blog/[slug].astro`, `src/pages/[locale]/blog/[slug].astro` | `src/components/blog/BlogPostLayout.astro`, `src/components/blog/BlogCard.astro` |
| `/panduan-wisata/...` and `/[locale]/travel-guides/...` | `src/pages/panduan-wisata/[slug].astro`, `src/pages/[locale]/travel-guides/[slug].astro` | `src/components/guides/KeyTakeaways.astro`, `src/components/guides/GuideCard.astro` |
| Static marketing pages | `src/pages/{faq,kontak,tentang-kami,ulasan,syarat-ketentuan,kebijakan-privasi}.astro` and localized equivalents under `src/pages/[locale]/` | `src/components/site/Faq.astro`, `src/components/contact/*`, `src/components/reviews/*`, `src/components/about/*` |

## Directory Layout

| Path | Purpose |
| --- | --- |
| `src/pages/` | Astro routes for default-language and localized pages |
| `src/components/` | Feature UI split by domain: `landing`, `packages`, `destinations`, `vehicles`, `contact`, `reviews`, `about`, `site`, `ui` |
| `src/content/` | MDX content collections, including `tourPackages`, `accommodations`, and other authored content |
| `src/lib/content/` | Collection loaders, image resolvers, shared schemas, and content-facing types |
| `src/assets/images/` | Bundled image assets; current groups include `hero`, `gallery`, `destinations`, `vehicles`, `accommodations`, `brand`, `legality`, `og` |
| `scripts/data/packages/` | JSON source-of-truth for package content before MDX generation |
| `scripts/` | Generators and validation scripts such as `generate-tour-mdx.mjs`, `generate-image-barrel.mjs`, and `validate-images.mjs` |
| `docs/` | Project documentation and internal reference notes |

## Key Files By Task

| Task | Files |
| --- | --- |
| Update a tour package's source content | `scripts/data/packages/<slug>/main.json`, `scripts/data/packages/<slug>/locales.json` |
| Update private-trip deluxe phinisi naming/metadata | `scripts/data/packages/deluxe-*/main.json`, `scripts/data/packages/deluxe-*/locales.json`, then regenerate via `npm run generate:tours` |
| Update published tour package MDX | `src/content/tourPackages/<slug>/{id,en,ar,ms,zh}.mdx` |
| Resolve package images into Astro imports | `src/lib/content/tourPackages/images.ts`, `src/assets/images/index.ts` |
| Add or refresh packaged image assets | `src/assets/images/{hero,gallery}/`, `scripts/generate-image-barrel.mjs`, `npm run images:barrel` |
| Validate content/image wiring | `npm run validate:images`, `npm run check` |
| Understand package detail rendering | `src/pages/paket-wisata/[region]/[collection]/[slug].astro`, `src/pages/[locale]/tour-packages/[region]/[collection]/[slug].astro`, `src/components/packages/*` |

## Image Notes

- `deluxe-gaisan` now uses Drive-sourced WebP assets in `src/assets/images/hero/gaisan-deluxe.webp` and `src/assets/images/gallery/gaisan-deluxe-*.webp`.
- `deluxe-hatira` now uses Drive-sourced WebP assets in `src/assets/images/hero/hatira-hela-deluxe.webp` and `src/assets/images/gallery/hatira-hela-*.webp`.
- `deluxe-maheswari` now uses Drive-sourced WebP assets in `src/assets/images/hero/maheswari-deluxe-phinisi.webp` and `src/assets/images/gallery/maheswari-deluxe-phinisi-*.webp`.
- Tour package image strings are resolved through `src/lib/content/tourPackages/images.ts`, with exact registry entries for legacy assets and dynamic group lookup for generated `hero/` and `gallery/` filenames.
