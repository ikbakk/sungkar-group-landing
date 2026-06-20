import type { Locale } from "./index";

export interface UIStrings {
  header: {
    chatWhatsapp: string;
    menu: string;
    exploreDestinations: string;
    language: string;
    destinationsSubtitle: string;
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
    instagram: string;
    youtube: string;
    facebook: string;
    tiktok: string;
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
    blog: string;
  };
  gallery: {
    title: string;
    photos: string;
    previousImage: string;
    nextImage: string;
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
    galleryTitle: string;
    galleryPhotoCaptions: string[];
    totalOnGoogle: string;
    googleReview: string;
    ratingOutOfFive: string;
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
    keyTakeaways: string;
    keyTakeawaysDesc: string;
    relatedDestinations: string;
    relatedDestinationsDesc: string;
    relatedPackages: string;
    relatedPackagesDesc: string;
    otherGuides: string;
    destinationRelated: string;
    packageRelated: string;
    regionLombok: string;
    regionSumbawa: string;
    regionLabuanBajo: string;
    regionGeneral: string;
    stepName: string;
    guidesIndexDesc: string;
  };
  sewaMobil: {
    title: string;
    vehicleDetail: string;
    specifications: string;
    transmission: string;
    passengers: string;
    features: string;
    suitableFor: string;
    viewDetailRent: string;
    pricePerDay: string;
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
    viewPackageDetail: string;
    packagesAvailable: string;
    morePackages: string;
    itineraryLabel: string;
    itinerary: string;
    itineraryDesc: string;
    facilitiesLabel: string;
    includedExcluded: string;
    includedExcludedDesc: string;
    included: string;
    excluded: string;
    boatSpecs: string;
    boatType: string;
    boatCapacity: string;
    cabins: string;
    cabinPrice: string;
    termsAndConditions: string;
  };
  akomodasi: {
    title: string;
    eyebrow: string;
    accommodationChoice: string;
    exploreAccommodation: string;
    faqTitle: string;
    features: string;
    morePerks: string;
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
    backToTop: string;
    viewDetail: string;
    moreCount: string;
    contactForPrice: string;
    people: string;
    imageAltSunrise: string;
    imageAltSunset: string;
    imageAltDestinations: string;
    explore: string;
    pageNotFound: string;
    pageNotFoundDesc: string;
  };
  about: {
    vision: string;
    mission: string;
    ourValues: string;
    whyChooseUs: string;
    ourJourney: string;
    whatWeDo: string;
  };
  contact: {
    formDesc: string;
    formDescSidebar: string;
    contactInfoTitle: string;
    contactInfoDescription: string;
    chooseLocation: string;
    choosePackage: string;
    selectLocationFirst: string;
    optional: string;
    formTitle: string;
    formDescription: string;
    mapTitle: string;
    mapDescription: string;
    formWhatsappSubject: string;
    whatsappGreeting: string;
    whatsappSewaIntro: string;
    whatsappPaketIntro: string;
    whatsappLocation: string;
    whatsappFollowUp: string;
    whatsappFormDate: string;
    whatsappFormGuests: string;
    whatsappFormMessage: string;
    whatsappFormPackage: string;
    sidebarTitleSewa: string;
    sidebarTitlePaket: string;
    sectionTitleSewa: string;
    sectionTitlePaket: string;
    contextLabelSewa: string;
    contextLabelPaket: string;
    followUs: string;
    phoneWhatsapp: string;
    formFieldName: string;
    formFieldTravelDate: string;
    formFieldTravelDateSewa: string;
    formFieldDuration: string;
    formFieldGuests: string;
    formFieldPassengers: string;
    formFieldRentalReason: string;
    formFieldMessage: string;
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
    blog: string;
  };
  blogSection: {
    share: string;
    relatedPosts: string;
    relatedPostsDesc: string;
    copyLink: string;
    linkCopied: string;
    emptyState: string;
    description: string;
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
    gallery: {
      title: "Galeri",
      photos: "Foto Perjalanan",
      previousImage: "Gambar sebelumnya",
      nextImage: "Gambar berikutnya",
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
      galleryTitle: "Galeri Pengalaman Wisatawan",
      totalOnGoogle: "{n} ulasan di Google",
      googleReview: "Ulasan Google",
      ratingOutOfFive: "{rating} dari 5 bintang",
      galleryPhotoCaptions: [
        "Momen perjalanan keluarga",
        "Eksplorasi pantai dan pulau",
        "Pendampingan guide lokal",
        "Perjalanan kelompok dan komunitas",
      ],
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
      keyTakeaways: "Poin-Poin Kunci",
      keyTakeawaysDesc: "Hal penting yang perlu Anda ketahui dari panduan ini",
      relatedDestinations: "Destinasi Terkait",
      relatedDestinationsDesc:
        "Tempat-tempat yang direkomendasikan berdasarkan panduan ini",
      relatedPackages: "Paket Wisata Terkait",
      relatedPackagesDesc: "Paket wisata yang sesuai dengan panduan ini",
      otherGuides: "Panduan Lainnya",
      destinationRelated: "Destinasi Terkait",
      packageRelated: "Paket Wisata Terkait",
      regionLombok: "Tips dan panduan wisata untuk liburan Anda di Lombok.",
      regionSumbawa: "Informasi wisata untuk petualangan di Sumbawa.",
      regionLabuanBajo: "Semua yang perlu Anda tahu sebelum ke Labuan Bajo.",
      regionGeneral: "Panduan umum untuk perjalanan Anda.",
      stepName: "Poin {n}",
      guidesIndexDesc:
        "Panduan lengkap untuk merencanakan perjalanan Anda ke Lombok, Sumbawa, dan Labuan Bajo.",
    },
    sewaMobil: {
      title: "Sewa Mobil",
      vehicleDetail: "Detail Kendaraan",
      specifications: "Spesifikasi",
      transmission: "Transmisi",
      passengers: "Penumpang",
      features: "Fitur Unggulan",
      suitableFor: "Cocok Untuk",
      viewDetailRent: "Lihat Detail & Sewa",
      pricePerDay: "Harga per hari",
      vehicleFor: "Kendaraan Rental di {region}",
      rentalVehicles: "Pilihan Kendaraan {region}",
      allVehicles:
        "Semua kendaraan di {region} telah diperiksa kondisinya dan dilengkapi dengan asuransi komprehensif untuk keamanan perjalanan Anda.",
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
      viewPackageDetail: "Cek Detail Paket",
      packagesAvailable: "{n} paket tersedia",
      morePackages: "+{n} paket lainnya",
      itineraryLabel: "Perjalanan",
      itinerary: "Jalur Perjalanan",
      itineraryDesc:
        "Setiap hari dirancang untuk memberikan pengalaman terbaik selama perjalanan Anda.",
      facilitiesLabel: "Fasilitas",
      includedExcluded: "Yang Termasuk & Tidak Termasuk",
      includedExcludedDesc:
        "Semua fasilitas tercantum untuk membantu Anda mempersiapkan perjalanan.",
      included: "Termasuk",
      excluded: "Tidak Termasuk",
      boatSpecs: "Spesifikasi Kapal",
      boatType: "Tipe Kapal",
      boatCapacity: "Kapasitas",
      cabins: "Kabin Kapal",
      cabinPrice: "Harga Kabin",
      termsAndConditions: "Syarat & Ketentuan",
    },
    akomodasi: {
      title: "Akomodasi",
      eyebrow: "Pilihan Akomodasi",
      accommodationChoice: "Akomodasi {region}",
      exploreAccommodation:
        "Jelajahi berbagai pilihan penginapan berkualitas di {region} yang disesuaikan dengan kebutuhan dan preferensi perjalanan Anda.",
      faqTitle: "Pertanyaan Seputar Akomodasi",
      features: "Fasilitas Unggulan",
      morePerks: "+{n} lainnya",
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
      imageAltSunrise: "Lombok saat matahari terbit",
      imageAltSunset: "Pemandangan pantai Lombok dengan matahari terbenam",
      imageAltDestinations: "Destinasi Lombok",
      pageNotFound: "Halaman Tidak Ditemukan",
      pageNotFoundDesc:
        "Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak pernah ada.",
    },
    about: {
      vision: "Visi",
      mission: "Misi",
      ourValues: "Nilai-Nilai Kami",
      whyChooseUs: "Mengapa wisatawan memilih Sungkar Group",
      ourJourney: "Perjalanan Kami",
      whatWeDo: "Apa yang kami kerjakan",
    },
    contact: {
      formDesc:
        "Isi form di bawah, tim kami akan merespon via WhatsApp dalam waktu singkat.",
      formDescSidebar:
        "Isi form di bawah dan tim kami akan merespon via WhatsApp.",
      contactInfoTitle: "Informasi Kontak",
      contactInfoDescription:
        "Hubungi kami melalui berbagai saluran yang tersedia",
      chooseLocation: "Pilih lokasi",
      choosePackage: "Pilih paket",
      selectLocationFirst: "Pilih lokasi terlebih dahulu",
      optional: "opsional",
      formTitle: "Ceritakan rencana perjalanan Anda",
      formDescription:
        "Berikan informasi dasar perjalanan agar tim kami dapat memberikan rekomendasi yang lebih relevan.",
      mapTitle: "Lokasi Kami",
      mapDescription:
        "Kunjungi kantor Sungkar Group Indonesia atau hubungi tim kami untuk konsultasi perjalanan.",
      formWhatsappSubject: "Pertanyaan Baru - Sungkar Group Website",
      whatsappGreeting: "Halo Sungkar Group,",
      whatsappSewaIntro: "Saya ingin sewa: {item}",
      whatsappPaketIntro: "Saya tertarik dengan paket: {item}",
      whatsappLocation: "Lokasi: {region}",
      whatsappFollowUp: "Mohon informasi lebih lanjut.",
      whatsappFormDate: "Tanggal perjalanan: {date}",
      whatsappFormGuests: "Jumlah tamu: {guests}",
      whatsappFormMessage: "Pesan tambahan: {message}",
      whatsappFormPackage: "Paket: {package}",
      sidebarTitleSewa: "Sewa kendaraan ini",
      sidebarTitlePaket: "Pesan paket ini",
      sectionTitleSewa: "Sewa Mobil di Sungkar Group",
      sectionTitlePaket: "Pesan Paket Wisata",
      contextLabelSewa: "Pilihan Kendaraan",
      contextLabelPaket: "Pilihan Paket",
      followUs: "Ikuti Kami",
      phoneWhatsapp: "Telepon / Whatsapp",
      formFieldName: "Nama",
      formFieldTravelDate: "Tanggal perjalanan",
      formFieldTravelDateSewa: "Tanggal sewa",
      formFieldDuration: "Durasi sewa",
      formFieldGuests: "Jumlah tamu",
      formFieldPassengers: "Jumlah penumpang",
      formFieldRentalReason: "Keperluan sewa",
      formFieldMessage: "Pesan tambahan",
    },
    seo: {
      keywords:
        "paket wisata lombok, tour lombok, open trip lombok, wisata sumbawa, whale shark sumbawa, wisata labuan bajo, tour komodo, sewa mobil lombok, sungkar group",
      siteName: "Sungkar Group",
    },
    blogSection: {
      share: "Bagikan artikel ini",
      relatedPosts: "Artikel Terkait",
      relatedPostsDesc: "Baca artikel lainnya dari kami",
      copyLink: "Salin tautan",
      linkCopied: "Tautan disalin!",
      emptyState: "Belum ada artikel. Segera hadir!",
      description:
        "Tips, inspirasi, dan informasi terbaru seputar wisata Lombok, Sumbawa, dan Labuan Bajo.",
    },
  },
  en: {
    header: {
      chatWhatsapp: "Chat on WhatsApp",
      menu: "Menu",
      exploreDestinations: "Explore Destinations",
      language: "Language",
      destinationsSubtitle: "Lombok • Sumbawa • Labuan Bajo",
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
      instagram: "Instagram",
      youtube: "YouTube",
      facebook: "Facebook",
      tiktok: "TikTok",
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
      blog: "Blog",
    },
    gallery: {
      title: "Gallery",
      photos: "Journey Photos",
      previousImage: "Previous image",
      nextImage: "Next image",
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
      galleryTitle: "Traveler Experience Gallery",
      totalOnGoogle: "{n} reviews on Google",
      googleReview: "Google Review",
      ratingOutOfFive: "{rating} out of 5 stars",
      galleryPhotoCaptions: [
        "Family travel moments",
        "Beach and island exploration",
        "Local guide assistance",
        "Group and community trips",
      ],
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
      keyTakeaways: "Key Takeaways",
      keyTakeawaysDesc: "Important things you need to know from this guide",
      relatedDestinations: "Related Destinations",
      relatedDestinationsDesc: "Recommended places based on this guide",
      relatedPackages: "Related Tour Packages",
      relatedPackagesDesc: "Tour packages that match this guide",
      otherGuides: "Other Guides",
      destinationRelated: "Related Destinations",
      packageRelated: "Related Tour Packages",
      regionLombok: "Travel tips and guides for your holiday in Lombok.",
      regionSumbawa: "Travel information for adventures in Sumbawa.",
      regionLabuanBajo:
        "Everything you need to know before visiting Labuan Bajo.",
      regionGeneral: "General guide for your trip.",
      stepName: "Step {n}",
      guidesIndexDesc:
        "Complete guide to planning your trip to Lombok, Sumbawa, and Labuan Bajo.",
    },
    sewaMobil: {
      title: "Car Rental",
      vehicleDetail: "Vehicle Details",
      specifications: "Specifications",
      transmission: "Transmission",
      passengers: "Passengers",
      features: "Key Features",
      suitableFor: "Suitable For",
      viewDetailRent: "View Details & Rent",
      pricePerDay: "Price per day",
      vehicleFor: "Rental Vehicles in {region}",
      rentalVehicles: "Vehicle Options in {region}",
      allVehicles:
        "All vehicles in {region} have been inspected and come with comprehensive insurance for your travel safety.",
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
      viewPackageDetail: "View Package Details",
      packagesAvailable: "{n} packages available",
      morePackages: "+{n} more packages",
      itineraryLabel: "Journey",
      itinerary: "Trip Itinerary",
      itineraryDesc:
        "Each day is designed to give you the best experience during your trip.",
      facilitiesLabel: "Facilities",
      includedExcluded: "What's Included & Excluded",
      includedExcludedDesc:
        "All listed facilities to help you prepare for your trip.",
      included: "Included",
      excluded: "Not Included",
      boatSpecs: "Boat Specifications",
      boatType: "Boat Type",
      boatCapacity: "Capacity",
      cabins: "Cabins",
      cabinPrice: "Cabin Price",
      termsAndConditions: "Terms & Conditions",
    },
    akomodasi: {
      title: "Accommodations",
      eyebrow: "Accommodation Options",
      accommodationChoice: "Accommodations in {region}",
      exploreAccommodation:
        "Explore various quality accommodation options in {region} tailored to your travel needs and preferences.",
      faqTitle: "Questions About Accommodations",
      features: "Key Amenities",
      morePerks: "+{n} more",
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
      blog: "Blog",
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
      backToTop: "\u2191 Back to Top",
      viewDetail: "View Details",
      explore: "Explore",
      moreCount: "+{n} more",
      contactForPrice: "Contact for price",
      people: "people",
      imageAltSunrise: "Lombok at sunrise",
      imageAltSunset: "Lombok beach with sunset view",
      imageAltDestinations: "Lombok Destinations",
      pageNotFound: "Page Not Found",
      pageNotFoundDesc:
        "The page you are looking for may have been moved, deleted, or never existed.",
    },
    about: {
      vision: "Vision",
      mission: "Mission",
      ourValues: "Our Values",
      whyChooseUs: "Why Travelers Choose Sungkar Group",
      ourJourney: "Our Journey",
      whatWeDo: "What We Do",
    },
    contact: {
      formDesc:
        "Fill out the form below and our team will respond via WhatsApp shortly.",
      formDescSidebar:
        "Fill out the form and our team will get back to you on WhatsApp.",
      contactInfoTitle: "Contact Information",
      contactInfoDescription: "Reach us through the available channels",
      chooseLocation: "Choose location",
      choosePackage: "Choose package",
      selectLocationFirst: "Select location first",
      optional: "optional",
      formTitle: "Tell us about your trip",
      formDescription:
        "Provide basic trip information so our team can give you the most relevant recommendations.",
      mapTitle: "Our Location",
      mapDescription:
        "Visit the Sungkar Group office or contact our team for trip consultation.",
      formWhatsappSubject: "New Inquiry - Sungkar Group Website",
      whatsappGreeting: "Hello Sungkar Group,",
      whatsappSewaIntro: "I want to rent: {item}",
      whatsappPaketIntro: "I'm interested in the package: {item}",
      whatsappLocation: "Location: {region}",
      whatsappFollowUp: "Please provide more information.",
      whatsappFormDate: "Travel date: {date}",
      whatsappFormGuests: "Number of guests: {guests}",
      whatsappFormMessage: "Additional message: {message}",
      whatsappFormPackage: "Package: {package}",
      sidebarTitleSewa: "Rent this vehicle",
      sidebarTitlePaket: "Book this package",
      sectionTitleSewa: "Car Rental at Sungkar Group",
      sectionTitlePaket: "Book a Tour Package",
      contextLabelSewa: "Selected Vehicle",
      contextLabelPaket: "Selected Package",
      followUs: "Follow Us",
      phoneWhatsapp: "Phone / WhatsApp",
      formFieldName: "Name",
      formFieldTravelDate: "Travel date",
      formFieldTravelDateSewa: "Rental date",
      formFieldDuration: "Rental duration",
      formFieldGuests: "Number of guests",
      formFieldPassengers: "Number of passengers",
      formFieldRentalReason: "Rental purpose",
      formFieldMessage: "Additional message",
    },
    seo: {
      keywords:
        "lombok tour packages, lombok tour, open trip lombok, sumbawa tours, whale shark sumbawa, labuan bajo tours, komodo tour, car rental lombok, sungkar group",
      siteName: "Sungkar Group",
    },
    blogSection: {
      share: "Share this article",
      relatedPosts: "Related Articles",
      relatedPostsDesc: "Read more articles from us",
      copyLink: "Copy link",
      linkCopied: "Link copied!",
      emptyState: "No articles yet. Coming soon!",
      description:
        "Tips, inspiration, and latest information about tourism in Lombok, Sumbawa, and Labuan Bajo.",
    },
  },
  ar: {
    header: {
      chatWhatsapp:
        "\u0627\u0644\u062F\u0631\u062F\u0634\u0629 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628",
      menu: "\u0627\u0644\u0642\u0627\u0626\u0645\u0629",
      exploreDestinations:
        "\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0648\u062C\u0647\u0627\u062A",
      language: "\u0627\u0644\u0644\u063A\u0629",
      destinationsSubtitle:
        "\u0644\u0648\u0645\u0628\u0648\u0643 \u2022 \u0633\u0648\u0645\u0628\u0627\u0648\u0629 \u2022 \u0644\u0627\u0628\u0648\u0627\u0646 \u0628\u0627\u062C\u0648",
    },
    nav: {
      availablePackages:
        "\u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u0629 \u0627\u0644\u0645\u062A\u0627\u062D\u0629",
      checkAvailability:
        "\u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u062A\u0648\u0641\u0631",
      chatWhatsapp:
        "\u0627\u0644\u062F\u0631\u062F\u0634\u0629 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628",
    },
    footer: {
      brandName:
        "\u0633\u0648\u0646\u062C\u0627\u0631 \u062C\u0631\u0648\u0628",
      description:
        "\u0645\u0634\u063A\u0644 \u0633\u064A\u0627\u062D\u064A \u0645\u062D\u0644\u064A \u0644\u0645\u0646\u0637\u0642\u0629 \u0644\u0648\u0645\u0628\u0648\u0643\u060C \u0633\u0648\u0645\u0628\u0627\u0648\u0627\u060C \u0648\u0644\u0627\u0628\u0648\u0627\u0646 \u0628\u0627\u062C\u0648.",
      navigation: "\u0627\u0644\u062A\u0646\u0642\u0644",
      destinations: "\u0627\u0644\u0648\u062C\u0647\u0627\u062A",
      company: "\u0627\u0644\u0634\u0631\u0643\u0629",
      copyright:
        "\u00A9 {year} \u0633\u0648\u0646\u062C\u0627\u0631 \u062C\u0631\u0648\u0628. \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629.",
      privacy:
        "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629",
      terms:
        "\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645",
      instagram: "\u0625\u0646\u0633\u062A\u063A\u0631\u0627\u0645",
      youtube: "\u064A\u0648\u062A\u064A\u0648\u0628",
      facebook: "\u0641\u064A\u0633\u0628\u0648\u0643",
      tiktok: "\u062A\u064A\u0643 \u062A\u0648\u0643",
    },
    breadcrumb: {
      home: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
      about:
        "\u0639\u0646 \u0633\u0648\u0646\u062C\u0627\u0631 \u062C\u0631\u0648\u0628",
      contact: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",
      faq: "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
      reviews: "\u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A",
      destinations: "\u0627\u0644\u0648\u062C\u0647\u0627\u062A",
      tourPackages:
        "\u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u0629",
      carRental:
        "\u062A\u0623\u062C\u064A\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A",
      accommodations: "\u0627\u0644\u0625\u0642\u0627\u0645\u0629",
      travelGuides: "\u0623\u062F\u0644\u0629 \u0627\u0644\u0633\u0641\u0631",
      blog: "Blog",
    },
    gallery: {
      title: "\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631",
      photos: "\u0635\u0648\u0631 \u0627\u0644\u0631\u062D\u0644\u0629",
      previousImage:
        "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0633\u0627\u0628\u0642\u0629",
      nextImage:
        "\u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629",
    },
    cta: {
      book: "\u0627\u062D\u062C\u0632 \u0627\u0644\u0622\u0646",
      startJourney:
        "\u0647\u0644 \u0623\u0646\u062A \u0645\u0633\u062A\u0639\u062F \u0644\u0628\u062F\u0621 \u0631\u062D\u0644\u062A\u0643\u061F",
      startPlanning:
        "\u0627\u0628\u062F\u0623 \u062A\u062E\u0637\u064A\u0637 \u0631\u062D\u0644\u062A\u0643",
      consultTrip:
        "\u0627\u0633\u062A\u0634\u0631 \u0631\u062D\u0644\u062A\u0643",
      seePackages:
        "\u0639\u0631\u0636 \u0627\u0644\u0628\u0627\u0642\u0627\u062A",
    },
    reviews: {
      seeOnGoogleMaps:
        "\u0634\u0627\u0647\u062F \u0639\u0644\u0649 \u062E\u0631\u0627\u0626\u0637 \u062C\u0648\u062C\u0644",
      seeAllReviews:
        "\u0634\u0627\u0647\u062F \u062C\u0645\u064A\u0639 \u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A \u0639\u0644\u0649 \u062C\u0648\u062C\u0644",
      galleryTitle:
        "\u0645\u0639\u0631\u0636 \u062A\u062C\u0627\u0631\u0628 \u0627\u0644\u0645\u0633\u0627\u0641\u0631\u064A\u0646",
      totalOnGoogle:
        "{n} \u062A\u0642\u064A\u064A\u0645\u0627\u062A \u0639\u0644\u0649 \u062C\u0648\u062C\u0644",
      googleReview:
        "\u0645\u0631\u0627\u062C\u0639\u0629 \u062C\u0648\u062C\u0644",
      ratingOutOfFive: "{rating} \u0645\u0646 5 \u0646\u062C\u0645\u0627\u062A",
      galleryPhotoCaptions: [
        "\u0644\u062D\u0638\u0627\u062A \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0639\u0627\u0626\u0644\u064A\u0629",
        "\u0627\u0633\u062A\u0643\u0634\u0627\u0641 \u0627\u0644\u0634\u0648\u0627\u0637\u0626 \u0648\u0627\u0644\u062C\u0632\u0631",
        "\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0645\u0631\u0634\u062F \u0627\u0644\u0645\u062D\u0644\u064A",
        "\u0631\u062D\u0644\u0627\u062A \u062C\u0645\u0627\u0639\u064A\u0629 \u0648\u0645\u062C\u062A\u0645\u0639\u064A\u0629",
      ],
    },
    faq: {
      sectionTitle: "\u0623\u0633\u0626\u0644\u0629 \u0639\u0627\u0645\u0629",
      sectionAbout:
        "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u0633\u0648\u0646\u062C\u0627\u0631 \u062C\u0631\u0648\u0628",
      sectionContact:
        "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0648\u0627\u0644\u062D\u062C\u0632",
      sectionPackages:
        "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u0629",
      sectionCarRental:
        "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u062A\u0623\u062C\u064A\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A",
      sectionAccommodations:
        "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u0627\u0644\u0625\u0642\u0627\u0645\u0629",
      sectionReviews:
        "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A",
      sectionGeneral: "\u0623\u0633\u0626\u0644\u0629 \u0639\u0627\u0645\u0629",
    },
    guides: {
      general: "\u062F\u0644\u064A\u0644 \u0639\u0627\u0645",
      guideFor: "\u062F\u0644\u064A\u0644 {region}",
      readingTime:
        "\u062F\u0642\u0627\u0626\u0642 \u0644\u0644\u0642\u0631\u0627\u0621\u0629",
      keyTakeaways:
        "\u0627\u0644\u0646\u0642\u0627\u0637 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
      keyTakeawaysDesc:
        "\u0623\u0634\u064A\u0627\u0621 \u0645\u0647\u0645\u0629 \u064A\u062C\u0628 \u0645\u0639\u0631\u0641\u062A\u0647\u0627 \u0645\u0646 \u0647\u0630\u0627 \u0627\u0644\u062F\u0644\u064A\u0644",
      relatedDestinations:
        "\u0648\u062C\u0647\u0627\u062A \u0630\u0627\u062A \u0635\u0644\u0629",
      relatedDestinationsDesc:
        "\u0623\u0645\u0627\u0643\u0646 \u0645\u0648\u0635\u0649 \u0628\u0647\u0627 \u0628\u0646\u0627\u0621\u064B \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062F\u0644\u064A\u0644",
      relatedPackages:
        "\u0628\u0627\u0642\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629 \u0630\u0627\u062A \u0635\u0644\u0629",
      relatedPackagesDesc:
        "\u0628\u0627\u0642\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629 \u062A\u062A\u0648\u0627\u0641\u0642 \u0645\u0639 \u0647\u0630\u0627 \u0627\u0644\u062F\u0644\u064A\u0644",
      otherGuides: "\u0623\u062F\u0644\u0629 \u0623\u062E\u0631\u0649",
      destinationRelated:
        "\u0648\u062C\u0647\u0627\u062A \u0630\u0627\u062A \u0635\u0644\u0629",
      packageRelated:
        "\u0628\u0627\u0642\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629 \u0630\u0627\u062A \u0635\u0644\u0629",
      regionLombok:
        "\u0646\u0635\u0627\u0626\u062D \u0648\u0623\u062F\u0644\u0629 \u0627\u0644\u0633\u0641\u0631 \u0644\u0639\u0637\u0644\u062A\u0643 \u0641\u064A \u0644\u0648\u0645\u0628\u0648\u0643.",
      regionSumbawa:
        "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0633\u0641\u0631 \u0644\u0644\u0645\u063A\u0627\u0645\u0631\u0627\u062A \u0641\u064A \u0633\u0648\u0645\u0628\u0627\u0648\u0627.",
      regionLabuanBajo:
        "\u0643\u0644 \u0645\u0627 \u062A\u062D\u062A\u0627\u062C \u0645\u0639\u0631\u0641\u062A\u0647 \u0642\u0628\u0644 \u0632\u064A\u0627\u0631\u0629 \u0644\u0627\u0628\u0648\u0627\u0646 \u0628\u0627\u062C\u0648.",
      regionGeneral:
        "\u062F\u0644\u064A\u0644 \u0639\u0627\u0645 \u0644\u0631\u062D\u0644\u062A\u0643.",
      stepName: "\u0627\u0644\u062E\u0637\u0648\u0629 {n}",
      guidesIndexDesc:
        "\u062F\u0644\u064A\u0644 \u0643\u0627\u0645\u0644 \u0644\u062A\u062E\u0637\u064A\u0637 \u0631\u062D\u0644\u062A\u0643 \u0625\u0644\u0649 \u0644\u0648\u0645\u0628\u0648\u0643 \u0648\u0633\u0648\u0645\u0628\u0627\u0648\u0627 \u0648\u0644\u0627\u0628\u0648\u0627\u0646 \u0628\u0627\u062C\u0648.",
    },
    sewaMobil: {
      title:
        "\u062A\u0623\u062C\u064A\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A",
      vehicleDetail:
        "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0631\u0643\u0628\u0629",
      specifications: "\u0627\u0644\u0645\u0648\u0627\u0635\u0641\u0627\u062A",
      transmission:
        "\u0646\u0627\u0642\u0644 \u0627\u0644\u062D\u0631\u0643\u0629",
      passengers: "\u0627\u0644\u0631\u0643\u0627\u0628",
      features:
        "\u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
      suitableFor: "\u0645\u0646\u0627\u0633\u0628 \u0644\u0640",
      viewDetailRent:
        "\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0648\u0627\u0644\u0627\u0633\u062A\u0626\u062C\u0627\u0631",
      pricePerDay:
        "\u0627\u0644\u0633\u0639\u0631 \u0644\u0644\u064A\u0648\u0645",
      vehicleFor:
        "\u0645\u0631\u0643\u0628\u0627\u062A \u0644\u0644\u0625\u064A\u062C\u0627\u0631 \u0641\u064A {region}",
      rentalVehicles:
        "\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0631\u0643\u0628\u0627\u062A \u0641\u064A {region}",
      allVehicles:
        "\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0631\u0643\u0628\u0627\u062A \u0641\u064A {region} \u062A\u0645 \u0641\u062D\u0635\u0647\u0627 \u0648\u062A\u0623\u062A\u064A \u0645\u0639 \u062A\u0623\u0645\u064A\u0646 \u0634\u0627\u0645\u0644 \u0644\u0633\u0644\u0627\u0645\u0629 \u0633\u0641\u0631\u0643.",
      faqTitle:
        "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u062A\u0623\u062C\u064A\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A",
      faqTitleFor:
        "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u062A\u0623\u062C\u064A\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A \u0641\u064A {region}",
    },
    paketWisata: {
      title:
        "\u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u0629",
      eyebrow:
        "\u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u0629",
      packagesFor:
        "\u0628\u0627\u0642\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629 {region}",
      chooseCategory:
        "\u0627\u062E\u062A\u0631 \u0641\u0626\u0629 \u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u0629 \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u0641\u064A {region}.",
      howToBook:
        "\u0643\u064A\u0641\u064A\u0629 \u0627\u0644\u062D\u062C\u0632",
      readyToStart:
        "\u0647\u0644 \u0623\u0646\u062A \u0645\u0633\u062A\u0639\u062F \u0644\u0628\u062F\u0621 \u0631\u062D\u0644\u062A\u0643\u061F",
      faqTitle:
        "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u0629",
      exploreServices:
        "\u0627\u0633\u062A\u0643\u0634\u0641 \u062E\u062F\u0645\u0627\u062A\u0646\u0627",
      duration: "\u0627\u0644\u0645\u062F\u0629",
      category: "\u0627\u0644\u0641\u0626\u0629",
      location: "\u0627\u0644\u0645\u0648\u0642\u0639",
      statsLabel: "\u0625\u062D\u0635\u0627\u0621\u064A\u0627\u062A",
      viewPackageDetail:
        "\u0639\u0631\u0636 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0628\u0627\u0642\u0629",
      packagesAvailable:
        "{n} \u0628\u0627\u0642\u0629 \u0645\u062A\u0627\u062D\u0629",
      morePackages:
        "+{n} \u0628\u0627\u0642\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629",
      itineraryLabel: "\u0631\u062D\u0644\u0629",
      itinerary:
        "\u062E\u0637 \u0633\u064A\u0631 \u0627\u0644\u0631\u062D\u0644\u0629",
      itineraryDesc:
        "\u062A\u0645 \u062A\u0635\u0645\u064A\u0645 \u0643\u0644 \u064A\u0648\u0645 \u0644\u0645\u0646\u062D\u0643 \u0623\u0641\u0636\u0644 \u062A\u062C\u0631\u0628\u0629 \u062E\u0644\u0627\u0644 \u0631\u062D\u0644\u062A\u0643.",
      facilitiesLabel: "\u0627\u0644\u0645\u0631\u0627\u0641\u0642",
      includedExcluded:
        "\u0627\u0644\u0645\u0634\u0645\u0648\u0644 \u0648\u063A\u064A\u0631 \u0627\u0644\u0645\u0634\u0645\u0648\u0644",
      includedExcludedDesc:
        "\u062C\u0645\u064A\u0639 \u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0627\u0644\u0645\u062F\u0631\u062C\u0629 \u0644\u0645\u0633\u0627\u0639\u062F\u062A\u0643 \u0641\u064A \u0627\u0644\u062A\u062D\u0636\u064A\u0631 \u0644\u0631\u062D\u0644\u062A\u0643.",
      included: "\u0645\u0634\u0645\u0648\u0644",
      excluded: "\u063A\u064A\u0631 \u0645\u0634\u0645\u0648\u0644",
      boatSpecs:
        "\u0645\u0648\u0627\u0635\u0641\u0627\u062A \u0627\u0644\u0642\u0627\u0631\u0628",
      boatType: "\u0646\u0648\u0639 \u0627\u0644\u0642\u0627\u0631\u0628",
      boatCapacity: "\u0627\u0644\u0633\u0639\u0629",
      cabins: "\u0627\u0644\u0645\u0642\u0627\u0635\u064A\u0631",
      cabinPrice:
        "\u0633\u0639\u0631 \u0627\u0644\u0645\u0642\u0635\u0648\u0631\u0629",
      termsAndConditions:
        "\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645",
    },
    akomodasi: {
      title: "\u0627\u0644\u0625\u0642\u0627\u0645\u0629",
      eyebrow:
        "\u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0625\u0642\u0627\u0645\u0629",
      accommodationChoice:
        "\u0627\u0644\u0625\u0642\u0627\u0645\u0629 \u0641\u064A {region}",
      exploreAccommodation:
        "\u0627\u0633\u062A\u0643\u0634\u0641 \u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0625\u0642\u0627\u0645\u0629 \u0627\u0644\u0645\u062A\u0646\u0648\u0639\u0629 \u0641\u064A {region} \u0627\u0644\u0645\u0635\u0645\u0645\u0629 \u062D\u0633\u0628 \u0627\u062D\u062A\u064A\u0627\u062C\u0627\u062A \u0633\u0641\u0631\u0643 \u0648\u062A\u0641\u0636\u064A\u0644\u0627\u062A\u0643.",
      faqTitle:
        "\u0623\u0633\u0626\u0644\u0629 \u062D\u0648\u0644 \u0627\u0644\u0625\u0642\u0627\u0645\u0629",
      features:
        "\u0648\u0633\u0627\u0626\u0644 \u0627\u0644\u0631\u0627\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
      morePerks: "+{n} \u0627\u0644\u0645\u0632\u064A\u062F",
    },
    page: {
      about:
        "\u0639\u0646 \u0633\u0648\u0646\u062C\u0627\u0631 \u062C\u0631\u0648\u0628",
      contact: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",
      reviews: "\u0627\u0644\u062A\u0642\u064A\u064A\u0645\u0627\u062A",
      destinations: "\u0627\u0644\u0648\u062C\u0647\u0627\u062A",
      tourPackages:
        "\u0628\u0627\u0642\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u0629",
      carRental:
        "\u062A\u0623\u062C\u064A\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A",
      accommodations: "\u0627\u0644\u0625\u0642\u0627\u0645\u0629",
      travelGuides: "\u0623\u062F\u0644\u0629 \u0627\u0644\u0633\u0641\u0631",
      blog: "Blog",
      faq: "\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629",
    },
    common: {
      explore: "\u0627\u0633\u062A\u0643\u0634\u0641",
      readMore: "\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F",
      learnMore:
        "\u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064A\u062F",
      contactUs: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627",
      bookNow: "\u0627\u062D\u062C\u0632 \u0627\u0644\u0622\u0646",
      submit: "\u0625\u0631\u0633\u0627\u0644",
      send: "\u0625\u0631\u0633\u0627\u0644",
      back: "\u0631\u062C\u0648\u0639",
      seeMore: "\u0639\u0631\u0636 \u0627\u0644\u0645\u0632\u064A\u062F",
      viewAll: "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644",
      backToTop:
        "\u2191 \u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0627\u0644\u0623\u0639\u0644\u0649",
      viewDetail:
        "\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644",
      moreCount: "+{n} \u0627\u0644\u0645\u0632\u064A\u062F",
      contactForPrice:
        "\u0627\u062A\u0635\u0644 \u0644\u0644\u0633\u0639\u0631",
      people: "\u0634\u062E\u0635",
      imageAltSunrise:
        "\u0644\u0648\u0645\u0628\u0648\u0643 \u0639\u0646\u062F \u0634\u0631\u0648\u0642 \u0627\u0644\u0634\u0645\u0633",
      imageAltSunset:
        "\u0634\u0627\u0637\u0626 \u0644\u0648\u0645\u0628\u0648\u0643 \u0639\u0646\u062F \u063A\u0631\u0648\u0628 \u0627\u0644\u0634\u0645\u0633",
      imageAltDestinations:
        "\u0648\u062C\u0647\u0627\u062A \u0644\u0648\u0645\u0628\u0648\u0643",
      pageNotFound:
        "\u0635\u0641\u062D\u0629 \u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F\u0629",
      pageNotFoundDesc:
        "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u062A\u064A \u062A\u0628\u062D\u062B \u0639\u0646\u0647\u0627 \u0642\u062F \u062A\u0643\u0648\u0646 \u0642\u062F \u062A\u0645 \u0646\u0642\u0644\u0647\u0627 \u0623\u0648 \u062D\u0630\u0641\u0647\u0627 \u0623\u0648 \u0644\u0645 \u062A\u0648\u062C\u062F \u0623\u0628\u062F\u064B\u0627.",
    },
    about: {
      vision: "\u0627\u0644\u0631\u0624\u064A\u0629",
      mission: "\u0627\u0644\u0631\u0633\u0627\u0644\u0629",
      ourValues: "\u0642\u064A\u0645\u0646\u0627",
      whyChooseUs:
        "\u0644\u0645\u0627\u0630\u0627 \u064A\u062E\u062A\u0627\u0631 \u0627\u0644\u0645\u0633\u0627\u0641\u0631\u0648\u0646 Sungkar Group",
      ourJourney: "\u0631\u062D\u0644\u062A\u0646\u0627",
      whatWeDo: "\u0645\u0627 \u0646\u0642\u0648\u0645 \u0628\u0647",
    },
    contact: {
      formDesc:
        "\u0627\u0645\u0644\u0623 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0623\u062F\u0646\u0627\u0647 \u0648\u0633\u064A\u0642\u0648\u0645 \u0641\u0631\u064A\u0642\u0646\u0627 \u0628\u0627\u0644\u0631\u062F \u0639\u0628\u0631 WhatsApp \u0642\u0631\u064A\u0628\u064B\u0627.",
      formDescSidebar:
        "\u0627\u0645\u0644\u0623 \u0627\u0644\u0646\u0645\u0648\u0630\u062C \u0648\u0633\u064A\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0641\u0631\u064A\u0642\u0646\u0627 \u0639\u0628\u0631 WhatsApp.",
      contactInfoTitle:
        "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644",
      contactInfoDescription:
        "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627 \u0639\u0628\u0631 \u0627\u0644\u0642\u0646\u0648\u0627\u062A \u0627\u0644\u0645\u062A\u0627\u062D\u0629",
      chooseLocation:
        "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0642\u0639",
      choosePackage:
        "\u0627\u062E\u062A\u0631 \u0627\u0644\u0628\u0627\u0642\u0629",
      selectLocationFirst:
        "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0642\u0639 \u0623\u0648\u0644\u0627\u064B",
      optional: "\u0627\u062E\u062A\u064A\u0627\u0631\u064A",
      formTitle:
        "\u0623\u062E\u0628\u0631\u0646\u0627 \u0639\u0646 \u0631\u062D\u0644\u062A\u0643",
      formDescription:
        "\u0642\u062F\u0645 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0631\u062D\u0644\u0629 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629 \u062D\u062A\u0649 \u064A\u062A\u0645\u0643\u0646 \u0641\u0631\u064A\u0642\u0646\u0627 \u0645\u0646 \u062A\u0642\u062F\u064A\u0645 \u062A\u0648\u0635\u064A\u0627\u062A \u0623\u0643\u062B\u0631 \u0635\u0644\u0629.",
      mapTitle: "\u0645\u0648\u0642\u0639\u0646\u0627",
      mapDescription:
        "\u0632\u0631 \u0645\u0643\u062A\u0628 Sungkar Group \u0623\u0648 \u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0641\u0631\u064A\u0642\u0646\u0627 \u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0627\u0644\u0633\u0641\u0631.",
      formWhatsappSubject:
        "\u0627\u0633\u062A\u0641\u0633\u0627\u0631 \u062C\u062F\u064A\u062F - \u0645\u0648\u0642\u0639 Sungkar Group",
      whatsappGreeting: "\u0645\u0631\u062D\u0628\u0627 Sungkar Group\u060C",
      whatsappSewaIntro:
        "\u0623\u0631\u063A\u0628 \u0641\u064A \u0627\u0633\u062A\u0626\u062C\u0627\u0631: {item}",
      whatsappPaketIntro:
        "\u0623\u0646\u0627 \u0645\u0647\u062A\u0645 \u0628\u0627\u0644\u0628\u0627\u0642\u0629: {item}",
      whatsappLocation: "\u0627\u0644\u0645\u0648\u0642\u0639: {region}",
      whatsappFollowUp:
        "\u064A\u0631\u062C\u0649 \u062A\u0642\u062F\u064A\u0645 \u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A.",
      whatsappFormDate:
        "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u0641\u0631: {date}",
      whatsappFormGuests:
        "\u0639\u062F\u062F \u0627\u0644\u0636\u064A\u0648\u0641: {guests}",
      whatsappFormMessage:
        "\u0631\u0633\u0627\u0644\u0629 \u0625\u0636\u0627\u0641\u064A\u0629: {message}",
      whatsappFormPackage: "\u0627\u0644\u0628\u0627\u0642\u0629: {package}",
      sidebarTitleSewa:
        "\u0627\u0633\u062A\u0626\u062C\u0627\u0631 \u0647\u0630\u0647 \u0627\u0644\u0645\u0631\u0643\u0628\u0629",
      sidebarTitlePaket:
        "\u0627\u062D\u062C\u0632 \u0647\u0630\u0647 \u0627\u0644\u0628\u0627\u0642\u0629",
      sectionTitleSewa:
        "\u062A\u0623\u062C\u064A\u0631 \u0633\u064A\u0627\u0631\u0627\u062A \u0641\u064A Sungkar Group",
      sectionTitlePaket:
        "\u0627\u062D\u062C\u0632 \u0628\u0627\u0642\u0629 \u0633\u064A\u0627\u062D\u064A\u0629",
      contextLabelSewa:
        "\u0627\u0644\u0645\u0631\u0643\u0628\u0629 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629",
      contextLabelPaket:
        "\u0627\u0644\u0628\u0627\u0642\u0629 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629",
      followUs: "\u062A\u0627\u0628\u0639\u0646\u0627",
      phoneWhatsapp:
        "\u0627\u0644\u0647\u0627\u062A\u0641 / \u0648\u0627\u062A\u0633\u0627\u0628",
      formFieldName: "\u0627\u0644\u0627\u0633\u0645",
      formFieldTravelDate:
        "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u0641\u0631",
      formFieldTravelDateSewa:
        "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0623\u062C\u064A\u0631",
      formFieldDuration:
        "\u0645\u062F\u0629 \u0627\u0644\u062A\u0623\u062C\u064A\u0631",
      formFieldGuests:
        "\u0639\u062F\u062F \u0627\u0644\u0636\u064A\u0648\u0641",
      formFieldPassengers:
        "\u0639\u062F\u062F \u0627\u0644\u0631\u0643\u0627\u0628",
      formFieldRentalReason:
        "\u063A\u0631\u0636 \u0627\u0644\u062A\u0623\u062C\u064A\u0631",
      formFieldMessage:
        "\u0631\u0633\u0627\u0644\u0629 \u0625\u0636\u0627\u0641\u064A\u0629",
    },
    seo: {
      keywords:
        "\u0628\u0627\u0642\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629 \u0644\u0648\u0645\u0628\u0648\u0643\u060C \u062C\u0648\u0644\u0627\u062A \u0644\u0648\u0645\u0628\u0648\u0643\u060C \u0631\u062D\u0644\u0627\u062A \u0644\u0648\u0645\u0628\u0648\u0643\u060C \u0633\u064A\u0627\u062D\u0629 \u0633\u0648\u0645\u0628\u0627\u0648\u0627\u060C \u062D\u0648\u062A \u0627\u0644\u062D\u0648\u062A \u0633\u0648\u0645\u0628\u0627\u0648\u0627\u060C \u0644\u0627\u0628\u0648\u0627\u0646 \u0628\u0627\u062C\u0648\u060C \u0631\u062D\u0644\u0629 \u0643\u0648\u0645\u0648\u062F\u0648\u060C \u062A\u0623\u062C\u064A\u0631 \u0633\u064A\u0627\u0631\u0627\u062A \u0644\u0648\u0645\u0628\u0648\u0643\u060C \u0633\u0648\u0646\u062C\u0627\u0631 \u062C\u0631\u0648\u0628",
      siteName: "\u0633\u0648\u0646\u062C\u0627\u0631 \u062C\u0631\u0648\u0628",
    },
    blogSection: {
      share:
        "\u0634\u0627\u0631\u0643 \u0647\u0630\u0627 \u0627\u0644\u0645\u0642\u0627\u0644",
      relatedPosts:
        "\u0645\u0642\u0627\u0644\u0627\u062A \u0630\u0627\u062A \u0635\u0644\u0629",
      relatedPostsDesc:
        "\u0627\u0642\u0631\u0623 \u0645\u0642\u0627\u0644\u0627\u062A \u0623\u062E\u0631\u0649 \u0645\u0646\u0627",
      copyLink: "\u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637",
      linkCopied:
        "\u062A\u0645 \u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637!",
      emptyState:
        "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0642\u0627\u0644\u0627\u062A \u0628\u0639\u062F. \u0642\u0631\u064A\u0628\u064B\u0627!",
      description:
        "\u0646\u0635\u0627\u0626\u062D \u0648\u0625\u0644\u0647\u0627\u0645 \u0648\u0623\u062D\u062F\u062B \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u062D\u0648\u0644 \u0627\u0644\u0633\u064A\u0627\u062D\u0629 \u0641\u064A \u0644\u0648\u0645\u0628\u0648\u0643 \u0648\u0633\u0648\u0645\u0628\u0627\u0648\u0627 \u0648\u0644\u0627\u0628\u0648\u0627\u0646 \u0628\u0627\u062C\u0648.",
    },
  },
  ms: {
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
    gallery: {
      title: "Galeri",
      photos: "Gambar Perjalanan",
      previousImage: "Imej sebelumnya",
      nextImage: "Imej seterusnya",
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
      galleryTitle: "Galeri Pengalaman Pengembara",
      totalOnGoogle: "{n} ulasan di Google",
      googleReview: "Ulasan Google",
      ratingOutOfFive: "{rating} daripada 5 bintang",
      galleryPhotoCaptions: [
        "Momen perjalanan keluarga",
        "Eksplorasi pantai dan pulau",
        "Bantuan pemandu tempatan",
        "Perjalanan kumpulan dan komuniti",
      ],
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
      keyTakeaways: "Poin-Poin Utama",
      keyTakeawaysDesc:
        "Perkara penting yang perlu anda ketahui dari panduan ini",
      relatedDestinations: "Destinasi Berkaitan",
      relatedDestinationsDesc: "Tempat yang disyorkan berdasarkan panduan ini",
      relatedPackages: "Pakej Pelancongan Berkaitan",
      relatedPackagesDesc: "Pakej pelancongan yang sesuai dengan panduan ini",
      otherGuides: "Panduan Lain",
      destinationRelated: "Destinasi Berkaitan",
      packageRelated: "Pakej Pelancongan Berkaitan",
      regionLombok:
        "Tips dan panduan pelancongan untuk percutian anda di Lombok.",
      regionSumbawa: "Informasi pelancongan untuk pengembaraan di Sumbawa.",
      regionLabuanBajo: "Semua yang perlu anda tahu sebelum ke Labuan Bajo.",
      regionGeneral: "Panduan umum untuk perjalanan anda.",
      stepName: "Langkah {n}",
      guidesIndexDesc:
        "Panduan lengkap untuk merancang perjalanan anda ke Lombok, Sumbawa, dan Labuan Bajo.",
    },
    sewaMobil: {
      title: "Sewa Kereta",
      vehicleDetail: "Butiran Kenderaan",
      specifications: "Spesifikasi",
      transmission: "Transmisi",
      passengers: "Penumpang",
      features: "Ciri Utama",
      suitableFor: "Sesuai Untuk",
      viewDetailRent: "Lihat Butiran & Sewa",
      pricePerDay: "Harga sehari",
      vehicleFor: "Kenderaan Sewa di {region}",
      rentalVehicles: "Pilihan Kenderaan {region}",
      allVehicles:
        "Semua kenderaan di {region} telah diperiksa dan disertakan dengan insurans komprehensif untuk keselamatan perjalanan anda.",
      faqTitle: "Soalan Tentang Sewa Kereta",
      faqTitleFor: "Soalan Tentang Sewa Kereta di {region}",
    },
    paketWisata: {
      title: "Pakej Pelancongan",
      eyebrow: "Pakej Pelancongan",
      packagesFor: "Pakej Pelancongan {region}",
      chooseCategory:
        "Pilih kategori pakej pelancongan yang tersedia di {region}.",
      howToBook: "Cara Tempahan",
      readyToStart: "Sedia Memulakan Perjalanan?",
      faqTitle: "Soalan Tentang Pakej Pelancongan",
      exploreServices: "Terokai Perkhidmatan Kami",
      duration: "Tempoh",
      category: "Kategori",
      location: "Lokasi",
      statsLabel: "Statistik",
      viewPackageDetail: "Lihat Butiran Pakej",
      packagesAvailable: "{n} pakej tersedia",
      morePackages: "+{n} lagi pakej",
      itineraryLabel: "Perjalanan",
      itinerary: "Jadual Perjalanan",
      itineraryDesc:
        "Setiap hari dirancang untuk memberikan pengalaman terbaik semasa perjalanan anda.",
      facilitiesLabel: "Kemudahan",
      includedExcluded: "Yang Termasuk & Tidak Termasuk",
      includedExcludedDesc:
        "Semua kemudahan yang disenaraikan untuk membantu anda membuat persediaan perjalanan.",
      included: "Termasuk",
      excluded: "Tidak Termasuk",
      boatSpecs: "Spesifikasi Bot",
      boatType: "Jenis Bot",
      boatCapacity: "Kapasiti",
      cabins: "Kabin",
      cabinPrice: "Harga Kabin",
      termsAndConditions: "Syarat & Ketentuan",
    },
    akomodasi: {
      title: "Penginapan",
      eyebrow: "Pilihan Penginapan",
      accommodationChoice: "Penginapan di {region}",
      exploreAccommodation:
        "Terokai pelbagai pilihan penginapan berkualiti di {region} yang disesuaikan dengan keperluan dan keutamaan perjalanan anda.",
      faqTitle: "Soalan Tentang Penginapan",
      features: "Kemudahan Utama",
      morePerks: "+{n} lagi",
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
      imageAltSunrise: "Lombok ketika matahari terbit",
      imageAltSunset: "Pemandangan pantai Lombok dengan matahari terbenam",
      imageAltDestinations: "Destinasi Lombok",
      pageNotFound: "Halaman Tidak Ditemui",
      pageNotFoundDesc:
        "Halaman yang anda cari mungkin telah dipindahkan, dipadam, atau tidak pernah wujud.",
    },
    about: {
      vision: "Visi",
      mission: "Misi",
      ourValues: "Nilai-Nilai Kami",
      whyChooseUs: "Mengapa pelancong memilih Sungkar Group",
      ourJourney: "Perjalanan Kami",
      whatWeDo: "Apa yang Kami Lakukan",
    },
    contact: {
      formDesc:
        "Isi borang di bawah, pasukan kami akan membalas melalui WhatsApp dalam masa terdekat.",
      formDescSidebar:
        "Isi borang di bawah dan pasukan kami akan membalas melalui WhatsApp.",
      contactInfoTitle: "Maklumat Hubungan",
      contactInfoDescription: "Hubungi kami melalui saluran yang tersedia",
      chooseLocation: "Pilih lokasi",
      choosePackage: "Pilih pakej",
      selectLocationFirst: "Pilih lokasi terlebih dahulu",
      optional: "opsyenal",
      formTitle: "Ceritakan rancangan perjalanan anda",
      formDescription:
        "Berikan maklumat asas perjalanan supaya pasukan kami dapat memberikan cadangan yang lebih relevan.",
      mapTitle: "Lokasi Kami",
      mapDescription:
        "Lawati pejabat Sungkar Group atau hubungi pasukan kami untuk konsultasi perjalanan.",
      formWhatsappSubject: "Pertanyaan Baru - Laman Web Sungkar Group",
      whatsappGreeting: "Halo Sungkar Group,",
      whatsappSewaIntro: "Saya ingin sewa: {item}",
      whatsappPaketIntro: "Saya berminat dengan pakej: {item}",
      whatsappLocation: "Lokasi: {region}",
      whatsappFollowUp: "Sila berikan maklumat lanjut.",
      whatsappFormDate: "Tarikh perjalanan: {date}",
      whatsappFormGuests: "Jumlah tetamu: {guests}",
      whatsappFormMessage: "Mesej tambahan: {message}",
      whatsappFormPackage: "Pakej: {package}",
      sidebarTitleSewa: "Sewa kenderaan ini",
      sidebarTitlePaket: "Tempah pakej ini",
      sectionTitleSewa: "Sewa Kereta di Sungkar Group",
      sectionTitlePaket: "Tempah Pakej Pelancongan",
      contextLabelSewa: "Kenderaan Dipilih",
      contextLabelPaket: "Pakej Dipilih",
      followUs: "Ikuti Kami",
      phoneWhatsapp: "Telefon / WhatsApp",
      formFieldName: "Nama",
      formFieldTravelDate: "Tarikh perjalanan",
      formFieldTravelDateSewa: "Tarikh sewa",
      formFieldDuration: "Tempoh sewa",
      formFieldGuests: "Jumlah tetamu",
      formFieldPassengers: "Jumlah penumpang",
      formFieldRentalReason: "Tujuan sewa",
      formFieldMessage: "Mesej tambahan",
    },
    seo: {
      keywords:
        "pakej pelancongan lombok, tour lombok, open trip lombok, wisata sumbawa, whale shark sumbawa, wisata labuan bajo, tour komodo, sewa kereta lombok, sungkar group",
      siteName: "Sungkar Group",
    },
    blogSection: {
      share: "Kongsi artikel ini",
      relatedPosts: "Artikel Berkaitan",
      relatedPostsDesc: "Baca artikel lain daripada kami",
      copyLink: "Salin pautan",
      linkCopied: "Pautan disalin!",
      emptyState: "Belum ada artikel. Akan datang!",
      description:
        "Tips, inspirasi, dan maklumat terkini tentang pelancongan di Lombok, Sumbawa, dan Labuan Bajo.",
    },
  },
  zh: {
    header: {
      chatWhatsapp: "WhatsApp\u804A\u5929",
      menu: "\u83DC\u5355",
      exploreDestinations: "\u63A2\u7D22\u76EE\u7684\u5730",
      language: "\u8BED\u8A00",
      destinationsSubtitle:
        "\u9F99\u6728\u5C9B \u2022 \u677E\u5DF4\u74E6 \u2022 \u62C9\u5E03\u5B89\u5DF4\u7126",
    },
    nav: {
      availablePackages: "\u53EF\u7528\u65C5\u6E38\u5957\u9910",
      checkAvailability: "\u67E5\u770B\u53EF\u7528\u6027",
      chatWhatsapp: "WhatsApp\u804A\u5929",
    },
    footer: {
      brandName: "Sungkar Group",
      description:
        "\u5F53\u5730\u65C5\u6E38\u8FD0\u8425\u5546\uFF0C\u670D\u52A1\u4E8E\u9F99\u6728\u5C9B\u3001\u68EE\u5DF4\u74E6\u548C\u62C9\u5E03\u5B89\u5DF4\u7126\u3002",
      navigation: "\u5BFC\u822A",
      destinations: "\u76EE\u7684\u5730",
      company: "\u516C\u53F8",
      copyright:
        "\u00A9 {year} Sungkar Group\u3002\u4FDD\u7559\u6240\u6709\u6743\u5229\u3002",
      privacy: "\u9690\u79C1\u653F\u7B56",
      terms: "\u6761\u6B3E\u548C\u6761\u4EF6",
      instagram: "Instagram",
      youtube: "YouTube",
      facebook: "Facebook",
      tiktok: "TikTok",
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
      blog: "Blog",
    },
    gallery: {
      title: "\u7535\u5B50\u76F8\u518C",
      photos: "\u65C5\u884C\u7167\u7247",
      previousImage: "\u4E0A\u4E00\u5F20\u56FE\u7247",
      nextImage: "\u4E0B\u4E00\u5F20\u56FE\u7247",
    },
    cta: {
      book: "\u7ACB\u5373\u9884\u8BA2",
      startJourney:
        "\u51C6\u5907\u597D\u5F00\u59CB\u60A8\u7684\u65C5\u7A0B\u4E86\u5417\uFF1F",
      startPlanning: "\u5F00\u59CB\u89C4\u5212\u60A8\u7684\u65C5\u884C",
      consultTrip: "\u54A8\u8BE2\u65C5\u7A0B",
      seePackages: "\u67E5\u770B\u5957\u9910",
    },
    reviews: {
      seeOnGoogleMaps: "\u5728Google\u5730\u56FE\u4E0A\u67E5\u770B",
      seeAllReviews: "\u67E5\u770BGoogle\u4E0A\u7684\u6240\u6709\u8BC4\u4EF7",
      galleryTitle: "\u65C5\u884C\u8005\u4F53\u9A8C\u753B\u5ECA",
      totalOnGoogle: "\u5728Google\u4E0A\u6709{n}\u6761\u8BC4\u4EF7",
      googleReview: "Google\u8BC4\u8BBA",
      ratingOutOfFive: "{rating}/5\u661F",
      galleryPhotoCaptions: [
        "\u5BB6\u5EAD\u65C5\u884C\u65F6\u5149",
        "\u6D77\u6EE9\u548C\u5C9B\u5C7F\u63A2\u7D22",
        "\u5F53\u5730\u5BFC\u6E38\u534F\u52A9",
        "\u56E2\u4F53\u548C\u793E\u533A\u65C5\u884C",
      ],
    },
    faq: {
      sectionTitle: "\u5E38\u89C1\u95EE\u9898",
      sectionAbout: "\u5173\u4E8ESungkar Group\u7684\u95EE\u9898",
      sectionContact:
        "\u5173\u4E8E\u8054\u7CFB\u548C\u9884\u8BA2\u7684\u95EE\u9898",
      sectionPackages: "\u5173\u4E8E\u65C5\u6E38\u5957\u9910\u7684\u95EE\u9898",
      sectionCarRental:
        "\u5173\u4E8E\u6C7D\u8F66\u79DF\u8D41\u7684\u95EE\u9898",
      sectionAccommodations: "\u5173\u4E8E\u4F4F\u5BBF\u7684\u95EE\u9898",
      sectionReviews: "\u5173\u4E8E\u5BA2\u6237\u8BC4\u4EF7\u7684\u95EE\u9898",
      sectionGeneral: "\u5E38\u89C1\u95EE\u9898",
    },
    guides: {
      general: "\u901A\u7528\u6307\u5357",
      guideFor: "{region}\u6307\u5357",
      readingTime: "\u5206\u949F\u9605\u8BFB",
      keyTakeaways: "\u5173\u952E\u8981\u70B9",
      keyTakeawaysDesc:
        "\u60A8\u9700\u8981\u4ECE\u672C\u6307\u5357\u4E2D\u4E86\u89E3\u7684\u91CD\u8981\u4E8B\u9879",
      relatedDestinations: "\u76F8\u5173\u76EE\u7684\u5730",
      relatedDestinationsDesc:
        "\u6839\u636E\u6B64\u6307\u5357\u63A8\u8350\u7684\u5730\u70B9",
      relatedPackages: "\u76F8\u5173\u65C5\u6E38\u5957\u9910",
      relatedPackagesDesc:
        "\u4E0E\u6B64\u6307\u5357\u5339\u914D\u7684\u65C5\u6E38\u5957\u9910",
      otherGuides: "\u5176\u4ED6\u6307\u5357",
      destinationRelated: "\u76F8\u5173\u76EE\u7684\u5730",
      packageRelated: "\u76F8\u5173\u65C5\u6E38\u5957\u9910",
      regionLombok:
        "\u9F99\u6728\u5C9B\u5047\u671F\u7684\u65C5\u884C\u5C0F\u8D34\u58EB\u548C\u6307\u5357\u3002",
      regionSumbawa:
        "\u677E\u5DF4\u74E6\u63A2\u9669\u7684\u65C5\u884C\u4FE1\u606F\u3002",
      regionLabuanBajo:
        "\u524D\u5F80\u62C9\u5E03\u5B89\u5DF4\u7126\u524D\u9700\u8981\u4E86\u89E3\u7684\u4E00\u5207\u3002",
      regionGeneral: "\u65C5\u884C\u901A\u7528\u6307\u5357\u3002",
      stepName: "\u6B65\u9AA4{n}",
      guidesIndexDesc:
        "\u89C4\u5212\u60A8\u7684\u9F99\u6728\u5C9B\u3001\u68EE\u5DF4\u74E6\u548C\u62C9\u5E03\u5B89\u5DF4\u7126\u4E4B\u65C5\u7684\u5B8C\u6574\u6307\u5357\u3002",
    },
    sewaMobil: {
      title: "\u6C7D\u8F66\u79DF\u8D41",
      vehicleDetail: "\u8F66\u8F86\u8BE6\u60C5",
      specifications: "\u89C4\u683C",
      transmission: "\u53D8\u901F\u7BB1",
      passengers: "\u4E58\u5BA2",
      features: "\u4E3B\u8981\u7279\u70B9",
      suitableFor: "\u9002\u5408",
      viewDetailRent: "\u67E5\u770B\u8BE6\u60C5\u5E76\u79DF\u8D41",
      pricePerDay: "\u6BCF\u5929\u4EF7\u683C",
      vehicleFor: "{region}\u7684\u79DF\u8D41\u8F66\u8F86",
      rentalVehicles: "{region}\u7684\u8F66\u8F86\u9009\u9879",
      allVehicles:
        "{region}\u7684\u6240\u6709\u8F66\u8F86\u5747\u5DF2\u68C0\u67E5\u5E76\u9644\u6709\u7EFC\u5408\u4FDD\u9669\uFF0C\u786E\u4FDD\u60A8\u7684\u65C5\u884C\u5B89\u5168\u3002",
      faqTitle: "\u5173\u4E8E\u6C7D\u8F66\u79DF\u8D41\u7684\u95EE\u9898",
      faqTitleFor:
        "\u5173\u4E8E{region}\u6C7D\u8F66\u79DF\u8D41\u7684\u95EE\u9898",
    },
    paketWisata: {
      title: "\u65C5\u6E38\u5957\u9910",
      eyebrow: "\u65C5\u6E38\u5957\u9910",
      packagesFor: "{region}\u65C5\u6E38\u5957\u9910",
      chooseCategory:
        "\u9009\u62E9{region}\u53EF\u7528\u7684\u65C5\u6E38\u5957\u9910\u7C7B\u522B\u3002",
      howToBook: "\u5982\u4F55\u9884\u8BA2",
      readyToStart:
        "\u51C6\u5907\u597D\u5F00\u59CB\u60A8\u7684\u65C5\u7A0B\u4E86\u5417\uFF1F",
      faqTitle: "\u5173\u4E8E\u65C5\u6E38\u5957\u9910\u7684\u95EE\u9898",
      exploreServices: "\u63A2\u7D22\u6211\u4EEC\u7684\u670D\u52A1",
      duration: "\u65F6\u957F",
      category: "\u7C7B\u522B",
      location: "\u5730\u70B9",
      statsLabel: "\u7EDF\u8BA1",
      viewPackageDetail: "\u67E5\u770B\u5957\u9910\u8BE6\u60C5",
      packagesAvailable: "\u6709{n}\u4E2A\u5957\u9910",
      morePackages: "+{n}\u4E2A\u66F4\u591A\u5957\u9910",
      itineraryLabel: "\u884C\u7A0B",
      itinerary: "\u884C\u7A0B\u5B89\u6392",
      itineraryDesc:
        "\u6BCF\u4E00\u5929\u90FD\u65E8\u5728\u4E3A\u60A8\u5728\u65C5\u9014\u4E2D\u63D0\u4F9B\u6700\u4F73\u4F53\u9A8C\u3002",
      facilitiesLabel: "\u8BBE\u65BD",
      includedExcluded: "\u5305\u542B\u4E0E\u4E0D\u5305\u542B",
      includedExcludedDesc:
        "\u5217\u51FA\u6240\u6709\u8BBE\u65BD\u4EE5\u5E2E\u52A9\u60A8\u51C6\u5907\u65C5\u884C\u3002",
      included: "\u5305\u542B",
      excluded: "\u4E0D\u5305\u542B",
      boatSpecs: "\u8239\u53EA\u89C4\u683C",
      boatType: "\u8239\u53EA\u7C7B\u578B",
      boatCapacity: "\u5BB9\u91CF",
      cabins: "\u8239\u8231",
      cabinPrice: "\u8231\u623F\u4EF7\u683C",
      termsAndConditions: "\u6761\u6B3E\u548C\u6761\u4EF6",
    },
    akomodasi: {
      title: "\u4F4F\u5BBF",
      eyebrow: "\u4F4F\u5BBF\u9009\u62E9",
      accommodationChoice: "{region}\u7684\u4F4F\u5BBF",
      exploreAccommodation:
        "\u63A2\u7D22{region}\u7684\u5404\u79CD\u4F18\u8D28\u4F4F\u5BBF\u9009\u62E9\uFF0C\u6EE1\u8DB3\u60A8\u7684\u65C5\u884C\u9700\u6C42\u548C\u504F\u597D\u3002",
      faqTitle: "\u5173\u4E8E\u4F4F\u5BBF\u7684\u95EE\u9898",
      features: "\u4E3B\u8981\u8BBE\u65BD",
      morePerks: "+{n}\u66F4\u591A",
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
      blog: "Blog",
      faq: "\u5E38\u89C1\u95EE\u9898",
    },
    common: {
      explore: "\u63A2\u7D22",
      readMore: "\u9605\u8BFB\u66F4\u591A",
      learnMore: "\u4E86\u89E3\u66F4\u591A",
      contactUs: "\u8054\u7CFB\u6211\u4EEC",
      bookNow: "\u7ACB\u5373\u9884\u8BA2",
      submit: "\u63D0\u4EA4",
      send: "\u53D1\u9001",
      back: "\u8FD4\u56DE",
      seeMore: "\u67E5\u770B\u66F4\u591A",
      viewAll: "\u67E5\u770B\u5168\u90E8",
      backToTop: "\u2191\u8FD4\u56DE\u9876\u90E8",
      viewDetail: "\u67E5\u770B\u8BE6\u60C5",
      moreCount: "+{n}\u66F4\u591A",
      contactForPrice: "\u8054\u7CFB\u83B7\u53D6\u4EF7\u683C",
      people: "\u4EBA",
      imageAltSunrise: "\u65E5\u51FA\u65F6\u7684\u9F99\u6728\u5C9B",
      imageAltSunset:
        "\u65E5\u843D\u65F6\u7684\u9F99\u6728\u5C9B\u6D77\u6EE9\u7F8E\u666F",
      imageAltDestinations: "\u9F99\u6728\u5C9B\u76EE\u7684\u5730",
      pageNotFound: "\u9875\u9762\u672A\u627E\u5230",
      pageNotFoundDesc:
        "\u60A8\u5BFB\u627E\u7684\u9875\u9762\u53EF\u80FD\u5DF2\u88AB\u79FB\u52A8\u3001\u5220\u9664\u6216\u4ECE\u672A\u5B58\u5728\u8FC7\u3002",
    },
    about: {
      vision: "\u613F\u666F",
      mission: "\u4F7F\u547D",
      ourValues: "\u6211\u4EEC\u7684\u4EF7\u503C\u89C2",
      whyChooseUs:
        "\u4E3A\u4EC0\u4E48\u65C5\u884C\u8005\u9009\u62E9Sungkar Group",
      ourJourney: "\u6211\u4EEC\u7684\u65C5\u7A0B",
      whatWeDo: "\u6211\u4EEC\u7684\u5DE5\u4F5C",
    },
    contact: {
      formDesc:
        "\u586B\u5199\u4EE5\u4E0B\u8868\u683C\uFF0C\u6211\u4EEC\u7684\u56E2\u961F\u5C06\u5F88\u5FEB\u901A\u8FC7WhatsApp\u56DE\u590D\u3002",
      formDescSidebar:
        "\u586B\u5199\u8868\u683C\uFF0C\u6211\u4EEC\u7684\u56E2\u961F\u5C06\u901A\u8FC7WhatsApp\u4E0E\u60A8\u8054\u7CFB\u3002",
      contactInfoTitle: "\u8054\u7CFB\u4FE1\u606F",
      contactInfoDescription:
        "\u901A\u8FC7\u53EF\u7528\u6E20\u9053\u8054\u7CFB\u6211\u4EEC",
      chooseLocation: "\u9009\u62E9\u5730\u70B9",
      choosePackage: "\u9009\u62E9\u5957\u9910",
      selectLocationFirst: "\u8BF7\u5148\u9009\u62E9\u5730\u70B9",
      optional: "\u53EF\u9009",
      formTitle: "\u544A\u8BC9\u6211\u4EEC\u60A8\u7684\u65C5\u884C\u8BA1\u5212",
      formDescription:
        "\u63D0\u4F9B\u57FA\u672C\u65C5\u884C\u4FE1\u606F\uFF0C\u8BA9\u6211\u4EEC\u7684\u56E2\u961F\u80FD\u4E3A\u60A8\u63D0\u4F9B\u66F4\u8D34\u5408\u7684\u5EFA\u8BAE\u3002",
      mapTitle: "\u6211\u4EEC\u7684\u4F4D\u7F6E",
      mapDescription:
        "\u8BBF\u95EE Sungkar Group \u529E\u516C\u5BA4\u6216\u8054\u7CFB\u6211\u4EEC\u8FDB\u884C\u65C5\u884C\u54A8\u8BE2\u3002",
      formWhatsappSubject: "\u65B0\u54A8\u8BE2 - Sungkar Group\u7F51\u7AD9",
      whatsappGreeting: "\u60A8\u597D Sungkar Group\uFF0C",
      whatsappSewaIntro: "\u6211\u60F3\u79DF\u8D41: {item}",
      whatsappPaketIntro: "\u6211\u5BF9\u5957\u9910\u611F\u5174\u8DA3: {item}",
      whatsappLocation: "\u4F4D\u7F6E: {region}",
      whatsappFollowUp: "\u8BF7\u63D0\u4F9B\u66F4\u591A\u4FE1\u606F\u3002",
      whatsappFormDate: "\u65C5\u884C\u65E5\u671F: {date}",
      whatsappFormGuests: "\u5BA2\u4EBA\u6570\u91CF: {guests}",
      whatsappFormMessage: "\u9644\u52A0\u4FE1\u606F: {message}",
      whatsappFormPackage: "\u5957\u9910: {package}",
      sidebarTitleSewa: "\u79DF\u8D41\u6B64\u8F66\u8F86",
      sidebarTitlePaket: "\u9884\u8BA2\u6B64\u5957\u9910",
      sectionTitleSewa: "\u5728Sungkar Group\u79DF\u8F66",
      sectionTitlePaket: "\u9884\u8BA2\u65C5\u6E38\u5957\u9910",
      contextLabelSewa: "\u5DF2\u9009\u8F66\u8F86",
      contextLabelPaket: "\u5DF2\u9009\u5957\u9910",
      followUs: "\u5173\u6CE8\u6211\u4EEC",
      phoneWhatsapp: "\u7535\u8BDD / WhatsApp",
      formFieldName: "\u59D3\u540D",
      formFieldTravelDate: "\u65C5\u884C\u65E5\u671F",
      formFieldTravelDateSewa: "\u79DF\u8D41\u65E5\u671F",
      formFieldDuration: "\u79DF\u8D41\u671F\u9650",
      formFieldGuests: "\u5BA2\u4EBA\u6570\u91CF",
      formFieldPassengers: "\u4E58\u5BA2\u6570\u91CF",
      formFieldRentalReason: "\u79DF\u8D41\u76EE\u7684",
      formFieldMessage: "\u9644\u52A0\u4FE1\u606F",
    },
    seo: {
      keywords:
        "\u9F99\u6728\u5C9B\u65C5\u6E38\u5957\u9910, \u9F99\u6728\u5C9B\u4E00\u65E5\u6E38, \u9F99\u6728\u5C9B\u62FC\u56E2\u6E38, \u68EE\u5DF4\u74E6\u65C5\u6E38, \u68EE\u5DF4\u74E6\u9CA8\u9C7C, \u62C9\u5E03\u5B89\u5DF4\u7126\u65C5\u6E38, \u79D1\u6469\u591A\u65C5\u6E38, \u9F99\u6728\u5C9B\u6C7D\u8F66\u79DF\u8D41, Sungkar Group",
      siteName: "Sungkar Group",
    },
    blogSection: {
      share: "\u5206\u4EAB\u6B64\u6587\u7AE0",
      relatedPosts: "\u76F8\u5173\u6587\u7AE0",
      relatedPostsDesc: "\u9605\u8BFB\u66F4\u591A\u6587\u7AE0",
      copyLink: "\u590D\u5236\u94FE\u63A5",
      linkCopied: "\u94FE\u63A5\u5DF2\u590D\u5236!",
      emptyState: "\u6682\u65E0\u6587\u7AE0\u3002\u5373\u5C06\u4E0A\u7EBF!",
      description:
        "\u5173\u4E8E\u9F99\u6728\u5C9B\u3001\u68EE\u5DF4\u74E6\u548C\u62C9\u5E03\u5B89\u5DF4\u7126\u65C5\u6E38\u7684\u5C0F\u8D34\u58EB\u3001\u7075\u611F\u548C\u6700\u65B0\u4FE1\u606F\u3002",
    },
  },
};

export function t(locale: string): UIStrings {
  return translations[locale as Locale] || translations.id;
}
