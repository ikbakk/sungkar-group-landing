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
    "Local tour operator for Lombok, Sumbawa, and Labuan Bajo with private tour, open trip, transportation, and travel guide services.",
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
    title: "Check Availability",
    description:
      "Use the inquiry flow to check travel dates and the most practical route.",
    action: {
      label: "Check Availability",
      href: "#availability-form",
    },
  },
  {
    id: "whatsapp",
    title: "Chat on WhatsApp",
    description:
      "Best for quick questions, booking confirmations, and itinerary adjustments.",
    action: {
      label: "Chat on WhatsApp",
      href: `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}?text=Halo%20Sungkar%20Group`,
    },
  },
  {
    id: "social",
    title: "Social Channels",
    description:
      "Instagram and YouTube are displayed in the footer for travel updates and destination stories.",
  },
];

export const contactFormFields: FormField[] = [
  {
    id: "travelDate",
    label: "Travel date",
    placeholder: "e.g. August 12, 2026",
    type: "text",
    required: true,
  },
  {
    id: "guests",
    label: "Number of guests",
    placeholder: "e.g. 4 adults, 2 children",
    type: "text",
    required: true,
  },
  {
    id: "location",
    label: "Select location",
    placeholder: "Select destination location...",
    type: "select",
    required: true,
    options: ["Lombok", "Sumbawa", "Labuan Bajo"],
  },
  {
    id: "message",
    label: "Additional message (optional)",
    placeholder: "Tell us about your preferences or special requirements",
    type: "textarea",
    required: false,
  },
];

export type FormContext = "sewa-mobil" | "paket-wisata";

export const sewaMobilFormFields: FormField[] = [
  {
    id: "name",
    label: "Full Name",
    placeholder: "e.g. Budi Santoso",
    type: "text",
    required: true,
  },
  {
    id: "travelDate",
    label: "Rental date",
    placeholder: "e.g. August 12, 2026",
    type: "text",
    required: true,
  },
  {
    id: "duration",
    label: "Rental duration",
    placeholder: "e.g. 3 days",
    type: "text",
    required: true,
  },
  {
    id: "passengers",
    label: "Number of passengers",
    placeholder: "e.g. 4 people",
    type: "text",
    required: true,
  },
  {
    id: "rentalReason",
    label: "Rental purpose",
    placeholder: "Select purpose...",
    type: "select",
    required: true,
    options: ["With driver as guide", "With driver service"],
  },
  {
    id: "message",
    label: "Additional message (optional)",
    placeholder: "Tell us about your specific needs",
    type: "textarea",
    required: false,
  },
];

export const paketWisataFormFields: FormField[] = [
  {
    id: "name",
    label: "Full Name",
    placeholder: "e.g. Budi Santoso",
    type: "text",
    required: true,
  },
  {
    id: "travelDate",
    label: "Travel date",
    placeholder: "e.g. August 12, 2026",
    type: "text",
    required: true,
  },
  {
    id: "guests",
    label: "Number of guests",
    placeholder: "e.g. 4 adults, 2 children",
    type: "text",
    required: true,
  },
  {
    id: "message",
    label: "Additional message (optional)",
    placeholder: "Tell us about your travel preferences",
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
  parts.push(`Hello Sungkar Group,`);

  if (itemName) {
    parts.push(``);
    if (context === "sewa-mobil") {
      parts.push(`I want to rent: ${itemName}`);
    } else {
      parts.push(`I am interested in the package: ${itemName}`);
    }
  }

  if (region) {
    parts.push(`Location: ${region}`);
  }

  parts.push(``);

  for (const [key, value] of Object.entries(values)) {
    if (!value) continue;
    const label = getFieldLabel(context, key);
    parts.push(`${label}: ${value}`);
  }

  parts.push(``);
  parts.push("Please provide more information.");

  return parts.join("\n");
}

function getFieldLabel(context: FormContext, fieldId: string): string {
  const fieldMap: Record<string, string> = {
    name: "Name",
    travelDate: context === "sewa-mobil" ? "Rental date" : "Travel date",
    duration: "Rental duration",
    guests: "Number of guests",
    passengers: "Number of passengers",
    rentalReason: "Rental purpose",
    message: "Additional message",
  };
  return fieldMap[fieldId] ?? fieldId;
}

export const geoLocation = {
  name: "Lombok",
  latitude: -8.7667,
  longitude: 116.35,
  zoom: 11,
} as const;
