/**
 * Tour package data validation tests
 * Tests all tour package data for schema compliance
 */
import { describe, it, expect } from "vitest";
import { TourPackageSchema } from "@/lib/content/shared/types";
import { packages } from "@/lib/content/tourPackages";
import { REGIONS } from "@/lib/constants/regions";
import { COLLECTIONS } from "@/lib/content/tourPackages/collections";

describe("Tour Package Data Validation", () => {
  describe("Lombok Packages", () => {
    const lombokPackages = packages.filter((pkg) => pkg.region === REGIONS.LOMBOK);

    it.each(lombokPackages)("$title should have valid data", (pkg) => {
      const result = TourPackageSchema.safeParse(pkg);
      if (!result.success) {
        const issues = result.error.issues.map(
          (i) => `  ${i.path.join(".")}: ${i.message}`
        );
        expect.fail(`Invalid Lombok package "${pkg.title}":\n${issues.join("\n")}`);
      }

      // Additional validation
      expect(pkg.images).toBeDefined();
      expect(pkg.images.length).toBeGreaterThan(0);
      expect(pkg.itinerary).toBeDefined();
      expect(pkg.itinerary.length).toBeGreaterThan(0);
    });

    it("should have valid collection slugs", () => {
      lombokPackages.forEach((pkg) => {
        const collectionSlugs = Object.values(COLLECTIONS).map(c => c.slug);
        expect(collectionSlugs).toContain(pkg.collectionSlug);
      });
    });

    it("should have valid region", () => {
      lombokPackages.forEach((pkg) => {
        expect(pkg.region).toBe(REGIONS.LOMBOK);
      });
    });
  });

  describe("Labuan Bajo Packages", () => {
    const labuanBajoPackages = packages.filter(
      (pkg) => pkg.region === REGIONS.LABUAN_BAJO
    );

    it.each(labuanBajoPackages)("$title should have valid data", (pkg) => {
      const result = TourPackageSchema.safeParse(pkg);
      if (!result.success) {
        const issues = result.error.issues.map(
          (i) => `  ${i.path.join(".")}: ${i.message}`
        );
        expect.fail(
          `Invalid Labuan Bajo package "${pkg.title}":\n${issues.join("\n")}`
        );
      }
    });
  });

  describe("Required Fields", () => {
    it("should have non-empty required fields", () => {
      packages.forEach((pkg) => {
        expect(pkg.title).toBeTruthy();
        expect(pkg.slug).toBeTruthy();
        expect(pkg.summary).toBeTruthy();
        expect(pkg.duration).toBeTruthy();
        expect(pkg.region).toBeTruthy();
      });
    });
  });
});
