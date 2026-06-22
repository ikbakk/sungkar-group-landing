# AI Prompt: Extract Tour Package Data from PDF

You are given a PDF brochure for a tour package. Extract all data and output exactly **two JSON files** following the structure below.

There are two template types:

- **Boat template** — for sailing/phinisi packages with boat specs, cabins, multi-duration
- **Land tour template** — for regular tour packages with a single fixed duration

---

## FILE 1: main.json (shared data — same for all languages)

### Boat Template (sailing packages only)

```json
{
  "slug": "kebab-case-url-slug",
  "region": "labuan-bajo",
  "featured": false,
  "collectionSlug": "sailing-deluxe-private-trip",
  "images": [
    "hero/{slug}.webp",
    "gallery/{slug}-exterior.webp",
    "gallery/{slug}-interior.webp",
    "gallery/{slug}-cabin.webp",
    "gallery/{slug}-sundeck.webp"
  ],
  "boatName": "Boat Name",
  "boatType": "Deluxe Phinisi",
  "boatCapacity": 16,
  "boatSpecs": [
    { "label": "Panjang Kapal", "value": "27m" },
    { "label": "Lebar Kapal", "value": "5.5m" },
    { "label": "Kecepatan Jelajah", "value": "7-10 Knot" },
    { "label": "Kapasitas Bahan Bakar", "value": "3000 Liter" },
    { "label": "Kapasitas Air Tawar", "value": "5000 Liter" },
    { "label": "Mesin", "value": "Yanmar 6 Cylinder Ty160" },
    { "label": "Generator", "value": "30KVA, Emergency 7500watt" },
    { "label": "Navigasi", "value": "AIS, Radar, Kompas, GPS, Peta" },
    { "label": "Radio", "value": "SBB Radio, VHF Radio" },
    {
      "label": "Peralatan Keselamatan",
      "value": "Rakit Penyelamat, Jaket Pelampung, Pelampung Cincin, Alat Pemadam Kebakaran, Kotak P3K"
    },
    {
      "label": "Speedboat",
      "value": "6 Meter Fiberglass dengan Mesin Yamaha 15 HP"
    },
    { "label": "Kabin", "value": "6 Kabin (AC, Kamar Mandi Pribadi)" }
  ],
  "cabins": [
    {
      "name": "Superior Cabin 1 (Lower Deck)",
      "description": "1x Queen Bed, Kamar Mandi Pribadi, AC, Kapasitas 2 Orang.",
      "capacity": "2",
      "price": "Harga tergantung paket (lihat daftar harga)",
      "images": ["gallery/{slug}-superior-cabin.webp"]
    }
  ],
  "priceList": {
    "fullDay": {
      "1-8": 39000000,
      "9-10": 45000000,
      "addPerPax": 1000000,
      "maxPax": 25
    },
    "2D1N": {
      "1-8": 43000000,
      "9-10": 45000000,
      "addPerPax": 1500000,
      "maxPax": 25
    },
    "3D2N": {
      "1-8": 52000000,
      "9-10": 54000000,
      "addPerPax": 2000000,
      "maxPax": 25
    },
    "4D3N": {
      "1-8": 62000000,
      "9-10": 65000000,
      "addPerPax": 2500000,
      "maxPax": 25
    }
  }
}
```

### Land Tour Template (regular packages)

Land tour packages don't have boat specs, cabins, or priceList. Only these shared fields are needed:

```json
{
  "slug": "kebab-case-url-slug",
  "region": "lombok",
  "featured": false,
  "collectionSlug": "3-hari-2-malam",
  "images": [
    "hero/{slug}.webp",
    "gallery/{slug}-1.webp",
    "gallery/{slug}-2.webp"
  ]
}
```

### Rules for main.json

- `region` must be one of: `"lombok"`, `"sumbawa"`, `"labuan-bajo"`
- `collectionSlug` must match one of the known values (see table below)
- `featured` is omitted when false, present as `true` when the package is featured
- `boatName`, `boatType`, `boatCapacity`, `boatSpecs`, `cabins`, `priceList` are for boat/sailing packages only — omit for land tours
- `cabins[].price` defaults to `"Harga tergantung paket (lihat daftar harga)"` in Indonesian
- `cabins[].description` and `cabins[].images` are required for each cabin
- `images[]` are placeholder paths — use `{slug}` pattern
- If the boat has a jacuzzi, add it to specs or highlights

---

## FILE 2: locales.json (ALL 5 languages required)

Every locale MUST include all the fields shown below for its format type. Translate content appropriately.

### Format A: Multi-Duration (has `durationOptions`)

Use when the package offers multiple trip lengths (e.g. 1D, 2D1N, 3D2N, 4D3N). Used by sailing/boat packages.

**Indonesian (`id`):**

```json
{
  "id": {
    "title": "BoatName - Phinisi Deluxe (Private Charter)",
    "collectionTitle": "Sailing Deluxe Private Trip",
    "category": "Paket Sailing Labuan Bajo (Private)",
    "durationOptions": [
      "1 Hari (Full Day)",
      "2 Hari 1 Malam",
      "3 Hari 2 Malam",
      "4 Hari 3 Malam"
    ],
    "summary": "Nikmati pengalaman berlayar pribadi dengan Kapal Phinisi {BoatName} kelas Deluxe...",
    "highlights": [
      "Kapal Phinisi Deluxe dengan {N} kabin AC",
      "Area luar yang luas untuk bersantai",
      "Peralatan snorkeling dan jaket pelampung gratis",
      "Makan 3x sehari (sarapan, makan siang, makan malam)",
      "Kru kapal dan koki berpengalaman",
      "Tender boat untuk akses ke pantai",
      "Sistem suara Bluetooth",
      "Kursi malas dan bean bag",
      "Air mineral, kopi, teh, dan snack gratis"
    ],
    "itinerary": {
      "1D": [
        "Day 1 - Penjemputan dari hotel pukul 05.00 WITA",
        "Day 1 - Welcome drink",
        "..."
      ],
      "2D1N": [
        "Day 1 - Penjemputan dari hotel/bandara pukul 10.00 WITA",
        "Day 1 - ...",
        "Day 2 - Tiba di Labuan Bajo pukul 18.00-19.00 WITA"
      ],
      "3D2N": ["Day 1 - ...", "Day 2 - ...", "Day 3 - ..."],
      "4D3N": ["Day 1 - ...", "Day 2 - ...", "Day 3 - ...", "Day 4 - ..."]
    },
    "includes": [
      "Penjemputan dan pengantaran (di dalam dan luar pelabuhan)",
      "Kapal Phinisi Deluxe dengan AC",
      "Makan 3x sehari (sarapan, makan siang, makan malam) selama perjalanan",
      "Koki & kru kapal",
      "Sundeck dan kursi malas",
      "Tender boat",
      "Peralatan snorkeling",
      "Air mineral selama perjalanan",
      "Snack, kopi & teh selama perjalanan",
      "Jaket pelampung"
    ],
    "excludes": [
      "Pengeluaran pribadi",
      "Tiket pesawat ke Labuan Bajo",
      "Akomodasi hotel di Labuan Bajo",
      "Asuransi perjalanan",
      "Tiket masuk Taman Nasional Komodo",
      "Tip untuk guide & kru kapal"
    ],
    "additionalServices": [
      "Tiket masuk Taman Nasional Komodo untuk WNI: Rp 250.000/orang",
      "Guide lokal: Rp 500.000/hari"
    ],
    "termsAndConditions": [
      "Bayi (di bawah 2 tahun): Gratis.",
      "Balita (2-5 tahun): Bayar 50% dari harga paket.",
      "{BOAT_NAME} berhak mengenakan biaya tambahan bahan bakar..."
    ],
    "dontForgetToBring": [
      "Sandals/sepatu untuk trekking",
      "Tas ransel",
      "Sunblock"
    ]
  }
}
```

**Other locales for multi-duration:**

- **English (`en`)**: `durationOptions` → `["1 Day (Full Day)", "2 Days 1 Night", ...]`, `category` → `"Labuan Bajo Sailing Packages (Private)"`, itinerary day labels → `"Day 1"`, `"Day 2"`, etc.
- **Malay (`ms`)**: `category` → `"Pakej Sailing Labuan Bajo (Persendirian)"`, day labels → `"Hari 1"`, `"Hari 2"`, etc.
- **Arabic (`ar`)**: `category` → `"باكيجات الإبحار لابوان باجو (خاص)"`, day labels → `"اليوم الأول"`, `"اليوم الثاني"`, etc.
- **Chinese (`zh`)**: `category` → `"拉布安巴焦帆船套餐（私人）"`, day labels → `"第1天"`, `"第2天"`, etc.

### Format B: Single Duration (plain `duration` string)

Use when the package has a single fixed duration. This is the format for most land tour packages.

```json
{
  "id": {
    "title": "Paket Wisata 3 Hari 2 Malam Lombok",
    "collectionTitle": "Paket 3 Hari 2 Malam",
    "category": "Paket Liburan Lombok",
    "duration": "3 Hari 2 Malam",
    "summary": "Jelajahi keindahan Lombok dalam paket 3 hari 2 malam...",
    "highlights": ["Kunjungan ke Pantai Pink", "Snorkeling di Gili Trawangan"],
    "itinerary": [
      "Day 1 - Penjemputan dari Bandara Lombok",
      "Day 1 - Kunjungan ke Desa Suku Sasak",
      "Day 2 - Snorkeling di Gili Trawangan",
      "Day 3 - Kembali ke Bandara"
    ],
    "includes": [
      "Penjemputan dari bandara/hotel",
      "Mobil ber-AC",
      "Guide lokal"
    ],
    "excludes": ["Tiket pesawat", "Penginapan", "Makanan dan minuman pribadi"],
    "termsAndConditions": [
      "Pembatalan 7 hari sebelum perjalanan: refund 100%",
      "Pembatalan kurang dari 7 hari: no refund"
    ]
  },
  "en": {
    /* same structure, translated */
  },
  "ms": {
    /* same structure, translated */
  },
  "ar": {
    /* same structure, translated */
  },
  "zh": {
    /* same structure, translated */
  }
}
```

---

## Required Fields per Locale

| Field              | Multi-Duration                      | Single-Duration |
| ------------------ | ----------------------------------- | --------------- |
| title              | ✅ required                         | ✅ required     |
| collectionTitle    | ✅ required                         | ✅ required     |
| category           | ✅ required                         | ✅ required     |
| durationOptions    | ✅ required                         | ❌ omit         |
| duration           | ❌ omit                             | ✅ required     |
| summary            | ✅ required                         | ✅ required     |
| highlights         | ✅ required                         | ✅ required     |
| itinerary          | ✅ object (keys: 1D/2D1N/3D2N/4D3N) | ✅ array (flat) |
| includes           | ✅ required                         | ✅ required     |
| excludes           | ✅ required                         | ✅ required     |
| additionalServices | optional                            | optional        |
| dontForgetToBring  | optional                            | optional        |
| termsAndConditions | optional                            | optional        |

## Known collectionTitle Values (must match exactly)

| collectionTitle               | Used for                       |
| ----------------------------- | ------------------------------ |
| `Sailing Deluxe Private Trip` | Boat packages (id/en)          |
| `Sailing Private Trip`        | Boat packages (ms/ar/zh)       |
| `Private Trip Deluxe`         | Alternative boat packages (en) |
| `Paket 1 Hari`                | 1-day packages                 |
| `Paket 2 Hari 1 Malam`        | 2D1N packages                  |
| `Paket 3 Hari 2 Malam`        | 3D2N packages                  |
| `Paket 4 Hari 3 Malam`        | 4D3N packages                  |
| `Open Trip`                   | Open trip packages             |

## Known collectionSlug Values

| collectionSlug                | Used for            |
| ----------------------------- | ------------------- |
| `sailing-deluxe-private-trip` | Deluxe sailing      |
| `sailing-private-trip`        | Standard sailing    |
| `private-trip-deluxe`         | Alternative sailing |
| `1-hari`                      | 1-day packages      |
| `2-hari-1-malam`              | 2D1N packages       |
| `3-hari-2-malam`              | 3D2N packages       |
| `4-hari-3-malam`              | 4D3N packages       |
| `open-trip`                   | Open trips          |

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

## Locale Translations for Day Labels

| Locale | Day label                                                             |
| ------ | --------------------------------------------------------------------- |
| id, en | `"Day 1"`, `"Day 2"`, etc.                                            |
| ms     | `"Hari 1"`, `"Hari 2"`, etc.                                          |
| ar     | `"اليوم الأول"`, `"اليوم الثاني"`, `"اليوم الثالث"`, `"اليوم الرابع"` |
| zh     | `"第1天"`, `"第2天"`, `"第3天"`, `"第4天"`                            |

## Critical Rules

1. **ALL 5 locales are required**: `id`, `en`, `ms`, `ar`, `zh` — every locale must have the full set of fields for its format type.
2. **`additionalServices`**, **`dontForgetToBring`**, and **`termsAndConditions`** are optional — include only if the PDF has that content.
3. **Boat packages** use Format A (multi-duration with `durationOptions` + object itinerary). **Land tour packages** use Format B (single `duration` string + flat array itinerary).
4. **`boatName`**, **`boatType`**, **`boatCapacity`**, **`boatSpecs`**, **`cabins`**, **`priceList`** are boat-only fields. Omit entirely for land tour packages.
5. **`featured`** in main.json should be `true` when the package is featured (promoted). Omit the field entirely when not featured.
6. **`collectionSlug`** in main.json and **`collectionTitle`** in locales.json must match one of the known values in the tables above.
7. **`region`** must be one of: `"lombok"`, `"sumbawa"`, `"labuan-bajo"`.
8. **Image paths** in `main.json` follow the pattern `hero/{slug}.webp` and `gallery/{slug}-{feature}.webp`.

## Output Format

Provide exactly two code blocks:

````json
// main.json
{ ... }

```json
// locales.json
{ ... }
````

Do NOT include any fields beyond what is shown. Do NOT add comments in the JSON. Ensure all JSON is valid.
