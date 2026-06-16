import { HERO, DESTINATIONS, GALLERY } from "@/assets/images";

import type { TourPackage } from "../types";

export const labuanBajoPackages: TourPackage[] = [
  {
    slug: "paket-1-hari-full-labuan-bajo",
    title: "Paket 1 Hari Full Labuan Bajo",
    region: "labuan-bajo",

    collectionSlug: "1-hari",
    collectionTitle: "Paket 1 Hari",

    category: "Paket Wisata Labuan Bajo",
    duration: "1 Hari",

    images: [HERO.lombok, DESTINATIONS.sumbawa, GALLERY.tourSnorkeling],

    summary:
      "Wisata satu hari menggunakan speedboat ke destinasi utama Taman Nasional Komodo.",

    highlights: ["Pulau Padar", "Pink Beach", "Pulau Komodo", "Manta Point"],

    itinerary: ["Padar", "Pink Beach", "Komodo", "Manta Point"],

    includes: ["Speedboat", "Guide lokal", "Snorkeling"],

    excludes: ["Tiket Taman Nasional Komodo", "Pengeluaran pribadi"],
  },

  {
    slug: "overnight-komodo-adventure",
    title: "Overnight Komodo Adventure",
    region: "labuan-bajo",

    collectionSlug: "paket-2-hari-1-malam",
    collectionTitle: "Paket 2 Hari 1 Malam",

    category: "Paket Wisata Labuan Bajo",
    duration: "2 Hari 1 Malam",

    images: [HERO.lombok, DESTINATIONS.sumbawa, GALLERY.tourSnorkeling],

    summary: "Liveaboard singkat dengan pengalaman menginap di kapal.",

    highlights: ["Liveaboard", "Padar", "Pink Beach"],

    itinerary: [
      "Hari 1 - Kelor.",
      "Hari 1 - Kalong.",
      "Hari 2 - Padar.",
      "Hari 2 - Komodo.",
    ],

    includes: ["Kabin kapal", "Makan", "Guide"],

    excludes: ["Tiket Komodo", "Pengeluaran pribadi"],
  },

  {
    slug: "sailing-komodo-3d2n",
    title: "Sailing Komodo 3 Hari 2 Malam",
    region: "labuan-bajo",

    collectionSlug: "paket-3-hari-2-malam",
    collectionTitle: "Paket 3 Hari 2 Malam",

    category: "Paket Wisata Labuan Bajo",
    duration: "3 Hari 2 Malam",

    images: [HERO.lombok, DESTINATIONS.sumbawa, GALLERY.tourSnorkeling],

    summary: "Program sailing paling populer di kawasan Komodo.",

    highlights: ["Padar", "Pink Beach", "Komodo", "Manta Point"],

    itinerary: [
      "Hari 1 - Kelor.",
      "Hari 2 - Padar.",
      "Hari 2 - Komodo.",
      "Hari 3 - Kanawa.",
    ],

    includes: ["Kabin kapal", "Makan", "Guide"],

    excludes: ["Tiket Komodo", "Pengeluaran pribadi"],
  },
];
