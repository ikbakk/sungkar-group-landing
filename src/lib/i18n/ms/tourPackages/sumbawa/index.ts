import { GALLERY, DESTINATIONS } from "@/assets/images";

import type { TourPackage } from "@/lib/content/tourPackages/types";

export const sumbawaPackages: TourPackage[] = [
  {
    slug: "open-trip-whale-shark-sumbawa",
    title: "Open Trip Whale Shark Sumbawa",
    region: "sumbawa",

    collectionSlug: "open-trip",
    collectionTitle: "Open Trip",

    category: "Sumbawa Open Trip",
    duration: "2 Hari 1 Malam",
    featured: true,

    images: [GALLERY.whaleshark, DESTINATIONS.sumbawa],

    summary:
      "An open trip to Teluk Saleh to enjoy the experience of swimming alongside whale sharks.",

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

    includes: ["Transportasi lokal", "Trip bot", "Guide lokal"],

    excludes: ["Tiket menuju Sumbawa", "Perbelanjaan peribadi"],
  },
];
