import type { Locale } from "./index";

const contentImporters = import.meta.glob("../content/**/*.ts");
const localeImporters = import.meta.glob("./**/*.ts");

const contentRegistry = {
  id: {
    landing: "../content/landing.ts",
    about: "../content/about/index.ts",
    contactPage: "../content/contact/index.ts",
    destinationsPage: "../content/destinations/index.ts",
    packagePage: "../content/tour-packages/index.ts",
    sewaPage: "../content/car-rental/index.ts",
    akomodasiPage: "../content/accommodations/index.ts",
    reviewPage: "../content/reviews/index.ts",
    faqPage: "../content/faq/index.ts",
    legal: "../content/legal.ts",
    navigation: "../content/navigationData.ts",
  },
  en: {
    landing: "./en/landing.ts",
    about: "./en/about.ts",
    contactPage: "./en/contactPage.ts",
    destinationsPage: "./en/destinationsPage.ts",
    packagePage: "./en/packagePage.ts",
    sewaPage: "./en/sewaPage.ts",
    akomodasiPage: "./en/akomodasiPage.ts",
    reviewPage: "./en/reviewPage.ts",
    faqPage: "./en/faqPage.ts",
    legal: "./en/legal.ts",
    navigation: "./en/navigationData.ts",
  },
  ar: {
    landing: "./ar/landing.ts",
    about: "./ar/about.ts",
    contactPage: "./ar/contactPage.ts",
    destinationsPage: "./ar/destinationsPage.ts",
    packagePage: "./ar/packagePage.ts",
    sewaPage: "./ar/sewaPage.ts",
    akomodasiPage: "./ar/akomodasiPage.ts",
    reviewPage: "./ar/reviewPage.ts",
    faqPage: "./ar/faqPage.ts",
    legal: "./ar/legal.ts",
    navigation: "./ar/navigationData.ts",
  },
  ms: {
    landing: "./ms/landing.ts",
    about: "./ms/about.ts",
    contactPage: "./ms/contactPage.ts",
    destinationsPage: "./ms/destinationsPage.ts",
    packagePage: "./ms/packagePage.ts",
    sewaPage: "./ms/sewaPage.ts",
    akomodasiPage: "./ms/akomodasiPage.ts",
    reviewPage: "./ms/reviewPage.ts",
    faqPage: "./ms/faqPage.ts",
    legal: "./ms/legal.ts",
    navigation: "./ms/navigationData.ts",
  },
  zh: {
    landing: "./zh/landing.ts",
    about: "./zh/about.ts",
    contactPage: "./zh/contactPage.ts",
    destinationsPage: "./zh/destinationsPage.ts",
    packagePage: "./zh/packagePage.ts",
    sewaPage: "./zh/sewaPage.ts",
    akomodasiPage: "./zh/akomodasiPage.ts",
    reviewPage: "./zh/reviewPage.ts",
    faqPage: "./zh/faqPage.ts",
    legal: "./zh/legal.ts",
    navigation: "./zh/navigationData.ts",
  },
} as const;

const faqRegistry = {
  id: {
    general: "../content/faqs/general.ts",
    about: "../content/faqs/about.ts",
    contact: "../content/faqs/contact.ts",
    package: "../content/faqs/package.ts",
    "sewa-mobil": "../content/faqs/sewa-mobil.ts",
    reviews: "../content/faqs/reviews.ts",
    akomodasi: "../content/faqs/akomodasi.ts",
  },
  en: {
    general: "./en/faqs/general.ts",
    about: "./en/faqs/about.ts",
    contact: "./en/faqs/contact.ts",
    package: "./en/faqs/package.ts",
    "sewa-mobil": "./en/faqs/sewa-mobil.ts",
    reviews: "./en/faqs/reviews.ts",
    akomodasi: "./en/faqs/akomodasi.ts",
  },
  ar: {
    general: "./ar/faqs/general.ts",
    about: "./ar/faqs/about.ts",
    contact: "./ar/faqs/contact.ts",
    package: "./ar/faqs/package.ts",
    "sewa-mobil": "./ar/faqs/sewa-mobil.ts",
    reviews: "./ar/faqs/reviews.ts",
    akomodasi: "./ar/faqs/akomodasi.ts",
  },
  ms: {
    general: "./ms/faqs/general.ts",
    about: "./ms/faqs/about.ts",
    contact: "./ms/faqs/contact.ts",
    package: "./ms/faqs/package.ts",
    "sewa-mobil": "./ms/faqs/sewa-mobil.ts",
    reviews: "./ms/faqs/reviews.ts",
    akomodasi: "./ms/faqs/akomodasi.ts",
  },
  zh: {
    general: "./zh/faqs/general.ts",
    about: "./zh/faqs/about.ts",
    contact: "./zh/faqs/contact.ts",
    package: "./zh/faqs/package.ts",
    "sewa-mobil": "./zh/faqs/sewa-mobil.ts",
    reviews: "./zh/faqs/reviews.ts",
    akomodasi: "./zh/faqs/akomodasi.ts",
  },
} as const;

function getLocaleModule(locale: string): Locale {
  const loc = (locale || "id") as Locale;
  return contentRegistry[loc] ? loc : "id";
}

async function importModule(pathname: string) {
  const importer = contentImporters[pathname] || localeImporters[pathname];
  if (!importer) return {};
  return importer();
}

export async function loadContent(
  locale: string,
  module: string,
): Promise<any> {
  const loc = getLocaleModule(locale);
  const target =
    contentRegistry[loc][module as keyof (typeof contentRegistry)[typeof loc]];
  const fallback =
    contentRegistry.id[module as keyof typeof contentRegistry.id];
  return importModule(target || fallback);
}

export async function loadFaq(locale: string, module: string): Promise<any> {
  const loc = getLocaleModule(locale);
  const target =
    faqRegistry[loc][module as keyof (typeof faqRegistry)[typeof loc]];
  const fallback = faqRegistry.id[module as keyof typeof faqRegistry.id];
  return importModule(target || fallback);
}
