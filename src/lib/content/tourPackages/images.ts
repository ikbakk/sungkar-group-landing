import type { ImageSource } from "@/lib/images";

import {
  HERO,
  DESTINATIONS,
  GALLERY,
  ACCOMMODATIONS,
  VEHICLES,
  BRAND,
  LEGALITY,
} from "@/assets/images";

const registry: Record<string, ImageSource> = {
  "hero/hero.webp": HERO.hero,
  "hero/hero-lombok.webp": HERO.heroLombok,
  "hero/hero-sumbawa.webp": GALLERY.whaleshark,
  "hero/hero-labuan-bajo.webp": GALLERY.tourSnorkeling,

  "destinations/gili.webp": DESTINATIONS.gili,
  "destinations/lombok.webp": DESTINATIONS.lombok,
  "destinations/rinjani.webp": DESTINATIONS.rinjani,
  "destinations/sumbawa.webp": DESTINATIONS.sumbawa,

  "gallery/gili-meno.webp": GALLERY.giliMeno,
  "gallery/kuta-beach.webp": GALLERY.kutaBeach,
  "gallery/kuta-beach-2.webp": GALLERY.kutaBeach2,
  "gallery/tour-snorkeling.webp": GALLERY.tourSnorkeling,
  "gallery/tour-cultural.webp": GALLERY.tourCultural,
  "gallery/whaleshark.webp": GALLERY.whaleshark,
  "gallery/g-airport.webp": GALLERY.gAirport,
  "gallery/g-airport-1.webp": GALLERY.gAirport1,
  "gallery/g-airport-arrival-1.webp": GALLERY.gAirportArrival1,
  "gallery/g-jetski-1.webp": GALLERY.gJetski1,
  "gallery/g-jetski-2.webp": GALLERY.gJetski2,
  "gallery/g-merese-1.webp": GALLERY.gMerese1,
  "gallery/g-merese-2.webp": GALLERY.gMerese2,
  "gallery/g-mountain.webp": GALLERY.gMountain,
  "gallery/g-mountain-2.webp": GALLERY.gMountain2,
  "gallery/g-penginang-1.webp": GALLERY.gPenginang1,
  "gallery/g-selong-belanak-1.webp": GALLERY.gSelongBelanak1,
  "gallery/g-sembalun.webp": GALLERY.gSembalun,
  "gallery/g-sembalun-2.webp": GALLERY.gSembalun2,
  "gallery/g-sembalun-3.webp": GALLERY.gSembalun3,
  "gallery/g-snorkel.webp": GALLERY.gSnorkel,
  "gallery/g-snorkel-2.webp": GALLERY.gSnorkel2,
  "gallery/g-snorkel-3.webp": GALLERY.gSnorkel3,
  "gallery/g-snorkel-4.webp": GALLERY.gSnorkel4,
  "gallery/g-snorkel-5.webp": GALLERY.gSnorkel5,
  "gallery/g-snorkel-6.webp": GALLERY.gSnorkel6,
  "gallery/g-snorkel-7.webp": GALLERY.gSnorkel7,
  "gallery/g-sukarara.webp": GALLERY.gSukarara,
  "gallery/g-sukarara-2.webp": GALLERY.gSukarara2,
  "gallery/g-waterfall-1.webp": GALLERY.gWaterfall1,

  "accommodations/lombok.webp": ACCOMMODATIONS.lombok,

  "vehicles/avanza.webp": VEHICLES.avanza,
  "vehicles/bus-1.webp": VEHICLES.bus1,
  "vehicles/bus-2.webp": VEHICLES.bus2,
  "vehicles/bus-3.webp": VEHICLES.bus3,
  "vehicles/rental.webp": VEHICLES.rental,

  "brand/logo.webp": BRAND.logo,
  "brand/og-home.webp": BRAND.ogHome,

  "legality/nib.webp": LEGALITY.nib,
  "legality/sk.webp": LEGALITY.sk,
};

const groups: Record<string, Record<string, ImageSource>> = {
  hero: HERO as Record<string, ImageSource>,
  destinations: DESTINATIONS as Record<string, ImageSource>,
  gallery: GALLERY as Record<string, ImageSource>,
  accommodations: ACCOMMODATIONS as Record<string, ImageSource>,
  vehicles: VEHICLES as Record<string, ImageSource>,
  brand: BRAND as Record<string, ImageSource>,
  legality: LEGALITY as Record<string, ImageSource>,
};

function toCamel(fileName: string): string {
  return fileName
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_ ]+([a-zA-Z0-9])/g, (_, c) => c.toUpperCase())
    .replace(/^([A-Z])/, (m) => m.toLowerCase());
}

function resolveRegistryPath(path: string): ImageSource | undefined {
  const [groupName, ...rest] = path.split("/");
  if (!groupName || rest.length === 0) return undefined;

  const group = groups[groupName];
  if (!group) return undefined;

  return group[toCamel(rest.join("/"))];
}

function resolveFallbackImage(path: string): ImageSource | undefined {
  if (path.startsWith("hero/")) {
    if (path.includes("sumbawa")) return GALLERY.whaleshark;
    if (path.includes("lombok")) return HERO.heroLombok;
    return GALLERY.tourSnorkeling;
  }

  if (path.startsWith("gallery/")) {
    if (path.includes("whaleshark") || path.includes("sumbawa")) {
      return GALLERY.whaleshark;
    }

    if (path.includes("lombok") || path.includes("gili") || path.includes("kuta")) {
      return GALLERY.kutaBeach;
    }

    return GALLERY.tourSnorkeling;
  }

  if (path.startsWith("destinations/")) {
    if (path.includes("sumbawa")) return DESTINATIONS.sumbawa;
    if (path.includes("lombok") || path.includes("gili") || path.includes("rinjani")) {
      return DESTINATIONS.lombok;
    }

    return GALLERY.tourSnorkeling;
  }

  if (path.startsWith("accommodations/")) return ACCOMMODATIONS.lombok;
  if (path.startsWith("vehicles/")) return VEHICLES.rental;

  return undefined;
}

export function resolveImage(path: string): ImageSource {
  return registry[path] ?? resolveRegistryPath(path) ?? resolveFallbackImage(path) ?? path;
}

export function resolveImages(paths: string[]): ImageSource[] {
  return paths.map(resolveImage);
}
