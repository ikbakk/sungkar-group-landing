import type { ImageSource } from "@/lib/images";

export type Accommodation = {
  slug: string;
  name: string;
  region: "lombok" | "sumbawa" | "labuan-bajo";
  perks: string[];
  regionalHighlights: string[];
  description: string;
  image: ImageSource;
};

import HeroLombok from "@/assets/images/hero-lombok.webp";

export const accommodations: Accommodation[] = [
  // =========================
  // LOMBOK
  // =========================
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
      "Hotel-hotel tepi pantai dengan pemandangan laut eksotis dan akses eksklusif ke destinasi pantai terbaik Lombok.",
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
      "Penginapan pegunungan yang menawarkan pengalaman autentik Lombok dengan kehidupan lokal dan alam yang asri.",
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
      "Penginapan strategis untuk akses mudah ke Gili Islands dengan paket wisata island hopping dan aktivitas laut.",
    image: HeroLombok,
  },

  // =========================
  // LABUAN BAJO
  // =========================
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
      "Basecamp utama untuk petualangan Komodo dengan akses penuh ke Taman Nasional dan pemandu berpengalaman.",
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
      "Pusat pelayaran Labuan Bajo dengan koleksi liveaboard terbaik untuk petualangan Komodo yang tak terlupakan.",
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
      "Resort mewah tepi pantai untuk istirahat nyaman dengan akses mudah ke semua destinasi wisata Komodo.",
    image: HeroLombok,
  },
];
