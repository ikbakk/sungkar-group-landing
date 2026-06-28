import { getCarRentalData } from "../generated/direct-json-loader";
import { safeParse } from "@/lib/errors/content-errors";
import { generatedVehicleSchema } from "@/lib/content/generated/schemas";
import type { Vehicle } from "@/lib/content/shared/types";
import type { RegionKey } from "@/lib/constants/regions";
import type { TransmissionType } from "@/lib/constants/vehicles";
import { resolveImage } from "@/lib/content/tourPackages/images";

type GeneratedEntry = ReturnType<typeof getCarRentalData>[number];

const carRentalData = getCarRentalData();

export async function getVehicles(locale = "id"): Promise<Vehicle[]> {
  return carRentalData
    .filter((entry: GeneratedEntry) => entry.locale === locale)
    .map((entry: GeneratedEntry) => {
      const data = safeParse(
        generatedVehicleSchema,
        entry,
        `car-rental:${entry.slug}:${entry.locale}`,
      );

      return {
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
      };
    });
}
