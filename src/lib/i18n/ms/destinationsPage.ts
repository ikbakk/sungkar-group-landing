import { destinations } from "@/lib/content/destinationsData";

export const destinationsPageContent = {
  hero: {
    eyebrow: "Destinasi",
    title: "Destinasi Pelancongan Lombok, Gili, Rinjani, dan Sumbawa",
    description:
      "Terokai pantai terbaik, kampung budaya, dan kawasan pegunungan untuk liburan anda di Lombok, Gili, Rinjani, dan Sumbawa. Dari pantai Kuta ke Gunung Rinjani, setiap destinasi menawarkan pengalaman yang unik.",
  },
  groups: [
    {
      id: "lombok",
      label: "Lombok",
      title: "Destinasi Pelancongan Lombok",
      description:
        "Pantai pasir putih, kampung tradisional Sasak, dan air terjun tersembunyi. Kuta Lombok adalah basecamp popular untuk akses mudah ke pantai pantai selatan dan budaya tempatan.",
      destinationSlugs: ["kuta-lombok", "tetebatu"],
      intro: "Pilih destinasi di Lombok untuk campuran pantai, budaya, dan laluan harian yang fleksibel.",
    },
    {
      id: "gili",
      label: "Pulau Gili",
      title: "Pulau Gili: Trawangan, Air, Meno",
      description:
        "Tiga pulau tropika dengan air jernih untuk snorkeling, menyelam, dan island hopping. Gili Trawangan untuk malam hari, Gili Air untuk keseimbangan, Gili Meno untuk ketenangan mutlak.",
      destinationSlugs: ["gili-trawangan", "gili-air", "gili-meno"],
      intro: "Laluan pulau yang sempurna untuk snorkeling, island hopping, dan tempo liburan yang lebih santai.",
    },
    {
      id: "pegunungan",
      label: "Pegunungan",
      title: "Gunung Rinjani & Kawasan Pegunungan",
      description:
        "Mendaki Rinjani melalui Sembalun atau Senaru, air panas, dan pemandangan kawah Segara Anak. Ideal untuk petualangan berbilang hari dan pengalaman alam yang dramatis.",
      destinationSlugs: ["sembalun", "rinjani", "senaru"],
      intro: "Destinasi dengan suasana pegunungan dan akses ke pengalaman alam yang lebih dramatis.",
    },
  ],
  faq: [
    {
      question: "Apakah perkara terbaik untuk dilakukan di destinasi ini?",
      answer:
        "Di pantai seperti Kuta Mandalika dan Gili Trawangan, aktiviti utama adalah snorkeling, island hopping, dan bersantai. Untuk kawasan pegunungan seperti Rinjani dan Sembalun, mendaki dan berkemah adalah pilihan. Setiap destinasi mempunyai aktiviti disyorkan yang boleh digabungkan ke dalam pakej pelancongan harian.",
    },
    {
      question: "Bolehkah destinasi ini digabungkan dengan pakej lain?",
      answer:
        "Ya. Contohnya, anda boleh menggabungkan pelancongan pantai Kuta Lombok dengan lawatan ke Pulau Gili, atau Rinjani dengan air terjun Tetebatu. Halaman ini mempamerkan pakej pelanconging yang sudah direka bentuk untuk kombinasi destinasi yang paling cekap.",
    },
    {
      question: "Adakah pengangkutan harian tersedia untuk destinasi ini?",
      answer:
        "Ya. Perkhidmatan pemandu harian dan sewa kereta tersedia di Lombok, Sumbawa, dan Labuan Bajo untuk memudahkan perpindahan antara destinasi. Anda juga boleh tempah penjemputan dari lapangan terbang atau pelabuhan ke hotel.",
    },
  ],
  relatedContent: [
    {
      title: "Pakej Pelancongan",
      href: "/paket-wisata",
      description:
        "Pilih pelbagai pakej pelancongan terancang untuk setiap destinasi",
    },
    {
      title: "Panduan Pelancongan",
      href: "/panduan-wisata",
      description:
        "Dapatkan tips dan panduan untuk memaksimumkan pengalaman anda di setiap destinasi",
    },
    {
      title: "Penginapan",
      href: "/akomodasi",
      description:
        "Cari penginapan selesa dan berkualiti di kawasan destinasi pilihan anda",
    },
  ],
  detail: {
    headline: "Destinasi",
    activitiesTitle: "Perkara untuk dilakukan",
    relatedPackagesTitle: "Pakej berkaitan",
    summaryTitle: "Ringkasan",
    transportTitle: "Pengangkutan",
    transportDescription:
      "Titik penjemputan boleh disesuaikan ke lapangan terbang, pelabuhan, atau koridor hotel berdekatan.",
    transportNote:
      "Sokongan pemandu harian adalah pilihan paling fleksibel untuk hari dengan pelbagai destinasi.",
    emptyRelatedPackages:
      "Tiada pakej yang dikaitkan dengan destinasi ini lagi. Pasukan kami boleh membantu padankan pelancong yang paling sesuai.",
    galleryTitle: "Galeri",
    emptyGallery: "Imej destinasi akan ditambah tidak lama lagi.",
    faqTitle: "Soalan Lazim Destinasi",
  },
  spotlightImage: destinations[1].image,
} as const;