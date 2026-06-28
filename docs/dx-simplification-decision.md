# DX Simplification Decision

## Content pipeline direction

Decision: **keep generation for now, but reduce its scope**.

## Why

- Phase 1 route extraction is already a large behavioral refactor.
- Keeping generated content in place makes regressions easier to isolate.
- The current build and page code already depend on generated normalized package data.
- Direct JSON imports remain a possible later step, but only after page parity is stable and validated.

## Immediate implications

- `scripts/generate-structured-data.mjs` stays in the build path.
- Generated outputs in `src/generated/content/*` remain the runtime content source.
- Translation maps and normalization helpers should move out of the generator file into reusable script modules.
- Validation should happen at the generated-content boundary so data failures are explicit.

## Deferred option

After route parity is confirmed, re-evaluate whether direct JSON + Zod would reduce complexity enough to justify replacing generation entirely.

## Blog / travel-guide route reassessment

Reassessed current detail routes:

- `src/pages/blog/[slug].astro`
- `src/pages/[locale]/travel-guides/[slug].astro`

Decision: **do not extract shared page components yet**.

Reason: they are not a simple duplicated route pair like package and destination pages. They share some page-shell ideas, but their content modules, schema types, related-content sections, and article behaviors are different enough that extracting them now would add abstraction before it clearly reduces pain.
