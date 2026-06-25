#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src/lib/i18n/ui-strings");
const LOCALES = ["id", "en", "ar", "ms", "zh"];

const features = {
  "component-header": (data) => ({
    chatWhatsapp: data.header.chatWhatsapp,
    menu: data.header.menu,
    exploreDestinations: data.header.exploreDestinations,
    language: data.header.language,
    destinationsSubtitle: data.header.destinationsSubtitle,
    siteName: data.seo.siteName,
  }),
  "component-footer": (data) => ({
    footer: data.footer,
    breadcrumb: {
      about: data.breadcrumb.about,
      contact: data.breadcrumb.contact,
      faq: data.breadcrumb.faq,
      reviews: data.breadcrumb.reviews,
      destinations: data.breadcrumb.destinations,
      tourPackages: data.breadcrumb.tourPackages,
      carRental: data.breadcrumb.carRental,
      accommodations: data.breadcrumb.accommodations,
      travelGuides: data.breadcrumb.travelGuides,
      blog: data.breadcrumb.blog,
    },
  }),
  "component-faq": (data) => ({
    sectionTitle: data.faq.sectionTitle,
  }),
  "component-contact-form": (data) => ({
    common: { contactUs: data.common.contactUs },
    contact: {
      chooseLocation: data.contact.chooseLocation,
      choosePackage: data.contact.choosePackage,
      selectLocationFirst: data.contact.selectLocationFirst,
      optional: data.contact.optional,
      formTitle: data.contact.formTitle,
      formDescription: data.contact.formDescription,
      formWhatsappSubject: data.contact.formWhatsappSubject,
      whatsappGreeting: data.contact.whatsappGreeting,
      whatsappLocation: data.contact.whatsappLocation,
      whatsappFollowUp: data.contact.whatsappFollowUp,
      whatsappFormDate: data.contact.whatsappFormDate,
      whatsappFormGuests: data.contact.whatsappFormGuests,
      whatsappFormMessage: data.contact.whatsappFormMessage,
      whatsappFormPackage: data.contact.whatsappFormPackage,
      formDesc: data.contact.formDesc,
    },
  }),
  "page-package-detail": (data) => ({
    common: {
      contactForPrice: data.common.contactForPrice,
      learnMore: data.common.learnMore,
    },
    breadcrumb: {
      home: data.breadcrumb.home,
      tourPackages: data.breadcrumb.tourPackages,
    },
    gallery: data.gallery,
    faq: { sectionTitle: data.faq.sectionTitle },
    cta: { book: data.cta.book },
    paketWisata: {
      duration: data.paketWisata.duration,
      category: data.paketWisata.category,
      location: data.paketWisata.location,
      readyToStart: data.paketWisata.readyToStart,
    },
  }),
};

function evaluateLocale(locale) {
  const sourcePath = path.join(SRC, `${locale}.ts`);
  const source = fs
    .readFileSync(sourcePath, "utf8")
    .replace(/^import type .*\n/m, "")
    .replace(/export const \w+: UIStrings = /, "export const data = ");
  return import(`data:text/javascript,${encodeURIComponent(source)}`).then(
    (mod) => mod.data,
  );
}

for (const locale of LOCALES) {
  const data = await evaluateLocale(locale);
  for (const [feature, select] of Object.entries(features)) {
    const dir = path.join(SRC, feature);
    fs.mkdirSync(dir, { recursive: true });
    const body = `export default ${JSON.stringify(select(data), null, 2)} as const;\n`;
    fs.writeFileSync(path.join(dir, `${locale}.ts`), body, "utf8");
  }
}

console.log("Generated feature-scoped UI string files.");
