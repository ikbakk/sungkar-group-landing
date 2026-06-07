export const aboutContent = {
  hero: {
    eyebrow: "Tentang Kami",
    title: "Mengenalkan Lombok melalui perjalanan yang nyaman dan bermakna",
    description:
      "Sungkar Group Indonesia adalah operator wisata lokal yang membantu wisatawan menjelajahi Lombok dengan pelayanan profesional, itinerary yang terencana, dan pengalaman yang lebih autentik.",
  },

  story: {
    title: "Berawal dari Kecintaan terhadap Lombok",
    paragraphs: [
      "Sungkar Group Indonesia lahir dari keyakinan bahwa pengalaman wisata terbaik bukan hanya tentang mengunjungi banyak tempat, tetapi tentang menikmati setiap perjalanan dengan nyaman dan bermakna.",

      "Sebagai operator wisata lokal yang berbasis di Lombok, kami memahami bahwa setiap wisatawan memiliki kebutuhan dan cara berlibur yang berbeda. Karena itu, kami berfokus pada pelayanan yang personal, itinerary yang terencana, dan pengalaman yang sesuai dengan tujuan perjalanan setiap tamu.",

      "Mulai dari wisata keluarga, perjalanan pasangan, rombongan komunitas, hingga kegiatan perusahaan, kami membantu menghadirkan perjalanan yang lebih terorganisir sehingga tamu dapat menikmati Lombok tanpa perlu khawatir mengurus detail perjalanan sendiri.",
    ],
  },

  vision: {
    title: "Visi",
    description:
      "Menjadi perusahaan pariwisata terpercaya yang menghadirkan pengalaman perjalanan berkualitas sekaligus memperkenalkan keindahan Lombok kepada wisatawan dari seluruh dunia.",
  },

  mission: {
    title: "Misi",
    items: [
      "Menyediakan layanan wisata yang aman, nyaman, dan profesional.",
      "Menciptakan pengalaman perjalanan yang berkesan dan bernilai bagi setiap pelanggan.",
      "Memperkenalkan budaya, alam, dan kearifan lokal Lombok secara positif.",
      "Mendukung pertumbuhan sektor pariwisata daerah yang berkelanjutan.",
      "Membangun hubungan jangka panjang melalui pelayanan yang konsisten dan terpercaya.",
    ],
  },

  services: [
    {
      title: "Paket Wisata Lombok",
      description:
        "Program wisata yang dirancang untuk membantu wisatawan menikmati destinasi terbaik di Lombok secara lebih nyaman dan terorganisir.",
    },
    {
      title: "Private Trip",
      description:
        "Perjalanan eksklusif yang dapat disesuaikan dengan minat, jumlah peserta, dan jadwal perjalanan Anda.",
    },
    {
      title: "Group Tour",
      description:
        "Solusi wisata untuk keluarga besar, komunitas, sekolah, organisasi, dan berbagai jenis rombongan.",
    },
    {
      title: "Corporate Gathering",
      description:
        "Mendukung kegiatan outing, gathering, incentive trip, hingga perjalanan perusahaan dengan pengelolaan yang profesional.",
    },
    {
      title: "Transportasi Wisata",
      description:
        "Menyediakan kebutuhan transportasi yang nyaman untuk mendukung perjalanan selama berada di Lombok.",
    },
    {
      title: "Custom Itinerary",
      description:
        "Membantu merancang program perjalanan sesuai kebutuhan dan preferensi setiap wisatawan.",
    },
  ],

  strengths: [
    {
      title: "Tim Lokal Berpengalaman",
      description:
        "Memahami Lombok secara mendalam, mulai dari destinasi populer hingga berbagai lokasi yang jarang diketahui wisatawan.",
    },
    {
      title: "Perjalanan yang Terencana",
      description:
        "Setiap itinerary dirancang agar perjalanan terasa nyaman, efisien, dan tidak terburu-buru.",
    },
    {
      title: "Fleksibel",
      description:
        "Program perjalanan dapat disesuaikan dengan kebutuhan, durasi, dan preferensi wisata setiap tamu.",
    },
    {
      title: "Responsif",
      description:
        "Pendampingan diberikan sejak proses konsultasi hingga perjalanan selesai dilaksanakan.",
    },
  ],

  values: [
    {
      title: "Keramahtamahan",
      description:
        "Melayani setiap tamu dengan sikap yang hangat, ramah, dan penuh perhatian.",
    },
    {
      title: "Integritas",
      description:
        "Menjunjung tinggi kejujuran, transparansi, dan tanggung jawab dalam setiap layanan.",
    },
    {
      title: "Profesionalisme",
      description:
        "Bekerja dengan standar pelayanan yang tinggi dan berorientasi pada kepuasan pelanggan.",
    },
    {
      title: "Keandalan",
      description:
        "Memberikan layanan yang konsisten, tepat waktu, dan dapat dipercaya.",
    },
    {
      title: "Kebanggaan Lokal",
      description:
        "Mempromosikan Lombok melalui pengalaman wisata yang berkualitas dan bertanggung jawab.",
    },
  ],

  destinations: [
    "Gili Trawangan",
    "Gili Air",
    "Gili Meno",
    "Pantai Pink",
    "Bukit Merese",
    "Tanjung Aan",
    "Desa Adat Sade",
    "Sembalun",
    "Sendang Gile",
    "Tiu Kelep",
  ],

  commitment: {
    title: "Komitmen Kami",
    description:
      "Kami percaya bahwa perjalanan terbaik lahir dari pelayanan yang tulus, perencanaan yang matang, dan perhatian terhadap setiap detail. Karena itu, setiap program wisata dirancang agar tamu dapat menikmati Lombok dengan nyaman, aman, dan tanpa kerepotan.",
  },

  cta: {
    title: "Siap Menjelajahi Lombok Bersama Kami?",
    description:
      "Diskusikan kebutuhan perjalanan Anda bersama tim kami dan temukan itinerary yang paling sesuai untuk pengalaman wisata di Lombok.",
    primaryButton: {
      label: "Hubungi Kami",
      href: "/kontak",
    },
  },
} as const;

export type AboutContent = typeof aboutContent;
