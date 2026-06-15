import HeroLombok from "@/assets/images/hero-lombok.webp";
import DestinationGili from "@/assets/images/destination-gili.webp";
import GiliMeno from "@/assets/images/gili-meno.webp";
import KutaBeach from "@/assets/images/kuta-beach.webp";
import TourSnorkeling from "@/assets/images/tour-snorkeling.webp";
import DestinationLombok from "@/assets/images/destination-lombok.webp";

import type { TourPackage } from "../types";

import { COLLECTIONS } from "../collections";
import { createPackage } from "../utils";

export const threeDays: TourPackage[] = [
  createPackage(
    COLLECTIONS.THREE_DAYS_TWO_NIGHTS,
    createPackage(COLLECTIONS.THREE_DAYS_TWO_NIGHTS, {
      title: "Paket Wisata Lombok 3 Hari 2 Malam Gili Trawangan & Mandalika",
      region: "lombok",
      category: "Paket Wisata Lombok",
      duration: "3 Hari 2 Malam",
      images: [HeroLombok, DestinationGili, KutaBeach, GiliMeno],

      summary:
        "Paket wisata Lombok 3 hari 2 malam yang menggabungkan keindahan Pantai Kuta Mandalika, Pantai Tanjung Aan, Bukit Merese, budaya Suku Sasak, serta pengalaman berlibur di Gili Trawangan. Cocok untuk pasangan, keluarga, maupun rombongan yang ingin menikmati wisata pantai, budaya, kuliner, dan island escape dalam satu perjalanan yang nyaman dan private.",

      highlights: [
        "Gili Trawangan",
        "Pantai Kuta Mandalika",
        "Pantai Tanjung Aan",
        "Bukit Merese",
        "Desa Adat Sade",
        "Desa Tenun Sukarara",
        "Private Speedboat",
        "Ayam Taliwang Lombok",
        "Wisata Oleh-Oleh Lombok",
      ],

      itinerary: [
        "Hari 1 - Penjemputan di Bandara Internasional Lombok.",
        "Hari 1 - Mengunjungi Desa Tenun Sukarara dan melihat proses pembuatan kain songket khas Lombok.",
        "Hari 1 - Berfoto menggunakan pakaian adat Sasak.",
        "Hari 1 - Mengunjungi Desa Adat Sade untuk mengenal kehidupan dan budaya masyarakat Sasak.",
        "Hari 1 - Makan siang di kawasan Kuta Mandalika.",
        "Hari 1 - Menikmati keindahan Pantai Kuta Mandalika.",
        "Hari 1 - Mengunjungi Pantai Tanjung Aan dengan pasir putih khas Lombok.",
        "Hari 1 - Menikmati panorama perbukitan dan garis pantai dari Bukit Merese.",
        "Hari 1 - Makan malam khas Ayam Taliwang.",
        "Hari 1 - Check-in hotel dan acara bebas.",

        "Hari 2 - Sarapan pagi di hotel.",
        "Hari 2 - Menuju pelabuhan private speedboat.",
        "Hari 2 - Menyeberang ke Gili Trawangan menggunakan private speedboat.",
        "Hari 2 - Menikmati suasana pantai dan aktivitas bebas di Gili Trawangan.",
        "Hari 2 - Opsional snorkeling, bersepeda, atau berkeliling menggunakan cidomo (biaya pribadi).",
        "Hari 2 - Makan siang di restoran tepi pantai Gili Trawangan.",
        "Hari 2 - Menikmati waktu santai dan eksplorasi Gili Trawangan.",
        "Hari 2 - Kembali ke Pulau Lombok pada sore hari.",
        "Hari 2 - Berbelanja oleh-oleh khas Lombok.",
        "Hari 2 - Makan malam di restoran dengan live music.",
        "Hari 2 - Kembali ke hotel dan acara bebas.",

        "Hari 3 - Sarapan pagi di hotel.",
        "Hari 3 - City tour Kota Mataram dan sekitarnya.",
        "Hari 3 - Waktu bebas sebelum keberangkatan.",
        "Hari 3 - Transfer menuju Bandara Internasional Lombok.",
        "Hari 3 - Tour selesai.",
      ],

      includes: [
        "Hotel 2 malam sesuai pilihan",
        "Transportasi wisata selama program",
        "Driver merangkap guide untuk 2–6 peserta",
        "Guide berlisensi HPI untuk grup besar",
        "Sarapan pagi 2x",
        "Makan siang 2x",
        "Makan malam 2x",
        "Private speedboat PP Gili Trawangan",
        "Tiket masuk objek wisata",
        "Donasi wisata",
        "Air mineral selama tour",
        "Dokumentasi perjalanan (tentatif)",
        "Penjemputan dan pengantaran bandara",
      ],

      excludes: [
        "Tiket pesawat PP",
        "Snorkeling di Gili Trawangan",
        "Sewa sepeda di Gili Trawangan",
        "Cidomo di Gili Trawangan",
        "Pengeluaran pribadi",
        "Laundry hotel",
        "Tip guide dan crew",
        "Makan di luar program",
      ],
    }),
  ),

  createPackage(
    COLLECTIONS.THREE_DAYS_TWO_NIGHTS,
    createPackage(COLLECTIONS.THREE_DAYS_TWO_NIGHTS, {
      title: "Paket Wisata Lombok 3 Hari 2 Malam Snorkeling 3 Gili & Mandalika",
      region: "lombok",
      category: "Paket Wisata Lombok",
      duration: "3 Hari 2 Malam",
      images: [HeroLombok, TourSnorkeling, DestinationGili, GiliMeno],

      summary:
        "Paket wisata Lombok 3 hari 2 malam yang menggabungkan keindahan Pantai Kuta Mandalika, Pantai Tanjung Aan, Bukit Merese, budaya Suku Sasak, serta pengalaman snorkeling di perairan 3 Gili yang terkenal dengan terumbu karang, patung bawah laut, dan habitat penyu. Cocok untuk pasangan, keluarga, maupun rombongan yang ingin menikmati wisata darat dan bahari Lombok dalam satu perjalanan yang lengkap.",

      highlights: [
        "Snorkeling 3 Gili",
        "Gili Trawangan",
        "Turtle Point Gili Meno",
        "Romantic Statue Gili Meno",
        "Blue Coral Gili Meno",
        "Garden Fish Gili Air",
        "Pantai Kuta Mandalika",
        "Pantai Tanjung Aan",
        "Bukit Merese",
        "Desa Adat Sade",
        "Desa Tenun Sukarara",
        "Private Glass Bottom Boat",
      ],

      itinerary: [
        "Hari 1 - Penjemputan di Bandara Internasional Lombok.",
        "Hari 1 - Mengunjungi Desa Tenun Sukarara dan melihat proses pembuatan kain songket khas Lombok.",
        "Hari 1 - Berfoto menggunakan pakaian adat Sasak.",
        "Hari 1 - Mengunjungi Desa Adat Sade untuk mengenal budaya dan kehidupan masyarakat Sasak.",
        "Hari 1 - Makan siang di kawasan Kuta Mandalika.",
        "Hari 1 - Menikmati keindahan Pantai Kuta Mandalika.",
        "Hari 1 - Mengunjungi Pantai Tanjung Aan dengan pasir putih khas Lombok.",
        "Hari 1 - Menikmati panorama perbukitan dan garis pantai dari Bukit Merese.",
        "Hari 1 - Makan malam khas Ayam Taliwang Lombok.",
        "Hari 1 - Check-in hotel dan acara bebas.",

        "Hari 2 - Sarapan pagi di hotel.",
        "Hari 2 - Menuju pelabuhan keberangkatan snorkeling trip 3 Gili.",
        "Hari 2 - Snorkeling di Garden Fish Gili Air.",
        "Hari 2 - Snorkeling di Turtle Point Gili Meno untuk melihat penyu laut.",
        "Hari 2 - Mengunjungi spot Blue Coral Gili Meno.",
        "Hari 2 - Snorkeling dan berfoto di spot Underwater Romantic Statue Gili Meno.",
        "Hari 2 - Makan siang di restoran tepi pantai Gili Trawangan.",
        "Hari 2 - Waktu bebas menikmati suasana Gili Trawangan.",
        "Hari 2 - Opsional bersepeda mengelilingi pulau (biaya pribadi).",
        "Hari 2 - Kembali ke Pulau Lombok.",
        "Hari 2 - Berbelanja oleh-oleh khas Lombok.",
        "Hari 2 - Makan malam di restoran dengan live music.",
        "Hari 2 - Kembali ke hotel dan acara bebas.",

        "Hari 3 - Sarapan pagi di hotel.",
        "Hari 3 - Menikmati fasilitas hotel atau city tour Kota Mataram sesuai jadwal penerbangan.",
        "Hari 3 - Mengunjungi kawasan kota tua dan destinasi bersejarah di Pulau Lombok.",
        "Hari 3 - Menikmati makan siang khas Lombok dengan menu Nasi Puyung.",
        "Hari 3 - Transfer menuju Bandara Internasional Lombok atau hotel bagi peserta yang memperpanjang masa menginap.",
        "Hari 3 - Tour selesai.",
      ],

      includes: [
        "Hotel 2 malam sesuai pilihan",
        "Transportasi wisata selama program",
        "Driver merangkap guide untuk 2–6 peserta",
        "Guide berlisensi HPI untuk grup besar",
        "Sarapan pagi 2x",
        "Makan siang 2x",
        "Makan malam 2x",
        "Private snorkeling trip 3 Gili",
        "Glass bottom boat sesuai program",
        "Tiket masuk objek wisata",
        "Donasi wisata",
        "Air mineral selama tour",
        "Dokumentasi perjalanan (tentatif)",
        "Penjemputan dan pengantaran bandara",
      ],

      excludes: [
        "Tiket pesawat PP",
        "Speedboat reguler di Gili Trawangan",
        "Sewa sepeda di Gili Trawangan",
        "Cidomo di Gili Trawangan",
        "Pengeluaran pribadi",
        "Laundry hotel",
        "Tip guide dan crew",
        "Aktivitas di luar program",
      ],
    }),
  ),

  createPackage(COLLECTIONS.THREE_DAYS_TWO_NIGHTS, {
    title: "Paket Wisata Lombok 3 Hari 2 Malam Pantai Pink & Mandalika",
    region: "lombok",
    category: "Paket Wisata Lombok",
    duration: "3 Hari 2 Malam",
    images: [HeroLombok, DestinationLombok, TourSnorkeling, KutaBeach],

    summary:
      "Paket wisata Lombok 3 hari 2 malam yang menggabungkan keindahan kawasan Mandalika dengan petualangan bahari ke Pantai Pink Lombok. Jelajahi Desa Adat Sasak, Pantai Kuta Mandalika, Bukit Merese, Sirkuit Mandalika, Pulau Pasir, Gili Petelu, Pantai Pink, serta menikmati snorkeling di perairan Lombok Timur yang terkenal dengan terumbu karangnya yang indah.",

    highlights: [
      "Pantai Pink Lombok",
      "Pulau Pasir",
      "Gili Petelu",
      "Pantai Gambir",
      "Bukit Tangsi",
      "Pantai Kuta Mandalika",
      "Pantai Tanjung Aan",
      "Bukit Merese",
      "Bukit Seger",
      "Sirkuit Mandalika",
      "Desa Adat Sade",
      "Desa Tenun Sukarara",
    ],

    itinerary: [
      "Hari 1 - Penjemputan di Bandara Internasional Lombok.",
      "Hari 1 - Mengunjungi Desa Tenun Sukarara dan melihat proses pembuatan kain songket khas Lombok.",
      "Hari 1 - Berfoto menggunakan pakaian adat Sasak.",
      "Hari 1 - Mengunjungi Desa Adat Sade untuk mengenal budaya dan kehidupan masyarakat Sasak.",
      "Hari 1 - Makan siang di kawasan Pantai Kuta Mandalika.",
      "Hari 1 - Menikmati keindahan Pantai Kuta Mandalika.",
      "Hari 1 - Mengunjungi Bukit Seger dan menikmati panorama pesisir selatan Lombok.",
      "Hari 1 - Singgah di kawasan Sirkuit Internasional Mandalika.",
      "Hari 1 - Mengunjungi Pantai Tanjung Aan dengan pasir putih khas seperti butiran merica.",
      "Hari 1 - Menikmati panorama sunset dari Bukit Merese.",
      "Hari 1 - Makan malam khas Ayam Taliwang Lombok.",
      "Hari 1 - Check-in hotel dan acara bebas.",

      "Hari 2 - Sarapan pagi di hotel.",
      "Hari 2 - Menuju Pelabuhan Tanjung Luar.",
      "Hari 2 - Menyeberang menggunakan private boat menuju Pulau Pasir.",
      "Hari 2 - Menikmati keindahan Pulau Pasir yang hanya muncul saat air laut surut.",
      "Hari 2 - Snorkeling di perairan Gili Petelu yang terkenal dengan terumbu karang dan ikan tropisnya.",
      "Hari 2 - Snorkeling di Pantai Gambir dengan air laut yang jernih dan tenang.",
      "Hari 2 - Makan siang seafood di kawasan Pantai Pink.",
      "Hari 2 - Mengunjungi Bukit Tangsi dan menikmati panorama Pantai Pink dari ketinggian.",
      "Hari 2 - Menikmati keindahan Pantai Pink 2 yang masih alami dan relatif sepi wisatawan.",
      "Hari 2 - Kembali menuju Pelabuhan Tanjung Luar.",
      "Hari 2 - Makan malam di restoran dengan live music.",
      "Hari 2 - Kembali ke hotel dan acara bebas.",

      "Hari 3 - Sarapan pagi di hotel.",
      "Hari 3 - Menikmati fasilitas hotel atau city tour Kota Mataram sesuai jadwal penerbangan.",
      "Hari 3 - Mengunjungi kawasan kota tua dan pusat aktivitas bersejarah di Pulau Lombok.",
      "Hari 3 - Waktu bebas sebelum keberangkatan.",
      "Hari 3 - Transfer menuju Bandara Internasional Lombok.",
      "Hari 3 - Tour selesai.",
    ],

    includes: [
      "Hotel 2 malam sesuai pilihan",
      "Transportasi wisata selama program",
      "Driver merangkap guide untuk 2–6 peserta",
      "Guide berlisensi HPI untuk grup besar",
      "Sarapan pagi 2x",
      "Makan siang 2x",
      "Makan malam 2x",
      "Private boat trip Pantai Pink",
      "Tiket masuk objek wisata",
      "Donasi wisata",
      "Air mineral selama tour",
      "Dokumentasi perjalanan (tentatif)",
      "Penjemputan dan pengantaran bandara",
    ],

    excludes: [
      "Tiket pesawat PP",
      "Pengeluaran pribadi",
      "Tip guide dan crew",
      "Asuransi perjalanan",
      "Aktivitas di luar program",
    ],
  }),

  createPackage(COLLECTIONS.THREE_DAYS_TWO_NIGHTS, {
    title: "Paket Wisata Lombok 3 Hari 2 Malam Gili Nanggu & Mandalika",
    region: "lombok",
    category: "Paket Wisata Lombok",
    duration: "3 Hari 2 Malam",
    images: [HeroLombok, DestinationGili, TourSnorkeling],

    summary:
      "Paket wisata Lombok 3 hari 2 malam yang menggabungkan keindahan Pantai Kuta Mandalika, Pantai Tanjung Aan, budaya Suku Sasak, serta island hopping ke Gili Nanggu, Gili Sudak, Gili Tangkong, dan Gili Kedis. Nikmati pengalaman snorkeling di perairan jernih Lombok Barat, wisata pantai eksotis, serta kuliner khas Lombok dalam perjalanan private yang nyaman dan fleksibel.",

    highlights: [
      "Gili Nanggu",
      "Gili Sudak",
      "Gili Kedis",
      "Gili Tangkong",
      "Snorkeling Gili Nanggu",
      "Pantai Kuta Mandalika",
      "Pantai Tanjung Aan",
      "Bukit Merese",
      "Desa Adat Sade",
      "Desa Tenun Sukarara",
      "Private Island Hopping",
      "Seafood Lunch",
    ],

    itinerary: [
      "Hari 1 - Penjemputan di Bandara Internasional Lombok.",
      "Hari 1 - Mengunjungi Desa Tenun Sukarara dan melihat proses pembuatan kain songket khas Lombok.",
      "Hari 1 - Berfoto menggunakan pakaian adat Sasak.",
      "Hari 1 - Mengunjungi Desa Adat Sade untuk mengenal budaya dan kehidupan masyarakat Sasak.",
      "Hari 1 - Makan siang di kawasan Kuta Mandalika.",
      "Hari 1 - Menikmati keindahan Pantai Kuta Mandalika.",
      "Hari 1 - Mengunjungi Pantai Tanjung Aan dengan pasir putih khas seperti butiran merica.",
      "Hari 1 - Menikmati panorama pesisir selatan Lombok dari Bukit Merese.",
      "Hari 1 - Makan malam khas Ayam Taliwang Lombok.",
      "Hari 1 - Check-in hotel dan acara bebas.",

      "Hari 2 - Sarapan pagi di hotel.",
      "Hari 2 - Menuju Pelabuhan Tawun untuk memulai island hopping.",
      "Hari 2 - Menyeberang menuju Gili Nanggu dan menikmati suasana pulau tropis yang tenang.",
      "Hari 2 - Snorkeling di perairan Gili Nanggu dengan terumbu karang dan ikan tropis yang beragam.",
      "Hari 2 - Makan siang seafood di tepi pantai.",
      "Hari 2 - Mengunjungi Gili Tangkong.",
      "Hari 2 - Mengunjungi Gili Sudak dan menikmati panorama pantai yang masih alami.",
      "Hari 2 - Mengunjungi Gili Kedis yang terkenal sebagai salah satu pulau kecil paling eksotis di Lombok.",
      "Hari 2 - Kembali menuju Pelabuhan Tawun.",
      "Hari 2 - Makan malam di restoran dengan live music.",
      "Hari 2 - Kembali ke hotel dan acara bebas.",

      "Hari 3 - Sarapan pagi di hotel.",
      "Hari 3 - City tour Kota Mataram dan kawasan bersejarah di Pulau Lombok.",
      "Hari 3 - Waktu bebas sebelum keberangkatan.",
      "Hari 3 - Transfer menuju Bandara Internasional Lombok.",
      "Hari 3 - Tour selesai.",
    ],

    includes: [
      "Hotel 2 malam sesuai pilihan",
      "Transportasi wisata selama program",
      "Driver merangkap guide untuk 2–6 peserta",
      "Guide berlisensi HPI untuk grup besar",
      "Sarapan pagi 2x",
      "Makan siang 2x",
      "Makan malam 2x",
      "Private boat trip Gili Nanggu",
      "Tiket masuk objek wisata",
      "Donasi wisata",
      "Air mineral selama tour",
      "Dokumentasi perjalanan (tentatif)",
      "Penjemputan dan pengantaran bandara",
    ],

    excludes: [
      "Tiket pesawat PP",
      "Pengeluaran pribadi",
      "Asuransi perjalanan",
      "Tip guide dan crew",
      "Aktivitas di luar program",
    ],
  }),
];
