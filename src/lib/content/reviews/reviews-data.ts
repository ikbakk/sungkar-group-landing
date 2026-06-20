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

export const reviewStats = {
  rating: 5,
  totalReviews: 156,
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
  {
    author: "Ruthy Sara",
    source: "Google",
    rating: 5,
    date: "10 Desember 2025",
    initials: "RS",
    text: "Mantap pokoknya seru banget dpt teman² trip yg asyik selama perjalanan di Sumbawa. Terima kasih Sungkar Group sudah mengatur trip ini dengan sangat rapi.",
  },
  {
    author: "Rina Cahyani",
    source: "Google",
    rating: 5,
    date: "5 Desember 2025",
    initials: "RC",
    text: "Puas banget traveling ke Lombok pakai Sungkar Group. Semua beres dari jemput sampe antar. Guide nya seru, fotografer dadakan yang jago ambil angle!",
  },
  {
    author: "Bambang Wijaya",
    source: "Google",
    rating: 5,
    date: "28 November 2025",
    initials: "BW",
    text: "Pelayanan sangat profesional. Mobil bersih, driver ramah, dan itinerary fleksibel. Cocok untuk liburan keluarga besar. Recommended!",
  },
  {
    author: "Siti Nurhaliza",
    source: "Google",
    rating: 5,
    date: "15 November 2025",
    initials: "SN",
    text: "Pengalaman trip 3 hari 2 malam di Lombok luar biasa! Destinasinya lengkap, dari pantai sampai pegunungan. Makanannya juga enak. Next mau ke Sumbawa lagi!",
  },
  {
    author: "Fajar Ardiansyah",
    source: "Google",
    rating: 5,
    date: "2 November 2025",
    initials: "FA",
    text: "Open trip Gili yang seru banget. Snorkelingnya jernih banget airnya, coral dan ikannya banyak. Guide menjelaskan dengan detail dan sabar. Highly recommended!",
  },
  {
    author: "Dewi Lestari",
    source: "Google",
    rating: 5,
    date: "20 Oktober 2025",
    initials: "DL",
    text: "Trip ke Labuan Bajo bersama Sungkar Group tak terlupakan. Kapal bersih, crew ramah, dan pulau-pulaunya cantik. Pasti balik lagi!",
  },
  {
    author: "Hendra Gunawan",
    source: "Google",
    rating: 5,
    date: "10 Oktober 2025",
    initials: "HG",
    text: "Pelayanan bintang 5! Semua kebutuhan trip diurus dengan detail. Komunikasi cepat lewat WhatsApp dan guide sangat knowledgeable. Thank you Sungkar Group!",
  },
  {
    author: "Ayu Pratiwi",
    source: "Google",
    rating: 5,
    date: "25 September 2025",
    initials: "AP",
    text: "Driver sangat friendly dan membantu banget. Mobil AC dingin, bersih, dan nyaman. Trip ke Rinjani via Sembalun pemandangannya epic! Sayang banget cuma 3 hari.",
  },
  {
    author: "Zaki Hidayat",
    source: "Google",
    rating: 5,
    date: "12 September 2025",
    initials: "ZH",
    text: "Pertama kali ke Lombok, bingung mau kemana aja. Untung pilih Sungkar Group, itinerary-nya pas banget. Dari Kuta Mandalika sampai Gili Trawangan semua ke-cover. Makasih tim!",
  },
];

export function toMarqueeReviews(): MarqueeReview[] {
  return reviews.map((r) => ({
    quote: r.text,
    initials: r.initials,
    name: r.author,
    role: r.source,
    rating: r.rating,
  }));
}
