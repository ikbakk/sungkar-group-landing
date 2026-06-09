# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` contains routed Astro pages such as `src/pages/index.astro` and `src/pages/home.astro`.
- `src/layouts/` holds shared page shells, for example `src/layouts/MainLayout.astro`.
- `src/components/` contains reusable UI, split by feature and layer:
  - `src/components/header/` for header/navigation pieces
  - `src/components/ui/` for shared primitives such as buttons and menus
- `src/assets/` stores imported assets like `src/assets/images/logo.webp`.
- `public/` is for static files served as-is, such as favicons.
- `Sungkar-Specs-001-004/` contains product/spec reference docs and should stay separate from runtime code.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the local Astro dev server on `localhost:4321`.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally for verification.
- `npm run astro -- <command>` runs Astro CLI utilities, such as `npm run astro -- --help`.
- Use `rg` for text search and `rg --files` for file discovery; do not use `grep` for searching files.

## Coding Style & Naming Conventions
- Use TypeScript, Astro components, and React components where appropriate.
- Follow the existing formatting style: 2-space indentation, double quotes in TS/TSX, and semicolons in Astro frontmatter.
- Prefer the `@/*` alias for imports from `src/`, for example `@/components/ui/button`.
- Name components with `PascalCase` files and exports, and keep route files lowercase in `src/pages/`.
- Tailwind utility classes are used heavily; keep class lists readable and grouped by layout, spacing, and state.

## Testing Guidelines
- No automated test runner is currently configured in `package.json`.
- Before opening a PR, at minimum run `npm run build` and `npm run preview` to catch type, import, and rendering issues.
- If tests are added later, place them near the feature or under a dedicated `tests/` or `src/__tests__/` directory and use descriptive names such as `header.spec.tsx`.

## Commit & Pull Request Guidelines
- The git history uses Conventional Commit style, for example `feat: add tailwindcss`.
- Keep commits focused and use an imperative subject line.
- PRs should include a short description of the change, verification steps, and screenshots for visible UI updates.
- Link any related issue or spec document when relevant, especially for work tied to `Sungkar-Specs-001-004/`.

## Configuration Notes
- This project expects Node.js `>=22.12.0`.
- Keep changes consistent with the shared design tokens in `src/styles/global.css` and avoid introducing ad hoc colors or font stacks.

# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` contains routed Astro pages such as `index.astro` and `home.astro`.
- `src/layouts/` holds shared shells like `MainLayout.astro`.
- `src/components/` contains reusable UI, grouped by feature:
  - `src/components/header/` for navigation and header pieces
  - `src/components/ui/` for shared primitives such as buttons and menus
- `src/assets/` stores imported assets like `src/assets/images/logo.webp`.
- `public/` is for static files served directly, such as favicons.
- `Sungkar-Specs-001-004/` contains reference specs and should remain separate from runtime code.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the Astro dev server on `localhost:4321`.
- `npm run build` creates the production build in `dist/`.
- `npm run preview` serves the production build locally for verification.
- `npm run astro -- <command>` runs Astro CLI utilities, such as `npm run astro -- --help`.
- Use `rg` for text search and `rg --files` for file discovery; do not use `grep` for searching files.

## Coding Style & Naming Conventions
- Use TypeScript, Astro, and React only where interactivity is needed.
- Follow the existing formatting style: 2-space indentation, double quotes in TS/TSX, and semicolons in frontmatter.
- Prefer the `@/*` alias for imports from `src/`, for example `@/components/ui/button`.
- Use `PascalCase` for components and keep route filenames lowercase in `src/pages/`.
- Tailwind utility classes are used heavily; keep class lists readable and grouped by layout, spacing, and state.

## Testing Guidelines
- No automated test runner is currently configured in `package.json`.
- Before opening a PR, run `npm run build` and `npm run preview` to catch type, import, and rendering issues.
- If tests are added later, place them near the feature or under `src/__tests__/` and use descriptive names such as `header.spec.tsx`.

## Commit & Pull Request Guidelines
- The git history uses Conventional Commit style, for example `feat: add tailwindcss`.
- Keep commits focused and use an imperative subject line.
- PRs should include a short summary, verification steps, and screenshots for visible UI changes.
- Link any related issue or spec document when relevant, especially for work tied to `Sungkar-Specs-001-004/`.

## Configuration Notes
- This project expects Node.js `>=22.12.0`.
- Keep changes consistent with shared design tokens in `src/styles/global.css` and avoid ad hoc colors or font stacks.
