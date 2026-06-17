import { HERO, DESTINATIONS, GALLERY } from "@/assets/images";

import type { TourPackage } from "@/lib/content/tourPackages/types";

export const labuanBajoPackages: TourPackage[] = [
  {
    slug: "paket-1-hari-full-labuan-bajo",
    title: "1 Day Full Labuan Bajo Package",
    region: "labuan-bajo",

    collectionSlug: "1-hari",
    collectionTitle: "Paket 1 Hari",

    category: "Labuan Bajo Tour Packages",
    duration: "1 Day",

    images: [HERO.lombok, DESTINATIONS.sumbawa, GALLERY.tourSnorkeling],

    summary:
      "One-day speedboat tour to the main destinations of Komodo National Park.",

    highlights: ["Padar Island", "Pink Beach", "Komodo Island", "Manta Point"],

    itinerary: [
      "Day 1 - Padar Island.",
      "Day 1 - Pink Beach.",
      "Day 1 - Komodo Island.",
      "Day 1 - Manta Point.",
    ],

    includes: ["Speedboat", "Local guide", "Snorkeling"],

    excludes: ["Komodo National Park entry ticket", "Personal expenses"],
  },

  {
    slug: "overnight-komodo-adventure",
    title: "Overnight Komodo Adventure",
    region: "labuan-bajo",

    collectionSlug: "paket-2-hari-1-malam",
    collectionTitle: "Paket 2 Hari 1 Malam",

    category: "Labuan Bajo Tour Packages",
    duration: "2 Days 1 Night",

    images: [HERO.lombok, DESTINATIONS.sumbawa, GALLERY.tourSnorkeling],

    summary: "Short liveaboard experience with overnight stay on the boat.",

    highlights: ["Liveaboard", "Padar Island", "Pink Beach"],

    itinerary: [
      "Day 1 - Kelor Island.",
      "Day 1 - Kalong Island.",
      "Day 2 - Padar Island.",
      "Day 2 - Komodo Island.",
    ],

    includes: ["Cabin on boat", "Meals", "Guide"],

    excludes: ["Komodo entry ticket", "Personal expenses"],
  },

  {
    slug: "sailing-komodo-3d2n",
    title: "Sailing Komodo 3 Days 2 Nights",
    region: "labuan-bajo",

    collectionSlug: "paket-3-hari-2-malam",
    collectionTitle: "Paket 3 Hari 2 Malam",

    category: "Labuan Bajo Tour Packages",
    duration: "3 Days 2 Nights",

    images: [HERO.lombok, DESTINATIONS.sumbawa, GALLERY.tourSnorkeling],

    summary: "The most popular sailing program in the Komodo region.",

    highlights: ["Padar Island", "Pink Beach", "Komodo Island", "Manta Point"],

    itinerary: [
      "Day 1 - Kelor Island.",
      "Day 2 - Padar Island.",
      "Day 2 - Komodo Island.",
      "Day 3 - Kanawa Island.",
    ],

    includes: ["Cabin on boat", "Meals", "Guide"],

    excludes: ["Komodo entry ticket", "Personal expenses"],
  },
];