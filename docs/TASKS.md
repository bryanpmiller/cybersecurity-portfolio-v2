# Build Tasks

## Current Build Status

- Last verified: `npm run lint` passed.
- Last verified: `npm run build` passed.
- Current architecture: Next.js App Router, TypeScript, Tailwind CSS, static-first content, reusable components, and structured TypeScript data.
- Current dependency audit: `npm audit --offline --audit-level=moderate` reported 0 vulnerabilities.

## Phase 1 - Scaffold

Status: Completed.

- [x] Initialize Next.js with TypeScript and Tailwind.
- [x] Create route structure.
- [x] Add global layout, navbar, footer.
- [x] Add dark theme styling.
- [x] Add placeholder content from content plan.
- [x] Add reusable components:
  - `components/layout/PageContainer.tsx`
  - `components/layout/Navbar.tsx`
  - `components/layout/Footer.tsx`
  - `components/ui/Button.tsx`
  - `components/ui/Card.tsx`
  - `components/ui/Badge.tsx`
  - `components/ui/SectionHeader.tsx`
  - `components/sections/HeroSection.tsx`
  - `components/sections/FeaturedProjects.tsx`
  - `components/sections/SkillsOverview.tsx`

Acceptance criteria:
- [x] Site runs locally.
- [x] All primary routes exist.
- [x] Mobile layout is usable.
- [x] `npm run lint` passes.
- [x] `npm run build` passes.

## Phase 2 - Content Data

Status: Completed for the version 1 foundation.

- [x] Create structured profile data.
- [x] Create structured project data.
- [x] Create structured skills data.
- [x] Create structured resume data.
- [x] Replace page-level hardcoded project, skill, profile, and resume highlights with imported data.
- [x] Add resume PDF link.

Acceptance criteria:
- [x] Homepage uses structured content.
- [x] Projects page renders from data.
- [x] Skills page renders from data.
- [x] Resume page contains a web resume overview and PDF download.

## Phase 3 - Project Case Studies

Status: Case study content model completed for all four featured projects.

Create pages for:
- [x] Vulnerability Management Program case study content
- [x] DISA STIG Remediation case study content
- [x] Password Spray Threat Hunt case study content
- [x] Akira Ransomware Threat Hunt case study content

Each page should include:
- [x] Summary
- [x] Role demonstrated
- [x] Tools used
- [x] Problem
- [x] Approach
- [x] Evidence
- [x] Outcome
- [x] What I learned
- [x] GitHub link to the specific project repository
- [x] One hero visual/stat summary
- [x] One evidence code/query block
- [ ] Review each case study locally for tone, spacing, and readability.
- [ ] Add real screenshots or curated visual assets where useful.

## Phase 4 - Polish

Status: Partially complete.

- [x] Add SEO metadata.
- [x] Add Open Graph metadata.
- [x] Add external link safety attributes.
- [x] Add basic keyboard-friendly navigation using semantic links and focus styles.
- [x] Add responsive layout foundations.
- [x] Add security headers in Next.js config.
- [ ] Review accessibility across all pages.
- [ ] Improve page-specific metadata where needed.
- [ ] Add final responsive polish after real project content is added.
- [ ] Add light/dark toggle only if it remains practical and does not distract from version 1.

## Phase 5 - Deployment

Status: Pending.

- [ ] Prepare for Vercel deployment.
- [ ] Add deployment instructions to README.
- [ ] Confirm production build works after final content.
- [ ] Confirm security headers in deployed environment.

## Recommended Next Task

Review the four project case study pages locally, then move into Phase 4 polish: accessibility, page-specific metadata, responsive spacing, and screenshot/visual asset selection.
