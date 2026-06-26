import type { UIStrings } from "../types";

const strings = {
  contact: {
    formDesc:
      "Isi borang di bawah, pasukan kami akan membalas melalui WhatsApp dalam masa terdekat.",
    formDescSidebar:
      "Isi borang di bawah dan pasukan kami akan membalas melalui WhatsApp.",
    contactInfoTitle: "Maklumat Hubungan",
    contactInfoDescription: "Hubungi kami melalui saluran yang tersedia",
    chooseLocation: "Pilih lokasi",
    choosePackage: "Pilih pakej",
    selectLocationFirst: "Pilih lokasi terlebih dahulu",
    optional: "opsyenal",
    formTitle: "Ceritakan rancangan perjalanan anda",
    formDescription:
      "Berikan maklumat asas perjalanan supaya pasukan kami dapat memberikan cadangan yang lebih relevan.",
    mapTitle: "Lokasi Kami",
    mapDescription:
      "Lawati pejabat Sungkar Group atau hubungi pasukan kami untuk konsultasi perjalanan.",
    formWhatsappSubject: "Pertanyaan Baru - Laman Web Sungkar Group",
    whatsappGreeting: "Halo Sungkar Group,",
    whatsappSewaIntro: "Saya ingin sewa: {item}",
    whatsappPaketIntro: "Saya berminat dengan pakej: {item}",
    whatsappLocation: "Lokasi: {region}",
    whatsappFollowUp: "Sila berikan maklumat lanjut.",
    whatsappFormDate: "Tarikh perjalanan: {date}",
    whatsappFormGuests: "Jumlah tetamu: {guests}",
    whatsappFormMessage: "Mesej tambahan: {message}",
    whatsappFormPackage: "Pakej: {package}",
    sidebarTitleSewa: "Sewa kenderaan ini",
    sidebarTitlePaket: "Tempah pakej ini",
    sectionTitleSewa: "Sewa Kereta di Sungkar Group",
    sectionTitlePaket: "Tempah Pakej Pelancongan",
    contextLabelSewa: "Kenderaan Dipilih",
    contextLabelPaket: "Pakej Dipilih",
    followUs: "Ikuti Kami",
    phoneWhatsapp: "Telefon / WhatsApp",
    formFieldName: "Nama",
    formFieldTravelDate: "Tarikh perjalanan",
    formFieldTravelDateSewa: "Tarikh sewa",
    formFieldDuration: "Tempoh sewa",
    formFieldGuests: "Jumlah tetamu",
    formFieldPassengers: "Jumlah penumpang",
    formFieldRentalReason: "Tujuan sewa",
    formFieldMessage: "Mesej tambahan",
  },
} satisfies Pick<UIStrings, "contact">;

export default strings;
