/**
 * Schema validation tests
 * Tests all schemas for consistency and correctness
 */
import { describe, it, expect } from "vitest";
import {
  TourPackageSchema,
  DestinationSchema,
  AccommodationSchema,
  VehicleSchema,
} from "@/lib/content/shared/types";

describe("Schema Validation", () => {
  describe("TourPackageSchema", () => {
    it("should validate required fields", () => {
      const validData = {
        slug: "test-package",
        title: "Test Package",
        region: "lombok",
        collectionSlug: "1-hari",
        collectionTitle: "1 Day Tour",
        category: "Test Category",
        duration: "1 Day",
        images: [{ src: "/test.jpg" }],
        summary: "Test summary",
        highlights: [],
        itinerary: ["Day 1"],
        includes: [],
        excludes: [],
      };

      expect(TourPackageSchema.safeParse(validData).success).toBe(true);
    });

    it("should reject invalid region", () => {
      const invalidData = {
        slug: "test",
        title: "Test",
        region: "invalid-region",
        collectionSlug: "one-day",
        collectionTitle: "1 Day",
        category: "Test",
        duration: "1 Day",
        images: [{ src: "/test.jpg" }],
        summary: "Test",
        itinerary: ["Day 1"],
        includes: [],
        excludes: [],
      };

      expect(TourPackageSchema.safeParse(invalidData).success).toBe(false);
    });

    it("should require non-empty arrays", () => {
      const invalidData = {
        slug: "test",
        title: "Test",
        region: "lombok",
        collectionSlug: "one-day",
        collectionTitle: "1 Day",
        category: "Test",
        duration: "1 Day",
        images: [],
        summary: "Test",
        itinerary: [],
        includes: [],
        excludes: [],
      };

      expect(TourPackageSchema.safeParse(invalidData).success).toBe(false);
    });
  });

  describe("DestinationSchema", () => {
    it("should validate required fields", () => {
      const validData = {
        slug: "test-dest",
        title: "Test Destination",
        region: "Lombok",
        image: { src: "/test.jpg" },
        gallery: [{ src: "/gallery.jpg" }],
        summary: "Test summary",
        thingsToDo: ["Activity 1"],
        packages: ["package-1"],
      };

      expect(DestinationSchema.safeParse(validData).success).toBe(true);
    });
  });

  describe("AccommodationSchema", () => {
    it("should validate required fields", () => {
      const validData = {
        slug: "test-acc",
        name: "Test Accommodation",
        region: "lombok",
        perks: ["WiFi", "Pool"],
        regionalHighlights: ["View"],
        description: "Test description",
        image: { src: "/test.jpg" },
      };

      expect(AccommodationSchema.safeParse(validData).success).toBe(true);
    });
  });

  describe("VehicleSchema", () => {
    it("should validate required fields", () => {
      const validData = {
        slug: "test-vehicle",
        name: "Test Vehicle",
        region: "lombok",
        pricePerDay: "100",
        seats: 7,
        transmission: "Automatic",
        features: ["AC", "GPS"],
        bestFor: ["Family"],
        description: "Test description",
        imageTop: { src: "/top.jpg" },
        imageBottom: { src: "/bottom.jpg" },
      };

      expect(VehicleSchema.safeParse(validData).success).toBe(true);
    });

    it("should reject invalid transmission type", () => {
      const invalidData = {
        slug: "test",
        name: "Test",
        region: "lombok",
        pricePerDay: "100",
        seats: 7,
        transmission: "Invalid",
        features: [],
        bestFor: [],
        description: "Test",
        imageTop: { src: "/top.jpg" },
        imageBottom: { src: "/bottom.jpg" },
      };

      expect(VehicleSchema.safeParse(invalidData).success).toBe(false);
    });
  });
});
