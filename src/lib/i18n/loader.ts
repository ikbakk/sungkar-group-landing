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

import * as enLanding from "@/lib/i18n/en/landing";
import * as enAbout from "@/lib/i18n/en/about";
import * as enContactPage from "@/lib/i18n/en/contactPage";
import * as enDestinationsPage from "@/lib/i18n/en/destinationsPage";
import * as enPackagePage from "@/lib/i18n/en/packagePage";
import * as enSewaPage from "@/lib/i18n/en/sewaPage";
import * as enAkomodasiPage from "@/lib/i18n/en/akomodasiPage";
import * as enReviewPage from "@/lib/i18n/en/reviewPage";
import * as enFaqPage from "@/lib/i18n/en/faqPage";

import * as enFaqGeneral from "@/lib/i18n/en/faqs/general";
import * as enFaqAbout from "@/lib/i18n/en/faqs/about";
import * as enFaqContact from "@/lib/i18n/en/faqs/contact";
import * as enFaqPackage from "@/lib/i18n/en/faqs/package";
import * as enFaqSewaMobil from "@/lib/i18n/en/faqs/sewa-mobil";
import * as enFaqReviews from "@/lib/i18n/en/faqs/reviews";
import * as enFaqAkomodasi from "@/lib/i18n/en/faqs/akomodasi";

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
  en: {
    landing: enLanding,
    about: enAbout,
    contactPage: enContactPage,
    destinationsPage: enDestinationsPage,
    packagePage: enPackagePage,
    sewaPage: enSewaPage,
    akomodasiPage: enAkomodasiPage,
    reviewPage: enReviewPage,
    faqPage: enFaqPage,
  },
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
  en: {
    general: enFaqGeneral,
    about: enFaqAbout,
    contact: enFaqContact,
    package: enFaqPackage,
    "sewa-mobil": enFaqSewaMobil,
    reviews: enFaqReviews,
    akomodasi: enFaqAkomodasi,
  },
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

