export interface LegalSection {
  heading: string;
  paragraphs: string[];
  listItems?: string[];
}

export const termsContent: LegalSection[] = [
  {
    heading: "1. Pemesanan",
    paragraphs: [
      "Pemesanan dapat dilakukan melalui WhatsApp, formulir kontak di website, atau dengan menghubungi tim kami secara langsung. Pemesanan dianggap sah setelah kami mengonfirmasi ketersediaan dan menerima pembayaran sesuai ketentuan.",
    ],
  },
  {
    heading: "2. Pembayaran",
    paragraphs: [
      "Pembayaran dapat dilakukan melalui transfer bank atau metode pembayaran lain yang disepakati. DP (uang muka) diperlukan untuk mengamankan pemesanan, dengan pelunasan sesuai jadwal yang ditentukan. Pembayaran yang diterima akan dikonfirmasi melalui WhatsApp atau email.",
    ],
  },
  {
    heading: "3. Pembatalan dan Pengembalian Dana",
    paragraphs: [],
    listItems: [
      "Pembatalan 7 hari atau lebih sebelum keberangkatan: pengembalian dana penuh dikurangi biaya administrasi.",
      "Pembatalan 3-6 hari sebelum keberangkatan: pengembalian 50% dari total pembayaran.",
      "Pembatalan kurang dari 3 hari: tidak ada pengembalian dana.",
      "Pembatalan dari pihak kami karena force majeure: pengembalian dana penuh atau penjadwalan ulang.",
    ],
  },
  {
    heading: "4. Perubahan Itinerary",
    paragraphs: [
      "Perubahan itinerary dapat dilakukan sebelum keberangkatan sesuai kesepakatan. Selama perjalanan, perubahan dapat dilakukan dengan mempertimbangkan kondisi cuaca, aksesibilitas, dan situasi di lapangan demi kenyamanan dan keselamatan tamu.",
    ],
  },
  {
    heading: "5. Tanggung Jawab",
    paragraphs: [
      "Sungkar Group bertanggung jawab atas layanan yang telah disepakati dalam itinerary. Kami tidak bertanggung jawab atas:",
    ],
    listItems: [
      "Keterlambatan atau pembatalan transportasi umum (pesawat, kapal)",
      "Kehilangan barang pribadi selama perjalanan",
      "Kejadian di luar kendali kami (force majeure, bencana alam, kerusuhan)",
    ],
  },
  {
    heading: "6. Keselamatan dan Asuransi",
    paragraphs: [
      "Keselamatan tamu adalah prioritas utama kami. Kami merekomendasikan tamu untuk memiliki asuransi perjalanan pribadi. Untuk aktivitas tertentu (seperti trekking atau snorkeling) kami menyediakan peralatan keselamatan standar dan panduan yang berpengalaman.",
    ],
  },
  {
    heading: "7. Perilaku Tamu",
    paragraphs: [
      "Tamu diharapkan menghormati budaya lokal, lingkungan, dan sesama peserta perjalanan. Perilaku yang mengganggu atau merusak dapat mengakibatkan pembatalan layanan tanpa pengembalian dana.",
    ],
  },
  {
    heading: "8. Hak Kekayaan Intelektual",
    paragraphs: [
      "Seluruh konten di website ini, termasuk teks, gambar, video, dan logo, adalah milik Sungkar Group dan dilindungi oleh hak cipta. Dilarang menggunakan atau mereproduksi tanpa izin tertulis.",
    ],
  },
  {
    heading: "9. Perubahan Ketentuan",
    paragraphs: [
      "Sungkar Group berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diinformasikan melalui website ini.",
    ],
  },
  {
    heading: "10. Hukum yang Berlaku",
    paragraphs: [
      "Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. Setiap perselisihan akan diselesaikan melalui musyawarah atau jalur hukum yang berlaku.",
    ],
  },
];

export const privacyContent: LegalSection[] = [
  {
    heading: "1. Informasi yang Kami Kumpulkan",
    paragraphs: [
      "Kami mengumpulkan informasi yang Anda berikan secara sukarela saat menghubungi kami melalui formulir kontak, WhatsApp, atau saluran komunikasi lainnya. Informasi tersebut dapat mencakup:",
    ],
    listItems: [
      "Nama lengkap",
      "Alamat email",
      "Nomor telepon / WhatsApp",
      "Tanggal perjalanan yang diinginkan",
      "Jumlah tamu dan preferensi perjalanan",
      "Informasi lain yang Anda berikan secara sukarela",
    ],
  },
  {
    heading: "2. Penggunaan Informasi",
    paragraphs: ["Informasi yang kami kumpulkan digunakan untuk:"],
    listItems: [
      "Memproses dan merespons pertanyaan serta pemesanan Anda",
      "Memberikan informasi tentang paket wisata dan layanan kami",
      "Meningkatkan kualitas layanan dan pengalaman pelanggan",
      "Mengirimkan informasi promosi (hanya dengan persetujuan Anda)",
    ],
  },
  {
    heading: "3. Perlindungan Data",
    paragraphs: [
      "Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi informasi pribadi Anda dari akses tidak sah, perubahan, pengungkapan, atau penghancuran. Data Anda disimpan di sistem yang aman dan hanya dapat diakses oleh personel yang berwenang.",
    ],
  },
  {
    heading: "4. Pengungkapan kepada Pihak Ketiga",
    paragraphs: [
      "Kami tidak menjual, menukarkan, atau mengalihkan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali jika diwajibkan oleh hukum atau untuk memproses layanan yang Anda minta (misalnya, pemesanan hotel atau tiket).",
    ],
  },
  {
    heading: "5. Hak Anda",
    paragraphs: ["Anda berhak untuk:"],
    listItems: [
      "Mengakses data pribadi yang kami simpan",
      "Meminta koreksi atau penghapusan data",
      "Menolak penggunaan data untuk tujuan pemasaran",
      "Menarik persetujuan yang telah diberikan sebelumnya",
    ],
  },
  {
    heading: "6. Cookie",
    paragraphs: [
      "Situs web kami dapat menggunakan cookie untuk meningkatkan pengalaman browsing. Anda dapat mengatur preferensi cookie melalui pengaturan browser Anda.",
    ],
  },
  {
    heading: "7. Perubahan Kebijakan",
    paragraphs: [
      "Kebijakan privasi ini dapat diperbarui dari waktu ke waktu. Perubahan akan diumumkan melalui halaman ini. Dengan terus menggunakan layanan kami, Anda menyetujui pembaruan kebijakan ini.",
    ],
  },
  {
    heading: "8. Kontak",
    paragraphs: [
      "Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami melalui halaman Kontak atau WhatsApp di +62 81236128629.",
    ],
  },
];
