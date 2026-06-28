# 03 - Design System

This document owns Phase 2 design system work.

`README.md` remains the source of truth. If this file conflicts with `README.md`, follow `README.md` and update this file.

## Phase 2 Objective

Create a premium, restrained, modern visual foundation.

The design system should move the site away from neon cyber styling and toward a professional cybersecurity portfolio.

## Design System Direction

Use:

- Light-first design
- Muted enterprise palette
- Strong text contrast
- Clean typography
- Generous whitespace
- Subtle borders
- Soft shadows
- Minimal glow
- Consistent spacing
- Accessible color contrast
- Restrained dark sections

Avoid:

- Neon teal glow
- Bright cyan borders
- Cyber grid backgrounds
- Radial glow effects
- Overly saturated gradients
- Heavy dark containers
- Terminal-inspired decoration
- Dashboard-heavy styling

## Implemented Palette Direction

The Phase 2 implementation keeps existing semantic color names so later phases can move faster, but remaps them to a calmer light-first system.

Palette refinement: after reviewing the cream/black trial, the active palette was adjusted to the requested blue shades, white, and red-violet direction. This palette should feel polished, organized, professional, and lightly dynamic. Use pale blue as page atmosphere rather than a default component fill, white and near-white as the clean content canvas, deep navy as the confident typography/CTA anchor, royal blue as the technical proof color, and eggplant/red-violet as the highest-emphasis evidence accent.

```css
--background: #effafd;
--surface: #ffffff;
--surface-elevated: #f6fbfe;
--text-primary: #080b3f;
--text-secondary: #33415f;
--border: #d8e8f5;
--border-strong: #4a8bdf;
--accent: #243b8f;
--accent-secondary: #4a8bdf;
--accent-high: #a0006d;
```

Surface usage rule: pale blue should mostly appear in the page background, subtle atmosphere, and occasional emphasis. Repeated panels, rows, proof pills, evidence containers, and card interiors should default to white or near-white so the palette stays elegant and does not wash out the content.

Hero credential proof pills should use flat white surfaces, a slightly stronger blue border, and a tiny soft shadow so they remain readable against the pale blue page atmosphere.

Navbar surfaces should avoid flat white-on-white stacking. Use a subtle pale-blue elevated header surface, a white translucent nav group with a visible blue-tinted border, and a soft active-link fill so the navigation remains readable on desktop and mobile.

Homepage case-study CTAs should use a mid-weight featured button treatment: light royal-blue fill, blue border, dark evidence text, and a restrained shadow. Reserve the solid deep-blue primary button for stronger dedicated-page actions such as `/projects` expanded case-study cards.

Semantic evidence colors use a restrained color-wheel strategy so the blue/white base stays professional while security data remains readable:

- Critical uses red-violet/eggplant for the strongest alert color.
- High and medium use adjacent violet-blue and royal blue shades to stay within the system.
- Detection/remediation use deeper blue and teal-blue values for technical investigation and corrective action.
- These colors should appear in charts, metric bars, small status pills, and project preview evidence only. They should not become broad page backgrounds, glows, or decorative accents.

- Critical: `#a0006d`
- High: `#6d4fb0`
- Medium: `#4a8bdf`
- Detection: `#243b8f`
- Remediation: `#1e6f9f`
- Evidence/accent: `#243b8f`

## Typography Direction

The typography is now a stronger visual feature:

- Page, section, panel, and card headings use dark ink text instead of white-on-dark styling.
- Eyebrow labels are still restrained and uppercase, but no longer default to monospace.
- Body, lede, compact, and supporting copy use a darker local slate scale for readable light-theme contrast.
- Monospace remains available for real code, query, command, and evidence snippets.

## Component Direction

### Buttons

Implemented:

- Primary CTA uses a solid muted evidence color with no neon gradient.
- Secondary CTA uses white/light surfaces with subtle borders and soft shadow.
- Featured CTA uses a light royal-blue fill for homepage case-study actions that need more presence than secondary buttons without becoming a solid primary block.
- Hover and focus states are clear but restrained.
- Button hover no longer uses glow or lift effects.

### Cards

Implemented:

- Shared cards now use white/light surfaces, subtle borders, 6px radius, and a soft enterprise shadow.
- Phase 11 removed the retired `terminal`, `metric`, and `project` card variants; active shared card variants are now `default`, `evidence`, and `glass`.

### Code / Query Blocks

Implemented:

- `.technical-block` now uses normal body typography for resume and summary text; monospace should be used only for real code or query snippets.
- Decorative terminal and grid overlays were reduced or removed from the most visible sections.

## Phase 2 Tasks

- [x] Update global color tokens
- [x] Update typography scale
- [x] Update spacing scale
- [x] Update border radius
- [x] Update shadows
- [x] Update card styles
- [x] Update buttons
- [x] Update section backgrounds
- [x] Update code/query block styles
- [x] Update links
- [x] Remove or reduce glow effects

## Phase 2 Implementation Notes

Phase 2 intentionally changed the design foundation without restructuring homepage content or rewriting section copy. Later phases removed the remaining dashboard labels, old project-card layouts, and retired terminal/badge implementation names.

### Files Changed

| File | Change Summary |
|---|---|
| `tailwind.config.ts` | Replaced dark/neon theme tokens with blue shades, white, and red-violet palette, local slate text scale, matched evidence colors, and softer shadows. |
| `app/globals.css` | Switched to pale blue/white light color scheme, removed global cyber grid texture, reduced glow/radial effects, updated typography utilities, link/focus styles, and page depth treatment. |
| `components/ui/Card.tsx` | Flattened card variants to neutral light surfaces with subtle borders, softer shadows, and smaller radius. |
| `components/ui/Button.tsx` | Replaced neon gradient buttons with solid muted primary, restrained secondary, and light-blue featured CTA styling. |
| `components/ui/ToolTag.tsx` | Reworked shared tool styling into a quiet bordered tag after Phase 11 renamed the old Badge primitive. |
| `components/layout/Navbar.tsx` | Updated sticky nav to a pale-blue elevated header with a distinct white nav group, blue-tinted border, and restrained active states. |
| `components/layout/Footer.tsx` | Changed footer from dark ink to light surface. |
| `app/layout.tsx` | Updated skip-link styling for light theme contrast. |
| `components/sections/HeroSection.tsx` | Removed grid/glow overlays from the hero side panel and adjusted light-theme contrast. |
| `components/sections/VulnerabilityReductionProof.tsx` | Removed grid overlay and replaced saturated critical gradient with muted solid severity treatment; Phase 11 renamed the former dashboard component. |
| `components/sections/NetworkSecurityProof.tsx` | Removed grid overlay and replaced bar gradient with muted remediation color; Phase 11 renamed the former dashboard component. |
| `components/sections/SkillsOverview.tsx` | Reduced badge glow/gradient treatment and removed monospace from normal capability label. |
| `components/sections/ProjectCaseStudyCard.tsx` | Replaced the old project-preview treatment with shared homepage and project-index case-study cards. |
| `components/sections/ProjectDetail.tsx` | Replaced dark gradient visual panels with light neutral evidence panels and fixed heading contrast. |
| `app/contact/page.tsx` | Removed glow shadows from contact icon treatments and improved GitHub icon contrast. |
| `app/projects/page.tsx` | Reduced glow/hover treatment in project index navigation and fixed light-theme contrast. |
| `app/resume/page.tsx` | Fixed resume snapshot title contrast for the light theme. |

### New Design Tokens or Styles

- Blue/white/red-violet page foundation: `#effafd`, `#ffffff`, `#f8fcff`, `#f6fbfe`, `#080b3f`, `#4a8bdf`, `#a0006d`
- Deep blue accent for accessible CTAs and focus states: `#243b8f`
- Matched evidence colors: `#a0006d`, `#6d4fb0`, `#4a8bdf`, `#243b8f`, `#1e6f9f`
- Softer shadows: `shadow-soft` and `shadow-raised`
- Local slate scale tuned for readable light-theme text

### Removed or Reduced Visual Patterns

- Removed global cyber grid and dotted background texture.
- Removed bright teal radial glow washes from the global page foundation.
- Removed terminal/grid overlays from the hero and metrics panels.
- Reduced neon gradients, glow shadows, and glass effects in shared components.
- Reduced monospace usage in global labels and skills section labels.

### Build / Lint / Type Check Results

| Check | Result | Notes |
|---|---|---|
| Build | Passed | `npm.cmd run build` completed successfully. |
| Lint | Passed | `npm.cmd run lint` completed successfully. |
| Type check | Passed | `npx.cmd tsc --noEmit` completed successfully. |
| Tests | Not available | No test script is defined in `package.json`. |
| Local route check | Passed | Dev server returned `200` for homepage, secondary pages, and project detail routes. |
| Browser screenshot check | Passed | Browser visual inspection is working after the tool/runtime update. Hero proof pills were inspected in-browser with zero console errors. |
| Palette refinement checks | Passed | `npm.cmd run lint`, `npm.cmd run build`, and `npx.cmd tsc --noEmit` passed after the beige/dark-grey palette update. |
| Cream/black palette checks | Passed | `npm.cmd run lint`, `npm.cmd run build`, and `npx.cmd tsc --noEmit` passed after the cream/black palette update. |
| Evidence palette checks | Passed | `npm.cmd run lint`, `npm.cmd run build`, and `npx.cmd tsc --noEmit` passed after adding the color-wheel evidence palette. |
| Blue/red-violet palette checks | Passed | `npm.cmd run lint`, `npm.cmd run build`, and `npx.cmd tsc --noEmit` passed after applying the blue shades, white, and red-violet palette. Route checks also returned HTTP 200. |
| Surface usage refinement checks | Passed | `npm.cmd run lint`, `npm.cmd run build`, and `npx.cmd tsc --noEmit` passed after reserving pale blue for page atmosphere and shifting repeated component fills to white/near-white. Route checks also returned HTTP 200. |
| Hero proof pill refinement checks | Passed | Browser computed styles confirmed true white pill backgrounds, stronger royal-blue borders, tiny shadows, and zero console errors. |

## Phase 2 Completion Checklist

- [x] Global colors updated
- [x] Typography improved
- [x] Spacing system improved
- [x] Buttons updated
- [x] Cards updated
- [x] Neon/glow effects reduced
- [x] Build/lint/type checks run if available
- [x] `README.md` phase status board updated
- [x] `07_IMPLEMENTATION_LOG.md` updated
