export const reviewsPageContent = {
  hero: {
    eyebrow: "Ulasan",
    title: "Cerita dan pengalaman wisatawan bersama Sungkar Group",
    description:
      "Ulasan pelanggan membantu menggambarkan kualitas layanan, pengalaman perjalanan, dan alasan banyak wisatawan memilih Sungkar Group saat menjelajahi Lombok.",
  },

  stats: {
    title: "Kepercayaan yang Dibangun dari Pengalaman Nyata",
    description:
      "Setiap ulasan berasal dari pengalaman wisatawan yang pernah menggunakan layanan Sungkar Group di Lombok dan sekitarnya.",
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

  trust: {
    title: "Mengapa Ulasan Penting?",
    description:
      "Ulasan membantu calon wisatawan memahami pengalaman nyata pelanggan sebelumnya sebelum memutuskan perjalanan mereka.",
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

export interface Review {
  author: string;
  source: "Google";
  rating: number;
  date?: string;
  text: string;
}

export const reviewStats = {
  rating: 4.9,
  totalReviews: 140,
};

export const reviews: Review[] = [
  {
    author: "Nordiana Ahyad",
    source: "Google",
    rating: 5,
    text: "Pelayanan sangat baik dan perjalanan berjalan lancar. Tim sangat membantu sejak proses pemesanan hingga perjalanan selesai.",
  },

  {
    author: "Dr Syuhada Dan Adnan",
    source: "Google",
    rating: 5,
    text: "Sangat direkomendasikan. Guide ramah, jadwal tertata dengan baik, dan pengalaman selama di Lombok sangat menyenangkan.",
  },

  {
    author: "Izza Nimy",
    source: "Google",
    rating: 5,
    text: "Salah satu pengalaman terbaik selama liburan di Lombok. Tim profesional dan selalu siap membantu.",
  },

  {
    author: "Siti Nurhaliza",
    source: "Google",
    rating: 5,
    text: "Perjalanan keluarga kami berjalan sangat nyaman. Anak-anak juga menikmati seluruh rangkaian wisata.",
  },

  {
    author: "Ahmad Rizki",
    source: "Google",
    rating: 5,
    text: "Kendaraan bersih, komunikasi mudah, dan itinerary dapat menyesuaikan kebutuhan rombongan.",
  },

  {
    author: "Yusuf Hidayat",
    source: "Google",
    rating: 5,
    text: "Terima kasih kepada tim Sungkar Group yang telah membantu perjalanan kami dari awal hingga akhir dengan sangat baik.",
  },
];
