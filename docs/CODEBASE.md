# Sungkar Group Landing — Codebase Map

> Use this file instead of grep/find. Every section tells you exactly where to look.

---

## 1. Directory Layout

```
src/
├── content.config.ts   # Astro v6 content collections config (loaders + Zod schemas)
├── content/            # MDX content collections (loaded via glob() in content.config.ts)
│   ├── blog/           # Blog posts — folder-per-slug, locale files inside
│   │   └── {slug}/{locale}.mdx
│   └── guides/         # Travel guides — same structure as blog
│       └── {slug}/{locale}.mdx
├── pages/              # Astro routes (file-based routing)
├── layouts/            # Page shells
├── components/
│   ├── about/          # About page sections
│   ├── accommodations/ # Accommodation listing/detail
│   ├── blocks/         # Reusable section layouts
│   ├── blog/           # Blog components (BlogCard, BlogPostLayout)
│   ├── cards/          # Card components (Package, Destination, Vehicle, Accommodation)
│   ├── contact/        # Contact page (form, info, map, WhatsApp)
│   ├── destinations/   # Destination detail panels, galleries
│   ├── guides/         # Travel guide components (GuideCard, KeyTakeaways)
│   ├── header/         # Header + nav (desktop & mobile)
│   ├── landing/        # Homepage sections
│   ├── packages/       # Tour package components
│   ├── reviews/        # Reviews page sections
│   ├── seo/            # SEOMeta, OGImage, StructuredData
│   ├── site/           # Shared site pieces (Footer, Faq, PageHeader)
│   └── ui/             # Primitives (button, card, select, nav-menu, etc.)
├── lib/
│   ├── images.ts       # ImageSource type (ImageMetadata | string) + helpers (isRemoteImage, getImageSrc, getImageWidth, getImageHeight)
│   ├── content/        # ALL data/content definitions (folder-based barrel exports)
│   │   ├── about/       # aboutContent
│   │   ├── blog/        # getBlogPosts(), getBlogPost() loader helpers using astro:content
│   │   ├── contact/     # contactPageContent
│   │   ├── faq/         # faqPageContent + faqItems (from ./data)
│   │   ├── reviews/     # reviewsPageContent, reviews, reviewStats, toMarqueeReviews
│   │   ├── guides/      # getGuides(), getGuide() loader helpers using astro:content
│   │   ├── destinations/# destinationsPageContent + destinations (from ./data)
│   │   ├── accommodations/ # akomodasiPageContent + accommodations (from ./data)
│   │   ├── car-rental/  # sewaPageContent + vehicles (from ./data)
│   │   ├── tour-packages/# packagePageContent + packages (from tourPackages/)
│   │   ├── landing/     # landingHero, landingFeaturedTours, landingDestinations, etc.
│   │   ├── shared/      # types, contact-data, navigation, og-metadata, schemas, regions
│   │   ├── faqs/        # FAQ items by topic
│   │   ├── tourPackages/ # Package data (lombok/, sumbawa/, labuan-bajo/)
│   │   └── each folder has index.ts (barrel) + data.ts (data arrays)
│   ├── schemas.ts       # JSON-LD structured data generators
│   ├── site-config.ts   # SITE_URL = "https://www.sungkargroup.com"
│   ├── regions.ts       # Region keys, labels, CSS classes
│   ├── utils.ts         # cn() helper
│   └── og-metadata.ts   # Per-route OG metadata
├── lib/i18n/            # i18n framework
│   ├── index.ts         # Types, helpers, LOCALES, NON_DEFAULT_LOCALES, isRTL(), formatDate()
│   ├── loader.ts        # Content loader with static import map + ID fallback
│   ├── localize.ts      # localizeHref() — maps IDs paths to canonical and prepends locale
│   ├── ui-strings.ts    # UI string translations for all 5 locales
│   ├── en/              # English — folder structure mirrors lib/content/ (fully translated)
│   ├── ar/              # Arabic — folder structure mirrors lib/content/ (mostly translated)
│   ├── ms/              # Malay — folder structure mirrors lib/content/ (partially translated)
│   └── zh/              # Chinese — folder structure mirrors lib/content/ (mostly stubs)
├── styles/
│   ├── global.css       # Tailwind v4 + shadcn + design tokens + RTL font support
│   └── sections.css     # Section layout utilities
└── assets/images/       # Organized by topic; barrel file (index.ts) exports DESTINATIONS, GALLERY, HERO, BRAND, ACCOMMODATIONS, VEHICLES
    ├── index.ts          # Barrel — import { DESTINATIONS, HERO, ... } from "@/assets/images"
    ├── destinations/     # gili.webp, lombok.webp, rinjani.webp, sumbawa.webp
    ├── gallery/          # gili-meno.webp, kuta-beach.webp, ...
    ├── hero/             # hero.webp, hero-lombok.webp
    ├── brand/            # logo.webp, og-home.jpg
    ├── accommodations/   # lombok.webp
    ├── vehicles/         # rental.webp
    └── og/               # OG image placeholders (1200×630px WebP per page type)
tests/                    # Vitest test files
public/
├── favicon.ico
└── images/              # Static images (accommodation-lombok.png, rental-vehicle.png)
```

---

## 2. Route → Page → Component Composition

All pages use `MainLayout` (src/layouts/MainLayout.astro) which provides: Header, SEO meta, StructuredData (Organization + WebSite), FadeInText wrapper, Footer, SpeedInsights.

### i18n Routing

- **Default locale `id`** → served at the root URL without a prefix (e.g., `/`, `/about`, `/destinations/...`)
- **Non-default locales** (`en`, `ar`, `ms`, `zh`) → served under `/${locale}/` (e.g., `/en/about`, `/ar/destinations/...`)
- `getStaticPaths()` in `src/pages/[locale]/*.astro` uses `NON_DEFAULT_LOCALES` from `@/lib/i18n` (not `LOCALES`) to exclude `"id"`
- Root-level pages in `src/pages/*.astro` hardcode `locale = "id"` and serve the Indonesian version
- `getLocaleFromPath()` in `@/lib/i18n` correctly returns `DEFAULT_LOCALE` for unprefixed paths
- `localizeHref()` in `@/lib/i18n/localize` returns the href as-is for ID locale (Indonesian paths match file names); for non-ID locales it maps Indonesian→English paths via `PATH_MAP` then prepends the locale
- `getLocalizedPath()` in `@/lib/i18n` generates correct locale-switching URLs for the LocaleSwitcher
- **Locale Switcher**: `LocaleSwitcher.astro` in header (desktop) + inline in `NavigationMobile.tsx` (mobile) — shows all 5 locales with short labels, uses `getLocalizedPath()` for navigation
- **RTL Support**: Arabic (`ar`) uses `dir="rtl"` on `<html>`, Cairo Variable font for both body and headings, LTR locales use Inter + Playfair Display

| URL | Page File | Components Used |
|---|---|---|---|
| `/` | `src/pages/index.astro` | `LandingPage` (composes HeroSection, VideoSection, FeaturedSection, DestinationsSection, TransportSection) |
| `/tentang-kami` | `src/pages/tentang-kami.astro` | `PageHeader`, `StorySection`, `VisionMissionSection`, `ServicesSection`, `StrengthsSection`, `ValuesSection`, `CommitmentSection`, `Faq`, `CtaSection` |
| `/kontak` | `src/pages/kontak.astro` | `PageHeader`, `ContactForm`, `ContactInfoSection`, `EmbeddedMap`, `Faq` |
| `/ulasan` | `src/pages/ulasan.astro` | `PageHeader`, `ReviewsGridSection`, `ReviewStatsSection`, `ReviewsCtaSection`, `ReviewGallerySection`, `Faq` |
| `/faq` | `src/pages/faq.astro` | `PageHeader`, `Faq` |
| `/destinasi` | `src/pages/destinasi/index.astro` | `PageHeader`, `DestinationGroupSection`, `RelatedContent`, `Faq` |
| `/destinasi/[slug]` | `src/pages/destinasi/[slug].astro` | `DestinationDetailPanel`, `DestinationGallery`, `PackageCard` |
| `/paket-wisata` | `src/pages/paket-wisata/index.astro` | `PageHeader`, `PackageRegionSection` (×3), `PackagePageCta`, `Faq`, `RelatedContent` |
| `/paket-wisata/[region]` | `src/pages/paket-wisata/[region]/index.astro` | `CollectionCard` listing |
| `/paket-wisata/[region]/[collection]` | `src/pages/paket-wisata/[region]/[collection]/index.astro` | `PackageCard` listing |
| `/paket-wisata/[region]/[collection]/[slug]` | `src/pages/paket-wisata/[region]/[collection]/[slug].astro` | `PackageImagePreview`, `PackageDetailPanel`, `PackageItinerary`, `PackageIncludesExcludes`, `PackageGallery`, `Faq`, `Carousel` |
| `/sewa-mobil` | `src/pages/sewa-mobil/index.astro` | `StickyNav`, `RegionObserver`, `VehicleRegionSection`, `PackagePageCta`, `Faq` |
| `/sewa-mobil/[region]` | `src/pages/sewa-mobil/[region]/index.astro` | `VehicleRegionSection` (region-filtered) |
| `/sewa-mobil/[region]/[slug]` | `src/pages/sewa-mobil/[region]/[slug].astro` | `VehicleDetailPanel`, `WhatsAppForm` |
| `/akomodasi` | `src/pages/akomodasi/index.astro` | `StickyNav`, `RegionObserver`, `RegionNavCard`, `AccommodationRegionSection`, `PackagePageCta`, `Faq` |
| `/akomodasi/[slug]` | `src/pages/akomodasi/[slug].astro` | `AccommodationCard` listing (region-filtered) |
| `/blog` | `src/pages/blog/index.astro` | `PageHeader`, `BlogCard` grid (MDX content from content collections) |
| `/blog/[slug]` | `src/pages/blog/[slug].astro` | `BlogPostLayout` (`<Content/>` from rendered MDX), `StructuredData` (Article schema) |
| `/panduan-wisata` | `src/pages/panduan-wisata/index.astro` | `PageHeader`, `GuideCard` listing (from MDX content collections, grouped by region) |
| `/panduan-wisata/[slug]` | `src/pages/panduan-wisata/[slug].astro` | `KeyTakeaways`, `GuideCard`, `DestinationCard`, `PackageCard`, `StructuredData` (HowTo schema) |
| `/kebijakan-privasi` | `src/pages/kebijakan-privasi.astro` | `PageHeader`, static prose content |
| `/syarat-ketentuan` | `src/pages/syarat-ketentuan.astro` | `PageHeader`, static prose content |
| **Non-default locale pages** (en, ar, ms, zh) | `src/pages/[locale]/*.astro` | Same components as ID root pages, but with locale prefix + English paths in URLs |
| `/en\|ar\|ms\|zh/blog` | `src/pages/[locale]/blog/index.astro` | `PageHeader`, `BlogCard` grid (locale-filtered MDX) |
| `/en\|ar\|ms\|zh/blog/[slug]` | `src/pages/[locale]/blog/[slug].astro` | `BlogPostLayout`, `StructuredData` (Article schema) |
| `/en\|ar\|ms\|zh/travel-guides` | `src/pages/[locale]/travel-guides/index.astro` | `PageHeader`, `GuideCard` grid (locale-filtered MDX) |
| `/en\|ar\|ms\|zh/travel-guides/[slug]` | `src/pages/[locale]/travel-guides/[slug].astro` | MDX detail with HowTo schema |

---

## 3. Data Architecture

### Content Types (all in `src/lib/content/`, plus `src/content.config.ts` + `src/content/`)

| File | Exports | Type |
|---|---|---|---|---|
| `content.config.ts` (root) | `blog`, `guides` content collection definitions | Astro v6 `defineCollection({ loader: glob(), schema: z.object() })` |
| `content/blog/{slug}/{locale}.mdx` | MDX frontmatter + body | Blog post with `{ title, description, image, publishDate, tags, locale, slug }` |
| `content/guides/{slug}/{locale}.mdx` | MDX frontmatter + body | Travel guide with `{ title, description, image, region, locale, slug }` |
| `lib/content/blog/loader.ts` | `getBlogPosts(locale)`, `getBlogPost(locale, slug)` | Locale-aware blog data loader using `render(entry)` from `astro:content` |
| `lib/content/blog/index.ts` | Barrel re-export | Re-exports loader functions |
| `lib/content/guides/loader.ts` | `getGuides(locale)`, `getGuide(locale, slug)` | Locale-aware guide data loader using `render(entry)` from `astro:content` |
| `lib/content/guides/index.ts` | Barrel re-export | Re-exports loader functions |
| `about/index.ts` | `aboutContent` object | About page content (hero, story, vision, mission, services, strengths, values, commitment, cta sections) |
| `landing/index.ts` | `landingHero`, `landingFeaturedTours`, `landingDestinations`, `landingTransport`, `landingTestimonials`, `landingVideo`, `landingBackgroundImage` | Homepage content |
| `destinations/index.ts` | `destinationsPageContent` + `destinations` (from `./data`) | `{ slug, title, region, image, gallery[], summary, thingsToDo[], packages[] }` |
| `destinations/data.ts` | `destinations: Destination[]`, `Destination` type | Data array + type |
| `tour-packages/index.ts` | `packagePageContent`, `packages: TourPackage[]` | Tour package listing page content + data |
| `tourPackages/` | Region-specific package data | Package data files organized by region |
| `tourPackages/collections.ts` | `COLLECTIONS` | Duration-based slugs (1-hari, 2-hari-1-malam, etc.) |
| `tourPackages/types.ts` | `TourPackage`, `Region`, `PackageCollection` | Type definitions |
| `tourPackages/utils.ts` | Utility helpers | Package data utilities |
| `accommodations/index.ts` | `akomodasiPageContent` + `accommodations` (from `./data`) | `{ slug, name, region, perks[], regionalHighlights[], description, image }` |
| `accommodations/data.ts` | `accommodations: Accommodation[]`, `Accommodation` type | Data array + type |
| `car-rental/index.ts` | `sewaPageContent` + `vehicles` (from `./data`) | `{ slug, name, region, pricePerDay, seats, transmission, features[], bestFor[], description, imageTop, imageBottom }` |
| `car-rental/data.ts` | `vehicles: Vehicle[]`, `Vehicle` type | Data array + type |
| `reviews/index.ts` | `reviewsPageContent`, `reviews`, `reviewStats`, `toMarqueeReviews`, `Review`, `MarqueeReview` | Google review data + photos |
| `faq/index.ts` | `faqPageContent` + `faqItems` (from `./data`) | Aggregated FAQ data |
| `faq/data.ts` | `faqItems` | FAQ items combined from per-topic files |
| `contact/index.ts` | `contactPageContent` | Contact page content (hero, info, form, map) |
| `faqs/*.ts` | Per-topic FAQ arrays | `about`, `akomodasi`, `contact`, `general`, `package`, `reviews`, `sewa-mobil` |
| `shared/types.ts` | All domain types (Destination, TourPackage, Accommodation, Vehicle, Guide, Review, NavItem, BusinessInfo, etc.) | TypeScript interfaces/types — `NavItem.variant: "link" \| "mega" \| "dropdown"` |
| `shared/contact-data.ts` | `businessInfo` | Business contact details |
| `shared/navigation.ts` | `headerNav: NavItem[]` | Navigation menu structure (mega + dropdown + link variants) |
| `shared/og-metadata.ts` | OG metadata helpers | Shared across pages |
| `shared/schemas.ts` | JSON-LD schema helpers | Shared across pages |
| `shared/regions.ts` | Region key/label maps | Shared across pages |

### Shared Data (`src/lib/`)

| File | Purpose |
|---|---|
| `site-config.ts` | `SITE_URL = "https://www.sungkargroup.com"` — single source of truth for domain |
| `regions.ts` | `REGIONS`, `REGION_MAP`, `REGION_LABEL`, `REGION_CONTENT_KEY` — keys: "lombok", "sumbawa", "labuan-bajo" |
| `schemas.ts` | Generators: `generateOrganizationSchema`, `generateLocalBusinessSchema`, `generateBreadcrumbSchema`, `generateFAQPageSchema`, `generateTouristAttractionSchema`, `generateProductSchema`, `generateHowToSchema`, `generateArticleSchema`, `generateWebsiteSchema`, `generateContactPageSchema` |
| `card-styles.ts` | Shared card visual variants |
| `og-metadata.ts` | Per-route Open Graph metadata lookup |
| `utils.ts` | `cn()` function (clsx + tailwind-merge) |

---

## 4. Data Flow Pattern (Page → Component → Content)

```
Page (src/pages/xxx.astro)
  ├── loads locale-aware content via loadContent(locale, "pageModule") from lib/i18n/loader.ts
  ├── passes localized data slices as props to child components
  ├── imports layout: MainLayout
  │     ├── provides SEO, Header, Footer
  │     └── <slot/> renders page content
  ├── imports StructuredData from src/components/seo/
  │     └── uses schema generators from src/lib/schemas.ts
  └── composes page-specific components from src/components/
         └── all components receive data via props (no direct imports from lib/content/)
```

Example — `about.astro`:
```
Page
  └── loadContent(locale, "about") → aboutContent
  └── <StorySection story={aboutContent.story} />
  └── <VisionMissionSection vision={aboutContent.vision} mission={aboutContent.mission} />
  └── <ServicesSection services={aboutContent.services} />
  └── <StrengthsSection strengths={aboutContent.strengths} />
  └── <ValuesSection values={aboutContent.values} />
  └── <CommitmentSection commitment={aboutContent.commitment} />
  └── <CtaSection cta={aboutContent.cta} />
```

Root-level pages (`src/pages/*.astro`) hardcode `locale = "id"` and call `loadContent("id", module)`.
Locale-prefixed pages (`src/pages/[locale]/*.astro`) use the dynamic `locale` param.

---

## 5. Component Organization By Feature

### About (`components/about/`)
| File | Props |
|---|---|
| `StorySection.astro` | `story: { title, paragraphs[] }` |
| `VisionMissionSection.astro` | `vision: { description }`, `mission: { items[] }` |
| `ServicesSection.astro` | `services: Array<{ title, description }>` |
| `StrengthsSection.astro` | `strengths: Array<{ title, description }>` |
| `ValuesSection.astro` | `values: Array<{ title, description }>` |
| `CommitmentSection.astro` | `commitment: { title, description }` |
| `CtaSection.astro` | `cta: { title, description, primaryButton: { label, href } }` |

### Cards (`components/cards/`)
| File | Renders | Used By |
|---|---|---|
| `PackageCard.astro` | Tour package (image, badge, duration, highlights, price, CTA) | Paket wisata pages |
| `DestinationCard.astro` | Destination (image, description, things-to-do count) | Destinasi pages |
| `VehicleCard.astro` | Vehicle (seats, transmission, features, price) | Sewa mobil pages |
| `AccommodationCard.astro` | Accommodation (region badge, amenities) | Akomodasi pages |

### Contact (`components/contact/`)
| File | Purpose |
|---|---|
| `ContactForm.astro` | Full inquiry form with package selection dropdown |
| `ContactInfoSection.astro` | Business info (phone, email, address, social) + icons |
| `ContactMethodCard.astro` | Individual contact method card |
| `EmbeddedMap.astro` | Google Maps embed |
| `FormField.astro` | Reusable form field (input/textarea/select) |
| `WhatsAppForm.astro` | WhatsApp inquiry with pre-filled message |

### Blocks (`components/blocks/`)
Reusable section layouts that accept data as props:
- `features-1.astro` — Feature cards with images
- `services-5.astro` — Icon-based service cards grid
- `services-6.astro` — Image-based service cards (featured tours)
- `reviews-5.astro` — Marquee of review cards
- `FooterBlock.astro` — Full footer layout

### SEO (`components/seo/`)
| File | Purpose |
|---|---|
| `SEOMeta.astro` | Injects `<title>`, `<meta>`, OG, Twitter Card, canonical, breadcrumb JSON-LD |
| `OGImage.astro` | Optimized OG image with gradient overlay + optional caption |
| `StructuredData.astro` | Generic `<script type="application/ld+json">` injector |

### Image Architecture (`components/ui/`, `lib/`)
| File | Purpose |
|---|---|
| `lib/images.ts` | `ImageSource` type (= `ImageMetadata \| string`), `isRemoteImage()`, `getImageSrc()`, `getImageWidth()`, `getImageHeight()` helpers |
| `components/ui/OptimizedImage.astro` | Unified image component — if `src` is `ImageMetadata` uses Astro `<Image>` with optimization; if `string` (remote URL) renders `<img>` |

### UI Primitives (`components/ui/`)
Organized as folders with `index.ts` barrel exports:
- `button/` — `button.astro` + `button-variants.ts` (CVA)
- `card/` — `card.astro`, `card-header`, `card-content`, `card-footer`, etc.
- `badge/` — `badge.astro` + `badge-variants.ts`
- `avatar/` — `avatar.astro`, `avatar-image`, `avatar-fallback`, `avatar-group`, `avatar-badge`
- `navigation-menu/` — Full mega-menu system (menu, list, item, link, trigger, content, indicator, positioner) — positioner uses `before:` bridge to prevent hover gap
- `select/` — `select.astro`, `select-trigger`, `select-content`, `select-item`, etc.
- `carousel/` — `carousel.astro`, `carousel-content`, `carousel-item`, `carousel-next`, `carousel-previous`
- `logo/` — `logo.astro`, `logo-image.astro`, `logo-text.astro`
- `marquee/` — `marquee.astro`
- `icon/` — `icon.astro` (Hugeicons wrapper)
- `input/`, `textarea/` — Form inputs
- `native-select/` — Native `<select>` components
- `separator/`, `rating/`, `section/` — Utility primitives
- `RegionNavCard.astro`, `RegionObserver.astro`, `StickyNav.astro` — Region-scrolling utilities

Standalone React (.tsx) components:
- `accordion.tsx` — Accordion (Base UI)
- `breadcrumb.tsx` — Breadcrumb
- `drawer.tsx` — Drawer (Vaul library)
- `header/NavigationMobile.tsx` — Mobile nav (Drawer + Accordion)
- `packages/PackageGallery.tsx` — Full-screen image gallery (Base UI Dialog)
- `site/FaqAccordion.tsx` — Interactive FAQ accordion

---

## 6. Shared Patterns & Conventions

### Import Alias
- `@/*` maps to `src/*` — e.g., `@/components/ui/button`, `@/lib/content/landing`, `@/assets/images/hero.webp`

### Styling
- **Tailwind CSS v4** (CSS-based config in `global.css` via `@theme inline`)
- Design tokens: `brand-50` through `brand-900` (blue/teal), `surface`, `surface-soft`, `text`, `text-muted`, `whatsapp`
- `@layer components` utilities: `.card-base`, `.card-hover`, `.card-interactive`, `.card-hover-border`, `.card-shadow-base`
- Radius scale: `--radius-sm` through `--radius-4xl` (base `0.75rem`)
- Fonts: `Playfair Display` (headings), `Inter Variable` (body) for LTR locales; `Cairo Variable` (both) for Arabic RTL

### Components Convention
- `.astro` files for static/SSR rendering
- `.tsx` files for interactive React components
- Each component folder has `index.ts` barrel export
- Props typed with `interface Props {}` in Astro frontmatter
- **Attribute naming**: `.astro` files use `class` (native HTML), `.tsx` files use `className` (JSX convention). Do NOT use `className` in `.astro` files or `class` in `.tsx` files.

### Data Pattern
- Content files export typed arrays/objects
- Pages load locale-aware content via `loadContent()` from `@/lib/i18n/loader`
- Pages pass content slices as props to child components
- Components **never** import directly from `@/lib/content/` — they receive data via props
- This enables i18n: the same component renders different locale content based on props
- Pages compose sections in order (PageHeader → sections → Faq → CTA)

---

## 7. Key Files to Edit by Task

| Task | Files |
|---|---|
| **Add/modify a page** | `src/pages/...`, `src/lib/content/{page}/index.ts`, maybe `src/lib/og-metadata.ts` |
| **Add a new section to a page** | `src/components/{feature}/`, `src/lib/content/{page}/index.ts` |
| **Change navigation links** | `src/lib/content/shared/navigation.ts` — also update locale copies: `src/lib/i18n/{ms,en,ar,zh}/navigationData.ts` |
| **Add nav variant** | `src/lib/content/shared/types.ts` (`NavItem.variant` union), `src/components/header/NavigationDesktop.astro`, `src/components/header/NavigationMobile.tsx` — then update all 5 `navigationData.ts` files with the variant data |
| **Change SEO / structured data** | `src/components/seo/`, `src/lib/schemas.ts` |
| **Add/change tour package** | `src/lib/content/tourPackages/{region}/`, `src/lib/content/tour-packages/index.ts` |
| **Add/change destination** | `src/lib/content/destinations/data.ts`, `src/lib/content/destinations/index.ts` |
| **Add/change vehicle** | `src/lib/content/car-rental/data.ts`, `src/lib/content/car-rental/index.ts` |
| **Add/change accommodation** | `src/lib/content/accommodations/data.ts` |
| **Add/change FAQ** | `src/lib/content/faqs/{topic}.ts` |
| **Add/change blog post** | `src/content/blog/{slug}/{locale}.mdx` |
| **Add/change guide** | `src/content/guides/{slug}/{locale}.mdx` |
| **Change review data** | `src/lib/content/reviews/index.ts` |
| **Add image** | Place WebP in correct subdirectory under `src/assets/images/{destinations,gallery,hero,brand,accommodations,vehicles}/`, add import + export to `src/assets/images/index.ts`, then import from `@/assets/images` via the barrel |
| **Add/modify i18n locale** | `src/lib/i18n/index.ts` (update `LOCALES`, `NON_DEFAULT_LOCALES`, locale-specific formatters), `src/lib/i18n/ui-strings.ts` (UI translations), `src/lib/i18n/localize.ts` (path mapping), `src/lib/i18n/loader.ts` (content modules) |
| **Add UI label to a component** | First add the key to `src/lib/i18n/ui-strings.ts` (interface + translations for all 5 locales), then use `const uiStrings = t(locale)` in the component and reference `{uiStrings.section.key}` |
| **Fix component consistency** | Use `Button` from `@/components/ui/button` instead of raw `<a>` CTAs; use `HugeiconsIcon` with `Tick02Icon` from `@/hugeicons/core-free-icons` for checkmark icons |
| **Translate page content** | `src/lib/i18n/{locale}/` — copy structure from `src/lib/i18n/en/`, translate all strings, keep exports/types identical |
| **Add locale switcher** | `src/components/header/LocaleSwitcher.astro` + `NavigationMobile.tsx` (inline switcher) — uses `LOCALES`, `LOCALE_LABELS`, `getLocalizedPath` from `@/lib/i18n` |
| **Fix navigation links per locale** | `src/lib/i18n/localize.ts` — `localizeHref()` handles locale-aware `href` generation, skips prefix for default locale |
| **Change color/brand tokens** | `src/styles/global.css` (`@theme inline`, `:root`) |
| **Change layout shell** | `src/layouts/MainLayout.astro` |
| **Change footer** | `src/components/site/Footer.astro` (uses `FooterBlock`) |
| **Change header/nav** | `src/components/header/Header.astro`, `NavigationDesktop.astro`, `NavigationMobile.tsx` — `NavigationDesktop` handles `link`, `mega`, `dropdown` variants; `NavigationMobile` handles `link`, `mega`, `dropdown` variants | |
| **Add UI primitive** | `src/components/ui/{name}/` |
| **Run tests** | `npm test` (vitest) — config: `vitest.config.ts`; test files in `tests/` |
| **Run type check** | `npm run check` (astro check) |
| **Validate data files** | `npm test` includes runtime Zod validation for packages, destinations, accommodations, vehicles — see `tests/data.test.ts` |
| **404 page** | `src/pages/404.astro` — custom error page |
