import { DESTINATIONS } from "@/assets/images";

export const destinationsPageContent = {
  hero: {
    eyebrow: "Destinasi Wisata",
    title: "Destinasi Wisata Lombok, Gili, Rinjani, dan Sumbawa",
    description:
      "Temukan pantai, desa budaya, dan area pegunungan terbaik untuk liburan di Lombok, Gili, Rinjani, dan Sumbawa. Dari pantai Kuta hingga gunung Rinjani, setiap destinasi menawarkan pengalaman unik.",
  },
  groups: [
    {
      id: "lombok",
      label: "Lombok",
      title: "Destinasi Wisata Lombok",
      description:
        "Pantai pasir putih, desa Sasak tradisional, dan air terjun tersembunyi. Kuta Lombok menjadi basecamp populer untuk akses mudah ke pantai selatan dan budaya lokal.",
      destinationSlugs: ["kuta-lombok", "tetebatu"],
      intro:
        "Pilih destinasi di Lombok untuk kombinasi pantai, budaya, dan rute harian yang fleksibel.",
    },
    {
      id: "gili",
      label: "Kepulauan Gili",
      title: "Kepulauan Gili: Trawangan, Air, Meno",
      description:
        "Tiga pulau tropis dengan air jernih untuk snorkeling, diving, dan island hopping. Gili Trawangan untuk nightlife, Gili Air untuk keseimbangan, Gili Meno untuk kedamaian total.",
      destinationSlugs: ["gili-trawangan", "gili-air", "gili-meno"],
      intro:
        "Rute pulau yang cocok untuk snorkeling, island hopping, dan tempo liburan yang lebih santai.",
    },
    {
      id: "pegunungan",
      label: "Pegunungan",
      title: "Gunung Rinjani & Area Pegunungan",
      description:
        "Pendakian Rinjani via Sembalun atau Senaru, mata air panas, dan pemandangan kawah segara anak. Cocok untuk petualangan multi-hari dan pengalaman alam dramatis.",
      destinationSlugs: ["sembalun", "rinjani", "senaru"],
      intro:
        "Destinasi dengan nuansa dataran tinggi dan akses ke pengalaman alam yang lebih dramatis.",
    },
  ],
  faq: [
    {
      question: "Apa yang paling cocok dilakukan di destinasi ini?",
      answer:
        "Di pantai seperti Kuta Mandalika dan Gili Trawangan, aktivitas utama adalah snorkeling, island hopping, dan bersantai. Untuk area pegunungan seperti Rinjani dan Sembalun, trekking dan camping jadi pilihan. Setiap destinasi punya rekomendasi aktivitas yang bisa dipadukan dalam paket wisata harian.",
    },
    {
      question: "Apakah destinasi ini bisa digabung dengan paket lain?",
      answer:
        "Bisa. Misalnya, Anda bisa menggabungkan wisata pantai Kuta Lombok dengan kunjungan ke Gili, atau Rinjani dengan air terjun Tetebatu. Halaman ini menampilkan paket wisata yang sudah dirancang untuk kombinasi destinasi yang paling efisien.",
    },
    {
      question: "Apakah transportasi harian tersedia untuk destinasi ini?",
      answer:
        "Ya. Tersedia driver harian dan layanan sewa mobil di Lombok, Sumbawa, dan Labuan Bajo agar perpindahan antar destinasi lebih nyaman. Anda juga bisa memesan transfer dari bandara atau pelabuhan ke hotel.",
    },
  ],
  relatedContent: [
    {
      title: "Paket Wisata",
      href: "/paket-wisata",
      description:
        "Pilih dari berbagai paket wisata yang sudah direncanakan untuk setiap destinasi",
    },
    {
      title: "Panduan Wisata",
      href: "/panduan-wisata",
      description:
        "Dapatkan tips dan panduan untuk memaksimalkan pengalaman di setiap destinasi",
    },
    {
      title: "Akomodasi",
      href: "/akomodasi",
      description:
        "Temukan penginapan nyaman dan berkualitas di area destinasi pilihan Anda",
    },
  ],
  detail: {
    headline: "Destinasi",
    activitiesTitle: "Yang bisa dilakukan",
    relatedPackagesTitle: "Paket terkait",
    summaryTitle: "Ringkasan",
    transportTitle: "Transportasi",
    transportDescription:
      "Titik penjemputan bisa disesuaikan dengan bandara, pelabuhan, atau koridor hotel terdekat.",
    transportNote:
      "Dukungan driver harian adalah opsi paling fleksibel untuk hari dengan beberapa destinasi.",
    emptyRelatedPackages:
      "Belum ada paket yang ditautkan ke destinasi ini. Tim bisa membantu mencocokkan itinerary yang paling pas.",
    galleryTitle: "Galeri",
    emptyGallery: "Gambar destinasi akan ditambahkan segera.",
    faqTitle: "FAQ Destinasi",
  },
  spotlightImage: DESTINATIONS.lombok,
} as const;
