import HeroLombok from "@/assets/images/hero-lombok.png";
import TourSnorkeling from "@/assets/images/tour-snorkeling.png";
import TourCultural from "@/assets/images/tour-cultural.png";

export const navDestinations = [
  {
    group: "Lombok",
    items: [
      { label: "Kuta Lombok", href: "/destinasi/kuta-lombok" },
      { label: "Tetebatu", href: "/destinasi/tetebatu" },
      { label: "Sembalun", href: "/destinasi/sembalun" },
    ],
  },
  {
    group: "Kepulauan Gili",
    items: [
      { label: "Gili Trawangan", href: "/destinasi/gili-trawangan" },
      { label: "Gili Air", href: "/destinasi/gili-air" },
      { label: "Gili Meno", href: "/destinasi/gili-meno" },
    ],
  },
  {
    group: "Pegunungan",
    items: [
      { label: "Rinjani", href: "/destinasi/rinjani" },
      { label: "Senaru", href: "/destinasi/senaru" },
    ],
  },
];

export const packages = [
  {
    slug: "3d2n-lombok-signature",
    title: "Paket Lombok 3H2M",
    category: "Paket lengkap",
    image: HeroLombok,
    summary:
      "Rangkaian pantai, matahari terbit, dan pengalaman lokal yang cocok untuk tamu yang pertama kali ke Lombok.",
    duration: "3 hari 2 malam",
    highlights: [
      "Perjalanan pribadi",
      "Penjemputan fleksibel",
      "Itinerary tersusun",
    ],
    itinerary: [
      "Hari 1 - Penjemputan, transfer, dan rute pembuka ke sisi selatan Lombok.",
      "Hari 2 - Pantai utama, spot foto, dan makan siang santai dengan tempo yang tidak terburu-buru.",
      "Hari 3 - Berhenti untuk matahari terbit, belanja ringan, lalu kembali ke titik keberangkatan.",
    ],
    includes: [
      "Transportasi pribadi",
      "Driver lokal",
      "Bantuan penyesuaian itinerary",
    ],
    excludes: ["Akomodasi", "Tiket masuk", "Pengeluaran pribadi"],
  },
  {
    slug: "snorkeling-gili-escape",
    title: "Tur Snorkeling dan Gili",
    category: "Tur harian",
    image: TourSnorkeling,
    summary:
      "Jelajah pulau singkat dengan fokus pada air jernih, spot snorkeling, dan perpindahan yang efisien.",
    duration: "1 hari",
    highlights: [
      "Kepulauan Gili",
      "Peralatan snorkeling",
      "Opsi speedboat",
    ],
    itinerary: [
      "Pagi - Penjemputan awal dan keberangkatan menuju pelabuhan.",
      "Siang - Snorkeling, waktu bebas di pulau, dan makan siang santai.",
      "Sore - Kembali ke Lombok dengan jadwal yang masih tenang.",
    ],
    includes: ["Pengaturan perahu", "Peralatan snorkeling", "Koordinasi lokal"],
    excludes: ["Tiket pelabuhan", "Makan siang", "Fotografi profesional"],
  },
  {
    slug: "village-culture-experience",
    title: "Pengalaman Desa dan Budaya",
    category: "Budaya",
    image: TourCultural,
    summary:
      "Menjelajahi desa tradisional, tenun, dan ritme lokal dengan pendekatan yang lebih dekat dan tenang.",
    duration: "Setengah hari - 1 hari",
    highlights: [
      "Pemandu lokal",
      "Hentian budaya",
      "Siap untuk grup kecil",
    ],
    itinerary: [
      "Awal perjalanan - Menuju desa dan berhenti di titik budaya yang relevan.",
      "Pertengahan hari - Kunjungan ke perajin, rumah tradisional, dan observasi kegiatan lokal.",
      "Sore - Kembali dengan jalur yang menyeimbangkan budaya dan kenyamanan.",
    ],
    includes: ["Pemandu lokal", "Kunjungan desa", "Tempo fleksibel"],
    excludes: ["Biaya donasi", "Makan", "Pengeluaran pribadi"],
  },
];

export const reviews = [
  {
    name: "Ulasan Google",
    location: "Lombok",
    text: "Semua berjalan sangat mulus. Jadwalnya jelas, sopirnya sabar, dan kami tetap punya waktu untuk berhenti di spot yang bagus.",
  },
  {
    name: "Ulasan Google",
    location: "Perjalanan Gili",
    text: "Pelayanan komunikatif dari awal. Kami dibantu memilih rute yang paling pas untuk keluarga dengan anak kecil.",
  },
  {
    name: "Ulasan Google",
    location: "Area Rinjani",
    text: "Rasa lokalnya terasa, tapi organisasinya tetap rapi. Cocok untuk wisatawan yang ingin perjalanan tanpa ribet.",
  },
];

export const generalFaqItems = [
  {
    question: "Apakah itinerary bisa disesuaikan?",
    answer:
      "Bisa. Itinerary disusun fleksibel sesuai durasi, titik penjemputan, dan prioritas destinasi.",
  },
  {
    question: "Apakah tersedia layanan transportasi saja?",
    answer:
      "Ya. Anda dapat memesan transfer bandara, driver harian, atau mobil sewaan tanpa paket tur penuh.",
  },
  {
    question: "Apakah cocok untuk keluarga?",
    answer:
      "Cocok. Rute dapat disesuaikan supaya tempo perjalanan lebih santai dan tidak terlalu padat.",
  },
  {
    question: "Bagaimana cara memulai pemesanan?",
    answer:
      "Gunakan tombol Cek Ketersediaan atau Chat WhatsApp untuk mengirim tanggal, jumlah tamu, dan tujuan perjalanan.",
  },
];

export const packageFaqItems = [
  {
    question: "Apakah paket ini bisa diubah durasinya?",
    answer:
      "Bisa. Paket dapat disesuaikan menjadi lebih singkat atau lebih panjang tergantung rencana perjalanan Anda.",
  },
  {
    question: "Apakah paket sudah termasuk kendaraan?",
    answer:
      "Ya. Paket wisata menampilkan komponen transportasi yang termasuk dan yang belum termasuk secara jelas.",
  },
  {
    question: "Apakah paket cocok untuk keluarga?",
    answer:
      "Cocok. Rute bisa diperlambat agar perjalanan nyaman untuk keluarga dengan anak atau orang tua.",
  },
];

export const destinationFaqItems = [
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
];

export const aboutFaqItems = [
  {
    question: "Apa keunggulan Sungkar Group?",
    answer:
      "Keunggulannya ada pada pengalaman lokal, koordinasi yang rapi, dan alur perjalanan yang tidak dibuat terburu-buru.",
  },
  {
    question: "Apakah melayani perjalanan keluarga?",
    answer:
      "Ya. Paket dan transportasi dapat disusun ulang agar cocok untuk keluarga maupun rombongan kecil.",
  },
  {
    question: "Bagaimana cara bertanya dulu sebelum pesan?",
    answer:
      "Gunakan halaman kontak untuk mengirim tanggal, jumlah tamu, dan fokus destinasi yang diinginkan.",
  },
];

export const guides = [
  {
    title: "Kapan waktu terbaik ke Lombok",
    text: "Panduan musim, cuaca, dan kondisi laut untuk merencanakan liburan yang lebih nyaman.",
  },
  {
    title: "Cara memilih tur harian",
    text: "Bedakan tur pantai, budaya, dan jelajah pulau supaya rutenya sesuai dengan tempo liburan.",
  },
  {
    title: "Transportasi lokal yang paling efisien",
    text: "Kapan cukup sewa driver, kapan lebih pas kombinasi transfer bandara dan mobil pribadi.",
  },
];

export const services = [
  {
    title: "Antar-jemput bandara",
    text: "Antar-jemput bandara dan hotel untuk kedatangan pagi atau malam.",
  },
  {
    title: "Supir pribadi",
    text: "Supir lokal untuk rute harian, kombinasi destinasi, atau perjalanan keluarga.",
  },
  {
    title: "Sewa mobil",
    text: "Pilihan mobil untuk perjalanan fleksibel dengan jadwal yang Anda tentukan sendiri.",
  },
  {
    title: "Perencanaan tur",
    text: "Bantuan menyusun urutan destinasi agar waktu perjalanan tetap efisien.",
  },
];
