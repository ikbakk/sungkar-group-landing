import { carRentalData } from "@/generated/content/car-rental.generated";
import type { Vehicle } from "@/lib/content/shared/types";
import type { RegionKey } from "@/lib/constants/regions";
import type { TransmissionType } from "@/lib/constants/vehicles";
import { resolveImage } from "@/lib/content/tourPackages/images";

type EntryData = (typeof carRentalData)[number];

export async function getVehicles(locale = "id"): Promise<Vehicle[]> {
  return carRentalData
    .filter((entry) => entry.locale === locale)
    .map((data: EntryData) => ({
      slug: data.slug,
      name: data.name,
      region: data.region as RegionKey,
      pricePerDay: data.pricePerDay,
      seats: data.seats,
      transmission: data.transmission as TransmissionType,
      features: data.features,
      bestFor: data.bestFor,
      description: data.description,
      imageTop: resolveImage(data.imageTop),
      imageBottom: resolveImage(data.imageBottom),
    }));
}
