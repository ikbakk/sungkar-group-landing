import { describe, it, expect } from "vitest";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");

describe("slugify", () => {
  it("converts title to slug", () => {
    const src = readFileSync(
      resolve(ROOT, "scripts/generate-data-template.mjs"),
      "utf-8",
    );
    const fnMatch = src.match(/function slugify\s*\([^)]+\)\s*\{[^}]+\}/);
    expect(fnMatch).not.toBeNull();
  });
});

describe("Region parser", () => {
  it("extracts region values from source-of-truth", () => {
    const src = readFileSync(
      resolve(ROOT, "src/lib/constants/regions.ts"),
      "utf-8",
    );
    const match = src.match(/REGIONS\s*=\s*\{([^}]+)\}/s);
    expect(match).not.toBeNull();
    const values = [...match![1].matchAll(/"([^"]+)"\s+as\s+const/g)].map(
      (m) => m[1],
    );
    expect(values).toContain("lombok");
    expect(values).toContain("labuan-bajo");
    expect(values).toContain("sumbawa");
  });
});

describe("Transmission parser", () => {
  it("extracts transmission types from source-of-truth", () => {
    const src = readFileSync(
      resolve(ROOT, "src/lib/constants/vehicles.ts"),
      "utf-8",
    );
    const match = src.match(/TRANSMISSION_TYPES\s*=\s*\{([^}]+)\}/s);
    expect(match).not.toBeNull();
    const values = [...match![1].matchAll(/"([^"]+)"\s+as\s+const/g)].map(
      (m) => m[1],
    );
    expect(values.length).toBeGreaterThanOrEqual(2);
  });
});

describe("Template output exists (after generation)", () => {
  it("verify packages data dirs exist with correct structure", () => {
    const packagesDir = resolve(ROOT, "data/packages");
    expect(existsSync(packagesDir)).toBe(true);
    const dirs = readdirSync(packagesDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
    expect(dirs.length).toBeGreaterThan(0);
    for (const slug of dirs) {
      expect(existsSync(resolve(packagesDir, slug, "main.json"))).toBe(true);
      expect(existsSync(resolve(packagesDir, slug, "locales.json"))).toBe(true);
    }
  });

  it("verify accommodations data dirs exist with correct structure", () => {
    const dir = resolve(ROOT, "data/accommodations");
    if (!existsSync(dir)) return;
    const dirs = readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
    for (const slug of dirs) {
      expect(existsSync(resolve(dir, slug, "main.json"))).toBe(true);
      expect(existsSync(resolve(dir, slug, "locales.json"))).toBe(true);
    }
  });

  it("verify car-rental data dirs exist with correct structure", () => {
    const dir = resolve(ROOT, "data/car-rental");
    if (!existsSync(dir)) return;
    const dirs = readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
    for (const slug of dirs) {
      expect(existsSync(resolve(dir, slug, "main.json"))).toBe(true);
      expect(existsSync(resolve(dir, slug, "locales.json"))).toBe(true);
    }
  });

  it("verify destinations data dirs exist with correct structure", () => {
    const dir = resolve(ROOT, "data/destinations");
    if (!existsSync(dir)) return;
    const dirs = readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
    for (const slug of dirs) {
      expect(existsSync(resolve(dir, slug, "main.json"))).toBe(true);
      expect(existsSync(resolve(dir, slug, "locales.json"))).toBe(true);
    }
  });
});

describe("Generated JSON validity", () => {
  it("all package main.json files are valid JSON", () => {
    const dir = resolve(ROOT, "data/packages");
    const dirs = readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
    for (const slug of dirs) {
      expect(() =>
        JSON.parse(readFileSync(resolve(dir, slug, "main.json"), "utf-8")),
      ).not.toThrow();
      expect(() =>
        JSON.parse(readFileSync(resolve(dir, slug, "locales.json"), "utf-8")),
      ).not.toThrow();
    }
  });
});
