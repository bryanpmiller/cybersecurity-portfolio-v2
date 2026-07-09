# 07 - Implementation Log

This document tracks changes, decisions, commands, issues, and phase updates.

`README.md` remains the source of truth. If this file conflicts with `README.md`, follow `README.md` and update this file.

Codex must update this file after each phase.

## Current Working Summary

- Current phase: Phase 13 - Final Review
- Current status: Complete
- Last completed phase: Phase 13 - Final Review
- Current blockers: None.
- Next recommended action: Redesign phases are complete; review the site locally or prepare for deployment.

## Design Decision Log

| Date/Phase | Decision | Reason | Files Affected |
|---|---|---|---|
| 2026-06-26 / Phase 1 | Treat current terminal, grid, dashboard, glow, and badge-heavy patterns as redesign targets, not as content problems. | The underlying metrics, projects, tools, and case-study narratives are strong and should be preserved while the presentation changes. | `docs/redesign/02_SITE_AUDIT.md`, `docs/redesign/README.md` |
| 2026-06-26 / Phase 1 | Recommend design-system work before homepage restructuring. | The dark-first global CSS and bright accent tokens drive many downstream template signals. | `docs/redesign/02_SITE_AUDIT.md`, `docs/redesign/README.md` |
| 2026-06-26 / Phase 2 | Preserve existing semantic color names while remapping them to a light-first muted palette. | This reduces churn across components and lets later phases focus on structure and copy instead of renaming every class. | `tailwind.config.ts`, `app/globals.css` |
| 2026-06-26 / Phase 2 | Keep the `terminal` card variant temporarily but render it as a neutral panel. | Later phases can rename/remove terminal references when they restructure affected sections; Phase 2 removes the visual styling now. | `components/ui/Card.tsx`, `components/sections/HeroSection.tsx`, `components/sections/RiskReductionDashboard.tsx`, `components/sections/ImpactMetricsStrip.tsx` |
| 2026-06-26 / Phase 2 refinement | Refine the active palette to beige `#DDD0C8` and dark grey `#323232`. | User preferred the referenced beige/dark-grey appearance; this keeps the restrained light-first direction while making the palette warmer and more distinctive. | `tailwind.config.ts`, `app/globals.css`, `docs/redesign/03_DESIGN_SYSTEM.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 2 refinement | Refine the active palette to cream `#FFFDF2` and black `#000000`. | User wanted to try a classic cream/black scheme. The palette should be used for a clean, sophisticated, timeless, content-forward feel: cream as the calm canvas, black as typography/CTA/proof anchor. | `tailwind.config.ts`, `app/globals.css`, `docs/redesign/03_DESIGN_SYSTEM.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 2 refinement | Add a muted color-wheel evidence palette on top of the cream/black base. | Warm analogous severity colors and cool complementary investigation/remediation colors restore meaning and contrast without breaking the elegant editorial base. | `tailwind.config.ts`, `docs/redesign/03_DESIGN_SYSTEM.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 2 refinement | Refine the active palette to blue shades, white, and red-violet. | User wanted to try pale blue, royal blue, and eggplant. The palette should feel polished, organized, professional, and dynamic while keeping evidence colors matched to the same blue/red-violet family. | `tailwind.config.ts`, `app/globals.css`, `docs/redesign/03_DESIGN_SYSTEM.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 2 refinement | Reserve pale blue for page atmosphere and shift repeated component fills to white/near-white. | User noted the light blue was too dominant in proof sections and pills. This keeps the selected palette while making the interface more elegant, professional, and less washed out. | `tailwind.config.ts`, `app/globals.css`, `docs/redesign/03_DESIGN_SYSTEM.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 2 refinement | Strengthen hero credential proof pills with white fill, stronger blue border, and tiny shadow. | User noted the credential pills were fading into the pale blue background. The update makes them read as intentional proof points without adding heavy color. | `components/sections/HeroSection.tsx`, `docs/redesign/03_DESIGN_SYSTEM.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 3 | Restructure the homepage around the approved editorial sequence. | The previous homepage blended proof, dashboards, resume highlights, and projects. The new structure makes the hiring-manager path clearer before deeper section redesign begins. | `app/page.tsx`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 7 | Rework homepage additional case studies into editorial case-study panels. | User wanted the supporting case-study cards to feel more like the new featured case-study section. The new layout removes decorative preview cards and gives each project title, role, summary, evidence, tools, and CTA in a matching structure. | `app/page.tsx`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 7 refinement | Preserve Problem / Outcome / Concepts in the new selected-project panels. | User liked the new look but wanted to keep the useful summary context from the prior cards. The refinement restores that content inside the editorial evidence panel. | `app/page.tsx`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 7 refinement | Rebalance selected-project panels into a stacked case-study preview. | Restoring Problem / Outcome / Concepts as a right-side rail created too much empty space and visual imbalance. Moving evidence into a horizontal band keeps the content while making each card read more evenly. | `app/page.tsx`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 7 refinement | Add explicit Tools labels to homepage case-study tool-chip rows. | User wanted the bottom tool lists labeled. The refinement improves scanability while keeping the tool chips restrained and professional. | `app/page.tsx`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 6/7 refinement | Remove the singular featured case study and make all projects featured case studies. | User wanted the featured case-study design to match the other project cards and requested the order Password Spray, The Buyer, Vulnerability Management, DISA. A unified list removes competing project treatments. | `app/page.tsx`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 4 | Rework the hero around direct risk-reduction positioning. | The previous hero still used live-signal and dashboard-like language. The updated hero starts with a clear analyst value proposition and a restrained evidence panel. | `components/sections/HeroSection.tsx`, `lib/data/profile.ts`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/06_CONTENT_AND_COPY.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 4 refinement | Remove the hero `100% critical reduction` proof badge. | User wanted the metric badge removed from the hero; the metric remains preserved for the proof/metrics phase instead of being repeated in the credential pill row. | `components/sections/HeroSection.tsx`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 4 refinement | Simplify the hero hierarchy and remove the proof-badge row. | User noted the hero felt extremely cluttered. Folding the role into the eyebrow and removing the credential badges keeps the direct GitHub button while giving the headline and paragraph more breathing room. | `components/sections/HeroSection.tsx`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 4 refinement | Keep credential pills, restore the role line, and reduce the oversized hero headline. | User wanted the credential-pill treatment kept and asked for Vulnerability Management and Security Analyst to return; the real issue was the massive header scale. | `components/sections/HeroSection.tsx`, `lib/data/profile.ts`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 4 refinement | Make the role the hero headline, move credential pills below the CTAs, and reduce hero button size. | User wanted the risk-reduction sentence rolled into the supporting copy, credential pills moved below the buttons, and the buttons made slightly smaller. | `components/sections/HeroSection.tsx`, `lib/data/profile.ts`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/06_CONTENT_AND_COPY.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 5 | Present metrics as executive proof points instead of dashboards. | The metrics are strong evidence, but dashboard framing, progress bars, and gamified stat cards were still reading like a cybersecurity template. | `app/page.tsx`, `components/sections/RiskReductionDashboard.tsx`, `components/sections/ImpactMetricsStrip.tsx`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/06_CONTENT_AND_COPY.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 4 refinement | Restore Bryan Miller as the H1 and move the role back below it. | User clarified that Vulnerability Management & Security Analyst should display as it did before, not as the massive H1. | `components/sections/HeroSection.tsx`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 4 refinement | Remove the generic hero eyebrow and soften the name color. | User wanted "Cybersecurity Portfolio" removed and Bryan Miller set to the same color as the supporting context paragraph. | `components/sections/HeroSection.tsx`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 8 | Replace the badge-heavy skills grid with four grouped skills panels. | Phase 8 calls for grouping skills by practical work area instead of showing long badge walls. The public-facing label should remain Skills. | `app/skills/page.tsx`, `components/sections/SkillsOverview.tsx`, `lib/data/skills.ts`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/06_CONTENT_AND_COPY.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 5 refinement | Scope the network security proof to RDP-related brute-force attempts. | User clarified that the result was a 100% reduction in RDP-related brute-force attempts, and the prior paragraph read like internal commentary instead of a professional summary. | `components/sections/ImpactMetricsStrip.tsx`, `lib/data/resume.ts`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/06_CONTENT_AND_COPY.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 8 refinement | Restore the public-facing Skills label and simplify the section summary. | User noted that "Capabilities" and the "A concise view..." summary sounded AI-written and not like a professional self-authored portfolio section. | `app/skills/page.tsx`, `components/sections/SkillsOverview.tsx`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/06_CONTENT_AND_COPY.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 9 | Replace the homepage resume-highlight cluster with a concise background narrative. | Phase 9 calls for a confident, grounded connection between USMC fire direction, operations leadership, cybersecurity education, and current hands-on security work without overexplaining the transition. | `app/page.tsx`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/06_CONTENT_AND_COPY.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 9 refinement | Refine the background wording and resolve the stale incomplete status note. | The implementation log still showed Phase 9 as incomplete because the background wording needed one more pass. The revised copy is more direct, less generic, and ties operations discipline to current security work. | `app/page.tsx`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/06_CONTENT_AND_COPY.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 9 grounding refinement | Ground the background section in specific Marine Corps and internship experience. | User clarified that fire direction control built pressure performance, data accuracy, small-team leadership, and systems training. Resume PDF confirms current Vulnerability Management & SecOps internship scope, including scanning/reporting, PowerShell remediation, DISA STIG, Defender detections, Sentinel dashboards, and NSG/firewall controls. | `app/page.tsx`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/06_CONTENT_AND_COPY.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Contact QA fix | Replace the invisible GitHub contact button content with a visible icon-and-text action. | The contact card used a white GitHub lockup image inside a light secondary button, making the button look empty. The new button uses the current-color GitHub mark and visible "View GitHub" text. | `app/contact/page.tsx`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 10 | Convert project detail pages into article-style case studies. | The previous project detail layout still read like proof widgets and side panels. Phase 10 required complete case-study structure, stronger readability, minimal badge use, and explicit hiring relevance across all project pages. | `components/sections/ProjectDetail.tsx`, `lib/data/projects.ts`, `docs/redesign/05_CASE_STUDY_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 10 refinement | Move hiring relevance near the top and make evidence links easier to access. | User wanted recruiters and hiring managers to see project importance immediately, requested consistent GitHub icons for every evidence link, and asked for evidence links to remain available while scrolling on desktop. | `components/sections/ProjectDetail.tsx`, `docs/redesign/05_CASE_STUDY_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 10 evidence-link polish | Make evidence-link buttons visually uniform and keep only Evidence Links sticky. | User noted the repository buttons looked jumbled and clarified that Case Study Focus should remain visible as normal context, but should not scroll with the sticky Evidence Links panel. Evidence-link buttons now use a fixed left GitHub icon column with centered text. | `components/sections/ProjectDetail.tsx`, `docs/redesign/05_CASE_STUDY_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Phase 10 project-index refinement | Refresh `/projects` to match the redesigned homepage project style. | User noted the dedicated projects page still used the old homepage card style. The page now uses a shared case-study card component, a restrained project review path, full-width numbered case-study panels, hiring relevance, tools, and GitHub evidence actions. | `app/projects/page.tsx`, `app/page.tsx`, `components/sections/ProjectCaseStudyCard.tsx`, `lib/data/projects.ts`, `docs/redesign/05_CASE_STUDY_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-26 / Design refinement | Add a mid-emphasis homepage case-study CTA and separate the navbar surfaces. | User liked the stronger `/projects` case-study CTA but wanted the homepage version less jarring than solid blue. The homepage now uses a light royal-blue featured CTA, while the navbar uses a pale-blue elevated header, distinct white nav group, blue-tinted border, and softer active state for better desktop/mobile separation. | `components/ui/Button.tsx`, `components/sections/ProjectCaseStudyCard.tsx`, `components/layout/Navbar.tsx`, `docs/redesign/03_DESIGN_SYSTEM.md`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-28 / Phase 11 | Remove stale template-signal implementation leftovers. | Phase 11 found unused old project-preview code and legacy naming from prior dashboard/badge/mint/terminal treatments. Removing or renaming those pieces keeps the implementation aligned with the professional redesign direction without changing approved content. | `app/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`, `app/resume/page.tsx`, `app/globals.css`, `components/sections/FeaturedProjects.tsx`, `components/sections/VulnerabilityReductionProof.tsx`, `components/sections/NetworkSecurityProof.tsx`, `components/sections/ProjectCaseStudyCard.tsx`, `components/sections/ProjectDetail.tsx`, `components/ui/Card.tsx`, `components/ui/Button.tsx`, `components/ui/ToolTag.tsx`, `lib/data/resume.ts`, `tailwind.config.ts`, `docs/redesign/02_SITE_AUDIT.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-28 / Phase 12 | Prioritize mobile tap targets and small-text contrast during QA. | Browser QA found no overflow, but mobile navigation/footer targets were smaller than comfortable touch size and remediation text was slightly low contrast for small labels. The fixes improve usability without changing the approved visual direction. | `components/layout/Navbar.tsx`, `components/layout/Footer.tsx`, `tailwind.config.ts`, `docs/redesign/03_DESIGN_SYSTEM.md`, `docs/redesign/08_QA_FINAL_REVIEW.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-28 / Phase 13 | Accept the redesign after final designer and hiring-manager review. | The final review found the site meets the redesign acceptance criteria: professional visual direction, clear proof points, credible case studies, honest scope, mobile readiness, and no remaining required fixes. | `docs/redesign/08_QA_FINAL_REVIEW.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-28 / Post-final refinement | Reorder the shared skills groups on the homepage and `/skills`. | The requested desktop order is Security Operations & Investigation with Vulnerability Management on the first row, then Hardening & Compliance with Automation / Scripting on the second row. The shared `skillGroups` data controls both pages, so one source change keeps them aligned. | `lib/data/skills.ts`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-28 / Post-final email contact | Add a visible recruiter-friendly email contact path. | The site is built for recruiters, so a visible direct email lowers contact friction. The contact page uses the cleaner recruiter-facing Gmail address, and the visible address now sits in the email card action area beside the Email button. | `lib/data/profile.ts`, `app/contact/page.tsx`, `components/layout/Footer.tsx`, `components/ui/Button.tsx`, `docs/redesign/08_QA_FINAL_REVIEW.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-28 / Post-final project tool refinement | List every project tool on homepage case-study cards. | The `+N more` chip hid relevant tools on compact homepage cards. Listing all tools keeps the evidence visible for recruiters while the project tool lists remain short enough to scan. | `components/sections/ProjectCaseStudyCard.tsx`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-28 / Post-final homepage hiring relevance | Add compact Hiring Relevance strips to homepage case-study cards. | Recruiters and hiring managers can scan role value faster when the homepage connects each project to the job need before they open the full case study. The compact strip reuses approved case-study copy without adding a heavy new section. | `components/sections/ProjectCaseStudyCard.tsx`, `docs/redesign/04_HOMEPAGE_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-06-28 / Post-final hiring relevance copy | Rewrite hiring relevance copy as project proof statements. | User noted that "teams need analysts who..." sounds like explaining hiring needs back to recruiters. The revised copy keeps the same information but frames each card around what the project demonstrates, with varied sentence openings. | `lib/data/projects.ts`, `docs/redesign/06_CONTENT_AND_COPY.md`, `docs/redesign/05_CASE_STUDY_REDESIGN.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-07-01 / Post-final evidence-link clarity | Label project GitHub evidence actions as full technical write-ups and add page-level guidance. | User clarified that the GitHub destination should read as the full write-up, not just a repository. The shared project detail page now tells readers near the top that the portfolio page is a hiring-review summary and repeats the full-write-up cue inside the Evidence Links panel. | `components/sections/ProjectDetail.tsx`, `docs/redesign/05_CASE_STUDY_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-07-01 / Post-final evidence-link casing | Use Title Case for all Evidence Links buttons. | User preferred each first letter capitalized after comparing the primary full-write-up action with supporting evidence links. The Evidence Links action stack now uses Title Case consistently. | `components/sections/ProjectDetail.tsx`, `lib/data/projects.ts`, `docs/redesign/05_CASE_STUDY_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-07-01 / Post-final README link alignment | Point primary project evidence links directly to GitHub README write-ups. | User wanted the project-page `Read Full Technical Write-Up` links to mimic the resume project links and land readers in the full write-up rather than at a generic repository root. Extracted resume PDF hyperlinks, verified all four README URLs return 200, and updated the shared project URLs. | `lib/data/projects.ts`, `docs/redesign/05_CASE_STUDY_REDESIGN.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-07-01 / Post-final resume path repair | Update the shared resume PDF URL to the new public asset filename. | User reported the Full Resume button on the Resume page was broken after replacing the resume PDF. The public asset is now `bryanpmiller_resume_public.pdf`, so the shared profile resume URL was updated from the old `Bryan_Miller_Resume.pdf` path. | `lib/data/profile.ts`, `docs/redesign/02_SITE_AUDIT.md`, `docs/redesign/08_QA_FINAL_REVIEW.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |
| 2026-07-09 / Post-final footer evidence badges | Keep security scan badges in the footer as quiet site-assurance evidence. | The badges support credibility but should not compete with case-study outcomes. A secondary footer row preserves the professional redesign direction while linking build, Semgrep, and TruffleHog evidence to the GitHub Actions security workflow. | `components/layout/Footer.tsx`, `docs/redesign/08_QA_FINAL_REVIEW.md`, `docs/redesign/README.md`, `docs/redesign/07_IMPLEMENTATION_LOG.md` |

## Phase Log

### Phase 1 - Site Audit

Status: Complete

Summary: Audited the current Next.js/Tailwind portfolio without editing website code. Identified the tech stack, key files and directories, template-like visual patterns, current strengths and weaknesses, content to preserve, content to rewrite, and recommended implementation order for the redesign.

Files changed:

- `docs/redesign/02_SITE_AUDIT.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw -LiteralPath docs/redesign/README.md`
- `Get-Content -Raw -LiteralPath AGENTS.md` (attempted; sandbox returned `CreateProcessWithLogonW failed: 1056`, user-provided AGENTS.md instructions were used)
- `Get-Content -Raw -LiteralPath docs/redesign/02_SITE_AUDIT.md`
- `Get-Content -Raw -LiteralPath docs/redesign/07_IMPLEMENTATION_LOG.md`
- `Get-ChildItem -LiteralPath docs/redesign | Select-Object -ExpandProperty Name` (attempted; sandbox returned `CreateProcessWithLogonW failed: 1056`)
- `Get-ChildItem -Force | Select-Object Mode,Length,Name`
- `rg --files`
- `Get-Content -Raw -LiteralPath package.json`
- `Get-Content -Raw -LiteralPath app/globals.css`
- `Get-Content -Raw -LiteralPath app/page.tsx`
- `Get-Content -Raw -LiteralPath tailwind.config.ts`
- `Get-Content -Raw -LiteralPath next.config.ts`
- `Get-Content -Raw -LiteralPath components/sections/HeroSection.tsx`
- `Get-Content -Raw -LiteralPath components/sections/RiskReductionDashboard.tsx`
- `Get-Content -Raw -LiteralPath components/sections/ImpactMetricsStrip.tsx`
- `Get-Content -Raw -LiteralPath components/sections/FeaturedProjects.tsx`
- `Get-Content -Raw -LiteralPath components/sections/SkillsOverview.tsx`
- `Get-Content -Raw -LiteralPath components/ui/Card.tsx`
- `Get-Content -Raw -LiteralPath components/ui/Button.tsx`
- `Get-Content -Raw -LiteralPath components/layout/Navbar.tsx`
- `Get-Content -Raw -LiteralPath components/layout/Footer.tsx`
- `Get-Content -Raw -LiteralPath components/sections/ProjectDetail.tsx`
- `Get-Content -Raw -LiteralPath components/ui/SectionHeader.tsx`
- `Get-Content -Raw -LiteralPath lib/data/profile.ts`
- `Get-Content -Raw -LiteralPath lib/data/resume.ts`
- `Get-Content -Raw -LiteralPath lib/data/projects.ts`
- `Get-Content -Raw -LiteralPath lib/data/skills.ts`
- `Get-Content -Raw -LiteralPath app/about/page.tsx`
- `Get-Content -Raw -LiteralPath app/projects/page.tsx`
- `Get-Content -Raw -LiteralPath app/contact/page.tsx`
- `Get-Content -Raw -LiteralPath app/resume/page.tsx`
- `Get-Content -Raw -LiteralPath app/skills/page.tsx`
- `rg -n "terminal|dashboard|grid|evidence|mint|cyan|glow|matrix|Access granted|cyber warrior|digital frontier|passionate|badge|font-mono|tracking-\[" app components lib tailwind.config.ts`
- `Get-ChildItem -Recurse -File -LiteralPath app\projects | Select-Object -ExpandProperty FullName`
- `git status --short`
- `Select-String -Path docs/redesign/README.md -Pattern "Phase 1" -Context 0,1`
- `git diff -- docs/redesign/README.md docs/redesign/02_SITE_AUDIT.md docs/redesign/07_IMPLEMENTATION_LOG.md`
- `Select-String -Path docs/redesign/README.md -Pattern "Phase 1" -Context 0,0`

Build/lint/type-check results: Not run because Phase 1 was documentation-only and no website code changed.

Issues/blockers: None.

### Phase 2 - Design System

Status: Complete

Summary: Refactored the visual foundation from dark/neon cyber styling toward a light-first, muted, professional system. Updated theme tokens, global typography utilities, page background, card/button/badge primitives, nav/footer shell, and reduced grid/glow/terminal overlays in the most visible shared sections.

Palette refinement: Updated the active Phase 2 palette from the cream/black trial to a blue shades, white, and red-violet direction using pale blue `#EFFAFD`, white/near-white surfaces, royal blue `#4A8BDF`, eggplant `#A0006D`, and a deeper blue `#243B8F` for accessible CTAs and focus states. Evidence colors now match the same system: eggplant for critical, violet-blue for high, royal blue for medium, deep blue for detection, and teal-blue for remediation. Pale blue is reserved mostly for page atmosphere so repeated component fills do not feel washed out.

Files changed:

- `tailwind.config.ts`
- `app/globals.css`
- `app/layout.tsx`
- `app/contact/page.tsx`
- `app/projects/page.tsx`
- `app/resume/page.tsx`
- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`
- `components/ui/Card.tsx`
- `components/ui/Button.tsx`
- `components/ui/Badge.tsx`
- `components/sections/HeroSection.tsx`
- `components/sections/RiskReductionDashboard.tsx`
- `components/sections/ImpactMetricsStrip.tsx`
- `components/sections/SkillsOverview.tsx`
- `components/sections/FeaturedProjects.tsx`
- `components/sections/ProjectDetail.tsx`
- `docs/redesign/03_DESIGN_SYSTEM.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw -LiteralPath AGENTS.md`
- `Get-Content -Raw -LiteralPath docs/redesign/README.md`
- `Get-Content -Raw -LiteralPath docs/redesign/03_DESIGN_SYSTEM.md`
- `Get-Content -Raw -LiteralPath docs/redesign/07_IMPLEMENTATION_LOG.md`
- `git status --short`
- `Get-Content -Raw -LiteralPath app/globals.css`
- `Get-Content -Raw -LiteralPath tailwind.config.ts`
- `Get-Content -Raw -LiteralPath components/ui/Card.tsx`
- `Get-Content -Raw -LiteralPath components/ui/Button.tsx`
- `Get-Content -Raw -LiteralPath components/ui/Badge.tsx`
- `Get-Content -Raw -LiteralPath components/layout/PageContainer.tsx`
- `Get-Content -Raw -LiteralPath components/layout/Navbar.tsx`
- `Get-Content -Raw -LiteralPath components/layout/Footer.tsx`
- `Get-Content -Raw -LiteralPath app/layout.tsx`
- `rg -n` searches for `text-white`, `shadow-[`, `linear-gradient`, `font-mono`, `tracking-[`, `terminal`, `dashboard`, `glow`, and prohibited copy patterns
- `npm run lint` (blocked by PowerShell script execution policy)
- `npm run build` (blocked by PowerShell script execution policy)
- `npx tsc --noEmit` (blocked by PowerShell script execution policy)
- `npm.cmd run lint`
- `npm.cmd run build`
- `npx.cmd tsc --noEmit`
- `npm.cmd run dev`
- `Invoke-WebRequest` route checks for homepage, secondary pages, and project pages
- Browser tool initialization attempted through Node REPL (blocked by sandbox metadata error)
- `Select-String -Path docs/redesign/README.md -Pattern "Phase 2" -Context 0,0`
- `npm.cmd run lint` after beige/dark-grey palette refinement
- `npm.cmd run build` after beige/dark-grey palette refinement
- `npx.cmd tsc --noEmit` after beige/dark-grey palette refinement
- `Invoke-WebRequest` route checks after beige/dark-grey palette refinement
- `npm.cmd run lint` after cream/black palette refinement
- `npm.cmd run build` after cream/black palette refinement
- `npx.cmd tsc --noEmit` after cream/black palette refinement
- `Invoke-WebRequest` route checks after cream/black palette refinement
- `npm.cmd run lint` after evidence palette refinement
- `npm.cmd run build` after evidence palette refinement
- `npx.cmd tsc --noEmit` after evidence palette refinement
- `Invoke-WebRequest` route checks after evidence palette refinement
- `npm.cmd run lint` after blue/red-violet palette refinement
- `npm.cmd run build` after blue/red-violet palette refinement
- `npx.cmd tsc --noEmit` after blue/red-violet palette refinement
- `Invoke-WebRequest` route checks after blue/red-violet palette refinement
- `npm.cmd run lint` after surface usage refinement
- `npm.cmd run build` after surface usage refinement
- `npx.cmd tsc --noEmit` after surface usage refinement
- `Invoke-WebRequest` route checks after surface usage refinement
- Browser tool initialization attempted after surface usage refinement
- `npm.cmd run lint` after hero proof pill refinement
- `npm.cmd run build` after hero proof pill refinement
- `npx.cmd tsc --noEmit` after hero proof pill refinement
- `Invoke-WebRequest` route checks after hero proof pill refinement
- Browser visual inspection after hero proof pill refinement

Build/lint/type-check results:

- Lint: Passed with `npm.cmd run lint`.
- Build: Passed with `npm.cmd run build`.
- Type check: Passed with `npx.cmd tsc --noEmit`.
- Palette refinement checks: Passed with `npm.cmd run lint`, `npm.cmd run build`, and `npx.cmd tsc --noEmit`.
- Palette refinement route check: Passed. Homepage, secondary pages, and all project detail routes returned HTTP 200 from `http://127.0.0.1:3000`.
- Cream/black palette checks: Passed with `npm.cmd run lint`, `npm.cmd run build`, and `npx.cmd tsc --noEmit`.
- Cream/black palette route check: Passed. Homepage, secondary pages, and all project detail routes returned HTTP 200 from `http://127.0.0.1:3000`.
- Evidence palette checks: Passed with `npm.cmd run lint`, `npm.cmd run build`, and `npx.cmd tsc --noEmit`.
- Evidence palette route check: Passed. Homepage, secondary pages, and all project detail routes returned HTTP 200 from `http://127.0.0.1:3000`.
- Blue/red-violet palette checks: Passed with `npm.cmd run lint`, `npm.cmd run build`, and `npx.cmd tsc --noEmit`.
- Blue/red-violet palette route check: Passed. Homepage, secondary pages, and all project detail routes returned HTTP 200 from `http://127.0.0.1:3000`.
- Surface usage refinement checks: Passed with `npm.cmd run lint`, `npm.cmd run build`, and `npx.cmd tsc --noEmit`.
- Surface usage refinement route check: Passed. Homepage, secondary pages, and all project detail routes returned HTTP 200 from `http://127.0.0.1:3000`.
- Surface usage browser screenshot check: Blocked. Browser bridge failed with missing sandbox metadata; local route, lint, build, and type verification passed.
- Hero proof pill refinement checks: Passed with `npm.cmd run lint`, `npm.cmd run build`, and `npx.cmd tsc --noEmit`.
- Hero proof pill route check: Passed. Homepage, secondary pages, and all project detail routes returned HTTP 200 from `http://127.0.0.1:3000`.
- Hero proof pill browser visual check: Passed. In-browser computed styles confirmed white pill backgrounds, stronger royal-blue borders, tiny shadows, corrected credential spelling, and zero console errors.
- Tests: Not run because no test script is defined in `package.json`.
- Local route check: Passed. All checked routes returned HTTP 200 from `http://127.0.0.1:3000`.

Issues/blockers: Earlier in-app browser screenshot verification was blocked by a browser tool sandbox metadata error. After the tool/runtime update, browser visual inspection succeeded for the hero proof pill refinement. Local route verification, lint, build, and type checks passed.

### Phase 3 - Homepage Structure

Status: Complete

Summary: Reorganized the homepage into the approved editorial hierarchy. The page now moves from hero to proof/impact, unified featured case studies, capabilities, background, and a closing contact CTA. Resume highlights were moved out of the proof section into background, and the project area now uses a single featured case-studies section.

Files changed:

- `app/page.tsx`
- `docs/redesign/04_HOMEPAGE_REDESIGN.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw docs/redesign/README.md`
- `Get-Content -Raw docs/redesign/04_HOMEPAGE_REDESIGN.md`
- `Get-Content -Raw docs/redesign/07_IMPLEMENTATION_LOG.md`
- `Get-Content -Raw app/page.tsx`
- `Get-Content -Raw components/sections/FeaturedProjects.tsx`
- `Get-Content -Raw components/sections/SkillsOverview.tsx`
- `Get-Content -Raw lib/data/profile.ts`
- `Get-Content -Raw lib/data/resume.ts`
- `Get-Content -Raw lib/data/projects.ts`
- `npm.cmd run lint`
- `npm.cmd run build`
- `npx.cmd tsc --noEmit`
- `Invoke-WebRequest` route checks
- Browser visual inspection of the hero, featured case study, background, and contact sections

Issues/blockers: None.

### Phase 4 - Hero Section

Status: Complete

Summary: Reworked the hero hierarchy so "Bryan Miller" is the controlled H1, the generic "Cybersecurity Portfolio" eyebrow is removed, the name color matches the supporting context paragraph, "Vulnerability Management & Security Analyst" displays below it as the role line, "Cybersecurity analyst focused on reducing operational risk." remains in the supporting copy, CTAs stay compact, the credential pills sit below the buttons, and the restrained portfolio evidence panel remains.

Files changed:

- `components/sections/HeroSection.tsx`
- `lib/data/profile.ts`
- `docs/redesign/04_HOMEPAGE_REDESIGN.md`
- `docs/redesign/06_CONTENT_AND_COPY.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw docs/redesign/README.md`
- `Get-Content -Raw docs/redesign/04_HOMEPAGE_REDESIGN.md`
- `Get-Content -Raw docs/redesign/06_CONTENT_AND_COPY.md`
- `Get-Content -Raw docs/redesign/07_IMPLEMENTATION_LOG.md`
- `Get-Content -Raw components/sections/HeroSection.tsx`
- `Get-Content -Raw lib/data/profile.ts`
- `npm.cmd run lint`
- `npm.cmd run build`
- `npx.cmd tsc --noEmit`
- `Invoke-WebRequest` route checks
- Browser visual inspection of the updated hero section
- `npm.cmd run lint` after removing the hero 100% critical-reduction badge
- `npx.cmd tsc --noEmit` after removing the hero 100% critical-reduction badge
- `npm.cmd run build` after removing the hero 100% critical-reduction badge
- `npm.cmd run lint` after simplifying the hero hierarchy
- `npx.cmd tsc --noEmit` after simplifying the hero hierarchy
- `npm.cmd run build` after simplifying the hero hierarchy
- Browser visual inspection after simplifying the hero hierarchy
- `npm.cmd run lint` after keeping credential pills, restoring the role line, and reducing hero headline scale
- `npm.cmd run build` after keeping credential pills, restoring the role line, and reducing hero headline scale
- `npx.cmd tsc --noEmit` after keeping credential pills, restoring the role line, and reducing hero headline scale
- `Invoke-WebRequest` route checks after keeping credential pills, restoring the role line, and reducing hero headline scale
- Browser visual inspection attempted after keeping credential pills, restoring the role line, and reducing hero headline scale
- `npm.cmd run lint` after hero copy/button/pill placement refinement
- `npm.cmd run build` after hero copy/button/pill placement refinement
- `npx.cmd tsc --noEmit` after hero copy/button/pill placement refinement
- `Invoke-WebRequest` route checks after hero copy/button/pill placement refinement
- Browser visual inspection attempted after hero copy/button/pill placement refinement
- `npm.cmd run lint` after restoring Bryan Miller as H1 and moving the role line below it
- `npm.cmd run build` after restoring Bryan Miller as H1 and moving the role line below it
- `npx.cmd tsc --noEmit` after restoring Bryan Miller as H1 and moving the role line below it
- `Invoke-WebRequest` route checks after restoring Bryan Miller as H1 and moving the role line below it
- `npm.cmd run lint` after removing the hero eyebrow and softening the name color
- `npm.cmd run build` after removing the hero eyebrow and softening the name color
- `npx.cmd tsc --noEmit` after removing the hero eyebrow and softening the name color
- `Invoke-WebRequest` route checks after removing the hero eyebrow and softening the name color

Issues/blockers: Browser visual inspection for the latest hero refinement was blocked by the `node_repl/js` sandbox metadata error. Lint, build, type check, and route checks passed.

### Phase 5 - Proof / Metrics

Status: Complete

Summary: Reworked the homepage proof area so the preserved security outcomes read as executive proof points rather than dashboard widgets. The section now uses exact numbers, short labels, and concise context for vulnerability reduction and RDP-related brute-force attempt reduction, with dashboard headings, progress bars, and gamified stat-card treatment removed.

Files changed:

- `app/page.tsx`
- `components/sections/RiskReductionDashboard.tsx`
- `components/sections/ImpactMetricsStrip.tsx`
- `lib/data/resume.ts`
- `docs/redesign/04_HOMEPAGE_REDESIGN.md`
- `docs/redesign/06_CONTENT_AND_COPY.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Select-String -Path AGENTS.md -Pattern "Required Redesign Workflow|Source of Truth Hierarchy|Current Redesign Goal|Documentation Update Rules" -Context 0,12`
- `Select-String -Path docs/redesign/README.md -Pattern "Phase 4|Phase 5|Phase 6|Phase 7|Phase 8" -Context 0,2`
- `Get-Content docs/redesign/04_HOMEPAGE_REDESIGN.md | Select-Object -Skip 140 -First 120`
- `Get-Content docs/redesign/07_IMPLEMENTATION_LOG.md | Select-Object -First 220`
- `Get-Content components/sections/RiskReductionDashboard.tsx`
- `Get-Content components/sections/ImpactMetricsStrip.tsx`
- `Get-Content app/page.tsx`
- `Select-String -Path lib/data/resume.ts -Pattern "vulnerabilityReductionStats|networkSecurityStats|impactMetrics" -Context 0,80`
- `Get-Content components/ui/Card.tsx`
- `Get-Content components/ui/Reveal.tsx`
- `Select-String -Path docs/redesign/06_CONTENT_AND_COPY.md -Pattern "Proof|Metrics|100%|92%|88%" -Context 2,8`
- `git status --short`
- `Select-String -Path tailwind.config.ts -Pattern "colors|text|surface|ink|slate|evidence|severity|remediation|line" -Context 0,40`
- `Select-String -Path app/globals.css -Pattern "heading-text|section-title|panel-title|body-copy|supporting-copy|compact-copy|eyebrow-text|stat-label|badge-text" -Context 0,5`
- `npm.cmd run lint`
- `npm.cmd run build`
- `npx.cmd tsc --noEmit`
- `Invoke-WebRequest` route checks for homepage, secondary pages, and project pages
- Browser visual inspection attempted through Node REPL
- `npm.cmd run lint` after RDP brute-force proof wording refinement
- `npm.cmd run build` after RDP brute-force proof wording refinement
- `npx.cmd tsc --noEmit` after RDP brute-force proof wording refinement
- `Invoke-WebRequest` route checks after RDP brute-force proof wording refinement

Issues/blockers: Browser visual inspection was blocked by the browser tool sandbox metadata error. Local lint, build, type check, and route verification passed.

### Phase 6 - Featured Case Study

Status: Complete

Summary: Removed the separate one-project featured case-study section and made all four homepage projects use the same featured case-study card treatment.

Files changed:

- `app/page.tsx`
- `docs/redesign/04_HOMEPAGE_REDESIGN.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw docs/redesign/README.md`
- `Get-Content -Raw docs/redesign/04_HOMEPAGE_REDESIGN.md`
- `Get-Content -Raw docs/redesign/07_IMPLEMENTATION_LOG.md`
- `Get-Content -Raw app/page.tsx`
- `Get-Content -Raw lib/data/projects.ts`
- `npm.cmd run lint` after unifying featured case studies
- `npm.cmd run build` after unifying featured case studies
- `npx.cmd tsc --noEmit` after unifying featured case studies
- `Invoke-WebRequest` route checks after unifying featured case studies
- Browser visual inspection after unifying featured case studies

Issues/blockers: None.

### Phase 7 - Selected Projects

Status: Complete

Summary: Reworked the homepage project area from the older project-card grid and separate featured case study into a unified featured case-study list. Projects now appear in this order: Password Spray, The Buyer, Vulnerability Management, and DISA. Each project has a role label, title, summary, a balanced horizontal Problem / Outcome / Concepts evidence band, labeled grouped tools, and a direct case-study CTA.

Files changed:

- `app/page.tsx`
- `docs/redesign/04_HOMEPAGE_REDESIGN.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw docs/redesign/README.md`
- `Get-Content -Raw docs/redesign/04_HOMEPAGE_REDESIGN.md`
- `Get-Content -Raw docs/redesign/07_IMPLEMENTATION_LOG.md`
- `Get-Content -Raw app/page.tsx`
- `Get-Content -Raw lib/data/projects.ts`
- `npm.cmd run lint`
- `npm.cmd run build`
- `npx.cmd tsc --noEmit`
- `Invoke-WebRequest` route checks
- Browser visual inspection of the selected-projects section
- Browser layout metric check for selected-project card overflow
- `npm.cmd run lint` after restoring Problem / Outcome / Concepts context
- `npm.cmd run build` after restoring Problem / Outcome / Concepts context
- `npx.cmd tsc --noEmit` after restoring Problem / Outcome / Concepts context
- `Invoke-WebRequest` route checks after restoring Problem / Outcome / Concepts context
- Browser visual inspection after restoring Problem / Outcome / Concepts context
- `npm.cmd run lint` after rebalancing selected-project evidence layout
- `npm.cmd run build` after rebalancing selected-project evidence layout
- `npx.cmd tsc --noEmit` after rebalancing selected-project evidence layout
- `Invoke-WebRequest` route checks after rebalancing selected-project evidence layout
- Browser visual inspection after rebalancing selected-project evidence layout
- `npm.cmd run lint` after adding homepage tool labels
- `npm.cmd run build` after adding homepage tool labels
- `npx.cmd tsc --noEmit` after adding homepage tool labels
- `Invoke-WebRequest` route checks after adding homepage tool labels
- Browser visual inspection after adding homepage tool labels
- `npm.cmd run lint` after unifying all featured case-study cards
- `npm.cmd run build` after unifying all featured case-study cards
- `npx.cmd tsc --noEmit` after unifying all featured case-study cards
- `Invoke-WebRequest` route checks after unifying all featured case-study cards
- Browser visual inspection after unifying all featured case-study cards

Issues/blockers: None.

### Phase 8 - Capabilities

Status: Complete

Summary: Replaced the previous six-card skills grid and chip-heavy presentation with four grouped skills panels: Vulnerability Management, Hardening & Compliance, Security Operations & Investigation, and Automation / Scripting. The visible section label remains Skills, and the section summary now uses direct, professional wording instead of generic third-person portfolio copy.

Files changed:

- `components/sections/SkillsOverview.tsx`
- `app/skills/page.tsx`
- `lib/data/skills.ts`
- `docs/redesign/04_HOMEPAGE_REDESIGN.md`
- `docs/redesign/06_CONTENT_AND_COPY.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Path AGENTS.md`
- `Get-Content -Path docs/redesign/README.md`
- `Get-Content -Path docs/redesign/04_HOMEPAGE_REDESIGN.md`
- `Get-Content -Path docs/redesign/06_CONTENT_AND_COPY.md`
- `Get-Content -Path components/sections/SkillsOverview.tsx`
- `Get-Content -Path lib/data/skills.ts`
- `Get-Content -Path app/page.tsx`
- `Get-Content -Path app/skills/page.tsx`
- `Get-Content -Path app/resume/page.tsx`
- `Get-Content -Path components/ui/SectionHeader.tsx`
- `npm.cmd run lint`
- `npm.cmd run build`
- `npx.cmd tsc --noEmit`
- `Invoke-WebRequest` route checks
- `npm.cmd run lint` after restoring the public-facing Skills label
- `npm.cmd run build` after restoring the public-facing Skills label
- `npx.cmd tsc --noEmit` after restoring the public-facing Skills label
- `Invoke-WebRequest` route checks after restoring the public-facing Skills label

Issues/blockers: Browser visual inspection remains blocked by the browser tool sandbox metadata error. Lint, build, type check, and route checks passed.

### Phase 9 - Background

Status: Complete

Summary: Replaced the three-card resume highlight cluster on the homepage with a single restrained background section. The wording was refined to connect Marine Corps fire direction control, pressure performance, data accuracy, small-team leadership, systems training, Norwich University cybersecurity coursework, CompTIA Security+, and current Vulnerability Management & SecOps internship work.

Files changed:

- `app/page.tsx`
- `docs/redesign/04_HOMEPAGE_REDESIGN.md`
- `docs/redesign/06_CONTENT_AND_COPY.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Path AGENTS.md`
- `Get-Content -Path docs/redesign/README.md`
- `Get-Content -Path docs/redesign/04_HOMEPAGE_REDESIGN.md`
- `Get-Content -Path docs/redesign/06_CONTENT_AND_COPY.md`
- `Get-Content -Path app/page.tsx`
- `Get-Content -Path lib/data/profile.ts`
- `Get-Content -Path lib/data/resume.ts`
- `Get-Content -Path app/about/page.tsx`
- `rg -n "USMC|Marine|military|fire direction|operations|warehouse|leadership|Norwich|Security\+|internship|intern" .`
- `npm.cmd run lint`
- `npm.cmd run build`
- `npx.cmd tsc --noEmit`
- `Invoke-WebRequest` route checks
- `Get-Content -Path app/page.tsx`
- `Get-Content -Path package.json`
- `Select-String -Path docs/redesign/README.md -Pattern "Phase 9|Phase 10" -Context 0,0`
- `Select-String -Path docs/redesign/07_IMPLEMENTATION_LOG.md -Pattern "Phase 9" -Context 0,8`
- `Select-String -Path docs/redesign/04_HOMEPAGE_REDESIGN.md -Pattern "Phase 9|Background" -Context 0,8`
- `Select-String -Path docs/redesign/06_CONTENT_AND_COPY.md -Pattern "Phase 9|Background" -Context 0,8`
- `Get-Content -Path docs/redesign/04_HOMEPAGE_REDESIGN.md | Select-Object -Skip 532 -First 32`
- `Get-Content -Path docs/redesign/06_CONTENT_AND_COPY.md | Select-Object -Skip 136 -First 64`
- `Get-Content -Path docs/redesign/07_IMPLEMENTATION_LOG.md | Select-Object -Skip 462 -First 42`
- `npm.cmd run lint` after Phase 9 wording refinement
- `npx.cmd tsc --noEmit` after Phase 9 wording refinement
- `npm.cmd run build` after Phase 9 wording refinement
- `npm.cmd run start -- -p 3052 -H 127.0.0.1` for production route checks
- `Invoke-WebRequest` route checks after Phase 9 wording refinement
- `Get-NetTCPConnection` checks to confirm temporary verification ports were stopped
- `pdfplumber` extraction from `public/resume/Bryan_Miller_Resume.pdf` to verify current internship wording
- `npm.cmd run lint` after Phase 9 grounding refinement
- `npx.cmd tsc --noEmit` after Phase 9 grounding refinement
- `npm.cmd run build` after Phase 9 grounding refinement
- `npm.cmd run start -- -p 3054 -H 127.0.0.1` for production route checks after Phase 9 grounding refinement
- `Invoke-WebRequest` route checks after Phase 9 grounding refinement

Issues/blockers: Browser visual inspection remains blocked by the browser tool sandbox metadata error. Lint, build, type check, and production route checks passed after the wording and grounding refinements. An initial hidden dev-server route check on port 3050 did not become reachable, so production `next start` route checks were used instead.

### Phase 10 - Case Study Pages

Status: Complete

Summary: Reworked all four project detail pages through the shared `ProjectDetail` component. Each page now presents a professional article-style case study with role alignment, executive summary, recruiter-facing hiring relevance near the top, proof stats, problem, environment/tools, approach, evidence, result, what I learned, case-study focus context, and evidence links. The Case Study Focus card stays in normal page flow while the Evidence Links panel alone is sticky on desktop; each evidence-link button uses a fixed left GitHub icon column with centered text while staying in normal flow on mobile. Added grounded hiring-relevance copy to each project in `lib/data/projects.ts`. Refreshed `/projects` from the old animated project-preview grid into a homepage-aligned project index with a restrained review path, full-width numbered case-study cards, hiring relevance, tools, and GitHub evidence actions.

Files changed:

- `components/sections/ProjectDetail.tsx`
- `components/sections/ProjectCaseStudyCard.tsx`
- `app/page.tsx`
- `app/projects/page.tsx`
- `lib/data/projects.ts`
- `docs/redesign/05_CASE_STUDY_REDESIGN.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Path docs/redesign/README.md`
- `Get-Content -Path docs/redesign/05_CASE_STUDY_REDESIGN.md`
- `Get-Content -Path components/sections/ProjectDetail.tsx`
- `Get-Content -Path lib/data/projects.ts`
- `npm.cmd run lint`
- `npx.cmd tsc --noEmit`
- `git diff -- components/sections/ProjectDetail.tsx lib/data/projects.ts`
- `Get-Content -Path docs/redesign/07_IMPLEMENTATION_LOG.md | Select-Object -Skip 464 -First 80`
- `Get-Content -Path docs/redesign/07_IMPLEMENTATION_LOG.md | Select-Object -Last 70`
- `Select-String -Path docs/redesign/README.md -Pattern "Phase 10" -Context 0,1`
- `npm.cmd run lint` after Phase 10 documentation updates
- `npx.cmd tsc --noEmit` after Phase 10 documentation updates
- `npm.cmd run build` after Phase 10 documentation updates
- `npm.cmd run start -- -p 3057 -H 127.0.0.1` for Phase 10 production route checks
- `Invoke-WebRequest` route checks after Phase 10
- `npm.cmd run start -- -p 3058 -H 127.0.0.1` for Phase 10 browser visual checks
- In-app browser desktop check at 1280x900 for `/projects/password-spray-threat-hunt`
- In-app browser mobile check at 390x844 for `/projects/password-spray-threat-hunt`
- `npm.cmd run lint` after Phase 10 evidence-link refinement
- `npx.cmd tsc --noEmit` after Phase 10 evidence-link refinement
- `npm.cmd run build` after Phase 10 evidence-link refinement
- `npm.cmd run start -- -p 3061 -H 127.0.0.1` for Phase 10 evidence-link refinement route/browser checks
- `Invoke-WebRequest` route checks after Phase 10 evidence-link refinement
- In-app browser desktop sticky-sidebar check at 1280x900 for `/projects/vulnerability-management-program`
- In-app browser mobile normal-flow check at 390x844 for `/projects/vulnerability-management-program`
- `Get-Content -Raw app/projects/page.tsx`
- `Get-Content -Raw app/page.tsx`
- `Get-Content -Raw components/sections/FeaturedProjects.tsx`
- `Get-Content -Raw components/ui/Card.tsx`
- `Get-Content -Raw components/ui/Button.tsx`
- `npm.cmd run lint` after `/projects` index refinement
- `npx.cmd tsc --noEmit` after `/projects` index refinement
- `npm.cmd run build` after `/projects` index refinement
- `npm.cmd run start -- --hostname 127.0.0.1 --port 3064` for `/projects` route/browser checks
- `Invoke-WebRequest` route checks after `/projects` index refinement
- In-app browser desktop check at 1280x900 for `/projects`
- In-app browser mobile check at 390x844 for `/projects`

Issues/blockers: None currently. Lint, type check, build, production route checks, and desktop/mobile browser visual checks passed. The production build flipped `next-env.d.ts` to `.next/types/routes.d.ts`; it was restored to the existing dev route reference so generated-file noise stayed out of the change.

### Phase 11 - Template Signal Cleanup

Status: Complete

Summary: Searched active code for remaining template signals and removed stale implementation artifacts from earlier redesign phases. Deleted the unused old `FeaturedProjects` component, renamed live proof components away from dashboard language, removed unused card variants named `metric`, `project`, and `terminal`, renamed tool pills from Badge to ToolTag, replaced `badge-text` with `chip-text`, removed active `mint`/`cyan` aliases, changed remaining "dashboards" copy to "Sentinel workbooks," and removed non-code monospace styling from resume/case-study labels.

Files changed:

- `app/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/resume/page.tsx`
- `app/globals.css`
- `components/sections/FeaturedProjects.tsx` (removed)
- `components/sections/ImpactMetricsStrip.tsx` (renamed)
- `components/sections/NetworkSecurityProof.tsx`
- `components/sections/RiskReductionDashboard.tsx` (renamed)
- `components/sections/VulnerabilityReductionProof.tsx`
- `components/sections/HeroSection.tsx`
- `components/sections/ProjectCaseStudyCard.tsx`
- `components/sections/ProjectDetail.tsx`
- `components/ui/Badge.tsx` (renamed)
- `components/ui/ToolTag.tsx`
- `components/ui/Button.tsx`
- `components/ui/Card.tsx`
- `lib/data/resume.ts`
- `tailwind.config.ts`
- `docs/redesign/02_SITE_AUDIT.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw AGENTS.md`
- `Get-Content -Raw docs/redesign/README.md`
- `Get-Content -Raw docs/redesign/07_IMPLEMENTATION_LOG.md`
- `Get-Content -Raw docs/redesign/02_SITE_AUDIT.md`
- `rg -n` searches for `terminal`, `dashboard`, `grid`, `neon`, `glow`, `matrix`, prohibited copy, `badge`, `font-mono`, `cyan`, and `mint`
- `Get-Content` inspections of the affected component, page, data, and token files
- `Move-Item` to rename proof and tag component files
- `npm.cmd run lint`
- `npx.cmd tsc --noEmit`
- `npm.cmd run build`
- `npm.cmd run start -- -H 127.0.0.1 -p 3066` for production route checks
- `Invoke-WebRequest` route checks for `/`, `/about`, `/resume`, `/skills`, `/projects`, all four project detail routes, and `/contact`

Issues/blockers: None. Lint, type check, build, and production route checks passed.

### Phase 12 - Mobile / Accessibility / QA

Status: Complete

Summary: Completed Phase 12 responsive and accessibility QA. Browser checks covered desktop, tablet, and mobile widths across homepage, secondary pages, project index, and project detail pages. No horizontal overflow was found. Fixed mobile navigation and footer tap-target sizing, darkened the remediation color token for accessible small-text contrast, verified configured resume/GitHub/LinkedIn/contact paths, confirmed the resume PDF asset returns HTTP 200, and completed lint, type, build, console, and production route checks.

Files changed:

- `components/layout/Navbar.tsx`
- `components/layout/Footer.tsx`
- `tailwind.config.ts`
- `docs/redesign/03_DESIGN_SYSTEM.md`
- `docs/redesign/08_QA_FINAL_REVIEW.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw AGENTS.md`
- `Get-Content -Raw docs/redesign/README.md`
- `Get-Content -Raw docs/redesign/08_QA_FINAL_REVIEW.md`
- `Get-Content -Raw docs/redesign/07_IMPLEMENTATION_LOG.md`
- Browser responsive QA at 1280x900, 768x1024, and 390x844 across key routes
- Browser mobile tap-target verification after nav/footer fix
- Browser console error check on sampled mobile routes
- Contrast-ratio calculation for key text tokens
- `Test-Path public\resume\Bryan_Miller_Resume.pdf`
- `npm.cmd run lint`
- `npx.cmd tsc --noEmit`
- `npm.cmd run build`
- `npm.cmd run start -- -H 127.0.0.1 -p 3068` for production route checks
- `Invoke-WebRequest` route checks for `/`, secondary pages, all four project detail routes, `/contact`, and `/resume/Bryan_Miller_Resume.pdf`
- `rg -n` source/documentation sweeps for stale token/template references

Issues/blockers: Browser contrast script timed out after the responsive QA had already completed; token contrast was verified with a direct ratio calculation instead. Lint, type check, build, route checks, mobile overflow checks, tap-target checks, and sampled console checks passed.

### Phase 13 - Final Review

Status: Complete

Summary: Completed the final review from a senior frontend designer and cybersecurity hiring-manager perspective. The redesigned site now presents a restrained, light-first, professional portfolio with clear proof points, case-study-driven project pages, grounded cybersecurity copy, and honest scope. No required final fixes remain before acceptance. Optional future item is deployment-specific review.

Files changed:

- `docs/redesign/08_QA_FINAL_REVIEW.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw AGENTS.md`
- `Get-Content -Raw docs/redesign/README.md`
- `Get-Content -Raw docs/redesign/08_QA_FINAL_REVIEW.md`
- `Get-Content -Raw docs/redesign/07_IMPLEMENTATION_LOG.md`
- `rg -n` final source sweep for prohibited copy, unsupported template language, dashboard/terminal/neon/matrix leftovers, and stale accent names
- `Get-Content` inspections of homepage, hero, case-study card, project detail, and project data files
- `npm.cmd run lint`
- `npx.cmd tsc --noEmit`
- `npm.cmd run build`
- `npm.cmd run start -- -H 127.0.0.1 -p 3069` for final production route checks
- `Invoke-WebRequest` route checks for `/`, secondary pages, all four project detail routes, `/contact`, and `/resume/Bryan_Miller_Resume.pdf`

Issues/blockers: None. Final lint, type check, build, and production route checks passed.

### Post-Final Skills Order Refinement

Status: Complete

Summary: Reordered the shared skills groups so the homepage and `/skills` page display Security Operations & Investigation, Vulnerability Management, Hardening & Compliance, and Automation / Scripting in the requested sequence.

Files changed:

- `lib/data/skills.ts`
- `docs/redesign/04_HOMEPAGE_REDESIGN.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw docs/redesign/README.md`
- `Get-Content` inspections of Phase 8 documentation and skills implementation files
- `npm.cmd run lint`
- `npx.cmd tsc --noEmit`
- `npm.cmd run build`
- `npm.cmd run start -- -H 127.0.0.1 -p 3070` for production route checks
- `Invoke-WebRequest` route checks for `/` and `/skills`

Issues/blockers: None.

### Post-Final Email Contact Refinement

Status: Complete

Summary: Added a visible recruiter-friendly email contact path using `bryan.p.miller7@gmail.com`. The contact page now leads with an email card that displays the address beside the Email button and opens a `mailto:` link, the footer includes an Email link, and the shared button component handles `mailto:` links as native anchors.

Files changed:

- `lib/data/profile.ts`
- `app/contact/page.tsx`
- `components/layout/Footer.tsx`
- `components/ui/Button.tsx`
- `docs/redesign/08_QA_FINAL_REVIEW.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw docs/redesign/README.md`
- `rg -n` email/contact source search
- `Get-Content` inspections of contact, footer, profile, button, and QA documentation
- `npm.cmd run lint`
- `npx.cmd tsc --noEmit`
- `npm.cmd run build`
- `npm.cmd run start -- -H 127.0.0.1 -p 3071` for production route checks
- `Invoke-WebRequest` route checks for `/contact`
- Moved the visible contact email into the Email card action row beside the Email button

Issues/blockers: None.

### Post-Final Project Tool Refinement

Status: Complete

Summary: Removed the homepage project-card tool limit so compact case-study cards list every project tool instead of showing `+1 more` or `+2 more`. The shared project card now maps the full `project.tools` array for both homepage and `/projects` cards.

Files changed:

- `components/sections/ProjectCaseStudyCard.tsx`
- `docs/redesign/04_HOMEPAGE_REDESIGN.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw docs/redesign/README.md`
- `rg -n` search for `+ more`, tool slicing, and project tool rendering
- `Get-Content` inspections of `ProjectCaseStudyCard`, homepage, projects page, and redesign docs
- `npm.cmd run lint`
- `npx.cmd tsc --noEmit`
- `npm.cmd run build`
- `npm.cmd run start -- -H 127.0.0.1 -p 3075` for production route checks
- `Invoke-WebRequest` route checks for `/` and `/projects`

Issues/blockers: None.

### Post-Final Homepage Hiring Relevance Refinement

Status: Complete

Summary: Added compact Hiring Relevance strips to homepage case-study cards using the existing `project.caseStudy.hiringRelevance` copy. The `/projects` page keeps the same shared content with the fuller expanded card styling.

Files changed:

- `components/sections/ProjectCaseStudyCard.tsx`
- `docs/redesign/04_HOMEPAGE_REDESIGN.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw docs/redesign/README.md`
- `Get-Content` inspections of `ProjectCaseStudyCard`, homepage section, project data, and redesign docs
- `npm.cmd run lint`
- `npx.cmd tsc --noEmit`
- `npm.cmd run build`
- `npm.cmd run start -- -H 127.0.0.1 -p 3076` for production route checks
- `Invoke-WebRequest` route checks for `/` and `/projects`

Issues/blockers: None.

### Post-Final Hiring Relevance Copy Refinement

Status: Complete

Summary: Rewrote the hiring relevance copy for all four projects so each card reads as a concise proof statement about what the project demonstrates. The revised wording avoids repeatedly telling recruiters what teams need and varies the sentence openings across projects.

Files changed:

- `lib/data/projects.ts`
- `docs/redesign/06_CONTENT_AND_COPY.md`
- `docs/redesign/05_CASE_STUDY_REDESIGN.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw docs/redesign/README.md`
- `Select-String` inspections of hiring relevance copy and implementation log entries
- `Get-Content` inspections of content/copy and case-study redesign documentation
- `npm.cmd run lint`
- `npx.cmd tsc --noEmit`
- `npm.cmd run build`
- `npm.cmd run start -- -H 127.0.0.1 -p 3077` for production route checks
- `Invoke-WebRequest` route checks for `/` and `/projects`

Issues/blockers: None.

### Post-Final Evidence-Link Clarity Refinement

Status: Complete

Summary: Updated the shared project detail page so the Evidence Links GitHub action says `Read Full Technical Write-Up` and added two clear cues: a near-top note explaining that the portfolio page is a hiring-review summary, and helper copy in the Evidence Links panel that points readers to the full write-up and supporting evidence.

Files changed:

- `components/sections/ProjectDetail.tsx`
- `docs/redesign/05_CASE_STUDY_REDESIGN.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw docs/redesign/README.md`
- `rg -n` search for repository/write-up evidence wording
- `Get-Content` inspections of `ProjectDetail`, case-study documentation, and `package.json`
- `npm.cmd run lint`
- `npx.cmd tsc --noEmit`
- `npm.cmd run build`

Issues/blockers: None.

### Post-Final Evidence-Link Casing Refinement

Status: Complete

Summary: Updated all Evidence Links button labels to Title Case so they visually match `Read Full Technical Write-Up`. The project data keeps labels such as `Screenshot Evidence Folder`, `Validation Evidence Folder`, and `Remediation Scripts Repository`.

Files changed:

- `lib/data/projects.ts`
- `docs/redesign/05_CASE_STUDY_REDESIGN.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw docs/redesign/README.md`
- `rg -n` search for evidence-link labels
- `Get-Content` inspection of `lib/data/projects.ts`
- `npm.cmd run lint`
- `npx.cmd tsc --noEmit`
- `npm.cmd run build`

Issues/blockers: None.

### Post-Final README Link Alignment

Status: Complete

Summary: Updated all primary project `githubUrl` values so the `Read Full Technical Write-Up` action lands directly on each GitHub README full write-up. The resume PDF links were extracted with PyMuPDF; the first three resume project links already pointed to `blob/main/README.md`, while the DISA resume link pointed to the repository root. The site now uses direct README URLs for all four projects.

Files changed:

- `lib/data/projects.ts`
- `docs/redesign/05_CASE_STUDY_REDESIGN.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw docs/redesign/README.md`
- `Get-Content` inspection of the PDF skill instructions
- PyMuPDF hyperlink extraction from `C:\Users\pcgam\OneDrive\Desktop\Working Resume\bryanpmiller_resume_public.pdf`
- `curl.exe` checks for the four GitHub README URLs
- `npm.cmd run lint`
- `npx.cmd tsc --noEmit`
- `npm.cmd run build`

Issues/blockers: None.

### Post-Final Resume Path Repair

Status: Complete

Summary: Fixed the broken Full Resume button by updating the shared resume URL in `lib/data/profile.ts` to `/resume/bryanpmiller_resume_public.pdf`, matching the current PDF under `public/resume/`. This repairs the Resume page button and every other component that uses the shared resume path.

Files changed:

- `lib/data/profile.ts`
- `docs/redesign/02_SITE_AUDIT.md`
- `docs/redesign/08_QA_FINAL_REVIEW.md`
- `docs/redesign/README.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content -Raw docs/redesign/README.md`
- `rg -n` search for resume path references
- `Get-ChildItem -Recurse public` to confirm the current PDF asset name
- `Test-Path public\resume\bryanpmiller_resume_public.pdf`
- `npm.cmd run lint`
- `npx.cmd tsc --noEmit`
- `npm.cmd run build`

Issues/blockers: None.

### Post-Final Footer Evidence Badges

Status: Complete

Summary: Added a compact footer badge row for the DevSecOps build, Semgrep SAST, and TruffleHog secret scanning evidence. The badges are visually secondary, retain accessible labels, preserve mobile tap targets, and link to the GitHub Actions security workflow evidence page.

Files changed:

- `components/layout/Footer.tsx`
- `docs/redesign/README.md`
- `docs/redesign/08_QA_FINAL_REVIEW.md`
- `docs/redesign/07_IMPLEMENTATION_LOG.md`

Commands run:

- `Get-Content` inspections of redesign source-of-truth docs, QA notes, implementation log, footer component, package scripts, and workflow file
- `npm.cmd run lint`
- `npx.cmd tsc --noEmit`
- `npm.cmd run build`

Verification:

- Lint passed after adding a scoped `@next/next/no-img-element` suppression for external SVG status badges.
- Type check passed.
- Production build passed and prerendered all app routes.

Issues/blockers: None.

## Commands and Results

| Command | Purpose | Result | Notes |
|---|---|---|---|
| `Get-Content -Raw -LiteralPath docs/redesign/README.md` | Read redesign source of truth | Completed | Required before Phase 1 work |
| `Get-Content -Raw -LiteralPath AGENTS.md` | Read repo instructions from disk | Failed | Sandbox returned `CreateProcessWithLogonW failed: 1056`; user-provided AGENTS.md instructions were available in the session |
| `Get-Content -Raw -LiteralPath docs/redesign/02_SITE_AUDIT.md` | Read Phase 1 owner file | Completed | File was a blank audit template |
| `Get-Content -Raw -LiteralPath docs/redesign/07_IMPLEMENTATION_LOG.md` | Read implementation log | Completed | File was a blank log template |
| `rg --files` | Inventory repository files | Completed | Identified app, components, data, docs, public assets, and config files |
| `Get-Content` inspections across app/components/lib/config files | Audit current implementation | Completed | Identified tech stack, content model, template signals, and preserve/rewrite targets |
| `rg -n "terminal|dashboard|grid|evidence|mint|cyan|glow|matrix|Access granted|cyber warrior|digital frontier|passionate|badge|font-mono|tracking-\[" app components lib tailwind.config.ts` | Search for redesign signals and prohibited/template-like copy | Completed | Found terminal/dashboard/grid/badge/mono/accent patterns; did not find obvious "Access granted" style slogans |
| `git status --short` | Check working tree before documentation edits | Completed | No pre-existing changes were reported |
| `git diff -- docs/redesign/README.md docs/redesign/02_SITE_AUDIT.md docs/redesign/07_IMPLEMENTATION_LOG.md` | Verify documentation-only diff | Completed | Confirmed changes are limited to redesign docs |
| `Select-String -Path docs/redesign/README.md -Pattern "Phase 1" -Context 0,0` | Verify Phase 1 status board update | Completed | Phase 1 is marked complete |
| Build/lint/type checks | Verification | Not run | No website code changed in Phase 1 |
| `Get-Content -Raw -LiteralPath AGENTS.md` | Read repo instructions from disk | Completed | Required before Phase 2 redesign work |
| `Get-Content -Raw -LiteralPath docs/redesign/README.md` | Read redesign source of truth | Completed | Confirmed Phase 2 was next |
| `Get-Content -Raw -LiteralPath docs/redesign/03_DESIGN_SYSTEM.md` | Read Phase 2 owner file | Completed | File was a blank implementation template |
| `Get-Content` inspections across global style, Tailwind, layout, and UI primitive files | Inspect design-system implementation points | Completed | Identified token, card, button, badge, nav, footer, and section-overlay work |
| `rg -n` searches for hard-coded styling and template signals | Locate remaining contrast/glow/grid/terminal patterns | Completed | Used to target light-theme contrast fixes and reduce glow/grid treatment |
| `npm run lint`, `npm run build`, `npx tsc --noEmit` | Initial verification attempt | Blocked | PowerShell execution policy blocked `.ps1` shims |
| `npm.cmd run lint` | Lint verification | Passed | ESLint completed successfully |
| `npm.cmd run build` | Production build verification | Passed | Next.js build completed successfully and prerendered all routes |
| `npx.cmd tsc --noEmit` | Type-only verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run dev` | Start local dev server | Passed | Dev server available at `http://127.0.0.1:3000` |
| `Invoke-WebRequest` route checks | Local route verification | Passed | `/`, `/about`, `/resume`, `/projects`, `/skills`, `/contact`, and all project detail routes returned HTTP 200 |
| Browser tool initialization through Node REPL | Screenshot/visual browser verification | Blocked | Tool failed with sandbox metadata error; route checks were completed instead |
| `npm.cmd run lint` | Palette refinement lint verification | Passed | Completed after switching to beige/dark-grey palette |
| `npm.cmd run build` | Palette refinement build verification | Passed | Completed after switching to beige/dark-grey palette |
| `npx.cmd tsc --noEmit` | Palette refinement type verification | Passed | Completed after switching to beige/dark-grey palette |
| `Invoke-WebRequest` route checks | Palette refinement route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| `npm.cmd run lint` | Cream/black palette lint verification | Passed | Completed after switching to cream/black palette |
| `npm.cmd run build` | Cream/black palette build verification | Passed | Completed after switching to cream/black palette |
| `npx.cmd tsc --noEmit` | Cream/black palette type verification | Passed | Completed after switching to cream/black palette |
| `Invoke-WebRequest` route checks | Cream/black palette route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| `npm.cmd run lint` | Evidence palette lint verification | Passed | Completed after adding muted color-wheel evidence colors |
| `npm.cmd run build` | Evidence palette build verification | Passed | Completed after adding muted color-wheel evidence colors |
| `npx.cmd tsc --noEmit` | Evidence palette type verification | Passed | Completed after adding muted color-wheel evidence colors |
| `Invoke-WebRequest` route checks | Evidence palette route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| `npm.cmd run lint` | Blue/red-violet palette lint verification | Passed | Completed after switching to the blue shades, white, and red-violet palette |
| `npm.cmd run build` | Blue/red-violet palette build verification | Passed | Completed after switching to the blue shades, white, and red-violet palette |
| `npx.cmd tsc --noEmit` | Blue/red-violet palette type verification | Passed | Completed after switching to the blue shades, white, and red-violet palette |
| `Invoke-WebRequest` route checks | Blue/red-violet palette route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| `npm.cmd run lint` | Surface usage refinement lint verification | Passed | Completed after shifting repeated fills toward white/near-white |
| `npm.cmd run build` | Surface usage refinement build verification | Passed | Completed after shifting repeated fills toward white/near-white |
| `npx.cmd tsc --noEmit` | Surface usage refinement type verification | Passed | Completed after shifting repeated fills toward white/near-white |
| `Invoke-WebRequest` route checks | Surface usage refinement route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| Browser bridge initialization | Surface usage visual verification | Blocked | Browser tool failed with missing sandbox metadata; route and build verification completed instead |
| `npm.cmd run lint` | Hero proof pill refinement lint verification | Passed | Completed after strengthening hero credential pills |
| `npm.cmd run build` | Hero proof pill refinement build verification | Passed | Completed after strengthening hero credential pills |
| `npx.cmd tsc --noEmit` | Hero proof pill refinement type verification | Passed | Completed after strengthening hero credential pills |
| `Invoke-WebRequest` route checks | Hero proof pill refinement route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| Browser visual inspection | Hero proof pill visual verification | Passed | Computed styles confirmed white backgrounds, stronger royal-blue borders, tiny shadows, and zero console errors |
| `npm.cmd run lint` | Phase 3 lint verification | Passed | Completed after homepage structure update |
| `npm.cmd run build` | Phase 3 build verification | Passed | Completed after homepage structure update |
| `npx.cmd tsc --noEmit` | Phase 3 type verification | Passed | Completed after homepage structure update |
| `Invoke-WebRequest` route checks | Phase 3 route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| Browser visual inspection | Phase 3 visual verification | Passed | Confirmed the new section anchors, heading order, featured case study, background, and contact CTA render with zero console errors |
| `npm.cmd run lint` | Phase 7 lint verification | Passed | Completed after selected-projects refinement |
| `npm.cmd run build` | Phase 7 build verification | Passed | Completed after selected-projects refinement |
| `npx.cmd tsc --noEmit` | Phase 7 type verification | Passed | Completed after selected-projects refinement |
| `Invoke-WebRequest` route checks | Phase 7 route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| Browser visual inspection | Phase 7 visual verification | Passed | Confirmed three additional case-study panels, correct links, zero console errors, and no horizontal card overflow at the inspected viewport |
| `npm.cmd run lint` | Phase 7 summary-row refinement lint verification | Passed | Completed after restoring Problem / Outcome / Concepts rows |
| `npm.cmd run build` | Phase 7 summary-row refinement build verification | Passed | Completed after restoring Problem / Outcome / Concepts rows |
| `npx.cmd tsc --noEmit` | Phase 7 summary-row refinement type verification | Passed | Completed after restoring Problem / Outcome / Concepts rows |
| `Invoke-WebRequest` route checks | Phase 7 summary-row refinement route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| Browser visual inspection | Phase 7 summary-row refinement visual verification | Passed | Confirmed each selected-project panel has Problem, Outcome, and Concepts rows, no horizontal overflow, and zero console errors |
| `npm.cmd run lint` | Phase 7 balanced evidence layout lint verification | Passed | Completed after selected-project layout rebalance |
| `npm.cmd run build` | Phase 7 balanced evidence layout build verification | Passed | Completed after selected-project layout rebalance |
| `npx.cmd tsc --noEmit` | Phase 7 balanced evidence layout type verification | Passed | Completed after selected-project layout rebalance |
| `Invoke-WebRequest` route checks | Phase 7 balanced evidence layout route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| Browser visual inspection | Phase 7 balanced evidence layout visual verification | Passed | Desktop and mobile checks confirmed balanced evidence layout, no horizontal overflow, and zero console errors |
| `npm.cmd run lint` | Phase 7 tool-label refinement lint verification | Passed | Completed after adding explicit Tools labels to homepage case-study tool rows |
| `npm.cmd run build` | Phase 7 tool-label refinement build verification | Passed | Completed after adding explicit Tools labels to homepage case-study tool rows |
| `npx.cmd tsc --noEmit` | Phase 7 tool-label refinement type verification | Passed | Completed after adding explicit Tools labels to homepage case-study tool rows |
| `Invoke-WebRequest` route checks | Phase 7 tool-label refinement route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| Browser visual inspection | Phase 7 tool-label refinement visual verification | Passed | Covered by the latest selected-project desktop and mobile browser inspection |
| `npm.cmd run lint` | Phase 6/7 unified featured case studies lint verification | Passed | Completed after unifying all homepage project cards |
| `npm.cmd run build` | Phase 6/7 unified featured case studies build verification | Passed | Completed after unifying all homepage project cards |
| `npx.cmd tsc --noEmit` | Phase 6/7 unified featured case studies type verification | Passed | Completed after unifying all homepage project cards |
| `Invoke-WebRequest` route checks | Phase 6/7 unified featured case studies route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| Browser visual inspection | Phase 6/7 unified featured case studies visual verification | Passed | Desktop and mobile checks confirmed requested project order, no old singular project headings, no horizontal overflow, and zero console errors |
| `npm.cmd run lint` | Phase 4 hero lint verification | Passed | Completed after hero copy and panel refinement |
| `npm.cmd run build` | Phase 4 hero build verification | Passed | Completed after hero copy and panel refinement |
| `npx.cmd tsc --noEmit` | Phase 4 hero type verification | Passed | Completed after hero copy and panel refinement |
| `Invoke-WebRequest` route checks | Phase 4 hero route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| Browser visual inspection | Phase 4 hero visual verification | Passed | Desktop and mobile checks confirmed direct hero copy, simplified CTAs, removed live-signal language, no horizontal overflow, and zero console errors |
| `npm.cmd run lint` | Phase 4 hero badge refinement lint verification | Passed | Completed after removing the 100% critical-reduction hero badge |
| `npx.cmd tsc --noEmit` | Phase 4 hero badge refinement type verification | Passed | Completed after removing the 100% critical-reduction hero badge |
| `npm.cmd run build` | Phase 4 hero badge refinement build verification | Passed | Completed after removing the 100% critical-reduction hero badge |
| `npm.cmd run lint` | Phase 4 hero hierarchy refinement lint verification | Passed | Covered by latest hero refinement lint run |
| `npx.cmd tsc --noEmit` | Phase 4 hero hierarchy refinement type verification | Passed | Covered by latest hero refinement type check |
| `npm.cmd run build` | Phase 4 hero hierarchy refinement build verification | Passed | Covered by latest hero refinement build run |
| Browser visual inspection | Phase 4 hero hierarchy visual verification | Blocked | Browser tool failed with missing sandbox metadata during latest visual attempt |
| `npm.cmd run lint` | Phase 4 hero role-line refinement lint verification | Passed | Completed after keeping credential pills, restoring the role line, and reducing hero headline scale |
| `npm.cmd run build` | Phase 4 hero role-line refinement build verification | Passed | Completed after keeping credential pills, restoring the role line, and reducing hero headline scale |
| `npx.cmd tsc --noEmit` | Phase 4 hero role-line refinement type verification | Passed | Completed after keeping credential pills, restoring the role line, and reducing hero headline scale |
| `Invoke-WebRequest` route checks | Phase 4 hero role-line refinement route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| Browser visual inspection | Phase 4 hero role-line refinement visual verification | Blocked | Browser tool failed with missing sandbox metadata; route and build verification completed instead |
| `npm.cmd run lint` | Phase 4 hero copy/button/pill refinement lint verification | Passed | Completed after rolling the risk-reduction sentence into the supporting copy, shrinking hero CTAs, and moving credential pills below buttons |
| `npm.cmd run build` | Phase 4 hero copy/button/pill refinement build verification | Passed | Completed after rolling the risk-reduction sentence into the supporting copy, shrinking hero CTAs, and moving credential pills below buttons |
| `npx.cmd tsc --noEmit` | Phase 4 hero copy/button/pill refinement type verification | Passed | Completed after rolling the risk-reduction sentence into the supporting copy, shrinking hero CTAs, and moving credential pills below buttons |
| `Invoke-WebRequest` route checks | Phase 4 hero copy/button/pill refinement route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| Browser visual inspection | Phase 4 hero copy/button/pill refinement visual verification | Blocked | Browser tool failed with missing sandbox metadata; route and build verification completed instead |
| `npm.cmd run lint` | Phase 4 hero H1 correction lint verification | Passed | Completed after restoring Bryan Miller as H1 |
| `npm.cmd run build` | Phase 4 hero H1 correction build verification | Passed | Completed after restoring Bryan Miller as H1 |
| `npx.cmd tsc --noEmit` | Phase 4 hero H1 correction type verification | Passed | Completed after restoring Bryan Miller as H1 |
| `Invoke-WebRequest` route checks | Phase 4 hero H1 correction route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| `npm.cmd run lint` | Phase 4 hero eyebrow/color refinement lint verification | Passed | Completed after removing the hero eyebrow and matching the name color to the supporting copy |
| `npm.cmd run build` | Phase 4 hero eyebrow/color refinement build verification | Passed | Next.js production build completed and prerendered all routes |
| `npx.cmd tsc --noEmit` | Phase 4 hero eyebrow/color refinement type verification | Passed | Completed with no TypeScript errors |
| `Invoke-WebRequest` route checks | Phase 4 hero eyebrow/color refinement route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| `npm.cmd run lint` | Phase 5 proof/metrics lint verification | Passed | Completed after replacing dashboard-style proof components |
| `npm.cmd run build` | Phase 5 proof/metrics build verification | Passed | Next.js production build completed and prerendered all routes |
| `npx.cmd tsc --noEmit` | Phase 5 proof/metrics type verification | Passed | Completed with no TypeScript errors |
| `Invoke-WebRequest` route checks | Phase 5 proof/metrics route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| Browser visual inspection | Phase 5 proof/metrics visual verification | Blocked | Browser bridge failed before execution with missing `sandboxPolicy` metadata |
| `npm.cmd run lint` | Phase 8 capabilities lint verification | Passed | Completed after consolidating capabilities and redesigning the skills section |
| `npm.cmd run build` | Phase 8 capabilities build verification | Passed | Next.js production build completed and prerendered all routes |
| `npx.cmd tsc --noEmit` | Phase 8 capabilities type verification | Passed | Completed with no TypeScript errors; rerun after restoring `next-env.d.ts` also passed |
| `Invoke-WebRequest` route checks | Phase 8 capabilities route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| Browser visual inspection | Phase 8 capabilities visual verification | Blocked | Browser bridge remains blocked by sandbox metadata error; route and build verification completed instead |
| `npm.cmd run lint` | Phase 5 RDP brute-force wording refinement lint verification | Passed | Completed after correcting the network security proof copy |
| `npm.cmd run build` | Phase 5 RDP brute-force wording refinement build verification | Passed | Next.js production build completed and prerendered all routes |
| `npx.cmd tsc --noEmit` | Phase 5 RDP brute-force wording refinement type verification | Passed | Completed with no TypeScript errors; rerun after restoring `next-env.d.ts` also passed |
| `Invoke-WebRequest` route checks | Phase 5 RDP brute-force wording refinement route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| `npm.cmd run lint` | Phase 8 skills-label refinement lint verification | Passed | Completed after restoring the public-facing Skills label and simplifying the section summary |
| `npm.cmd run build` | Phase 8 skills-label refinement build verification | Passed | Next.js production build completed and prerendered all routes |
| `npx.cmd tsc --noEmit` | Phase 8 skills-label refinement type verification | Passed | Completed with no TypeScript errors; rerun after restoring `next-env.d.ts` also passed |
| `Invoke-WebRequest` route checks | Phase 8 skills-label refinement route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| `npm.cmd run lint` | Phase 9 background lint verification | Passed | Completed after replacing the homepage background section |
| `npm.cmd run build` | Phase 9 background build verification | Passed | Next.js production build completed and prerendered all routes |
| `npx.cmd tsc --noEmit` | Phase 9 background type verification | Passed | Completed with no TypeScript errors; rerun after restoring `next-env.d.ts` also passed |
| `Invoke-WebRequest` route checks | Phase 9 background route verification | Passed | Homepage, secondary pages, and all project detail routes returned HTTP 200 |
| `npm.cmd run lint` | Phase 9 wording refinement lint verification | Passed | Completed after refining the homepage background wording |
| `npx.cmd tsc --noEmit` | Phase 9 wording refinement type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Phase 9 wording refinement build verification | Passed | Next.js production build completed and prerendered all routes |
| `Invoke-WebRequest` route checks | Phase 9 wording refinement route verification | Passed | `/`, secondary pages, and all four project detail routes returned HTTP 200 from production `next start` on port 3052 |
| `npm.cmd run lint` | Phase 9 grounding refinement lint verification | Passed | Completed after grounding background wording in Marine Corps and internship experience |
| `npx.cmd tsc --noEmit` | Phase 9 grounding refinement type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Phase 9 grounding refinement build verification | Passed | Next.js production build completed and prerendered all routes |
| `Invoke-WebRequest` route checks | Phase 9 grounding refinement route verification | Passed | `/`, secondary pages, and all four project detail routes returned HTTP 200 from production `next start` on port 3054 |
| `npm.cmd run lint` | Contact GitHub button lint verification | Passed | Completed after replacing the invisible GitHub button content |
| `npx.cmd tsc --noEmit` | Contact GitHub button type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Contact GitHub button build verification | Passed | Next.js production build completed and prerendered all routes |
| `Invoke-WebRequest` route check | Contact GitHub button route verification | Passed | `/contact` returned HTTP 200 from production `next start` on port 3055 |
| `npm.cmd run lint` | Phase 10 case-study pages lint verification | Passed | Completed after redesigning shared project detail pages |
| `npx.cmd tsc --noEmit` | Phase 10 case-study pages type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Phase 10 case-study pages build verification | Passed | Next.js production build completed and prerendered all routes |
| `Invoke-WebRequest` route checks | Phase 10 case-study pages route verification | Passed | `/`, secondary pages, and all four project detail routes returned HTTP 200 from production `next start` on port 3057 |
| Browser visual inspection | Phase 10 desktop/mobile case-study visual verification | Passed | `/projects/password-spray-threat-hunt` had no horizontal overflow at 1280x900 or 390x844; required case-study sections were present after reveal animations settled |
| `npm.cmd run lint` | Phase 10 evidence-link refinement lint verification | Passed | Completed after updating evidence-link icons, hiring relevance order, and desktop sticky sidebar behavior |
| `npx.cmd tsc --noEmit` | Phase 10 evidence-link refinement type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Phase 10 evidence-link refinement build verification | Passed | Next.js production build completed and prerendered all routes |
| `Invoke-WebRequest` route checks | Phase 10 evidence-link refinement route verification | Passed | `/`, `/projects/vulnerability-management-program`, and `/projects/password-spray-threat-hunt` returned HTTP 200 from production `next start` on port 3061 |
| Browser visual inspection | Phase 10 evidence-link refinement visual verification | Passed | Desktop confirmed hiring relevance before Problem, all evidence links use GitHub SVG icons, sticky sidebar remains visible while scrolling, and mobile keeps sidebar/evidence links static with no horizontal overflow |
| `npm.cmd run lint` | Phase 10 `/projects` index refinement lint verification | Passed | Completed after replacing the old project-preview grid with shared case-study cards |
| `npx.cmd tsc --noEmit` | Phase 10 `/projects` index refinement type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Phase 10 `/projects` index refinement build verification | Passed | Next.js production build completed and prerendered all routes |
| `Invoke-WebRequest` route checks | Phase 10 `/projects` index refinement route verification | Passed | `/`, `/projects`, `/projects/password-spray-threat-hunt`, and `/projects/vulnerability-management-program` returned HTTP 200 from production `next start` on port 3064 |
| Browser visual inspection | Phase 10 `/projects` index refinement visual verification | Passed | Desktop and mobile `/projects` checks confirmed four case-study articles, four GitHub actions, no old preview-widget text, and no horizontal overflow |
| `npm.cmd run lint` | Design refinement lint verification | Passed | Completed after adding the featured CTA variant and navbar surface adjustment |
| `npx.cmd tsc --noEmit` | Design refinement type verification | Passed | Completed with no TypeScript errors after the CTA/nav updates |
| `npm.cmd run build` | Design refinement build verification | Passed | Next.js production build completed and prerendered all routes after the CTA/nav updates |
| `Invoke-WebRequest` route checks | Design refinement route verification | Passed | `/` and `/projects` returned HTTP 200 from production `next start` on port 3065 |
| Browser visual inspection | Design refinement visual verification | Passed | Desktop and mobile homepage checks confirmed the navbar surface separation, light-blue homepage case-study CTA, and no horizontal overflow |
| `rg -n` template-signal sweeps | Phase 11 source search | Completed | Searched active app/components/lib/theme code for dashboard, terminal, neon/glow, matrix, prohibited copy, badge, mono, cyan, and mint leftovers |
| `npm.cmd run lint` | Phase 11 template cleanup lint verification | Passed | Completed after removing/renaming stale template-signal implementation leftovers |
| `npx.cmd tsc --noEmit` | Phase 11 template cleanup type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Phase 11 template cleanup build verification | Passed | Next.js production build completed and prerendered all routes |
| `Invoke-WebRequest` route checks | Phase 11 template cleanup route verification | Passed | `/`, secondary pages, and all four project detail routes returned HTTP 200 from production `next start` on port 3066 |
| Browser responsive QA | Phase 12 desktop/tablet/mobile verification | Passed | Checked key routes at 1280x900, 768x1024, and 390x844; no horizontal overflow found |
| Browser mobile tap-target check | Phase 12 navigation/footer verification | Passed | After the fix, mobile nav links measured 44px tall and footer links measured 40px tall with no small nav/footer targets remaining |
| Browser console check | Phase 12 sampled console verification | Passed | No console errors reported on sampled mobile routes after the tap-target fix |
| Contrast-ratio calculation | Phase 12 token contrast verification | Passed | Key text tokens cleared AA on white; remediation now measures about 5.48:1 after darkening to `#1e6f9f` |
| `npm.cmd run lint` | Phase 12 QA lint verification | Passed | Completed after nav/footer and token fixes |
| `npx.cmd tsc --noEmit` | Phase 12 QA type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Phase 12 QA build verification | Passed | Next.js production build completed and prerendered all routes |
| `Invoke-WebRequest` route checks | Phase 12 QA production route verification | Passed | `/`, secondary pages, all four project detail routes, `/contact`, and the resume PDF returned HTTP 200 from production `next start` on port 3068 |
| `rg -n` final source sweep | Phase 13 prohibited-copy/template verification | Passed | No active app/components/lib matches found for prohibited copy or dashboard/terminal/neon/matrix/stale accent leftovers |
| `npm.cmd run lint` | Phase 13 final lint verification | Passed | Completed with no lint errors |
| `npx.cmd tsc --noEmit` | Phase 13 final type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Phase 13 final build verification | Passed | Next.js production build completed and prerendered all routes |
| `Invoke-WebRequest` route checks | Phase 13 final production route verification | Passed | `/`, secondary pages, all four project detail routes, `/contact`, and the resume PDF returned HTTP 200 from production `next start` on port 3069 |
| `npm.cmd run lint` | Post-final skills order lint verification | Passed | Completed with no lint errors |
| `npx.cmd tsc --noEmit` | Post-final skills order type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Post-final skills order build verification | Passed | Next.js production build completed and prerendered all routes |
| `Invoke-WebRequest` route checks | Post-final skills order production route verification | Passed | `/` and `/skills` returned HTTP 200 from production `next start` on port 3070 |
| `npm.cmd run lint` | Post-final email contact lint verification | Passed | Completed with no lint errors |
| `npx.cmd tsc --noEmit` | Post-final email contact type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Post-final email contact build verification | Passed | Next.js production build completed and prerendered all routes |
| `Invoke-WebRequest` route checks | Post-final email contact production route verification | Passed | `/contact` returned HTTP 200 from production `next start` on port 3071 |
| `npm.cmd run lint` | Email card layout refinement lint verification | Passed | Completed after moving the visible email beside the Email button |
| `npx.cmd tsc --noEmit` | Email card layout refinement type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Email card layout refinement build verification | Passed | Next.js production build completed and prerendered all routes |
| `Invoke-WebRequest` route checks | Email card layout refinement production route verification | Passed | `/contact` returned HTTP 200 and rendered `bryan.p.miller7@gmail.com` plus its `mailto:` link |
| `npm.cmd run lint` | Project tool refinement lint verification | Passed | Completed after removing the project-card tool limit |
| `npx.cmd tsc --noEmit` | Project tool refinement type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Project tool refinement build verification | Passed | Next.js production build completed and prerendered all routes |
| `Invoke-WebRequest` route checks | Project tool refinement production route verification | Passed | `/` and `/projects` returned HTTP 200 from production `next start` on port 3075 |
| `npm.cmd run lint` | Homepage hiring relevance lint verification | Passed | Completed after adding compact Hiring Relevance strips to homepage cards |
| `npx.cmd tsc --noEmit` | Homepage hiring relevance type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Homepage hiring relevance build verification | Passed | Next.js production build completed and prerendered all routes |
| `Invoke-WebRequest` route checks | Homepage hiring relevance production route verification | Passed | `/` and `/projects` returned HTTP 200 from production `next start` on port 3076 |
| `npm.cmd run lint` | Hiring relevance copy refinement lint verification | Passed | Completed after rewriting project hiring relevance copy |
| `npx.cmd tsc --noEmit` | Hiring relevance copy refinement type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Hiring relevance copy refinement build verification | Passed | Next.js production build completed and prerendered all routes |
| `Invoke-WebRequest` route checks | Hiring relevance copy refinement production route verification | Passed | `/` and `/projects` returned HTTP 200 from production `next start` on port 3077 |
| `npm.cmd run lint` | Evidence-link clarity lint verification | Passed | Completed after updating shared project detail evidence-link copy |
| `npx.cmd tsc --noEmit` | Evidence-link clarity type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Evidence-link clarity build verification | Passed | Next.js production build completed and prerendered all routes |
| `npm.cmd run lint` | Evidence-link casing lint verification | Passed | Completed after aligning Evidence Links labels to Title Case |
| `npx.cmd tsc --noEmit` | Evidence-link casing type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Evidence-link casing build verification | Passed | Next.js production build completed and prerendered all routes |
| PyMuPDF hyperlink extraction | Resume project link inspection | Passed | Extracted eight links from the resume PDF, including four project links under Projects |
| `curl.exe` README URL checks | Verify direct GitHub README targets | Passed | All four direct README URLs returned HTTP 200 |
| `npm.cmd run lint` | README link alignment lint verification | Passed | Completed after updating project URLs |
| `npx.cmd tsc --noEmit` | README link alignment type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | README link alignment build verification | Passed | Next.js production build completed and prerendered all routes |
| `Test-Path public\resume\bryanpmiller_resume_public.pdf` | Resume PDF asset verification | Passed | Current public resume PDF exists at the shared profile URL target |
| `npm.cmd run lint` | Resume path repair lint verification | Passed | Completed after updating the shared resume URL |
| `npx.cmd tsc --noEmit` | Resume path repair type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Resume path repair build verification | Passed | Next.js production build completed and prerendered all routes |
| `npm.cmd run lint` | Footer evidence badge lint verification | Passed | Completed after adding the restrained footer security badge row |
| `npx.cmd tsc --noEmit` | Footer evidence badge type verification | Passed | Completed with no TypeScript errors |
| `npm.cmd run build` | Footer evidence badge build verification | Passed | Next.js production build completed and prerendered all routes |

## Files Changed Index

| File | Phase | Summary |
|---|---|---|
| `docs/redesign/02_SITE_AUDIT.md` | Phase 1 | Filled in the site audit, technical inventory, template-signal findings, preservation/rewrite guidance, and implementation order. |
| `docs/redesign/README.md` | Phase 1 | Marked Phase 1 complete in the phase status board. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Phase 1 | Logged Phase 1 summary, decisions, files changed, commands run, and verification status. |
| `tailwind.config.ts` | Phase 2 | Replaced dark/neon tokens with a blue/white/red-violet light-first palette, local slate text scale, matched evidence colors, and softer shadows. |
| `app/globals.css` | Phase 2 | Switched to pale blue/white light color scheme, removed global cyber grid texture, reduced glow effects, and updated typography/link/focus utilities. |
| `app/layout.tsx` | Phase 2 | Updated skip-link styling for light-theme contrast. |
| `app/contact/page.tsx` | Phase 2 | Removed contact icon glow treatments and improved GitHub icon contrast. |
| `app/projects/page.tsx` | Phase 2 | Reduced project index hover/glow treatment and fixed light-theme contrast. |
| `app/resume/page.tsx` | Phase 2 | Fixed resume snapshot heading contrast. |
| `components/layout/Navbar.tsx` | Phase 2 | Updated sticky navigation to a light, restrained shell. |
| `components/layout/Footer.tsx` | Phase 2 | Changed footer foundation from dark ink to light surface. |
| `components/ui/Card.tsx` | Phase 2 | Flattened card variants to neutral light surfaces with subtle borders and shadows. |
| `components/ui/Button.tsx` | Phase 2 | Replaced neon gradient/glow buttons with muted primary and restrained secondary treatments. |
| `components/ui/Badge.tsx` | Phase 2 | Simplified shared badge styling. |
| `components/sections/HeroSection.tsx` | Phase 2 | Removed hero panel grid/glow overlays, fixed light-theme contrast, strengthened hero proof pill contrast, and corrected the credential spelling. |
| `components/sections/RiskReductionDashboard.tsx` | Phase 2 | Removed grid overlay and saturated critical gradient styling. |
| `components/sections/ImpactMetricsStrip.tsx` | Phase 2 | Removed grid overlay and saturated remediation bar gradient. |
| `components/sections/SkillsOverview.tsx` | Phase 2 | Reduced chip gradient/glow and normal-label monospace styling. |
| `components/sections/FeaturedProjects.tsx` | Phase 2 | Reduced glow-heavy project actions and GitHub button styling. |
| `components/sections/ProjectDetail.tsx` | Phase 2 | Replaced dark gradient visual panels with neutral light evidence panels. |
| `docs/redesign/03_DESIGN_SYSTEM.md` | Phase 2 | Documented implemented tokens, component changes, reduced patterns, checks, and checklist. |
| `docs/redesign/README.md` | Phase 2 | Marked Phase 2 complete in the phase status board. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Phase 2 | Logged Phase 2 work, commands, results, decisions, and next phase. |
| `app/page.tsx` | Phase 3 | Reordered homepage into hero, proof/impact, unified featured case studies, capabilities, background, and contact CTA. |
| `docs/redesign/04_HOMEPAGE_REDESIGN.md` | Phase 3 | Documented previous and new homepage structure, affected components, content movement, and checklist completion. |
| `app/page.tsx` | Phase 6/7 | Reworked homepage projects into one unified featured case-study section ordered Password Spray, The Buyer, Vulnerability Management, and DISA, preserving Problem / Outcome / Concepts context in a balanced horizontal evidence band and labeled tool rows. |
| `components/sections/HeroSection.tsx` | Phase 4 | Reworked the hero into a direct, professional, outcome-focused introduction with Bryan Miller as the softened H1, no generic portfolio eyebrow, the role line below, smaller CTAs, restrained portfolio evidence, and compact credential pills below the buttons. |
| `lib/data/profile.ts` | Phase 4 | Updated shared headline and positioning copy so the risk-reduction sentence leads the supporting copy. |
| `app/page.tsx` | Phase 5 | Updated the proof section header to frame the area as measured security outcomes. |
| `components/sections/RiskReductionDashboard.tsx` | Phase 5 | Replaced dashboard headings, progress bars, and metric cards with restrained vulnerability management proof blocks. |
| `components/sections/ImpactMetricsStrip.tsx` | Phase 5 | Replaced the network dashboard treatment with a concise RDP-related brute-force attempt reduction proof block. |
| `components/sections/ImpactMetricsStrip.tsx` | Phase 5 refinement | Corrected the network security proof to state that inbound NSG and firewall controls reduced observed RDP-related brute-force attempts by 100%. |
| `docs/redesign/04_HOMEPAGE_REDESIGN.md` | Phase 5 | Documented final proof copy, displayed metrics, changed files, and checklist completion. |
| `docs/redesign/06_CONTENT_AND_COPY.md` | Phase 5 | Recorded final proof section copy. |
| `docs/redesign/README.md` | Phase 5 | Marked Phase 5 complete in the phase status board. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Phase 5 | Logged Phase 5 decisions, files changed, commands, verification results, and next phase. |
| `lib/data/resume.ts` | Phase 5 refinement | Updated shared security-impact metric wording to RDP-related brute-force attempts instead of generic brute-force incidents. |
| `app/skills/page.tsx` | Phase 8 | Restored the public-facing Skills label and aligned the standalone skills page metadata and header with the grouped skills framing. |
| `components/sections/SkillsOverview.tsx` | Phase 8 | Replaced the chip-heavy skills grid with four grouped skills panels using descriptions, focus lists, and restrained tools/methods text. |
| `lib/data/skills.ts` | Phase 8 | Consolidated six skill groups into four work-area skill groups with descriptions and curated supporting tools/methods. |
| `docs/redesign/04_HOMEPAGE_REDESIGN.md` | Phase 8 | Documented final skill groups, files changed, and checklist completion. |
| `docs/redesign/06_CONTENT_AND_COPY.md` | Phase 8 | Recorded the approved public-facing Skills label and grouped skill copy direction. |
| `docs/redesign/README.md` | Phase 8 | Marked Phase 8 complete in the phase status board. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Phase 8 | Logged Phase 8 decisions, files changed, commands, verification results, and next phase. |
| `app/page.tsx` | Phase 9 | Replaced the homepage resume-highlight card cluster with a concise background section grounded in Marine Corps fire direction control, small-team leadership, data accuracy, cybersecurity education, Security+, and current internship work. |
| `docs/redesign/04_HOMEPAGE_REDESIGN.md` | Phase 9 | Documented final grounded background copy, changed files, and checklist completion. |
| `docs/redesign/06_CONTENT_AND_COPY.md` | Phase 9 | Recorded approved grounded background copy direction. |
| `docs/redesign/README.md` | Phase 9 | Marked Phase 9 complete in the phase status board with the grounded background summary. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Phase 9 | Logged Phase 9 decisions, grounding refinement, files changed, commands, verification results, and next phase. |
| `app/contact/page.tsx` | Contact QA fix | Replaced the blank-looking GitHub action button with a visible GitHub mark and "View GitHub" text. |
| `components/sections/ProjectDetail.tsx` | Phase 10 | Reworked shared project detail pages into professional article-style case studies with role alignment, executive summary, recruiter-facing hiring relevance near the top, proof stats, structured sections, case-study focus context, a sticky desktop evidence-links panel, and uniform GitHub-icon link buttons. |
| `components/sections/ProjectCaseStudyCard.tsx` | Phase 10 project-index refinement | Added a shared compact/expanded case-study card so the homepage and `/projects` use the same project presentation system. |
| `components/ui/Button.tsx` | Design refinement | Added a light royal-blue featured variant for homepage case-study CTAs. |
| `components/layout/Navbar.tsx` | Design refinement | Adjusted the sticky navigation to use a pale-blue elevated header, a distinct white nav group, blue-tinted border, and softer active state. |
| `app/page.tsx` | Phase 10 project-index refinement | Reused the shared compact case-study card for homepage featured case studies. |
| `app/projects/page.tsx` | Phase 10 project-index refinement | Replaced the old project-preview grid with a restrained review path and expanded full-width case-study cards. |
| `lib/data/projects.ts` | Phase 10 | Added hiring relevance copy to each project case study and centralized the case-study display order. |
| `docs/redesign/05_CASE_STUDY_REDESIGN.md` | Phase 10 | Documented found case-study routes, template completion, project-index refinement, files changed, and checklist completion. |
| `docs/redesign/README.md` | Phase 10 | Marked Phase 10 complete in the phase status board and noted the refreshed `/projects` index. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Phase 10 | Logged Phase 10 decisions, project-index refinement, files changed, commands, verification results, and next phase. |
| `app/page.tsx` | Phase 11 | Updated proof component imports/names and changed remaining Sentinel dashboard wording to Sentinel workbooks. |
| `app/about/page.tsx` | Phase 11 | Replaced the remaining `badge-text` utility reference with `chip-text`. |
| `app/contact/page.tsx` | Phase 11 | Replaced legacy `mint` styling references with the semantic `remediation` token. |
| `app/resume/page.tsx` | Phase 11 | Replaced `badge-text` usage and removed non-code monospace styling from skill summaries. |
| `app/globals.css` | Phase 11 | Renamed `badge-text` to `chip-text` and made `technical-block` use normal text rather than monospace. |
| `components/sections/FeaturedProjects.tsx` | Phase 11 | Removed the unused old animated project-preview component. |
| `components/sections/NetworkSecurityProof.tsx` | Phase 11 | Renamed the former network dashboard component to proof-oriented naming. |
| `components/sections/VulnerabilityReductionProof.tsx` | Phase 11 | Renamed the former risk-reduction dashboard component to proof-oriented naming. |
| `components/sections/HeroSection.tsx` | Phase 11 | Replaced remaining proof-pill `badge-text` and `mint` references with neutral chip/remediation naming. |
| `components/sections/ProjectCaseStudyCard.tsx` | Phase 11 | Replaced remaining badge utility usage and removed non-code monospace labels. |
| `components/sections/ProjectDetail.tsx` | Phase 11 | Swapped the shared Badge component for `ToolTag`. |
| `components/ui/Button.tsx` | Phase 11 | Removed the legacy `mint` accent option. |
| `components/ui/Card.tsx` | Phase 11 | Removed unused `metric`, `project`, and `terminal` variants. |
| `components/ui/ToolTag.tsx` | Phase 11 | Renamed the shared Badge primitive to a neutral tool tag. |
| `lib/data/resume.ts` | Phase 11 | Changed remaining Sentinel dashboard wording to Sentinel workbooks. |
| `tailwind.config.ts` | Phase 11 | Removed unused `cyan` and `mint` color aliases. |
| `docs/redesign/02_SITE_AUDIT.md` | Phase 11 | Added cleanup results and aligned stale metric/project-order wording with the source of truth. |
| `docs/redesign/README.md` | Phase 11 | Marked Phase 11 complete in the phase status board. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Phase 11 | Logged Phase 11 decisions, files changed, commands, and verification results. |
| `components/layout/Navbar.tsx` | Phase 12 | Increased mobile nav and brand link hit areas for better tap targets. |
| `components/layout/Footer.tsx` | Phase 12 | Increased footer link hit areas for touch usability. |
| `tailwind.config.ts` | Phase 12 | Darkened the remediation token to improve small-text contrast. |
| `docs/redesign/03_DESIGN_SYSTEM.md` | Phase 12 | Updated remediation token documentation and corrected stale Phase 2 notes after Phase 11 cleanup. |
| `docs/redesign/08_QA_FINAL_REVIEW.md` | Phase 12 | Filled the QA checklist, issues found/fixed, link review, quality checks, and Phase 12 notes. |
| `docs/redesign/README.md` | Phase 12 | Marked Phase 12 complete in the phase status board. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Phase 12 | Logged Phase 12 decisions, files changed, commands, and verification results. |
| `docs/redesign/08_QA_FINAL_REVIEW.md` | Phase 13 | Completed final senior frontend designer review, cybersecurity hiring-manager review, acceptance checklist, final files changed, and final notes. |
| `docs/redesign/README.md` | Phase 13 | Marked Phase 13 complete in the phase status board. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Phase 13 | Logged Phase 13 decision, files changed, commands, verification results, and completion status. |
| `lib/data/skills.ts` | Post-final refinement | Reordered shared skill groups so the homepage and `/skills` page use the requested desktop sequence. |
| `docs/redesign/04_HOMEPAGE_REDESIGN.md` | Post-final refinement | Updated the final Phase 8 skill group table and note to reflect the refined order. |
| `docs/redesign/README.md` | Post-final refinement | Updated the Phase 8 summary and suggested group order to match the implementation. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Post-final refinement | Logged the skills order decision, changed files, commands, and verification results. |
| `lib/data/profile.ts` | Post-final email contact | Added the shared visible portfolio email address and `mailto:` URL. |
| `app/contact/page.tsx` | Post-final email contact | Added a direct email card, visible email address beside the email button, email button, and recruiter-focused contact copy. |
| `components/layout/Footer.tsx` | Post-final email contact | Added a footer Email link. |
| `components/ui/Button.tsx` | Post-final email contact | Rendered `mailto:` and `tel:` button links as native anchors without external-tab behavior. |
| `docs/redesign/08_QA_FINAL_REVIEW.md` | Post-final email contact | Updated link review, recommendations, concerns, final files, and final notes for the verified email path. |
| `docs/redesign/README.md` | Post-final email contact | Updated the Phase 13 summary now that the direct email path is complete. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Post-final email contact | Logged the email contact decision, changed files, commands, and verification results. |
| `components/sections/ProjectCaseStudyCard.tsx` | Post-final project tool refinement | Removed the tool limit and `+N more` chip so project cards list every tool. |
| `docs/redesign/04_HOMEPAGE_REDESIGN.md` | Post-final project tool refinement | Updated the Phase 7 homepage notes to reflect full tool lists on project cards. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Post-final project tool refinement | Logged the tool-list decision, changed files, commands, and verification results. |
| `components/sections/ProjectCaseStudyCard.tsx` | Post-final homepage hiring relevance | Added compact Hiring Relevance strips to homepage cards while preserving the fuller expanded card treatment. |
| `docs/redesign/04_HOMEPAGE_REDESIGN.md` | Post-final homepage hiring relevance | Updated Phase 7 homepage notes to include the Hiring Relevance strip. |
| `docs/redesign/README.md` | Post-final homepage hiring relevance | Updated the Phase 7 summary to mention hiring relevance on homepage case-study panels. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Post-final homepage hiring relevance | Logged the hiring-relevance decision, changed files, commands, and verification results. |
| `lib/data/projects.ts` | Post-final hiring relevance copy | Rewrote project hiring relevance blurbs as proof-focused project statements with varied openings. |
| `docs/redesign/06_CONTENT_AND_COPY.md` | Post-final hiring relevance copy | Added hiring relevance copy direction to avoid recruiter-explaining phrasing. |
| `docs/redesign/05_CASE_STUDY_REDESIGN.md` | Post-final hiring relevance copy | Updated the project data summary to reflect refined hiring relevance copy. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Post-final hiring relevance copy | Logged the copy decision, changed files, commands, and verification results. |
| `components/sections/ProjectDetail.tsx` | Post-final evidence-link clarity | Changed the primary GitHub evidence action to `Read Full Technical Write-Up` and added near-top/sidebar copy that explains the full write-up and supporting evidence are available through Evidence Links. |
| `docs/redesign/05_CASE_STUDY_REDESIGN.md` | Post-final evidence-link clarity | Documented the full-write-up visibility pattern for project detail pages. |
| `docs/redesign/README.md` | Post-final evidence-link clarity | Updated the Phase 10 summary to note the clarified full technical write-up evidence links. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Post-final evidence-link clarity | Logged the evidence-link clarity decision, changed files, commands, and verification results. |
| `lib/data/projects.ts` | Post-final evidence-link casing | Kept supporting Evidence Links labels in Title Case for consistency with the primary full-write-up action. |
| `docs/redesign/05_CASE_STUDY_REDESIGN.md` | Post-final evidence-link casing | Documented Title Case for supporting evidence-link labels. |
| `docs/redesign/README.md` | Post-final evidence-link casing | Updated the Phase 10 summary to include consistent Title Case action labels. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Post-final evidence-link casing | Logged the evidence-link casing decision, changed files, commands, and verification results. |
| `lib/data/projects.ts` | Post-final README link alignment | Updated all primary project URLs to direct GitHub README write-up links. |
| `docs/redesign/05_CASE_STUDY_REDESIGN.md` | Post-final README link alignment | Documented that primary evidence actions should point to project README write-ups where possible. |
| `docs/redesign/README.md` | Post-final README link alignment | Updated the Phase 10 summary to say Evidence Links lead directly to GitHub README full technical write-ups. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Post-final README link alignment | Logged the README-link alignment decision, PDF hyperlink extraction, URL checks, files changed, and verification results. |
| `lib/data/profile.ts` | Post-final resume path repair | Updated the shared resume URL to `/resume/bryanpmiller_resume_public.pdf`. |
| `docs/redesign/02_SITE_AUDIT.md` | Post-final resume path repair | Updated the resume/contact link inventory to reference the current public resume PDF. |
| `docs/redesign/08_QA_FINAL_REVIEW.md` | Post-final resume path repair | Updated the link review and final notes for the current resume PDF path. |
| `docs/redesign/README.md` | Post-final resume path repair | Updated the Phase 13 summary to note the repaired shared resume PDF path. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Post-final resume path repair | Logged the resume path repair, files changed, commands, and verification results. |
| `components/layout/Footer.tsx` | Post-final footer evidence badges | Added a restrained security pipeline evidence badge row linked to the GitHub Actions security workflow. |
| `docs/redesign/08_QA_FINAL_REVIEW.md` | Post-final footer evidence badges | Added the footer security pipeline badge link review and final note. |
| `docs/redesign/README.md` | Post-final footer evidence badges | Updated the Phase 13 summary to include the footer security pipeline evidence badges. |
| `docs/redesign/07_IMPLEMENTATION_LOG.md` | Post-final footer evidence badges | Logged the footer evidence badge decision, commands, files changed, and verification results. |

## Unresolved Issues

| Issue | Severity | Location | Recommendation |
|---|---|---|---|
| Deployment platform not identified | Low | Repository config | Confirm during a later phase only if deployment-specific build behavior matters. |
| No dedicated type-check or test script | Low | `package.json` | Use `npm run lint`, `npm run build`, and optionally `npx tsc --noEmit` during code-editing phases. |
