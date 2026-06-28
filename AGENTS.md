# Repository Guidelines

## AI Agent Navigation

- **AGENTS.md** — This file. Build commands, style conventions, commit guidelines.
- Work on the `dev` branch for all code changes. Keep `dev` synced with `main` before starting new work.

## Build, Test, and Development Commands

- `npm install` installs dependencies.
- `npm run dev` starts the local Astro dev server on `localhost:4321`.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally for verification.
- `npm run astro -- <command>` runs Astro CLI utilities, such as `npm run astro -- --help`.
- `npm test` runs vitest (config: `vitest.config.ts`; tests in `tests/`).
- `npm run format` runs Prettier auto-format; `npm run format:check` checks formatting in CI.
- `npm run images` regenerates `src/assets/images/index.ts` after adding images.

## Coding Style & Naming Conventions

- Use TypeScript, Astro components, and React components where appropriate.
- Follow the existing formatting style: 2-space indentation, double quotes in TS/TSX, and semicolons in Astro frontmatter or run npm run format.
- Prefer the `@/*` alias for imports from `src/`, for example `@/components/ui/button`.
- Name components with `PascalCase` files and exports, and keep route files lowercase in `src/pages/`.
- Tailwind utility classes are used heavily; keep class lists readable and grouped by layout, spacing, and state.
- Prefer Clean architecture, presentation layer and data layer style.
- Use existing components as much as possible, if not existing, ask the user or propoes new components, Even text uses typography component.
- Always run `npm run format` before commiting.

## Testing Guidelines

- Use `npm test` to run vitest (config: `vitest.config.ts`; test files in `tests/`).
- Use `npm run check` for Astro type checking.
- Pre-commit hook (husky) runs: `npm test && npm run check && npm run images && npm run validate:images`. Run `npm run build` and `npm run format:check` before pushing.
- Tests use `@/` path alias via vitest config — same as app code.
- Test files in `tests/` — use descriptive names like `schemas.test.ts`, `data.test.ts`.

## Commit & Pull Request Guidelines

- The git history uses Conventional Commit style, for example `feat: add tailwindcss`.
- Keep commits focused and use an imperative subject line.
- PRs should include a short description of the change, verification steps, and screenshots for visible UI updates.
- Link any related issue or spec document when relevant, especially for work tied to `Sungkar-Specs-001-004/`.

## Configuration Notes

- This project expects Node.js `>=22.12.0`.
- Keep changes consistent with the shared design tokens in `src/styles/global.css` and avoid introducing ad hoc colors or font stacks.

## Content Architecture (Post-Migration)

All structured content now lives in MDX content collections under `src/content/{type}/{slug}/{locale}.mdx`. Loaded via async bridge functions. Old sync TypeScript data files have been deleted.

| Content Type   | Content Collection | Bridge Function                                                                 | JSON Source                      | Generator                               |
| -------------- | ------------------ | ------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------- |
| Tour Packages  | `tourPackages`     | `getPackages(locale)` from `src/lib/content/tourPackages/collection.ts`         | `scripts/data/packages/*/`       | `node scripts/generate-tour-mdx.mjs`    |
| Accommodations | `accommodations`   | `getAccommodations(locale)` from `src/lib/content/accommodations/collection.ts` | `scripts/data/accommodations/*/` | `node scripts/generate-content-mdx.mjs` |
| Car Rental     | `carRental`        | `getVehicles(locale)` from `src/lib/content/car-rental/collection.ts`           | `scripts/data/car-rental/*/`     | `node scripts/generate-content-mdx.mjs` |

## Data Pipeline (⚠️ do not edit generated files)

```
scripts/data/packages/*/main.json       ← EDIT HERE (source of truth)
scripts/data/packages/*/locales.json    ← EDIT HERE (translations)
         │
         ▼
scripts/generate-tour-mdx.mjs           ← generator script
         │
         ▼
src/content/tourPackages/**/*.mdx       ← GENERATED — never edit manually
         │
         ▼
src/components/packages/*.astro         ← UI reads from collection.ts
```

- **MDX files under `src/content/tourPackages/` are generated.** To change content, edit the JSON source files in `data/packages/*/main.json` or `data/packages/*/locales.json`, then run `node scripts/generate-tour-mdx.mjs`.
- The same pattern applies to accommodations (`data/accommodations/`) and car rental (`data/car-rental/`), using `node scripts/generate-content-mdx.mjs`.

**Template generator**: `npm run generate:template` runs `scripts/generate-data-template.mjs` — an interactive CLI that scaffolds correct `main.json` + `locales.json` templates with validated enums from the source-of-truth constants files.

Navigation uses `createNavigation(packages)` factory functions in each locale's `navigationData.ts` called from `Header.astro`. Landing page computes `featuredTours` by merging locale base with `getPackages()` results in the page files. Tests validate MDX frontmatter directly via `yaml` parsing in vitest (no Astro runtime needed).

### Adding content (with template generator)

```bash
npm run generate:template
```

Select the content type, answer the prompts, and a correctly-structured template is created inside `data/`. Then edit the generated files and run the appropriate MDX generator command.

**Without template generator:**

1. **Tour packages**: Create `data/packages/{slug}/main.json` (shared fields) and `data/packages/{slug}/locales.json` (locale blocks), then run `node scripts/generate-tour-mdx.mjs`.
2. **Accommodations / Car rental / Destinations**: Create `data/{type}/{slug}/main.json` and `data/{type}/{slug}/locales.json`, then run `node scripts/generate-content-mdx.mjs`.
