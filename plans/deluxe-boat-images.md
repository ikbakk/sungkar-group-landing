# Deluxe Boat Image Wiring Plan

## Context
We need to place Labuan Bajo sailing package images from `resource/` into project image assets for **deluxe boats** covering both **private trips** and **open trips**. Image handling must stay consistent with the existing package asset pipeline and package source-of-truth in `scripts/data/packages/`.

## Requirements
- Focus only on **deluxe boats** for now.
- Cover both **private trips** and **open trips**.
- Each cabin should use **clear folder naming** so future updates are easy to map.
- Images are converted locally via **ffmpeg**.
- Output format: **WebP**.
- File size target: **under 1 MB**.
- Preferred target: **under 300 KB**, especially for **cabin photos**.

## Scope
### Deluxe private trips
- `deluxe-alfathran`
- `deluxe-gaisan`
- `deluxe-hatira`
- `deluxe-maheswari`
- `deluxe-nk-jaya-1`
- `deluxe-nk-jaya-2`
- `deluxe-yukai`

### Deluxe open trips
- `open-trip-alfathran`
- `open-trip-gaisan`
- `open-trip-maheswari`
- `open-trip-nk-jaya-1`
- `open-trip-nk-jaya-2`
- `open-trip-yukai`

## Existing Reuse
- Image barrel generation: `scripts/generate-image-barrel.mjs`
- Image reference validation: `scripts/validate-images.mjs`
- Package image resolution: `src/lib/content/tourPackages/images.ts`
- Package source-of-truth: `scripts/data/packages/<slug>/main.json`
- Package MDX generation: `scripts/generate-tour-mdx.mjs`

## Asset Placement Convention
### Destination folders
- Hero: `src/assets/images/hero/`
- Gallery/cabins/facilities: `src/assets/images/gallery/`

### Naming convention
Use predictable boat-based names tied to the package slug.

#### Boat-level images
- `hero/<boat-slug>.webp`
- `gallery/<boat-slug>-exterior.webp`
- `gallery/<boat-slug>-interior.webp`
- `gallery/<boat-slug>-sundeck.webp`
- `gallery/<boat-slug>-facility-<name>.webp`

#### Cabin-level images
Use cabin-class + deck/position when available.
Examples:
- `gallery/<boat-slug>-master-ocean-1-01.webp`
- `gallery/<boat-slug>-master-ocean-2-01.webp`
- `gallery/<boat-slug>-signature-ocean-1-01.webp`
- `gallery/<boat-slug>-deluxe-ocean-1-01.webp`
- `gallery/<boat-slug>-superior-cabin-1-01.webp`

This should match folder naming from `resource/` as closely as possible while staying URL-safe and consistent with existing assets.

## Approach
1. Audit `resource/` for deluxe-boat private/open-trip image sets.
2. Map each raw source folder to a package slug.
3. Convert with ffmpeg to WebP using size-conscious settings.
4. Place selected hero/gallery/cabin images into `src/assets/images/{hero,gallery}/`.
5. Update `scripts/data/packages/<slug>/main.json` image arrays and cabin image references.
6. Regenerate image barrel.
7. Regenerate package MDX from source data.
8. Validate image references and build output.

## Files to Modify
- `src/assets/images/hero/*`
- `src/assets/images/gallery/*`
- `src/assets/images/index.ts`
- `scripts/data/packages/deluxe-*/main.json`
- `scripts/data/packages/open-trip-*/main.json` for deluxe open-trip boats only
- `src/content/tourPackages/...` (generated output only, regenerated from scripts)
- `docs/CODEBASE.md` if new notable image groups are added

## ffmpeg Guidance
Suggested conversion goals:
- WebP output
- Keep cabin photos ideally under 300 KB
- Hard ceiling under 1 MB
- Resize as needed for cabin images before quality tuning
- Prefer stable naming output per selected final asset, not one-to-one dumping every raw file unless needed by cabin galleries

## Implementation Checklist
- [x] Inventory deluxe private/open-trip boat image folders in `resource/`
- [x] Match each folder to package slug
- [x] Select hero image per boat
- [x] Select core gallery images per boat
- [x] Select cabin-specific images and preserve clear cabin naming
- [x] Convert selected images to WebP with ffmpeg under size targets
- [x] Copy outputs into `src/assets/images/hero/` and `src/assets/images/gallery/`
- [x] Update package `main.json` image arrays and cabin image lists
- [x] Run `npm run images:barrel`
- [x] Run `npm run validate:images`
- [x] Run `npm run generate:tours`
- [x] Run `npm run check`
- [x] Run `npm run build`
- [x] Update `docs/CODEBASE.md` if needed

## Completion Status
✅ **DONE** — All 4 deluxe boats with `resource/` folders wired:

| Boat | Hero | Gallery | Cabin Images | Status |
|------|------|---------|-------------|--------|
| Maheswari | 1 | 4 | 8 cabins × 3 = 24 | ✅ |
| NK Jaya 1 | 1 | 4 | 7 cabins × 3 = 21 (video frames) | ✅ |
| NK Jaya 2 | 1 | 4 | 6 cabins × 3 = 18 | ✅ |
| Yukai | 1 | 4 | 6 cabins × 2-3 = 14 | ✅ |

**Total: 77 new cabin images + 20 hero/gallery images = 97 assets**

**Validation (final):**
- 305 image files on disk, 305 references in barrel ✅
- `npm run check`: 0 errors, 0 warnings ✅
- `npm run build`: 498 pages built ✅

**Boats without `resource/` folders (no action):** Alfathran, Gaisan, Hatira (use existing Drive-sourced assets)

**Commits:**
- `1f8f005` — initial hero/gallery wiring
- `9d6312c` — multi-image cabin carousel expansion
- `57ca702` — CODEBASE docs update

## Verification
- `npm run images:barrel`
- `npm run validate:images`
- `npm run generate:tours`
- `npm run check`
- `npm run build`
- Manually inspect a sample of deluxe private/open-trip pages in `dist/` to confirm:
  - hero image resolves
  - gallery image order is correct
  - cabin images map to the correct cabin
  - no fallback images are being used unexpectedly

## Notes for the Next Agent
- Treat `scripts/data/packages/` as the source of truth.
- Do not hand-edit generated MDX unless regenerating from scripts.
- Preserve naming consistency between private/open variants when the same boat appears in both.
- Prefer a minimal, curated final image set over importing every raw image unless the page actually uses them.
