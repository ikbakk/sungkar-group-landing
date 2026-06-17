# Sungkar Group Landing

Situs landing multi-bahasa untuk Sungkar Group — operator wisata Lombok. 312 halaman, 5 bahasa (id/en/ar/ms/zh), static site.

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build ke `dist/` |
| `npm run preview` | Preview production build |
| `npm test` | Jalankan vitest |
| `npm run astro ...` | Astro CLI |

## Adding Content

Semua jenis konten di bawah ini sudah punya template halaman — cukup tambah data, halaman + schema ikut otomatis via `getStaticPaths()`.

### Paket Wisata Baru

```ts
// src/lib/content/tourPackages/lombok/data.ts — tambah object ke array `lombokPackages`
{
  slug: "paket-wisata-3-hari-2-malam-gili-trawangan",
  title: "Paket Wisata Lombok 3 Hari 2 Malam Gili Trawangan",
  summary: "Jelajahi Gili Trawangan, snorkeling, dan Pantai Kuta dalam 3 hari.",
  region: "lombok",
  collectionSlug: "3-hari-2-malam",
  collectionTitle: "3 Hari 2 Malam",
  duration: "3 hari 2 malam",
  category: "Private Tour",
  highlights: ["Snorkeling 3 Gili", "Pantai Kuta", "Makanan khas"],
  itinerary: [
    "Hari 1 - Jemput bandara → Gili Trawangan → Check-in hotel",
    "Hari 2 - Snorkeling 3 Gili → Makan siang → Pantai Kuta",
    "Hari 3 - Check-out → Antar bandara",
  ],
  images: [{ src: "/images/packages/gili-trawangan.webp" }],
  includes: ["Hotel 2 malam", "Makan 3x", "Transportasi"],
  excludes: ["Tiket pesawat", "Pengeluaran pribadi"],
}
```

Tambahkan juga entry di koleksi yang sesuai (`src/lib/content/tourPackages/collections.ts` kalau durasi belum terdaftar).

### Destinasi Baru

```ts
// src/lib/content/destinations/data.ts
{
  slug: "pink-beach",
  title: "Pantai Pink Lombok",
  region: "lombok",
  summary: "Pantai dengan pasir berwarna merah muda yang unik.",
  image: { src: "/images/destinations/pink-beach.webp" },
  gallery: [{ src: "/images/destinations/pink-beach-1.webp" }],
  thingsToDo: ["Snorkeling", "Foto", "Tracking"],
  packages: ["paket-wisata-3-hari-2-malam"],
}
```

### Kendaraan Baru (Sewa Mobil)

```ts
// src/lib/content/car-rental/data.ts
{
  slug: "daihatsu-xenia",
  name: "Daihatsu Xenia",
  region: "lombok",
  pricePerDay: "350000",
  seats: 7,
  transmission: "Manual",
  features: ["AC", "Music"],
  bestFor: ["Keluarga", "Bandara"],
  description: "Mobil keluarga irit untuk perjalanan dalam kota.",
  imageTop: { src: "/images/vehicles/xenia-top.webp" },
  imageBottom: { src: "/images/vehicles/xenia-bottom.webp" },
}
```

### Blog Post Baru

Buat file MDX:

```mdx
---
# src/content/blog/cara-pilih-tour-lombok/id.mdx
title: "Cara Memilih Tour Lombok yang Tepat"
description: "Panduan memilih paket wisata Lombok sesuai kebutuhan."
publishDate: 2026-06-17
tags: ["tips", "lombok"]
readingTime: 5
author: "Tim Sungkar Group"
featuredImage: "/images/blog/tips-memilih-tour.webp"
---

Konten blog dalam markdown...
```

Untuk locale lain, copy file ke `{slug}/{locale}.mdx` dan translate kontennya.

#### Blog Frontmatter Schema

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | `string` | ✅ | |
| `description` | `string` | ✅ | |
| `publishDate` | `YYYY-MM-DD` | ✅ | Bare date, no quotes |
| `tags` | `string[]` | ✅ | YAML list or inline array |
| `readingTime` | `number` | ✅ | Minutes |
| `author` | `string` | ❌ | Default: "Tim Sungkar Group" |
| `featuredImage` | `string` | ❌ | Path or URL |
| `relatedDestinations` | `string[]` | ❌ | Destination slugs |
| `relatedPackages` | `string[]` | ❌ | Tour package slugs |

**Do not** add `locale` or `slug` in frontmatter — locale is derived from the filename (`id.mdx`, `en.mdx`), slug is derived from the directory name.

### Panduan Wisata Baru

```mdx
---
# src/content/guides/waktu-terbaik-ke-lombok/id.mdx
title: "Waktu Terbaik ke Lombok"
description: "Cari tahu musim terbaik untuk liburan ke Lombok."
region: "lombok"
readingTime: 4
bestFor: ["Wisatawan pertama kali"]
keyTakeaways: ["Mei-Oktober musim kemarau", "November-April musim hujan"]
relatedDestinations: ["kuta-lombok", "gili-trawangan"]
relatedPackages: ["paket-wisata-3-hari-2-malam"]
publishDate: "2026-01-15"
---

Konten panduan dalam markdown...
```

#### Guides Frontmatter Schema

| Field | Type | Required | Notes |
|---|---|---|---|
| `title` | `string` | ✅ | |
| `description` | `string` | ✅ | |
| `region` | `"lombok" \| "sumbawa" \| "labuan-bajo" \| "general"` | ✅ | |
| `readingTime` | `number` | ✅ | Minutes |
| `keyTakeaways` | `string[]` | ✅ | |
| `bestFor` | `string[]` | ✅ | |
| `relatedDestinations` | `string[]` | ✅ | Destination slugs |
| `relatedPackages` | `string[]` | ✅ | Tour package slugs |
| `publishDate` | `string` | ✅ | ISO date in quotes: `"2026-01-15"` |

**Do not** add `locale` or `slug` in frontmatter — locale is derived from the filename, slug from the directory name. Unlike blog where `publishDate` is a bare date, guides use a quoted string.

### Akomodasi Baru

```ts
// src/lib/content/accommodations/data.ts
{
  slug: "merpati-hotel",
  name: "Merpati Hotel Lombok",
  region: "lombok",
  image: { src: "/images/accommodations/merpati.webp" },
  perks: ["Kolam renang", "Sarapan gratis"],
  regionalHighlights: ["Dekat Pantai Kuta", "10 menit ke bandara"],
  description: "Hotel bintang 3 dengan pemandangan laut.",
}
```

### i18n Translation

Untuk konten **MDX** (blog/guides): copy file ke `{slug}/{locale}.mdx` dan translate.

Untuk konten **data** (paket, destinasi, dll): lihat file i18n di `src/lib/i18n/{locale}/` yang mirror struktur `src/lib/content/`. Belum semua locale memiliki terjemahan konten — hubungi tim untuk prioritas.

## Manual Workflow (without AI agents)

Step-by-step for adding items manually — no agents, no automation.

### Blog Post

```
src/content/blog/{slug}/{locale}.mdx
```

| Step | What to do |
|---|---|
| 1 | Create folder + file: `mkdir -p src/content/blog/my-post && touch src/content/blog/my-post/id.mdx` |
| 2 | Write frontmatter: `title`, `description`, `publishDate`, `tags`, `readingTime`, `featuredImage` (optional) |
| 3 | Write content in markdown/MDX |
| 4 | Copy to other locales: `cp id.mdx en.mdx && cp id.mdx ar.mdx` — translate content for each |
| 5 | Validation: automatic via `content.config.ts` (Zod) — caught during `npm test` or `npm run build` |
| 6 | OG image: if `featuredImage` is set, it's used as OG image. Falls back to the `/blog` section OG otherwise |
| 7 | Before commit: `npm test` (pre-commit hook runs this automatically) |

### Tour Package

```
src/lib/content/tourPackages/{region}/data.ts
```

| Step | What to do |
|---|---|
| 1 | Open the data file for the target region (e.g., `src/lib/content/tourPackages/lombok/data.ts`) |
| 2 | Add a new object to the array with all required fields: `slug`, `title`, `region`, `collectionSlug`, `collectionTitle`, `duration`, `category`, `images`, `summary`, `highlights`, `itinerary`, `includes`, `excludes` |
| 3 | If `collectionSlug` doesn't exist yet (e.g., `"5-hari-4-malam"`), register it in `src/lib/content/tourPackages/collections.ts` |
| 4 | Image files must exist at the referenced path — place WebP images in `public/images/packages/` or `src/assets/images/` |
| 5 | Validation: automatic via Zod schema in `tests/data.test.ts` — run `npm test` to verify all fields |
| 6 | Build: `npm run build` — page + structured data generated automatically via `getStaticPaths()` |
| 7 | Before commit: `npm test` (pre-commit hook runs this automatically) |

### Destination

```
src/lib/content/destinations/data.ts
```

| Step | What to do |
|---|---|
| 1 | Open `src/lib/content/destinations/data.ts` |
| 2 | Add a new object with: `slug`, `title`, `region`, `image`, `gallery[]`, `summary`, `thingsToDo[]`, `packages[]` (references existing tour package slugs) |
| 3 | Validation: run `npm test` — Zod checks all required fields |
| 4 | Build: `npm run build` — page + TouristAttraction + Breadcrumb schema auto-generated |

### Vehicle (Car Rental)

```
src/lib/content/car-rental/data.ts
```

| Step | What to do |
|---|---|
| 1 | Open `src/lib/content/car-rental/data.ts` |
| 2 | Add a new object with: `slug`, `name`, `region`, `pricePerDay` (string), `seats` (number), `transmission` ("Manual" or "Automatic"), `features[]`, `bestFor[]`, `description`, `imageTop`, `imageBottom` |
| 3 | Validation + build: `npm test && npm run build` |

### Accommodation

```
src/lib/content/accommodations/data.ts
```

| Step | What to do |
|---|---|
| 1 | Open `src/lib/content/accommodations/data.ts` |
| 2 | Add a new object with: `slug`, `name`, `region`, `perks[]`, `regionalHighlights[]`, `description`, `image` |
| 3 | Validation + build: `npm test && npm run build` |

### Guide (Travel Guide)

```
src/content/guides/{slug}/{locale}.mdx
```

| Step | What to do |
|---|---|
| 1 | Create folder + file: `mkdir -p src/content/guides/my-guide && touch src/content/guides/my-guide/id.mdx` |
| 2 | Write frontmatter: `title`, `description`, `region`, `readingTime`, `bestFor[]`, `keyTakeaways[]`, `relatedDestinations[]`, `relatedPackages[]`, `publishDate` |
| 3 | Write content in markdown/MDX |
| 4 | Copy + translate for other locales |
| 5 | Validation: automatic via `content.config.ts` (Zod) |

## Adding a New Page

### Static Page (e.g., `/promo`)

1. Buat file `src/pages/promo.astro`
2. Bungkus dengan `<MainLayout>` — OG title, description, image otomatis fallback ke homepage kalau belum didaftarkan
3. Daftarkan OG spesifik di `src/lib/og-metadata.ts`:

```ts
"/promo": {
  title: "Promo | Sungkar Group - Tour and Travel",
  description: "Promo paket wisata Lombok bulan ini.",
  image: HERO.lombok,
  imageAlt: "Promo wisata Lombok",
}
```

4. Kalau perlu FAQ schema, panggil `generateFAQPageSchema()` di frontmatter.

### Dynamic Template Page (e.g., category baru)

1. Buat folder di `src/pages/` dengan `[slug].astro`
2. Implement `getStaticPaths()` — return params dari data kamu
3. Load data di frontmatter, inject schema yang relevan via `StructuredData`

## Image Management

### Image Source Types

The project uses `ImageSource` (`src/lib/images.ts`), a union type:

```ts
type ImageSource = ImageMetadata | string;
```

- `ImageMetadata` — imported from `src/assets/images/` (build-time optimized by Astro)
- `string` — raw URL path (for remote images or images in `public/`)

### Adding New Images

**Option A — Astro-optimized (recommended for local images):**

1. Place the WebP file in the appropriate subdirectory under `src/assets/images/`
2. Import it in `src/assets/images/index.ts` and add it to the relevant barrel export
3. Import via `import { CATEGORY } from "@/assets/images"` wherever needed

```
src/assets/images/
├── destinations/     # Destinasi thumbnails
├── gallery/          # Gallery photos
├── hero/             # Hero section backgrounds
├── brand/            # Logo, OG default
├── accommodations/   # Accomodation placeholders
├── vehicles/         # Vehicle placeholders
└── og/               # OG images (1200×630px WebP)
```

**Option B — Remote / string URL:**

Use a full URL or absolute path string:

```ts
image: "/images/guides/my-guide.webp"  // if placed in public/
image: "https://example.com/photo.jpg" // remote URL
```

### Helper Functions (`src/lib/images.ts`)

These handle both branches of `ImageSource` so you don't need manual type checks:

| Function | Returns | When to use |
|---|---|---|
| `getImageSrc(src)` | `string` | Get the actual URL/path — use instead of `.src` on `ImageSource` |
| `getImageWidth(src)` | `number \| undefined` | Get width (only for `ImageMetadata`) |
| `getImageHeight(src)` | `number \| undefined` | Get height (only for `ImageMetadata`) |
| `isRemoteImage(src)` | `boolean` | Type guard — returns `true` if `src` is a string |

**Always use `getImageSrc()` instead of `.src` access** — `ImageMetadata` objects use `.src` but `string` values don't have it, causing type errors.

```ts
import { getImageSrc, type ImageSource } from "@/lib/images";

// ❌ Wrong — type error on ImageSource:
// const url = image.src;

// ✅ Correct — works for both ImageMetadata and string:
const url = getImageSrc(image);
```

### OG Images

OG images (1200×630px WebP) go in `src/assets/images/og/`. Placeholder specification is in the README inside that folder.

- Import via `import { DESTINATIONS, HERO, GALLERY, BRAND, ACCOMMODATIONS, VEHICLES } from "@/assets/images"`
- For OG fallback, `MainLayout` automatically uses `pageOGMetadata[path]` if not passed as prop

## i18n Architecture

| Konsep | File |
|---|---|
| Locale list + helpers | `src/lib/i18n/index.ts` |
| UI string translations | `src/lib/i18n/ui-strings.ts` |
| Path mapping (ID → EN routes) | `src/lib/i18n/localize.ts` |
| Content loader with fallback | `src/lib/i18n/loader.ts` |
| Content translation files | `src/lib/i18n/{locale}/` |

- `id` = default locale (no prefix in URL)
- `en, ar, ms, zh` = prefixed (`/en/about`, `/ar/about`, dll)
- RTL support for Arabic via `<html dir="rtl">` + Cairo Variable font

## Structured Data (JSON-LD)

Schema di-generate oleh `src/lib/schemas.ts`:

| Halaman | Schema | Auto? |
|---|---|---|
| Home, About, Contact, FAQ, dll | `Organization` + `WebSite` | ✅ lewat `MainLayout` |
| Paket wisata detail | `Product`, `BreadcrumbList`, `FAQPage` | ✅ lewat template |
| Destinasi detail | `TouristAttraction`, `BreadcrumbList`, `FAQPage` | ✅ |
| Sewa mobil detail | `Product`, `BreadcrumbList` | ✅ |
| Blog post | `NewsArticle` | ✅ lewat template |
| Panduan wisata | `HowTo` | ✅ |

Cek hasilnya di [Google Rich Results Test](https://search.google.com/test/rich-results).

## Pre-deployment Checklist

- [ ] `npm test` — semua passing
- [ ] `npm run build` — 0 errors, semua halaman tergenerate
- [ ] Cek `dist/sitemap-index.xml` — semua URL yang diharapkan ada
- [ ] Cek `dist/robots.txt` — tidak memblokir halaman penting
- [ ] Preview: `npm run preview` + buka beberapa halaman representatif

## Testing

Vitest dengan file di `tests/`. Contoh:

```
npm test
```

Config: `vitest.config.ts` — alias `@/` ke `src/`.
