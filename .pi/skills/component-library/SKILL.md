---
name: component-library
description: >
  Create and manage UI components for the Sungkar Group landing page (Astro + React).
  Trigger when the user asks to create a new UI primitive (button, card, input, etc.),
  create a new feature section component, modify an existing component, add a feature
  section for a page, refactor a component, or fix component patterns. Also trigger on
  "create a new card component", "add a section for the X page", "make a reusable X",
  or "this component is too large". Does NOT handle page routing (use page-routing-i18n),
  content data (use content-architecture), or Tailwind/styling changes (use styling-theme).
weight: 3
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

# Component Library Skill

Create and manage UI components following the project's conventions.

## Component Architecture

```
src/components/
├── ui/                  # Primitives (shadcn-style, one folder per primitive)
│   ├── button/
│   │   ├── index.ts     # Barrel export
│   │   ├── button.astro # Or .tsx for interactive
│   │   └── button-variants.ts  # CVA variants (optional)
│   ├── card/
│   ├── badge/
│   ├── avatar/
│   ├── input/
│   ├── textarea/
│   ├── select/
│   ├── native-select/
│   ├── icon/
│   ├── logo/
│   ├── marquee/
│   ├── rating/
│   ├── section/
│   ├── carousel/
│   ├── navigation-menu/
│   ├── separator/
│   ├── tooltip/
│   ├── breadcrumb.tsx
│   ├── accordion.tsx
│   └── drawer.tsx
├── blocks/              # Reusable section layouts
│   ├── features-1.astro
│   ├── services-5.astro
│   ├── services-6.astro
│   ├── reviews-5.astro
│   └── FooterBlock.astro
├── cards/               # Domain-specific cards
│   ├── PackageCard.astro
│   ├── DestinationCard.astro
│   ├── VehicleCard.astro
│   └── AccommodationCard.astro
├── header/              # Navigation components
│   ├── Header.astro
│   ├── NavigationDesktop.astro
│   └── NavigationMobile.tsx
├── landing/             # Homepage sections
│   ├── HeroSection.astro
│   ├── VideoSection.astro
│   ├── FeaturedSection.astro
│   ├── DestinationsSection.astro
│   └── TransportSection.astro
├── site/                # Shared shell pieces
│   ├── Footer.astro
│   ├── Faq.astro
│   └── PageHeader.astro
├── seo/                 # SEO components
│   ├── SEOMeta.astro
│   ├── OGImage.astro
│   └── StructuredData.astro
├── {feature}/           # Feature-specific sections
│   ├── StorySection.astro
│   ├── VisionMissionSection.astro
│   ├── ServicesSection.astro
│   ├── ...
└── about/
    ├── StorySection.astro
    ├── VisionMissionSection.astro
    ├── ServicesSection.astro
    ├── StrengthsSection.astro
    ├── ValuesSection.astro
    ├── CommitmentSection.astro
    └── CtaSection.astro
```

## Component File Conventions

### `.astro` vs `.tsx`

| Extension | When to Use | Class Syntax |
|---|---|---|
| `.astro` | Static/SSR content, no client interactivity | `class="..."` |
| `.tsx` | Client-interactive (React) | `className="..."` |

### Barrel Exports

Each component folder has an `index.ts` barrel:
```typescript
// src/components/ui/button/index.ts
export { buttonVariants, type ButtonVariantProps } from "./button-variants"
export { default as Button } from "./button.astro"
```

Components in feature directories may omit the barrel if single-file.

### Naming

- **PascalCase** files and exports: `Button.astro`, `PackageCard.astro`
- **kebab-case** for multi-word folder names under `ui/`: `navigation-menu/`
- **index.ts** for barrel exports (not PascalCase)

## Creating a New UI Primitive

### Step 1: Create the component directory

```
src/components/ui/{name}/
├── index.ts           # Barrel export
├── {name}.astro       # Component (or .tsx for interactive)
└── {name}-variants.ts # CVA variants (optional, if styling variants)
```

### Step 2: Write the component

**Astro version (static):**
```astro
---
import { cn } from "@/lib/utils";

interface Props {
  class?: string;
  // other props
}

const { class: className, ...props } = Astro.props;
---

<div class={cn("base-styles", className)} {...props}>
  <slot />
</div>
```

**React version (interactive):**
```tsx
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode;
}

export function ComponentName({ className, children, ...props }: Props) {
  return (
    <div className={cn("base-styles", className)} {...props}>
      {children}
    </div>
  );
}
```

### Step 3: Create the barrel

```typescript
export { default as ComponentName } from "./{name}.astro";
// OR for React:
export { ComponentName } from "./{name}";
```

### Step 4: Use the `@/` alias

All imports use the `@/` alias:
```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

## Creating a New Feature Section

### Step 1: Create the component

`src/components/{feature}/{Name}Section.astro`:
```astro
---
import Section from "@/components/ui/section/Section.astro";
import type { SomeContent } from "@/lib/content/shared/types";

interface Props {
  data: SomeContent;
}

const { data } = Astro.props;
---

<Section>
  <h2 class="font-heading text-3xl">{data.title}</h2>
  <!-- component markup -->
</Section>
```

**Key rule:** Feature components receive content as props — never import content directly. This enables i18n via `loadContent()` at the page level.

### Step 2: Wire into the page

```astro
---
import { loadContent } from "@/lib/i18n/loader";
import NewSection from "@/components/{feature}/NewSection.astro";

const locale = "id";
const module = await loadContent(locale, "{feature}");
---

<MainLayout ...>
  <NewSection data={module.sectionContent} />
</MainLayout>
```

## Component Patterns

### Card Components (src/components/cards/)

Cards follow a consistent pattern:
- Image with overlay badge (region)
- Title
- Key info (duration, price, etc.)
- CTA button/link
- Wrapped in `card-interactive` class + optional `card-hover-border`

```astro
---
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
---

<Card class="card-interactive card-hover-border">
  <Badge>{item.region}</Badge>
  <h3>{item.title}</h3>
  <!-- ... -->
  <Button href={`/${item.slug}`}>Lihat Detail</Button>
</Card>
```

### Block Components (src/components/blocks/)

Blocks are reusable sections parameterized by content props:
```astro
---
interface Props {
  title: string;
  items: Array<{ ... }>;
}
---
```

Pages compose blocks and feature components, never the reverse.

### Section Component

The `<Section>` UI primitive provides consistent padding, max-width, and spacing:
```astro
---
import Section from "@/components/ui/section";
---
<Section background="bg-surface-soft" padding="py-16 lg:py-24">
  <!-- centered content with container -->
</Section>
```

## UI Primitive Patterns

Each primitive should:
1. Use `cn()` from `@/lib/utils` for class merging
2. Support `class`/`className` prop for customization
3. Forward DOM attributes where appropriate
4. Use Tailwind classes (not inline styles except for dynamic values)
5. Follow shadcn/ui conventions where applicable

## Importing Icons

Use Hugeicons via the `@hugeicons/react` package:
```tsx
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";

<HugeiconsIcon icon={Tick02Icon} />
```

## Removing a Component

1. Delete the component file(s)
2. Remove/update the barrel export
3. Remove all imports referencing it
4. Run `npm run check` to catch leftover references

## Validation

```bash
npm test       # All tests pass
npm run check  # TypeScript — 0 new errors
```
