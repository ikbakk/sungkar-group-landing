import WhaleShark from "@/assets/images/whaleshark.webp";

import type { TourPackage } from "../types";

export const sumbawaPackages: TourPackage[] = [
  {
    slug: "open-trip-whale-shark-sumbawa",
    title: "Open Trip Whale Shark Sumbawa",
    region: "sumbawa",

    collectionSlug: "open-trip",
    collectionTitle: "Open Trip",

    category: "Open Trip Sumbawa",
    duration: "2 Hari 1 Malam",
    featured: true,

    images: [WhaleShark],

    summary:
      "Open trip menuju Teluk Saleh untuk menikmati pengalaman berenang bersama whale shark.",

    highlights: [
      "Whale Shark",
      "Teluk Saleh",
      "Open Trip",
      "Sunrise Experience",
    ],

    itinerary: [
      "Hari 1 - Kedatangan peserta.",
      "Hari 1 - Menuju Teluk Saleh.",
      "Hari 2 - Whale shark experience.",
      "Hari 2 - Kembali.",
    ],

    includes: ["Transportasi lokal", "Boat trip", "Guide lokal"],

    excludes: ["Tiket menuju Sumbawa", "Pengeluaran pribadi"],
  },
];
