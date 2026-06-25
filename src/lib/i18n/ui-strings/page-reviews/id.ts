import type { UIStrings } from "../types";

const strings = {
  reviews: {
    seeOnGoogleMaps: "Lihat di Google Maps",
    seeAllReviews: "Lihat semua ulasan di Google",
    galleryTitle: "Galeri Pengalaman Wisatawan",
    totalOnGoogle: "{n} ulasan di Google",
    googleReview: "Ulasan Google",
    ratingOutOfFive: "{rating} dari 5 bintang",
    galleryPhotoCaptions: [
      "Momen perjalanan keluarga",
      "Eksplorasi pantai dan pulau",
      "Pendampingan guide lokal",
      "Perjalanan kelompok dan komunitas",
    ],
  },
  gallery: {
    title: "Galeri",
    photos: "Foto Perjalanan",
    previousImage: "Gambar sebelumnya",
    nextImage: "Gambar berikutnya",
  },
  cta: {
    book: "Pesan",
    startJourney: "Siap Memulai Perjalanan?",
    startPlanning: "Mulai Rencanakan Perjalanan Anda",
    consultTrip: "Konsultasi Trip",
    seePackages: "Lihat Paket",
  },
} satisfies Pick<UIStrings, "reviews" | "gallery" | "cta">;

export default strings;
