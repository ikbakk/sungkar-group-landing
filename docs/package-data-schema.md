# Tour Package Data Schema (for AI PDF Extraction)

Given a PDF brochure for a tour boat/package, extract data into two JSON files:

## 1. Shared Data: `scripts/data/packages/{slug}/main.json`

Fields shared across all locales (boat specs, cabins, prices).

```jsonc
{
  "slug": "unique-url-slug", // string: kebab-case, e.g. "maheswari-deluxe"
  "region": "labuan-bajo", // string: one of "lombok", "sumbawa", "labuan-bajo"
  "featured": false, // boolean, optional — omit when false, set true when featured
  "collectionSlug": "sailing-deluxe-private-trip", // string: collection group slug
  "images": [
    // string[]: path relative to src/assets/images/packages/
    "hero/boat-name.webp", // Hero image (1200×800 recommended)
    "gallery/boat-exterior.webp", // Gallery images
    "gallery/boat-interior.webp",
    "gallery/boat-cabin.webp",
    "gallery/boat-sundeck.webp",
  ],
  "boatName": "Maheswari", // string, optional: boat packages only (omit for land tours)
  "boatType": "Deluxe Phinisi", // string, optional: boat packages only
  "boatCapacity": 20, // number, optional: boat packages only
  "boatSpecs": [
    // array, optional: boat packages only
    { "label": "Panjang Kapal", "value": "30m" },
    { "label": "Lebar Kapal", "value": "6.5m" },
    { "label": "Kecepatan Jelajah", "value": "7-10 Knot" },
    { "label": "Kapasitas Air Tawar", "value": "13000 Liter" },
    { "label": "Kapasitas Bahan Bakar", "value": "8000 Liter" },
    { "label": "Mesin", "value": "Mitsubishi 8D C9 Cylinder" },
    { "label": "Generator", "value": "PS120-30Kva, PS120-22Kva" },
    { "label": "Navigasi", "value": "AIS, Radar, Compass, GPS, Map" },
    { "label": "Radio", "value": "SBB Radio, VHF Radio" },
    {
      "label": "Peralatan Keselamatan",
      "value": "Liferaft, Life Jacket, Ring Buoy, Fire Extinguisher, First Aid Kit",
    },
    { "label": "Speedboat", "value": "6 Meter Fiberglass with Yamaha 15 HP" },
    { "label": "Kabin", "value": "6 Kabin (AC, Kamar Mandi Pribadi)" },
    { "label": "Jumlah Kabin", "value": "6 Kabin" },
  ],
  "cabins": [
    // array, optional: boat packages only
    {
      "name": "Family Cabin (Lower Deck)",
      "description": "2x Queen Bed, Kamar Mandi Pribadi, AC, Kapasitas 2-4 Orang.",
      "capacity": "2-4",
      "price": "Harga tergantung paket (lihat daftar harga)",
      "images": ["gallery/alfathran-family-cabin.webp"],
    },
  ],
  "priceList": {
    // object, optional: boat packages only, reference data (not consumed by generator)
    "fullDay": { "1-10": 40000000, "addPerPax": 1000000, "maxPax": 25 },
    "2D1N": { "1-10": 51000000, "addPerPax": 1500000, "maxPax": 25 },
    "3D2N": { "1-10": 58000000, "addPerPax": 2500000, "maxPax": 25 },
    "4D3N": { "1-10": 67000000, "addPerPax": 3500000, "maxPax": 25 },
  },
}
```

## 2. Localized Strings: `scripts/data/packages/{slug}/locales.json`

**Must include ALL 5 locales** with these keys:

### Multi-Duration Format (has `durationOptions`)

Use when the package offers multiple trip lengths (e.g. 1D, 2D1N, 3D2N, 4D3N).

```jsonc
{
  "id": {
    "title": "Maheswari - Phinisi Deluxe (Private Charter)",
    "collectionTitle": "Private Trip Deluxe", // must match one of the known collection titles
    "category": "Sailing Labuan Bajo",
    "durationOptions": [
      // REQUIRED for multi-duration
      "1 Hari (Full Day)", // label for 1D tab
      "2 Hari 1 Malam", // label for 2D1N tab
      "3 Hari 2 Malam", // label for 3D2N tab
      "4 Hari 3 Malam", // label for 4D3N tab
    ],
    "summary": "Nikmati pengalaman berlayar pribadi...",
    "highlights": [
      "Kapal Phinisi Deluxe dengan 6 kabin AC",
      "Area luar yang luas untuk bersantai",
    ],
    "itinerary": {
      // REQUIRED - object with duration keys
      "1D": [
        "Day 1 - Penjemputan dari hotel pukul 05.00 WITA",
        "Day 1 - Welcome drink",
        "Day 1 - Berangkat berlayar pukul 05.30 WITA",
      ],
      "2D1N": [
        "Day 1 - Penjemputan dari hotel/bandara pukul 10.00 WITA",
        "Day 1 - Welcome drink",
        "Day 2 - Trekking di Pulau Padar",
      ],
      "3D2N": ["Day 1 - ...", "Day 2 - ...", "Day 3 - ..."],
      "4D3N": ["Day 1 - ...", "Day 2 - ...", "Day 3 - ...", "Day 4 - ..."],
    },
    "includes": [
      "Penjemputan dan pengantaran (di dalam dan luar pelabuhan)",
      "Kapal Phinisi Deluxe dengan AC",
    ],
    "excludes": ["Pengeluaran pribadi", "Tiket pesawat ke Labuan Bajo"],
    "additionalServices": [
      // optional
      "Tiket masuk Taman Nasional Komodo untuk WNI: Rp 250.000/orang",
      "Guide lokal: Rp 500.000/hari",
    ],
    "dontForgetToBring": [
      // optional
      "Sandals/sepatu untuk trekking",
      "Tas ransel",
      "Sunblock",
    ],
    "termsAndConditions": [
      // optional
      "Bayi (di bawah 2 tahun): Gratis.",
      "Uang muka minimal 30% dari total pembelian.",
    ],
  },
  "en": {
    /* same structure, translated */
  },
  "ms": {
    /* same structure, translated to Malay */
  },
  "ar": {
    /* same structure, translated to Arabic */
  },
  "zh": {
    /* same structure, translated to Chinese (Simplified) */
  },
}
```

### Single-Duration Format (no `durationOptions`)

Use when the package has a fixed duration.

```jsonc
{
  "id": {
    "title": "Open Trip Komodo 3 Hari 2 Malam",
    "collectionTitle": "Sailing Open Trip",
    "category": "Paket Open Trip Labuan Bajo",
    "duration": "3 Hari 2 Malam",                   // single string instead of array
    "summary": "...",
    "highlights": [...],
    "itinerary": [                                   // flat array, NOT an object
      "Day 1 - Penjemputan dari hotel pukul 10.00",
      "Day 1 - Trekking di Pulau Kelor",
      "Day 2 - Snorkeling di Pink Beach",
      "Day 3 - Kembali ke Labuan Bajo"
    ],
    "includes": [...],
    "excludes": [...],
    "termsAndConditions": [...]
  },
  "en": { /* same structure */ },
  "ms": { /* same structure */ },
  "ar": { /* same structure */ },
  "zh": { /* same structure */ }
}
```

## Required Fields per Locale

| Field              | Multi-Duration | Single-Duration |
| ------------------ | -------------- | --------------- |
| title              | ✅ required    | ✅ required     |
| collectionTitle    | ✅ required    | ✅ required     |
| category           | ✅ required    | ✅ required     |
| durationOptions    | ✅ required    | ❌ omit         |
| duration           | ❌ omit        | ✅ required     |
| summary            | ✅ required    | ✅ required     |
| highlights         | ✅ required    | ✅ required     |
| itinerary          | ✅ object      | ✅ array        |
| includes           | ✅ required    | ✅ required     |
| excludes           | ✅ required    | ✅ required     |
| additionalServices | optional       | optional        |
| dontForgetToBring  | optional       | optional        |
| termsAndConditions | optional       | optional        |

## Itinerary Format Rules

**Each activity string must start with "Day N - "** (or localized equivalent), where N is the day number. This applies to BOTH formats.

Multi-duration example:

```json
"itinerary": {
  "1D": ["Day 1 - Pickup from hotel", "Day 1 - Welcome drink"],
  "2D1N": ["Day 1 - Pickup", "Day 1 - Lunch", "Day 2 - Breakfast", "Day 2 - Return"]
}
```

Single-duration example:

```json
"itinerary": [
  "Day 1 - Pickup from hotel at 10:00",
  "Day 1 - Snorkeling at Pink Beach",
  "Day 2 - Breakfast on board",
  "Day 2 - Return to harbor"
]
```

## Locale Translations

For `ms`, `ar`, `zh` locales, translate the day label:

- **ms**: use "Hari 1", "Hari 2", etc.
- **ar**: use "اليوم الأول", "اليوم الثاني", etc.
- **zh**: use "第1天", "第2天", etc.

## Known collectionTitle Values (must match exactly)

| Value                         | Used for                       |
| ----------------------------- | ------------------------------ |
| `Sailing Deluxe Private Trip` | Boat packages (id/en)          |
| `Sailing Private Trip`        | Boat packages (ms/ar/zh)       |
| `Private Trip Deluxe`         | Alternative boat packages (en) |
| `Paket 1 Hari`                | 1-day packages                 |
| `Paket 2 Hari 1 Malam`        | 2D1N packages                  |
| `Paket 3 Hari 2 Malam`        | 3D2N packages                  |
| `Paket 4 Hari 3 Malam`        | 4D3N packages                  |
| `Open Trip`                   | Open trip packages             |

## Known collectionSlug Values (must match exactly)

| Value                         | Used for            |
| ----------------------------- | ------------------- |
| `sailing-deluxe-private-trip` | Deluxe sailing      |
| `sailing-private-trip`        | Standard sailing    |
| `private-trip-deluxe`         | Alternative sailing |
| `1-hari`                      | 1-day packages      |
| `2-hari-1-malam`              | 2D1N packages       |
| `3-hari-2-malam`              | 3D2N packages       |
| `4-hari-3-malam`              | 4D3N packages       |
| `open-trip`                   | Open trips          |
