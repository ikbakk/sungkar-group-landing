# Project Consistency Report — Sungkar Group Landing

## 1. How Pages Render

**Pattern:** All pages use `MainLayout` as shell. Content pages inject data in frontmatter, pass it to components. Most pages follow: `PageHeader → content sections → FaqSection → RelatedContent/PackagePageCta`.

**Good:** Layout is consistent. `SectionContainer` wraps content blocks for alternating backgrounds.

**Issues:**

| # | Issue | Severity |
|---|-------|----------|
| 1.1 | `/` (index.astro) and `/beranda` (beranda.astro) render **identical `<LandingPage />`** with different title/desc/canonical. Duplicate content risk for SEO. | **Critical** |
| 1.2 | IntersectionObserver `<script>` block duplicated verbatim in `paket-wisata/index.astro:136-162`, `sewa-mobil/index.astro:127-153`, `akomodasi/index.astro:134-160`. ~25 lines × 3 copies. | **Critical** |
| 1.3 | `paket-wisata/index.astro` renders all 3 regions unconditionally; `sewa-mobil/index.astro` and `akomodasi/index.astro` guard each region block with `{x.length > 0 && ...}`. Inconsistent pattern. | **Medium** |
| 1.4 | Page-level `pageContent` for `sewa-mobil/index.astro` and `akomodasi/index.astro` is defined inline; `paket-wisata/index.astro` imports from `packagePage.ts`. Inconsistent data origin. | **Medium** |

---

## 2. Reusable Components & Duplicate Avoidance

**Good:** SectionContainer, PageHeader, FaqSection, RelatedContent, PackageRegionNav, StructuredData are reused across many pages.

**Duplication (should be extracted):**

| # | What | Count | Severity |
|---|------|-------|----------|
| 2.1 | Region nav bar (`PackageRegionNav.astro` vs `DestinationGroupNav.astro`) — same interface `{ id, label, count }`, same `<nav>` structure, same link rendering. Only `data-*` attributes differ. | 2 copies | **High** |
| 2.2 | Region section (`PackageRegionSection.astro` vs `AccommodationRegionSection.astro` vs `DestinationGroupSection.astro`) — same `<section>`, same heading/paragraph/back-to-top, same grid, only card component differs. `VehicleRegionSection.astro` is a 4th variant with different layout. | 3–4 copies | **High** |
| 2.3 | CTA button class string (~120 chars) duplicated across `PackagesCard.astro:145`, `AccommodationCard.astro:120`, `DestinationCard.astro:60`, `VehicleCard.astro:104`. | 4 copies | **Medium** |
| 2.4 | Region color map (`lombok: bg-brand-700, sumbawa: bg-emerald-600, labuan-bajo: bg-violet-600`) duplicated in `PackagesCard.astro:12-25` and `AccommodationCard.astro:12-25`. | 2 copies | **Medium** |
| 2.5 | `PackagePageCta.astro` and `about/CtaSection.astro` — 90% identical. Same `SectionContainer`, `Card`, `CardHeader`, `CardTitle`, `CardContent`, `Button` with `flex-col lg:flex-row` layout. Only data source and link differ. | 2 copies | **Medium** |

---

## 3. Reusable Component Implementation Consistency

**Good:** UI primitives (button, card, badge, accordion, etc.) are shadcn/ui and consistent.

**Inconsistencies:**

| # | Component(s) | Inconsistency | Severity |
|---|-------------|---------------|----------|
| 3.1 | `PackageRegionSection`, `AccommodationRegionSection`, `DestinationGroupSection` | Use `Astro.props as {...}` type assertion; `VehicleRegionSection` uses proper `interface Props`. Different typing styles. | **Medium** |
| 3.2 | `PackagesCard`, `AccommodationCard`, `DestinationCard` | Use `Astro.props as {...}` type assertion; `VehicleCard` uses `interface Props`. Also inconsistent with each other. | **Medium** |
| 3.3 | `PackageRegionNav` | Uses proper `interface Props`. `DestinationGroupNav` uses `Astro.props as Props` — subtle difference. | **Low** |
| 3.4 | `Faq.astro` | Uses default prop values in destructuring (`background = "bg-background"`). Other components don't. Not inherently wrong but inconsistent pattern. | **Low** |
| 3.5 | `ReviesCtraSection.astro` | **Filename typo**: should be `ReviewsCtaSection` (missing 'w', extra 'r'). | **Low** |
| 3.6 | `ContactMethodCard.astro` | File exists but is **never imported** anywhere. Dead component. | **Low** |
| 3.7 | `TrustSignalsSection.astro` | Exists but is **commented out** in `ulasan.astro`. | **Low** |

---

## 4. Presentation vs Data Layer Consistency

**Good:** Architecture follows clean separation — all content data lives in `src/lib/content/`, components receive data via props, no component fetches its own data.

**Inconsistencies:**

| # | File(s) | Issue | Severity |
|---|---------|-------|----------|
| 4.1 | `about.ts`, `packagePage.ts`, `contactPage.ts` | Use `as const` for exports. | Consistent ✓ |
| 4.2 | `destinationsPage.ts` | Does **not** use `as const` — mutable by default, inconsistent with sibling files. | **Medium** |
| 4.3 | `sewa-mobil/index.astro`, `akomodasi/index.astro` | Define page content inline (with `as const`). Inconsistent with `paket-wisata/index.astro` which imports from `packagePage.ts`. | **Medium** |
| 4.4 | Schema generators in `src/lib/schemas.ts` | All well-typed and separated. ✓ | - |
| 4.5 | OG metadata in `src/lib/og-metadata.ts` | Centralized and typed. ✓ | - |

---

## 5. Code Splitting Consistency

**Good:** The project is well-split into feature directories under `src/components/`. Data files are separated into `src/lib/content/`.

**Inconsistencies in splitting:**

| # | Location | Issue | Severity |
|---|----------|-------|----------|
| 5.1 | `paket-wisata/index.astro` (162 lines), `akomodasi/index.astro` (160 lines), `sewa-mobil/index.astro` (153 lines) | These three files are nearly identical in structure. Splitting out the IntersectionObserver script to a shared component would reduce them significantly. Also the region-filtering + section-rendering pattern could be extracted into a generic `RegionIndexPage` component. | **High** |
| 5.2 | `packages/` directory has `PackageRegionNav`, `PackageRegionSection`, `PackagePageCta`. Similarly `destinations/` has `DestinationGroupNav`, `DestinationGroupSection`. These should be unified. | **High** |
| 5.3 | `PackagesCard.astro` (151 lines) vs `AccommodationCard.astro` (126 lines) vs `DestinationCard.astro` (66 lines) vs `VehicleCard.astro` (109 lines) | Different levels of complexity, but the CTA button class string should be extracted to a shared `Button` component (already exists in `ui/` — but the card CTA is a `<span>` inside an `<a>`, not using `Button`). | **Medium** |
| 5.4 | `src/lib/content/` has mixed organization — `tourPackages/` has its own subdirectory with `types.ts`, `utils.ts`, `collections.ts`; but `sewaModilData.ts`, `akomodasiData.ts` are flat files. | **Low** |

---

## Summary of Actionable Items

### Critical
1. **Resolve `/` vs `/beranda` duplication** — either redirect one, canonical correctly, or make `/beranda` unique content.
2. **Extract IntersectionObserver script** into a shared `.astro` or `.ts` component, reuse across 3 pages.

### High
3. **Unify `PackageRegionNav` + `DestinationGroupNav`** → single `StickyNav` component.
4. **Unify `PackageRegionSection` + `AccommodationRegionSection` + `DestinationGroupSection`** → single generic region section component accepting a card renderer.
5. **Extract CTA button class string** into `button.tsx` or a shared constant.

### Medium
6. **Move inline pageContent** from `sewa-mobil/index.astro` and `akomodasi/index.astro` into dedicated data files.
7. **Add `as const`** to `destinationsPage.ts`.
8. **Normalize typing style** across all card and section components to use `interface Props` (not `Astro.props as`).
9. **Unify `PackagePageCta` + `CtaSection`** into a single CTA component.
10. **Extract region color map** into `tourPackages/types.ts` or a shared constants file.

### Low
11. Fix typo: rename `ReviesCtraSection.astro` → `ReviewsCtaSection.astro`.
12. Remove or implement `ContactMethodCard.astro` and `TrustSignalsSection.astro`.
13. Remove unused PNGs in `public/images/`.

---

*Generated: 2026-06-15*
