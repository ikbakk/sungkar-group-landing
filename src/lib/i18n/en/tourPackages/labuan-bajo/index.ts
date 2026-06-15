import HeroLombok from "@/assets/images/hero-lombok.webp";
import DestinationSumbawa from "@/assets/images/destination-sumbawa.webp";
import TourSnorkeling from "@/assets/images/tour-snorkeling.webp";

import type { TourPackage } from "../../../content/tourPackages/types";

export const labuanBajoPackages: TourPackage[] = [
  {
    slug: "paket-1-hari-full-labuan-bajo",
    title: "1 Day Full Labuan Bajo Package",
    region: "labuan-bajo",

    collectionSlug: "1-hari",
    collectionTitle: "1 Day Package",

    category: "Labuan Bajo Tour Packages",
    duration: "1 Day",

    images: [HeroLombok, DestinationSumbawa, TourSnorkeling],

    summary:
      "A one-day speedboat tour to the main destinations of Komodo National Park.",

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
    collectionTitle: "2 Days 1 Night Package",

    category: "Labuan Bajo Tour Packages",
    duration: "2 Days 1 Night",

    images: [HeroLombok, DestinationSumbawa, TourSnorkeling],

    summary: "A short liveaboard experience with overnight stay on the boat.",

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
    title: "Sailing Komodo 3 Days 2 Nights",
    region: "labuan-bajo",

    collectionSlug: "paket-3-hari-2-malam",
    collectionTitle: "3 Days 2 Nights Package",

    category: "Labuan Bajo Tour Packages",
    duration: "3 Days 2 Nights",

    images: [HeroLombok, DestinationSumbawa, TourSnorkeling],

    summary: "The most popular sailing program in the Komodo region.",

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
