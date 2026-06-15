// Contact Data Layer
// Separates business logic and data from presentation components

export interface ContactMethod {
  id: string;
  title: string;
  description: string;
  action?: {
    label: string;
    href: string;
  };
}

export interface BusinessInfo {
  name: string;
  description: string;
  phone: string;
  email: string;
  whatsapp: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  socialLinks: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    youtube?: string;
  };
}

export interface FormField {
  id: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "number" | "textarea" | "select";
  required?: boolean;
  options?: string[];
}

export const businessInfo: BusinessInfo = {
  name: "Sungkar Group Indonesia",
  description:
    "Operator wisata lokal untuk Lombok, Sumbawa, dan Labuan Bajo dengan layanan private tour, open trip, transportasi, dan panduan perjalanan.",
  phone: "+62 81236128629",
  email: "",
  whatsapp: "+62 81236128629",
  address: {
    street: "Adi sucipto residence No.blok D12, Ampenan Utara, Kec. Ampenan",
    city: "Mataram",
    region: "Nusa Tenggara Barat",
    postalCode: "83123",
    country: "Indonesia",
  },
  coordinates: {
    latitude: -8.5645579,
    longitude: 116.0815306,
  },
  socialLinks: {
    instagram: "https://www.instagram.com/sungkargroup",
    youtube: "https://www.youtube.com/@sungkargroup1",
  },
};

export const contactMethods: ContactMethod[] = [
  {
    id: "availability",
    title: "Cek Ketersediaan",
    description:
      "Gunakan alur pertanyaan untuk memastikan tanggal perjalanan dan rute yang paling praktis.",
    action: {
      label: "Cek Ketersediaan",
      href: "#availability-form",
    },
  },
  {
    id: "whatsapp",
    title: "Chat WhatsApp",
    description:
      "Paling cocok untuk pertanyaan cepat, konfirmasi pesan, dan penyesuaian itinerary.",
    action: {
      label: "Chat WhatsApp",
      href: `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}?text=Halo%20Sungkar%20Group`,
    },
  },
  {
    id: "social",
    title: "Saluran Sosial",
    description:
      "Instagram dan YouTube ditampilkan di footer untuk pembaruan perjalanan dan cerita destinasi.",
  },
];

export const contactFormFields: FormField[] = [
  {
    id: "travelDate",
    label: "Tanggal perjalanan",
    placeholder: "Contoh: 12 Agustus 2026",
    type: "text",
    required: true,
  },
  {
    id: "guests",
    label: "Jumlah tamu",
    placeholder: "Contoh: 4 dewasa, 2 anak-anak",
    type: "text",
    required: true,
  },
  {
    id: "location",
    label: "Pilih lokasi",
    placeholder: "Pilih lokasi destinasi...",
    type: "select",
    required: true,
    options: ["Lombok", "Sumbawa", "Labuan Bajo"],
  },
  {
    id: "message",
    label: "Pesan tambahan (opsional)",
    placeholder: "Ceritakan preferensi atau kebutuhan khusus Anda",
    type: "textarea",
    required: false,
  },
];

export type FormContext = "sewa-mobil" | "paket-wisata";

export const sewaMobilFormFields: FormField[] = [
  {
    id: "name",
    label: "Nama",
    placeholder: "Contoh: Budi Santoso",
    type: "text",
    required: true,
  },
  {
    id: "travelDate",
    label: "Tanggal sewa",
    placeholder: "Contoh: 12 Agustus 2026",
    type: "text",
    required: true,
  },
  {
    id: "duration",
    label: "Durasi sewa",
    placeholder: "Contoh: 3 hari",
    type: "text",
    required: true,
  },
  {
    id: "passengers",
    label: "Jumlah penumpang",
    placeholder: "Contoh: 4 orang",
    type: "text",
    required: true,
  },
  {
    id: "rentalReason",
    label: "Keperluan sewa",
    placeholder: "Pilih keperluan...",
    type: "select",
    required: true,
    options: [
      "Dengan supir sebagai guide",
      "Dengan supir pelayanan",
    ],
  },
  {
    id: "message",
    label: "Pesan tambahan (opsional)",
    placeholder: "Ceritakan kebutuhan spesifik Anda",
    type: "textarea",
    required: false,
  },
];

export const paketWisataFormFields: FormField[] = [
  {
    id: "name",
    label: "Nama",
    placeholder: "Contoh: Budi Santoso",
    type: "text",
    required: true,
  },
  {
    id: "travelDate",
    label: "Tanggal perjalanan",
    placeholder: "Contoh: 12 Agustus 2026",
    type: "text",
    required: true,
  },
  {
    id: "guests",
    label: "Jumlah tamu",
    placeholder: "Contoh: 4 dewasa, 2 anak-anak",
    type: "text",
    required: true,
  },
  {
    id: "message",
    label: "Pesan tambahan (opsional)",
    placeholder: "Ceritakan preferensi perjalanan Anda",
    type: "textarea",
    required: false,
  },
];

export function buildWhatsappMessage(
  context: FormContext,
  values: Record<string, string>,
  itemName?: string,
  region?: string,
): string {
  const parts: string[] = [];
  parts.push(`Halo Sungkar Group,`);

  if (itemName) {
    parts.push(``);
    if (context === "sewa-mobil") {
      parts.push(`Saya ingin sewa: ${itemName}`);
    } else {
      parts.push(`Saya tertarik dengan paket: ${itemName}`);
    }
  }

  if (region) {
    parts.push(`Lokasi: ${region}`);
  }

  parts.push(``);

  for (const [key, value] of Object.entries(values)) {
    if (!value) continue;
    const label = getFieldLabel(context, key);
    parts.push(`${label}: ${value}`);
  }

  parts.push(``);
  parts.push("Mohon informasi lebih lanjut.");

  return parts.join("\n");
}

function getFieldLabel(context: FormContext, fieldId: string): string {
  const fieldMap: Record<string, string> = {
    name: "Nama",
    travelDate:
      context === "sewa-mobil" ? "Tanggal sewa" : "Tanggal perjalanan",
    duration: "Durasi sewa",
    guests: "Jumlah tamu",
    passengers: "Jumlah penumpang",
    rentalReason: "Keperluan sewa",
    message: "Pesan tambahan",
  };
  return fieldMap[fieldId] ?? fieldId;
}

export const geoLocation = {
  name: "Lombok",
  latitude: -8.7667,
  longitude: 116.35,
  zoom: 11,
} as const;
