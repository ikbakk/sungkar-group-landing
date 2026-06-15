import type { Locale } from "./index";

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
};

export function localizeHref(href: string | undefined, locale: string): string | undefined {
  if (!href) return href;
  if (href.startsWith("http") || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return href;
  }
  if (href === "/") return "/" + locale;

  let canonicalPath = href;
  for (const [oldPath, newPath] of Object.entries(PATH_MAP)) {
    if (href.startsWith(oldPath)) {
      canonicalPath = href.replace(oldPath, newPath);
      break;
    }
  }

  return "/" + locale + canonicalPath;
}
