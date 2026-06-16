import type { Locale } from "./index";

const DEFAULT_LOCALE: Locale = "id";

const PATH_MAP: Record<string, string> = {
  "/destinasi": "/destinations",
  "/destinasi/": "/destinations/",
  "/paket-wisata": "/tour-packages",
  "/paket-wisata/": "/tour-packages/",
  "/sewa-mobil": "/car-rental",
  "/sewa-mobil/": "/car-rental/",
  "/akomodasi": "/accommodations",
  "/akomodasi/": "/accommodations/",
  "/panduan-wisata": "/travel-guides",
  "/panduan-wisata/": "/travel-guides/",
  "/tentang-kami": "/about",
  "/kontak": "/contact",
  "/ulasan": "/reviews",
  "/kebijakan-privasi": "/privacy-policy",
  "/syarat-ketentuan": "/terms-conditions",
};

export { PATH_MAP };

const REVERSE_PATH_MAP: Record<string, string> = {};
for (const [idPath, enPath] of Object.entries(PATH_MAP)) {
  REVERSE_PATH_MAP[enPath] = idPath;
}

export function englishToIndonesian(path: string): string {
  for (const [enPath, idPath] of Object.entries(REVERSE_PATH_MAP)) {
    if (path.startsWith(enPath)) {
      return path.replace(enPath, idPath);
    }
  }
  return path;
}

export function localizeHref(href: string | undefined, locale: string): string | undefined {
  if (!href) return href;
  if (href.startsWith("http") || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return href;
  }

  if (locale === DEFAULT_LOCALE) return href;

  let canonicalPath = href;
  for (const [oldPath, newPath] of Object.entries(PATH_MAP)) {
    if (href.startsWith(oldPath)) {
      canonicalPath = href.replace(oldPath, newPath);
      break;
    }
  }
  return "/" + locale + canonicalPath;
}
