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
    title: "查询可用性",
    description: "使用咨询流程查询旅行日期和最实用的路线。",
    action: {
      label: "查询可用性",
      href: "#availability-form",
    },
  },
  {
    id: "whatsapp",
    title: "通过WhatsApp聊天",
    description: "最适合快速提问、确认预订和调整行程。",
    action: {
      label: "通过WhatsApp聊天",
      href: `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}?text=Halo%20Sungkar%20Group`,
    },
  },
  {
    id: "social",
    title: "社交媒体",
    description: "Instagram和YouTube显示在页脚，提供旅行更新和目的地故事。",
  },
];

export const contactFormFields: FormField[] = [
  {
    id: "travelDate",
    label: "旅行日期",
    placeholder: "例如：2026年8月12日",
    type: "text",
    required: true,
  },
  {
    id: "guests",
    label: "人数",
    placeholder: "例如：4位成人，2位儿童",
    type: "text",
    required: true,
  },
  {
    id: "location",
    label: "选择地点",
    placeholder: "选择目的地...",
    type: "select",
    required: true,
    options: ["龙目岛", "松巴哇岛", "纳闽巴霍"],
  },
  {
    id: "message",
    label: "附加信息（可选）",
    placeholder: "告诉我们您的偏好或特殊要求",
    type: "textarea",
    required: false,
  },
];

export type FormContext = "sewa-mobil" | "paket-wisata";

export const sewaMobilFormFields: FormField[] = [
  {
    id: "name",
    label: "姓名",
    placeholder: "例如：张三",
    type: "text",
    required: true,
  },
  {
    id: "travelDate",
    label: "租车日期",
    placeholder: "例如：2026年8月12日",
    type: "text",
    required: true,
  },
  {
    id: "duration",
    label: "租车时长",
    placeholder: "例如：3天",
    type: "text",
    required: true,
  },
  {
    id: "passengers",
    label: "乘客人数",
    placeholder: "例如：4人",
    type: "text",
    required: true,
  },
  {
    id: "rentalReason",
    label: "租车目的",
    placeholder: "选择目的...",
    type: "select",
    required: true,
    options: ["司机兼导游", "仅司机服务"],
  },
  {
    id: "message",
    label: "附加信息（可选）",
    placeholder: "告诉我们您的具体需求",
    type: "textarea",
    required: false,
  },
];

export const paketWisataFormFields: FormField[] = [
  {
    id: "name",
    label: "姓名",
    placeholder: "例如：张三",
    type: "text",
    required: true,
  },
  {
    id: "travelDate",
    label: "旅行日期",
    placeholder: "例如：2026年8月12日",
    type: "text",
    required: true,
  },
  {
    id: "guests",
    label: "人数",
    placeholder: "例如：4位成人，2位儿童",
    type: "text",
    required: true,
  },
  {
    id: "message",
    label: "附加信息（可选）",
    placeholder: "告诉我们您的旅行偏好",
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
  parts.push(`您好，Sungkar Group，`);

  if (itemName) {
    parts.push(``);
    if (context === "sewa-mobil") {
      parts.push(`我想租车：${itemName}`);
    } else {
      parts.push(`我对以下套餐感兴趣：${itemName}`);
    }
  }

  if (region) {
    parts.push(`地点：${region}`);
  }

  parts.push(``);

  for (const [key, value] of Object.entries(values)) {
    if (!value) continue;
    const label = getFieldLabel(context, key);
    parts.push(`${label}：${value}`);
  }

  parts.push(``);
  parts.push("请提供更多信息。");

  return parts.join("\n");
}

function getFieldLabel(context: FormContext, fieldId: string): string {
  const fieldMap: Record<string, string> = {
    name: "姓名",
    travelDate: context === "sewa-mobil" ? "租车日期" : "旅行日期",
    duration: "租车时长",
    guests: "人数",
    passengers: "乘客人数",
    rentalReason: "租车目的",
    message: "附加信息",
  };
  return fieldMap[fieldId] ?? fieldId;
}

export const geoLocation = {
  name: "Lombok",
  latitude: -8.7667,
  longitude: 116.35,
  zoom: 11,
} as const;
