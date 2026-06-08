import type { ImageMetadata } from "astro";

export type Vehicle = {
  slug: string;
  name: string;
  pricePerDay: string;
  seats: number;
  transmission: "Manual" | "Automatic";
  features: string[];
  bestFor: string[];
  description: string;
  image: ImageMetadata;
};

import HeroLombok from "@/assets/images/hero-lombok.png";

export const vehicles: Vehicle[] = [
  {
    slug: "sedan-compact",
    name: "Sedan Kompak",
    pricePerDay: "Rp 400.000 - 500.000",
    seats: 5,
    transmission: "Automatic",
    features: ["AC Dingin", "Bluetooth", "USB Charging", "Bantuan Parkir"],
    bestFor: ["Perjalanan kota", "Couple travelers", "City tour"],
    description:
      "Kendaraan hemat bahan bakar yang nyaman untuk perjalanan kota dengan konsumsi BBM yang efisien dan performa stabil.",
    image: HeroLombok,
  },
  {
    slug: "mpv-family",
    name: "MPV 7 Penumpang",
    pricePerDay: "Rp 600.000 - 800.000",
    seats: 7,
    transmission: "Automatic",
    features: [
      "AC Dual Zone",
      "Sliding Doors",
      "Spacious Interior",
      "USB Multiple",
    ],
    bestFor: ["Rombongan keluarga", "Group tour", "Kenyamanan maksimal"],
    description:
      "Kendaraan ideal untuk keluarga besar dengan interior yang luas dan fitur kenyamanan modern untuk perjalanan jarak jauh.",
    image: HeroLombok,
  },
  {
    slug: "suv-adventure",
    name: "SUV Petualangan",
    pricePerDay: "Rp 700.000 - 900.000",
    seats: 5,
    transmission: "Automatic",
    features: [
      "All-Terrain Tires",
      "4WD System",
      "High Ground Clearance",
      "Adventure Ready",
    ],
    bestFor: ["Off-road adventure", "Destinasi terpencil", "Petualangan outdoor"],
    description:
      "SUV tangguh dengan ground clearance tinggi dan sistem 4WD untuk menjangkau destinasi adventure yang menantang.",
    image: HeroLombok,
  },
  {
    slug: "pickup-truck",
    name: "Pickup Truck",
    pricePerDay: "Rp 600.000 - 750.000",
    seats: 5,
    transmission: "Manual",
    features: ["Cargo Bed", "Heavy Duty", "Towing Capable", "Durabel"],
    bestFor: ["Barang bawaan banyak", "Grup besar", "Cargo transport"],
    description:
      "Kendaraan pickup dengan kapasitas bak luas cocok untuk perjalanan grup dengan banyak perlengkapan adventure.",
    image: HeroLombok,
  },
  {
    slug: "van-luxury",
    name: "Van Mewah",
    pricePerDay: "Rp 850.000 - 1.200.000",
    seats: 8,
    transmission: "Automatic",
    features: [
      "Premium Interior",
      "Reclining Seats",
      "Entertainment System",
      "Luxury Ambiance",
    ],
    bestFor: ["Perjalanan VIP", "Comfort priority", "Bisnis travel"],
    description:
      "Van premium dengan interior mewah dan fasilitas hiburan lengkap untuk pengalaman perjalanan yang berkesan.",
    image: HeroLombok,
  },
  {
    slug: "minibus-group",
    name: "Minibus 20 Penumpang",
    pricePerDay: "Rp 1.500.000 - 2.000.000",
    seats: 20,
    transmission: "Automatic",
    features: [
      "AC Central",
      "Reclining Seats",
      "Radio Komunikasi",
      "Group Travel Ready",
    ],
    bestFor: ["Rombongan besar", "Acara keluarga", "Bus tour"],
    description:
      "Bus mini dengan kapasitas besar cocok untuk rombongan dan acara keluarga dengan kenyamanan maksimal seluruh penumpang.",
    image: HeroLombok,
  },
];
