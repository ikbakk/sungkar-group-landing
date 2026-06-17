# Sungkar Group Landing — Codebase Map

> Compact reference for AI agents. Sections map exactly to where to look.

---

## 1. Directory Layout

```
src/
├── content.config.ts          # Astro v6 collections: blog + guides (glob loader, Zod)
├── content/{blog,guides}/{slug}/{locale}.mdx
├── pages/                     # File-based routing
│   ├── index.astro            # / (locale=id)
│   ├── [locale]/              # en, ar, ms, zh — mirrors ID pages with locale prefix
│   │   └── {blog,travel-guides,privacy-policy,terms-conditions,404}/
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
│   └── ui/                    # Primitives: {button,card,badge,avatar,nav-menu,select,carousel,logo,marquee,icon,input,textarea,rating,section,breadcrumb,accordion,drawer}/
├── lib/
│   ├── content/               # ALL page content (folder per feature, barrel exports)
│   │   ├── shared/            # {types,navigation,contact-data,og-metadata,schemas,regions}
│   │   ├── {about,landing,destinations,tour-packages,accommodations,car-rental,reviews,contact,faq}/  # index.ts + data.ts per feature
│   │   └── {tourPackages,faqs}/  # Sub-data: region packages, topic FAQs
│   ├── i18n/                  # Framework: {index,loader,localize,ui-strings}.ts + {en,ar,ms,zh}/ (mirrors lib/content/)
│   ├── {images,regions,schemas,site-config,og-metadata,utils,card-styles}.ts
├── styles/{global,sections}.css  # Tailwind v4 + tokens + shadcn
└── assets/images/{destinations,gallery,hero,brand,accommodations,vehicles,og}/ + index.ts (barrel)
scripts/{validate,check-images}.mjs
tests/                          # Vitest: data.test.ts, schemas.test.ts
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

| URL Pattern | Page File | Components |
|---|---|---|
| `/` | `index.astro` | `LandingPage` → Hero,Video,Featured,Destinations,Transport sections |
| `/tentang-kami` | `tentang-kami.astro` | PageHeader + Story, VisionMission, Services, Strengths, Values, Commitment, Faq, Cta |
| `/kontak` | `kontak.astro` | PageHeader + ContactForm, ContactInfo, EmbeddedMap, Faq |
| `/ulasan` | `ulasan.astro` | PageHeader + ReviewsGrid, ReviewStats, ReviewsCta, ReviewGallery, Faq |
| `/faq` | `faq.astro` | PageHeader + Faq |
| `/destinasi[/]` | `destinasi/index.astro` | PageHeader + DestinationGroupSection, RelatedContent, Faq |
| `/destinasi/[slug]` | `destinasi/[slug].astro` | DestinationDetailPanel, DestinationGallery, PackageCard |
| `/paket-wisata[/]` | `paket-wisata/index.astro` | PageHeader + PackageRegionSection(×3), PackagePageCta, Faq, RelatedContent |
| `/paket-wisata/[region][/[collection][/[slug]]]` | `paket-wisata/[region]/...` | CollectionCard → PackageCard → PackageDetail+Itinerary+IncludesExcludes+Gallery+Faq+Carousel |
| `/sewa-mobil[/][/[region][/[slug]]]` | `sewa-mobil/...` | StickyNav+RegionObserver+VehicleRegionSection → VehicleDetailPanel+WhatsAppForm |
| `/akomodasi[/][/[slug]]` | `akomodasi/...` | StickyNav+RegionObserver+RegionNavCard+AccommodationRegionSection → AccommodationCard grid |
| `/blog[/][/[slug]]` | `blog/...` | PageHeader+BlogCard grid → BlogPostLayout(Content)+StructuredData(Article) |
| `/panduan-wisata[/][/[slug]]` | `panduan-wisata/...` | PageHeader+GuideCard → KeyTakeaways+GuideCard+DestinationCard+PackageCard+StructuredData(HowTo) |
| `/kebijakan-privasi`, `/syarat-ketentuan` | `*.astro` | PageHeader + static prose |
| `/[locale]/...` | `[locale]/*.astro` | Same components as ID pages, locale-filtered content |
| 404 | `404.astro` / `[locale]/404.astro` | Custom error page |

**Data flow**: Page → `loadContent(locale, module)` → pass slices as props → child components (never import content directly, enabling i18n)

---

## 4. Data Architecture

### Content Sources

| Source | Schema Fields | Loaded By |
|---|---|---|
| `content/{blog,guides}/{slug}/{locale}.mdx` | `{title,description,image,publishDate,tags/region,locale,slug}` | `astro:content` + `content.config.ts` |
| `lib/content/{about,landing,contact,faq,reviews}/` | Plain objects/arrays | Direct import + i18n copy |
| `lib/content/{destinations,tour-packages,accommodations,car-rental}/` | Typed data arrays + `*PageContent` | Direct import + i18n copy |
| `lib/content/tourPackages/{lombok,sumbawa,labuan-bajo}/` | `TourPackage[]` per region | Barrel export |
| `lib/i18n/{en,ar,ms,zh}/tourPackages/{lombok,sumbawa,labuan-bajo}/` | `TourPackage[]` locale copies (1d,2d1n,3d2n,4d3n,openTrip, index) | Each locale barrel; loaded via `loadContent()` |
| `lib/content/faqs/{about,akomodasi,contact,general,package,reviews,sewa-mobil}.ts` | Per-topic `FaqItem[]` | Combined in `faq/data.ts` |

### Key Types (all in `lib/content/shared/types.ts`)

`Destination`, `TourPackage`, `Accommodation`, `Vehicle`, `Review`, `Guide`, `NavItem`, `BusinessInfo`, `FaqItem`

### Shared Lib Files

| File | Export |
|---|---|
| `lib/site-config.ts` | `SITE_URL = "https://www.sungkargroup.com"` |
| `lib/regions.ts` | `REGIONS`, `REGION_MAP`, labels — keys: lombok, sumbawa, labuan-bajo |
| `lib/schemas.ts` | 10 JSON-LD generators (Organization, LocalBusiness, Breadcrumb, FAQ, Article, Product, HowTo, TouristAttraction, Website, ContactPage) |
| `lib/images.ts` | `ImageSource` type, `isRemoteImage()`, `getImageSrc()`/Width/Height helpers |
| `lib/utils.ts` | `cn()` (clsx + tailwind-merge) |
| `lib/card-styles.ts` | Shared card visual variants |
| `lib/og-metadata.ts` | Per-route OG metadata lookup |

---

## 5. Components by Feature

| Feature | Dir | Key Components | Props/Note |
|---|---|---|---|
| **About** | `about/` | Story, VisionMission, Services, Strengths, Values, Commitment, Cta | Each receives section content slice |
| **Cards** | `cards/` | PackageCard, DestinationCard, VehicleCard, AccommodationCard | Image+badge+key info+CTA |
| **Contact** | `contact/` | ContactForm, ContactInfo, ContactMethodCard, EmbeddedMap, FormField, WhatsAppForm | Form has package dropdown |
| **Blog** | `blog/` | BlogCard, BlogPostLayout | MDX `<Content/>` rendering |
| **Guides** | `guides/` | GuideCard, KeyTakeaways | MDX + structured data |
| **Reviews** | `reviews/` | ReviewsGridSection, ReviewStatsSection, ReviewsCtaSection, ReviewGallerySection | Google review data |
| **Destinations** | `destinations/` | DestinationDetailPanel, DestinationGallery | Detail pages |
| **Packages** | `packages/` | PackageDetailPanel, PackageItinerary, PackageIncludesExcludes, PackageGallery.tsx, PackageImagePreview | Detail pages + gallery dialog |
| **Blocks** | `blocks/` | features-1, services-5, services-6, reviews-5, FooterBlock | Data as props (no direct content imports) |
| **SEO** | `seo/` | SEOMeta, OGImage, StructuredData | `<title>`, OG, JSON-LD |
| **Site** | `site/` | Footer, Faq, PageHeader | Shared shell pieces |
| **UI** | `ui/` | button, card, badge, avatar, nav-menu (mega menu), select, carousel, logo, marquee, icon (Hugeicons), input, textarea, rating, section, breadcrumb.tsx, accordion.tsx, drawer.tsx | Folder per primitive, barrel exports; React.tsx for interactivity |

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

| Task | Primary Files |
|---|---|
| **Add/modify page** | `pages/...` + `lib/content/{page}/index.ts` + maybe `lib/og-metadata.ts` |
| **Add page section** | `components/{feature}/` + `lib/content/{page}/index.ts` |
| **Change nav** | `lib/content/shared/navigation.ts` + source `lib/content/navigationData.ts` + each locale copy `lib/i18n/{en,ar,ms,zh}/navigationData.ts` |
| **Add nav variant** | `shared/types.ts` (`NavItem.variant` union) + `NavigationDesktop.astro` + `NavigationMobile.tsx` + source + all 4 locale nav data files |
| **Nav optimisation (single-item collections)** | `createPackageCollections()` in `lib/content/navigationData.ts` + 4 locale copies returns `{collections, items}`; single-item → direct link, multi-item → submenu |
| **Change SEO** | `components/seo/` + `lib/schemas.ts` |
| **Add tour pkg** | `lib/content/tourPackages/{region}/` + `lib/content/tour-packages/index.ts` + each locale copy `lib/i18n/{en,ar,ms,zh}/tourPackages/{region}/` |
| **Add destination / vehicle / accommodation** | `lib/content/{destinations,car-rental,accommodations}/data.ts` + `index.ts` |
| **Add FAQ** | `lib/content/faqs/{topic}.ts` |
| **Add blog/guide post** | `content/{blog,guides}/{slug}/{locale}.mdx` |
| **Change reviews** | `lib/content/reviews/index.ts` |
| **Add image** | Place WebP in `assets/images/{category}/` + add to `assets/images/index.ts` barrel |
| **Add locale** | `lib/i18n/index.ts` (LOCALES) + `ui-strings.ts` + `localize.ts` (PATH_MAP) + copy locale content dir |
| **Add UI label** | Add key to `lib/i18n/ui-strings.ts` (interface + 5 locales), use `t(locale)` in component |
| **Change colors/tokens** | `styles/global.css` (`@theme inline`) |
| **Change layout shell** | `layouts/MainLayout.astro` |
| **Change footer/header** | `components/site/Footer.astro` / `components/header/` |
| **Add UI primitive** | `components/ui/{name}/` |
| **Fix consistency** | Use `<Button>` from `@/components/ui/button`, `HugeiconsIcon` with `Tick02Icon` for checks |
| **Validate** | `npm test` (vitest), `npm run check` (types), `npm run validate` (MDX frontmatter), `npm run check:images` |

---

## 8. Agent Skills (`.pi/skills/`)

Project-specific skills for AI agents to handle specialized tasks:

| Skill | Focus |
|---|---|
| `locale-ui-strings` | Navigation, footer, buttons, OG metadata, page titles, region labels — UI-level i18n |
| `i18n-content-data` | Tour package itineraries, destinations, vehicles, FAQ, MDX content — data-level i18n |
| `component-library` | UI primitives (shadcn-style), feature section components, Astro/React conventions |
| `content-architecture` | Types, Zod schemas, data modules, feature module setup, barrel exports |
| `page-routing-i18n` | New page/route creation with full 5-locale i18n setup |
| `image-assets` | Image management, barrel exports, check-images, categories |
| `schema-seo` | JSON-LD schemas, OG metadata, meta tags, structured data |
| `content-collections` | Blog + travel guide MDX posts (Astro v6 content collections) |
| `styling-theme` | Tailwind v4 tokens, CSS design system, card utilities, fonts |
| `navigation` | Mega menu, mobile drawer, locale nav data, collection title maps |
| `testing` | Vitest tests, schema validation, test patterns |
| `deployment` | Build config, astro.config.mjs, sitemap, CI/CD, deployment |

---

## 9. Build Commands

```
npm run dev          # Dev server :4321
npm run build        # Production build → dist/
npm run preview      # Preview production build
npm test             # Vitest (tests/)
npm run check        # astro check (types)
npm run validate     # MDX frontmatter validation
npm run check:images # Verify all referenced images exist
npm run astro -- <cmd>  # Astro CLI
```
