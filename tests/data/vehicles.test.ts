/**
 * Vehicle data validation tests
 * Tests all vehicle data for schema compliance
 */
import { describe, it, expect } from "vitest";
import { VehicleSchema } from "@/lib/content/shared/types";
import { vehicles } from "@/lib/content/car-rental";
import { VEHICLE_SEATS, TRANSMISSION_TYPES } from "@/lib/constants/vehicles";
import { REGIONS } from "@/lib/constants/regions";

describe("Vehicle Data Validation", () => {
  describe("All Vehicles", () => {
    it.each(vehicles)("$name should have valid data", (vehicle) => {
      const result = VehicleSchema.safeParse(vehicle);
      if (!result.success) {
        const issues = result.error.issues.map(
          (i) => `  ${i.path.join(".")}: ${i.message}`
        );
        expect.fail(
          `Invalid vehicle "${vehicle.name}":\n${issues.join("\n")}`
        );
      }

      // Additional validation
      expect(vehicle.features).toBeDefined();
      expect(vehicle.bestFor).toBeDefined();
      expect(vehicle.pricePerDay).toBeTruthy();
    });
  });

  describe("Vehicle Specifications", () => {
    it("should have valid seat counts", () => {
      vehicles.forEach((vehicle) => {
        expect(vehicle.seats).toBeGreaterThan(0);
        expect(vehicle.seats).toBeLessThanOrEqual(50);
      });
    });

    it("should have valid transmission types", () => {
      vehicles.forEach((vehicle) => {
        expect([TRANSMISSION_TYPES.MANUAL, TRANSMISSION_TYPES.AUTOMATIC]).toContain(
          vehicle.transmission
        );
      });
    });

    it("should have seats matching predefined values", () => {
      vehicles.forEach((vehicle) => {
        const expectedSeats = (VEHICLE_SEATS as Record<string, number>)[vehicle.slug];
        if (expectedSeats !== undefined) {
          expect(vehicle.seats).toBe(expectedSeats);
        }
      });
    });
  });

  describe("Lombok Vehicles", () => {
    const lombokVehicles = vehicles.filter(
      (v) => v.region === REGIONS.LOMBOK
    );

    it("should have valid region", () => {
      lombokVehicles.forEach((vehicle) => {
        expect(vehicle.region).toBe(REGIONS.LOMBOK);
      });
    });
  });

  describe("Labuan Bajo Vehicles", () => {
    const labuanBajoVehicles = vehicles.filter(
      (v) => v.region === REGIONS.LABUAN_BAJO
    );

    it("should have valid region", () => {
      labuanBajoVehicles.forEach((vehicle) => {
        expect(vehicle.region).toBe(REGIONS.LABUAN_BAJO);
      });
    });
  });

  describe("Required Fields", () => {
    it("should have non-empty required fields", () => {
      vehicles.forEach((vehicle) => {
        expect(vehicle.name).toBeTruthy();
        expect(vehicle.slug).toBeTruthy();
        expect(vehicle.pricePerDay).toBeTruthy();
        expect(vehicle.description).toBeTruthy();
        expect(vehicle.imageTop).toBeDefined();
        expect(vehicle.imageBottom).toBeDefined();
      });
    });
  });
});
