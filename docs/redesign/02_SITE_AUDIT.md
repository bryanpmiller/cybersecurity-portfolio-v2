# 02 - Site Audit

This document contains Phase 1 findings.

`README.md` remains the source of truth. If this file conflicts with `README.md`, follow `README.md` and update this file.

## Phase 1 Objective

Audit the current site before making code changes.

Identify why the site feels generic, AI-coded, hacker-themed, visually bland, or overly template-driven.

## Current Tech Stack

| Item | Finding |
|---|---|
| Framework | Next.js App Router (`next` 16.2.6) with React 19.1.0 and TypeScript |
| Styling system | Tailwind CSS 3.4.17, global CSS tokens in `app/globals.css`, extended theme in `tailwind.config.ts` |
| Component structure | Route files in `app/`, shared layout in `components/layout/`, UI primitives in `components/ui/`, content sections in `components/sections/`, structured content in `lib/data/` |
| Package manager | npm, with `package-lock.json` present |
| Build command | `npm run build` -> `next build` |
| Lint command | `npm run lint` -> `eslint .` |
| Type check command | No dedicated script. TypeScript is configured through `tsconfig.json`; use `npx tsc --noEmit` if a type-only check is needed in a later phase. |
| Test command | No test script is defined. |
| Deployment platform | Not identified in repository files. |

## Key Files and Directories

| Area | File/Directory | Notes |
|---|---|---|
| Homepage | `app/page.tsx` | Composes hero, risk metrics, network-security dashboard, resume highlights, and featured projects. |
| Global styles | `app/globals.css` | Defines dark-first background, grid overlay, radial accent washes, typography utility classes, mono eyebrow/stat/badge styles. |
| Tailwind theme | `tailwind.config.ts` | Defines dark ink/surface palette and bright cyan/mint/evidence/remediation accent colors. |
| Layout | `app/layout.tsx`, `components/layout/Navbar.tsx`, `components/layout/Footer.tsx`, `components/layout/PageContainer.tsx` | Provides shell, nav, footer, skip link, and page width. |
| UI primitives | `components/ui/Card.tsx`, `components/ui/Button.tsx`, `components/ui/Badge.tsx`, `components/ui/SectionHeader.tsx`, `components/ui/Reveal.tsx` | Card variants include `terminal`, `metric`, `project`, `evidence`, and `glass`; buttons and badges use glow-like shadows and bright evidence accents. |
| Homepage sections | `components/sections/HeroSection.tsx`, `RiskReductionDashboard.tsx`, `ImpactMetricsStrip.tsx`, `FeaturedProjects.tsx`, `SkillsOverview.tsx` | Main source of dashboard, terminal, badge, mini-chart, and animated-card visual language. |
| Project pages | `app/projects/page.tsx`, `app/projects/[project-slug]/page.tsx` files, `components/sections/ProjectDetail.tsx` | Project details are already data-driven case studies, but their presentation still uses dark cards, technical blocks, and visual stat panels. |
| Content/data | `lib/data/profile.ts`, `lib/data/resume.ts`, `lib/data/projects.ts`, `lib/data/skills.ts` | Strongest source of real proof: metrics, project narratives, tools, caveats, links, and role alignment. |
| Resume/contact links | `lib/data/profile.ts`, `app/resume/page.tsx`, `app/contact/page.tsx`, `public/resume/bryanpmiller_resume_public.pdf` | Resume, GitHub, LinkedIn, and contact path are present and should be preserved. |
| Config | `package.json`, `next.config.ts`, `eslint.config.mjs`, `tsconfig.json`, `postcss.config.mjs` | Security headers exist in `next.config.ts`; no deployment-specific config was found. |

## Audit Checklist

Review:

- [x] Homepage
- [x] Navigation
- [x] Hero section
- [x] Metrics section
- [x] Project cards
- [x] Skills/tools section
- [x] About/background section
- [x] Contact section
- [x] Project/case-study pages
- [x] Global colors
- [x] Typography
- [x] Spacing
- [x] Shadows
- [x] Borders
- [x] Animations
- [x] Mobile layout

## Template Signals To Look For

- [x] Neon teal overuse
- [x] Cyber grid backgrounds
- [x] Terminal-style decoration
- [x] Fake command-line copy
- [x] Dashboard-style layout
- [x] Too many cards
- [x] Too many badges
- [x] Weak typography
- [x] Repetitive sections
- [x] Poor hierarchy
- [x] Generic AI-sounding copy
- [x] Overly dark design
- [x] Visual clutter

## Phase 1 Findings

### Why the current design feels AI-coded

- The global design is dark-first and cyber-themed by default: `app/globals.css` sets `color-scheme: dark`, a dark gradient body, fixed grid overlays, dotted texture, radial accent washes, and bright cyan/mint evidence accents.
- The visual language leans on common cybersecurity-template cues: terminal-style cards, mono uppercase eyebrows, grid overlays, progress bars, glow shadows, dashboards, badges, tiny charts, numbered rows, and command-like `>` markers.
- The homepage gives many elements similar visual weight. Hero proof badges, a right-side signal panel, risk dashboards, network dashboard, resume highlight cards, and project cards compete instead of forming a calm editorial hierarchy.
- Metrics are real and impressive, but they are presented like gamified dashboard widgets with animated bars, severity colors, mini counters, and "Findings Reduced" badges.
- Project cards are information-rich, but every project uses a dense mini-visual, snapshot boxes, tool chips, icons, hover motion, and CTA treatments. The result feels more like generated UI than an edited case-study portfolio.
- Skills are grouped, which is good, but the presentation still resembles a badge wall because each group contains prominent tool badges, icons, gradients, and supporting capability lists in repeated cards.
- Copy is mostly grounded, but some labels such as "Active Portfolio Signal," "Live Evidence," "Remediation dashboard," and "Network Security Dashboard" reinforce a product/dashboard metaphor instead of a professional portfolio voice.

### Specific Components or Files Causing the Issue

| Issue | File/Component | Recommendation |
|---|---|---|
| Dark-first site foundation with grid and radial accent effects | `app/globals.css` | Phase 2 should move to a light-first base, remove global cyber grid texture, reduce radial glow effects, and reserve dark sections for intentional contrast. |
| Bright cyan/mint "evidence" accent dominates interaction states | `tailwind.config.ts`, `app/globals.css`, `components/ui/Button.tsx` | Replace with a muted enterprise palette; use accent color sparingly for links, focus states, and key proof points. |
| Terminal-style card variant and grid overlays | `components/ui/Card.tsx`, `HeroSection.tsx`, `RiskReductionDashboard.tsx`, `ImpactMetricsStrip.tsx` | Retire the `terminal` treatment in favor of plain editorial panels with subtle borders, white/light surfaces, and restrained shadows. |
| Dashboard-named proof sections | `RiskReductionDashboard.tsx`, `ImpactMetricsStrip.tsx`, `app/page.tsx` | Convert to an executive proof/impact section that preserves the metrics but removes dashboard naming, animated bars, and widget styling. |
| Hero right panel feels like a security product dashboard | `components/sections/HeroSection.tsx` | Make the hero more direct and recruiter-facing; replace the signal panel with concise proof points or a calmer featured case-study entry. |
| Badge-heavy proof and skills presentation | `HeroSection.tsx`, `SkillsOverview.tsx`, `Badge.tsx`, `resume/page.tsx`, `about/page.tsx` | Consolidate badges into grouped capabilities and resume-backed highlights; reduce pill/chip density. |
| Repetitive equal-card project grid with dense mini-visuals | `components/sections/FeaturedProjects.tsx`, `app/projects/page.tsx` | Introduce one featured case study first, then supporting project previews with varied layout and clearer problem/action/result hierarchy. |
| Case-study pages still use stat panels and technical blocks as primary visuals | `components/sections/ProjectDetail.tsx` | Keep the case-study data, but redesign pages around executive summary, role alignment, approach, evidence, result, and hiring relevance. |
| Mono uppercase styling used too broadly | `app/globals.css`, `SectionHeader.tsx`, `FeaturedProjects.tsx`, `ProjectDetail.tsx` | Keep monospace only for real technical evidence or code/query snippets; use normal sentence-case labels elsewhere. |
| Contact/About/Resume pages repeat card-grid patterns | `app/contact/page.tsx`, `app/about/page.tsx`, `app/resume/page.tsx` | Later phases should simplify secondary pages after homepage direction is established. |

### Current Site Strengths

- The content is honest, specific, and supported by real artifacts: GitHub repositories, case-study narratives, metrics, tools, and a resume PDF.
- Project data already includes strong case-study ingredients: problem, approach, evidence, outcome, lessons, tools, links, and caveats.
- The most important impact metrics are already centralized in `lib/data/resume.ts`.
- The site has clear navigation, working internal routes, metadata helpers, security headers, and a structured component system.
- Accessibility foundations exist: semantic sections/headings, a skip link, focus-ring utilities, reduced-motion checks in animated sections, and reasonable mobile grid classes.
- Copy avoids many obvious exaggerations and includes careful caveats, especially around lab environments, selected STIG findings, attempted exfiltration, and non-production scope.

### Current Site Weaknesses

- The visual system conflicts with the desired premium, enterprise-ready direction because it relies on dark surfaces, bright accents, grid textures, and dashboard metaphors.
- The homepage does not yet have a clear editorial order. Proof points, resume highlights, dashboards, and projects appear as stacked modules rather than a guided recruiter narrative.
- Too many repeated cards, badges, and mono labels make the site feel generated even when the underlying content is strong.
- Metrics are over-visualized; the real value is the before/after impact and remediation process, not progress-bar animation.
- The hero headline and positioning are serviceable, but the surrounding UI makes it feel like a cybersecurity product screen instead of a human portfolio.
- Skills and resume sections have useful information but need better prioritization, grouping, and whitespace.

### Existing Content To Preserve

- Name, role direction, resume link, GitHub link, LinkedIn link, and contact path from `lib/data/profile.ts`.
- Metrics from `lib/data/resume.ts`: 100% critical vulnerability reduction, 92% high vulnerability reduction, 88% medium vulnerability reduction, and 100% reduction in observed RDP-related brute-force attempts.
- Vulnerability Management Program project and supporting links, including Tenable, Azure, PowerShell, Windows Server, remediation scripts, and CVE mapping.
- DISA STIG Remediation project, including selected-control scope, PowerShell remediation, screenshot validation, and the explicit note that full compliance is not claimed.
- Password Spray Threat Hunt project, including MDE/Sentinel-style KQL, RDP/password-spray investigation, ATT&CK mapping, attempted exfiltration wording, and key artifacts.
- Akira ransomware cyber-range threat hunt, including MDE/Sentinel/KQL work, affected hosts, timeline, ATT&CK mapping, detection recommendations, and no confirmed exfiltration claim.
- Education, Security+ certification, vulnerability management work, secure configuration, PowerShell automation, Defender/Sentinel/KQL investigation work, threat hunting, and incident response fundamentals.
- Project case-study data model in `lib/data/projects.ts`; it is a strong foundation for the redesign.

### Existing Content To Rewrite

- Homepage section titles and labels that use dashboard/product language: "Active Portfolio Signal," "Live Evidence," "Remediation dashboard," "Network security dashboard," and "Network Security Dashboard."
- Hero support copy and proof presentation should become more recruiter-friendly and less UI-signal oriented.
- Resume highlight cards should be edited into a tighter professional summary, not a repeated card stack.
- Skill group presentation should shift from badge/tool inventory toward capability groups with examples of how those skills were applied.
- Project preview copy should emphasize problem, action, result, and evidence rather than mini-dashboard visuals and dense tool chips.
- Secondary-page introductions should be reviewed after the homepage structure is set so the overall voice is consistent and human-written.

### Recommended Implementation Order

1. Phase 2: Refactor the design foundation first: light-first palette, typography defaults, spacing, card/button treatments, borders, shadows, and removal of global grid/glow effects.
2. Phase 3: Rebuild homepage structure around editorial hierarchy: hero, proof/impact, featured case study, selected projects, capabilities, background, and contact CTA.
3. Phase 4-5: Rewrite the hero and proof section together so the strongest metrics appear quickly without dashboard/gamified treatment.
4. Phase 6-7: Present all four homepage projects as unified featured case-study previews in the approved order.
5. Phase 8-9: Consolidate skills into capability groups and add a concise background section connecting military/operations experience to cybersecurity work.
6. Phase 10: Redesign project detail pages using the existing case-study data model.
7. Phase 11-13: Sweep remaining template signals, then complete mobile/accessibility QA and final designer/hiring-manager review.

## Phase 1 Completion Checklist

- [x] Current design reviewed
- [x] Key files identified
- [x] Template-like visual patterns identified
- [x] Content to preserve identified
- [x] Content to rewrite identified
- [x] Recommended implementation order documented
- [x] `README.md` phase status board updated
- [x] `07_IMPLEMENTATION_LOG.md` updated

## Phase 11 Cleanup Results

Status: Complete

The Phase 11 sweep removed remaining implementation-level template signals without changing the approved site structure or content. The live site no longer imports components or tokens named around dashboard, terminal, neon/cyan/mint, or badge-heavy presentation patterns.

Completed cleanup:

- Removed the unused `components/sections/FeaturedProjects.tsx` component, which still contained old mini-chart, scan-summary, progress-bar, monospace, and project-card styling.
- Renamed `RiskReductionDashboard.tsx` to `VulnerabilityReductionProof.tsx` and `ImpactMetricsStrip.tsx` to `NetworkSecurityProof.tsx`.
- Updated homepage imports and component names so proof sections are framed as evidence/proof rather than dashboards.
- Removed unused `metric`, `project`, and `terminal` card variants from `components/ui/Card.tsx`.
- Renamed the shared tool pill from `Badge` to `ToolTag` and the global text utility from `badge-text` to `chip-text`.
- Replaced active `mint` styling references with the semantic `remediation` color token and removed unused `cyan`/`mint` aliases from Tailwind.
- Reworded remaining "dashboards" copy in background/resume data to "Sentinel workbooks."
- Removed non-code monospace styling from resume skill summaries and homepage case-study evidence labels.

Verification:

- `npm.cmd run lint` passed.
- `npx.cmd tsc --noEmit` passed.
- `npm.cmd run build` passed.
- Production route checks returned HTTP 200 for `/`, `/about`, `/resume`, `/skills`, `/projects`, all four project detail routes, and `/contact`.
