import { generalFaqItems } from "@/lib/i18n/zh/faqs/general";
import { aboutFaq } from "@/lib/i18n/zh/faqs/about";
import { contactFaq } from "@/lib/i18n/zh/faqs/contact";
import { packageFaq } from "@/lib/i18n/zh/faqs/package";
import { sewaMobilFaq } from "@/lib/i18n/zh/faqs/sewa-mobil";
import { reviewsFaq } from "@/lib/i18n/zh/faqs/reviews";
import { akomodasiFaq } from "@/lib/i18n/zh/faqs/akomodasi";

export const faqItems = {
  general: generalFaqItems,
  about: aboutFaq,
  contact: contactFaq,
  package: packageFaq,
  "sewa-mobil": sewaMobilFaq,
  reviews: reviewsFaq,
  akomodasi: akomodasiFaq,
} as const;
