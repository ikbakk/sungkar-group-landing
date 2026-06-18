export const reviewsPageContent = {
  hero: {
    eyebrow: "客户评价",
    title: "客户对Sungkar Group的评价",
    description:
      "来自亲身体验过我们服务旅行者的真实评价。每一个故事都反映了真实体验——未经编辑，原汁原味。",
  },

  insights: {
    title: "旅行者最常提及的内容",

    items: [
      {
        title: "快速沟通",
        description: "许多客人赞赏我们在旅行前和旅行期间的快速回复。",
      },

      {
        title: "友善的导游",
        description: "熟悉目的地的沟通型旅伴是最常被提及的亮点之一。",
      },

      {
        title: "灵活的行程",
        description: "行程可根据天气状况、客人偏好和团体需求进行调整。",
      },

      {
        title: "本地体验",
        description: "旅行者喜欢热门目的地与更地道本地推荐的完美结合。",
      },

      {
        title: "舒适的交通",
        description: "车辆清洁度和旅途舒适度是评价中经常提到的优点。",
      },

      {
        title: "井然有序的服务",
        description: "从接送到行程结束，客人感受到整个过程顺畅有序。",
      },
    ],
  },

  gallery: {
    title: "与旅行者的旅程时刻",
    description:
      "一些旅行记录，捕捉了与Sungkar Group一起的服务氛围和旅行体验。",
  },

  cta: {
    title: "准备规划您的行程？",
    description:
      "与我们的团队讨论您的旅行需求，找到适合您旅行风格、时长和团体规模的行程方案。",
    primaryButton: {
      label: "联系我们",
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
