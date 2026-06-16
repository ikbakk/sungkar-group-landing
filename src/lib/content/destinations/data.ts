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
      "Garis pantai yang luas, akses ke banyak singgah pantai, dan tempo liburan yang santai.",
    thingsToDo: ["Jelajah pantai", "Titik matahari terbenam", "Kafe lokal"],
    packages: ["3d2n-lombok-signature", "village-culture-experience"],
  },
  {
    slug: "tetebatu",
    title: "Tetebatu",
    region: "Timur Lombok",
    image: DESTINATIONS.lombok,
    gallery: [GALLERY.tourCultural, HERO.lombok, GALLERY.kutaBeach],
    summary:
      "Desa pegunungan yang lebih tenang dengan lanskap hijau dan ritme kunjungan yang pelan.",
    thingsToDo: ["Jalan desa", "Terasering padi", "Singgah air terjun"],
    packages: ["village-culture-experience"],
  },
  {
    slug: "sembalun",
    title: "Sembalun",
    region: "Koridor pegunungan",
    image: DESTINATIONS.rinjani,
    gallery: [DESTINATIONS.rinjani, HERO.lombok, GALLERY.tourSnorkeling],
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
    image: DESTINATIONS.rinjani,
    gallery: [DESTINATIONS.rinjani, GALLERY.tourSnorkeling, GALLERY.kutaBeach],
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
    image: DESTINATIONS.rinjani,
    gallery: [DESTINATIONS.rinjani, GALLERY.tourCultural, GALLERY.kutaBeach2],
    summary:
      "Gerbang yang dekat dengan air terjun, jalur trekking, dan atmosfer pegunungan yang khas.",
    thingsToDo: ["Air terjun", "Dukungan trek", "Menginap di dataran tinggi"],
    packages: ["3d2n-lombok-signature"],
  },
  {
    slug: "gili-trawangan",
    title: "Gili Trawangan",
    region: "Kepulauan Gili",
    image: DESTINATIONS.gili,
    gallery: [DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.tourSnorkeling],
    summary:
      "Pulau yang paling mudah untuk jelajah pulau, snorkeling, dan ritme liburan pantai.",
    thingsToDo: ["Snorkeling", "Jelajah pulau", "Waktu pantai"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-air",
    title: "Gili Air",
    region: "Kepulauan Gili",
    image: DESTINATIONS.gili,
    gallery: [DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.kutaBeach],
    summary:
      "Versi yang lebih tenang dari Gili dengan banyak ruang untuk berjalan santai dan snorkeling singkat.",
    thingsToDo: ["Waktu pantai tenang", "Snorkeling", "Singgah sunset"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "gili-meno",
    title: "Gili Meno",
    region: "Kepulauan Gili",
    image: DESTINATIONS.gili,
    gallery: [DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.kutaBeach2],
    summary:
      "Pulau paling sunyi untuk traveler yang ingin suasana privat dan sederhana.",
    thingsToDo: ["Pantai tenang", "Snorkeling", "Tempo santai"],
    packages: ["snorkeling-gili-escape"],
  },
  {
    slug: "sumbawa",
    title: "Sumbawa",
    region: "Pulau luar",
    image: DESTINATIONS.sumbawa,
    gallery: [DESTINATIONS.sumbawa, GALLERY.whaleshark, GALLERY.tourSnorkeling],
    summary:
      "Pilihan destinasi yang lebih sepi dengan karakter alam terbuka dan garis pantai yang kuat.",
    thingsToDo: ["Pantai tenang", "Rute perjalanan", "Singgah lanskap"],
    packages: ["3d2n-lombok-signature"],
  },
];
