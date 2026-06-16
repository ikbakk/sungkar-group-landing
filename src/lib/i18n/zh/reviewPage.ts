export const reviewsPageContent = {
  hero: {
    eyebrow: "Reviews",
    title: "What They Say About Sungkar Group?",
    description:
      "Real reviews from travelers who have experienced our service firsthand. Every story reflects a real experience — unedited, untranslated.",
  },

  insights: {
    title: "What Travelers Mention Most Often",

    items: [
      {
        title: "Fast Communication",
        description:
          "Many guests appreciate the quick responses both before and during the trip.",
      },

      {
        title: "Friendly Guide",
        description:
          "A communicative travel companion who knows the destinations is one of the most frequently mentioned highlights.",
      },

      {
        title: "Flexible Itinerary",
        description:
          "The trip can be adjusted according to weather conditions, guest preferences, and group needs.",
      },

      {
        title: "Local Experience",
        description:
          "Travelers enjoy the combination of popular destinations and more authentic local recommendations.",
      },

      {
        title: "Comfortable Transportation",
        description:
          "Vehicle cleanliness and comfort during the journey are often positive points in reviews.",
      },

      {
        title: "Well-Organized Service",
        description:
          "From pickup to the end of the trip, guests feel the process runs smoothly and purposefully.",
      },
    ],
  },

  gallery: {
    title: "Journey Moments with Travelers",
    description:
      "Some travel documentation that captures the atmosphere of service and travel experience with Sungkar Group.",
  },

  cta: {
    title: "Ready to Plan Your Trip?",
    description:
      "Discuss your travel needs with our team and find an itinerary that suits your travel style, duration, and group size.",
    primaryButton: {
      label: "Contact Us",
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
