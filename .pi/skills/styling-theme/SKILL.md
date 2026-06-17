---
name: styling-theme
description: >
  Manage the Tailwind v4 theme, CSS design tokens, and visual design system for the Sungkar
  Group landing page. Trigger when the user asks to change colors, fonts, spacing, border
  radius, card styles, Tailwind configuration, CSS utilities, or design tokens. Also trigger
  on "change the brand color", "update fonts", "add a new utility class", "modify card shadows",
  "change the theme", "adjust spacing", or "fix the CSS". Does NOT handle component logic
  (use component-library), page layout (use page-routing-i18n), or images (use image-assets).
weight: 9
compatibility:
  - required_tools:
      - read
      - edit
      - bash
      - write
    required_commands:
      - npm run dev
      - npm run build
---

# Styling & Theme Skill

Manage the Tailwind v4 theme, CSS design tokens, and visual design system.

## Architecture

Styling is organized across two layers:

```
src/styles/
├── global.css     # Tailwind v4 directives, @theme tokens, @layer base + components
└── sections.css   # Section-specific overrides (loaded via @import in global.css)
```

### Layer 1: `src/styles/global.css`

- `@import "tailwindcss"` — Tailwind v4
- `@import "tw-animate-css"` — Animation utilities
- `@import "shadcn/tailwind.css"` — shadcn/ui base
- `@import "@fontsource-variable/inter"` — Inter Variable font
- `@import "@fontsource/playfair-display"` — Playfair Display font
- `@import "@fontsource-variable/cairo"` — Cairo Variable font (Arabic)
- `@import "./sections.css"` — Section-specific styles
- `@theme inline { ... }` — Design tokens
- `@layer base { ... }` — Base element styles
- `@layer components { ... }` — Card utility classes
- `@custom-variant dark (&:is(.dark *))` — Dark mode variant

### Layer 2: `src/styles/sections.css`

Section-specific overrides that don't belong in tokens or base styles.

## Design Tokens (`@theme inline`)

### Brand Colors

Defined as a blue-teal palette in `--color-brand-*`:

| Token | Hex | Usage |
|---|---|---|
| `brand-50` | `#f4fbfe` | Lightest tint, backgrounds |
| `brand-100` | `#dff4fb` | Light accent |
| `brand-200` | `#bde7f6` | Light accent |
| `brand-300` | `#8fd4ec` | Border hover |
| `brand-400` | `#63bddf` | Mid-tone |
| `brand-500` | `#4298ca` | Primary buttons, links |
| `brand-600` | `#337fb0` | Active/selected |
| `brand-700` | `#2b6890` | Button default, dark accents |
| `brand-800` | `#285575` | Darker |
| `brand-900` | `#244962` | Darkest |

### Surface & Text

| Token | Value | Usage |
|---|---|---|
| `surface` | `#ffffff` | Card/component background |
| `surface-soft` | `#f8fafc` | Section background |
| `text` | `#111827` | Body text |
| `text-muted` | `#6b7280` | Secondary text |
| `whatsapp` | `#25d366` | WhatsApp CTA green |

### Standard shadcn CSS Variables

The `:root` block defines shadcn CSS variables: `--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--accent`, `--border`, `--ring`, `--radius`, etc. The `@theme inline` block maps these to Tailwind utility classes (`bg-background`, `text-foreground`, etc.).

### Border Radius

| Token | Value |
|---|---|
| `radius-sm` | `0.45rem` |
| `radius-md` | `0.6rem` |
| `radius-lg` | `0.75rem` (base) |
| `radius-xl` | `1.05rem` |
| `radius-2xl` | `1.35rem` |
| `radius-3xl` | `1.65rem` |
| `radius-4xl` | `1.95rem` |

### Fonts

| Token | Font | Usage |
|---|---|---|
| `--font-heading` | `"Playfair Display", serif` | All headings (h1-h6) |
| `--font-sans` | `"Inter Variable", sans-serif` | Body text |
| Arabic override | `"Cairo Variable", sans-serif` | Applied when `[dir="rtl"]` |

## Modifying Design Tokens

### Changing a brand color

1. Edit the `--color-brand-*` value in `@theme inline`
2. Also update the corresponding `--brand-*` CSS variable in `:root` if present
3. Verify contrast with text/background colors
4. Check all components that use that color

### Adding a new color token

1. Add to `@theme inline`:
   ```css
   --color-new-token: #hex;
   ```
2. Use as `bg-new-token`, `text-new-token`, `border-new-token`, etc.
3. If it needs a CSS variable, add to `:root` first, then reference in `@theme inline`

### Changing fonts

1. Install the font package: `npm install @fontsource-variable/{name}`
2. Import in `global.css`: `@import "@fontsource-variable/{name}";`
3. Update the `--font-*` token in `@theme inline`
4. Update `html` and heading styles in `@layer base`
5. For Arabic: update the `[dir="rtl"]` block

## Card Utility Classes (`@layer components`)

These are the standardized card system:

| Class | Effect |
|---|---|
| `.card-base` | `rounded-lg border border-border bg-card transition-all duration-300 ease-out` |
| `.card-hover` | `hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(17,24,39,0.1)]` |
| `.card-interactive` | Combines `card-base` + `card-hover` |
| `.card-hover-border` | `hover:border-brand-300` |
| `.card-shadow-base` | `ring-1 ring-foreground/10` |

**Usage:** Apply multiple classes on the same element:
```html
<div class="card-base card-hover-border">...</div>
<div class="card-interactive card-hover-border">...</div>
```

### Adding a new card utility
Add to `@layer components` in `global.css`:
```css
.card-new-effect {
  @apply /* tailwind classes */;
}
```

## Base Element Styles (`@layer base`)

Current rules:
- `* { @apply border-border outline-ring/50; }` — Universal border/outline
- `body { @apply bg-background text-foreground; font-family: var(--font-sans); }`
- `h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }`
- `button:not(:disabled), [role="button"]:not(:disabled) { cursor: pointer; }`
- `html { @apply font-sans; scroll-behavior: smooth; }`
- `[dir="rtl"] { --font-sans: "Cairo Variable", sans-serif; --font-heading: "Cairo Variable", sans-serif; }`

## RTL Support

Arabic locale uses `dir="rtl"` on `<html>`:
- Font switches to Cairo Variable
- Tailwind handles layout flipping via `dir="rtl"`
- Test all responsive layouts in RTL mode

## Dark Mode

Dark mode variant is defined but currently unused (the site is light-mode only):
```css
@custom-variant dark (&:is(.dark *));
```
To enable dark mode:
1. Add `class="dark"` to `<html>` or use JS to toggle
2. Add dark-mode overrides in `@layer base`
3. Add `dark:` variants to components

## Responsive Breakpoints

Tailwind v4 default breakpoints apply:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Validation

```bash
npm run dev       # Check in browser
npm run build     # Production build succeeds
```
