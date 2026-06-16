import type { ImageSource } from "@/lib/images";

export type Destination = {
  slug: string;
  title: string;
  region: string;
  image: ImageSource;
  gallery: ImageSource[];
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
      "Pesisir luas, akses ke banyak pantai, dan tempo pelancongan yang santai.",
    thingsToDo: ["Jelajah pantai", "Titik matahari terbenam", "Kedai tempatan"],
    packages: ["3d2n-lombok-signature", "village-culture-experience"],
  },
  {
    slug: "tetebatu",
    title: "Tetebatu",
    region: "Timur Lombok",
    image: DestinationLombok,
    gallery: [TourCultural, HeroLombok, KutaBeach],
    summary:
      "Desa pegunungan yang tenang dengan lanskap hijau dan tempo lawatan yang perlahan.",
    thingsToDo: ["Jalan kampung", "Sawah terasering", "Air terjun"],
    packages: ["village-culture-experience"],
  },
  {
    slug: "sembalun",
    title: "Sembalun",
    region: "Koridor pegunungan",
    image: DestinationRinjani,
    gallery: [DestinationRinjani, HeroLombok, TourSnorkeling],
    summary:
      "Koridor pegunungan yang biasa digunakan sebagai titik permulaan pengalaman Rinjani.",
    thingsToDo: [
      "Pemandangan pegunungan",
      "Perjalanan matahari terbit",
      "Lawatan ladang tempatan",
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
      "Puncak dramatis, udara pegunungan, dan pengalaman matahari terbit yang menarik ramai pelancong.",
    thingsToDo: [
      "Titik pandang senja",
      "Sokongan mendaki",
      "Jalur matahari terbit",
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
      "Gerbang dekat air terjun, laluan mendaki, dan suasana pegunungan yang khas.",
    thingsToDo: ["Air terjun", "Sokongan mendaki", "Menginap di pegunungan"],
    packages: ["3d2n-lombok-signature"],
  },
  {
    slug: "gili-trawangan",
    title: "Gili Trawangan",
    region: "Kepulauan Gili",
    image: DestinationGili,
    gallery: [DestinationGili, GiliMeno, TourSnorkeling],
    summary:
      "Pulau paling mudah untuk menjelajah pulau, snorkeling, dan ritma pelancongan pantai.",
    thingsToDo: ["Snorkeling", "Jelajah pulau", "Masa pantai"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-air",
    title: "Gili Air",
    region: "Kepulauan Gili",
    image: DestinationGili,
    gallery: [DestinationGili, GiliMeno, KutaBeach],
    summary:
      "Versi lebih tenang Gili dengan ruang yang banyak untuk berjalan santai dan snorkeling ringkas.",
    thingsToDo: ["Masa pantai santai", "Snorkeling", "Titik matahari terbenam"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-meno",
    title: "Gili Meno",
    region: "Kepulauan Gili",
    image: DestinationGili,
    gallery: [DestinationGili, GiliMeno, KutaBeach2],
    summary:
      "Pulau paling tenang untuk pelancong yang mencari suasana persendirian dan sederhana.",
    thingsToDo: ["Pantai sepi", "Snorkeling", "Tempo santai"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "sumbawa",
    title: "Sumbawa",
    region: "Pulau luar",
    image: DestinationSumbawa,
    gallery: [DestinationSumbawa, WhaleShark, TourSnorkeling],
    summary:
      "Pilihan destinasi yang lebih tenang dengan watak alam terbuka dan garis pantai yang kukuh.",
    thingsToDo: ["Pantai sepi", "Laluan perjalanan", "Titik lanskap"],
    packages: ["3d2n-lombok-signature"],
  },
];
