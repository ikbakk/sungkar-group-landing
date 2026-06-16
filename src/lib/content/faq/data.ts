import { generalFaqItems } from "@/lib/content/faqs/general";
import { aboutFaq } from "@/lib/content/faqs/about";
import { contactFaq } from "@/lib/content/faqs/contact";
import { packageFaq } from "@/lib/content/faqs/package";
import { sewaMobilFaq } from "@/lib/content/faqs/sewa-mobil";
import { reviewsFaq } from "@/lib/content/faqs/reviews";
import { akomodasiFaq } from "@/lib/content/faqs/akomodasi";

export const faqItems = {
  general: generalFaqItems,
  about: aboutFaq,
  contact: contactFaq,
  package: packageFaq,
  "sewa-mobil": sewaMobilFaq,
  reviews: reviewsFaq,
  akomodasi: akomodasiFaq,
} as const;
