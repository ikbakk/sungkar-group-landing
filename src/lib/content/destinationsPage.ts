import { destinations } from "@/lib/content/destinationsData";

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
      intro: "Pilih destinasi di Lombok untuk kombinasi pantai, budaya, dan rute harian yang fleksibel.",
    },
    {
      id: "gili",
      label: "Kepulauan Gili",
      title: "Kepulauan Gili: Trawangan, Air, Meno",
      description:
        "Tiga pulau tropis dengan air jernih untuk snorkeling, diving, dan island hopping. Gili Trawangan untuk nightlife, Gili Air untuk keseimbangan, Gili Meno untuk kedamaian total.",
      destinationSlugs: ["gili-trawangan", "gili-air", "gili-meno"],
      intro: "Rute pulau yang cocok untuk snorkeling, island hopping, dan tempo liburan yang lebih santai.",
    },
    {
      id: "pegunungan",
      label: "Pegunungan",
      title: "Gunung Rinjani & Area Pegunungan",
      description:
        "Pendakian Rinjani via Sembalun atau Senaru, mata air panas, dan pemandangan kawah segara anak. Cocok untuk petualangan multi-hari dan pengalaman alam dramatis.",
      destinationSlugs: ["sembalun", "rinjani", "senaru"],
      intro: "Destinasi dengan nuansa dataran tinggi dan akses ke pengalaman alam yang lebih dramatis.",
    },
  ],
  faq: [
    {
      question: "Apa yang paling cocok dilakukan di destinasi ini?",
      answer:
        "Setiap destinasi menampilkan aktivitas utama yang paling relevan untuk rute wisata harian atau gabungan.",
    },
    {
      question: "Apakah destinasi ini bisa digabung dengan paket lain?",
      answer:
        "Bisa. Halaman destinasi menampilkan paket yang paling masuk akal untuk dikombinasikan.",
    },
    {
      question: "Apakah transportasi harian tersedia untuk destinasi ini?",
      answer:
        "Ya. Anda bisa memesan driver harian atau transfer agar perpindahan antar titik lebih sederhana.",
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
    faqTitle: "FAQ Destinasi",
  },
  spotlightImage: destinations[1].image,
};
