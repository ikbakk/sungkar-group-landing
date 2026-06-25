import type { UIStrings } from "./types";
import { id } from "./id";
import { en } from "./en";
import { ar } from "./ar";
import { ms } from "./ms";
import { zh } from "./zh";

import globalId from "./page-global/id";
import globalEn from "./page-global/en";
import globalAr from "./page-global/ar";
import globalMs from "./page-global/ms";
import globalZh from "./page-global/zh";

import aboutId from "./page-about/id";
import aboutEn from "./page-about/en";
import aboutAr from "./page-about/ar";
import aboutMs from "./page-about/ms";
import aboutZh from "./page-about/zh";

import contactId from "./page-contact/id";
import contactEn from "./page-contact/en";
import contactAr from "./page-contact/ar";
import contactMs from "./page-contact/ms";
import contactZh from "./page-contact/zh";

import faqId from "./page-faq/id";
import faqEn from "./page-faq/en";
import faqAr from "./page-faq/ar";
import faqMs from "./page-faq/ms";
import faqZh from "./page-faq/zh";

import reviewsId from "./page-reviews/id";
import reviewsEn from "./page-reviews/en";
import reviewsAr from "./page-reviews/ar";
import reviewsMs from "./page-reviews/ms";
import reviewsZh from "./page-reviews/zh";

import travelGuidesId from "./page-travel-guides/id";
import travelGuidesEn from "./page-travel-guides/en";
import travelGuidesAr from "./page-travel-guides/ar";
import travelGuidesMs from "./page-travel-guides/ms";
import travelGuidesZh from "./page-travel-guides/zh";

import carRentalId from "./page-car-rental/id";
import carRentalEn from "./page-car-rental/en";
import carRentalAr from "./page-car-rental/ar";
import carRentalMs from "./page-car-rental/ms";
import carRentalZh from "./page-car-rental/zh";

import tourPackagesId from "./page-tour-packages/id";
import tourPackagesEn from "./page-tour-packages/en";
import tourPackagesAr from "./page-tour-packages/ar";
import tourPackagesMs from "./page-tour-packages/ms";
import tourPackagesZh from "./page-tour-packages/zh";

import accommodationsId from "./page-accommodations/id";
import accommodationsEn from "./page-accommodations/en";
import accommodationsAr from "./page-accommodations/ar";
import accommodationsMs from "./page-accommodations/ms";
import accommodationsZh from "./page-accommodations/zh";

import blogId from "./page-blog/id";
import blogEn from "./page-blog/en";
import blogAr from "./page-blog/ar";
import blogMs from "./page-blog/ms";
import blogZh from "./page-blog/zh";

import packageDetailId from "./page-package-detail/id";
import packageDetailEn from "./page-package-detail/en";
import packageDetailAr from "./page-package-detail/ar";
import packageDetailMs from "./page-package-detail/ms";
import packageDetailZh from "./page-package-detail/zh";

export const translations: Record<string, UIStrings> = { id, en, ar, ms, zh };

const featureMaps = {
  global: {
    id: globalId,
    en: globalEn,
    ar: globalAr,
    ms: globalMs,
    zh: globalZh,
  },
  aboutPage: {
    id: aboutId,
    en: aboutEn,
    ar: aboutAr,
    ms: aboutMs,
    zh: aboutZh,
  },
  contactPage: {
    id: contactId,
    en: contactEn,
    ar: contactAr,
    ms: contactMs,
    zh: contactZh,
  },
  faqPage: { id: faqId, en: faqEn, ar: faqAr, ms: faqMs, zh: faqZh },
  reviewsPage: {
    id: reviewsId,
    en: reviewsEn,
    ar: reviewsAr,
    ms: reviewsMs,
    zh: reviewsZh,
  },
  travelGuidesPage: {
    id: travelGuidesId,
    en: travelGuidesEn,
    ar: travelGuidesAr,
    ms: travelGuidesMs,
    zh: travelGuidesZh,
  },
  carRentalPage: {
    id: carRentalId,
    en: carRentalEn,
    ar: carRentalAr,
    ms: carRentalMs,
    zh: carRentalZh,
  },
  tourPackagesPage: {
    id: tourPackagesId,
    en: tourPackagesEn,
    ar: tourPackagesAr,
    ms: tourPackagesMs,
    zh: tourPackagesZh,
  },
  accommodationsPage: {
    id: accommodationsId,
    en: accommodationsEn,
    ar: accommodationsAr,
    ms: accommodationsMs,
    zh: accommodationsZh,
  },
  blogPage: { id: blogId, en: blogEn, ar: blogAr, ms: blogMs, zh: blogZh },
  packageDetail: {
    id: packageDetailId,
    en: packageDetailEn,
    ar: packageDetailAr,
    ms: packageDetailMs,
    zh: packageDetailZh,
  },
} as const;

export type { UIStrings };

export function t(locale: string): UIStrings {
  return translations[locale] || translations.id;
}

function pickFeature<T>(feature: Record<string, T>, locale: string): T {
  return feature[locale] || feature.id;
}

export function getGlobalStrings(locale: string) {
  return pickFeature(featureMaps.global, locale);
}

export function getHeaderStrings(locale: string) {
  const strings = getGlobalStrings(locale);
  return {
    ...strings.header,
    siteName: strings.seo.siteName,
  };
}

export function getFooterStrings(locale: string) {
  const strings = getGlobalStrings(locale);
  return {
    footer: strings.footer,
    breadcrumb: strings.breadcrumb,
  };
}

export function getAboutPageStrings(locale: string) {
  return pickFeature(featureMaps.aboutPage, locale);
}

export function getContactPageStrings(locale: string) {
  return pickFeature(featureMaps.contactPage, locale);
}

export function getContactFormStrings(locale: string) {
  const pageStrings = getContactPageStrings(locale);
  const globalStrings = getGlobalStrings(locale);
  return {
    common: {
      contactUs: globalStrings.common.contactUs,
    },
    contact: pageStrings.contact,
  };
}

export function getFaqPageStrings(locale: string) {
  return pickFeature(featureMaps.faqPage, locale);
}

export function getFaqStrings(locale: string) {
  return getFaqPageStrings(locale).faq;
}

export function getReviewsPageStrings(locale: string) {
  return pickFeature(featureMaps.reviewsPage, locale);
}

export function getTravelGuidesPageStrings(locale: string) {
  return pickFeature(featureMaps.travelGuidesPage, locale);
}

export function getCarRentalPageStrings(locale: string) {
  return pickFeature(featureMaps.carRentalPage, locale);
}

export function getTourPackagesPageStrings(locale: string) {
  return pickFeature(featureMaps.tourPackagesPage, locale);
}

export function getAccommodationsPageStrings(locale: string) {
  return pickFeature(featureMaps.accommodationsPage, locale);
}

export function getBlogPageStrings(locale: string) {
  return pickFeature(featureMaps.blogPage, locale);
}

export function getPackageDetailStrings(locale: string) {
  return pickFeature(featureMaps.packageDetail, locale);
}
