import { generalFaqItems } from "@/lib/i18n/ar/faqs/general";
import { aboutFaq } from "@/lib/i18n/ar/faqs/about";
import { contactFaq } from "@/lib/i18n/ar/faqs/contact";
import { packageFaq } from "@/lib/i18n/ar/faqs/package";
import { sewaMobilFaq } from "@/lib/i18n/ar/faqs/sewa-mobil";
import { reviewsFaq } from "@/lib/i18n/ar/faqs/reviews";
import { akomodasiFaq } from "@/lib/i18n/ar/faqs/akomodasi";

export const faqItems = {
  general: generalFaqItems,
  about: aboutFaq,
  contact: contactFaq,
  package: packageFaq,
  "sewa-mobil": sewaMobilFaq,
  reviews: reviewsFaq,
  akomodasi: akomodasiFaq,
} as const;
