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
  type: "text" | "email" | "tel" | "number" | "textarea";
  required?: boolean;
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
    id: "destination",
    label: "Fokus destinasi",
    placeholder: "Contoh: Gili dan Kuta",
    type: "text",
    required: true,
  },
  {
    id: "message",
    label: "Pesan tambahan (opsional)",
    placeholder: "Ceritakan preferensi atau kebutuhan khusus Anda",
    type: "textarea",
    required: false,
  },
];

export const geoLocation = {
  name: "Lombok",
  latitude: -8.7667,
  longitude: 116.35,
  zoom: 11,
} as const;
