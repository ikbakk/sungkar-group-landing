import WhaleShark from "@/assets/images/whaleshark.webp";
import DestinationSumbawa from "@/assets/images/destination-sumbawa.webp";

import type { TourPackage } from "../../../content/tourPackages/types";

export const sumbawaPackages: TourPackage[] = [
  {
    slug: "open-trip-whale-shark-sumbawa",
    title: "Open Trip Whale Shark Sumbawa",
    region: "sumbawa",

    collectionSlug: "open-trip",
    collectionTitle: "Open Trip",

    category: "Sumbawa Open Trip",
    duration: "2 Days 1 Night",
    featured: true,

    images: [WhaleShark, DestinationSumbawa],

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

    includes: ["Transportasi lokal", "Boat trip", "Guide lokal"],

    excludes: ["Tiket menuju Sumbawa", "Pengeluaran pribadi"],
  },
];
