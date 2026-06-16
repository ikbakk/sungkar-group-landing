import type { ImageSource } from "@/lib/images";
import { DESTINATIONS, GALLERY, HERO } from "@/assets/images";

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

export const destinations: Destination[] = [
  {
    slug: "kuta-lombok",
    title: "Kuta Lombok",
    region: "Selatan Lombok",
    image: DESTINATIONS.lombok,
    gallery: [GALLERY.kutaBeach, GALLERY.kutaBeach2, HERO.lombok],
    summary:
      "Pesisir luas, akses ke banyak pantai, dan tempo pelancongan yang santai.",
    thingsToDo: ["Jelajah pantai", "Titik matahari terbenam", "Kedai tempatan"],
    packages: ["3d2n-lombok-signature", "village-culture-experience"],
  },
  {
    slug: "tetebatu",
    title: "Tetebatu",
    region: "Timur Lombok",
    image: DESTINATIONS.lombok,
    gallery: [GALLERY.tourCultural, HERO.lombok, GALLERY.kutaBeach],
    summary:
      "Desa pegunungan yang tenang dengan lanskap hijau dan tempo lawatan yang perlahan.",
    thingsToDo: ["Jalan kampung", "Sawah terasering", "Air terjun"],
    packages: ["village-culture-experience"],
  },
  {
    slug: "sembalun",
    title: "Sembalun",
    region: "Koridor pegunungan",
    image: DESTINATIONS.rinjani,
    gallery: [DESTINATIONS.rinjani, HERO.lombok, GALLERY.tourSnorkeling],
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
    image: DESTINATIONS.rinjani,
    gallery: [DESTINATIONS.rinjani, GALLERY.tourSnorkeling, GALLERY.kutaBeach],
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
    image: DESTINATIONS.rinjani,
    gallery: [DESTINATIONS.rinjani, GALLERY.tourCultural, GALLERY.kutaBeach2],
    summary:
      "Gerbang dekat air terjun, laluan mendaki, dan suasana pegunungan yang khas.",
    thingsToDo: ["Air terjun", "Sokongan mendaki", "Menginap di pegunungan"],
    packages: ["3d2n-lombok-signature"],
  },
  {
    slug: "gili-trawangan",
    title: "Gili Trawangan",
    region: "Kepulauan Gili",
    image: DESTINATIONS.gili,
    gallery: [DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.tourSnorkeling],
    summary:
      "Pulau paling mudah untuk menjelajah pulau, snorkeling, dan ritma pelancongan pantai.",
    thingsToDo: ["Snorkeling", "Jelajah pulau", "Masa pantai"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-air",
    title: "Gili Air",
    region: "Kepulauan Gili",
    image: DESTINATIONS.gili,
    gallery: [DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.kutaBeach],
    summary:
      "Versi lebih tenang Gili dengan ruang yang banyak untuk berjalan santai dan snorkeling ringkas.",
    thingsToDo: ["Masa pantai santai", "Snorkeling", "Titik matahari terbenam"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-meno",
    title: "Gili Meno",
    region: "Kepulauan Gili",
    image: DESTINATIONS.gili,
    gallery: [DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.kutaBeach2],
    summary:
      "Pulau paling tenang untuk pelancong yang mencari suasana persendirian dan sederhana.",
    thingsToDo: ["Pantai sepi", "Snorkeling", "Tempo santai"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "sumbawa",
    title: "Sumbawa",
    region: "Pulau luar",
    image: DESTINATIONS.sumbawa,
    gallery: [DESTINATIONS.sumbawa, GALLERY.whaleshark, GALLERY.tourSnorkeling],
    summary:
      "Pilihan destinasi yang lebih tenang dengan watak alam terbuka dan garis pantai yang kukuh.",
    thingsToDo: ["Pantai sepi", "Laluan perjalanan", "Titik lanskap"],
    packages: ["3d2n-lombok-signature"],
  },
];
