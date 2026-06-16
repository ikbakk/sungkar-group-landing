import type { Locale } from "./index";

export interface UIStrings {
  header: {
    chatWhatsapp: string;
    menu: string;
    exploreDestinations: string;
  };
  nav: {
    availablePackages: string;
    checkAvailability: string;
    chatWhatsapp: string;
  };
  footer: {
    brandName: string;
    description: string;
    navigation: string;
    destinations: string;
    company: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  breadcrumb: {
    home: string;
    about: string;
    contact: string;
    faq: string;
    reviews: string;
    destinations: string;
    tourPackages: string;
    carRental: string;
    accommodations: string;
    travelGuides: string;
  };
  gallery: {
    title: string;
    photos: string;
  };
  cta: {
    book: string;
    startJourney: string;
    startPlanning: string;
    consultTrip: string;
    seePackages: string;
  };
  reviews: {
    seeOnGoogleMaps: string;
    seeAllReviews: string;
  };
  faq: {
    sectionTitle: string;
    sectionAbout: string;
    sectionContact: string;
    sectionPackages: string;
    sectionCarRental: string;
    sectionAccommodations: string;
    sectionReviews: string;
    sectionGeneral: string;
  };
  guides: {
    general: string;
    guideFor: string;
    readingTime: string;
    relatedDestinations: string;
    relatedDestinationsDesc: string;
    relatedPackages: string;
    relatedPackagesDesc: string;
    otherGuides: string;
    destinationRelated: string;
    packageRelated: string;
  };
  sewaMobil: {
    title: string;
    vehicleDetail: string;
    vehicleFor: string;
    rentalVehicles: string;
    allVehicles: string;
    faqTitle: string;
    faqTitleFor: string;
  };
  paketWisata: {
    title: string;
    eyebrow: string;
    packagesFor: string;
    chooseCategory: string;
    howToBook: string;
    readyToStart: string;
    faqTitle: string;
    exploreServices: string;
    duration: string;
    category: string;
    location: string;
    statsLabel: string;
  };
  akomodasi: {
    title: string;
    eyebrow: string;
    accommodationChoice: string;
    exploreAccommodation: string;
    faqTitle: string;
  };
  page: {
    about: string;
    contact: string;
    reviews: string;
    destinations: string;
    tourPackages: string;
    carRental: string;
    accommodations: string;
    travelGuides: string;
    faq: string;
  };
  common: {
    readMore: string;
    learnMore: string;
    contactUs: string;
    bookNow: string;
    submit: string;
    send: string;
    back: string;
    seeMore: string;
    viewAll: string;
  };
  seo: {
    keywords: string;
    siteName: string;
  };
}

export const translations: Record<Locale, UIStrings> = {
  id: {
    header: {
      chatWhatsapp: "Chat WhatsApp",
      menu: "Menu",
      exploreDestinations: "Jelajahi Destinasi",
    },
    nav: {
      availablePackages: "Paket Wisata Tersedia",
      checkAvailability: "Cek Ketersediaan",
      chatWhatsapp: "Chat WhatsApp",
    },
    footer: {
      brandName: "Sungkar Group",
      description: "Operator wisata lokal untuk Lombok, Sumbawa, dan Labuan Bajo.",
      navigation: "Navigasi",
      destinations: "Destinasi",
      company: "Perusahaan",
      copyright: "\u00A9 {year} Sungkar Group. All rights reserved.",
      privacy: "Kebijakan Privasi",
      terms: "Syarat & Ketentuan",
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
    },
    gallery: {
      title: "Galeri",
      photos: "Foto Perjalanan",
    },
    cta: {
      book: "Pesan",
      startJourney: "Siap Memulai Perjalanan?",
      startPlanning: "Mulai Rencanakan Perjalanan Anda",
      consultTrip: "Konsultasi Trip",
      seePackages: "Lihat Paket",
    },
    reviews: {
      seeOnGoogleMaps: "Lihat di Google Maps",
      seeAllReviews: "Lihat semua ulasan di Google",
    },
    faq: {
      sectionTitle: "Pertanyaan Umum",
      sectionAbout: "Pertanyaan Tentang Sungkar Group",
      sectionContact: "Pertanyaan Seputar Kontak dan Pemesanan",
      sectionPackages: "Pertanyaan Seputar Paket Wisata",
      sectionCarRental: "Pertanyaan Seputar Sewa Mobil",
      sectionAccommodations: "Pertanyaan Seputar Akomodasi",
      sectionReviews: "Pertanyaan Seputar Ulasan",
      sectionGeneral: "Pertanyaan Umum",
    },
    guides: {
      general: "Panduan Umum",
      guideFor: "Panduan {region}",
      readingTime: "menit membaca",
      relatedDestinations: "Destinasi Terkait",
      relatedDestinationsDesc: "Tempat-tempat yang direkomendasikan berdasarkan panduan ini",
      relatedPackages: "Paket Wisata Terkait",
      relatedPackagesDesc: "Paket wisata yang sesuai dengan panduan ini",
      otherGuides: "Panduan Lainnya",
      destinationRelated: "Destinasi Terkait",
      packageRelated: "Paket Wisata Terkait",
    },
    sewaMobil: {
      title: "Sewa Mobil",
      vehicleDetail: "Detail Kendaraan",
      vehicleFor: "Kendaraan Rental di {region}",
      rentalVehicles: "Pilihan Kendaraan {region}",
      allVehicles: "Semua kendaraan di {region} telah diperiksa kondisinya dan dilengkapi dengan asuransi komprehensif untuk keamanan perjalanan Anda.",
      faqTitle: "Pertanyaan Seputar Sewa Mobil",
      faqTitleFor: "Pertanyaan Seputar Sewa Mobil {region}",
    },
    paketWisata: {
      title: "Paket Wisata",
      eyebrow: "Paket Wisata",
      packagesFor: "Paket Wisata {region}",
      chooseCategory: "Pilih kategori paket wisata yang tersedia di {region}.",
      howToBook: "Cara Pemesanan",
      readyToStart: "Siap Memulai Perjalanan?",
      faqTitle: "Pertanyaan Seputar Paket Wisata",
      exploreServices: "Jelajahi Layanan Kami",
      duration: "Durasi",
      category: "Kategori",
      location: "Lokasi",
      statsLabel: "Statistik",
    },
    akomodasi: {
      title: "Akomodasi",
      eyebrow: "Pilihan Akomodasi",
      accommodationChoice: "Akomodasi {region}",
      exploreAccommodation: "Jelajahi berbagai pilihan penginapan berkualitas di {region} yang disesuaikan dengan kebutuhan dan preferensi perjalanan Anda.",
      faqTitle: "Pertanyaan Seputar Akomodasi",
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
      faq: "FAQ",
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
    },
    seo: {
      keywords: "paket wisata lombok, tour lombok, open trip lombok, wisata sumbawa, whale shark sumbawa, wisata labuan bajo, tour komodo, sewa mobil lombok, sungkar group",
      siteName: "Sungkar Group",
    },
  },
  en: {
    header: {
      chatWhatsapp: "Chat on WhatsApp",
      menu: "Menu",
      exploreDestinations: "Explore Destinations",
    },
    nav: {
      availablePackages: "Tour Packages Available",
      checkAvailability: "Check Availability",
      chatWhatsapp: "Chat on WhatsApp",
    },
    footer: {
      brandName: "Sungkar Group",
      description: "Local tour operator for Lombok, Sumbawa, and Labuan Bajo.",
      navigation: "Navigation",
      destinations: "Destinations",
      company: "Company",
      copyright: "\u00A9 {year} Sungkar Group. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
    breadcrumb: {
      home: "Home",
      about: "About Us",
      contact: "Contact",
      faq: "FAQ",
      reviews: "Reviews",
      destinations: "Destinations",
      tourPackages: "Tour Packages",
      carRental: "Car Rental",
      accommodations: "Accommodations",
      travelGuides: "Travel Guides",
    },
    gallery: {
      title: "Gallery",
      photos: "Journey Photos",
    },
    cta: {
      book: "Book Now",
      startJourney: "Ready to Start Your Journey?",
      startPlanning: "Start Planning Your Trip",
      consultTrip: "Consult Your Trip",
      seePackages: "View Packages",
    },
    reviews: {
      seeOnGoogleMaps: "See on Google Maps",
      seeAllReviews: "See all reviews on Google",
    },
    faq: {
      sectionTitle: "General Questions",
      sectionAbout: "Questions About Sungkar Group",
      sectionContact: "Questions About Contact & Booking",
      sectionPackages: "Questions About Tour Packages",
      sectionCarRental: "Questions About Car Rental",
      sectionAccommodations: "Questions About Accommodations",
      sectionReviews: "Questions About Reviews",
      sectionGeneral: "General Questions",
    },
    guides: {
      general: "General Guide",
      guideFor: "{region} Guide",
      readingTime: "min read",
      relatedDestinations: "Related Destinations",
      relatedDestinationsDesc: "Recommended places based on this guide",
      relatedPackages: "Related Tour Packages",
      relatedPackagesDesc: "Tour packages that match this guide",
      otherGuides: "Other Guides",
      destinationRelated: "Related Destinations",
      packageRelated: "Related Tour Packages",
    },
    sewaMobil: {
      title: "Car Rental",
      vehicleDetail: "Vehicle Details",
      vehicleFor: "Rental Vehicles in {region}",
      rentalVehicles: "Vehicle Options in {region}",
      allVehicles: "All vehicles in {region} have been inspected and come with comprehensive insurance for your travel safety.",
      faqTitle: "Questions About Car Rental",
      faqTitleFor: "Questions About Car Rental in {region}",
    },
    paketWisata: {
      title: "Tour Packages",
      eyebrow: "Tour Packages",
      packagesFor: "Tour Packages {region}",
      chooseCategory: "Choose a tour package category available in {region}.",
      howToBook: "How to Book",
      readyToStart: "Ready to Start Your Journey?",
      faqTitle: "Questions About Tour Packages",
      exploreServices: "Explore Our Services",
      duration: "Duration",
      category: "Category",
      location: "Location",
      statsLabel: "Statistics",
    },
    akomodasi: {
      title: "Accommodations",
      eyebrow: "Accommodation Options",
      accommodationChoice: "Accommodations in {region}",
      exploreAccommodation: "Explore various quality accommodation options in {region} tailored to your travel needs and preferences.",
      faqTitle: "Questions About Accommodations",
    },
    page: {
      about: "About Us",
      contact: "Contact",
      reviews: "Reviews",
      destinations: "Destinations",
      tourPackages: "Tour Packages",
      carRental: "Car Rental",
      accommodations: "Accommodations",
      travelGuides: "Travel Guides",
      faq: "FAQ",
    },
    common: {
      readMore: "Read More",
      learnMore: "Learn More",
      contactUs: "Contact Us",
      bookNow: "Book Now",
      submit: "Submit",
      send: "Send",
      back: "Back",
      seeMore: "See More",
      viewAll: "View All",
    },
    seo: {
      keywords: "lombok tour packages, lombok tour, open trip lombok, sumbawa tours, whale shark sumbawa, labuan bajo tours, komodo tour, car rental lombok, sungkar group",
      siteName: "Sungkar Group",
    },
  },
  ar: {
    header: {
      chatWhatsapp: "\u0627\u0644\u062F\u0631\u062F\u0634\u0629 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628",
      menu: "\u0627\u0644\u0642\u0627\u0626\u0645\u0629",
      exploreDestinations: "\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0648\u062C\u0647\u0627\u062A",
    },
    nav: {
      availablePackages: "\u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u0629 \u0627\u0644\u0645\u062A\u0627\u062D\u0629",
      checkAvailability: "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062A\u0648\u0641\u0631",
      chatWhatsapp: "\u0627\u0644\u062F\u0631\u062F\u0634\u0629 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628",
    },
    footer: {
      brandName: "\u0633\u0648\u0646\u062C\u0627\u0631 \u062C\u0631\u0648\u0628",
      description: "\u0645\u0634\u063A\u0644 \u0633\u064A\u0627\u062D\u064A \u0645\u062D\u0644\u064A \u0644\u0645\u0646\u0637\u0642\u0629 \u0644\u0648\u0645\u0628\u0648\u0643\u060C \u0633\u0648\u0645\u0628\u0627\u0648\u0627\u060C \u0648\u0644\u0627\u0628\u0648\u0627\u0646 \u0628\u0627\u062C\u0648.",
      navigation: "\u0627\u0644\u062A\u0646\u0642\u0644",
      destinations: "\u0627\u0644\u0648\u062C\u0647\u0627\u062A",
      company: "\u0627\u0644\u0634\u0631\u0643\u0629",
      copyright: "\u00A9 {year} \u0633\u0648\u0646\u062C\u0627\u0631 \u062C\u0631\u0648\u0628. \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629.",
      privacy: "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629",
      terms: "\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645",
    },
    breadcrumb: {
      home: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
      about: "\u0639\u0646 \u0633\u0648\u0646\u062C\u0627\u0631 \u062C\u0631\u0648\u0628",
      contact: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",
      faq: "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
      reviews: "\u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A",
      destinations: "\u0627\u0644\u0648\u062C\u0647\u0627\u062A",
      tourPackages: "\u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u0629",
      carRental: "\u062A\u0623\u062C\u064A\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A",
      accommodations: "\u0627\u0644\u0625\u0642\u0627\u0645\u0629",
      travelGuides: "\u0623\u062F\u0644\u0629 \u0627\u0644\u0633\u0641\u0631",
    },
    gallery: {
      title: "\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631",
      photos: "\u0635\u0648\u0631 \u0627\u0644\u0631\u062D\u0644\u0629",
    },
    cta: {
      book: "\u0627\u062D\u062C\u0632 \u0627\u0644\u0622\u0646",
      startJourney: "\u0647\u0644 \u0623\u0646\u062A \u0645\u0633\u062A\u0639\u062F \u0644\u0628\u062F\u0621 \u0631\u062D\u0644\u062A\u0643\u061F",
      startPlanning: "\u0627\u0628\u062F\u0623 \u062A\u062E\u0637\u064A\u0637 \u0631\u062D\u0644\u062A\u0643",
      consultTrip: "\u0627\u0633\u062A\u0634\u0631 \u0631\u062D\u0644\u062A\u0643",
      seePackages: "\u0639\u0631\u0636 \u0627\u0644\u0628\u0627\u0642\u0627\u062A",
    },
    reviews: {
      seeOnGoogleMaps: "\u0634\u0627\u0647\u062F \u0639\u0644\u0649 \u062E\u0631\u0627\u0626\u0637 \u062C\u0648\u062C\u0644",
      seeAllReviews: "\u0634\u0627\u0647\u062F \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A \u0639\u0644\u0649 \u062C\u0648\u062C\u0644",
    },
    faq: {
      sectionTitle: "\u0623\u0633\u0626\u0644\u0629 \u0639\u0627\u0645\u0629",
      sectionAbout: "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u0633\u0648\u0646\u062C\u0627\u0631 \u062C\u0631\u0648\u0628",
      sectionContact: "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0648\u0627\u0644\u062D\u062C\u0632",
      sectionPackages: "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u0629",
      sectionCarRental: "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u062A\u0623\u062C\u064A\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A",
      sectionAccommodations: "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u0627\u0644\u0625\u0642\u0627\u0645\u0629",
      sectionReviews: "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A",
      sectionGeneral: "\u0623\u0633\u0626\u0644\u0629 \u0639\u0627\u0645\u0629",
    },
    guides: {
      general: "\u062F\u0644\u064A\u0644 \u0639\u0627\u0645",
      guideFor: "\u062F\u0644\u064A\u0644 {region}",
      readingTime: "\u062F\u0642\u0627\u0626\u0642 \u0644\u0644\u0642\u0631\u0627\u0621\u0629",
      relatedDestinations: "\u0648\u062C\u0647\u0627\u062A \u0630\u0627\u062A \u0635\u0644\u0629",
      relatedDestinationsDesc: "\u0623\u0645\u0627\u0643\u0646 \u0645\u0648\u0635\u0649 \u0628\u0647\u0627 \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062F\u0644\u064A\u0644",
      relatedPackages: "\u0628\u0627\u0642\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629 \u0630\u0627\u062A \u0635\u0644\u0629",
      relatedPackagesDesc: "\u0628\u0627\u0642\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629 \u062A\u062A\u0648\u0627\u0641\u0642 \u0645\u0639 \u0647\u0630\u0627 \u0627\u0644\u062F\u0644\u064A\u0644",
      otherGuides: "\u0623\u062F\u0644\u0629 \u0623\u062E\u0631\u0649",
      destinationRelated: "\u0648\u062C\u0647\u0627\u062A \u0630\u0627\u062A \u0635\u0644\u0629",
      packageRelated: "\u0628\u0627\u0642\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629 \u0630\u0627\u062A \u0635\u0644\u0629",
    },
    sewaMobil: {
      title: "\u062A\u0623\u062C\u064A\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A",
      vehicleDetail: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0631\u0643\u0628\u0629",
      vehicleFor: "\u0645\u0631\u0643\u0628\u0627\u062A \u0644\u0644\u0625\u064A\u062C\u0627\u0631 \u0641\u064A {region}",
      rentalVehicles: "\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0631\u0643\u0628\u0627\u062A \u0641\u064A {region}",
      allVehicles: "\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0631\u0643\u0628\u0627\u062A \u0641\u064A {region} \u062A\u0645 \u0641\u062D\u0635\u0647\u0627 \u0648\u062A\u0623\u062A\u064A \u0645\u0639 \u062A\u0623\u0645\u064A\u0646 \u0634\u0627\u0645\u0644 \u0644\u0633\u0644\u0627\u0645\u0629 \u0633\u0641\u0631\u0643.",
      faqTitle: "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u062A\u0623\u062C\u064A\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A",
      faqTitleFor: "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u062A\u0623\u062C\u064A\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0641\u064A {region}",
    },
    paketWisata: {
      title: "\u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u0629",
      eyebrow: "\u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u0629",
      packagesFor: "\u0628\u0627\u0642\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629 {region}",
      chooseCategory: "\u0627\u062E\u062A\u0631 \u0641\u0626\u0629 \u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u0629 \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u0641\u064A {region}.",
      howToBook: "\u0643\u064A\u0641\u064A\u0629 \u0627\u0644\u062D\u062C\u0632",
      readyToStart: "\u0647\u0644 \u0623\u0646\u062A \u0645\u0633\u062A\u0639\u062F \u0644\u0628\u062F\u0621 \u0631\u062D\u0644\u062A\u0643\u061F",
      faqTitle: "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u0629",
      exploreServices: "\u0627\u0633\u062A\u0643\u0634\u0641 \u062E\u062F\u0645\u0627\u062A\u0646\u0627",
      duration: "\u0627\u0644\u0645\u062F\u0629",
      category: "\u0627\u0644\u0641\u0626\u0629",
      location: "\u0627\u0644\u0645\u0648\u0642\u0639",
      statsLabel: "\u0625\u062D\u0635\u0627\u0621\u064A\u0627\u062A",
    },
    akomodasi: {
      title: "\u0627\u0644\u0625\u0642\u0627\u0645\u0629",
      eyebrow: "\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0625\u0642\u0627\u0645\u0629",
      accommodationChoice: "\u0627\u0644\u0625\u0642\u0627\u0645\u0629 \u0641\u064A {region}",
      exploreAccommodation: "\u0627\u0633\u062A\u0643\u0634\u0641 \u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0625\u0642\u0627\u0645\u0629 \u0627\u0644\u0645\u062A\u0646\u0648\u0639\u0629 \u0641\u064A {region} \u0627\u0644\u0645\u0635\u0645\u0645\u0629 \u062D\u0633\u0628 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0633\u0641\u0631\u0643 \u0648\u062A\u0641\u0636\u064A\u0644\u0627\u062A\u0643.",
      faqTitle: "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u0627\u0644\u0625\u0642\u0627\u0645\u0629",
    },
    page: {
      about: "\u0639\u0646 \u0633\u0648\u0646\u062C\u0627\u0631 \u062C\u0631\u0648\u0628",
      contact: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",
      reviews: "\u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A",
      destinations: "\u0627\u0644\u0648\u062C\u0647\u0627\u062A",
      tourPackages: "\u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u0629",
      carRental: "\u062A\u0623\u062C\u064A\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A",
      accommodations: "\u0627\u0644\u0625\u0642\u0627\u0645\u0629",
      travelGuides: "\u0623\u062F\u0644\u0629 \u0627\u0644\u0633\u0641\u0631",
      faq: "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
    },
    common: {
      readMore: "\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F",
      learnMore: "\u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064A\u062F",
      contactUs: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",
      bookNow: "\u0627\u062D\u062C\u0632 \u0627\u0644\u0622\u0646",
      submit: "\u0625\u0631\u0633\u0627\u0644",
      send: "\u0625\u0631\u0633\u0627\u0644",
      back: "\u0631\u062C\u0648\u0639",
      seeMore: "\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064A\u062F",
      viewAll: "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644",
    },
    seo: {
      keywords: "\u0628\u0627\u0642\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629 \u0644\u0648\u0645\u0628\u0648\u0643\u060C \u062C\u0648\u0644\u0627\u062A \u0644\u0648\u0645\u0628\u0648\u0643\u060C \u0631\u062D\u0644\u0627\u062A \u0644\u0648\u0645\u0628\u0648\u0643\u060C \u0633\u064A\u0627\u062D\u0629 \u0633\u0648\u0645\u0628\u0627\u0648\u0627\u060C \u062D\u0648\u062A \u0627\u0644\u062D\u0648\u062A \u0633\u0648\u0645\u0628\u0627\u0648\u0627\u060C \u0644\u0627\u0628\u0648\u0627\u0646 \u0628\u0627\u062C\u0648\u060C \u0631\u062D\u0644\u0629 \u0643\u0648\u0645\u0648\u062F\u0648\u060C \u062A\u0623\u062C\u064A\u0631 \u0633\u064A\u0627\u0631\u0627\u062A \u0644\u0648\u0645\u0628\u0648\u0643\u060C \u0633\u0648\u0646\u062C\u0627\u0631 \u062C\u0631\u0648\u0628",
      siteName: "\u0633\u0648\u0646\u062C\u0627\u0631 \u062C\u0631\u0648\u0628",
    },
  },
  ms: {
    header: {
      chatWhatsapp: "Chat WhatsApp",
      menu: "Menu",
      exploreDestinations: "Terokai Destinasi",
    },
    nav: {
      availablePackages: "Pakej Pelancongan Tersedia",
      checkAvailability: "Semak Ketersediaan",
      chatWhatsapp: "Chat WhatsApp",
    },
    footer: {
      brandName: "Sungkar Group",
      description: "Pengendali pelancongan tempatan untuk Lombok, Sumbawa, dan Labuan Bajo.",
      navigation: "Navigasi",
      destinations: "Destinasi",
      company: "Syarikat",
      copyright: "\u00A9 {year} Sungkar Group. Hak cipta terpelihara.",
      privacy: "Dasar Privasi",
      terms: "Syarat & Ketentuan",
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
    },
    gallery: {
      title: "Galeri",
      photos: "Gambar Perjalanan",
    },
    cta: {
      book: "Tempah Sekarang",
      startJourney: "Sedia Memulakan Perjalanan?",
      startPlanning: "Mula Merancang Perjalanan Anda",
      consultTrip: "Rundingkan Perjalanan",
      seePackages: "Lihat Pakej",
    },
    reviews: {
      seeOnGoogleMaps: "Lihat di Google Maps",
      seeAllReviews: "Lihat semua ulasan di Google",
    },
    faq: {
      sectionTitle: "Soalan Umum",
      sectionAbout: "Soalan Tentang Sungkar Group",
      sectionContact: "Soalan Tentang Hubungan & Tempahan",
      sectionPackages: "Soalan Tentang Pakej Pelancongan",
      sectionCarRental: "Soalan Tentang Sewa Kereta",
      sectionAccommodations: "Soalan Tentang Penginapan",
      sectionReviews: "Soalan Tentang Ulasan",
      sectionGeneral: "Soalan Umum",
    },
    guides: {
      general: "Panduan Umum",
      guideFor: "Panduan {region}",
      readingTime: "minit bacaan",
      relatedDestinations: "Destinasi Berkaitan",
      relatedDestinationsDesc: "Tempat yang disyorkan berdasarkan panduan ini",
      relatedPackages: "Pakej Pelancongan Berkaitan",
      relatedPackagesDesc: "Pakej pelancongan yang sesuai dengan panduan ini",
      otherGuides: "Panduan Lain",
      destinationRelated: "Destinasi Berkaitan",
      packageRelated: "Pakej Pelancongan Berkaitan",
    },
    sewaMobil: {
      title: "Sewa Kereta",
      vehicleDetail: "Butiran Kenderaan",
      vehicleFor: "Kenderaan Sewa di {region}",
      rentalVehicles: "Pilihan Kenderaan {region}",
      allVehicles: "Semua kenderaan di {region} telah diperiksa dan disertakan dengan insurans komprehensif untuk keselamatan perjalanan anda.",
      faqTitle: "Soalan Tentang Sewa Kereta",
      faqTitleFor: "Soalan Tentang Sewa Kereta di {region}",
    },
    paketWisata: {
      title: "Pakej Pelancongan",
      eyebrow: "Pakej Pelancongan",
      packagesFor: "Pakej Pelancongan {region}",
      chooseCategory: "Pilih kategori pakej pelancongan yang tersedia di {region}.",
      howToBook: "Cara Tempahan",
      readyToStart: "Sedia Memulakan Perjalanan?",
      faqTitle: "Soalan Tentang Pakej Pelancongan",
      exploreServices: "Terokai Perkhidmatan Kami",
      duration: "Tempoh",
      category: "Kategori",
      location: "Lokasi",
      statsLabel: "Statistik",
    },
    akomodasi: {
      title: "Penginapan",
      eyebrow: "Pilihan Penginapan",
      accommodationChoice: "Penginapan di {region}",
      exploreAccommodation: "Terokai pelbagai pilihan penginapan berkualiti di {region} yang disesuaikan dengan keperluan dan keutamaan perjalanan anda.",
      faqTitle: "Soalan Tentang Penginapan",
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
      faq: "FAQ",
    },
    common: {
      readMore: "Baca Lagi",
      learnMore: "Ketahui Lebih Lanjut",
      contactUs: "Hubungi Kami",
      bookNow: "Tempah Sekarang",
      submit: "Hantar",
      send: "Hantar",
      back: "Kembali",
      seeMore: "Lihat Lagi",
      viewAll: "Lihat Semua",
    },
    seo: {
      keywords: "pakej pelancongan lombok, tour lombok, open trip lombok, wisata sumbawa, whale shark sumbawa, wisata labuan bajo, tour komodo, sewa kereta lombok, sungkar group",
      siteName: "Sungkar Group",
    },
  },
  zh: {
    header: {
      chatWhatsapp: "WhatsApp\u804A\u5929",
      menu: "\u83DC\u5355",
      exploreDestinations: "\u63A2\u7D22\u76EE\u7684\u5730",
    },
    nav: {
      availablePackages: "\u53EF\u7528\u65C5\u6E38\u5957\u9910",
      checkAvailability: "\u67E5\u770B\u53EF\u7528\u6027",
      chatWhatsapp: "WhatsApp\u804A\u5929",
    },
    footer: {
      brandName: "Sungkar Group",
      description: "\u5F53\u5730\u65C5\u6E38\u8FD0\u8425\u5546\uFF0C\u670D\u52A1\u4E8E\u9F99\u6728\u5C9B\u3001\u68EE\u5DF4\u74E6\u548C\u62C9\u5E03\u5B89\u5DF4\u7126\u3002",
      navigation: "\u5BFC\u822A",
      destinations: "\u76EE\u7684\u5730",
      company: "\u516C\u53F8",
      copyright: "\u00A9 {year} Sungkar Group\u3002\u4FDD\u7559\u6240\u6709\u6743\u5229\u3002",
      privacy: "\u9690\u79C1\u653F\u7B56",
      terms: "\u6761\u6B3E\u548C\u6761\u4EF6",
    },
    breadcrumb: {
      home: "\u9996\u9875",
      about: "\u5173\u4E8E\u6211\u4EEC",
      contact: "\u8054\u7CFB\u6211\u4EEC",
      faq: "\u5E38\u89C1\u95EE\u9898",
      reviews: "\u5BA2\u6237\u8BC4\u4EF7",
      destinations: "\u76EE\u7684\u5730",
      tourPackages: "\u65C5\u6E38\u5957\u9910",
      carRental: "\u6C7D\u8F66\u79DF\u8D41",
      accommodations: "\u4F4F\u5BBF",
      travelGuides: "\u65C5\u6E38\u6307\u5357",
    },
    gallery: {
      title: "\u7535\u5B50\u76F8\u518C",
      photos: "\u65C5\u884C\u7167\u7247",
    },
    cta: {
      book: "\u7ACB\u5373\u9884\u8BA2",
      startJourney: "\u51C6\u5907\u597D\u5F00\u59CB\u60A8\u7684\u65C5\u7A0B\u4E86\u5417\uFF1F",
      startPlanning: "\u5F00\u59CB\u89C4\u5212\u60A8\u7684\u65C5\u884C",
      consultTrip: "\u54A8\u8BE2\u65C5\u7A0B",
      seePackages: "\u67E5\u770B\u5957\u9910",
    },
    reviews: {
      seeOnGoogleMaps: "\u5728Google\u5730\u56FE\u4E0A\u67E5\u770B",
      seeAllReviews: "\u67E5\u770BGoogle\u4E0A\u7684\u6240\u6709\u8BC4\u4EF7",
    },
    faq: {
      sectionTitle: "\u5E38\u89C1\u95EE\u9898",
      sectionAbout: "\u5173\u4E8ESungkar Group\u7684\u95EE\u9898",
      sectionContact: "\u5173\u4E8E\u8054\u7CFB\u548C\u9884\u8BA2\u7684\u95EE\u9898",
      sectionPackages: "\u5173\u4E8E\u65C5\u6E38\u5957\u9910\u7684\u95EE\u9898",
      sectionCarRental: "\u5173\u4E8E\u6C7D\u8F66\u79DF\u8D41\u7684\u95EE\u9898",
      sectionAccommodations: "\u5173\u4E8E\u4F4F\u5BBF\u7684\u95EE\u9898",
      sectionReviews: "\u5173\u4E8E\u5BA2\u6237\u8BC4\u4EF7\u7684\u95EE\u9898",
      sectionGeneral: "\u5E38\u89C1\u95EE\u9898",
    },
    guides: {
      general: "\u901A\u7528\u6307\u5357",
      guideFor: "{region}\u6307\u5357",
      readingTime: "\u5206\u949F\u9605\u8BFB",
      relatedDestinations: "\u76F8\u5173\u76EE\u7684\u5730",
      relatedDestinationsDesc: "\u6839\u636E\u6B64\u6307\u5357\u63A8\u8350\u7684\u5730\u70B9",
      relatedPackages: "\u76F8\u5173\u65C5\u6E38\u5957\u9910",
      relatedPackagesDesc: "\u4E0E\u6B64\u6307\u5357\u5339\u914D\u7684\u65C5\u6E38\u5957\u9910",
      otherGuides: "\u5176\u4ED6\u6307\u5357",
      destinationRelated: "\u76F8\u5173\u76EE\u7684\u5730",
      packageRelated: "\u76F8\u5173\u65C5\u6E38\u5957\u9910",
    },
    sewaMobil: {
      title: "\u6C7D\u8F66\u79DF\u8D41",
      vehicleDetail: "\u8F66\u8F86\u8BE6\u60C5",
      vehicleFor: "{region}\u7684\u79DF\u8D41\u8F66\u8F86",
      rentalVehicles: "{region}\u7684\u8F66\u8F86\u9009\u9879",
      allVehicles: "{region}\u7684\u6240\u6709\u8F66\u8F86\u5747\u5DF2\u68C0\u67E5\u5E76\u9644\u6709\u7EFC\u5408\u4FDD\u9669\uFF0C\u786E\u4FDD\u60A8\u7684\u65C5\u884C\u5B89\u5168\u3002",
      faqTitle: "\u5173\u4E8E\u6C7D\u8F66\u79DF\u8D41\u7684\u95EE\u9898",
      faqTitleFor: "\u5173\u4E8E{region}\u6C7D\u8F66\u79DF\u8D41\u7684\u95EE\u9898",
    },
    paketWisata: {
      title: "\u65C5\u6E38\u5957\u9910",
      eyebrow: "\u65C5\u6E38\u5957\u9910",
      packagesFor: "{region}\u65C5\u6E38\u5957\u9910",
      chooseCategory: "\u9009\u62E9{region}\u53EF\u7528\u7684\u65C5\u6E38\u5957\u9910\u7C7B\u522B\u3002",
      howToBook: "\u5982\u4F55\u9884\u8BA2",
      readyToStart: "\u51C6\u5907\u597D\u5F00\u59CB\u60A8\u7684\u65C5\u7A0B\u4E86\u5417\uFF1F",
      faqTitle: "\u5173\u4E8E\u65C5\u6E38\u5957\u9910\u7684\u95EE\u9898",
      exploreServices: "\u63A2\u7D22\u6211\u4EEC\u7684\u670D\u52A1",
      duration: "\u65F6\u957F",
      category: "\u7C7B\u522B",
      location: "\u5730\u70B9",
      statsLabel: "\u7EDF\u8BA1",
    },
    akomodasi: {
      title: "\u4F4F\u5BBF",
      eyebrow: "\u4F4F\u5BBF\u9009\u62E9",
      accommodationChoice: "{region}\u7684\u4F4F\u5BBF",
      exploreAccommodation: "\u63A2\u7D22{region}\u7684\u5404\u79CD\u4F18\u8D28\u4F4F\u5BBF\u9009\u62E9\uFF0C\u6EE1\u8DB3\u60A8\u7684\u65C5\u884C\u9700\u6C42\u548C\u504F\u597D\u3002",
      faqTitle: "\u5173\u4E8E\u4F4F\u5BBF\u7684\u95EE\u9898",
    },
    page: {
      about: "\u5173\u4E8E\u6211\u4EEC",
      contact: "\u8054\u7CFB\u6211\u4EEC",
      reviews: "\u5BA2\u6237\u8BC4\u4EF7",
      destinations: "\u76EE\u7684\u5730",
      tourPackages: "\u65C5\u6E38\u5957\u9910",
      carRental: "\u6C7D\u8F66\u79DF\u8D41",
      accommodations: "\u4F4F\u5BBF",
      travelGuides: "\u65C5\u6E38\u6307\u5357",
      faq: "\u5E38\u89C1\u95EE\u9898",
    },
    common: {
      readMore: "\u9605\u8BFB\u66F4\u591A",
      learnMore: "\u4E86\u89E3\u66F4\u591A",
      contactUs: "\u8054\u7CFB\u6211\u4EEC",
      bookNow: "\u7ACB\u5373\u9884\u8BA2",
      submit: "\u63D0\u4EA4",
      send: "\u53D1\u9001",
      back: "\u8FD4\u56DE",
      seeMore: "\u67E5\u770B\u66F4\u591A",
      viewAll: "\u67E5\u770B\u5168\u90E8",
    },
    seo: {
      keywords: "\u9F99\u6728\u5C9B\u65C5\u6E38\u5957\u9910, \u9F99\u6728\u5C9B\u4E00\u65E5\u6E38, \u9F99\u6728\u5C9B\u62FC\u56E2\u6E38, \u68EE\u5DF4\u74E6\u65C5\u6E38, \u68EE\u5DF4\u74E6\u9CA8\u9C7C, \u62C9\u5E03\u5B89\u5DF4\u7126\u65C5\u6E38, \u79D1\u6469\u591A\u65C5\u6E38, \u9F99\u6728\u5C9B\u6C7D\u8F66\u79DF\u8D41, Sungkar Group",
      siteName: "Sungkar Group",
    },
  },
};

export function t(locale: string): UIStrings {
  return translations[locale as Locale] || translations.id;
}
