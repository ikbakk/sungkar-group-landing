import { describe, it, expect } from "vitest";
import {
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateProductSchema,
  generateArticleSchema,
  generateTouristAttractionSchema,
  generateFAQPageSchema,
  generateHowToSchema,
} from "@/lib/schemas";

const SITE_URL = "https://www.sungkargroup.com";

describe("generateBreadcrumbSchema", () => {
  it("prepends siteUrl to relative paths", () => {
    const items = [
      { name: "Home", url: "/" },
      { name: "Packages", url: "/paket-wisata" },
    ];
    const result = generateBreadcrumbSchema(items, SITE_URL);
    expect(result["@context"]).toBe("https://schema.org");
    expect(result["@type"]).toBe("BreadcrumbList");
    expect(result.itemListElement).toHaveLength(2);
    expect(result.itemListElement[0].item).toBe(`${SITE_URL}/`);
    expect(result.itemListElement[1].item).toBe(`${SITE_URL}/paket-wisata`);
  });

  it("uses absolute URL as-is when already absolute", () => {
    const items = [
      { name: "Home", url: "/" },
      { name: "Package", url: `${SITE_URL}/paket-wisata/lombok/3d2n` },
    ];
    const result = generateBreadcrumbSchema(items, SITE_URL);
    expect(result.itemListElement[1].item).toBe(`${SITE_URL}${SITE_URL}/paket-wisata/lombok/3d2n`);
  });

  it("assigns correct positions", () => {
    const items = [
      { name: "Home", url: "/" },
      { name: "Packages", url: "/paket-wisata" },
      { name: "Lombok", url: "/paket-wisata/lombok" },
    ];
    const result = generateBreadcrumbSchema(items, SITE_URL);
    result.itemListElement.forEach((item, index) => {
      expect(item.position).toBe(index + 1);
    });
  });
});

describe("generateOrganizationSchema", () => {
  it("uses real phone number from contact-data", () => {
    const result = generateOrganizationSchema(SITE_URL);
    expect(result.contactPoint.telephone).toBe("+62 81236128629");
  });

  it("includes all available languages", () => {
    const result = generateOrganizationSchema(SITE_URL);
    expect(result.contactPoint.availableLanguage).toEqual(["id", "en", "ar", "ms", "zh"]);
  });

  it("uses real social links (no mock URLs)", () => {
    const result = generateOrganizationSchema(SITE_URL);
    expect(result.sameAs).not.toContain("https://www.facebook.com/sungkargroup");
    expect(result.sameAs).not.toContain("https://www.tiktok.com/sungkargroup");
  });
});

describe("generateWebsiteSchema", () => {
  it("does not contain SearchAction", () => {
    const result = generateWebsiteSchema(SITE_URL);
    expect((result as any).potentialAction).toBeUndefined();
  });
});

describe("generateArticleSchema", () => {
  it("uses dynamic business name for author", () => {
    const result = generateArticleSchema("Title", "Desc", "/img.jpg", SITE_URL, "blog/post", "2026-01-01");
    expect(result.author.name).toBe("Sungkar Group Indonesia");
  });

  it("sets dateModified to datePublished when not provided", () => {
    const result = generateArticleSchema("Title", "Desc", "/img.jpg", SITE_URL, "blog/post", "2026-01-01");
    expect(result.dateModified).toBe("2026-01-01");
  });

  it("accepts custom dateModified", () => {
    const result = generateArticleSchema("Title", "Desc", "/img.jpg", SITE_URL, "blog/post", "2026-01-01", "2026-06-01");
    expect(result.dateModified).toBe("2026-06-01");
  });

  it("constructs correct URL from siteUrl and slug", () => {
    const result = generateArticleSchema("Title", "Desc", "/img.jpg", SITE_URL, "blog/post", "2026-01-01");
    expect(result.url).toBe(`${SITE_URL}/blog/post`);
  });
});

describe("generateTouristAttractionSchema", () => {
  it("includes GeoCoordinates", () => {
    const result = generateTouristAttractionSchema("Kuta Beach", "Beautiful beach", "/img.jpg", SITE_URL, "kuta-beach", "lombok");
    expect(result.geo["@type"]).toBe("GeoCoordinates");
    expect(result.address.addressLocality).toBe("lombok");
    expect(result.address.addressCountry).toBe("ID");
  });

  it("falls back to Lombok for region", () => {
    const result = generateTouristAttractionSchema("Place", "Desc", "/img.jpg", SITE_URL, "place");
    expect(result.address.addressLocality).toBe("Lombok");
  });
});

describe("generateFAQPageSchema", () => {
  it("formats FAQ items with Question/Answer", () => {
    const faqs = [
      { question: "Q1?", answer: "A1." },
      { question: "Q2?", answer: "A2." },
    ];
    const result = generateFAQPageSchema(faqs);
    expect(result.mainEntity).toHaveLength(2);
    expect(result.mainEntity[0]["@type"]).toBe("Question");
    expect(result.mainEntity[0].acceptedAnswer["@type"]).toBe("Answer");
    expect(result.mainEntity[0].acceptedAnswer.text).toBe("A1.");
  });
});

describe("generateHowToSchema", () => {
  it("maps steps with correct position", () => {
    const steps = [
      { name: "Step 1", description: "Do this" },
      { name: "Step 2", description: "Do that" },
    ];
    const result = generateHowToSchema("Guide Title", "Guide Desc", steps);
    expect(result["@type"]).toBe("HowTo");
    expect(result.step).toHaveLength(2);
    expect(result.step[0].position).toBe(1);
    expect(result.step[0].text).toBe("Do this");
    expect(result.step[1].position).toBe(2);
  });

  it("includes step image when provided", () => {
    const steps = [
      { name: "Step 1", description: "Do this", image: "/img.jpg" },
    ];
    const result = generateHowToSchema("Guide", "Desc", steps);
    expect(result.step[0].image).toBe("/img.jpg");
  });
});

describe("generateProductSchema", () => {
  it("uses real aggregate rating from reviews", () => {
    const result = generateProductSchema("Test", "Desc", "500000", "/img.jpg", `${SITE_URL}/test`);
    expect(result.aggregateRating.ratingValue).toBe("5");
    expect(result.aggregateRating.reviewCount).toBe("156");
  });

  it("uses ContactForPrice for non-numeric price", () => {
    const result = generateProductSchema("Test", "Desc", "Hubungi untuk harga", "/img.jpg", `${SITE_URL}/test`);
    expect(result.offers.price).toBe("https://schema.org/ContactForPrice");
    expect((result.offers as any).priceCurrency).toBeUndefined();
  });

  it("sets priceCurrency for numeric price", () => {
    const result = generateProductSchema("Test", "Desc", "500000", "/img.jpg", `${SITE_URL}/test`);
    expect((result.offers as any).priceCurrency).toBe("IDR");
  });
});
