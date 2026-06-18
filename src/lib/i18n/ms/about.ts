export const aboutContent = {
  hero: {
    eyebrow: "Tentang Kami",
    title: "Memperkenalkan Lombok melalui perjalanan yang selesa dan bermakna",
    description:
      "Sungkar Group Indonesia adalah pengendali pelancongan tempatan yang membantu pelancong mengeksplorasi Lombok dengan perkhidmatan profesional, pelancong yang dirancang dengan baik, dan pengalaman yang lebih autentik.",
  },

  story: {
    title: "Dilahirkan dari Kecintaan terhadap Lombok",
    paragraphs: [
      "Sungkar Group Indonesia dilahirkan dari keyakinan bahawa pengalaman pelancongan terbaik bukan sekadar melawati banyak tempat, tetapi menikmati setiap perjalanan dengan selesa dan bermakna.",

      "Sebagai pengendali pelancongan tempatan yang berasaskan di Lombok, kami memahami bahawa setiap pelancong mempunyai keperluan dan cara berlibur yang berbeza. Oleh itu, kami menumpukan pada perkhidmatan peribadi, pelancong yang dirancang dengan baik, dan pengalaman yang disesuaikan dengan matlamat pelancongan setiap tetamu.",

      "Dari pelancongan keluarga, gateway pasangan, kumpulan komuniti, hingga acara korporat, kami membantu mencipta perjalanan yang teratur agar tetamu dapat menikmati Lombok tanpa risau menguruskan butiran pelancongan sendiri.",
    ],
  },

  vision: {
    title: "Visi",
    description:
      "Menjadi syarikat pelancongan yang dipercayai yang menghantar pengalaman pelancongan berkualiti sambil memperkenalkan keindahan Lombok kepada pelancong dari seluruh dunia.",
  },

  mission: {
    title: "Misi",
    items: [
      "Menawarkan perkhidmatan pelancongan yang selamat, selesa, dan profesional.",
      "Mencipta pengalaman pelancongan yang berkenan dan bernilai untuk setiap pelanggan.",
      "Memperkenalkan budaya, alam, dan kearifan tempatan Lombok dengan cara yang positif.",
      "Menyokong pertumbuhan berterusan sektor pelancongan rantau.",
      "Membina hubungan jangka panjang melalui perkhidmatan yang konsisten dan boleh dipercayai.",
    ],
  },

  services: [
    {
      title: "Pakej Pelancongan Lombok",
      description:
        "Program pelancongan yang direka bentuk untuk membantu pelancong menikmati destinasi terbaik di Lombok dengan lebih selesa dan teratur.",
    },
    {
      title: "Pelancongan Persendirian",
      description:
        "Pelancongan eksklusif yang boleh disesuaikan mengikut minat, saiz kumpulan, dan jadual pelancongan anda.",
    },
    {
      title: "Pelancongan Kumpulan",
      description:
        "Penyelesaian pelancongan untuk keluarga meluas, komuniti, sekolah, organisasi, dan pelbagai jenis kumpulan.",
    },
    {
      title: "Corporate Gathering",
      description:
        "Menyokong aktiviti outing, gathering, incentive trip, dan pelancongan korporat dengan pengurusan profesional.",
    },
    {
      title: "Pengangkutan Pelancongan",
      description:
        "Menyediakan keperluan pengangkutan yang selesa untuk menyokong pelancongan semasa di Lombok.",
    },
    {
      title: "Pelancong Custom",
      description:
        "Membantu merekabentuk program pelancongan mengikut keperluan dan keutamaan setiap pelancong.",
    },
  ],

  strengths: [
    {
      title: "Pasukan Tempan Berpengalaman",
      description:
        "Kefahaman mendalam tentang Lombok, dari destinasi popular ke pelbagai lokasi yang jarang diketahui pelancong.",
    },
    {
      title: "Perjalanan Terancang dengan Baik",
      description:
        "Setiap pelancong direka bentuk supaya perjalanan terasa selesa, cekap, dan tidak tergesa-gesa.",
    },
    {
      title: "Fleksibel",
      description:
        "Program pelanconging boleh disesuaikan dengan keperluan, tempoh, dan keutamaan pelancongan setiap tetamu.",
    },
    {
      title: "Responsif",
      description:
        "Bantuan disediakan dari proses perkongsian sehingga pelancongan selesai.",
    },
  ],

  values: [
    {
      title: "Kemahiran Menyambut Tetamu",
      description:
        "Menyambut setiap tetamu dengan sikap hangat, mesra, dan penuh perhatian.",
    },
    {
      title: "Integriti",
      description:
        "Menjunjung jujur, ketelusan, dan tanggungjawab dalam setiap perkhidmatan.",
    },
    {
      title: "Profesionalisme",
      description:
        "Bekerja dengan standard perkhidmatan yang tinggi dan fokus kepada kepuasan pelanggan.",
    },
    {
      title: "Kebolehpercayaan",
      description:
        "Menawarkan perkhidmatan yang konsisten, tepat masa, dan boleh dipercayai.",
    },
    {
      title: "Kebanggaan Tempatan",
      description:
        "Mempromosikan Lombok melalui pengalaman pelancongan berkualiti dan bertanggungjawab.",
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
      "Kami percaya bahawa perjalanan terbaik datang dari perkhidmatan yang tulus, perancangan yang teliti, dan perhatian kepada setiap butiran. Oleh itu, setiap program pelanconging direka bentuk supaya tetamu dapat menikmati Lombok dengan selesa, selamat, dan tanpa susah payah.",
  },

  cta: {
    title: "Bersedia Menjelajahi Lombok Bersama Kami?",
    description:
      "Bincangkan keperluan pelancongan anda dengan pasukan kami dan cari pelancong yang paling sesuai untuk pengalaman Lombok anda.",
    primaryButton: {
      label: "Hubungi Kami",
      href: "/kontak",
    },
  },
} as const;

export type AboutContent = typeof aboutContent;
