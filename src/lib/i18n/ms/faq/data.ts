import { generalFaqItems } from "@/lib/i18n/ms/faqs/general";
import { aboutFaq } from "@/lib/i18n/ms/faqs/about";
import { contactFaq } from "@/lib/i18n/ms/faqs/contact";
import { packageFaq } from "@/lib/i18n/ms/faqs/package";
import { sewaMobilFaq } from "@/lib/i18n/ms/faqs/sewa-mobil";
import { reviewsFaq } from "@/lib/i18n/ms/faqs/reviews";
import { akomodasiFaq } from "@/lib/i18n/ms/faqs/akomodasi";

export const faqItems = {
  general: generalFaqItems,
  about: aboutFaq,
  contact: contactFaq,
  package: packageFaq,
  "sewa-mobil": sewaMobilFaq,
  reviews: reviewsFaq,
  akomodasi: akomodasiFaq,
} as const;
