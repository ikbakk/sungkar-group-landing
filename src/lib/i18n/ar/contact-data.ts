// طبقة بيانات الاتصال
// تفصل منطق العمل والبيانات عن مكونات العرض

import { t } from "@/lib/i18n";

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
    "مشغل سياحي محلي للومبوك، سومباوا، ولابوان باجو مع جولات خاصة، رحلات مفتوحة، نقل، وخدمات أدلة السفر.",
  phone: "+62 81236128629",
  email: "",
  whatsapp: "+62 81236128629",
  address: {
    street: "Adi sucipto residence No.blok D12, Ampenan Utara, Kec. Ampenan",
    city: "ماتارام",
    region: "نوسا تينغارا بارا",
    postalCode: "83123",
    country: "إندونيسيا",
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
    title: "التحقق من التوافر",
    description:
      "استخدم نموذج الاستفسار للتحقق من تواريخ السفر والمسار الأكثر عملية.",
    action: {
      label: "التحقق من التوافر",
      href: "#availability-form",
    },
  },
  {
    id: "whatsapp",
    title: "الدردشة على واتساب",
    description: "الأفضل للأسئلة السريعة، تأكيد الحجوزات، وتعديلات البرنامج.",
    action: {
      label: "الدردشة على واتساب",
      href: `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}?text=Halo%20Sungkar%20Group`,
    },
  },
  {
    id: "social",
    title: "قنوات التواصل الاجتماعي",
    description:
      "إنستغرام ويوتيوب معروضان في التذييل لتحديثات السفر وقصص الوجهات.",
  },
];

export const contactFormFields: FormField[] = [
  {
    id: "travelDate",
    label: "تاريخ السفر",
    placeholder: "مثال: 12 أغسطس 2026",
    type: "text",
    required: true,
  },
  {
    id: "guests",
    label: "عدد الضيوف",
    placeholder: "مثال: 4 بالغين، 2 أطفال",
    type: "text",
    required: true,
  },
  {
    id: "location",
    label: "اختر الموقع",
    placeholder: "اختر موقع الوجهة...",
    type: "select",
    required: true,
    options: ["لومبوك", "سومباوا", "لابوان باجو"],
  },
  {
    id: "message",
    label: "رسالة إضافية (اختياري)",
    placeholder: "أخبرنا عن تفضيلاتك أو متطلباتك الخاصة",
    type: "textarea",
    required: false,
  },
];

export type FormContext = "sewa-mobil" | "paket-wisata";

export const sewaMobilFormFields: FormField[] = [
  {
    id: "name",
    label: "الاسم الكامل",
    placeholder: "مثال: بودي سانتوسو",
    type: "text",
    required: true,
  },
  {
    id: "travelDate",
    label: "تاريخ التأجير",
    placeholder: "مثال: 12 أغسطس 2026",
    type: "text",
    required: true,
  },
  {
    id: "duration",
    label: "مدة التأجير",
    placeholder: "مثال: 3 أيام",
    type: "text",
    required: true,
  },
  {
    id: "passengers",
    label: "عدد الركاب",
    placeholder: "مثال: 4 أشخاص",
    type: "text",
    required: true,
  },
  {
    id: "rentalReason",
    label: "غرض التأجير",
    placeholder: "اختر الغرض...",
    type: "select",
    required: true,
    options: ["مع سائق كدليل", "مع خدمة سائق"],
  },
  {
    id: "message",
    label: "رسالة إضافية (اختياري)",
    placeholder: "أخبرنا عن احتياجاتك الخاصة",
    type: "textarea",
    required: false,
  },
];

export const paketWisataFormFields: FormField[] = [
  {
    id: "name",
    label: "الاسم الكامل",
    placeholder: "مثال: بودي سانتوسو",
    type: "text",
    required: true,
  },
  {
    id: "travelDate",
    label: "تاريخ السفر",
    placeholder: "مثال: 12 أغسطس 2026",
    type: "text",
    required: true,
  },
  {
    id: "guests",
    label: "عدد الضيوف",
    placeholder: "مثال: 4 بالغين، 2 أطفال",
    type: "text",
    required: true,
  },
  {
    id: "message",
    label: "رسالة إضافية (اختياري)",
    placeholder: "أخبرنا عن تفضيلات سفرك",
    type: "textarea",
    required: false,
  },
];

export function buildWhatsappMessage(
  context: FormContext,
  values: Record<string, string>,
  itemName?: string,
  region?: string,
  locale?: string,
): string {
  const uiStrings = t(locale ?? "id");
  const parts: string[] = [];
  parts.push(uiStrings.contact.whatsappGreeting);

  if (itemName) {
    parts.push(``);
    if (context === "sewa-mobil") {
      parts.push(
        uiStrings.contact.whatsappSewaIntro.replace("{item}", itemName),
      );
    } else {
      parts.push(
        uiStrings.contact.whatsappPaketIntro.replace("{item}", itemName),
      );
    }
  }

  if (region) {
    parts.push(uiStrings.contact.whatsappLocation.replace("{region}", region));
  }

  parts.push(``);

  for (const [key, value] of Object.entries(values)) {
    if (!value) continue;
    const label = getFieldLabel(context, key, locale);
    parts.push(`${label}: ${value}`);
  }

  parts.push(``);
  parts.push(uiStrings.contact.whatsappFollowUp);

  return parts.join("\n");
}

function getFieldLabel(
  context: FormContext,
  fieldId: string,
  locale?: string,
): string {
  const s = t(locale ?? "id");
  const fieldMap: Record<string, string> = {
    name: s.contact.formFieldName,
    travelDate:
      context === "sewa-mobil"
        ? s.contact.formFieldTravelDateSewa
        : s.contact.formFieldTravelDate,
    duration: s.contact.formFieldDuration,
    guests: s.contact.formFieldGuests,
    passengers: s.contact.formFieldPassengers,
    rentalReason: s.contact.formFieldRentalReason,
    message: s.contact.formFieldMessage,
  };
  return fieldMap[fieldId] ?? fieldId;
}

export const geoLocation = {
  name: "Lombok",
  latitude: -8.7667,
  longitude: 116.35,
  zoom: 11,
} as const;
