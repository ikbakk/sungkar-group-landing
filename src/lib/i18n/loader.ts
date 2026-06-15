import type { Locale } from "./index";

import * as idLanding from "@/lib/content/landing";
import * as idAbout from "@/lib/content/about";
import * as idContactPage from "@/lib/content/contactPage";
import * as idDestinationsPage from "@/lib/content/destinationsPage";
import * as idPackagePage from "@/lib/content/packagePage";
import * as idSewaPage from "@/lib/content/sewaPage";
import * as idAkomodasiPage from "@/lib/content/akomodasiPage";
import * as idReviewPage from "@/lib/content/reviewPage";
import * as idFaqPage from "@/lib/content/faqPage";

import * as idFaqGeneral from "@/lib/content/faqs/general";
import * as idFaqAbout from "@/lib/content/faqs/about";
import * as idFaqContact from "@/lib/content/faqs/contact";
import * as idFaqPackage from "@/lib/content/faqs/package";
import * as idFaqSewaMobil from "@/lib/content/faqs/sewa-mobil";
import * as idFaqReviews from "@/lib/content/faqs/reviews";
import * as idFaqAkomodasi from "@/lib/content/faqs/akomodasi";

const contentModules: Record<string, Record<string, any>> = {
  id: {
    landing: idLanding,
    about: idAbout,
    contactPage: idContactPage,
    destinationsPage: idDestinationsPage,
    packagePage: idPackagePage,
    sewaPage: idSewaPage,
    akomodasiPage: idAkomodasiPage,
    reviewPage: idReviewPage,
    faqPage: idFaqPage,
  },
  en: {},
  ar: {},
  ms: {},
  zh: {},
};

const faqModules: Record<string, Record<string, any>> = {
  id: {
    general: idFaqGeneral,
    about: idFaqAbout,
    contact: idFaqContact,
    package: idFaqPackage,
    "sewa-mobil": idFaqSewaMobil,
    reviews: idFaqReviews,
    akomodasi: idFaqAkomodasi,
  },
  en: {},
  ar: {},
  ms: {},
  zh: {},
};

function getLocaleModule(locale: string): Locale {
  const loc = (locale || "id") as Locale;
  if (!contentModules[loc]) {
    return "id";
  }
  return loc;
}

export async function loadContent(locale: string, module: string): Promise<any> {
  const loc = getLocaleModule(locale);
  if (loc !== "id" && Object.keys(contentModules[loc]).length === 0) {
    return contentModules.id[module] || {};
  }
  return contentModules[loc][module] || contentModules.id[module] || {};
}

export async function loadFaq(locale: string, module: string): Promise<any> {
  const loc = getLocaleModule(locale);
  if (loc !== "id" && Object.keys(faqModules[loc]).length === 0) {
    return faqModules.id[module] || {};
  }
  return faqModules[loc][module] || faqModules.id[module] || {};
}

export async function loadTourPackage(locale: string, module: string): Promise<any> {
  const loc = getLocaleModule(locale);
  if (loc === "id") {
    return import(`@/lib/content/tourPackages/${module}`);
  }
  return import(`@/lib/i18n/${loc}/tourPackages/${module}`);
}
