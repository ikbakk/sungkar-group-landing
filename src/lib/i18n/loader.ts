import type { Locale } from "./index";

import * as idLanding from "@/lib/content/landing";
import * as idAbout from "@/lib/content/about";
import * as idContactPage from "@/lib/content/contact";
import * as idDestinationsPage from "@/lib/content/destinations";
import * as idPackagePage from "@/lib/content/tour-packages";
import * as idSewaPage from "@/lib/content/car-rental";
import * as idAkomodasiPage from "@/lib/content/accommodations";
import * as idReviewPage from "@/lib/content/reviews";
import * as idFaqPage from "@/lib/content/faq";

import * as idFaqGeneral from "@/lib/content/faqs/general";
import * as idFaqAbout from "@/lib/content/faqs/about";
import * as idFaqContact from "@/lib/content/faqs/contact";
import * as idFaqPackage from "@/lib/content/faqs/package";
import * as idFaqSewaMobil from "@/lib/content/faqs/sewa-mobil";
import * as idFaqReviews from "@/lib/content/faqs/reviews";
import * as idFaqAkomodasi from "@/lib/content/faqs/akomodasi";

import * as enLanding from "@/lib/i18n/en/landing";
import * as enAbout from "@/lib/i18n/en/about";
import * as enContactPage from "@/lib/i18n/en/contact";
import * as enDestinationsPage from "@/lib/i18n/en/destinations";
import * as enPackagePage from "@/lib/i18n/en/tour-packages";
import * as enSewaPage from "@/lib/i18n/en/car-rental";
import * as enAkomodasiPage from "@/lib/i18n/en/accommodations";
import * as enReviewPage from "@/lib/i18n/en/reviews";
import * as enFaqPage from "@/lib/i18n/en/faq";

import * as enFaqGeneral from "@/lib/i18n/en/faqs/general";
import * as enFaqAbout from "@/lib/i18n/en/faqs/about";
import * as enFaqContact from "@/lib/i18n/en/faqs/contact";
import * as enFaqPackage from "@/lib/i18n/en/faqs/package";
import * as enFaqSewaMobil from "@/lib/i18n/en/faqs/sewa-mobil";
import * as enFaqReviews from "@/lib/i18n/en/faqs/reviews";
import * as enFaqAkomodasi from "@/lib/i18n/en/faqs/akomodasi";

import * as arLanding from "@/lib/i18n/ar/landing";
import * as arAbout from "@/lib/i18n/ar/about";
import * as arContactPage from "@/lib/i18n/ar/contact";
import * as arDestinationsPage from "@/lib/i18n/ar/destinations";
import * as arPackagePage from "@/lib/i18n/ar/tour-packages";
import * as arSewaPage from "@/lib/i18n/ar/car-rental";
import * as arAkomodasiPage from "@/lib/i18n/ar/accommodations";
import * as arReviewPage from "@/lib/i18n/ar/reviews";
import * as arFaqPage from "@/lib/i18n/ar/faq";
import * as arFaqGeneral from "@/lib/i18n/ar/faqs/general";
import * as arFaqAbout from "@/lib/i18n/ar/faqs/about";
import * as arFaqContact from "@/lib/i18n/ar/faqs/contact";
import * as arFaqPackage from "@/lib/i18n/ar/faqs/package";
import * as arFaqSewaMobil from "@/lib/i18n/ar/faqs/sewa-mobil";
import * as arFaqReviews from "@/lib/i18n/ar/faqs/reviews";
import * as arFaqAkomodasi from "@/lib/i18n/ar/faqs/akomodasi";
import * as arNavigation from "@/lib/i18n/ar/navigationData";

import * as msLanding from "@/lib/i18n/ms/landing";
import * as msAbout from "@/lib/i18n/ms/about";
import * as msContactPage from "@/lib/i18n/ms/contact";
import * as msDestinationsPage from "@/lib/i18n/ms/destinations";
import * as msPackagePage from "@/lib/i18n/ms/tour-packages";
import * as msSewaPage from "@/lib/i18n/ms/car-rental";
import * as msAkomodasiPage from "@/lib/i18n/ms/accommodations";
import * as msReviewPage from "@/lib/i18n/ms/reviews";
import * as msFaqPage from "@/lib/i18n/ms/faq";
import * as msFaqGeneral from "@/lib/i18n/ms/faqs/general";
import * as msFaqAbout from "@/lib/i18n/ms/faqs/about";
import * as msFaqContact from "@/lib/i18n/ms/faqs/contact";
import * as msFaqPackage from "@/lib/i18n/ms/faqs/package";
import * as msFaqSewaMobil from "@/lib/i18n/ms/faqs/sewa-mobil";
import * as msFaqReviews from "@/lib/i18n/ms/faqs/reviews";
import * as msFaqAkomodasi from "@/lib/i18n/ms/faqs/akomodasi";
import * as msNavigation from "@/lib/i18n/ms/navigationData";

import * as zhLanding from "@/lib/i18n/zh/landing";
import * as zhAbout from "@/lib/i18n/zh/about";
import * as zhContactPage from "@/lib/i18n/zh/contact";
import * as zhDestinationsPage from "@/lib/i18n/zh/destinations";
import * as zhPackagePage from "@/lib/i18n/zh/tour-packages";
import * as zhSewaPage from "@/lib/i18n/zh/car-rental";
import * as zhAkomodasiPage from "@/lib/i18n/zh/accommodations";
import * as zhReviewPage from "@/lib/i18n/zh/reviews";
import * as zhFaqPage from "@/lib/i18n/zh/faq";
import * as zhFaqGeneral from "@/lib/i18n/zh/faqs/general";
import * as zhFaqAbout from "@/lib/i18n/zh/faqs/about";
import * as zhFaqContact from "@/lib/i18n/zh/faqs/contact";
import * as zhFaqPackage from "@/lib/i18n/zh/faqs/package";
import * as zhFaqSewaMobil from "@/lib/i18n/zh/faqs/sewa-mobil";
import * as zhFaqReviews from "@/lib/i18n/zh/faqs/reviews";
import * as zhFaqAkomodasi from "@/lib/i18n/zh/faqs/akomodasi";
import * as zhNavigation from "@/lib/i18n/zh/navigationData";

import * as idLegal from "@/lib/content/legal";
import * as enLegal from "@/lib/i18n/en/legal";
import * as arLegal from "@/lib/i18n/ar/legal";
import * as msLegal from "@/lib/i18n/ms/legal";
import * as zhLegal from "@/lib/i18n/zh/legal";

import * as idNavigation from "@/lib/content/navigationData";
import * as enNavigation from "@/lib/i18n/en/navigationData";

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
    legal: idLegal,
    navigation: idNavigation,
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
    legal: enLegal,
    navigation: enNavigation,
  },
  ar: {
    landing: arLanding,
    about: arAbout,
    contactPage: arContactPage,
    destinationsPage: arDestinationsPage,
    packagePage: arPackagePage,
    sewaPage: arSewaPage,
    akomodasiPage: arAkomodasiPage,
    reviewPage: arReviewPage,
    faqPage: arFaqPage,
    legal: arLegal,
    navigation: arNavigation,
  },
  ms: {
    landing: msLanding,
    about: msAbout,
    contactPage: msContactPage,
    destinationsPage: msDestinationsPage,
    packagePage: msPackagePage,
    sewaPage: msSewaPage,
    akomodasiPage: msAkomodasiPage,
    reviewPage: msReviewPage,
    faqPage: msFaqPage,
    legal: msLegal,
    navigation: msNavigation,
  },
  zh: {
    landing: zhLanding,
    about: zhAbout,
    contactPage: zhContactPage,
    destinationsPage: zhDestinationsPage,
    packagePage: zhPackagePage,
    sewaPage: zhSewaPage,
    akomodasiPage: zhAkomodasiPage,
    reviewPage: zhReviewPage,
    faqPage: zhFaqPage,
    legal: zhLegal,
    navigation: zhNavigation,
  },
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
  ar: {
    general: arFaqGeneral,
    about: arFaqAbout,
    contact: arFaqContact,
    package: arFaqPackage,
    "sewa-mobil": arFaqSewaMobil,
    reviews: arFaqReviews,
    akomodasi: arFaqAkomodasi,
  },
  ms: {
    general: msFaqGeneral,
    about: msFaqAbout,
    contact: msFaqContact,
    package: msFaqPackage,
    "sewa-mobil": msFaqSewaMobil,
    reviews: msFaqReviews,
    akomodasi: msFaqAkomodasi,
  },
  zh: {
    general: zhFaqGeneral,
    about: zhFaqAbout,
    contact: zhFaqContact,
    package: zhFaqPackage,
    "sewa-mobil": zhFaqSewaMobil,
    reviews: zhFaqReviews,
    akomodasi: zhFaqAkomodasi,
  },
};

function getLocaleModule(locale: string): Locale {
  const loc = (locale || "id") as Locale;
  if (!contentModules[loc]) {
    return "id";
  }
  return loc;
}

export async function loadContent(
  locale: string,
  module: string,
): Promise<any> {
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
