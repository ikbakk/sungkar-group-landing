import type { ImageSource } from "@/lib/images";
import { DESTINATIONS, GALLERY, HERO } from "@/assets/images";

const registry: Record<string, ImageSource> = {
  "destinations/gili.webp": DESTINATIONS.gili,
  "destinations/lombok.webp": DESTINATIONS.lombok,
  "destinations/rinjani.webp": DESTINATIONS.rinjani,
  "destinations/sumbawa.webp": DESTINATIONS.sumbawa,
  "gallery/gili-meno.webp": GALLERY.giliMeno,
  "gallery/gili-tangkong.webp": GALLERY.giliTangkong,
  "gallery/kuta-beach.webp": GALLERY.kutaBeach,
  "gallery/kuta-beach-2.webp": GALLERY.kutaBeach2,
  "gallery/kuta-mandalika-aerial.webp": GALLERY.kutaMandalikaAerial,
  "gallery/mandalika-circuit.webp": GALLERY.mandalikaCircuit,
  "gallery/mataram-islamic-center.webp": GALLERY.mataramIslamicCenter,
  "gallery/pink-beach-lombok.webp": GALLERY.pinkBeachLombok,
  "gallery/sasak-village.webp": GALLERY.sasakVillage,
  "gallery/sukarara-village.webp": GALLERY.sukararaVillage,
  "gallery/tanjung-ringgit-lombok.webp": GALLERY.tanjungRinggitLombok,
  "gallery/tiu-kelep-waterfall.webp": GALLERY.tiuKelepWaterfall,
  "gallery/tour-cultural.webp": GALLERY.tourCultural,
  "gallery/tour-snorkeling.webp": GALLERY.tourSnorkeling,
  "gallery/whaleshark.webp": GALLERY.whaleshark,
  "gallery/g-merese-1.webp": GALLERY.gMerese1,
  "gallery/g-merese-2.webp": GALLERY.gMerese2,
  "gallery/g-mountain.webp": GALLERY.gMountain,
  "gallery/g-mountain-2.webp": GALLERY.gMountain2,
  "gallery/g-snorkel.webp": GALLERY.gSnorkel,
  "gallery/g-snorkel-2.webp": GALLERY.gSnorkel2,
  "gallery/g-snorkel-3.webp": GALLERY.gSnorkel3,
  "gallery/g-snorkel-4.webp": GALLERY.gSnorkel4,
  "gallery/gili-nanggu-boat.webp": GALLERY.giliNangguBoat,
  "gallery/gili-nanggu-shore.webp": GALLERY.giliNangguShore,
  "gallery/gili-nanggu-snorkeling.webp": GALLERY.giliNangguSnorkeling,
  "gallery/pink-beach-tangsi-commons.webp": GALLERY.pinkBeachTangsiCommons,
  "gallery/senaru-scenery.webp": GALLERY.senaruScenery,
  "gallery/senaru-tiu-kelep.webp": GALLERY.senaruTiuKelep,
  "gallery/senaru-village.webp": GALLERY.senaruVillage,
  "gallery/senaru-waterfall-commons.webp": GALLERY.senaruWaterfallCommons,
  "gallery/g-sukarara.webp": GALLERY.gSukarara,
  "gallery/g-sukarara-2.webp": GALLERY.gSukarara2,
  "gallery/g-waterfall-1.webp": GALLERY.gWaterfall1,
  "hero/hero-lombok.webp": HERO.heroLombok,
};

export function resolveImage(path: string): ImageSource {
  return registry[path] ?? path;
}

export function resolveImages(paths: string[]): ImageSource[] {
  return paths.map(resolveImage);
}
