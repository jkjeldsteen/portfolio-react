---
name: Jakob Kjeldsteen Portfolio
description: A dark, project-led portfolio for software engineering and game development.
colors:
  mint: "#31EBAD"
  canvas: "#121212"
  deepest: "#0A0A0A"
  surface: "#1F1F1F"
  text: "#FFFFFF"
  text-muted: "#B0B0B0"
  text-subtle: "#808080"
  border: "#2C2C2C"
  ui-primary: "hsl(210 40% 98%)"
  ui-primary-ink: "hsl(222.2 47.4% 11.2%)"
  ui-card: "hsl(222.2 84% 4.9%)"
  ui-border: "hsl(217.2 32.6% 17.5%)"
  ui-ring: "hsl(212.7 26.8% 83.9%)"
typography:
  display: { fontFamily: "Georama, sans-serif", fontSize: "2.5em" }
  headline: { fontFamily: "Georama, sans-serif", fontSize: "2em" }
  title: { fontFamily: "Georama, sans-serif", fontSize: "1.5em" }
  body: { fontFamily: "Georama, sans-serif", fontSize: "1em", lineHeight: 1.5 }
  small: { fontSize: "0.875em" }
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  ui-button: "6px"
  ui-card: "8px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.ui-primary}"
    textColor: "{colors.ui-primary-ink}"
    rounded: "{rounded.ui-button}"
    height: "40px"
    padding: "8px 16px"
  button-outline:
    backgroundColor: "transparent"
    rounded: "{rounded.ui-button}"
    height: "40px"
    padding: "8px 16px"
  card:
    backgroundColor: "{colors.ui-card}"
    textColor: "{colors.ui-primary}"
    rounded: "{rounded.ui-card}"
  badge:
    backgroundColor: "rgb(49 235 173 / 15%)"
    textColor: "{colors.mint}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
  contact-field:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
---

# Design System — Jakob Kjeldsteen Portfolio

## Overview

The portfolio pairs charcoal surfaces and mint accents with a Georama type stack. Keep the interface quiet enough for simulation diagrams, game screenshots, and development notes to carry the visual interest. Use real project media where it shows the work clearly. Keep captions factual and place related text close to the image.

The tokens above record the current implementation. The application guidance below establishes defaults for future UI work, including fixes identified in the portfolio critique.

## Colors

Use mint for emphasis, the active location, and the portfolio's technology badges. Use the charcoal canvas and raised surface to define page regions. Use white for primary text, muted gray for supporting detail, and subtle gray only for low-emphasis text that still passes contrast on its actual surface.

`app/globals.css` defines both the charcoal portfolio palette and the dark slate shadcn/ui variables. Tailwind maps the latter through `tailwind.config.js`. Keep the palettes in their existing roles when refining a page. Reuse semantic utilities such as `bg-card`, `text-muted-foreground`, and `ring-ring` in shared primitives. Define new shared color roles centrally. The default shadcn/ui primary action is light, while mint identifies the portfolio.

## Typography

Use the configured Georama stack for page text. Give each route a single descriptive page heading. Use section headings for groups of work and smaller headings for individual projects. Keep devlog paragraphs to a readable measure and give image captions their own line. Use small text for metadata and tags.

## Layout

Build page layouts with Tailwind's mobile-first utilities and the shared spacing scale. The existing Home sections use a 1,200 px content maximum, and Contact uses a 600 px form maximum. Treat these as layout constraints for their respective content, including gutters. Tailwind's generic container is configured separately.

Use one column at narrow widths and add columns where the content fits. Align project media, headings, and action rows to a common grid. Keep sidebar width and main-content offset coordinated. Allow cards and grid tracks to shrink, and wrap actions and badges when space runs out. Check around the existing 858 px navigation switch, around 1,250 px where clipping was observed, and at a narrow phone width.

## Elevation & Depth

Use surface color and a subtle border to separate cards and form groups. The global stylesheet provides shallow shadows for separation and deeper shadows for raised panels. Reserve the mint glow for occasional emphasis or focus. Keep focus visible without relying on glow alone.

## Shapes

Use compact corners for controls and medium corners for panels and media. Keep pills for short metadata such as technologies. Preserve the smaller radii in shadcn/ui primitives. Crop media only where essential project detail remains legible.

## Components

| Component | Application |
| --- | --- |
| Button | Reuse `src/components/ui/button.tsx`. Use the default variant for the main action in a group and outline or link variants for supporting actions. Use `asChild` for navigation and downloads so each action renders as a single semantic link. |
| Card | Reuse `src/components/ui/card.tsx` when a project needs a contained surface. Compose its header, title, description, and footer with the project image and one clearly labeled destination. |
| Badge | Reuse `src/components/ui/badge.tsx` for compact technology labels. Present descriptive badges as text and allow groups to wrap. |
| Navigation | Give the active route a visible cue and expose its current state. Use a named button for mobile disclosure. Keep hidden destinations out of the tab order and label icon-only links. |
| Contact fields | The current form uses custom styled fields. When moving to shadcn/ui field primitives, pair each field with a visible label, associate errors with the affected input, and announce sending, success, and failure states. Preserve entries when delivery fails. |

## Do's and Don'ts

- Use Tailwind utilities for layout and responsive behavior. Apply recurring component changes in shared variants or semantic CSS variables.
- Put project imagery and precise action labels ahead of decorative effects. Name destinations directly, such as “Read the devlogs” or “Download résumé.”
- Check keyboard focus, zoom, reduced motion, text contrast, and horizontal overflow when changing the layout or components.
- Avoid nesting interactive elements, giving every action equal visual weight, or using hover as the sole way to reveal essential information.
