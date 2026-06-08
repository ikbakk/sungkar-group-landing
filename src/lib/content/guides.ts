export interface Guide {
  slug: string;
  title: string;
  description: string;
  region: "lombok" | "sumbawa" | "labuan-bajo" | "general";
  content: string;
  keyTakeaways: string[];
  bestFor: string[];
  relatedDestinations: string[];
  relatedPackages: string[];
  publishDate: string;
  readingTime: number;
}

export const guides: Guide[] = [
  {
    slug: "best-time-to-visit-lombok",
    title: "Kapan Waktu Terbaik ke Lombok",
    description:
      "Panduan lengkap tentang musim, cuaca, dan kondisi laut untuk merencanakan liburan Anda ke Lombok.",
    region: "lombok",
    content: `
# Kapan Waktu Terbaik ke Lombok

Lombok memiliki dua musim utama yang mempengaruhi pengalaman wisata Anda. Memilih waktu yang tepat akan memastikan Anda mendapatkan cuaca terbaik dan aktivitas yang paling sesuai dengan rencana Anda.

## Musim Kering (April - Oktober)

Musim kering adalah waktu terbaik untuk sebagian besar aktivitas di Lombok. Selama periode ini, cuaca cerah dan laut tenang, sempurna untuk snorkeling, diving, dan pantai. Anda akan menemukan:

- Cuaca cerah dan sedikit hujan
- Laut yang tenang dan jernih untuk snorkeling
- Visibilitas diving yang sangat baik
- Pantai yang indah dan aman untuk berenang
- Harga yang lebih tinggi karena musim liburan

Bulan terbaik dalam musim kering adalah **Juli hingga September**, ketika cuaca paling stabil dan ombak di pantai selatan relatif kecil.

## Musim Hujan (November - Maret)

Musim hujan membawa tantangan tersendiri tetapi juga keuntungan. Periode ini cocok untuk:

- Harga akomodasi yang lebih murah
- Pemandangan alam yang lebih hijau
- Suasana yang lebih santai dengan lebih sedikit wisatawan
- Trekking Rinjani yang lebih mudah dengan air lebih melimpah

Namun, Anda harus siap dengan hujan sore yang deras dan laut yang bergelombang, terutama di pantai selatan.

## Waktu Musiman Spesifik

### Puncak Musim (Juli - Agustus)
Liburan sekolah membuat pantai dan destinasi ramai. Pesan akomodasi jauh-jauh hari dan harapkan harga yang lebih tinggi.

### Musim Transisi (Maret - April dan September - Oktober)
Waktu ini menawarkan keseimbangan sempurna: cuaca masih bagus, pantai tidak terlalu ramai, dan harga lebih terjangkau.

## Tips Perencanaan

1. Jika Anda menyukai laut dan pantai, datang pada Mei hingga September
2. Untuk trekking Rinjani dengan kondisi terbaik, pilih Juli hingga Oktober
3. Jika budget terbatas, pertimbangkan November hingga Februari (hindari musim puncak)
4. Untuk pengalaman autentik dengan wisatawan lebih sedikit, datang pada Maret atau April
    `,
    keyTakeaways: [
      "Musim kering (April-Oktober) adalah waktu terbaik dengan cuaca cerah",
      "Juli-September adalah puncak musim dengan cuaca dan laut paling stabil",
      "Musim hujan (November-Maret) menawarkan harga lebih murah dan alam lebih hijau",
      "Musim transisi (Maret-April, September-Oktober) menawarkan keseimbangan ideal",
    ],
    bestFor: [
      "Perencanaan liburan pantai",
      "Trekking dan aktivitas outdoor",
      "Snorkeling dan diving",
      "Fotografer pemandangan alam",
    ],
    relatedDestinations: [
      "kuta-lombok",
      "gili-trawangan",
      "rinjani",
      "sembalun",
    ],
    relatedPackages: [
      "3d2n-lombok-signature",
      "snorkeling-gili-escape",
    ],
    publishDate: "2024-01-15",
    readingTime: 8,
  },
  {
    slug: "choosing-daily-tour",
    title: "Cara Memilih Tur Harian yang Tepat",
    description:
      "Panduan untuk membedakan tur pantai, budaya, dan jelajah pulau sehingga Anda memilih rute yang sesuai dengan kecepatan liburan Anda.",
    region: "lombok",
    content: `
# Cara Memilih Tur Harian yang Tepat

Tur harian adalah cara terbaik untuk mengalami Lombok tanpa komitmen jangka panjang. Namun, dengan banyak pilihan tersedia, memilih tur yang tepat memerlukan pemahaman tentang gaya perjalanan Anda.

## Tiga Kategori Utama Tur

### 1. Tur Pantai (Beach Tours)

Tur pantai fokus pada keindahan laut dan aktivitas air. Ideal untuk:

- Snorkeling dan menyelam
- Berjemur dan berenang
- Fotografi pantai
- Relaksasi

**Karakteristik:**
- Durasi: Biasanya setengah hari hingga satu hari
- Tempo: Lambat dan santai
- Fisik: Ringan hingga sedang
- Cocok untuk: Semua usia dan tingkat kebugaran

**Destinasi populer:**
- Kepulauan Gili (Trawangan, Air, Meno)
- Pantai Kuta, Pantai Mawun, Pantai Tangsi

### 2. Tur Budaya (Cultural Tours)

Tur budaya membawa Anda menjelajahi kehidupan lokal, tradisi, dan sejarah Lombok. Ideal untuk:

- Bertemu penduduk lokal
- Melihat kerajinan tangan tradisional
- Memahami budaya Sasak
- Pengalaman autentik

**Karakteristik:**
- Durasi: Setengah hari hingga satu hari
- Tempo: Bervariasi, tergantung minat
- Fisik: Ringan hingga sedang (banyak berjalan)
- Cocok untuk: Wisatawan yang ingin pengalaman budaya

**Destinasi populer:**
- Desa Tetebatu
- Desa Pengrajin Tenun
- Pasar Tradisional

### 3. Tur Alam (Nature Tours)

Tur alam menggabungkan trekking, pemandangan pegunungan, dan petualangan outdoor. Ideal untuk:

- Trekking dan hiking
- Matahari terbit dari ketinggian
- Fotografi alam
- Petualangan aktif

**Karakteristik:**
- Durasi: Setengah hari hingga multi-hari
- Tempo: Cepat dan menuntut
- Fisik: Sedang hingga tinggi
- Cocok untuk: Orang dengan kebugaran baik

**Destinasi populer:**
- Mount Rinjani
- Sembalun Highland
- Air Terjun Tiu Kelep

## Memilih Tur Berdasarkan Gaya Anda

| Gaya Perjalanan | Rekomendasi | Alasan |
|---|---|---|
| Relaksasi Total | Tur Pantai | Tempo lambat dan aktivitas ringan |
| Petualang Moderat | Kombinasi Pantai + Budaya | Keseimbangan antara relaksasi dan eksplorasi |
| Pencari Pengalaman | Tur Budaya | Interaksi autentik dengan lokal |
| Petualang Aktif | Tur Alam | Challenge dan keindahan alam |
| All-Rounder | Multi-tur (kombinasi tiga kategori) | Pengalaman Lombok yang komprehensif |

## Tips Memilih

1. **Pertimbangkan Kebugaran Anda**: Jika Anda tidak biasa berjalan jauh, pilih tur pantai
2. **Perhatikan Durasi**: Tur setengah hari cocok jika Anda ingin santai; full-day untuk pengalaman lebih mendalam
3. **Pertanyakan Ukuran Grup**: Grup kecil lebih personal; grup besar lebih sosial
4. **Tanyakan Akomodasi**: Tur dengan transfer hotel lebih nyaman
5. **Cek Aktivitas Spesifik**: Pastikan tur mencakup aktivitas yang benar-benar Anda inginkan
    `,
    keyTakeaways: [
      "Ada tiga kategori utama: Pantai, Budaya, dan Alam",
      "Pilih berdasarkan gaya perjalanan dan kebugaran Anda",
      "Tur pantai cocok untuk relaksasi; tur alam untuk petualangan",
      "Kombinasi beberapa tur memberikan pengalaman Lombok yang lengkap",
    ],
    bestFor: [
      "Wisatawan pertama kali di Lombok",
      "Pemilihan aktivitas yang tepat",
      "Perencanaan tur harian",
      "Wisatawan dengan berbagai gaya perjalanan",
    ],
    relatedDestinations: [
      "kuta-lombok",
      "tetebatu",
      "rinjani",
      "gili-trawangan",
    ],
    relatedPackages: [
      "3d2n-lombok-signature",
      "village-culture-experience",
      "snorkeling-gili-escape",
    ],
    publishDate: "2024-02-10",
    readingTime: 10,
  },
  {
    slug: "efficient-local-transportation",
    title: "Transportasi Lokal yang Paling Efisien",
    description:
      "Panduan memilih antara supir lokal, sewa driver, atau kombinasi transfer bandara dan mobil pribadi untuk perjalanan yang efisien.",
    region: "lombok",
    content: `
# Transportasi Lokal yang Paling Efisien

Transportasi adalah kunci pengalaman wisata yang mulus. Lombok memiliki beberapa opsi transportasi, dan memilih yang tepat akan menghemat waktu, biaya, dan stres.

## Opsi Transportasi Utama

### 1. Supir Pribadi (Private Driver)

Supir pribadi adalah seseorang yang mengantar Anda ke destinasi sesuai jadwal Anda sendiri.

**Keuntungan:**
- Fleksibilitas penuh atas jadwal
- Pengalaman personal dengan pemandu lokal
- Bisa berhenti kapan saja untuk foto atau istirahat
- Nyaman untuk keluarga atau grup kecil

**Harga:** Rp 600,000 - 900,000 per hari (tergantung jenis kendaraan)

**Ideal untuk:**
- Grup keluarga atau teman
- Perjalanan yang fleksibel
- Wisatawan yang ingin tempo lambat

### 2. Transfer Bandara (Airport Transfer)

Transfer bandara adalah layanan antar-jemput dari bandara ke hotel (atau sebaliknya).

**Keuntungan:**
- Harga terjangkau
- Tidak perlu khawatir dengan transportasi saat tiba
- Sopir tahu rute terbaik
- Dapat dikombinasikan dengan layanan lain

**Harga:** Rp 150,000 - 250,000 per arah

**Ideal untuk:**
- Wisatawan yang baru pertama kali
- Transfer sederhana bandara-hotel
- Budget yang terbatas

### 3. Sewa Mobil (Car Rental)

Sewa mobil memungkinkan Anda mengemudi sendiri dengan fleksibilitas penuh.

**Keuntungan:**
- Kebebasan penuh untuk menjelajah
- Lebih ekonomis untuk perjalanan panjang
- Tidak bergantung pada jadwal orang lain
- Petualangan yang lebih otonom

**Harga:** Rp 400,000 - 700,000 per hari

**Pertimbangan:**
- Anda harus merasa nyaman mengemudi di Lombok
- Jalan lokal bisa menantang
- Parkir dapat menjadi masalah di beberapa destinasi

**Ideal untuk:**
- Wisatawan berpengalaman dan percaya diri
- Perjalanan lintas destinasi
- Mereka yang menyukai kebebasan penuh

## Kombinasi Optimal

Banyak wisatawan menemukan bahwa kombinasi adalah solusi terbaik:

**Model A: Transfer + Supir Harian**
- Hari 1: Transfer bandara ke hotel
- Hari 2-3: Supir pribadi untuk tur
- Hari 4: Transfer hotel ke bandara

**Model B: Transfer + Sewa Mobil**
- Hari 1: Transfer bandara ke hotel
- Hari 2-3: Sewa mobil untuk jelajah mandiri
- Hari 4: Transfer hotel ke bandara
- Cocok untuk wisatawan percaya diri dan independen

**Model C: Paket Lengkap dengan Supir**
- Semua transportasi termasuk dalam paket wisata
- Ideal jika Anda ingin semua diatur

## Perbandingan Cepat

| Opsi | Budget | Fleksibilitas | Kenyamanan | Ideal Untuk |
|---|---|---|---|---|
| Supir Pribadi | Menengah | Tinggi | Tinggi | Keluarga, grup |
| Transfer Bandara | Rendah | Rendah | Sedang | Transfer sederhana |
| Sewa Mobil | Menengah | Sangat Tinggi | Sedang | Petualang independen |
| Kombinasi | Menengah | Tinggi | Tinggi | Sebagian besar wisatawan |

## Tips Transportasi Efisien

1. **Pesan Sebelumnya**: Supir dan transfer harus dipesan minimal 24 jam sebelumnya
2. **Tanyakan Harga**: Negosiasikan harga untuk perjalanan multi-hari
3. **Verifikasi Kualitas Kendaraan**: Pastikan kendaraan dalam kondisi baik
4. **Komunikasi Jelas**: Jelaskan rute dan preferensi dengan detail
5. **Beri Tip untuk Layanan Baik**: Sopir lokal menghargai apresiasi
    `,
    keyTakeaways: [
      "Ada tiga opsi utama: Supir Pribadi, Transfer, dan Sewa Mobil",
      "Kombinasi transfer + supir harian adalah solusi optimal untuk banyak wisatawan",
      "Supir pribadi memberikan fleksibilitas penuh dan pengalaman lokal",
      "Sewa mobil cocok untuk wisatawan independen dan percaya diri mengemudi",
    ],
    bestFor: [
      "Perencanaan transportasi",
      "Budget planning",
      "Wisatawan pertama kali",
      "Keluarga dan grup",
    ],
    relatedDestinations: [
      "kuta-lombok",
      "tetebatu",
      "rinjani",
    ],
    relatedPackages: [
      "3d2n-lombok-signature",
    ],
    publishDate: "2024-02-20",
    readingTime: 9,
  },
];
