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
      "Pantai Persendirian",
      "Aktiviti Air",
      "Infinity Pool",
      "Spa & Wellness",
    ],
    regionalHighlights: [
      "Akses terus ke Pantai Kuta Mandalika",
      "Dekat dengan Bukit Merese untuk senja",
      "Aktiviti snorkeling di kawasan terdekat",
    ],
    description:
      "Hotel tepi pantai dengan pemandangan laut eksotik dan akses eksklusif ke destinasi pantai terbaik Lombok.",
    image: HeroLombok,
  },
  {
    slug: "lombok-mountain-retreat",
    name: "Lombok Mountain Retreat",
    region: "lombok",
    perks: [
      "Pemandangan Gunung",
      "Pemandu Mendaki",
      "Farm to Table",
      "Tradisional",
    ],
    regionalHighlights: [
      "Lokasi di Tetebatu dengan pemandangan pegunungan",
      "Dekat dengan sawah terasering",
      "Air terjun Jukung terdekat",
    ],
    description:
      "Penginapan pegunungan yang menawarkan pengalaman Lombok autentik dengan kehidupan tempatan dan persekitaran semula jadi.",
    image: HeroLombok,
  },
  {
    slug: "lombok-gili-gateway",
    name: "Lombok Gili Gateway",
    region: "lombok",
    perks: [
      "Akses Kepulauan Gili",
      "Perjalanan Bot",
      "Pusat Mendaki",
      "Pelancongan Pulau",
    ],
    regionalHighlights: [
      "Jetty cepat ke Gili Trawangan",
      "Pakej island hopping tersedia",
      "Tapak mendaki terdekat dengan terumbu indah",
    ],
    description:
      "Penginapan strategik untuk akses mudah ke Kepulauan Gili dengan pakej island hopping dan aktiviti marin.",
    image: HeroLombok,
  },

  {
    slug: "labuan-bajo-komodo-base",
    name: "Labuan Bajo Komodo Base",
    region: "labuan-bajo",
    perks: [
      "Akses Komodo",
      "Pemandu Mendaki",
      "Perkhidmatan Taman",
      "Pelancongan Fotografi",
    ],
    regionalHighlights: [
      "Gerbang masuk Taman Negara Komodo",
      "Briefing ranger dan kelengkapan keselamatan",
      "Jejak naga Komodo di Pulau Komodo",
    ],
    description:
      "Basecamp utama untuk petualangan Komodo dengan akses penuh ke Taman Negara dan pemandu berpengalaman.",
    image: HeroLombok,
  },
  {
    slug: "labuan-bajo-liveaboard-hub",
    name: "Labuan Bajo Liveaboard Hub",
    region: "labuan-bajo",
    perks: [
      "Kapal Liveaboard",
      "Peralatan Mendaki",
      "Perjalanan Layar",
      "Perkhidmatan Kru",
    ],
    regionalHighlights: [
      "Armada kapal paling lengkap",
      "Pakej sailing berbilang hari tersedia",
      "Mendaki Manta Point di puncaknya",
    ],
    description:
      "Hab pelayaran Labuan Bajo dengan koleksi liveaboard terbaik untuk petualangan Komodo yang tak terlupakan.",
    image: HeroLombok,
  },
  {
    slug: "labuan-bajo-beach-resort",
    name: "Labuan Bajo Beach Resort",
    region: "labuan-bajo",
    perks: ["Pantai Persendirian", "Infinity Pool", "Fine Dining", "Spa Luxury"],
    regionalHighlights: [
      "Pantai eksotik Labuan Bajo",
      "Pemandangan senja di teluk yang indah",
      "Akses day trip ke Pink Beach",
    ],
    description:
      "Resort tepi pantai mewah untuk menginap selesa dengan akses mudah ke semua destinasi pelancongan Komodo.",
    image: HeroLombok,
  },
];
