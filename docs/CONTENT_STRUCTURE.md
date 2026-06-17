# Content Structure Documentation

This document describes the structure and organization of content in the Sungkar Group landing page project.

## Table of Contents

- [Tour Packages](#tour-packages)
- [Destinations](#destinations)
- [Accommodations](#accommodations)
- [Vehicles](#vehicles)
- [FAQs](#faqs)
- [Content Organization](#content-organization)
- [Adding New Content](#adding-new-content)
- [Content Validation](#content-validation)

---

## Tour Packages

### Location
- `src/lib/content/tourPackages/`
- Organized by region: `lombok/`, `labuan-bajo/`

### Structure

```
tourPackages/
├── collections.ts          # Collection definitions
├── types.ts               # Type definitions
├── utils.ts               # Helper functions
├── lombok/
│   ├── 1d.ts              # 1-day packages
│   ├── 2d1n.ts            # 2 days 1 night
│   ├── 3d2n.ts            # 3 days 2 nights
│   ├── 4d3n.ts            # 4 days 3 nights
│   └── openTrip.ts        # Open trip packages
└── labuan-bajo/
    └── index.ts           # Labuan Bajo packages
```

### Package Schema

```typescript
type TourPackage = {
  slug: string;                // Unique identifier (kebab-case)
  title: string;               // Display title
  region: RegionKey;           // 'lombok' | 'sumbawa' | 'labuan-bajo'
  featured?: boolean;          // Featured in listings
  collectionSlug: CollectionSlug; // Package type
  collectionTitle: string;     // Display title for collection
  category: string;            // Category label
  duration: string;            // "1 Hari", "3 Days 2 Nights", etc.
  images: ImageSource[];      // Hero and gallery images
  summary: string;             // Brief description
  highlights: string[];        // Key highlights
  itinerary: string[];         // Daily schedule
  includes: string[];          // What's included
  excludes: string[];          // What's not included
}
```

### Collection Types

Defined in `src/lib/constants/tourPackages.ts`:

- `ONE_DAY` - Single day tours
- `TWO_DAYS_ONE_NIGHT` - Weekend getaways
- `THREE_DAYS_TWO_NIGHTS` - Multi-day tours
- `FOUR_DAYS_THREE_NIGHTS` - Extended tours
- `OPEN_TRIP` - Open trip packages
- `DAY_TRIP` - Day trips (Labuan Bajo)
- `OVERNIGHT` - Overnight trips (Labuan Bajo)

### Adding a New Package

1. Create a new file or add to existing file in region folder
2. Use `createPackage()` helper from `utils.ts`
3. Follow existing naming convention: `collection-type.ts`
4. Add to appropriate collection in `collections.ts`

Example:
```typescript
import { createPackage } from "../utils";
import { COLLECTIONS } from "../collections";

createPackage(COLLECTIONS.THREE_DAYS_TWO_NIGHTS, {
  title: "New Package Title",
  region: "lombok",
  category: "Paket Wisata Lombok",
  duration: "3 Hari 2 Malam",
  images: [HERO.heroLombok, DESTINATIONS.gili],
  summary: "Package description...",
  highlights: ["Highlight 1", "Highlight 2"],
  itinerary: ["Day 1 - Activity", "Day 2 - Activity"],
  includes: ["Included service 1"],
  excludes: ["Excluded service 1"],
});
```

---

## Destinations

### Location
- `src/lib/content/destinations.ts`

### Structure

```typescript
type Destination = {
  slug: string;                // Unique identifier
  title: string;               // Display title
  region: string;              // Region name
  image: ImageSource;          // Hero image
  gallery: ImageSource[];      // Gallery images
  summary: string;             // Description
  thingsToDo: string[];        // Activities available
  packages: string[];          // Related package slugs
}
```

### Adding a New Destination

1. Add to `destinations.ts` array
2. Include all required fields
3. Add images to `src/assets/images/destinations/`
4. Reference in appropriate packages

Example:
```typescript
{
  slug: "new-destination",
  title: "New Destination",
  region: "Lombok",
  image: DESTINATIONS.newDestination,
  gallery: [GALLERY.image1, GALLERY.image2],
  summary: "Destination description...",
  thingsToDo: ["Activity 1", "Activity 2"],
  packages: ["package-slug-1", "package-slug-2"],
}
```

---

## Accommodations

### Location
- `src/lib/content/accommodations.ts`

### Structure

```typescript
type Accommodation = {
  slug: string;                // Unique identifier
  name: string;                // Display name
  region: RegionKey;           // 'lombok' | 'sumbawa' | 'labuan-bajo'
  perks: string[];             // Amenities
  regionalHighlights: string[]; // Local highlights
  description: string;         // Description
  image: ImageSource;          // Hero image
}
```

### Adding a New Accommodation

1. Add to `accommodations.ts` array
2. Include all required fields
3. Add image to `src/assets/images/accommodations/`
4. Reference in tour packages as needed

Example:
```typescript
{
  slug: "hotel-name",
  name: "Hotel Name",
  region: "lombok",
  perks: ["WiFi", "Pool", "Breakfast"],
  regionalHighlights: ["Ocean view", "Beachfront"],
  description: "Hotel description...",
  image: ACCOMMODATIONS.hotelName,
}
```

---

## Vehicles

### Location
- `src/lib/content/car-rental.ts`

### Structure

```typescript
type Vehicle = {
  slug: string;                // Unique identifier
  name: string;                // Display name
  region: RegionKey;           // 'lombok' | 'sumbawa' | 'labuan-bajo'
  pricePerDay: string;         // Price per day
  seats: number;               // Seating capacity
  transmission: "Manual" | "Automatic";
  features: string[];          // Vehicle features
  bestFor: string[];           // Best for (Family, Group, etc.)
  description: string;         // Description
  imageTop: ImageSource;       // Top view image
  imageBottom: ImageSource;    // Bottom/side view image
}
```

### Vehicle Types

Defined in `src/lib/constants/vehicles.ts`:

- **Avanza** - 7 seats, Manual/Automatic
- **Innova Reborn** - 7 seats, Automatic
- **Innova Zenix** - 7 seats, Automatic
- **Fortuner GR** - 7 seats, Automatic
- **Pajero Sport** - 7 seats, Automatic
- **Alphard** - 7 seats, Automatic
- **Hiace Commuter** - 12 seats, Automatic
- **Hiace Premio** - 12 seats, Automatic
- **Medium Bus** - 25 seats, Automatic
- **Big Bus** - 45 seats, Automatic

### Adding a New Vehicle

1. Add to `car-rental.ts` array
2. Include all required fields
3. Add images to `src/assets/images/vehicles/`
4. Update `VEHICLE_SEATS` in `src/lib/constants/vehicles.ts` if needed

Example:
```typescript
{
  slug: "new-vehicle",
  name: "New Vehicle",
  region: "lombok",
  pricePerDay: "150",
  seats: 8,
  transmission: "Automatic",
  features: ["AC", "GPS", "Leather Seats"],
  bestFor: ["Family", "Group"],
  description: "Vehicle description...",
  imageTop: VEHICLES.newVehicleTop,
  imageBottom: VEHICLES.newVehicleBottom,
}
```

---

## FAQs

### Location
- `src/lib/content/faqs/`
- Organized by category: `about/`, `contact/`, `general/`, `package/`, etc.

### Structure

```typescript
type FAQItem = {
  question: string;            // FAQ question
  answer: string;              // FAQ answer
  category?: string;           // Optional category
}
```

### Adding a New FAQ

1. Add to appropriate category file
2. Follow existing format
3. Ensure question is clear and answer is comprehensive

Example:
```typescript
{
  question: "How do I book a tour?",
  answer: "You can book through our website, WhatsApp, or phone...",
}
```

---

## Content Organization

### Image Assets

All images are stored in:
- `src/assets/images/`

Organized by category:

```
images/
├── brand/                  # Brand assets
├── destinations/          # Destination images
├── gallery/               # General gallery images
├── hero/                  # Hero images
├── legality/              # Legal documents
└── vehicles/              # Vehicle images
```

### Image Naming Convention

- Use kebab-case: `hero-lombok.webp`
- Prefix with category: `g-kuta-beach.webp` (gallery)
- Keep names descriptive but concise

### Image Types

- **HERO**: Hero/banner images
- **DESTINATIONS**: Destination-specific images
- **GALLERY**: Gallery/activity images
- **ACCOMMODATIONS**: Accommodation images
- **VEHICLES**: Vehicle images (top and bottom views)

---

## Adding New Content

### Step 1: Create Image Assets

1. Add images to `src/assets/images/`
2. Update `src/assets/images/index.ts` barrel file
3. Run `npm run images:barrel` to regenerate if needed

### Step 2: Define Content

1. Create or update content file
2. Use appropriate type from `src/lib/content/shared/types.ts`
3. Follow existing patterns

### Step 3: Add to Collections

1. Update relevant collections in:
   - `src/lib/content/tourPackages/collections.ts`
   - `src/lib/constants/tourPackages.ts`
   - `src/lib/constants/regions.ts`

### Step 4: Validate

Run validation:
```bash
npm test                    # Run all tests
npm run check               # Type checking
npm run validate            # Content validation
npm run validate:images     # Image validation
```

### Step 5: Commit

```bash
git add .
git commit -m "feat: add new tour package - [package-name]"
```

---

## Content Validation

### Automated Validation

The project includes several validation scripts:

1. **Data Validation** (`npm test`)
   - Validates all content against Zod schemas
   - Checks required fields
   - Validates image references

2. **Type Checking** (`npm run check`)
   - TypeScript compilation
   - Type safety across the codebase

3. **Image Validation** (`npm run validate:images`)
   - Checks all image references
   - Validates image existence
   - Reports missing images

4. **Content Validation** (`npm run validate`)
   - Validates content structure
   - Checks for consistency
   - Reports errors

### Manual Validation

Before committing:

1. Run all tests: `npm test`
2. Check types: `npm run check`
3. Validate content: `npm run validate`
4. Validate images: `npm run validate:images`
5. Build project: `npm run build`

---

## Best Practices

### Naming Conventions

- **Files**: kebab-case (`tour-packages.ts`)
- **Variables**: camelCase (`heroLombok`)
- **Constants**: UPPER_SNAKE_CASE (`COLLECTIONS`)
- **Types**: PascalCase (`TourPackage`)
- **Images**: kebab-case (`hero-lombok.webp`)

### Content Guidelines

1. **Titles**: Clear, descriptive, capitalize properly
2. **Descriptions**: Concise but informative
3. **Images**: High quality, relevant, optimized
4. **Prices**: Format consistently (e.g., "150", "200 USD")
5. **Durations**: Use consistent format ("1 Hari", "3 Days 2 Nights")

### Code Organization

1. Keep related content together
2. Use constants for repeated values
3. Document complex logic
4. Follow existing patterns
5. Keep files focused and small

---

## Troubleshooting

### Common Issues

**Missing Image Error**
- Solution: Add image to `src/assets/images/` and update barrel file

**Type Error**
- Solution: Update type definitions in `src/lib/content/shared/types.ts`

**Validation Failure**
- Solution: Run `npm test` to see detailed error messages

**Build Failure**
- Solution: Run `npm run check` to identify type errors

---

## Additional Resources

- [Astro Documentation](https://docs.astro.build/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Zod Documentation](https://zod.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Last Updated: June 2025
