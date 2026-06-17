/**
 * Accommodation data validation tests
 * Tests all accommodation data for schema compliance
 */
import { describe, it, expect } from "vitest";
import { AccommodationSchema } from "@/lib/content/shared/types";
import { accommodations } from "@/lib/content/accommodations";
import { REGIONS } from "@/lib/constants/regions";

describe("Accommodation Data Validation", () => {
  describe("All Accommodations", () => {
    it.each(accommodations)("$name should have valid data", (acc) => {
      const result = AccommodationSchema.safeParse(acc);
      if (!result.success) {
        const issues = result.error.issues.map(
          (i) => `  ${i.path.join(".")}: ${i.message}`
        );
        expect.fail(
          `Invalid accommodation "${acc.name}":\n${issues.join("\n")}`
        );
      }

      // Additional validation
      expect(acc.perks).toBeDefined();
      expect(acc.regionalHighlights).toBeDefined();
      expect(acc.description).toBeTruthy();
    });
  });

  describe("Lombok Accommodations", () => {
    const lombokAccommodations = accommodations.filter(
      (acc) => acc.region === REGIONS.LOMBOK
    );

    it("should have valid region", () => {
      lombokAccommodations.forEach((acc) => {
        expect(acc.region).toBe(REGIONS.LOMBOK);
      });
    });

    it("should have non-empty perks", () => {
      lombokAccommodations.forEach((acc) => {
        expect(acc.perks.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Labuan Bajo Accommodations", () => {
    const labuanBajoAccommodations = accommodations.filter(
      (acc) => acc.region === REGIONS.LABUAN_BAJO
    );

    it("should have valid region", () => {
      labuanBajoAccommodations.forEach((acc) => {
        expect(acc.region).toBe(REGIONS.LABUAN_BAJO);
      });
    });
  });

  describe("Required Fields", () => {
    it("should have non-empty required fields", () => {
      accommodations.forEach((acc) => {
        expect(acc.name).toBeTruthy();
        expect(acc.slug).toBeTruthy();
        expect(acc.description).toBeTruthy();
        expect(acc.image).toBeDefined();
      });
    });
  });
});
