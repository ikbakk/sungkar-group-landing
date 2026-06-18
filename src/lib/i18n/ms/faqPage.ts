export const faqPageContent = {
  hero: {
    eyebrow: "Soalan Lazim",
    title: "Soalan yang kerap ditanya",
    description:
      "Halaman ini adalah pusat utama untuk soalan lazim. Untuk butiran tentang pakej, destinasi, dan tentang kami, buka FAQ pada halaman masing-masing.",
  },
  introCard: {
    badge: "FAQ Umum",
    title: "Ringkasan soalan untuk memulakan perbualan",
    description:
      "Jika anda menghubungi pasukan buat pertama kali, mulakan dengan FAQ umum ini. Selepas itu, buka halaman yang paling relevan untuk maklumat pakej dan destinasi yang lebih tepat.",
  },
  relatedCards: [
    {
      badge: "Pakej pelancongan",
      title: "FAQ Pakej Pelancongan",
      description:
        "Soalan tentang tempoh, kenderaan, dan pelarasan jadual perjalanan boleh didapati di halaman pakej pelancongan.",
      buttonLabel: "Buka pakej pelancongan",
      buttonHref: "/paket-wisata",
    },
    {
      badge: "Destinasi",
      title: "FAQ Destinasi",
      description:
        "Soalan tentang aktiviti di setiap destinasi tersedia di halaman destinasi masing-masing.",
      buttonLabel: "Buka destinasi",
      buttonHref: "/destinasi",
    },
    {
      badge: "Tentang kami",
      title: "FAQ Tentang Kami",
      description:
        "Jika anda ingin memahami perkhidmatan, gaya koordinasi, dan proses tempahan kami, buka halaman tentang kami.",
      buttonLabel: "Buka tentang kami",
      buttonHref: "/tentang-kami",
    },
  ],
} as const;
