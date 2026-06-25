# Lighthouse remediation tracker

_Last updated: 2026-06-25_

This tracker turns `docs/lighthouse-template-routes-report.md` into an actionable backlog.

## Scope

- Source audit: `docs/lighthouse-template-routes-report.md`
- Raw data: `docs/lighthouse-template-routes-results.json`
- Audit method: one live sitemap URL per Astro template route
- Templates audited: 44

## Current baseline

| Metric | Score |
|---|---:|
| Average performance | 82 |
| Average accessibility | 96 |
| Average best practices | 100 |
| Average SEO | 96 |

## Priority order

### P0 — urgent regressions / biggest wins

| Status | Area | Template / route | Problem | Baseline | Target | Notes |
|---|---|---|---|---:|---:|---|
| TODO | Perf | `src/pages/[locale]/car-rental/index.astro` / `/en/car-rental/` | Re-test shows this is likely a noisy outlier; treat with shared car-rental listing fixes | 26 initial / 68 re-test | 80+ | Initial run had TBT `10,210 ms`; re-test `370 ms` |
| TODO | Perf | `src/pages/kontak.astro` / `/kontak/` | Slow LCP-heavy page | 64 | 85+ | LCP `8.0 s` |
| TODO | Perf | `src/pages/akomodasi/index.astro` / `/akomodasi/` | Slow listing page with high TBT | 70 | 85+ | TBT `490 ms`, LCP `4.7 s` |
| TODO | Perf | `src/pages/destinasi/index.astro` / `/destinasi/` | Slow listing page, notable CLS | 72 | 85+ | CLS `0.07`, LCP `4.7 s` |
| TODO | Perf | `src/pages/index.astro` / `/` | Homepage LCP and JS budget issues | 73 | 85+ | LCP `5.2 s` |
| TODO | A11y | `src/pages/paket-wisata/[region]/[collection]/[slug].astro` | Missing accessible button name(s) | 92 | 100 | Affects ID detail template |
| TODO | A11y | `src/pages/[locale]/tour-packages/[region]/[collection]/[slug].astro` | Missing accessible button name(s) | 92 | 100 | Same issue in localized template |

### P1 — shared template improvements

| Status | Area | Template group | Problem | Evidence |
|---|---|---|---|---|
| TODO | Perf | Many templates | Reduce unused JavaScript | Seen on 40 / 44 templates |
| TODO | Perf | Many templates | Improve image delivery | Seen on 37 / 44 templates |
| TODO | A11y | Many templates | Insufficient color contrast | Seen on 35 / 44 templates |
| TODO | Perf | Many templates | Forced reflow / layout thrashing | Seen on 22 / 44 templates |
| TODO | Perf | Many templates | Render-blocking requests | Seen on 21 / 44 templates |
| TODO | Perf | Detail/listing mix | LCP request discovery | Seen on 7 templates |
| TODO | Perf | Detail/listing mix | Slow document/server response | Seen on 7 templates |
| TODO | SEO/A11y | English locale templates | Descriptive link text / SEO gap | Seen on multiple `/en/*` templates |

### P2 — cleanup / consistency

| Status | Area | Template group | Problem | Evidence |
|---|---|---|---|---|
| TODO | A11y | FAQ/blog/region pages | Heading order not sequential | Seen on 5 templates |
| TODO | Perf | Selected pages | High CLS on destination and package pages | Up to `0.107` |
| TODO | SEO | English locale templates | All sampled `/en/*` templates score `92` not `100` | 22 templates affected |

## Recommended implementation plan

### Phase 1 — stop the worst regression first

1. Investigate `src/pages/[locale]/car-rental/index.astro`
   - compare with `src/pages/sewa-mobil/index.astro`
   - check client-side islands, sliders, deferred widgets, and repeated JS imports
   - look for hydration on content that can stay static
2. Fix `src/pages/kontak.astro`
   - identify LCP element
   - preload/optimize hero or contact media
   - reduce blocking CSS/JS around above-the-fold content
3. Improve homepage + major listing templates
   - `src/pages/index.astro`
   - `src/pages/akomodasi/index.astro`
   - `src/pages/destinasi/index.astro`
   - `src/pages/paket-wisata/index.astro`

### Phase 2 — shared system fixes

1. **JS budget pass**
   - audit hydrated React islands
   - remove unnecessary client directives
   - lazy-load non-critical interactive widgets
2. **Image pass**
   - compress oversized hero/card images
   - ensure responsive image sizes are correct
   - prioritize LCP image loading
3. **Typography/contrast pass**
   - fix low-contrast text/button states in shared components
4. **Blocking request pass**
   - trim third-party assets
   - preload only critical resources

### Phase 3 — semantic/a11y/SEO cleanup

1. Fix unnamed buttons on tour package detail templates
2. Fix heading hierarchy on FAQ/blog/listing templates
3. Audit English locale templates for why SEO is capped at `92`
4. Improve descriptive link text in English templates

## Tracking checklist

### Investigation

- [x] Profile `/en/car-rental/` against `/sewa-mobil/`
- [ ] Identify homepage LCP element
- [ ] Identify `/kontak/` LCP element
- [ ] Inventory all hydrated islands used on listing templates
- [ ] List shared contrast issues by component
- [x] Determine exact Lighthouse audit causing `/en/*` SEO score `92`

### Fixes

- [ ] Fix `/en/car-rental/` performance regression
- [x] Reduce eager image pressure on shared car-rental listing template
- [x] Remove global client router from non-review pages
- [x] Defer cookie banner hydration with `client:idle`
- [ ] Fix `/kontak/` LCP
- [x] Fix `/en/*` non-descriptive privacy-policy link text in cookie banner
- [x] Defer contact form JS initialization on `/kontak/`
- [x] Lazy-load embedded map on `/kontak/`
- [ ] Improve homepage performance to 85+
- [ ] Improve accommodations listing performance to 85+
- [ ] Improve destinations listing performance to 85+
- [ ] Improve package listing performance to 85+
- [ ] Remove unnamed buttons from tour package detail templates
- [ ] Fix heading order on FAQ/blog/region templates
- [ ] Fix shared contrast issues
- [ ] Reduce unused JS across shared layouts/components
- [ ] Improve responsive image delivery across shared cards/hero sections

### Verification

- [ ] Re-run Lighthouse on the 44 representative template URLs
- [ ] Update `docs/lighthouse-template-routes-report.md`
- [ ] Update this tracker with before/after scores

## Investigation notes

### 2026-06-25 — `/en/car-rental/` vs `/sewa-mobil/`

#### What we found

- The two templates are structurally almost identical.
- Both pages ship the same visible client JS entry points in HTML:
  - `/_astro/ClientRouter...js`
  - `/_astro/navigation-menu...js`
  - Google Analytics `gtag.js`
- HTML size is effectively the same:
  - `/sewa-mobil/`: `159,658` bytes
  - `/en/car-rental/`: `159,543` bytes
- The English template adds locale-driven content loading in frontmatter, but that does **not** explain a huge client-side TBT regression by itself.

#### Re-test result

A fresh Lighthouse re-run did **not** reproduce the original `26` performance score.

| Route | Perf | LCP | TBT | TTI |
|---|---:|---:|---:|---:|
| `/sewa-mobil/` | 70 | 6.1 s | 290 ms | 6.1 s |
| `/en/car-rental/` | 68 | 6.2 s | 370 ms | 6.3 s |

#### Live re-audit after fixes (`sungkargroup.com`)

| Route | Perf | LCP | TBT | TTI | SEO |
|---|---:|---:|---:|---:|---:|
| `/sewa-mobil/` | 92 | 1.4 s | 300 ms | 4.0 s | 100 |
| `/en/car-rental/` | 92 | 1.1 s | 350 ms | 4.0 s | 92 |

#### Conclusion

- The original `/en/car-rental/` score of `26` looks like an outlier / noisy run rather than a stable template-specific regression.
- Both pages currently have the **same underlying problem class**:
  - oversized/late LCP image work
  - unused JavaScript
  - render-blocking work
  - low-contrast UI text somewhere in shared components
- The English route has two extra issues in the sampled run:
  - `link-text` SEO/accessibility issue (`1 link found`)
  - slightly higher TBT / forced reflow than Indonesian route

#### Next action

Treat car-rental listing optimization as a **shared template fix**, not an English-only incident.

#### Remaining issues on live site

- `/sewa-mobil/`
  - render-blocking requests
  - unused JavaScript (~98 KiB)
  - image delivery savings (~501 KiB)
  - server/document latency
  - color contrast
- `/en/car-rental/`
  - SEO still capped at `92` on current live build
  - render-blocking requests
  - unused JavaScript (~96 KiB)
  - image delivery savings (~501 KiB)
  - color contrast

#### Root cause of `/en/*` SEO `92`

- The shared cookie banner rendered a generic English link text: `Learn More`.
- Lighthouse flagged it as `link-text` on every sampled `/en/*` page.
- The destination was also not localized (`/kebijakan-privasi` instead of the locale-specific privacy page).
- Local verification after the fix on `http://localhost:4321/en/` shows:
  - SEO `100`
  - `link-text` audit passing

## Before / after log

| Date | Change | Templates touched | Before | After | Notes |
|---|---|---|---|---|---|
| 2026-06-25 | Initial baseline created | 44 template routes | Perf 82 / Acc 96 / BP 100 / SEO 96 | — | Audit only |
| 2026-06-25 | Reduced eager image loading on car-rental listing cards | `src/components/vehicles/VehicleRegionSection.astro`, `src/components/cards/VehicleCard.astro`, both car-rental index pages | First 3 cards in each region were eager-loading (up to 9 eager images per page) | Pending re-audit | Now only first 2 cards in the first visible region are eager; first card gets `fetchpriority="high"`; vehicle cards now declare responsive sizes/widths |
| 2026-06-25 | Scoped Astro ClientRouter to review pages only | `src/layouts/MainLayout.astro`, `src/pages/ulasan.astro`, `src/pages/[locale]/reviews.astro` | ClientRouter JS shipped on all pages via MainLayout | Pending re-audit | Transition usage was only found on review pages |
| 2026-06-25 | Deferred cookie banner hydration | `src/layouts/MainLayout.astro` | Cookie consent React island hydrated immediately on every page | Pending re-audit | Switched from `client:only` to `client:idle` |
| 2026-06-25 | Live Lighthouse re-audit on `sungkargroup.com` | `/sewa-mobil/`, `/en/car-rental/` | `/sewa-mobil/`: Perf 70, LCP 6.1 s; `/en/car-rental/`: Perf 68, LCP 6.2 s | `/sewa-mobil/`: Perf 92, LCP 1.4 s; `/en/car-rental/`: Perf 92, LCP 1.1 s | Live production audit, not localhost |
| 2026-06-25 | Reduced below-the-fold contact page work | `src/components/contact/EmbeddedMap.astro`, `src/components/contact/ContactForm.astro` | `/kontak/` local dev: Perf 32, LCP 6.2 s, TBT 2,540 ms | `/kontak/` local dev: Perf 34, LCP 6.3 s, TBT 2,460 ms | Dev-mode numbers still dominated by unminified JS, but contact page now avoids eager iframe load and defers form setup |
| 2026-06-25 | Fixed `/en/*` SEO 92 root cause | `src/components/site/CookieConsentBanner.tsx` | Shared cookie banner link text `Learn More`; Lighthouse `link-text` failed on sampled `/en/*` pages | Local `/en/` SEO 100; `link-text` passes | Link is now localized and descriptive |

