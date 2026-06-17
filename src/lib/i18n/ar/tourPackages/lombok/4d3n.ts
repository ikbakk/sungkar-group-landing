import { HERO, DESTINATIONS, GALLERY } from "@/assets/images";

import type { TourPackage } from "@/lib/content/tourPackages/types";

import { COLLECTIONS } from "@/lib/content/tourPackages/collections";
import { createPackage } from "@/lib/content/tourPackages/utils";

export const fourDays: TourPackage[] = [
  createPackage(COLLECTIONS.FOUR_DAYS_THREE_NIGHTS, {
    title: "Lombok 4 Days 3 Nights Gili Trawangan & Gili Nanggu",
    region: "lombok",
    featured: true,
    category: "باكيجات سياحة لومبوك",
    duration: "4 أيام و3 ليال",
    images: [HERO.lombok, DESTINATIONS.gili, GALLERY.giliMeno, GALLERY.tourSnorkeling],

    summary:
      "A 4-day 3-night Lombok tour package combining Sasak cultural tours, the beauty of Kuta Mandalika Beach, Bukit Merese, Gili Nanggu, Gili Sudak, Gili Kedis, and Gili Trawangan. Suitable for couples, families, and groups who want to enjoy a complete Lombok experience with private tours, island hopping, and Lombok's signature cuisine.",

    highlights: [
      "Gili Trawangan",
      "Gili Nanggu",
      "Gili Sudak",
      "Gili Kedis",
      "Pantai Kuta Mandalika",
      "Bukit Merese",
      "Desa Adat Sade",
      "Desa Tenun Sukarara",
      "Private Island Hopping",
      "Kuliner Khas Lombok",
    ],

    itinerary: [
      "اليوم 1 - Penjemputan di Bandara Internasional Lombok.",
      "اليوم 1 - Mengunjungi Desa Tenun Sukarara dan melihat proses pembuatan kain songket khas Lombok.",
      "اليوم 1 - Mengunjungi Desa Adat Sade untuk mengenal kehidupan dan budaya Suku Sasak.",
      "اليوم 1 - Makan siang di kawasan Kuta Mandalika.",
      "اليوم 1 - Menikmati keindahan Pantai Kuta Mandalika.",
      "اليوم 1 - Mengunjungi Pantai Tanjung Aan dengan pasir putih khas Lombok.",
      "اليوم 1 - Menikmati panorama sunset dari Bukit Merese.",
      "اليوم 1 - Makan malam khas Ayam Taliwang Lombok.",
      "اليوم 1 - Check-in hotel dan acara bebas.",

      "اليوم 2 - Sarapan pagi di hotel.",
      "اليوم 2 - Menuju Pelabuhan Tawun untuk memulai island hopping.",
      "اليوم 2 - Menikmati keindahan Gili Nanggu dan aktivitas snorkeling.",
      "اليوم 2 - Makan siang seafood di tepi pantai.",
      "اليوم 2 - Mengunjungi Gili Tangkong.",
      "اليوم 2 - Mengunjungi Gili Sudak.",
      "اليوم 2 - Mengunjungi Gili Kedis yang dikenal sebagai pulau romantis di Lombok.",
      "اليوم 2 - Kembali ke Pelabuhan Tawun.",
      "اليوم 2 - Makan malam di restoran dengan live music.",
      "اليوم 2 - Kembali ke hotel dan acara bebas.",

      "اليوم 3 - Sarapan pagi di hotel.",
      "اليوم 3 - Menuju Pelabuhan Teluk Nara.",
      "اليوم 3 - Menyeberang ke Gili Trawangan menggunakan private speedboat.",
      "اليوم 3 - Menikmati suasana Gili Trawangan dan acara bebas.",
      "اليوم 3 - Opsional snorkeling, bersepeda, atau berkeliling menggunakan cidomo (biaya pribadi).",
      "اليوم 3 - Makan siang di restoran tepi pantai Gili Trawangan.",
      "اليوم 3 - Kembali ke Pulau Lombok pada sore hari.",
      "اليوم 3 - Mengunjungi galeri mutiara khas Lombok.",
      "اليوم 3 - Berbelanja oleh-oleh khas Lombok.",
      "اليوم 3 - Makan malam di restoran dengan live music.",
      "اليوم 3 - Kembali ke hotel.",

      "اليوم 4 - Sarapan pagi di hotel.",
      "اليوم 4 - City tour Kota Mataram dan sekitarnya.",
      "اليوم 4 - Waktu bebas sebelum keberangkatan.",
      "اليوم 4 - Transfer menuju Bandara Internasional Lombok.",
      "اليوم 4 - Tour selesai.",
    ],

    includes: [
      "Hotel 3 malam sesuai pilihan",
      "Transportasi wisata selama program",
      "Driver merangkap guide untuk 2–6 peserta",
      "Guide berlisensi HPI untuk grup besar",
      "Sarapan pagi di hotel",
      "Makan siang sesuai program",
      "Makan malam sesuai program",
      "Private speedboat PP Gili Trawangan",
      "Tiket masuk objek wisata",
      "Donasi wisata",
      "Air mineral selama tour",
      "Dokumentasi perjalanan (tentatif)",
      "Penjemputan dan pengantaran bandara",
    ],

    excludes: [
      "Tiket pesawat",
      "Sewa sepeda di Gili Trawangan",
      "Cidomo di Gili Trawangan",
      "Snorkeling di Gili Trawangan",
      "Pengeluaran pribadi",
      "Laundry hotel",
      "Tip guide dan crew",
      "Makan di luar program",
    ],
  }),
];
