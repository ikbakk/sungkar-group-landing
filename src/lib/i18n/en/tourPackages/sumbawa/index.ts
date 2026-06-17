import { GALLERY, DESTINATIONS } from "@/assets/images";

import type { TourPackage } from "@/lib/content/tourPackages/types";

export const sumbawaPackages: TourPackage[] = [
  {
    slug: "open-trip-whale-shark-sumbawa",
    title: "Open Trip Whale Shark Sumbawa",
    region: "sumbawa",

    collectionSlug: "open-trip",
    collectionTitle: "Open Trip",

    category: "Open Trip Sumbawa",
    duration: "2 Days 1 Night",
    featured: true,

    images: [GALLERY.whaleshark, DESTINATIONS.sumbawa],

    summary:
      "Open trip to Teluk Saleh for an unforgettable experience swimming with whale sharks.",

    highlights: [
      "Whale Shark",
      "Teluk Saleh",
      "Open Trip",
      "Sunrise Experience",
    ],

    itinerary: [
      "Day 1 - Participant arrival.",
      "Day 1 - Proceed to Teluk Saleh.",
      "Day 2 - Whale shark experience.",
      "Day 2 - Return.",
    ],

    includes: ["Local transportation", "Boat trip", "Local guide"],

    excludes: ["Tickets to Sumbawa", "Personal expenses"],
  },
];