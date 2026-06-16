# Sungkar Group Landing — Codebase Map

> Use this file instead of grep/find. Every section tells you exactly where to look.

---

## 1. Directory Layout

```
src/
├── pages/              # Astro routes (file-based routing)
├── layouts/            # Page shells
├── components/
│   ├── about/          # About page sections
│   ├── accommodations/ # Accommodation listing/detail
│   ├── blocks/         # Reusable section layouts
│   ├── cards/          # Card components (Package, Destination, Vehicle, Accommodation)
│   ├── contact/        # Contact page (form, info, map, WhatsApp)
│   ├── destinations/   # Destination detail panels, galleries
│   ├── guides/         # Travel guide cards
│   ├── header/         # Header + nav (desktop & mobile)
│   ├── landing/        # Homepage sections
│   ├── packages/       # Tour package components
│   ├── reviews/        # Reviews page sections
│   ├── seo/            # SEOMeta, OGImage, StructuredData
│   ├── site/           # Shared site pieces (Footer, Faq, PageHeader)
│   └── ui/             # Primitives (button, card, select, nav-menu, etc.)
├── lib/
│   ├── content/        # ALL data/content definitions
│   │   ├── about.ts, landing.ts, guides.ts
│   │   ├── akomodasiData.ts, sewaMobilData.ts, destinationsData.ts
│   │   ├── akomodasiPage.ts, sewaPage.ts, packagePage.ts, reviewPage.ts, contactPage.ts
│   │   ├── navigationData.ts, faqPage.ts, contact-data.ts
│   │   ├── faqs/        # FAQ items by topic
│   │   └── tourPackages/ # Package data (lombok/, sumbawa/, labuan-bajo/)
│   ├── schemas.ts       # JSON-LD structured data generators
│   ├── site-config.ts   # SITE_URL = "https://www.sungkargroup.com"
│   ├── regions.ts       # Region keys, labels, CSS classes
│   ├── utils.ts         # cn() helper
│   └── og-metadata.ts   # Per-route OG metadata
├── styles/
│   ├── global.css       # Tailwind v4 + shadcn + design tokens
│   └── sections.css     # Section layout utilities
└── assets/images/       # All imported images (webp/jpg)
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

| URL | Page File | Components Used |
|---|---|---|
| `/` | `src/pages/index.astro` | `LandingPage` (composes HeroSection, VideoSection, FeaturedSection, DestinationsSection, TransportSection) |
| `/about` | `src/pages/about.astro` | `PageHeader`, `StorySection`, `VisionMissionSection`, `ServicesSection`, `StrengthsSection`, `ValuesSection`, `CommitmentSection`, `Faq`, `CtaSection` |
| `/contact` | `src/pages/contact.astro` | `PageHeader`, `ContactForm`, `ContactInfoSection`, `EmbeddedMap`, `Faq` |
| `/reviews` | `src/pages/reviews.astro` | `PageHeader`, `ReviewsGridSection`, `ReviewStatsSection`, `ReviewsCtaSection`, `ReviewGallerySection`, `Faq` |
| `/faq` | `src/pages/faq.astro` | `PageHeader`, `Faq` |
| `/destinations` | `src/pages/destinations/index.astro` | `PageHeader`, `DestinationGroupSection`, `RelatedContent`, `Faq` |
| `/destinations/[slug]` | `src/pages/destinations/[slug].astro` | `DestinationDetailPanel`, `DestinationGallery`, `PackageCard` |
| `/tour-packages` | `src/pages/tour-packages/index.astro` | `PageHeader`, `PackageRegionSection` (×3), `PackagePageCta`, `Faq`, `RelatedContent` |
| `/tour-packages/[region]` | `src/pages/tour-packages/[region]/index.astro` | `CollectionCard` listing |
| `/tour-packages/[region]/[collection]` | `src/pages/tour-packages/[region]/[collection]/index.astro` | `PackageCard` listing |
| `/tour-packages/[region]/[collection]/[slug]` | `src/pages/tour-packages/[region]/[collection]/[slug].astro` | `PackageImagePreview`, `PackageDetailPanel`, `PackageItinerary`, `PackageIncludesExcludes`, `PackageGallery`, `Faq`, `Carousel` |
| `/car-rental` | `src/pages/car-rental/index.astro` | `StickyNav`, `RegionObserver`, `VehicleRegionSection`, `PackagePageCta`, `Faq` |
| `/car-rental/[region]` | `src/pages/car-rental/[region]/index.astro` | `VehicleRegionSection` (region-filtered) |
| `/car-rental/[region]/[slug]` | `src/pages/car-rental/[region]/[slug].astro` | `VehicleDetailPanel`, `WhatsAppForm` |
| `/accommodations` | `src/pages/accommodations/index.astro` | `StickyNav`, `RegionObserver`, `RegionNavCard`, `AccommodationRegionSection`, `PackagePageCta`, `Faq` |
| `/accommodations/[slug]` | `src/pages/accommodations/[slug].astro` | `AccommodationCard` listing (region-filtered) |
| `/travel-guides` | `src/pages/travel-guides/index.astro` | `GuideCard` listing (grouped by region) |
| `/travel-guides/[slug]` | `src/pages/travel-guides/[slug].astro` | `KeyTakeaways`, `GuideCard`, `DestinationCard`, `PackageCard` |
| **Non-default locale pages** (en, ar, ms, zh) | `src/pages/[locale]/*.astro` | Same components as ID root pages, but with locale prefix in URLs |

---

## 3. Data Architecture

### Content Types (all in `src/lib/content/`)

| File | Exports | Type |
|---|---|---|
| `about.ts` | `aboutContent` object | About page content (hero, story, vision, mission, services, strengths, values, commitment, cta sections) |
| `landing.ts` | `landingHero`, `landingTourCards`, `landingDestinationCards` | Homepage content |
| `destinationsData.ts` | `destinations: Destination[]` | `{ slug, title, region, image, gallery[], summary, thingsToDo[], packages[] }` |
| `tourPackages/index.ts` | `packages: TourPackage[]` | `{ slug, title, region, collectionSlug, category, duration, images[], summary, highlights[], itinerary[], includes[], excludes[] }` |
| `tourPackages/*.ts` | Region-specific package data | Re-exported through `index.ts` |
| `tourPackages/collections.ts` | `COLLECTIONS` | Duration-based slugs (1-hari, 2-hari-1-malam, etc.) |
| `tourPackages/types.ts` | `TourPackage`, `Region`, `PackageCollection` | Type definitions |
| `tourPackages/utils.ts` | Utility helpers | Package data utilities |
| `akomodasiData.ts` | `accommodations: Accommodation[]` | `{ slug, name, region, perks[], regionalHighlights[], description, image }` |
| `sewaMobilData.ts` | `vehicles: Vehicle[]` | `{ slug, name, region, pricePerDay, seats, transmission, features[], bestFor[], description, imageTop, imageBottom }` |
| `guides.ts` | `guides` array | Travel guide content |
| `reviewPage.ts` | `reviews`, `reviewStats`, `touristPhotos` | Google review data + photos |
| `faqPage.ts` | FAQ content | Aggregated FAQ data |
| `faqs/*.ts` | Per-topic FAQ arrays | `about`, `akomodasi`, `contact`, `general`, `package`, `reviews`, `sewa-mobil` |
| `navigationData.ts` | `headerNav: NavItem[]` | Navigation menu structure (mega menu) |
| `contact-data.ts` | `businessInfo` | Business contact details |
| `contactPage.ts`, `akomodasiPage.ts`, `destinationsPage.ts`, `packagePage.ts`, `sewaPage.ts` | Page-specific content objects | Eyebrow, title, description, hero images for each page header |

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
  ├── imports content from src/lib/content/xxx.ts
  ├── passes data as props to components
  ├── imports layout: MainLayout
  │     ├── provides SEO, Header, Footer
  │     └── <slot/> renders page content
  ├── imports StructuredData from src/components/seo/
  │     └── uses schema generators from src/lib/schemas.ts
  └── composes page-specific components from src/components/
```

Example — `tentang-kami.astro`:
```
Page
  └── imports aboutContent from lib/content/about.ts
  └── components/about/StorySection — renders aboutContent.story
  └── components/about/VisionMissionSection — renders aboutContent.vision/mission
  └── components/about/ServicesSection — maps aboutContent.services[]
  └── components/about/StrengthsSection — maps aboutContent.strengths[]
  └── components/about/ValuesSection — maps aboutContent.values[]
  └── components/about/CommitmentSection — renders aboutContent.commitment
  └── components/about/CtaSection — renders aboutContent.cta
```

---

## 5. Component Organization By Feature

### About (`components/about/`)
| File | Content Source |
|---|---|
| `StorySection.astro` | `aboutContent.story` |
| `VisionMissionSection.astro` | `aboutContent.vision`, `aboutContent.mission` |
| `ServicesSection.astro` | `aboutContent.services[]` |
| `StrengthsSection.astro` | `aboutContent.strengths[]` |
| `ValuesSection.astro` | `aboutContent.values[]` |
| `CommitmentSection.astro` | `aboutContent.commitment` |
| `CtaSection.astro` | `aboutContent.cta` |

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

### UI Primitives (`components/ui/`)
Organized as folders with `index.ts` barrel exports:
- `button/` — `button.astro` + `button-variants.ts` (CVA)
- `card/` — `card.astro`, `card-header`, `card-content`, `card-footer`, etc.
- `badge/` — `badge.astro` + `badge-variants.ts`
- `avatar/` — `avatar.astro`, `avatar-image`, `avatar-fallback`, `avatar-group`, `avatar-badge`
- `navigation-menu/` — Full mega-menu system (menu, list, item, link, trigger, content, indicator, positioner)
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
- Fonts: `Playfair Display` (headings), `Inter Variable` (body)

### Components Convention
- `.astro` files for static/SSR rendering
- `.tsx` files for interactive React components
- Each component folder has `index.ts` barrel export
- Props typed with `interface Props {}` in Astro frontmatter

### Data Pattern
- Content files export typed arrays/objects
- Components receive content via imports (not fetched)
- Pages compose sections in order (PageHeader → sections → Faq → CTA)

---

## 7. Key Files to Edit by Task

| Task | Files |
|---|---|
| **Add/modify a page** | `src/pages/...`, `src/lib/content/xxxPage.ts`, maybe `src/lib/og-metadata.ts` |
| **Add a new section to a page** | `src/components/{feature}/`, `src/lib/content/xxx.ts` |
| **Change navigation links** | `src/lib/content/navigationData.ts` |
| **Change SEO / structured data** | `src/components/seo/`, `src/lib/schemas.ts` |
| **Add/change tour package** | `src/lib/content/tourPackages/{region}/`, `src/lib/content/packagePage.ts` |
| **Add/change destination** | `src/lib/content/destinationsData.ts`, `src/lib/content/destinationsPage.ts` |
| **Add/change vehicle** | `src/lib/content/sewaMobilData.ts`, `src/lib/content/sewaPage.ts` |
| **Add/change accommodation** | `src/lib/content/akomodasiData.ts` |
| **Add/change FAQ** | `src/lib/content/faqs/{topic}.ts` |
| **Add/change guide** | `src/lib/content/guides.ts` |
| **Change review data** | `src/lib/content/reviewPage.ts` |
| **Add image** | Place in `src/assets/images/`, import via `@/assets/images/` |
| **Add/modify i18n locale** | `src/lib/i18n/index.ts` (update `LOCALES`, `NON_DEFAULT_LOCALES`, locale-specific formatters) |
| **Change color/brand tokens** | `src/styles/global.css` (`@theme inline`, `:root`) |
| **Change layout shell** | `src/layouts/MainLayout.astro` |
| **Change footer** | `src/components/site/Footer.astro` (uses `FooterBlock`) |
| **Change header/nav** | `src/components/header/Header.astro`, `NavigationDesktop.astro`, `NavigationMobile.tsx` |
| **Add UI primitive** | `src/components/ui/{name}/` |
