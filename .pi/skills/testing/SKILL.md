---
name: testing
description: >
  Write and maintain tests for the Sungkar Group landing page using Vitest. Trigger when
  the user asks to add tests, fix failing tests, add schema validation tests, write new
  test files, debug test failures, or improve test coverage. Also trigger on "add a test
  for X", "tests are failing", "fix the test", "write schema validation", or "run tests".
  Does NOT handle E2E testing (Playwright is separate), component testing, or deployment
  verification.
weight: 11
compatibility:
  - required_tools:
      - read
      - edit
      - bash
      - write
    required_commands:
      - npm test
      - npm run check
---

# Testing Skill

Write and maintain Vitest tests for the Sungkar Group landing page.

## Test Configuration (`vitest.config.ts`)

```typescript
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "node",
    include: ["src/**/*.test.ts", "tests/**/*.test.ts"],
  },
});
```

Key config:
- `@/` alias matches the app's import paths
- `globals: true` — `describe`, `it`, `expect` available without import (though imports in existing tests are fine)
- `node` environment — DOM not required (data validation tests)
- Test files live in `tests/` OR alongside source files (`src/**/*.test.ts`)

## Running Tests

```bash
npm test             # Runs vitest run (single run, not watch)
npm test -- --watch  # Watch mode for development
npm test -- --ui     # Vitest UI mode
npm test -- tests/schemas.test.ts  # Single file
```

## Test File Structure

Current test files:
```
tests/
├── data.test.ts      # Zod schema validation for all data types
└── schemas.test.ts   # JSON-LD schema output validation
```

## Adding Schema Validation Tests

When adding a new content type with a Zod schema, add tests in `tests/data.test.ts`:

```typescript
import { describe, it, expect } from "vitest";
import { NewItemSchema } from "@/lib/content/shared/types";
import { items } from "@/lib/content/{feature}";

describe("NewItem data validation", () => {
  items.forEach((item) => {
    it(`${item.name} has valid data`, () => {
      const result = NewItemSchema.safeParse(item);
      if (!result.success) {
        const issues = result.error.issues.map(
          (i) => `  ${i.path.join(".")}: ${i.message}`
        );
        expect.fail(`Invalid item "${item.name}":\n${issues.join("\n")}`);
      }
    });
  });
});
```

### When to add schema tests

- Every time a new content type is added to `types.ts`
- Every time a Zod schema is modified
- When new data entries are added to existing collections

### Assertion patterns

```typescript
// Check every item has required fields
it("all items have slugs", () => {
  items.forEach((item) => {
    expect(item.slug).toBeTruthy();
    expect(item.slug).toMatch(/^[a-z0-9-]+$/);
  });
});

// Check field constraints
it("summaries are under 160 characters", () => {
  items.forEach((item) => {
    expect(item.summary.length).toBeLessThanOrEqual(160);
  });
});

// Check region keys are valid
it("all items have valid regions", () => {
  items.forEach((item) => {
    expect(["lombok", "sumbawa", "labuan-bajo"]).toContain(item.region);
  });
});

// Check image references
it("all images exist", () => {
  items.forEach((item) => {
    expect(item.image).toBeDefined();
  });
});
```

## Adding JSON-LD Schema Tests

In `tests/schemas.test.ts`:

```typescript
import { describe, it, expect } from "vitest";
import { generateProductSchema } from "@/lib/schemas";

describe("Product schema", () => {
  it("generates valid schema with price", () => {
    const schema = generateProductSchema(
      "Test Package", "Description", "500000", "image.jpg", "https://example.com"
    );
    expect(schema["@type"]).toBe("Product");
    expect(schema.offers.price).toBe("500000");
    expect(schema.offers.priceCurrency).toBe("IDR");
  });

  it("uses ContactForPrice when no price set", () => {
    const schema = generateProductSchema(
      "Test Package", "Description", "", "image.jpg", "https://example.com"
    );
    expect(schema.offers.price).toBe("https://schema.org/ContactForPrice");
  });
});
```

## Adding Utility Tests

For pure functions in `src/lib/`:

```typescript
// src/lib/images.test.ts (colocated)
import { describe, it, expect } from "vitest";
import { getImageSrc, isRemoteImage } from "./images";

describe("getImageSrc", () => {
  it("returns string directly for remote images", () => {
    expect(getImageSrc("https://example.com/img.jpg")).toBe("https://example.com/img.jpg");
  });

  it("returns src property for local images", () => {
    const local = { src: "/_astro/abc.webp", width: 800, height: 600 };
    expect(getImageSrc(local)).toBe("/_astro/abc.webp");
  });
});
```

## Debugging Failing Tests

1. Run the specific test file: `npm test -- tests/feature.test.ts`
2. Use `--reporter verbose` for detailed output: `npm test -- --reporter verbose`
3. Use `console.log()` or `process.stdout.write()` for debugging — Vitest captures stdout
4. Check the error message and stack trace — Zod errors include the full path to the failing field

### Common Failure Patterns

| Symptom | Likely Cause |
|---|---|
| Zod validation error on `slug` | Slug is empty or missing (translated title produced empty slug) |
| Zod validation error on `images` | Image source is undefined or wrong type |
| Zod validation error on `region` | Region not in allowed enum |
| TypeScript error in test | Test imports don't match `@/` alias |
| `npm run check` errors | Type mismatch between data and schema |

## Pre-commit Hook

The pre-commit hook (husky + lint-staged) runs `npm test` automatically. If tests fail, the commit is blocked.

## Best Practices

1. **Test data, not implementation** — Schema validation tests verify data integrity
2. **Descriptive test names** — Include the entity name: `"Lombok 3D2N has valid data"`
3. **One assertion per data item** — Each `it()` block validates one item
4. **Use `.safeParse()`** — Gives detailed error paths, unlike `.parse()` which throws
5. **Keep tests fast** — Data validation tests should complete in < 1s
6. **Colocate when appropriate** — Utility function tests can live alongside the source
7. **Run before commit** — `npm test && npm run check`

## Adding a New Test File

1. Create `tests/{name}.test.ts`
2. Import from `@/` alias
3. Use `describe`/`it` blocks with clear names
4. Run with `npm test -- tests/{name}.test.ts`

## Validation

```bash
npm test          # All tests pass
npm run check     # TypeScript — 0 new errors
```
