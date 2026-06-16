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
      "Pemandu Profesional",
      "BBM Termasuk",
      "Air Mineral",
      "Penggunaan 12 Jam",
    ],
    bestFor: [
      "Pelancongan keluarga",
      "City tour Lombok",
      "Perjalanan harian",
    ],
    description:
      "Sewa Toyota Avanza di Lombok dengan pemandu profesional. Sesuai untuk pelancongan keluarga, perjalanan perniagaan, city tour, dan pertukaran lapangan terbang dengan kapasiti sehingga 7 penumpang.",
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
      "Pemandu Profesional",
      "BBM Termasuk",
      "Air Mineral",
      "Kabin Luas",
    ],
    bestFor: [
      "Keluarga besar",
      "Perjalanan perniagaan",
      "Pelancongan premium",
    ],
    description:
      "Sewa Toyota Innova Reborn di Lombok dengan kabin yang luas dan selesa. Ideal untuk perjalanan keluarga, kumpulan kecil, dan pelancongan premium di Pulau Lombok.",
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
      "Pemandu Profesional",
      "BBM Termasuk",
      "Air Mineral",
      "Interior Premium",
    ],
    bestFor: [
      "VIP Travel",
      "Corporate Trip",
      "Premium Family Tour",
    ],
    description:
      "Sewa Toyota Innova Zenix di Lombok dengan kesenangan premium, interior moden, dan prestasi terbaik untuk pelancongan rehat dan perniagaan.",
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
      "Pemandu Profesional",
      "BBM Termasuk",
      "Air Mineral",
    ],
    bestFor: [
      "VIP Tour",
      "Executive Travel",
      "Premium Vacation",
    ],
    description:
      "Sewa Toyota Fortuner GR di Lombok dengan penampilan mewah dan kesenangan premium. Sesuai untuk tetamu VIP, perjalanan perniagaan, dan pelancongan eksklusif.",
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
      "Pemandu Profesional",
      "BBM Termasuk",
      "Air Mineral",
    ],
    bestFor: [
      "Luxury Travel",
      "VIP Guest",
      "Corporate Visit",
    ],
    description:
      "Sewa Mitsubishi Pajero Sport di Lombok untuk perjalanan yang selesa dan bergaya. Pilihan ideal untuk tetamu VIP dan pelancongan premium.",
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
      "Pemandu Profesional",
      "Premium Experience",
    ],
    bestFor: [
      "VIP Travel",
      "Perkahwinan",
      "Executive Transport",
    ],
    description:
      "Sewa Toyota Alphard di Lombok dengan kemudahan premium dan kabin mewah. Pilihan terbaik untuk tetamu VIP, pegawai, dan keperluan pengangkutan eksklusif.",
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
      "Pemandu Profesional",
      "BBM Termasuk",
    ],
    bestFor: [
      "Family Gathering",
      "Group Tour",
      "Corporate Trip",
    ],
    description:
      "Sewa Toyota Hiace Commuter di Lombok untuk kumpulan pelancongan, berkumpul syarikat, dan perjalanan kumpulan dengan kapasiti sehingga 14 penumpang.",
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
      "Kabin Premium",
      "Reclining Seat",
      "Pemandu Profesional",
      "BBM Termasuk",
    ],
    bestFor: [
      "Premium Group Tour",
      "Corporate Event",
      "Family Vacation",
    ],
    description:
      "Sewa Toyota Hiace Premio di Lombok dengan interior yang lebih selesa dan moden. Sesuai untuk perjalanan kumpulan yang mengutamakan kesenangan.",
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
      "Kapasiti Besar",
      "AC",
      "Pemandu Profesional",
      "Bagasi Luas",
    ],
    bestFor: [
      "Study Tour",
      "Company Gathering",
      "Rombongan Besar",
    ],
    description:
      "Sewa Medium Bus di Lombok untuk kumpulan pelancongan, study tour, company outing, dan aktiviti kumpulan dengan kapasiti sehingga 30 penumpang.",
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
      "Pemandu Profesional",
    ],
    bestFor: [
      "Tour Group",
      "Event Besar",
      "Perjalanan Wisata",
    ],
    description:
      "Sewa Big Bus Pariwisata di Lombok untuk keperluan kumpulan besar, study tour, company gathering, dan perjalanan antarabangsa di Pulau Lombok.",
    imageTop: HeroLombok,
    imageBottom: HeroLombok,
  },
];
