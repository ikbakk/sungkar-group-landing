import type { ImageSource } from "@/lib/images";
import { DESTINATIONS, GALLERY, HERO } from "@/assets/images";

const registry: Record<string, ImageSource> = {
  "destinations/gili.webp": DESTINATIONS.gili,
  "destinations/lombok.webp": DESTINATIONS.lombok,
  "destinations/rinjani.webp": DESTINATIONS.rinjani,
  "destinations/sumbawa.webp": DESTINATIONS.sumbawa,
  "gallery/gili-meno.webp": GALLERY.giliMeno,
  "gallery/kuta-beach.webp": GALLERY.kutaBeach,
  "gallery/kuta-beach-2.webp": GALLERY.kutaBeach2,
  "gallery/tour-cultural.webp": GALLERY.tourCultural,
  "gallery/tour-snorkeling.webp": GALLERY.tourSnorkeling,
  "gallery/whaleshark.webp": GALLERY.whaleshark,
  "hero/hero-lombok.webp": HERO.heroLombok,
};

export function resolveImage(path: string): ImageSource {
  return registry[path] ?? path;
}

export function resolveImages(paths: string[]): ImageSource[] {
  return paths.map(resolveImage);
}
