import type { UIStrings } from "../types";

const strings = {
  contact: {
    formDesc:
      "Isi form di bawah, tim kami akan merespon via WhatsApp dalam waktu singkat.",
    formDescSidebar:
      "Isi form di bawah dan tim kami akan merespon via WhatsApp.",
    contactInfoTitle: "Informasi Kontak",
    contactInfoDescription:
      "Hubungi kami melalui berbagai saluran yang tersedia",
    chooseLocation: "Pilih lokasi",
    choosePackage: "Pilih paket",
    selectLocationFirst: "Pilih lokasi terlebih dahulu",
    optional: "opsional",
    formTitle: "Ceritakan rencana perjalanan Anda",
    formDescription:
      "Berikan informasi dasar perjalanan agar tim kami dapat memberikan rekomendasi yang lebih relevan.",
    mapTitle: "Lokasi Kami",
    mapDescription:
      "Kunjungi kantor Sungkar Group Indonesia atau hubungi tim kami untuk konsultasi perjalanan.",
    formWhatsappSubject: "Pertanyaan Baru - Sungkar Group Website",
    whatsappGreeting: "Halo Sungkar Group,",
    whatsappSewaIntro: "Saya ingin sewa: {item}",
    whatsappPaketIntro: "Saya tertarik dengan paket: {item}",
    whatsappLocation: "Lokasi: {region}",
    whatsappFollowUp: "Mohon informasi lebih lanjut.",
    whatsappFormDate: "Tanggal perjalanan: {date}",
    whatsappFormGuests: "Jumlah tamu: {guests}",
    whatsappFormMessage: "Pesan tambahan: {message}",
    whatsappFormPackage: "Paket: {package}",
    sidebarTitleSewa: "Sewa kendaraan ini",
    sidebarTitlePaket: "Pesan paket ini",
    sectionTitleSewa: "Sewa Mobil di Sungkar Group",
    sectionTitlePaket: "Pesan Paket Wisata",
    contextLabelSewa: "Pilihan Kendaraan",
    contextLabelPaket: "Pilihan Paket",
    followUs: "Ikuti Kami",
    phoneWhatsapp: "Telepon / Whatsapp",
    formFieldName: "Nama",
    formFieldTravelDate: "Tanggal perjalanan",
    formFieldTravelDateSewa: "Tanggal sewa",
    formFieldDuration: "Durasi sewa",
    formFieldGuests: "Jumlah tamu",
    formFieldPassengers: "Jumlah penumpang",
    formFieldRentalReason: "Keperluan sewa",
    formFieldMessage: "Pesan tambahan",
  },
} satisfies Pick<UIStrings, "contact">;

export default strings;
