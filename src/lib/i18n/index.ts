import { localizeHref, englishToIndonesian } from "./localize";

export type Locale = "id" | "en" | "ar" | "ms" | "zh";

export const LOCALES: Locale[] = ["id", "en", "ar", "ms", "zh"];

export const NON_DEFAULT_LOCALES: Locale[] = ["en", "ar", "ms", "zh"];

export const LOCALE_LABELS: Record<Locale, string> = {
  id: "Bahasa Indonesia",
  en: "English",
  ar: "العربية",
  ms: "Bahasa Melayu",
  zh: "中文",
};

export const LOCALE_SHORT_LABELS: Record<Locale, string> = {
  id: "ID",
  en: "EN",
  ar: "AR",
  ms: "MS",
  zh: "ZH",
};

export const DEFAULT_LOCALE: Locale = "id";

export const RTL_LOCALES: Locale[] = ["ar"];

export function isRTL(locale: string): boolean {
  return RTL_LOCALES.includes(locale as Locale);
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && LOCALES.includes(segments[0] as Locale)) {
    return segments[0] as Locale;
  }
  return DEFAULT_LOCALE;
}

export function getLocalizedPath(pathname: string, targetLocale: string): string {
  const currentLocale = getLocaleFromPath(pathname);
  const isCurrentDefault = currentLocale === DEFAULT_LOCALE;
  const isTargetDefault = targetLocale === DEFAULT_LOCALE;

  if (isCurrentDefault && !isTargetDefault) {
    return localizeHref(pathname, targetLocale) || pathname;
  }

  if (!isCurrentDefault && isTargetDefault) {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";
    return englishToIndonesian(pathWithoutLocale);
  }

  if (!isCurrentDefault && !isTargetDefault) {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";
    return `/${targetLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
  }

  return pathname;
}

export function formatDate(date: Date, locale: string, options?: Intl.DateTimeFormatOptions): string {
  return date.toLocaleDateString(
    locale === "id" ? "id-ID" : locale === "en" ? "en-US" : locale === "ar" ? "ar-SA" : locale === "ms" ? "ms-MY" : "zh-CN",
    options,
  );
}

export { t } from "./ui-strings";
