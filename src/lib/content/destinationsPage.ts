import { destinations } from "@/lib/content/destinationsData";

export const destinationsPageContent = {
  hero: {
    eyebrow: "Destinasi",
    title: "Destinasi utama dengan navigasi bertingkat",
    description:
      "Gunakan navigasi di atas untuk masuk ke grup destinasi lalu buka halaman detail masing-masing untuk melihat aktivitas utama dan paket yang terkait.",
  },
  groups: [
    {
      id: "lombok",
      label: "Lombok",
      title: "Jelajahi Lombok",
      description:
        "Pilihan destinasi di Lombok yang paling sering dipakai untuk kombinasi pantai, budaya, dan rute harian.",
      destinationSlugs: ["kuta-lombok", "tetebatu"],
    },
    {
      id: "gili",
      label: "Kepulauan Gili",
      title: "Kepulauan Gili",
      description:
        "Rute pulau yang cocok untuk snorkeling, island hopping, dan tempo liburan yang lebih santai.",
      destinationSlugs: ["gili-trawangan", "gili-air", "gili-meno"],
    },
    {
      id: "pegunungan",
      label: "Pegunungan",
      title: "Koridor Pegunungan",
      description:
        "Destinasi dengan nuansa dataran tinggi dan akses ke pengalaman alam yang lebih dramatis.",
      destinationSlugs: ["sembalun", "rinjani", "senaru"],
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
