# Project Consistency Report — Sungkar Group Landing

## Resolved Since Initial Report

| # | Issue | Status |
|---|-------|--------|
| 1.1 | `/` vs `/beranda` duplicate content risk | **Resolved** — `/beranda` performs a 301 redirect to `/`, not duplicate content |
| 1.4 | Inline pageContent in `sewa-mobil/index.astro` and `akomodasi/index.astro` | **Resolved** — both now import from `src/lib/content/sewaPage.ts` and `akomodasiPage.ts` |
| 2.1 | `PackageRegionNav` + `DestinationGroupNav` duplication | **Resolved** — both were unified into `StickyNav.astro` (neither file exists anymore) |
| 2.3 | CTA class string duplication | **Resolved** — extracted to `src/lib/card-styles.ts` |
| 2.4 | Region color map duplication | **Resolved** — extracted to `src/lib/regions.ts` |
| 3.5 | `ReviesCtraSection.astro` filename typo | **Resolved** — file is named `ReviewsCtaSection.astro` |
| 4.2 | `destinationsPage.ts` missing `as const` | **Resolved** — now uses `as const` |

## Remaining Issues

### 1. Page Rendering Patterns

| # | Issue | Severity |
|---|-------|----------|
| 1.1 | IntersectionObserver `<script>` block duplicated in `paket-wisata/index.astro`, `sewa-mobil/index.astro`, `akomodasi/index.astro` | **Critical** |
| 1.2 | `paket-wisata/index.astro` renders regions unconditionally; `sewa-mobil`/`akomodasi` guard with `{x.length > 0 && ...}` | **Medium** |

### 2. Component Duplication

| # | What | Count | Severity |
|---|------|-------|----------|
| 2.1 | Region section components: `PackageRegionSection`, `AccommodationRegionSection`, `DestinationGroupSection` — same structure, different card import | 3 copies | **High** |
| 2.2 | `PackagePageCta.astro` and `about/CtaSection.astro` — ~90% identical | 2 copies | **Medium** |

### 3. Implementation Inconsistencies

| # | Component(s) | Issue | Severity |
|---|-------------|-------|----------|
| 3.1 | `PackageRegionSection`, `AccommodationRegionSection`, `DestinationGroupSection`, `PackageCard`, `AccommodationCard`, `DestinationCard` | Use `Astro.props as {...}` instead of `interface Props` | **Medium** |
| 3.2 | `Faq.astro` | Default prop via destructuring (`background = "bg-background"`) — inconsistent with other components | **Low** |
| 3.3 | `ContactMethodCard.astro` | Dead component — never imported | **Low** |
| 3.4 | `TrustSignalsSection.astro` | Exists but commented out in `ulasan.astro` | **Low** |

### 4. Card CTA Pattern Variation

| Card | CTA Approach | Notes |
|------|-------------|-------|
| `DestinationCard.astro` | Whole card wrapped in `<a>` | Clean, accessible |
| `PackageCard.astro` | `<a>` inside `<CardContent>` with `CTA_CLASS` | Clean, accessible — but `<a>` is inline link, not a button element |
| `VehicleCard.astro` | `<a>` inside `<CardFooter>` with `CTA_CLASS` | Clean, accessible |
| `AccommodationCard.astro` | No CTA at all | Intentional — informational card |

All patterns are valid. No nested interactive controls.

## Summary of Actionable Items

### Critical
1. **Extract IntersectionObserver script** into a shared component, reuse across 3 pages.

### High
2. **Unify region section components** (`PackageRegionSection`, `AccommodationRegionSection`, `DestinationGroupSection`) into one generic component accepting a card renderer.

### Medium
3. **Normalize typing style** across card/section components to use `interface Props`.
4. **Unify `PackagePageCta` + `about/CtaSection`** into a single CTA component.
5. **Normalize region rendering guards** — apply `{x.length > 0 && ...}` consistently.

### Low
6. Remove or implement `ContactMethodCard.astro` and `TrustSignalsSection.astro`.
7. Remove unused PNGs in `public/images/`.

---

*Updated: 2026-06-15*
