# Repository Guidelines

## AI Agent Navigation
- **docs/CODEBASE.md** — Complete codebase map: directory layout, route→component mapping, data architecture, file locations by task. Read this first instead of grep/find.
- **AGENTS.md** — This file. Build commands, style conventions, commit guidelines.

## Keeping Docs in Sync
When you add, rename, or remove any of the following, update **docs/CODEBASE.md** before finishing the session:
- New pages or routes (`src/pages/`)
- New components or component directories (`src/components/`)
- New content data files (`src/lib/content/`)
- New UI primitives (`src/components/ui/`)
- New image assets (`src/assets/images/`)
- New dependencies in `package.json`
- Changes to `astro.config.mjs`, `tsconfig.json`, or `src/styles/global.css`

Keep the route → component table, directory layout, and "Key Files by Task" table accurate so the next session starts with zero discovery overhead.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the local Astro dev server on `localhost:4321`.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally for verification.
- `npm run astro -- <command>` runs Astro CLI utilities, such as `npm run astro -- --help`.
- `npm test` runs vitest (config: `vitest.config.ts`; tests in `tests/`).
- Use `rg` for text search and `rg --files` for file discovery; do not use `grep` for searching files.

## Coding Style & Naming Conventions
- Use TypeScript, Astro components, and React components where appropriate.
- Follow the existing formatting style: 2-space indentation, double quotes in TS/TSX, and semicolons in Astro frontmatter.
- Prefer the `@/*` alias for imports from `src/`, for example `@/components/ui/button`.
- Name components with `PascalCase` files and exports, and keep route files lowercase in `src/pages/`.
- Tailwind utility classes are used heavily; keep class lists readable and grouped by layout, spacing, and state.

## Testing Guidelines
- Use `npm test` to run vitest (config: `vitest.config.ts`; test files in `tests/`).
- Use `npm run check` for Astro type checking.
- Before committing: `npm test && npm run build` — pre-commit hook runs `npm test` automatically (husky).
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

## Migration: Remove Old Sync TypeScript Tour Package Data

Tour packages now live in MDX content collections (`src/content/tourPackages/`) loaded via `getPackages(locale)` from `src/lib/content/tourPackages/collection.ts`. Pages have been migrated. Three consumers still use the old sync TypeScript data — migrate them to `getPackages()`:

1. **Navigation mega menu** — `src/lib/i18n/{en,ar,ms,zh}/navigationData.ts` imports `packages` from `@/lib/content/tourPackages/index`. Replace with async `getPackages(locale)` to build the menu links from MDX data.
2. **Landing page featured packages** — `src/lib/content/landing.ts` and `src/lib/i18n/{en,ar,ms,zh}/landing.ts` import `packages`. These are used by `src/components/landing/Featured.astro` and `src/pages/index.astro`. Migrate to await `getPackages()`.
3. **Tests** — `tests/data/tourPackages.test.ts` and `tests/data.test.ts` validate the old sync data. Rewrite tests to validate the MDX content collection entries instead.

After all three are done, delete these obsolete files:
- `src/lib/content/tourPackages/` (except `collection.ts`, `images.ts`, `types.ts`)
- `src/lib/content/tour-packages/`
- `src/lib/i18n/{en,ar,ms,zh}/tourPackages/`
- `src/lib/i18n/{en,ar,ms,zh}/tour-packages/`
