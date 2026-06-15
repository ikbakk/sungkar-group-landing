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

export interface Review {
  author: string;
  source: "Google";
  rating: number;
  date: string;
  text: string;
  initials: string;
}

function deriveInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export interface MarqueeReview {
  quote: string;
  initials: string;
  name: string;
  role: string;
  rating: number;
}

export function toMarqueeReviews(): MarqueeReview[] {
  return reviews.map((r) => ({
    quote: r.text,
    initials: r.initials,
    name: r.author,
    role: r.source,
    rating: r.rating,
  }));
}

export const reviewStats = {
  rating: 5,
  totalReviews: 146,
};

export const reviews: Review[] = [
  {
    author: "Hilkia Tiento",
    source: "Google",
    rating: 5,
    date: "24 Maret 2026",
    initials: "HT",
    text: "Pengalaman tour yg menyenangkan dan berkesan dgn Sungkar Group, driver #Mas Imam sangat membantu kelancaran tour bahkan merangkap fotographer. Menu makan dan restoran yg dituju mantaff, wisata alam Lombok memang luar biasa👍👍👍👍",
  },

  {
    author: "lilis susanti",
    source: "Google",
    rating: 5,
    date: "23 Maret 2026",
    initials: "LS",
    text: "Nice trip to Lombok. Friendly guide. Thank you.",
  },

  {
    author: "Luna aulia",
    source: "Google",
    rating: 5,
    date: "25 Februari 2026",
    initials: "LA",
    text: "Bagus pelayanannya ramah. Tepat waktu dan kekeluargaan",
  },

  {
    author: "azhar mohamed",
    source: "Google",
    rating: 5,
    date: "19 Februari 2026",
    initials: "AM",
    text: "Just returned from Lombok and I'm still in awe! The nature is raw and untouched, from the base of Mt. Rinjani to the pristine beaches. But what really stole my heart was the incredible hospitality of the Sasak people and the spicy, delicious food (Ayam Taliwang is a must!). A perfect mix of culture and relaxation. Highly recommend adding Lombok to your bucket list with Sungkar Group Indonesia",
  },

  {
    author: "NORDIANA AHYAD",
    source: "Google",
    rating: 5,
    date: "15 Februari 2026",
    initials: "NA",
    text: "Excellent service from the tourist guide. Very friendly, knowledgeable, and well-organized. The trip was smooth and enjoyable. Highly recommended!",
  },

  {
    author: "izza NIMY",
    source: "Google",
    rating: 5,
    date: "19 Januari 2026",
    initials: "IN",
    text: "Best experience in Lombok 3 days 2 night🧡",
  },

  {
    author: "Dr Syuhada Dan Adnan",
    source: "Google",
    rating: 5,
    date: "17 Januari 2026",
    initials: "DS",
    text: "Great and best experience. Our tour guide Zakir and Imam are great, friendly and very helpful and cater all our needs.",
  },

  {
    author: "Azrianna Nurfizan Azmi",
    source: "Google",
    rating: 5,
    date: "17 Januari 2026",
    initials: "AN",
    text: "en.zakir & en.imam sangat efisien, menepati masa dan sangat membantu. Trip yang pendek 2 hari dapat cover tempat menarik di sembalun dan dapat shopping barang2 penting di Mataram termasuk perhiasan mutiara. Syabas team, dan insyaAllah akan repeat lagi!",
  },

  {
    author: "Humam Sungkar",
    source: "Google",
    rating: 5,
    date: "16 Januari 2026",
    initials: "HS",
    text: "Pelayanan tournya luarbiasa. Dokumentasinya gratis dan bagus banget. Rekom banget buat yg cari tour di lombok",
  },

  {
    author: "Rony Trans",
    source: "Google",
    rating: 5,
    date: "16 Januari 2026",
    initials: "RT",
    text: "Mau liburan group jangan lupa bareng sungkar group, spesialis tour group se Indonesia",
  },

  {
    author: "Najah Humairah",
    source: "Google",
    rating: 5,
    date: "16 Januari 2026",
    initials: "NH",
    text: "Tour travel terbaik se lombok, terpercaya, pelayanan nya ramah",
  },
];
