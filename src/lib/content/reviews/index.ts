export type { Review, MarqueeReview } from "./reviews-data";
export { reviews, reviewStats, toMarqueeReviews } from "./reviews-data";

export const reviewsPageContent = {
  hero: {
    eyebrow: "Ulasan",
    title: "Apa Kata Mereka Tentang Sungkar Group?",
    description:
      "Ulasan asli dari wisatawan yang telah merasakan langsung layanan kami. Setiap cerita mencerminkan pengalaman nyata — tanpa diedit, tanpa diterjemahkan.",
  },

  insights: {
    title: "Hal yang Paling Sering Disebut Wisatawan",

    items: [
      {
        title: "Komunikasi yang Cepat",
        description:
          "Banyak tamu mengapresiasi respon yang cepat sebelum maupun selama perjalanan berlangsung.",
      },

      {
        title: "Guide yang Ramah",
        description:
          "Pendamping perjalanan yang komunikatif dan memahami destinasi menjadi salah satu hal yang paling sering disebut.",
      },

      {
        title: "Itinerary Fleksibel",
        description:
          "Perjalanan dapat menyesuaikan kondisi cuaca, preferensi tamu, dan kebutuhan rombongan.",
      },

      {
        title: "Pengalaman Lokal",
        description:
          "Wisatawan menikmati kombinasi destinasi populer dan rekomendasi lokal yang lebih autentik.",
      },

      {
        title: "Transportasi Nyaman",
        description:
          "Kebersihan kendaraan serta kenyamanan selama perjalanan sering menjadi poin positif dalam ulasan.",
      },

      {
        title: "Pelayanan Terorganisir",
        description:
          "Mulai dari penjemputan hingga akhir perjalanan, tamu merasa proses berjalan dengan lebih rapi dan terarah.",
      },
    ],
  },

  gallery: {
    title: "Momen Perjalanan Bersama Wisatawan",
    description:
      "Beberapa dokumentasi perjalanan yang menggambarkan suasana layanan dan pengalaman wisata bersama Sungkar Group.",
  },

  cta: {
    title: "Siap Merencanakan Perjalanan Anda?",
    description:
      "Diskusikan kebutuhan perjalanan Anda bersama tim kami dan temukan itinerary yang sesuai dengan gaya perjalanan, durasi, dan jumlah peserta.",
    primaryButton: {
      label: "Hubungi Kami",
      href: "/kontak",
    },
  },
} as const;
