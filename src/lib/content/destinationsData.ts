import type { ImageMetadata } from "astro";

export type Destination = {
  slug: string;
  title: string;
  region: string;
  image: ImageMetadata;
  gallery: ImageMetadata[];
  summary: string;
  thingsToDo: string[];
  packages: string[];
};

import DestinationLombok from "@/assets/images/destination-lombok.webp";
import DestinationRinjani from "@/assets/images/destination-rinjani.webp";
import DestinationGili from "@/assets/images/destination-gili.webp";
import DestinationSumbawa from "@/assets/images/destination-sumbawa.webp";
import KutaBeach from "@/assets/images/kuta-beach.webp";
import KutaBeach2 from "@/assets/images/kuta-beach-2.webp";
import GiliMeno from "@/assets/images/gili-meno.webp";
import TourSnorkeling from "@/assets/images/tour-snorkeling.webp";
import TourCultural from "@/assets/images/tour-cultural.webp";
import HeroLombok from "@/assets/images/hero-lombok.webp";
import WhaleShark from "@/assets/images/whaleshark.webp";

export const destinations: Destination[] = [
  {
    slug: "kuta-lombok",
    title: "Kuta Lombok",
    region: "Selatan Lombok",
    image: DestinationLombok,
    gallery: [KutaBeach, KutaBeach2, HeroLombok],
    summary:
      "Garis pantai yang luas, akses ke banyak singgah pantai, dan tempo liburan yang santai.",
    thingsToDo: ["Jelajah pantai", "Titik matahari terbenam", "Kafe lokal"],
    packages: ["3d2n-lombok-signature", "village-culture-experience"],
  },
  {
    slug: "tetebatu",
    title: "Tetebatu",
    region: "Timur Lombok",
    image: DestinationLombok,
    gallery: [TourCultural, HeroLombok, KutaBeach],
    summary:
      "Desa pegunungan yang lebih tenang dengan lanskap hijau dan ritme kunjungan yang pelan.",
    thingsToDo: ["Jalan desa", "Terasering padi", "Singgah air terjun"],
    packages: ["village-culture-experience"],
  },
  {
    slug: "sembalun",
    title: "Sembalun",
    region: "Koridor pegunungan",
    image: DestinationRinjani,
    gallery: [DestinationRinjani, HeroLombok, TourSnorkeling],
    summary:
      "Koridor pegunungan yang sering dipakai sebagai titik awal menuju pengalaman Rinjani.",
    thingsToDo: [
      "Pemandangan dataran tinggi",
      "Perjalanan matahari terbit",
      "Singgah kebun lokal",
    ],
    packages: ["3d2n-lombok-signature"],
  },
  {
    slug: "rinjani",
    title: "Rinjani",
    region: "Area pegunungan",
    image: DestinationRinjani,
    gallery: [DestinationRinjani, TourSnorkeling, KutaBeach],
    summary:
      "Puncak dramatis, udara pegunungan, dan pengalaman matahari terbit yang jadi alasan banyak tamu datang.",
    thingsToDo: [
      "Titik pandang indah",
      "Dukungan trekking",
      "Rute matahari terbit",
    ],
    packages: ["3d2n-lombok-signature"],
  },
  {
    slug: "senaru",
    title: "Senaru",
    region: "Akses Rinjani",
    image: DestinationRinjani,
    gallery: [DestinationRinjani, TourCultural, KutaBeach2],
    summary:
      "Gerbang yang dekat dengan air terjun, jalur trekking, dan atmosfer pegunungan yang khas.",
    thingsToDo: ["Air terjun", "Dukungan trek", "Menginap di dataran tinggi"],
    packages: ["3d2n-lombok-signature"],
  },
  {
    slug: "gili-trawangan",
    title: "Gili Trawangan",
    region: "Kepulauan Gili",
    image: DestinationGili,
    gallery: [DestinationGili, GiliMeno, TourSnorkeling],
    summary:
      "Pulau yang paling mudah untuk jelajah pulau, snorkeling, dan ritme liburan pantai.",
    thingsToDo: ["Snorkeling", "Jelajah pulau", "Waktu pantai"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-air",
    title: "Gili Air",
    region: "Kepulauan Gili",
    image: DestinationGili,
    gallery: [DestinationGili, GiliMeno, KutaBeach],
    summary:
      "Versi yang lebih tenang dari Gili dengan banyak ruang untuk berjalan santai dan snorkeling singkat.",
    thingsToDo: ["Waktu pantai tenang", "Snorkeling", "Singgah sunset"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-meno",
    title: "Gili Meno",
    region: "Kepulauan Gili",
    image: DestinationGili,
    gallery: [DestinationGili, GiliMeno, KutaBeach2],
    summary:
      "Pulau paling sunyi untuk traveler yang ingin suasana privat dan sederhana.",
    thingsToDo: ["Pantai tenang", "Snorkeling", "Tempo santai"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "sumbawa",
    title: "Sumbawa",
    region: "Pulau luar",
    image: DestinationSumbawa,
    gallery: [DestinationSumbawa, WhaleShark, TourSnorkeling],
    summary:
      "Pilihan destinasi yang lebih sepi dengan karakter alam terbuka dan garis pantai yang kuat.",
    thingsToDo: ["Pantai tenang", "Rute perjalanan", "Singgah lanskap"],
    packages: ["3d2n-lombok-signature"],
  },
];
