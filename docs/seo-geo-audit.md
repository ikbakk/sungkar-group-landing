# SEO/GEO Audit — Sungkar Group

## Status

- Canonical and hreflang handling exist in `src/components/seo/SEOMeta.astro`
- Structured data is centralized in `src/lib/schemas.ts`
- Global metadata sources are in `src/lib/site-config.ts` and `src/lib/og-metadata.ts`

## Keep / Skip

Skip items already fixed in code or no longer relevant:
- OG image defaults where pages already pass a page-specific image
- Privacy / terms placeholders if the real pages already exist
- Social links if they already point to real brand profiles
- Any duplicate title / hreflang issue already patched

## Remaining SEO/GEO priorities

1. Validate locale canonical + hreflang output on all localized routes.
2. Ensure page-specific OG images exist for blog, guides, and shareable landing pages.
3. Review structured data per page type:
   - Organization / Website
   - ContactPage / LocalBusiness
   - Product or tourism-service pages
   - FAQPage where helpful
4. Confirm `PUBLIC_SITE_URL` is set correctly in deploy previews.
5. Add or refine AI-readable summaries, FAQs, and concise answer-first copy on priority pages.

## GEO notes

- Use clear entity names, location mentions, and service descriptors.
- Prefer factual, specific copy over keyword stuffing.
- Add FAQ blocks where users commonly ask about destinations, packages, pricing, and logistics.
- Keep headings short and answer-first.

## Validation checklist

- [ ] Canonical URL is correct
- [ ] hreflang is correct
- [ ] Meta description is unique
- [ ] OG image is present
- [ ] JSON-LD is valid
- [ ] robots/sitemap are correct
- [ ] Important pages are internally linked
