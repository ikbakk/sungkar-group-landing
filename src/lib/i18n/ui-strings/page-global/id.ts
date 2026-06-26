import type { UIStrings } from "../types";

const strings = {
  header: {
    chatWhatsapp: "Chat WhatsApp",
    menu: "Menu",
    exploreDestinations: "Jelajahi Destinasi",
    language: "Bahasa",
    destinationsSubtitle: "Lombok • Sumbawa • Labuan Bajo",
  },
  nav: {
    availablePackages: "Paket Wisata Tersedia",
    checkAvailability: "Cek Ketersediaan",
    chatWhatsapp: "Chat WhatsApp",
  },
  footer: {
    brandName: "Sungkar Group",
    description:
      "Operator wisata lokal untuk Lombok, Sumbawa, dan Labuan Bajo.",
    navigation: "Navigasi",
    destinations: "Destinasi",
    company: "Perusahaan",
    copyright: "\u00A9 {year} Sungkar Group. All rights reserved.",
    privacy: "Kebijakan Privasi",
    terms: "Syarat & Ketentuan",
    instagram: "Instagram",
    youtube: "YouTube",
    facebook: "Facebook",
    tiktok: "TikTok",
  },
  breadcrumb: {
    home: "Beranda",
    about: "Tentang Kami",
    contact: "Kontak",
    faq: "FAQ",
    reviews: "Ulasan",
    destinations: "Destinasi",
    tourPackages: "Paket Wisata",
    carRental: "Sewa Mobil",
    accommodations: "Akomodasi",
    travelGuides: "Panduan Wisata",
    blog: "Blog",
  },
  common: {
    readMore: "Baca Selengkapnya",
    learnMore: "Pelajari Lebih Lanjut",
    contactUs: "Hubungi Kami",
    bookNow: "Pesan Sekarang",
    submit: "Kirim",
    send: "Kirim",
    back: "Kembali",
    seeMore: "Lihat Lainnya",
    viewAll: "Lihat Semua",
    backToTop: "\u2191 Kembali ke Atas",
    viewDetail: "Lihat Detail",
    explore: "Jelajahi",
    moreCount: "+{n} lainnya",
    contactForPrice: "Hubungi untuk harga",
    people: "orang",
    perPax: "pax",
    imageAltSunrise: "Lombok saat matahari terbit",
    imageAltSunset: "Pemandangan pantai Lombok dengan matahari terbenam",
    imageAltDestinations: "Destinasi Lombok",
    pageNotFound: "Halaman Tidak Ditemukan",
    pageNotFoundDesc:
      "Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak pernah ada.",
  },
  page: {
    about: "Tentang Kami",
    contact: "Kontak",
    reviews: "Ulasan",
    destinations: "Destinasi",
    tourPackages: "Paket Wisata",
    carRental: "Sewa Mobil",
    accommodations: "Akomodasi",
    travelGuides: "Panduan Wisata",
    blog: "Blog",
    faq: "FAQ",
  },
  seo: {
    keywords:
      "paket wisata lombok, tour lombok, open trip lombok, wisata sumbawa, whale shark sumbawa, wisata labuan bajo, tour komodo, sewa mobil lombok, sungkar group",
    siteName: "Sungkar Group",
  },
  consent: {
    title: "Pengaturan Cookie",
    description:
      "Kami menggunakan cookie untuk mengukur kinerja dan meningkatkan pengalaman Anda. Kelola preferensi Anda di bawah ini.",
    acceptAll: "Terima Semua",
    rejectAll: "Tolak Semua",
    customize: "Kustomisasi",
    learnMore: "Pelajari Lebih Lanjut",
  },
} satisfies Pick<
  UIStrings,
  | "header"
  | "nav"
  | "footer"
  | "breadcrumb"
  | "common"
  | "page"
  | "seo"
  | "consent"
>;

export default strings;
