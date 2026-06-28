# DX Phase 2 Decision

## Follow-up fix list from Phase 1 review

1. Restore clear `validate` semantics for blog/guide MDX validation.
2. Add explicit structured-content source validation.
3. Make missing locale blocks fail loudly instead of being silently skipped.
4. Reduce generator responsibility further by extracting package normalization logic.
5. Run a direct-JSON spike for tour packages before changing the runtime source model.

## Decisions made

### 1. Validation command semantics

- `npm run validate` again means **blog/guide MDX validation**.
- `npm run validate:data` remains as a compatibility alias.
- `npm run validate:structured` validates JSON content sources.
- `npm run validate:build` validates structured content, rebuilds normalized content, and runs Astro check.

### 2. Missing locale policy

Policy: **fail the build** for missing structured-content locale blocks.

Why:

- silent omission hides content gaps
- all current structured content already has full locale coverage
- failing early is safer than shipping partial localized route trees

### 3. Generator direction

Decision remains: **keep generated normalized runtime modules for now**.

Reason:

- normalization complexity still exists with direct JSON
- generation keeps runtime loaders simpler
- Phase 1 already removed the biggest DX issue: duplicated routes

### 4. Generator scope

The package generator path is now thinner:

- localization helpers live in `scripts/lib/package-localization.mjs`
- package normalization lives in `scripts/lib/tour-package-normalizer.mjs`
- generator entrypoints focus more on orchestration
