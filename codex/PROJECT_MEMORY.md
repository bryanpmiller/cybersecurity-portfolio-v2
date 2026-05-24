# PROJECT_MEMORY.md — Portfolio Redesign Working Memory

## Purpose

This file is the long-term memory file for the portfolio redesign project.

This file lives at:

```text
codex/PROJECT_MEMORY.md
```

Codex should read this file before starting any major task and update it after making important decisions.

Use this file for durable project context, not temporary notes.

---

## Current Project Status

Status: Phase 4 complete

Current phase: Phase 5 — Project Cards as Cybersecurity Case Studies

Current focus:

- Audit existing project cards before improving them as cybersecurity case studies.
- Keep the portfolio polished, recruiter-friendly, and proof-of-work focused.

---

## Current Design Direction

Recommended direction:

> A refined cybersecurity proof-of-work portfolio that feels like a polished analyst workspace: calm, technical, evidence-led, recruiter-friendly, and original. Borrow the restraint and product polish of the Codex reference, plus the page pacing and confidence of the LifeOS reference, while avoiding sales-page structure, lifestyle branding, fake-hacker styling, and copied assets.

The site should feel:

- Modern
- Professional
- Technical
- Cybersecurity-focused
- Clean
- Recruiter-friendly
- Specific to Bryan's work
- Less generic
- Less AI-template-like

The site should not feel:

- Like a fake hacker site
- Overly neon
- Overloaded with animations
- Generic developer-template style
- Copied from the reference website

### Phase 2 Visual Direction

Core concept:

- A polished cybersecurity analyst workspace, built around proof-of-work, evidence, and recruiter scanning.

Visual goals:

- Make the first viewport feel intentional and premium without becoming a generic product landing page.
- Preserve Bryan's real content and cybersecurity positioning while improving the design around it.
- Use real portfolio concepts as visuals: vulnerability reduction, scan validation, remediation timelines, KQL pivots, STIG evidence, detection paths, and GitHub proof.
- Create clearer visual hierarchy between primary proof, supporting details, and secondary metadata.
- Reduce repeated card density by varying section rhythm, scale, and layout while keeping pages easy to scan.
- Keep mobile layouts constrained and polished; Home and Projects mobile overflow must be addressed early.

Tone:

- Calm confidence over hype.
- Professional technical depth over fake-hacker drama.
- Evidence-led and recruiter-friendly over salesy or lifestyle-oriented.

Reference influence:

- Borrow from Codex: restrained navigation, calm hero composition, immersive first impression, generous spacing, concise cards, dark product-story sections, and clean mobile stacking.
- Borrow from LifeOS: confident section pacing, stronger page storytelling, large proof/media surfaces, and clear audience-oriented structure.
- Avoid from Codex: ChatGPT branding, orb/icon treatment, logo strip, pricing/product-download framing, and generic software-product copy.
- Avoid from LifeOS: warm lifestyle palette, personal-brand imagery, testimonial-heavy sales page structure, sticky purchase CTA, long-form conversion rhythm, and mobile overflow behavior.

Initial implementation priority:

- Define colors, typography, surfaces, spacing, cards, and interaction states in Phase 2 before redesigning individual sections.
- Apply the visual system first to shared layout/components and the Home hero/card system.
- Keep all later changes site-wide by checking affected pages: Home, About, Resume, Projects, Skills, and Contact.

### Phase 3.1 Hero Audit

- Current hero screenshots and audit data are saved in `codex/screenshots/phase-3-hero-audit/`.
- The Phase 2 visual system gives the hero a stronger professional foundation: polished dark workspace feel, clear CTAs, recruiter-friendly proof chips, and a useful evidence panel.
- Browser audit found no horizontal overflow in the hero at 1440px desktop or 390px mobile widths, and no console warnings/errors were recorded during the hero pass.
- Current H1 is `Bryan Miller`; this preserves the existing copy but does not make the role/value proposition the largest first-read signal by itself. Phase 3.2 should strengthen the headline/subheadline hierarchy around existing words unless Bryan approves wording changes.
- Desktop first viewport is strong: the hero occupies about 72% of the viewport and lets the next Evidence section peek below the fold.
- Mobile first viewport is clean but tall: the hero occupies more than one viewport, proof chips and the evidence card move lower, and CTA stacking consumes meaningful first-screen space. Phase 3.3 and 3.5 should tune hierarchy and mobile density.
- The right-side proof panel is polished but still somewhat abstract. Phase 3.4 should evolve it into a more distinctive cybersecurity proof visual tied to real portfolio work, such as vulnerability reduction, remediation flow, scan evidence, KQL/Sentinel investigation, or STIG hardening.

### Phase 3.2 Hero Headline Structure

- Phase 3.2 preserved the existing hero words while making the role line more prominent: `Bryan Miller` remains the H1, and `Vulnerability Management & Cybersecurity Analyst` now appears as a stronger heading-style role statement directly below it.
- The positioning sentence remains supporting copy beneath the name/title structure.
- Browser review showed no horizontal overflow at 1440px desktop or 390px mobile widths, and no console warnings/errors were recorded.
- Mobile remains clean but tall; CTA density and proof-chip placement should be addressed in Phase 3.3 and Phase 3.5.

### Phase 3.3 Hero CTA Buttons

- Phase 3.3 preserved all CTA labels and destinations: `View Projects`, `Download Resume`, and `View GitHub`.
- The primary `View Projects` action now becomes a full-width anchor button on mobile, while `Download Resume` and `View GitHub` pair beneath it in a compact two-column row.
- On larger screens, the CTAs remain in a single horizontal row with the original hierarchy and spacing.
- The shared `Button` component now accepts an optional `className` prop for scoped layout overrides without changing its default styling.
- Browser review confirmed CTA text fits at desktop and 390px mobile widths, local fonts are available, no horizontal overflow was found, and no console warnings/errors were recorded.
- A quick desktop/mobile audit across Home, About, Resume, Projects, Skills, and Contact found no horizontal overflow after the shared Button API change.

### Phase 3.4 Hero Cybersecurity Visual

- Phase 3.4 kept the right-side hero panel content intact while making it feel more like an analyst evidence display.
- Portfolio signal rows now include restrained numbered status markers on larger screens, using the existing signal labels and statuses.
- The existing `Critical findings reduced` and `High findings reduced` evidence rows now include visual progress bars based on their supported percentage values.
- The visual treatment avoids fake-hacker styling, neon overload, copied assets, or invented claims.
- Browser review captured desktop, mobile first viewport, and mobile scrolled-panel screenshots in `codex/screenshots/phase-3-cybersecurity-visual/`.
- Browser metrics found no horizontal overflow, verified local font availability, and recorded no console warnings/errors.

### Phase 3.5 Mobile Hero Validation

- Phase 3.5 validated the redesigned hero at 320px, 360px, 390px, and 430px mobile widths.
- Mobile tuning reduced hero height across tested widths by tightening small-screen spacing, using a calmer mobile hero lead size, and reducing right-panel padding on narrow screens.
- CTA labels, proof chips, H1, role line, and the evidence panel all fit without horizontal overflow at the tested widths.
- The evidence panel now peeks into the first viewport at 360px and larger tested mobile widths; at 320px it remains below the fold, which is acceptable because the phone viewport is very constrained and the primary content/CTA remains visible.
- Browser review screenshots and audit data are saved in `codex/screenshots/phase-3-mobile-layout/`.
- `npm.cmd run lint` and `npm.cmd run build` both passed after the Phase 3 mobile validation changes.

### Phase 4.1 Navigation Review

- Browser navigation review screenshots and audit data are saved in `codex/screenshots/phase-4-navigation-review/`.
- Current desktop navigation is functionally solid: sticky header is about 79px tall, brand/title and nav links fit cleanly, active states are correct, and no horizontal overflow was found.
- Current mobile navigation is functional but tall: header height is about 195px at 320-390px widths, with the brand/title stacked above a two-row nav chip group.
- Nav link text fits at tested desktop, 390px mobile, and 320px narrow widths.
- Active `aria-current="page"` state works on Home, About, Resume, Projects, Skills, and Contact.
- Project detail routes correctly keep the `Projects` nav item active.
- No console warnings/errors were recorded during the navigation audit.
- Phase 4.2 should reduce mobile vertical footprint while preserving obvious links, active states, sticky behavior, and accessible semantic navigation.

### Phase 4.2 Navigation Styling and Mobile Behavior

- Phase 4.2 reduced the mobile sticky header height from about 195px to about 138px at tested 320px and 390px widths.
- Mobile keeps all six primary nav links visible in a two-row chip group; no hamburger/menu state was added.
- The brand title is hidden below the `sm` breakpoint because the same role text is presented prominently in the hero, while the brand name remains visible.
- Desktop navigation remains visually and dimensionally unchanged at the tested 1440px width.
- Active states continue to work on Home, About, Resume, Projects, Skills, Contact, and representative project detail routes.
- Browser audit found no horizontal overflow, all nav link text fit, and no console warnings/errors.

### Phase 4.3 Section Order for Recruiter Scanning

- Phase 4.3 reviewed visible section order across Home, About, Resume, Projects, Skills, and Contact at desktop and mobile widths.
- Existing Home order remains appropriate: hero first, evidence/metrics second, featured projects third. This gives recruiters role, proof, then case-study depth.
- Existing About, Resume, Skills, and Contact page order remains appropriate: each starts with a page header, then immediate recruiter-relevant content or actions.
- The Projects page needed faster case-study access on mobile because project cards began near or below the first viewport.
- Added a compact `Project case studies` link index directly below the Projects page header, using existing project titles and routes only.
- The Projects index gives recruiters direct access to each case study before the longer project cards.
- Browser review found no horizontal overflow, project index links fit, and no console warnings/errors at desktop, 390px mobile, and 320px narrow widths.
- `npm.cmd run lint` and `npm.cmd run build` both passed after the section-order update.

---

## Approved Decisions

- Phase 0 must inspect all primary pages, not only the homepage: Home, About, Resume, Projects, Skills, and Contact.
- Browser screenshots should be saved under `codex/screenshots/` in task-specific folders.
- Preserve existing page copy during design work unless Bryan explicitly approves wording changes.
- The redesign is site-wide, not homepage-only. Future phases must review affected primary pages and shared components wherever they appear.
- After visual changes, affected pages should be inspected at desktop and mobile widths; notable layout, responsiveness, accessibility, or interaction issues should be documented in `codex/WORKLOG.md`.
- Reference analysis must inspect the full page, including middle and lower sections, not only the first viewport.
- Phase 2 visual direction is a polished cybersecurity analyst workspace: evidence-led, calm, technical, recruiter-friendly, and original.

---

## Rejected Ideas

Add rejected ideas here so Codex does not accidentally repeat them.

---

## Reference Website Notes

### Primary Reference

URL: `https://chatgpt.com/codex/?utm_source=google&utm_medium=paid_search&utm_campaign=GOOG_X_SEM_GBR_Codex_CDX_BAU_ACQ_PER_MIX_ALL_NAMER_US_EN_111325&c_id=23226110534&c_agid=194939268903&c_crid=807810285009&c_kwid=kwd-111182835&c_ims=&c_pms=9031397&c_nw=g&c_dvc=c&gad_source=1&gad_campaignid=23226110534&gbraid=0AAAAA-I0E5ftKRws_DKMoAIMqW7455W9l&gclid=Cj0KCQjw_b_QBhCSARIsAP6hR4d3WgRitEHGQkw1csVZ-btvs1PYFSTqIyrVov85XYt6pKbB3AmxYvMaAtX4EALw_wcB`

What works well:

- User-supplied direction: polished, premium, modern, intentional, clean section structure, generous whitespace, clear typography hierarchy, refined cards, subtle depth, restrained animation, and easy navigation.
- Browser review confirmed a strong, minimal first viewport with one clear product signal, large calm headline, simple CTA, broad immersive background image, and restrained navigation.
- The page uses generous vertical rhythm, big visual contrast between hero and lower sections, and translucent cards that feel polished without becoming cluttered.
- Mobile adapts cleanly without horizontal overflow in the captured viewport.

Design principles to borrow:

- Stronger section rhythm and more intentional visual hierarchy.
- Cleaner card depth, borders, and hover states.
- More deliberate whitespace and responsive composition.
- Subtle background texture/depth without distracting from recruiter scanning.
- Use a first-viewport visual statement that immediately communicates quality.
- Keep hero copy and CTAs simple, with supporting proof below rather than overloading the hero.

What not to copy:

- Exact layout, exact colors, text, images, branding, proprietary animations, or reference-specific assets.
- The portfolio must remain original and cybersecurity-focused.
- Do not copy the Codex orb/app icon, ChatGPT branding, logo strip, pricing blocks, or product-page language.
- Avoid shifting Bryan's portfolio into a generic software-product landing page.

How this should influence my portfolio:

- Use the reference as a quality bar for polish, spacing, typography, cards, navigation, and responsiveness while preserving Bryan's content and proof-of-work positioning.
- Translate the immersive hero idea into cybersecurity-specific proof-of-work visuals, such as a refined risk/detection surface, not copied product imagery.

### Secondary Reference

URL: `https://lifestylebusiness.com/lifeos/?utm_source=youtube&utm_medium=channel_page&utm_campaign=description_link`

What works well:

- Browser review showed bold editorial hierarchy, a confident media-first hero, sticky CTAs, large rounded media containers, strong section storytelling, and clear repeated conversion points.
- The page uses a warmer, lighter palette and oversized typography to feel approachable and premium.

Design principles to borrow:

- Stronger page storytelling and section-to-section momentum.
- Confident use of large media or proof visuals.
- Clear repeated CTAs where they help the visitor act.
- Friendly contrast between large headings, supporting copy, and cards.

What not to copy:

- Do not copy brand, layout, copy, imagery, product positioning, or proprietary interaction patterns.
- Do not copy the lifestyle/coaching tone, warm cream/orange palette, personal-brand imagery, sales-page structure, sticky purchase CTA, or testimonial carousel behavior.
- The captured mobile page had horizontal overflow, so do not borrow its responsive implementation.

How this should influence my portfolio:

- Treat as secondary inspiration only if its spacing, visual polish, or interaction choices support a professional cybersecurity portfolio.
- Use it as a reminder to make pages feel intentional and paced, but keep Bryan's portfolio quieter, more technical, and recruiter-oriented.

---

## Phase 1 Reference Analysis

### Screenshots

- Fresh reference screenshots saved in `codex/screenshots/phase-1-reference-analysis/`.
- Audit data saved in `codex/screenshots/phase-1-reference-analysis/phase-1-reference-audit.json`.
- Deep scroll review screenshots saved in `codex/screenshots/phase-1-reference-analysis/deep-scroll/`.
- Deep scroll audit data saved in `codex/screenshots/phase-1-reference-analysis/deep-scroll/phase-1-deep-scroll-audit.json`.

### Full-Page Reference Review

- Codex page flow: immersive hero, trusted-logo strip, two use-case cards, full-width product story modules with screenshots, pricing cards, multi-surface coding examples, team/business cards, final CTA, and footer.
- Codex useful patterns: restrained navigation, calm hero, strong contrast between immersive hero and black product sections, generous vertical spacing, product screenshots as proof, concise cards, and clean mobile stacking.
- Codex patterns to avoid: logo/social-proof strip, pricing-plan layout, product-download framing, ChatGPT branding, exact gradients, and generic product landing copy.
- LifeOS page flow: media-first hero, repeated CTA, testimonials, pain/problem section, founder credibility section, product/system introduction, pillars, philosophy, testimonial blocks, inside-system sections, audience fit/not-fit section, pricing/FAQ/guarantee, final long-form CTA, and footer.
- LifeOS useful patterns: confident page pacing, large media surfaces, high-contrast section changes, audience segmentation, and repeated action points.
- LifeOS patterns to avoid: sales-page tone, sticky purchase CTA, testimonial-heavy proof style, personal-brand imagery, warm lifestyle palette, long-form conversion flow, and its mobile overflow behavior.
- For Bryan's portfolio, the best reference blend is Codex-level restraint plus LifeOS-level section pacing, translated into a cybersecurity proof-of-work presentation.

### Comparison Against Current Portfolio

- Current portfolio already has a cybersecurity-specific foundation, strong real project content, and a consistent dark technical visual language.
- Compared with the Codex reference, the portfolio needs a more intentional first viewport, stronger visual hierarchy, less repeated card density, and cleaner responsive constraints.
- Compared with the LifeOS reference, the portfolio needs more page-level pacing and confidence, but should avoid the sales-page tone and lifestyle visuals.
- Current Home and Projects mobile overflow should be fixed before more advanced visual polish.
- Contact and Resume pages are functional but should feel more intentionally designed, especially on desktop.

### Design Principles to Borrow

- Immersive but restrained first-viewport visual treatment.
- Larger, calmer spacing between major sections.
- Fewer repeated card blocks per viewport; stronger contrast between primary content, supporting proof, and secondary details.
- Refined card depth with subtle borders, hover states, and responsive-safe internal visuals.
- Mobile-first constraints for every visualization and badge row.

### Unique Cybersecurity Direction

- Build a refined cybersecurity proof-of-work interface that feels like a polished analyst workspace, not a fake hacker page.
- Use real portfolio concepts as visuals: vulnerability reduction, scan validation, KQL pivots, remediation timelines, STIG evidence, and project case-study evidence.
- Keep the palette professional and dark, but introduce more nuanced neutral surfaces and restrained accent hierarchy so the site does not read as only dark blue/cyan.
- Prioritize recruiter scanning: clear name/title, strongest proof, projects, resume, GitHub, and contact paths.

### First Recommended Redesign Area

- Start with Phase 2 visual system foundations, then apply them first to the Home hero and shared card system.

---

## Current Site Audit

### Phase 0 Browser Screenshots

- Fresh screenshots saved in `codex/screenshots/phase-0-all-pages/`.
- Audit data saved in `codex/screenshots/phase-0-all-pages/phase-0-browser-audit.json`.

### Page Findings

- Home: Strong cybersecurity positioning and proof-of-work signals, but mobile has horizontal overflow from project preview components and the hero/dashboard stack feels visually heavy.
- About: Content is clear and recruiter-relevant; layout is straightforward, with minor mobile overflow in the highlights/roles section.
- Resume: PDF CTA is obvious and mobile layout is readable; resume/skills cards are functional but plain compared with the portfolio goal.
- Projects: The strongest proof-of-work page, but mobile project preview visuals overflow horizontally and some preview treatments are dense.
- Skills: Cleanest mobile layout; skill chips are scannable but could gain stronger categorization and proof links in later phases.
- Contact: Clean and functional; sparse desktop composition leaves a large empty lower viewport and could feel more intentional.

### Phase 0 Design Audit

- Top priority: fix mobile horizontal overflow on Home and Projects before polishing deeper responsive states.
- The current palette and surfaces are professional but heavily dark-blue/cyan, so future visual-system work should introduce more nuanced contrast without drifting into neon hacker styling.
- Cards are consistent and readable, but many pages rely on repeated rectangular panels; future phases should vary structure and hierarchy while preserving content.
- Navigation is usable and wraps on mobile, but it consumes significant vertical space at the top of every mobile page.
- Visual proof elements are strongest on project cards and dashboard panels, but they need responsive constraints so technical previews do not break narrow layouts.

---

## Visual System Rules

### Colors

- Phase 2.2 shifted the site from a one-note dark blue/cyan palette toward a graphite analyst-workspace palette.
- Core tokens now use near-black ink, graphite surface layers, and muted steel borders: `ink` `#080a0f`, `ink-soft` `#0d111a`, `surface` `#111722`, `surfaceElevated` `#182131`, `line` `#2a3342`, and `lineStrong` `#435166`.
- Accent hierarchy: `evidence` / `cyan` `#6ee7d8`, `remediation` / `blue` `#8ab4f8`, `detection` / `violet` `#a78bfa`, `mint` `#7dd3c7`, `amber` / `severityMedium` `#f6c177`, `severityHigh` `#f59e6c`, and `severityCritical` `#ff8a8a`.
- Background texture should stay subtle: neutral grid/dot texture, restrained teal/violet/amber radial fields, and no matrix-style or fake-hacker effects.
- Preserve existing Tailwind token names where possible so components can evolve without broad churn.

### Typography

- The site no longer uses `next/font/google`; Phase 2.6 removed build-time Google font fetching so production builds are network-independent.
- Font CSS variables are defined in `app/globals.css` with local/system fallback stacks: body uses Inter/Segoe UI/system fallbacks, headings use Space Grotesk/Segoe UI/system fallbacks, and mono text uses JetBrains Mono/Cascadia Code/SFMono/Consolas fallbacks.
- `app/globals.css` now includes local `@font-face` rules for Inter, Space Grotesk, and JetBrains Mono. Font files and license files live in `public/fonts/`; the one-off downloader script was removed after the files were added.
- The local font strategy preserves the original Google-font visual direction while keeping production builds independent from Google font fetching.
- Phase 2.3 introduced reusable typography utilities: `display-text`, `page-title`, `section-title`, `panel-title`, `card-title`, `lede-text`, `hero-lede`, `body-copy`, `supporting-copy`, and `compact-copy`.
- Page-level `h1` headings now have a stronger scale than section headings, while `h2`/card titles use smaller, tighter scales for recruiter scanning.
- Body copy should use `body-copy` for main narrative text, `supporting-copy` for card summaries, and `compact-copy` for denser supporting panels.
- Keep technical labels in mono, uppercase, and restrained; avoid negative letter spacing and viewport-width font scaling.

### Spacing

- Current layout uses a max-width `PageContainer` with `max-w-6xl`, responsive horizontal padding, and `py-12 lg:py-16`.
- Spacing is generally readable but mobile nav plus section padding creates a tall first viewport.
- Phase 2.5 adjusted the shared page container to use `px-4 py-10` on mobile, `sm:px-6 sm:py-12`, and `lg:px-8 lg:py-16`.
- Nav and footer gutters now align with the page container at mobile and larger breakpoints.
- Section gaps now tighten slightly on mobile and open back up at larger breakpoints.
- Cards and grids should default to `min-w-0` where technical preview content, long tags, or dense evidence rows can affect responsive sizing.
- Home and Projects mobile horizontal overflow was fixed in Phase 2.5 by constraining project card grids, card wrappers, preview panels, and technical preview internals.

### Borders and Radius

- Cards and controls mostly use small radii (`rounded-md`, `rounded-lg`) with thin borders.
- This fits the desired professional technical style and should be preserved unless a phase calls for a specific refinement.
- Phase 2.4 refined buttons, nav states, badges, cards, footer links, and focus states while preserving the small-radius technical style.
- Buttons now use stronger border, shadow, and hover treatments; primary actions use restrained evidence gradients, while secondary actions stay dark and quiet.
- Cards now use subtle gradient surfaces, thin rings, improved border opacity, and controlled hover depth for project cards.
- Focus states use the shared evidence accent and must remain visible on dark surfaces.

### Shadows and Depth

- Depth currently comes from translucent dark surfaces, thin borders, subtle glows, and a custom `soft` shadow token.
- Keep depth subtle and functional: use it to separate controls and proof surfaces, not to create flashy floating panels.

### Background Treatment

- Current background uses a dark vertical gradient, grid/dot texture, and subtle radial light fields.
- Keep texture subtle and avoid matrix-style or fake-hacker effects.

### Animation Rules

- Motion should be subtle.
- Avoid distracting effects.
- Respect `prefers-reduced-motion`.

---

## Content Rules

- Keep copy specific and direct.
- Avoid generic AI-sounding phrases.
- Avoid exaggerated claims.
- Do not invent experience, metrics, projects, or certifications.
- Use metrics only when supported by resume/site content.
- Emphasize proof-of-work.
- Tie project descriptions to real tools, methods, and outcomes.
- Keep recruiter scanning in mind.

---

## Cybersecurity Positioning

The portfolio should emphasize:

- Vulnerability Management
- SecOps
- Detection Engineering
- Microsoft Defender for Endpoint
- Microsoft Sentinel
- KQL
- Tenable
- DISA STIG hardening
- PowerShell remediation
- Azure NSG/firewall hardening
- Threat hunting
- Incident-style documentation
- GitHub project documentation
- Resume-ready proof of work

---

## Known Supported Metrics

Only use these if already supported by the resume/site content.

Potentially supported metrics:

- Critical vulnerabilities reduced by 100%
- High vulnerabilities reduced by 92%
- Medium vulnerabilities reduced by 88%
- Brute-force incidents reduced by 100% through NSG/firewall hardening

Before using metrics, verify they are present in the project content or resume.

---

## Architecture Notes

### Framework

- Next.js App Router with React and TypeScript.

### Package Manager

- npm, with `package-lock.json`.

### Styling Method

- Tailwind CSS with global CSS variables in `app/globals.css`.

### Important Directories

- `app/`: routes and metadata.
- `components/layout/`: navbar, footer, page container.
- `components/sections/`: hero, project, skills, and dashboard sections.
- `components/ui/`: reusable Card, Button, Badge, and SectionHeader.
- `lib/data/`: profile, project, resume, and skills content.
- `public/resume/`: resume PDF.

### Main Homepage File

- `app/page.tsx`

### Shared Layout Files

- `app/layout.tsx`
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`
- `components/layout/PageContainer.tsx`

### Data/Content Files

- `lib/data/profile.ts`
- `lib/data/projects.ts`
- `lib/data/resume.ts`
- `lib/data/skills.ts`

---

## Important Constraints

- Do not directly copy the reference website.
- Do not add fake metrics.
- Do not add fake projects.
- Do not use unlicensed font files.
- Do not add unnecessary dependencies.
- Do not break mobile layout.
- Do not hide important recruiter content behind visual effects.
- Keep the site professional enough to include on a resume.

---

## Open Questions

Track questions that need Bryan's input.

- None currently.

---

## Current Next Step

Continue with `codex/TASKS.md` Phase 5.1: audit existing project cards.
