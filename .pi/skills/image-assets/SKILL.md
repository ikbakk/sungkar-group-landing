---
name: image-assets
description: >
  Manage image assets for the Sungkar Group landing page. Trigger when the user asks to
  add a new image, add images to the barrel export, change image references, audit missing
  images, optimize images, add image categories, or fix broken image paths. Also trigger
  on "add a hero image", "add destination photos", "update the logo", "the image is 404ing",
  or "check missing images". Does NOT handle OG metadata images specifically
  (use schema-seo for OG), component styling (use component-library), or image CDN
  configuration (use deployment).
weight: 6
compatibility:
  - required_tools:
      - read
      - edit
      - bash
      - write
    required_commands:
      - npm run check:images
      - npm run build
---

# Image Assets Skill

Manage image assets for the Sungkar Group landing page: adding, organizing, referencing, and auditing images.

## Directory Structure

```
src/assets/images/
├── accommodations/     # Accommodation photos (webp)
│   └── lombok.webp
├── brand/              # Logo, OG images (webp/jpg)
│   ├── logo.webp
│   └── og-home.jpg
├── destinations/       # Destination photos (webp)
│   ├── gili.webp
│   ├── lombok.webp
│   ├── rinjani.webp
│   └── sumbawa.webp
├── gallery/            # Gallery/tour photos (webp)
│   ├── gili-meno.webp
│   ├── kuta-beach.webp
│   ├── kuta-beach-2.webp
│   ├── tour-cultural.webp
│   ├── tour-snorkeling.webp
│   └── whaleshark.webp
├── hero/               # Hero/banner images (webp)
│   ├── hero.webp
│   └── hero-lombok.webp
├── vehicles/           # Vehicle photos (webp)
│   └── rental.webp
└── og/                 # OG-specific images (future)
```

## Adding a New Image

### Step 1: Place the image file

Save the image in the appropriate category directory under `src/assets/images/{category}/`.

**Format requirements:**
- **Primary format:** WebP (`.webp`) — always convert to WebP first
- **Fallback:** JPEG (`.jpg`) — only if WebP causes quality issues
- **OG images:** 1200×630px (1.91:1 aspect ratio), < 2MB
- **Hero images:** 1920×1080px or larger, landscape
- **Thumbnails/cards:** 800×600px or similar, < 200KB
- **Logos:** SVG preferred, else WebP with transparency

### Step 2: Add to barrel export

Edit `src/assets/images/index.ts`:

```typescript
// Import the image
import _myImage from "./{category}/{filename}.webp";

// Add to the appropriate category export
export const CATEGORY = {
  // ... existing
  myImage: _myImage,
};
```

**Naming convention:**
- kebab-case filenames (`kuta-beach.webp`)
- Import with `_` prefix (`_kutaBeach`)
- CamelCase export key (`kutaBeach`)

### Step 3: Update type if needed (rare)

If adding a completely new category (e.g., `src/assets/images/team/`), update the barrel with a new top-level export:

```typescript
// New category
import _member1 from "./team/member1.webp";

export const TEAM = {
  member1: _member1,
};
```

### Step 4: Reference the image in content/components

```typescript
import { DESTINATIONS } from "@/assets/images";

// In content data files:
const item = {
  image: DESTINATIONS.lombok,  // Type: ImageMetadata
};

// In Astro components:
import { DESTINATIONS } from "@/assets/images";
---
<img src={DESTINATIONS.lombok.src} alt="..." />
<!-- Or using the ImageSource helper: -->
```

### Step 5: Verify

```bash
npm run check:images   # Verifies all referenced images exist
npm run build          # Build succeeds (Astro processes images)
```

## Image Types and Helpers

The `ImageSource` type (`src/lib/images.ts`) is `ImageMetadata | string`:
- **Local imports** → `ImageMetadata` (has `.src`, `.width`, `.height`)
- **Remote URLs** → `string`

Helpers:
```typescript
import { isRemoteImage, getImageSrc, getImageWidth, getImageHeight } from "@/lib/images";

isRemoteImage(src)   // true if string URL
getImageSrc(src)     // Returns the URL string regardless of type
getImageWidth(src)   // Returns width if available (local images)
getImageHeight(src)  // Returns height if available
```

## The `check:images` Script

Located at `scripts/check-images.mjs`. It:
1. Scans all image references in data files, page files, and components
2. Verifies each referenced file exists in `src/assets/images/`
3. Reports any broken references

**After adding/renaming images:**
```bash
npm run check:images
```

## Renaming or Removing an Image

### Rename:
1. Rename the file on disk
2. Update the import in `src/assets/images/index.ts`
3. Update all content references in source + locale files
4. Check for component references with `rg "oldName" src/`
5. Run `npm run check:images`

### Remove:
1. Remove the import/export from `src/assets/images/index.ts`
2. Remove the file from disk
3. Update all references in content, pages, and components
4. Run `npm run check:images`

## Common Tasks

### Adding images for a new destination
1. Add WebP files to `src/assets/images/destinations/`
2. Add imports to `DESTINATIONS` barrel in `index.ts`
3. Reference in `src/lib/content/destinations/data.ts`
4. Reference in locale content copies

### Adding vehicle photos
1. Add WebP files to `src/assets/images/vehicles/`
2. Add to `VEHICLES` barrel in `index.ts`
3. Each vehicle has `imageTop` and `imageBottom` fields

### Adding accommodation photos
1. Add WebP to `src/assets/images/accommodations/`
2. Add to `ACCOMMODATIONS` barrel in `index.ts`

### Adding OG-specific images
1. Add to `src/assets/images/og/` (1200×630px)
2. Reference from OG metadata in `src/lib/og-metadata.ts`

## Image CDN Migration (Future)

When migrating to a CDN (Cloudflare Images, Cloudinary, etc.):
1. Add `CDN_ORIGIN` to `src/lib/site-config.ts`
2. Update `src/lib/schemas.ts` to use `CDN_ORIGIN` for schema image URLs
3. Remote images are handled via string URLs — no barrel import needed
4. Update `check-images.mjs` to verify remote URLs are reachable

## Validation

```bash
npm run check:images   # All image references verified
npm run build          # Production build succeeds
```
