# Design Audit — Sungkar Group Landing Page

> Audit performed: 2026-06-15
> Page kind: Premium tourism agency landing page (Lombok / Sumbawa / Labuan Bajo)
> Audience: Indonesian-speaking travelers (families, couples, small groups)

---

## 1. Color Tokens Audit

### 1.1 Brand Palette (defined in `src/styles/global.css`)

| Variable | Value | Notes |
|---|---|---|
| `--primary` / `brand-600` | `#337fb0` | Muted ocean-blue, appropriate for travel/tourism trust |
| `brand-500` | `#4298ca` | Lighter accent |
| `brand-700` | `#2b6890` | Darker hover state |
| `brand-100` | `#dff4fb` | Light accent tint |
| `brand-50` | `#f4fbfe` | Near-white tint |

### 1.2 Findings

**GOOD**
- Single accent color family (blue) across the brand token scale
- Good contrast: primary button (#337fb0) on white = passes WCAG AA
- Neutral base: Slate (#111827 foreground, #ffffff background)
- Sematic tokens well-mapped to shadcn variables

**ISSUES**

| # | Issue | Location | Severity |
|---|-------|----------|----------|
| C1 | **`theme-color` meta tag mismatch** | `SEOMeta.astro:72` uses `#0f766e` (teal/emerald-700) but brand is blue (`#337fb0`). The browser chrome color does not match the brand. | Medium |
| C2 | **Region color map competes with brand** | `regions.ts`: Lombok=brand-700 (blue), Sumbawa=emerald-600 (green), Labuan Bajo=violet-600 (purple). These three accents fight the single-brand rule. The purple clashes against the blue brand. | Medium |
| C3 | **Surface-soft** (#f8fafc, slate-50) used as section background but brand-50 (#f4fbfe) is the true brand-tinted light surface. Inconsistent use of "near-white." | `LandingPage.astro` passes `class="bg-surface-soft"` on 2 sections | Low |
| C4 | **No warm accent** for tourism warmth (amber, gold, coral are absent). Entirely cool blue palette can feel sterile for a hospitality/tourism brand. | N/A | Suggestion |

---

## 2. Logo Audit

### 2.1 File Check

| File | Status |
|---|---|
| `src/assets/images/logo.webp` | Exists, loaded as `Logo` |
| Usage in `Header.astro:24-28` | `<Image src={Logo} alt="Sungkar Group" class="h-14 w-auto" loading="eager" />` |

### 2.2 Findings

- Logo loads eagerly in the header with correct alt text
- Height is `h-14` (56px) which fits the 80px nav cap rule
- Logo sits on a `bg-black/20 backdrop-blur-md` header, implying it works on dark/translucent backgrounds
- **Minor:** No SVG version for crisp rendering at all DPIs. WebP is fine but a vector version for the logo mark would be ideal for the responsive era.

---

## 3. General Design & Component Audit

### 3.1 Layout & Architecture

| Aspect | Rating | Notes |
|---|---|---|
| Information architecture | Good | Logical tree: Beranda → Paket Wisata (Lombok/Sumbawa/Labuan Bajo) + Akomodasi + Sewa Mobil + pages |
| Navigation | Good | Single-line at desktop, mega menu for packages, WhatsApp CTA in header |
| Footer | Good | Contains nav links, description, social badges |
| Responsiveness | Needs review | Uses `sm:`, `lg:`, `xl:` breakpoints consistently |

### 3.2 Component Health (Landing page sections)

| Section | Component | Issues |
|---|---|---|
| Hero | `HeroSection.astro` + `landing.ts` | See Section 4 (detailed hero audit) |
| Featured Tours | `FeaturedSection.astro` → `Services6Block` | Gut: uses image-as-background cards with text overlay. Title/desc layout is left-sticky + 2-col grid. Eyebrow present. |
| Destinations | `DestinationsSection.astro` → `Features1Block` | Right-aligned header + 2x2 feature grid. Eyebrow present. |
| Testimonials | `reviews-5.astro` | Triple marquee rows. Eyebrow present. |
| Transport | `TransportSection.astro` → `Services5Block` | Left-sticky header + 2-col icon list. Eyebrow present. |
| Video | `VideoSection.astro` | Split layout (text left, iframe right). Eyebrow present. |

### 3.3 Consistency & Patterns

| Check | Result |
|---|---|
| Radius consistency | `--radius: 0.75rem` (12px), radius scale defined. Hero panel uses `rounded-2xl` (16px). Cards use `rounded-[1.75rem]` (28px) which deviates from the token system. |
| Color consistency | One brand blue, but region badges introduce emerald + violet |
| Eyebrow count | **FAIL**: All 6 landing sections use eyebrows. Max allowed = ceil(6/3) = 2. |
| Section layout diversity | **PASS**: Hero, featured (bento-like), destinations (feature grid), testimonials (marquee), transport (icon list), video (split) = 6 different layout families. |
| Zigzag alternation | **PASS**: No 3+ consecutive image+text splits. |
| Duplicate CTA intent | **PASS**: "Konsultasi Trip" (contact intent) and "Lihat Paket" (browse intent) are distinct. |
| Split-header ban | **PASS**: No section uses the banned left-big-headline + right-small-explain split. |
| Three-equal-cards | **PASS**: No three-equal-card row. |

### 3.4 Typography

| Detail | Value |
|---|---|
| Sans (body) | Inter Variable via `@fontsource-variable/inter` |
| Display (heading) | Playfair Display serif via `@fontsource/playfair-display` |
| Pairing | Serif heading + sans body — standard editorial/premium move. Appropriate for tourism. |
| Discouraged defaults | **Inter is used** (discouraged as default by skill). However, for an Indonesian tourism site with broad device support, Inter's legibility is defensible. Consider Geist or Satoshi for a more distinctive feel. |
| Serif check | Playfair Display is acceptable for tourism/premium — not Fraunces or Instrument_Serif (banned). |

---

## 4. Hero Section Pre-Flight Audit (detailed)

**Design Read:** Tourism agency landing for Indonesian travelers seeking authentic Lombok/Sumbawa/Labuan Bajo experiences. Warm-premium language.

**Dial Inference:**
- VARIANCE: 7 (split-layout, asymmetric)
- MOTION: 5 (restrained — entry animations, hover states)
- DENSITY: 4 (airy, content-forward)

### Pre-Flight Check Results

| # | Check | Result | Detail |
|---|-------|--------|--------|
| 1 | Hero fits viewport | PASS | Headline ~2 lines at desktop, CTAs visible |
| 2 | Hero top padding | PASS | `pt-24` — within the cap |
| 3 | Hero stack discipline | PASS | 3 elements: eyebrow, headline, subtext, CTAs = max 4 |
| 4 | Hero subtext ≤ 20 words | **FAIL** | Current: 22 words. Trim to ≤ 20. |
| 5 | Hero subtext ≤ 4 lines | PASS | Fits 3-4 lines |
| 6 | `min-h-[100dvh]` (not `h-screen`) | **FAIL** | Uses `min-h-[80vh] lg:min-h-screen`. Should be `min-h-[100dvh]`. |
| 7 | Decorative text strip at hero bottom | **FAIL** | "Lombok · Indonesia" with divider line and tiny uppercase text is the exact pattern banned in Section 9.F. |
| 8 | Dot separator in eyebrow | PASS (borderline) | `·` used once. Acceptable per the "max 1 per line" rule. But eyebrow itself could be dropped. |
| 9 | Eyebrow present | FAIL (pre-flight) | All 6 sections have eyebrows. Hero alone having an eyebrow is fine, but the count across the page exceeds limit. |
| 10 | Middle-dot separator | PASS | One `·` in the eyebrow — within the "max 1 per line" ration. |
| 11 | Em-dash check | PASS | Zero em-dashes on the page. |
| 12 | Button contrast | PASS | `bg-brand-600` + white text = passes WCAG AA. |
| 13 | CTA text no wrap | PASS | "Konsultasi Trip" and "Lihat Paket" fit one line. |
| 14 | Logo wall inside hero | N/A | No logo wall in hero. |
| 15 | Trust micro-strip in hero | N/A | No trust strip in hero. |
| 16 | Scroll cues | PASS | No "Scroll" cues visible. |
| 17 | Version labels | PASS | None. |

---

## 5. Page Hierarchy Audit

```
/ (index.astro)
├── Header (fixed, z-50)
│   ├── Logo
│   ├── NavDesktop (mega menus)
│   ├── WhatsApp CTA
│   └── NavMobile
├── Main #content
│   ├── HeroSection [FULL VIEWPORT]
│   │   ├── Background image (hero.webp)
│   │   ├── Gradient overlay
│   │   └── Glass panel content
│   │       ├── Eyebrow
│   │       ├── Divider line
│   │       ├── H1 title
│   │       ├── P description
│   │       ├── CTA buttons
│   │       └── Decor strip ("Lombok · Indonesia")
│   ├── FeaturedSection [Services6Block]
│   │   ├── Eyebrow + Title + Desc (sticky left)
│   │   └── 2x2 image cards
│   ├── DestinationsSection [Features1Block]
│   │   ├── Eyebrow + Title + Desc (right aligned)
│   │   └── 2x2 feature cards with icons
│   ├── Reviews5Block [Triple marquee]
│   │   ├── Eyebrow + Title + Desc (center)
│   │   └── 3 rows of marquee testimonial cards
│   ├── TransportSection [Services5Block]
│   │   ├── Eyebrow + Title + Desc (left sticky)
│   │   └── 2-col service items
│   └── VideoSection
│       ├── Eyebrow + Title + Desc (left)
│       ├── CTA link
│       └── YouTube iframe (right)
└── Footer
    ├── Separator
    ├── Brand description + social badges
    ├── Nav links + popular destinations
    └── Copyright
```

### Hierarchy Findings

- **Semantic HTML**: Uses `<section>`, `<header>`, `<footer>`, `<main id="content">`, `<nav>` — excellent.
- **Heading hierarchy**: H1 in hero, H2 in every section — correct.
- **Skip to content**: No skip-link present (minor a11y issue).
- **Mobile nav**: Has hamburger with `NavigationMobile` component — good.
- **SEO**: Structured data (Organization, Website, FAQPage, TouristAttraction, Product, BreadcrumbList) well-implemented.

---

## 6. Summary of Actions Needed

### Pre-Flight Fail Items (must fix before ship)
1. **Hero subtext > 20 words** — trim from 22 to ≤ 20
2. **`min-h-screen` instead of `min-h-[100dvh]`** — fix viewport stability on mobile
3. **Decorative text strip at hero bottom** — remove "Lombok · Indonesia" strip
4. **Eyebrow overuse** — 6 eyebrows on 6 sections (max allowed: 2). Remove from at least 4 sections.

### Recommended Fixes (hero scope — the requested task)
- [x] Remove decorative bottom strip
- [x] Remove divider line below eyebrow
- [x] Switch to `min-h-[100dvh]`
- [x] Trim subtext to ≤ 20 words
- [x] Simplify eyebrow (or remove)
- [x] Clean up the glass panel

### Recommended Fixes (full site, outside hero scope)
- Fix `theme-color` to match brand blue (`#337fb0`) not teal
- Consider reducing eyebrow count across sections
- Consider swapping Inter for a more distinctive sans
- Revisit region accent colors (emerald + violet compete with brand blue)
- Apply radius tokens consistently (cards use `rounded-[1.75rem]` instead of token-based radius)
- Add a11y skip-to-content link
