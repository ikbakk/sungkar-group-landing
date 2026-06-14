export const faqPageContent = {
  hero: {
    eyebrow: "FAQ",
    title: "Pertanyaan umum yang paling sering ditanyakan",
    description:
      "Halaman ini menjadi pusat pertanyaan umum. Untuk rincian paket, destinasi, dan tentang kami, buka FAQ pada masing-masing halaman terkait.",
  },
  introCard: {
    badge: "FAQ umum",
    title: "Ringkasan pertanyaan untuk memulai percakapan",
    description:
      "Jika Anda baru pertama kali menghubungi tim, mulai dari FAQ umum ini. Setelah itu, buka halaman yang paling relevan agar informasi paket dan destinasi lebih terarah.",
  },
  relatedCards: [
    {
      badge: "Paket wisata",
      title: "FAQ paket wisata",
      description:
        "Pertanyaan tentang durasi, kendaraan, dan penyesuaian itinerary dibahas di halaman paket wisata.",
      buttonLabel: "Buka paket wisata",
      buttonHref: "/paket-wisata",
    },
    {
      badge: "Destinasi",
      title: "FAQ destinasi",
      description:
        "Pertanyaan tentang apa yang bisa dilakukan di tiap destinasi tersedia pada halaman destinasi masing-masing.",
      buttonLabel: "Buka destinasi",
      buttonHref: "/destinasi",
    },
    {
      badge: "Tentang kami",
      title: "FAQ tentang kami",
      description:
        "Jika Anda ingin memahami layanan, gaya koordinasi, dan alur pemesanan, buka halaman tentang kami.",
      buttonLabel: "Buka tentang kami",
      buttonHref: "/tentang-kami",
    },
  ],
} as const;
