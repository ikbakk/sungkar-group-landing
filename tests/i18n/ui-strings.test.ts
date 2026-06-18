import { describe, it, expect } from "vitest";
import { translations } from "@/lib/i18n/ui-strings";
import { LOCALES } from "@/lib/i18n";

type LeafPaths = string[];

type NestedRecord = {
  [key: string]: string | string[] | NestedRecord;
};

function getLeafPaths(obj: NestedRecord, prefix = ""): LeafPaths {
  const paths: LeafPaths = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string" || Array.isArray(value)) {
      paths.push(path);
    } else if (value && typeof value === "object") {
      paths.push(...getLeafPaths(value as NestedRecord, path));
    }
  }
  return paths;
}

function getValueByPath(obj: NestedRecord, path: string): unknown {
  return path.split(".").reduce((acc: unknown, key: string) => {
    if (acc && typeof acc === "object" && key in (acc as NestedRecord)) {
      return (acc as NestedRecord)[key];
    }
    return undefined;
  }, obj);
}

const referenceLocale = "id";
const referenceKeys = getLeafPaths(translations[referenceLocale] as unknown as NestedRecord);
const otherLocales = LOCALES.filter((l) => l !== referenceLocale);

describe("i18n UI strings completeness", () => {
  it.each(LOCALES)("locale %s has the same number of keys as id", (locale) => {
    const keys = getLeafPaths(translations[locale] as unknown as NestedRecord);
    expect(keys.length).toBe(referenceKeys.length);
  });

  describe.each(otherLocales)("locale %s", (locale) => {
    it.each(referenceKeys)("has key '%s' with non-empty value", (key) => {
      const value = getValueByPath(translations[locale] as unknown as NestedRecord, key);
      expect(value).toBeDefined();
      if (typeof value === "string") {
        expect(value.trim()).not.toBe("");
      } else if (Array.isArray(value)) {
        expect(value.length).toBeGreaterThan(0);
        value.forEach((item) => {
          expect(typeof item).toBe("string");
          expect(item.trim()).not.toBe("");
        });
      }
    });
  });

  it("reference locale id has all keys with non-empty values", () => {
    referenceKeys.forEach((key) => {
      const value = getValueByPath(translations.id as unknown as NestedRecord, key);
      expect(value).toBeDefined();
      if (typeof value === "string") {
        expect(value.trim()).not.toBe("");
      } else if (Array.isArray(value)) {
        expect(value.length).toBeGreaterThan(0);
      }
    });
  });
});
