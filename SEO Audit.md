# Executive Summary
This project has a solid Astro foundation, but its SEO trust signals are not internally consistent yet. The biggest blocker is canonical URL handling, followed by host/domain consistency and incomplete schema coverage on pages that already have strong transactional intent.

## SEO Score
- Overall score: 60/100

## Critical Issues

### Canonical URLs and `og:url` are not normalized
**Severity:** Critical

**Problem**
`MainLayout` passes the page-provided `canonical` value straight into `SEOMeta`, and `SEOMeta` writes it directly into both `<link rel="canonical">` and `og:url`. Most route files pass relative paths like `/paket-wisata`, and the homepage passes `www.sungkargroup.id` without a scheme. That means the site is emitting relative or malformed canonical signals.

**Impact**
Search engines may ignore the canonical, treat URLs as separate variants, or resolve the homepage canonical incorrectly. That weakens duplicate-control, page consolidation, and link equity.

**Files**
- [`src/components/seo/SEOMeta.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/components/seo/SEOMeta.astro)
- [`src/layouts/MainLayout.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/layouts/MainLayout.astro)
- [`src/pages/index.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/pages/index.astro)
- [`src/pages/paket-wisata/index.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/pages/paket-wisata/index.astro)
- [`src/pages/destinasi/index.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/pages/destinasi/index.astro)
- [`src/pages/kontak.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/pages/kontak.astro)

**Fix**
Normalize canonical URLs in one place before rendering. Resolve relative values against a single site origin, and use that same absolute URL for `canonical` and `og:url`.

**Example**
```astro
---
const siteUrl = Astro.site?.toString() ?? Astro.url.origin;
const canonicalUrl = new URL(canonical ?? Astro.url.pathname, siteUrl).toString();
---

<link rel="canonical" href={canonicalUrl} />
<meta property="og:url" content={canonicalUrl} />
```

## High Priority Issues

### Production host signals are split across `.com` and `.id`
**Severity:** High

**Problem**
The project uses different host assumptions in different places: `robots.txt` and `sitemap.xml` point to `www.sungkargroup.com`, the contact schema falls back to `https://sungkargroup.id`, and the homepage canonical is `www.sungkargroup.id` without a scheme. `astro.config.mjs` does not define a `site`, so `Astro.site` is undefined and pages fall back to local defaults.

**Impact**
This splits crawl and entity signals across multiple domains, which can confuse indexation, dilute link equity, and make validation tools report inconsistent hostnames.

**Files**
- [`astro.config.mjs`](/home/loto/Dokumen/dev/sungkar-group-landing/astro.config.mjs)
- [`public/robots.txt`](/home/loto/Dokumen/dev/sungkar-group-landing/public/robots.txt)
- [`src/pages/sitemap.xml.ts`](/home/loto/Dokumen/dev/sungkar-group-landing/src/pages/sitemap.xml.ts)
- [`src/pages/kontak.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/pages/kontak.astro)
- [`src/pages/index.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/pages/index.astro)

**Fix**
Define one production origin in Astro config and reuse it everywhere: sitemap, robots, schema helpers, canonical generation, and OG URLs. Also dedupe the sitemap URL list while you are there.

**Example**
```ts
// astro.config.mjs
export default defineConfig({
  site: "https://www.sungkargroup.com",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
```

```ts
// src/pages/sitemap.xml.ts
const siteUrl = Astro.site?.toString() ?? "https://www.sungkargroup.com";
const allPages = [
  ...new Set([
    ...staticPages,
    ...accommodationPages,
    ...packagePages,
    ...destinationPages,
    ...vehiclePages,
  ]),
];
```

## Medium Priority Issues

### FAQ and entity structured data coverage is incomplete
**Severity:** Medium

**Problem**
Several pages render visible FAQ content but do not emit `FAQPage` schema. The destination detail pages also do not emit `TouristAttraction` or breadcrumb structured data, even though the schema helpers already exist. On package detail pages, the `Product` schema image field is passed as `tour.image.src`, which is typically a relative path instead of an absolute URL.

**Impact**
You lose rich-result eligibility on FAQ-heavy pages and weaken search engines’ understanding of the page entities. Relative image URLs in schema can also reduce validation quality.

**Files**
- [`src/pages/faq.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/pages/faq.astro)
- [`src/pages/paket-wisata/index.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/pages/paket-wisata/index.astro)
- [`src/pages/paket-wisata/[slug].astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/pages/paket-wisata/[slug].astro)
- [`src/pages/destinasi/index.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/pages/destinasi/index.astro)
- [`src/pages/destinasi/[slug].astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/pages/destinasi/[slug].astro)
- [`src/pages/akomodasi/index.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/pages/akomodasi/index.astro)
- [`src/pages/sewa-mobil/index.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/pages/sewa-mobil/index.astro)
- [`src/lib/schemas.ts`](/home/loto/Dokumen/dev/sungkar-group-landing/src/lib/schemas.ts)

**Fix**
Add `StructuredData` alongside the FAQ sections on every page that renders FAQs. Add `TouristAttraction` and breadcrumb schemas to destination detail pages. Make schema image URLs absolute before serializing.

**Example**
```astro
---
import StructuredData from "@/components/seo/StructuredData.astro";
import { generateFAQPageSchema, generateTouristAttractionSchema, generateBreadcrumbSchema } from "@/lib/schemas";

const siteUrl = Astro.site?.toString() ?? Astro.url.origin;
const faqSchema = generateFAQPageSchema(packageFaqItems);
const productImageUrl = new URL(tour.image.src, siteUrl).toString();
const productSchema = generateProductSchema(
  tour.title,
  tour.summary,
  "Hubungi untuk harga",
  productImageUrl,
  siteUrl,
  tour.slug,
  tour.duration,
);
---

<StructuredData schema={faqSchema} />
<StructuredData schema={productSchema} />
```

### Hub-page copy is too generic and under-targets search intent
**Severity:** Medium

**Problem**
The destination hub and several supporting content modules read more like navigation labels than search-intent copy. The destination page hero says “navigasi bertingkat” instead of explicitly targeting location/service searches. The copy leans on internal grouping instead of topical language a searcher would actually query.

**Impact**
Lower topical relevance, weaker CTR, and less keyword coverage for location-based queries like “destinasi wisata Lombok”, “paket wisata Gili”, or “wisata Rinjani”.

**Files**
- [`src/pages/destinasi/index.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/pages/destinasi/index.astro)
- [`src/lib/site-data.ts`](/home/loto/Dokumen/dev/sungkar-group-landing/src/lib/site-data.ts)
- [`src/lib/content/packagePage.ts`](/home/loto/Dokumen/dev/sungkar-group-landing/src/lib/content/packagePage.ts)
- [`src/pages/paket-wisata/index.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/pages/paket-wisata/index.astro)

**Fix**
Rewrite hub titles and intro paragraphs around the actual search intent and geography. Add one short intro paragraph above each card grid, and use descriptive anchor text in related links.

**Example**
```ts
hero: {
  eyebrow: "Destinasi Wisata",
  title: "Destinasi Wisata Lombok, Gili, Rinjani, dan Sumbawa",
  description:
    "Temukan pantai, desa budaya, dan area pegunungan terbaik untuk liburan di Lombok, Gili, Rinjani, dan Sumbawa.",
}
```

### CTA links use nested interactive controls
**Severity:** Medium

**Problem**
Several listing cards wrap a `Button` inside an `<a>`. That creates nested interactive controls instead of one semantic link/button element.

**Impact**
This hurts keyboard navigation, can confuse assistive technology, and makes internal links less clean for crawlers to interpret.

**Files**
- [`src/components/cards/PackagesCard.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/components/cards/PackagesCard.astro)
- [`src/components/cards/AccommodationCard.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/components/cards/AccommodationCard.astro)
- [`src/components/cards/VehicleCard.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/components/cards/VehicleCard.astro)

**Fix**
Render one interactive element only. Either make `Button` the link directly or wrap the whole card in a single anchor and remove the nested button.

**Example**
```astro
<Button href={`/paket-wisata/${tour.slug}`} variant="default" size="lg" className="w-full">
  Cek Detail Paket
</Button>
```

## Low Priority Issues

### Core Web Vitals risk from eager hero images and page-wide animation
**Severity:** Low

**Problem**
`PageHeader` eager-loads large hero images on every image-backed page, and `MainLayout` wraps all page content in `FadeInText`. That is not a blocker, but it is a performance risk on slower mobile devices.

**Impact**
Potential LCP and INP cost, especially on low-end phones or weak networks.

**Files**
- [`src/components/site/PageHeader.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/components/site/PageHeader.astro)
- [`src/layouts/MainLayout.astro`](/home/loto/Dokumen/dev/sungkar-group-landing/src/layouts/MainLayout.astro)

**Fix**
Only eager-load the true LCP image, add `fetchpriority="high"` where appropriate, and remove the fade wrapper from above-the-fold content if it delays first paint.

**Example**
```astro
<Image
  src={image}
  alt={imageAlt ?? title}
  class="h-full w-full object-cover"
  loading="eager"
  fetchpriority="high"
/>
```

# Quick Wins
- Normalize canonical URLs centrally in `SEOMeta` and replace the homepage canonical string with a real path or an absolute URL.
- Set one production `site` in `astro.config.mjs` and align sitemap, robots, and schema fallbacks to one hostname.
- Add `FAQPage` schema to pages that already render FAQ content, starting with `/faq`, package detail pages, and destination detail pages.
- Convert card CTAs to a single link element so internal links are semantic and accessible.
- Rewrite hub-page titles and intros around location/service keywords.

# Technical SEO Checklist
- [ ] Canonical tags are absolute and normalized.
- [ ] One production hostname is used everywhere.
- [ ] `robots.txt` and `sitemap.xml` reference the same origin.
- [ ] Sitemap URLs are deduplicated.
- [ ] FAQ pages emit `FAQPage` schema.
- [ ] Destination detail pages emit `TouristAttraction` and breadcrumb schema.
- [ ] Schema image URLs are absolute.
- [x] Routed images use Astro `Image` and include alt text.
- [ ] Card CTAs use one interactive element only.
- [ ] Mobile hero rendering is checked on a 360px viewport.
- [ ] No accidental `noindex` directives appear on public pages.

# Action Plan (30 Days)
1. Days 1-3: fix canonical normalization in `MainLayout` and `SEOMeta`, then correct the homepage canonical.
2. Days 4-7: set the production `site` in Astro config and align sitemap, robots, and schema fallbacks to one hostname.
3. Week 2: add FAQ schema to every page that renders FAQ content, and add destination entity/breadcrumb schema to destination detail pages.
4. Week 3: rewrite hub-page titles and intros around location/service keywords, then add a few more contextual internal links.
5. Week 4: remove nested CTA wrappers, validate mobile rendering, and check rich-result eligibility in Search Console / schema testing tools after deployment.
