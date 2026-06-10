import HeroLombok from "@/assets/images/hero-lombok.webp";
import WhaleShark from "@/assets/images/whaleshark.webp";

export type TourPackage = {
  slug: string;
  title: string;
  region: "lombok" | "sumbawa" | "labuan-bajo";
  featured?: boolean;

  category: string;
  duration: string;

  image: ImageMetadata;

  summary: string;

  highlights: string[];
  itinerary: string[];

  includes: string[];
  excludes: string[];
};

export const packages: TourPackage[] = [
  // =========================
  // LOMBOK
  // =========================

  {
    slug: "paket-1-hari-full",
    title: "Paket 1 Hari Full",
    region: "lombok",
    featured: true,

    category: "Paket Wisata Lombok",
    duration: "1 Hari",

    image: HeroLombok,

    summary:
      "Paket wisata harian untuk menjelajahi destinasi unggulan Lombok dengan itinerary fleksibel dan kendaraan pribadi.",

    highlights: [
      "Private Tour",
      "Pantai Selatan Lombok",
      "Driver Lokal",
      "Fleksibel",
    ],

    itinerary: [
      "Hari 1 - Penjemputan dari hotel atau bandara.",
      "Hari 1 - Mengunjungi Kuta Mandalika dan Pantai Tanjung Aan.",
      "Hari 1 - Makan siang di area pantai.",
      "Hari 1 - Bukit Merese dan spot sunset.",
      "Hari 1 - Kembali ke hotel.",
    ],

    includes: [
      "Transportasi pribadi",
      "Driver lokal",
      "BBM dan parkir",
      "Air mineral",
    ],

    excludes: ["Tiket masuk", "Makan siang", "Pengeluaran pribadi"],
  },

  {
    slug: "paket-2-hari-1-malam",
    title: "Paket 2 Hari 1 Malam",
    region: "lombok",
    featured: true,

    category: "Paket Wisata Lombok",
    duration: "2 Hari 1 Malam",

    image: HeroLombok,

    summary:
      "Program wisata singkat untuk menikmati kombinasi pantai selatan dan budaya lokal Lombok.",

    highlights: ["Private Tour", "Pantai Selatan", "Desa Sade", "Sunset Point"],

    itinerary: [
      "Hari 1 - Kuta Mandalika, Pantai Tanjung Aan, Bukit Merese.",
      "Hari 1 - Check-in hotel dan menikmati sunset.",
      "Hari 2 - Desa Adat Sade dan pusat oleh-oleh Lombok.",
      "Hari 2 - Transfer kembali ke hotel atau bandara.",
    ],

    includes: [
      "Transportasi pribadi",
      "Driver lokal",
      "BBM dan parkir",
      "Air mineral",
    ],

    excludes: ["Hotel", "Tiket masuk", "Makan", "Pengeluaran pribadi"],
  },

  {
    slug: "paket-3-hari-2-malam",
    title: "Paket 3 Hari 2 Malam",
    region: "lombok",
    featured: true,

    category: "Paket Wisata Lombok",
    duration: "3 Hari 2 Malam",

    image: HeroLombok,

    summary:
      "Program wisata populer yang menggabungkan pantai, budaya, dan dataran tinggi Lombok.",

    highlights: ["Pantai Selatan", "Tetebatu", "Desa Adat", "Private Tour"],

    itinerary: [
      "Hari 1 - Penjemputan dan wisata Pantai Selatan Lombok.",
      "Hari 2 - Tetebatu, sawah terasering, dan air terjun.",
      "Hari 3 - Desa Sade dan pusat oleh-oleh.",
      "Hari 3 - Transfer menuju bandara atau hotel.",
    ],

    includes: [
      "Transportasi pribadi",
      "Driver lokal",
      "BBM dan parkir",
      "Air mineral",
    ],

    excludes: ["Hotel", "Tiket masuk", "Makan", "Pengeluaran pribadi"],
  },

  {
    slug: "paket-4-hari-3-malam",
    title: "Paket 4 Hari 3 Malam",
    region: "lombok",

    category: "Paket Wisata Lombok",
    duration: "4 Hari 3 Malam",

    image: HeroLombok,

    summary:
      "Paket wisata lengkap untuk menikmati destinasi unggulan Lombok tanpa terburu-buru.",

    highlights: ["Pantai Selatan", "Tetebatu", "Gili", "Private Tour"],

    itinerary: [
      "Hari 1 - Pantai Selatan Lombok.",
      "Hari 2 - Tetebatu dan wisata alam.",
      "Hari 3 - Wisata Gili Trawangan.",
      "Hari 4 - Belanja oleh-oleh dan transfer keluar.",
    ],

    includes: [
      "Transportasi pribadi",
      "Driver lokal",
      "BBM dan parkir",
      "Air mineral",
    ],

    excludes: ["Hotel", "Tiket masuk", "Fast boat", "Pengeluaran pribadi"],
  },

  {
    slug: "paket-5-hari-4-malam",
    title: "Paket 5 Hari 4 Malam",
    region: "lombok",

    category: "Paket Wisata Lombok",
    duration: "5 Hari 4 Malam",

    image: HeroLombok,

    summary:
      "Program wisata komprehensif untuk menjelajahi Lombok dari pantai hingga kawasan pegunungan.",

    highlights: [
      "Pantai Selatan",
      "Tetebatu",
      "Sembalun",
      "Gili",
      "Private Tour",
    ],

    itinerary: [
      "Hari 1 - Pantai Selatan Lombok.",
      "Hari 2 - Tetebatu dan wisata alam.",
      "Hari 3 - Sembalun dan dataran tinggi.",
      "Hari 4 - Gili Trawangan dan island hopping.",
      "Hari 5 - Oleh-oleh dan transfer keberangkatan.",
    ],

    includes: [
      "Transportasi pribadi",
      "Driver lokal",
      "BBM dan parkir",
      "Air mineral",
    ],

    excludes: ["Hotel", "Tiket masuk", "Fast boat", "Pengeluaran pribadi"],
  },

  {
    slug: "paket-tour-3-gili-lombok",
    title: "Paket Tour 3 Gili Lombok",
    region: "lombok",

    category: "Paket Wisata Lombok",
    duration: "1 Hari",

    image: HeroLombok,

    summary:
      "Island hopping ke Gili Trawangan, Gili Air, dan Gili Meno dengan aktivitas snorkeling.",

    highlights: ["Gili Trawangan", "Gili Air", "Gili Meno", "Snorkeling"],

    itinerary: [
      "Hari 1 - Penjemputan menuju pelabuhan.",
      "Hari 1 - Snorkeling di Gili Meno.",
      "Hari 1 - Mengunjungi Gili Air.",
      "Hari 1 - Waktu bebas di Gili Trawangan.",
      "Hari 1 - Kembali ke Lombok.",
    ],

    includes: [
      "Transportasi darat",
      "Boat sharing",
      "Peralatan snorkeling",
      "Guide lokal",
    ],

    excludes: ["Makan siang", "Tiket pelabuhan", "Pengeluaran pribadi"],
  },

  // =========================
  // SUMBAWA
  // =========================

  {
    slug: "open-trip-whale-shark-sumbawa",
    title: "Open Trip Whale Shark Sumbawa",
    region: "sumbawa",

    category: "Open Trip Sumbawa",
    duration: "2 Hari 1 Malam",
    featured: true,

    image: WhaleShark,

    summary:
      "Open trip menuju Teluk Saleh untuk menikmati pengalaman berenang bersama whale shark di habitat alaminya.",

    highlights: [
      "Whale Shark",
      "Teluk Saleh",
      "Open Trip",
      "Sunrise Experience",
    ],

    itinerary: [
      "Hari 1 - Kedatangan peserta dan briefing perjalanan.",
      "Hari 1 - Perjalanan menuju area Teluk Saleh.",
      "Hari 2 - Berangkat sebelum matahari terbit menuju titik whale shark.",
      "Hari 2 - Snorkeling dan observasi whale shark.",
      "Hari 2 - Kembali ke titik keberangkatan.",
    ],

    includes: ["Transportasi lokal", "Boat trip", "Guide lokal", "Air mineral"],

    excludes: [
      "Tiket menuju Sumbawa",
      "Makan di luar program",
      "Pengeluaran pribadi",
    ],
  },

  // =========================
  // LABUAN BAJO
  // =========================

  {
    slug: "paket-1-hari-full-labuan-bajo",
    title: "Paket 1 Hari Full Labuan Bajo",
    region: "labuan-bajo",

    category: "Paket Wisata Labuan Bajo",
    duration: "1 Hari",

    image: HeroLombok,

    summary:
      "Wisata satu hari menggunakan speedboat ke destinasi utama Taman Nasional Komodo.",

    highlights: ["Pulau Padar", "Pink Beach", "Pulau Komodo", "Manta Point"],

    itinerary: [
      "Berangkat dari Labuan Bajo menggunakan speedboat.",
      "Trekking Pulau Padar.",
      "Snorkeling di Pink Beach.",
      "Observasi komodo di Pulau Komodo.",
      "Manta Point dan kembali ke Labuan Bajo.",
    ],

    includes: [
      "Speedboat",
      "Guide lokal",
      "Air mineral",
      "Peralatan snorkeling",
    ],

    excludes: [
      "Tiket Taman Nasional Komodo",
      "Transportasi hotel",
      "Pengeluaran pribadi",
    ],
  },

  {
    slug: "overnight-komodo-adventure",
    title: "Overnight Komodo Adventure",
    region: "labuan-bajo",

    category: "Paket Wisata Labuan Bajo",
    duration: "2 Hari 1 Malam",

    image: HeroLombok,

    summary:
      "Liveaboard singkat dengan pengalaman menginap di kapal dan menjelajahi destinasi ikonik Komodo.",

    highlights: ["Liveaboard", "Pulau Padar", "Pink Beach", "Sunset Kalong"],

    itinerary: [
      "Hari 1 - Kelor Island dan Manjarite.",
      "Hari 1 - Sunset di Kalong Island.",
      "Hari 1 - Menginap di kapal.",
      "Hari 2 - Sunrise Pulau Padar.",
      "Hari 2 - Pulau Komodo dan Pink Beach.",
      "Hari 2 - Kembali ke Labuan Bajo.",
    ],

    includes: [
      "Kabin kapal",
      "Makan selama trip",
      "Guide lokal",
      "Peralatan snorkeling",
    ],

    excludes: [
      "Tiket Taman Nasional Komodo",
      "Tiket pesawat",
      "Pengeluaran pribadi",
    ],
  },

  {
    slug: "sailing-komodo-3d2n",
    title: "Sailing Komodo 3 Hari 2 Malam",
    region: "labuan-bajo",

    category: "Paket Wisata Labuan Bajo",
    duration: "3 Hari 2 Malam",

    image: HeroLombok,

    summary:
      "Program sailing paling populer untuk menjelajahi seluruh destinasi unggulan di kawasan Komodo.",

    highlights: [
      "Pulau Padar",
      "Pink Beach",
      "Komodo Island",
      "Manta Point",
      "Taka Makassar",
      "Kalong Island",
    ],

    itinerary: [
      "Hari 1 - Kelor Island, Manjarite, Kalong Island.",
      "Hari 1 - Sunset dan menginap di kapal.",
      "Hari 2 - Sunrise Pulau Padar.",
      "Hari 2 - Trekking Pulau Komodo.",
      "Hari 2 - Pink Beach dan Taka Makassar.",
      "Hari 2 - Manta Point.",
      "Hari 2 - Menginap di kapal.",
      "Hari 3 - Kanawa Island.",
      "Hari 3 - Kembali ke Labuan Bajo.",
    ],

    includes: [
      "Kabin kapal",
      "Makan selama trip",
      "Guide lokal",
      "Peralatan snorkeling",
      "Air mineral",
    ],

    excludes: [
      "Tiket Taman Nasional Komodo",
      "Tiket pesawat",
      "Tip kru kapal",
      "Pengeluaran pribadi",
    ],
  },
];
