import { HERO, DESTINATIONS, GALLERY } from "@/assets/images";

import type { TourPackage } from "@/lib/content/tourPackages/types";

import { COLLECTIONS } from "@/lib/content/tourPackages/collections";
import { createPackage } from "@/lib/content/tourPackages/utils";

export const fourDays: TourPackage[] = [
  createPackage(COLLECTIONS.FOUR_DAYS_THREE_NIGHTS, {
    title: "Lombok 4 Days 3 Nights Gili Trawangan & Gili Nanggu",
    region: "lombok",
    featured: true,
    category: "Lombok Tour Packages",
    duration: "4 Days 3 Nights",
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
      "Hari 1 - Penjemputan di Bandara Internasional Lombok.",
      "Hari 1 - Mengunjungi Desa Tenun Sukarara dan melihat proses pembuatan kain songket khas Lombok.",
      "Hari 1 - Mengunjungi Desa Adat Sade untuk mengenal kehidupan dan budaya Suku Sasak.",
      "Hari 1 - Makan siang di kawasan Kuta Mandalika.",
      "Hari 1 - Menikmati keindahan Pantai Kuta Mandalika.",
      "Hari 1 - Mengunjungi Pantai Tanjung Aan dengan pasir putih khas Lombok.",
      "Hari 1 - Menikmati panorama sunset dari Bukit Merese.",
      "Hari 1 - Makan malam khas Ayam Taliwang Lombok.",
      "Hari 1 - Check-in hotel dan acara bebas.",

      "Hari 2 - Sarapan pagi di hotel.",
      "Hari 2 - Menuju Pelabuhan Tawun untuk memulai island hopping.",
      "Hari 2 - Menikmati keindahan Gili Nanggu dan aktivitas snorkeling.",
      "Hari 2 - Makan siang seafood di tepi pantai.",
      "Hari 2 - Mengunjungi Gili Tangkong.",
      "Hari 2 - Mengunjungi Gili Sudak.",
      "Hari 2 - Mengunjungi Gili Kedis yang dikenal sebagai pulau romantis di Lombok.",
      "Hari 2 - Kembali ke Pelabuhan Tawun.",
      "Hari 2 - Makan malam di restoran dengan live music.",
      "Hari 2 - Kembali ke hotel dan acara bebas.",

      "Hari 3 - Sarapan pagi di hotel.",
      "Hari 3 - Menuju Pelabuhan Teluk Nara.",
      "Hari 3 - Menyeberang ke Gili Trawangan menggunakan private speedboat.",
      "Hari 3 - Menikmati suasana Gili Trawangan dan acara bebas.",
      "Hari 3 - Opsional snorkeling, bersepeda, atau berkeliling menggunakan cidomo (biaya pribadi).",
      "Hari 3 - Makan siang di restoran tepi pantai Gili Trawangan.",
      "Hari 3 - Kembali ke Pulau Lombok pada sore hari.",
      "Hari 3 - Mengunjungi galeri mutiara khas Lombok.",
      "Hari 3 - Berbelanja oleh-oleh khas Lombok.",
      "Hari 3 - Makan malam di restoran dengan live music.",
      "Hari 3 - Kembali ke hotel.",

      "Hari 4 - Sarapan pagi di hotel.",
      "Hari 4 - City tour Kota Mataram dan sekitarnya.",
      "Hari 4 - Waktu bebas sebelum keberangkatan.",
      "Hari 4 - Transfer menuju Bandara Internasional Lombok.",
      "Hari 4 - Tour selesai.",
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
