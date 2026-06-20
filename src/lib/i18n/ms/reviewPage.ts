export type { Review, MarqueeReview } from "@/lib/content/reviews/reviews-data";
export {
  reviews,
  reviewStats,
  toMarqueeReviews,
} from "@/lib/content/reviews/reviews-data";

export const reviewsPageContent = {
  hero: {
    eyebrow: "Ulasan",
    title: "Apa Kata Mereka Tentang Sungkar Group?",
    description:
      "Ulasan sebenar daripada pengembara yang telah merasai perkhidmatan kami secara langsung. Setiap cerita mencerminkan pengalaman sebenar — tidak diedit, tidak diterjemah.",
  },

  insights: {
    title: "Apa yang Paling Kerap Disebut oleh Pengembara",

    items: [
      {
        title: "Komunikasi Pantas",
        description:
          "Ramai tetamu menghargai respons pantas sama ada sebelum atau semasa perjalanan.",
      },

      {
        title: "Pemandu Mesra",
        description:
          "Rakan perjalanan yang komunikatif dan memahami destinasi menjadi antara sorotan yang paling kerap disebut.",
      },

      {
        title: "Itinerari Fleksibel",
        description:
          "Perjalanan boleh disesuaikan mengikut keadaan cuaca, keutamaan tetamu, dan keperluan kumpulan.",
      },

      {
        title: "Pengalaman Tempatan",
        description:
          "Pengembara menikmati gabungan destinasi popular dan cadangan tempatan yang lebih autentik.",
      },

      {
        title: "Pengangkutan Selesa",
        description:
          "Kebersihan kenderaan dan keselesaan sepanjang perjalanan sering menjadi titik positif dalam ulasan.",
      },

      {
        title: "Perkhidmatan Teratur",
        description:
          "Dari penjemputan hingga akhir perjalanan, tetamu merasakan proses berjalan dengan lebih kemas dan terarah.",
      },
    ],
  },

  gallery: {
    title: "Momen Perjalanan Bersama Pengembara",
    description:
      "Beberapa dokumentasi perjalanan yang menggambarkan suasana perkhidmatan dan pengalaman pelancongan bersama Sungkar Group.",
  },

  cta: {
    title: "Sedia Merancang Perjalanan Anda?",
    description:
      "Bincangkan keperluan perjalanan anda bersama pasukan kami dan temui itinerari yang sesuai dengan gaya perjalanan, tempoh, dan jumlah peserta.",
    primaryButton: {
      label: "Hubungi Kami",
      href: "/kontak",
    },
  },
} as const;
