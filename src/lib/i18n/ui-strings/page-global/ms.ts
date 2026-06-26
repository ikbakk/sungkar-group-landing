import type { UIStrings } from "../types";

const strings = {
  header: {
    chatWhatsapp: "Chat WhatsApp",
    menu: "Menu",
    exploreDestinations: "Terokai Destinasi",
    language: "Bahasa",
    destinationsSubtitle: "Lombok • Sumbawa • Labuan Bajo",
  },
  nav: {
    availablePackages: "Pakej Pelancongan Tersedia",
    checkAvailability: "Semak Ketersediaan",
    chatWhatsapp: "Chat WhatsApp",
  },
  footer: {
    brandName: "Sungkar Group",
    description:
      "Pengendali pelancongan tempatan untuk Lombok, Sumbawa, dan Labuan Bajo.",
    navigation: "Navigasi",
    destinations: "Destinasi",
    company: "Syarikat",
    copyright: "\u00A9 {year} Sungkar Group. Hak cipta terpelihara.",
    privacy: "Dasar Privasi",
    terms: "Syarat & Ketentuan",
    instagram: "Instagram",
    youtube: "YouTube",
    facebook: "Facebook",
    tiktok: "TikTok",
  },
  breadcrumb: {
    home: "Laman Utama",
    about: "Tentang Kami",
    contact: "Hubungi",
    faq: "FAQ",
    reviews: "Ulasan",
    destinations: "Destinasi",
    tourPackages: "Pakej Pelancongan",
    carRental: "Sewa Kereta",
    accommodations: "Penginapan",
    travelGuides: "Panduan Pelancongan",
    blog: "Blog",
  },
  common: {
    explore: "Terokai",
    readMore: "Baca Lagi",
    learnMore: "Ketahui Lebih Lanjut",
    contactUs: "Hubungi Kami",
    bookNow: "Tempah Sekarang",
    submit: "Hantar",
    send: "Hantar",
    back: "Kembali",
    seeMore: "Lihat Lagi",
    viewAll: "Lihat Semua",
    backToTop: "\u2191 Kembali ke Atas",
    viewDetail: "Lihat Butiran",
    moreCount: "+{n} lagi",
    contactForPrice: "Hubungi untuk harga",
    people: "orang",
    perPax: "pax",
    imageAltSunrise: "Lombok ketika matahari terbit",
    imageAltSunset: "Pemandangan pantai Lombok dengan matahari terbenam",
    imageAltDestinations: "Destinasi Lombok",
    pageNotFound: "Halaman Tidak Ditemui",
    pageNotFoundDesc:
      "Halaman yang anda cari mungkin telah dipindahkan, dipadam, atau tidak pernah wujud.",
  },
  page: {
    about: "Tentang Kami",
    contact: "Hubungi",
    reviews: "Ulasan",
    destinations: "Destinasi",
    tourPackages: "Pakej Pelancongan",
    carRental: "Sewa Kereta",
    accommodations: "Penginapan",
    travelGuides: "Panduan Pelancongan",
    blog: "Blog",
    faq: "FAQ",
  },
  seo: {
    keywords:
      "pakej pelancongan lombok, tour lombok, open trip lombok, wisata sumbawa, whale shark sumbawa, wisata labuan bajo, tour komodo, sewa kereta lombok, sungkar group",
    siteName: "Sungkar Group",
  },
  consent: {
    title: "Tetapan Kuki",
    description:
      "Kami menggunakan kuki untuk mengukur prestasi dan meningkatkan pengalaman anda. Uruskan pilihan anda di bawah.",
    acceptAll: "Terima Semua",
    rejectAll: "Tolak Semua",
    customize: "Sesuaikan",
    learnMore: "Ketahui Lebih Lanjut",
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
