# Sungkar Group Landing — Codebase Map

> Compact reference for AI agents. Sections map exactly to where to look.

---

## 1. Directory Layout

```
src/
├── content.config.ts          # Astro v6 collections: blog + guides + tourPackages + accommodations + carRental + destinations (glob loader, Zod)
├── content/{blog,guides,tourPackages,accommodations,car-rental,destinations}/{slug}/{locale}.mdx
├── pages/                     # File-based routing
│   ├── index.astro            # / (locale=id)
│   ├── [locale]/              # en, ar, ms, zh — mirrors ID pages with locale prefix
│   │   └── {blog,travel-guides,destinations,privacy-policy,terms-conditions,404}/
│   └── {tentang-kami,kontak,ulasan,faq,destinasi,paket-wisata,sewa-mobil,akomodasi,blog,panduan-wisata,kebijakan-privasi,syarat-ketentuan}/
├── layouts/MainLayout.astro   # Shared shell: Header+SEO+StructuredData+FadeInText+Footer
├── components/
│   ├── {about,blog,contact,destinations,guides,packages,reviews}/  # Feature sections
│   ├── blocks/                # Reusable section layouts (features-1, services-5/6, reviews-5, FooterBlock)
│   ├── cards/                 # {Package,Destination,Vehicle,Accommodation}Card.astro
│   ├── header/                # Header + NavigationDesktop + NavigationMobile.tsx (Drawer+Accordion)
│   ├── landing/               # Homepage sections (Hero,Video,Featured,Destinations,Transport)
│   ├── site/                  # Footer, Faq, PageHeader (shared shell pieces)
│   ├── seo/                   # SEOMeta, OGImage, StructuredData
│   └── ui/                    # Fulldev UI primitives: {button,card,badge,avatar,nav-menu,select,carousel,logo,marquee,icon,input,textarea,rating,section,breadcrumb,accordion,drawer,typography,price}/
├── lib/
│   ├── content/               # ALL page content + data bridges (folder per feature)
│   │   ├── shared/            # {types,contact-data,og-metadata,schemas,regions}
│   │   ├── {about,landing,destinations,tour-packages,reviews,contact,faq}/  # index.ts + data.ts per feature
│   │   ├── tourPackages/        # Bridge: collection.ts + images.ts + types.ts
│   │   ├── accommodations/      # Bridge: collection.ts (page content in index.ts)
│   │   ├── car-rental/          # Bridge: collection.ts (page content in index.ts)
│   │   ├── destinations/        # Bridge: collection.ts + images.ts + types.ts
│   │   └── faqs/                # Topic FAQs: {general,about,package,...}.ts
│   ├── i18n/                  # Framework: {index,loader,localize,ui-strings}.ts + {en,ar,ms,zh}/ (mirrors lib/content/)
├── styles/{global,sections}.css  # Tailwind v4 + tokens + shadcn
└── assets/images/{destinations,gallery,hero,brand,accommodations,vehicles,og}/ + index.ts (barrel)
scripts/{generate-tour-mdx,generate-content-mdx,validate,check-images}.mjs
scripts/data/{lombok-1d,lombok-2d1n,lombok-3d2n,lombok-4d3n,lombok-opentrip,sumbawa,labuan-bajo,pkg-pink-3d2n,pkg-nanggu-3d2n,accommodations,car-rental,destinations}.json
tests/                          # Vitest: 9 files — data.test.ts, schemas.test.ts, data/{tourPackages,accommodations,vehicles,destinations,schemas}.test.ts, i18n/{ui-strings,hardcoded-strings}.test.ts
```

---

## 2. i18n Routing

- **Default locale `id`** → root URLs (`/`, `/tentang-kami`, ...)
- **Non-default** (`en,ar,ms,zh`) → `/${locale}/about`, `/${locale}/travel-guides/...`
- `getStaticPaths()` in `[locale]/*.astro` uses `NON_DEFAULT_LOCALES` (excludes `"id"`)
- `getLocaleFromPath()` returns `DEFAULT_LOCALE` for unprefixed paths
- `localizeHref()` skips prefix for ID locale; maps ID→EN paths via `PATH_MAP` for others
- `getLocalizedPath()` generates locale-switching URLs for LocaleSwitcher
- Arabic: `dir="rtl"`, Cairo Variable font; LTR: Inter + Playfair Display
- Sitemap: auto-generates per-locale entries via `i18n` + `sitemap` integrations

---

## 3. Route → Page → Component

| URL Pattern                                      | Page File                          | Components                                                                                      |
| ------------------------------------------------ | ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| `/`                                              | `index.astro`                      | `LandingPage` → Hero,Video,Featured,Destinations,Transport sections                             |
| `/tentang-kami`                                  | `tentang-kami.astro`               | PageHeader + Story, VisionMission, Services, Strengths, Values, Commitment, Faq, Cta            |
| `/kontak`                                        | `kontak.astro`                     | PageHeader + ContactForm, ContactInfo, EmbeddedMap, Faq                                         |
| `/ulasan`                                        | `ulasan.astro`                     | PageHeader + ReviewsGrid, ReviewStats, ReviewsCta, ReviewGallery, Faq                           |
| `/faq`                                           | `faq.astro`                        | PageHeader + Faq                                                                                |
| `/destinasi[/]`                                  | `destinasi/index.astro`            | PageHeader + DestinationGroupSection, RelatedContent, Faq                                       |
| `/destinasi/[slug]`                              | `destinasi/[slug].astro`           | DestinationDetailPanel, DestinationGallery, PackageCard                                         |
| `/paket-wisata[/]`                               | `paket-wisata/index.astro`         | PageHeader + PackageRegionSection(×3), PackagePageCta, Faq, RelatedContent                      |
| `/paket-wisata/[region][/[collection][/[slug]]]` | `paket-wisata/[region]/...`        | CollectionCard → PackageCard → PackageDetail+Itinerary+IncludesExcludes+Gallery+Faq+Carousel    |
| `/sewa-mobil[/][/[region][/[slug]]]`             | `sewa-mobil/...`                   | StickyNav+RegionObserver+VehicleRegionSection → VehicleDetailPanel+WhatsAppForm                 |
| `/akomodasi[/][/[slug]]`                         | `akomodasi/...`                    | StickyNav+RegionObserver+RegionNavCard+AccommodationRegionSection → AccommodationCard grid      |
| `/blog[/][/[slug]]`                              | `blog/...`                         | PageHeader+BlogCard grid → BlogPostLayout(Content)+StructuredData(Article)                      |
| `/panduan-wisata[/][/[slug]]`                    | `panduan-wisata/...`               | PageHeader+GuideCard → KeyTakeaways+GuideCard+DestinationCard+PackageCard+StructuredData(HowTo) |
| `/kebijakan-privasi`, `/syarat-ketentuan`        | `*.astro`                          | PageHeader + static prose                                                                       |
| `/[locale]/...`                                  | `[locale]/*.astro`                 | Same components as ID pages, locale-filtered content                                            |
| 404                                              | `404.astro` / `[locale]/404.astro` | Custom error page                                                                               |

**MDX content data flow**: Page → `getPackages(locale)` / `getAccommodations(locale)` / `getVehicles(locale)` / `getDestinations(locale)` (async, from MDX content collections) → pass as props → child components. Tour packages use `resolveImages()` to map string paths to `ImageMetadata` imports for Astro image optimization.

**Other data flow**: Page → `loadContent(locale, module)` → pass slices as props → child components (never import content directly, enabling i18n)

---

## 4. Data Architecture

### Content Sources

| Source                                                  | Schema Fields                                                                                                                                                              | Loaded By                             |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `content/{blog,guides}/{slug}/{locale}.mdx`             | `{title,description,image,publishDate,tags/region,locale,slug}`                                                                                                            | `astro:content` + `content.config.ts` |
| `content/tourPackages/{slug}/{locale}.mdx`              | `{title,region,collectionSlug,category,duration,images,summary,highlights,itinerary,includes,excludes,boatName,boatType,boatCapacity,boatSpecs,cabins,termsAndConditions}` | `astro:content` + `content.config.ts` |
| `content/accommodations/{slug}/{locale}.mdx`            | `{name,region,perks,regionalHighlights,description,image}`                                                                                                                 | `getAccommodations(locale)` bridge    |
| `content/car-rental/{slug}/{locale}.mdx`                | `{name,region,pricePerDay,seats,transmission,features,bestFor,description,imageTop,imageBottom}`                                                                           | `getVehicles(locale)` bridge          |
| `content/destinations/{slug}/{locale}.mdx`              | `{title,region,image,gallery,summary,thingsToDo,packages}`                                                                                                                 | `getDestinations(locale)` bridge      |
| `lib/content/{about,landing,contact,faq,reviews,faqs}/` | Plain objects/arrays                                                                                                                                                       | Direct import + i18n copy             |
| `lib/content/{tour-packages,destinations}/`             | Typed data arrays + `*PageContent`                                                                                                                                         | Direct import + i18n copy             |
| `lib/content/tourPackages/{images,collection,types}.ts` | Bridge: `resolveImages()`, `getPackages(locale)`, `TourPackage` type                                                                                                       | Pages importing collection            |
| `lib/content/accommodations/collection.ts`              | Bridge: `getAccommodations(locale)`                                                                                                                                        | Pages importing bridge                |
| `lib/content/car-rental/collection.ts`                  | Bridge: `getVehicles(locale)`                                                                                                                                              | Pages importing bridge                |
| `lib/content/destinations/collection.ts`                | Bridge: `getDestinations(locale)`                                                                                                                                          | Pages importing bridge                |

### Key Types (all in `lib/content/shared/types.ts`)

`Destination` (shared in `shared/types.ts`; destinations now also defines its own local type in `destinations/types.ts`), `TourPackage`, `Accommodation`, `Vehicle`, `Review`, `Guide`, `NavItem`, `BusinessInfo`, `FaqItem`

### Shared Lib Files

| File                 | Export                                                                                                                                 |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `lib/site-config.ts` | `SITE_URL` — env `PUBLIC_SITE_URL` or default `"https://www.sungkargroup.com"`                                                         |
| `lib/regions.ts`     | `REGIONS`, `REGION_MAP`, labels — keys: lombok, sumbawa, labuan-bajo                                                                   |
| `lib/schemas.ts`     | 10 JSON-LD generators (Organization, LocalBusiness, Breadcrumb, FAQ, Article, Product, HowTo, TouristAttraction, Website, ContactPage) |
| `lib/images.ts`      | `ImageSource` type, `isRemoteImage()`, `getImageSrc()`/Width/Height helpers                                                            |
| `lib/utils.ts`       | `cn()` (clsx + tailwind-merge)                                                                                                         |
| `lib/card-styles.ts` | Shared card visual variants                                                                                                            |
| `lib/og-metadata.ts` | Per-route OG metadata lookup                                                                                                           |

---

## 5. Components by Feature

| Feature          | Dir             | Key Components                                                                                                                                                                                                           | Props/Note                                                                  |
| ---------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| **About**        | `about/`        | Story, VisionMission, Services, Strengths, Values, Commitment, Cta                                                                                                                                                       | Each receives section content slice                                         |
| **Cards**        | `cards/`        | PackageCard, DestinationCard, VehicleCard, AccommodationCard                                                                                                                                                             | Image+badge+key info+CTA                                                    |
| **Contact**      | `contact/`      | ContactForm, ContactInfo, ContactMethodCard, EmbeddedMap, FormField, WhatsAppForm                                                                                                                                        | Form has package dropdown                                                   |
| **Blog**         | `blog/`         | BlogCard, BlogPostLayout                                                                                                                                                                                                 | MDX `<Content/>` rendering                                                  |
| **Guides**       | `guides/`       | GuideCard, KeyTakeaways                                                                                                                                                                                                  | MDX + structured data                                                       |
| **Reviews**      | `reviews/`      | ReviewsGridSection, ReviewStatsSection, ReviewsCtaSection, ReviewGallerySection                                                                                                                                          | Google review data                                                          |
| **Destinations** | `destinations/` | DestinationDetailPanel, DestinationGallery                                                                                                                                                                               | Detail pages                                                                |
| **Packages**     | `packages/`     | PackageDetailPanel, PackageItinerary, PackageIncludesExcludes, BoatSpecsSection, CabinsSection, PackageTandC, PackageGallery.tsx, PackageImagePreview                                                                    | Detail pages + gallery dialog + sailing sections (fulldev UI)               |
| **Blocks**       | `blocks/`       | features-1, services-5, services-6, reviews-5, FooterBlock                                                                                                                                                               | Data as props (no direct content imports)                                   |
| **SEO**          | `seo/`          | SEOMeta, OGImage, StructuredData                                                                                                                                                                                         | `<title>`, OG, JSON-LD                                                      |
| **Site**         | `site/`         | Footer, Faq, PageHeader                                                                                                                                                                                                  | Shared shell pieces                                                         |
| **UI**           | `ui/`           | button, card, badge, avatar, nav-menu (mega menu), select, carousel, logo, marquee, icon (Hugeicons), input, textarea, rating, section, breadcrumb.tsx, accordion.tsx, drawer.tsx, typography (Fulldev), price (Fulldev) | Folder per primitive, barrel exports; Fulldev registry for typography/price |

**Convention**: `.astro` = static/SSR (uses `class` attr), `.tsx` = interactive React (uses `className`). Each component has `index.ts` barrel.

---

## 6. Styling & Tokens

- **Tailwind v4** (CSS-based, `@theme inline` in `global.css`)
- **Tokens**: `brand-50..900` (blue/teal), `surface`, `surface-soft`, `text`, `text-muted`, `whatsapp`
- **Radius**: `--radius-sm` through `--radius-4xl` (base 0.75rem)
- **Component utilities** (`@layer components`): `.card-base`, `.card-hover`, `.card-interactive`, `.card-hover-border`, `.card-shadow-base`
- **Fonts**: Playfair Display (heading) + Inter Variable (body) for LTR; Cairo Variable for Arabic RTL

---

## 7. Key Files by Task

| Task                                           | Primary Files                                                                                                                                                                                                |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Add/modify page**                            | `pages/...` + `lib/content/{page}/index.ts` + maybe `lib/og-metadata.ts`                                                                                                                                     |
| **Add page section**                           | `components/{feature}/` + `lib/content/{page}/index.ts`                                                                                                                                                      |
| **Change nav**                                 | `lib/content/shared/navigation.ts` + source `lib/content/navigationData.ts` + each locale copy `lib/i18n/{en,ar,ms,zh}/navigationData.ts`                                                                    |
| **Add nav variant**                            | `shared/types.ts` (`NavItem.variant` union) + `NavigationDesktop.astro` + `NavigationMobile.tsx` + source + all 4 locale nav data files                                                                      |
| **Nav optimisation (single-item collections)** | `createPackageCollections()` in `lib/content/navigationData.ts` + 4 locale copies returns `{collections, items}`; single-item → direct link, multi-item → submenu                                            |
| **Change SEO**                                 | `components/seo/` + `lib/schemas.ts`                                                                                                                                                                         |
| **Add tour pkg (MDX)**                         | Add JSON entry in `scripts/data/{region}.json` (see existing files), then `node scripts/generate-tour-mdx.mjs` — produces `content/tourPackages/{slug}/{locale}.mdx`                                         |
| **Add sailing pkg**                            | Same as tour pkg, but add `boatName`, `boatType`, `boatCapacity`, `boatSpecs[]`, `cabins[]` at root + `termsAndConditions` per locale; use `sailing-open-trip` or `sailing-private-trip` as `collectionSlug` |
| **Regenerate all MDX**                         | `rm -rf src/content/tourPackages/*/ && node scripts/generate-tour-mdx.mjs`                                                                                                                                   |
| **Update collection bridge**                   | `lib/content/tourPackages/images.ts` (new image refs) + `collection.ts` if needed                                                                                                                            |
| **Migrate page to MDX**                        | Replace `import { packages } from "@/lib/content/tourPackages"` with `import { getPackages } from "@/lib/content/tourPackages/collection"` + `const packages = await getPackages(locale)`                    |
| **Add destination**                            | Add JSON entry in `scripts/data/destinations.json`, then `node scripts/generate-content-mdx.mjs` — produces `content/destinations/{slug}/{locale}.mdx`                                                       |
| **Add accommodation**                          | Edit `scripts/data/accommodations.json`, then `node scripts/generate-content-mdx.mjs`                                                                                                                        |
| **Add vehicle**                                | Edit `scripts/data/car-rental.json`, then `node scripts/generate-content-mdx.mjs`                                                                                                                            |
| **Add FAQ**                                    | `lib/content/faqs/{topic}.ts`                                                                                                                                                                                |
| **Add blog/guide/destination post**            | `content/{blog,guides,destinations}/{slug}/{locale}.mdx`                                                                                                                                                     |
| **Change reviews**                             | `lib/content/reviews/index.ts`                                                                                                                                                                               |
| **Add image**                                  | Place WebP in `assets/images/{category}/` + add to `assets/images/index.ts` barrel                                                                                                                           |
| **Add locale**                                 | `lib/i18n/index.ts` (LOCALES) + `ui-strings.ts` + `localize.ts` (PATH_MAP) + copy locale content dir                                                                                                         |
| **Add UI label**                               | Add key to `lib/i18n/ui-strings.ts` (interface + 5 locales), use `t(locale)` in component                                                                                                                    |
| **Change colors/tokens**                       | `styles/global.css` (`@theme inline`)                                                                                                                                                                        |
| **Change layout shell**                        | `layouts/MainLayout.astro`                                                                                                                                                                                   |
| **Change footer/header**                       | `components/site/Footer.astro` / `components/header/`                                                                                                                                                        |
| **Add UI primitive**                           | `components/ui/{name}/`                                                                                                                                                                                      |
| **Fix consistency**                            | Use `<Button>` from `@/components/ui/button`, `HugeiconsIcon` with `Tick02Icon` for checks                                                                                                                   |
| **Validate**                                   | `npm test` (vitest), `npm run check` (types), `npm run validate` (MDX frontmatter), `npm run validate:images`, `npm run check:images`, `npm run format:check`                                                |

---

## 8. Agent Skills (`.pi/skills/`)

Project-specific skills for AI agents to handle specialized tasks:

| Skill                  | Focus                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------ |
| `locale-ui-strings`    | Navigation, footer, buttons, OG metadata, page titles, region labels — UI-level i18n |
| `i18n-content-data`    | Tour package itineraries, destinations, vehicles, FAQ, MDX content — data-level i18n |
| `component-library`    | UI primitives (shadcn-style), feature section components, Astro/React conventions    |
| `content-architecture` | Types, Zod schemas, data modules, feature module setup, barrel exports               |
| `page-routing-i18n`    | New page/route creation with full 5-locale i18n setup                                |
| `image-assets`         | Image management, barrel exports, check-images, categories                           |
| `schema-seo`           | JSON-LD schemas, OG metadata, meta tags, structured data                             |
| `content-collections`  | Blog + travel guide + destination MDX posts (Astro v6 content collections)           |
| `styling-theme`        | Tailwind v4 tokens, CSS design system, card utilities, fonts                         |
| `navigation`           | Mega menu, mobile drawer, locale nav data, collection title maps                     |
| `testing`              | Vitest tests, schema validation, test patterns                                       |
| `deployment`           | Build config, astro.config.mjs, sitemap, CI/CD, deployment                           |

---

## 9. Build Commands

```
npm run dev              # Dev server :4321
npm run build            # Production build → dist/
npm run preview          # Preview production build
npm test                 # Vitest (tests/)
npm run check            # astro check (types)
npm run format           # Prettier auto-format
npm run format:check     # Prettier check (CI gate)
npm run validate         # MDX frontmatter validation
npm run validate:images  # Validate barrel image references
npm run check:images     # Verify all referenced images exist
npm run images:barrel    # Regenerate src/assets/images/index.ts
npm run generate:tours   # JSON → tour MDX
npm run generate:content # JSON → accommodation/vehicle/destination MDX
npm run astro -- <cmd>   # Astro CLI
```
