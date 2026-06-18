/**
 * Destination data validation tests
 * Tests all destination data for schema compliance
 */
import { describe, it, expect } from "vitest";
import { DestinationSchema } from "@/lib/content/shared/types";
import { destinations } from "@/lib/content/destinations";

describe("Destination Data Validation", () => {
  describe("All Destinations", () => {
    it.each(destinations)("$title should have valid data", (dest) => {
      const result = DestinationSchema.safeParse(dest);
      if (!result.success) {
        const issues = result.error.issues.map(
          (i) => `  ${i.path.join(".")}: ${i.message}`
        );
        expect.fail(
          `Invalid destination "${dest.title}":\n${issues.join("\n")}`
        );
      }

      // Additional validation
      expect(dest.gallery).toBeDefined();
      expect(dest.gallery.length).toBeGreaterThan(0);
      expect(dest.thingsToDo).toBeDefined();
      expect(dest.packages).toBeDefined();
    });
  });

  describe("Lombok Destinations", () => {
    const lombokDestinations = destinations.filter(
      (dest) => dest.region === "Lombok"
    );

    it("should have valid region", () => {
      lombokDestinations.forEach((dest) => {
        expect(dest.region).toBe("Lombok");
      });
    });

    it("should have non-empty gallery", () => {
      lombokDestinations.forEach((dest) => {
        expect(dest.gallery.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Required Fields", () => {
    it("should have non-empty required fields", () => {
      destinations.forEach((dest) => {
        expect(dest.title).toBeTruthy();
        expect(dest.slug).toBeTruthy();
        expect(dest.summary).toBeTruthy();
        expect(dest.image).toBeDefined();
      });
    });
  });
});
