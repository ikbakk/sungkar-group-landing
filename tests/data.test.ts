import { describe, it, expect } from "vitest";
import {
  TourPackageSchema,
  DestinationSchema,
  AccommodationSchema,
  VehicleSchema,
} from "@/lib/content/shared/types";

import { packages } from "@/lib/content/tourPackages";
import { destinations } from "@/lib/content/destinations";
import { accommodations } from "@/lib/content/accommodations";
import { vehicles } from "@/lib/content/car-rental";

describe("TourPackage data validation", () => {
  packages.forEach((pkg) => {
    it(`${pkg.title} has valid data`, () => {
      const result = TourPackageSchema.safeParse(pkg);
      if (!result.success) {
        const issues = result.error.issues.map(
          (i) => `  ${i.path.join(".")}: ${i.message}`
        );
        expect.fail(`Invalid package "${pkg.title}":\n${issues.join("\n")}`);
      }
    });
  });
});

describe("Destination data validation", () => {
  destinations.forEach((dest) => {
    it(`${dest.title} has valid data`, () => {
      const result = DestinationSchema.safeParse(dest);
      if (!result.success) {
        const issues = result.error.issues.map(
          (i) => `  ${i.path.join(".")}: ${i.message}`
        );
        expect.fail(`Invalid destination "${dest.title}":\n${issues.join("\n")}`);
      }
    });
  });
});

describe("Accommodation data validation", () => {
  accommodations.forEach((acc) => {
    it(`${acc.name} has valid data`, () => {
      const result = AccommodationSchema.safeParse(acc);
      if (!result.success) {
        const issues = result.error.issues.map(
          (i) => `  ${i.path.join(".")}: ${i.message}`
        );
        expect.fail(`Invalid accommodation "${acc.name}":\n${issues.join("\n")}`);
      }
    });
  });
});

describe("Vehicle data validation", () => {
  vehicles.forEach((v) => {
    it(`${v.name} has valid data`, () => {
      const result = VehicleSchema.safeParse(v);
      if (!result.success) {
        const issues = result.error.issues.map(
          (i) => `  ${i.path.join(".")}: ${i.message}`
        );
        expect.fail(`Invalid vehicle "${v.name}":\n${issues.join("\n")}`);
      }
    });
  });
});
