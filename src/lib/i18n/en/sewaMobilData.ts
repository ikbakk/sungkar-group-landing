import type { ImageMetadata } from "astro";

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
  imageTop: ImageMetadata;
  imageBottom: ImageMetadata;
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
      "Rent a Toyota Avanza in Lombok with a professional driver. Suitable for family tours, business trips, city tours, and airport transfers with capacity for up to 7 passengers.",
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
      "Rent a Toyota Innova Reborn in Lombok with a spacious and comfortable cabin. Ideal for family trips, small groups, and premium tours on Lombok Island.",
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
      "Rent a Toyota Innova Zenix in Lombok with premium comfort, modern interior, and top performance for both leisure and business travel.",
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
      "Rent a Toyota Fortuner GR in Lombok with a luxurious appearance and premium comfort. Suitable for VIP guests, business trips, and exclusive tours.",
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
      "Rent a Mitsubishi Pajero Sport in Lombok for a comfortable and classy journey. An ideal choice for VIP guests and premium tours.",
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
      "Rent a Toyota Alphard in Lombok with premium facilities and a luxurious cabin. The best choice for VIP guests, officials, and exclusive transportation needs.",
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
      "Rent a Toyota Hiace Commuter in Lombok for tour groups, company gatherings, and group travel with capacity for up to 14 passengers.",
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
      "Rent a Toyota Hiace Premio in Lombok with a more comfortable and modern interior. Suitable for group trips that prioritize comfort.",
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
      "Rent a Medium Bus in Lombok for tour groups, study tours, company outings, and group activities with capacity for up to 30 passengers.",
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
      "Rent a Big Bus Pariwisata in Lombok for large group needs, study tours, company gatherings, and inter-destination travel on Lombok Island.",
    imageTop: HeroLombok,
    imageBottom: HeroLombok,
  },
];
