import { HERO, DESTINATIONS, GALLERY } from "@/assets/images";

import type { TourPackage } from "@/lib/content/tourPackages/types";

export const labuanBajoPackages: TourPackage[] = [
  {
    slug: "paket-1-hari-full-labuan-bajo",
    title: "Pakej 1 Hari Penuh Labuan Bajo",
    region: "labuan-bajo",

    collectionSlug: "1-hari",
    collectionTitle: "1 Day Package",

    category: "Pakej Pelancongan Labuan Bajo",
    duration: "1 Hari",

    images: [HERO.lombok, DESTINATIONS.sumbawa, GALLERY.tourSnorkeling],

    summary:
      "A one-day speedboat tour to the main destinations of Komodo National Park.",

    highlights: ["Pulau Padar", "Pantai Pink", "Pulau Komodo", "Manta Point"],

    itinerary: ["Padar", "Pantai Pink", "Komodo", "Manta Point"],

    includes: ["Bot laju", "Guide lokal", "Snorkeling"],

    excludes: ["Tiket Taman Nasional Komodo", "Perbelanjaan peribadi"],
  },

  {
    slug: "overnight-komodo-adventure",
    title: "Pengembaraan Komodo Semalaman",
    region: "labuan-bajo",

    collectionSlug: "paket-2-hari-1-malam",
    collectionTitle: "2 Days 1 Night Package",

    category: "Pakej Pelancongan Labuan Bajo",
    duration: "2 Hari 1 Malam",

    images: [HERO.lombok, DESTINATIONS.sumbawa, GALLERY.tourSnorkeling],

    summary: "A short liveaboard experience with overnight stay on the boat.",

    highlights: ["Liveaboard", "Padar", "Pantai Pink"],

    itinerary: [
      "Hari 1 - Kelor.",
      "Hari 1 - Kalong.",
      "Hari 2 - Padar.",
      "Hari 2 - Komodo.",
    ],

    includes: ["Kabin kapal", "Makan", "Pemandu pelancong"],

    excludes: ["Tiket Komodo", "Perbelanjaan peribadi"],
  },

  {
    slug: "sailing-komodo-3d2n",
    title: "Sailing Komodo 3 Hari 2 Malam",
    region: "labuan-bajo",

    collectionSlug: "paket-3-hari-2-malam",
    collectionTitle: "3 Days 2 Nights Package",

    category: "Pakej Pelancongan Labuan Bajo",
    duration: "3 Hari 2 Malam",

    images: [HERO.lombok, DESTINATIONS.sumbawa, GALLERY.tourSnorkeling],

    summary: "The most popular sailing program in the Komodo region.",

    highlights: ["Padar", "Pantai Pink", "Komodo", "Manta Point"],

    itinerary: [
      "Hari 1 - Kelor.",
      "Hari 2 - Padar.",
      "Hari 2 - Komodo.",
      "Hari 3 - Kanawa.",
    ],

    includes: ["Kabin kapal", "Makan", "Pemandu pelancong"],

    excludes: ["Tiket Komodo", "Perbelanjaan peribadi"],
  },
];
