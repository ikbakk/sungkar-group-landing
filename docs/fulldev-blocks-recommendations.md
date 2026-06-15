# Fulldev Block Recommendations for Sungkar Group Landing

This file catalogs Fulldev blocks suitable for replacing custom sections across the site.
Install any block with:

```bash
npx shadcn@latest add @fulldev/{block-name}
```

Then move from `src/components/ui/{block-name}/` → `src/components/blocks/{block-name}.astro` (our
convention).

---

## Home Page Sections

| Current Section | Recommended Block(s) | Rationale |
|---|---|---|
| `HeroSection` (deleted) | **hero-11** ✅ Done | Centered headline + full-bleed background + social proof |
| `TestimonialSection` (deleted) | **reviews-5** ✅ Done | 3-row marquee with quotes, avatars, ratings |
| `FeaturedSection` (tours) | **services-1** or **services-7** | Image card grid with label/title/description; services-7 has hero card + secondary grid |
| `DestinationsSection` | **services-4** or **features-1** | Clean image cards (services-4) or "Why choose us" icon grid (features-1) |
| `TransportSection` | **features-1** or **services-5** | Icon-based compact cards for services like airport transfer |
| `VideoSection` | **content-2** (split layout) or keep custom | YouTube embed needs custom iframe; content-2 gives side-by-side reuse |

## Other Pages

| Page | Recommended Block(s) | Rationale |
|---|---|---|
| `/faq` | **faqs-1** | Accordion + support links |
| `/tentang-kami` (About) | **content-2** (split story) + **features-1** (values) | Side-by-side narrative + icon grid |
| `/ulasan` (Reviews page) | **reviews-3** (carousel) or **reviews-1** (grid) | Scrolalble carousel for many reviews |
| `/kontak` (Contact) | **contact-1** (info + form) or keep custom | Our custom WhatsAppForm/ContactForm work well already |
| `/paket-wisata` (Tours index) | **services-1** or **pricing-1** | Package listing with tiers |
| Footer | **footer-1** (multi-column) | Brand, links, social, copyright |

## Design Convention Reminder

When integrating any Fulldev block, **change `font-semibold` to `font-heading`** on all headings
(`h1`, `h2`, `h3`, `.section-title` equivalents). Body text stays `font-sans` (default). This
maintains our project's typography system.

## Block Compatibility Notes

- **Old button.tsx (React/Base UI) and new button/ (Fulldev Astro) coexist** — Fulldev blocks import
  `@/components/ui/button` which resolves to the old React `.tsx` file (file > directory). If a block
  uses `as="a"` on Button, wrap with `<a href><Button>` instead.
- **Old card.tsx and new card/ (Fulldev Astro) coexist** — same file-over-directory resolution.
  Consider migrating consumers to Fulldev Card once ready.
- **section/Section/SectionContainer** Fulldev components are already used by hero-11 and reviews-5
  and work well with our Tailwind theme.

## Blocks NOT Recommended

| Block | Why Not |
|---|---|
| `hero-1` through `hero-10`, `hero-12`, `hero-13` | hero-11 covers all our needs (full-bleed + centered) |
| `pricing-2`, `pricing-3` | Only 1 package type; pricing-1 is most flexible |
| `articles-2` through `articles-4` | articles-1 (featured + grid) is best for travel blog |
| `footer-2` (compact) | Too minimal; footer-1 matches our content density |
| `contact-2`, `contact-3` | contact-1 is the most complete form set |

## Migration Priority

1. ✅ Hero section (hero-11) — Done
2. ✅ Testimonials (reviews-5) — Done
3. 🔲 Featured tours → services-1 or services-7 — Low effort, high visual impact
4. 🔲 Destinations section → services-4 — Low effort
5. 🔲 Transport section → features-1 — Low effort
6. 🔲 FAQ page → faqs-1 — Medium effort (content refactor)
7. 🔲 Footer → footer-1 — High effort (current footer is a component)

See line references in `src/components/landing/` for existing implementation details.
