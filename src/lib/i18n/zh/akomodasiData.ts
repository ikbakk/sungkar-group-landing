import type { ImageMetadata } from "astro";

export type Accommodation = {
  slug: string;
  name: string;
  region: "lombok" | "sumbawa" | "labuan-bajo";
  perks: string[];
  regionalHighlights: string[];
  description: string;
  image: ImageMetadata;
};

import HeroLombok from "@/assets/images/hero-lombok.webp";

export const accommodations: Accommodation[] = [
  {
    slug: "lombok-beachfront",
    name: "Lombok Beachfront Hotels",
    region: "lombok",
    perks: [
      "Pantai Pribadi",
      "Water Sports",
      "Infinity Pool",
      "Spa & Wellness",
    ],
    regionalHighlights: [
      "Akses langsung ke Pantai Kuta Mandalika",
      "Dekat dengan Bukit Merese untuk sunset",
      "Aktivitas snorkeling di area terdekat",
    ],
    description:
      "Beachfront hotels with exotic sea views and exclusive access to Lombok's best beach destinations.",
    image: HeroLombok,
  },
  {
    slug: "lombok-mountain-retreat",
    name: "Lombok Mountain Retreat",
    region: "lombok",
    perks: [
      "Pemandangan Gunung",
      "Trekking Guide",
      "Farm to Table",
      "Tradisional",
    ],
    regionalHighlights: [
      "Lokasi di Tetebatu dengan view pegunungan",
      "Dekat dengan sawah terasering",
      "Air terjun Jukung terdekat",
    ],
    description:
      "Mountain accommodations offering an authentic Lombok experience with local life and natural surroundings.",
    image: HeroLombok,
  },
  {
    slug: "lombok-gili-gateway",
    name: "Lombok Gili Gateway",
    region: "lombok",
    perks: [
      "Akses Gili Islands",
      "Boat Trips",
      "Diving Center",
      "Island Tours",
    ],
    regionalHighlights: [
      "Pelabuhan cepat ke Gili Trawangan",
      "Island hopping packages tersedia",
      "Dive site terdekat dengan reef yang indah",
    ],
    description:
      "Strategic accommodations for easy access to the Gili Islands with island hopping packages and marine activities.",
    image: HeroLombok,
  },

  {
    slug: "labuan-bajo-komodo-base",
    name: "Labuan Bajo Komodo Base",
    region: "labuan-bajo",
    perks: [
      "Komodo Access",
      "Trekking Guide",
      "Park Services",
      "Photography Tours",
    ],
    regionalHighlights: [
      "Gate masuk Taman Nasional Komodo",
      "Ranger briefing dan safety gear",
      "Pulau Komodo dragon tracking",
    ],
    description:
      "Main basecamp for Komodo adventures with full access to the National Park and experienced guides.",
    image: HeroLombok,
  },
  {
    slug: "labuan-bajo-liveaboard-hub",
    name: "Labuan Bajo Liveaboard Hub",
    region: "labuan-bajo",
    perks: [
      "Liveaboard Boats",
      "Diving Equipment",
      "Sailing Trips",
      "Crew Services",
    ],
    regionalHighlights: [
      "Armada kapal paling lengkap",
      "Paket sailing multi-hari tersedia",
      "Manta Point diving di puncaknya",
    ],
    description:
      "Labuan Bajo's sailing hub with the best collection of liveaboards for an unforgettable Komodo adventure.",
    image: HeroLombok,
  },
  {
    slug: "labuan-bajo-beach-resort",
    name: "Labuan Bajo Beach Resort",
    region: "labuan-bajo",
    perks: ["Pantai Pribadi", "Infinity Pool", "Fine Dining", "Spa Luxury"],
    regionalHighlights: [
      "Pantai eksotis Labuan Bajo",
      "Sunset view di teluk yang indah",
      "Akses day trip ke Pink Beach",
    ],
    description:
      "Luxury beachfront resort for a comfortable stay with easy access to all Komodo tour destinations.",
    image: HeroLombok,
  },
];
