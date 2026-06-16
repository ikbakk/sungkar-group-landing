import type { ImageSource } from "@/lib/images";

export type Vehicle = {
  slug: string;
  name: string;
  region: "lombok" | "sumbawa" | "labuan-bajo";
  pricePerDay: string;
  seats: number;
  transmission: "Manual" | "Automatic";
  features: string[];
  bestFor: string[];
  description: string;
  imageTop: ImageSource;
  imageBottom: ImageSource;
};

import HeroLombok from "@/assets/images/hero-lombok.webp";

export const vehicles: Vehicle[] = [
  {
    slug: "toyota-avanza-lombok",
    name: "Toyota Avanza",
    region: "lombok",
    pricePerDay: "Rp 650.000",
    seats: 7,
    transmission: "Manual",
    features: [
      "Driver Profesional",
      "BBM Termasuk",
      "Air Mineral",
      "Pemakaian 12 Jam",
    ],
    bestFor: [
      "Wisata keluarga",
      "City tour Lombok",
      "Perjalanan harian",
    ],
    description:
      "Sewa Toyota Avanza Lombok dengan driver profesional. Cocok untuk wisata keluarga, perjalanan bisnis, city tour, dan transfer bandara dengan kapasitas hingga 7 penumpang.",
    imageTop: HeroLombok,
    imageBottom: HeroLombok,
  },

  {
    slug: "toyota-innova-reborn-lombok",
    name: "Toyota Innova Reborn",
    region: "lombok",
    pricePerDay: "Rp 800.000",
    seats: 7,
    transmission: "Manual",
    features: [
      "Driver Profesional",
      "BBM Termasuk",
      "Air Mineral",
      "Kabin Luas",
    ],
    bestFor: [
      "Keluarga besar",
      "Perjalanan bisnis",
      "Wisata premium",
    ],
    description:
      "Sewa Toyota Innova Reborn di Lombok dengan kabin luas dan nyaman. Ideal untuk perjalanan keluarga, rombongan kecil, maupun wisata premium di Pulau Lombok.",
    imageTop: HeroLombok,
    imageBottom: HeroLombok,
  },

  {
    slug: "toyota-innova-zenix-lombok",
    name: "Toyota Innova Zenix",
    region: "lombok",
    pricePerDay: "Rp 1.500.000",
    seats: 7,
    transmission: "Automatic",
    features: [
      "Driver Profesional",
      "BBM Termasuk",
      "Air Mineral",
      "Premium Interior",
    ],
    bestFor: [
      "VIP Travel",
      "Corporate Trip",
      "Premium Family Tour",
    ],
    description:
      "Sewa Toyota Innova Zenix Lombok dengan kenyamanan premium, interior modern, dan performa terbaik untuk perjalanan wisata maupun bisnis.",
    imageTop: HeroLombok,
    imageBottom: HeroLombok,
  },

  {
    slug: "toyota-fortuner-gr-lombok",
    name: "Toyota Fortuner GR",
    region: "lombok",
    pricePerDay: "Rp 1.500.000",
    seats: 7,
    transmission: "Automatic",
    features: [
      "SUV Premium",
      "Driver Profesional",
      "BBM Termasuk",
      "Air Mineral",
    ],
    bestFor: [
      "VIP Tour",
      "Executive Travel",
      "Premium Vacation",
    ],
    description:
      "Sewa Toyota Fortuner GR Lombok dengan tampilan mewah dan kenyamanan premium. Cocok untuk tamu VIP, perjalanan bisnis, maupun wisata eksklusif.",
    imageTop: HeroLombok,
    imageBottom: HeroLombok,
  },

  {
    slug: "mitsubishi-pajero-lombok",
    name: "Mitsubishi Pajero Sport",
    region: "lombok",
    pricePerDay: "Rp 1.500.000",
    seats: 7,
    transmission: "Automatic",
    features: [
      "SUV Premium",
      "Driver Profesional",
      "BBM Termasuk",
      "Air Mineral",
    ],
    bestFor: [
      "Luxury Travel",
      "VIP Guest",
      "Corporate Visit",
    ],
    description:
      "Sewa Mitsubishi Pajero Sport Lombok untuk perjalanan yang nyaman dan berkelas. Pilihan ideal untuk tamu VIP dan wisata premium.",
    imageTop: HeroLombok,
    imageBottom: HeroLombok,
  },

  {
    slug: "toyota-alphard-lombok",
    name: "Toyota Alphard",
    region: "lombok",
    pricePerDay: "Rp 3.500.000",
    seats: 6,
    transmission: "Automatic",
    features: [
      "Luxury MPV",
      "Captain Seat",
      "Driver Profesional",
      "Premium Experience",
    ],
    bestFor: [
      "VIP Travel",
      "Wedding",
      "Executive Transport",
    ],
    description:
      "Sewa Toyota Alphard Lombok dengan fasilitas premium dan kabin mewah. Pilihan terbaik untuk tamu VIP, pejabat, dan kebutuhan transportasi eksklusif.",
    imageTop: HeroLombok,
    imageBottom: HeroLombok,
  },

  {
    slug: "toyota-hiace-commuter-lombok",
    name: "Toyota Hiace Commuter",
    region: "lombok",
    pricePerDay: "Rp 1.000.000",
    seats: 14,
    transmission: "Manual",
    features: [
      "Kabin Luas",
      "AC",
      "Driver Profesional",
      "BBM Termasuk",
    ],
    bestFor: [
      "Family Gathering",
      "Group Tour",
      "Corporate Trip",
    ],
    description:
      "Sewa Toyota Hiace Commuter Lombok untuk rombongan wisata, gathering perusahaan, dan perjalanan grup dengan kapasitas hingga 14 penumpang.",
    imageTop: HeroLombok,
    imageBottom: HeroLombok,
  },

  {
    slug: "toyota-hiace-premio-lombok",
    name: "Toyota Hiace Premio",
    region: "lombok",
    pricePerDay: "Rp 1.500.000",
    seats: 12,
    transmission: "Manual",
    features: [
      "Premium Cabin",
      "Reclining Seat",
      "Driver Profesional",
      "BBM Termasuk",
    ],
    bestFor: [
      "Premium Group Tour",
      "Corporate Event",
      "Family Vacation",
    ],
    description:
      "Sewa Toyota Hiace Premio Lombok dengan interior lebih nyaman dan modern. Cocok untuk perjalanan rombongan yang mengutamakan kenyamanan.",
    imageTop: HeroLombok,
    imageBottom: HeroLombok,
  },

  {
    slug: "medium-bus-lombok",
    name: "Medium Bus",
    region: "lombok",
    pricePerDay: "Rp 1.500.000",
    seats: 30,
    transmission: "Manual",
    features: [
      "Kapasitas Besar",
      "AC",
      "Driver Profesional",
      "Bagasi Luas",
    ],
    bestFor: [
      "Study Tour",
      "Company Gathering",
      "Rombongan Besar",
    ],
    description:
      "Sewa Medium Bus Lombok untuk rombongan wisata, study tour, outing perusahaan, dan kegiatan grup dengan kapasitas hingga 30 penumpang.",
    imageTop: HeroLombok,
    imageBottom: HeroLombok,
  },

  {
    slug: "big-bus-lombok",
    name: "Big Bus Pariwisata",
    region: "lombok",
    pricePerDay: "Rp 2.200.000",
    seats: 45,
    transmission: "Manual",
    features: [
      "AC",
      "Reclining Seat",
      "Bagasi Besar",
      "Driver Profesional",
    ],
    bestFor: [
      "Tour Group",
      "Event Besar",
      "Perjalanan Wisata",
    ],
    description:
      "Sewa Big Bus Pariwisata Lombok untuk kebutuhan rombongan besar, study tour, gathering perusahaan, dan perjalanan wisata antar destinasi di Pulau Lombok.",
    imageTop: HeroLombok,
    imageBottom: HeroLombok,
  },
];
