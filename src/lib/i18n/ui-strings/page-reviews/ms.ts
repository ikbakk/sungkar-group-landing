import type { UIStrings } from "../types";

const strings = {
  reviews: {
    seeOnGoogleMaps: "Lihat di Google Maps",
    seeAllReviews: "Lihat semua ulasan di Google",
    galleryTitle: "Galeri Pengalaman Pengembara",
    totalOnGoogle: "{n} ulasan di Google",
    googleReview: "Ulasan Google",
    ratingOutOfFive: "{rating} daripada 5 bintang",
    galleryPhotoCaptions: [
      "Momen perjalanan keluarga",
      "Eksplorasi pantai dan pulau",
      "Bantuan pemandu tempatan",
      "Perjalanan kumpulan dan komuniti",
    ],
  },
  gallery: {
    title: "Galeri",
    photos: "Gambar Perjalanan",
    previousImage: "Imej sebelumnya",
    nextImage: "Imej seterusnya",
  },
  cta: {
    book: "Tempah Sekarang",
    startJourney: "Sedia Memulakan Perjalanan?",
    startPlanning: "Mula Merancang Perjalanan Anda",
    consultTrip: "Rundingkan Perjalanan",
    seePackages: "Lihat Pakej",
  },
} satisfies Pick<UIStrings, "reviews" | "gallery" | "cta">;

export default strings;
