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
  "accommodations/lombok.webp": ACCOMMODATIONS.lombok,
  "vehicles/avanza.webp": VEHICLES.avanza,
  "vehicles/bus-1.webp": VEHICLES.bus1,
  "vehicles/bus-2.webp": VEHICLES.bus2,
  "vehicles/bus-3.webp": VEHICLES.bus3,
  "vehicles/mitsubishi-pajero-sport.webp": VEHICLES.mitsubishiPajeroSport,
  "vehicles/rental.webp": VEHICLES.rental,
  "vehicles/toyota-alphard.webp": VEHICLES.toyotaAlphard,
  "vehicles/toyota-avanza-side.webp": VEHICLES.toyotaAvanzaSide,
  "vehicles/toyota-avanza.webp": VEHICLES.toyotaAvanza,
  "vehicles/toyota-fortuner-gr.webp": VEHICLES.toyotaFortunerGr,
  "vehicles/toyota-hiace-commuter.webp": VEHICLES.toyotaHiaceCommuter,
  "vehicles/toyota-hiace-premio.webp": VEHICLES.toyotaHiacePremio,
  "vehicles/toyota-innova-reborn-diesel.webp":
    VEHICLES.toyotaInnovaRebornDiesel,
  "vehicles/toyota-innova-reborn.webp": VEHICLES.toyotaInnovaReborn,
  "vehicles/toyota-innova-zenix.webp": VEHICLES.toyotaInnovaZenix,
  "vehicles/toyota-alphard-card.webp": VEHICLES.vehicleCardAlphard,
  "vehicles/toyota-avanza-card.webp": VEHICLES.vehicleCardAvanza,
  "vehicles/toyota-avanza-fortuner-innova-group.webp":
    VEHICLES.vehicleCardAvanzaFortunerInnova,
  "vehicles/toyota-fortuner-card.webp": VEHICLES.vehicleCardFortuner,
  "vehicles/toyota-hiace-commuter-card.webp": VEHICLES.vehicleCardHiaceCommuter,
  "vehicles/toyota-hiace-premio-card.webp": VEHICLES.vehicleCardHiacePremio,
  "vehicles/toyota-innova-card.webp": VEHICLES.vehicleCardInnova,
  "brand/logo.webp": BRAND.logo,
  "brand/og-home.webp": BRAND.ogHome,
  "legality/nib.webp": LEGALITY.nib,
  "legality/sk.webp": LEGALITY.sk,
};

function resolveFallbackImage(assetPath: string): ImageSource | undefined {
  if (assetPath.startsWith("hero/")) {
    if (assetPath.includes("sumbawa")) return GALLERY.whaleshark;
    if (assetPath.includes("lombok")) return HERO.heroLombok;
    return GALLERY.tourSnorkeling;
  }
  if (assetPath.startsWith("gallery/")) {
    if (assetPath.includes("whaleshark") || assetPath.includes("sumbawa"))
      return GALLERY.whaleshark;
    if (
      assetPath.includes("lombok") ||
      assetPath.includes("gili") ||
      assetPath.includes("kuta")
    )
      return GALLERY.kutaBeach;
    return GALLERY.tourSnorkeling;
  }
  if (assetPath.startsWith("destinations/")) {
    if (assetPath.includes("sumbawa")) return DESTINATIONS.sumbawa;
    if (
      assetPath.includes("lombok") ||
      assetPath.includes("gili") ||
      assetPath.includes("rinjani")
    )
      return DESTINATIONS.lombok;
    return GALLERY.tourSnorkeling;
  }
  if (assetPath.startsWith("accommodations/")) return ACCOMMODATIONS.lombok;
  if (assetPath.startsWith("vehicles/")) return VEHICLES.rental;
  return undefined;
}

export function resolveImage(assetPath: string): ImageSource {
  if (assetPath.startsWith("packages/")) {
    return `/images/${assetPath}`;
  }

  return registry[assetPath] ?? resolveFallbackImage(assetPath) ?? assetPath;
}

export function resolveImages(paths: string[]): ImageSource[] {
  return paths.map(resolveImage);
}
