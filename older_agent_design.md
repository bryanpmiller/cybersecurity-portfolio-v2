# AGENTS.md

## Project Goal

Build a professional cybersecurity portfolio website for Bryan Miller. The site is intended to help Bryan get hired for cybersecurity roles by showcasing his resume, projects, technical skills, and evidence-based security work.

The primary target roles are:
1. Vulnerability Analyst / Vulnerability Management Analyst
2. Cybersecurity Analyst / Security Analyst
3. SecOps Analyst
4. SOC / Threat Detection Analyst
5. Technical GRC / STIG Compliance Analyst

The site should feel like a cybersecurity professional portfolio, not a generic developer portfolio and not a flashy hacker-themed site.

## Positioning

Use this core professional message:

Bryan Miller is a Cybersecurity Analyst focused on vulnerability management, secure configuration, remediation automation, and threat hunting.

Preferred headline:

Cybersecurity Analyst focused on vulnerability management, secure configuration, remediation automation, and threat hunting.

Preferred short title:

Vulnerability Management & Cybersecurity Analyst

## Tech Stack

Use:
- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Static content where possible
- Reusable components
- Markdown or structured TypeScript data for project content

Avoid unnecessary backend complexity. Do not add a database, login system, admin panel, or contact form for version 1.

## Site Structure

Create a multi-page site:

- `/` Home
- `/about` About / professional summary
- `/resume` Web resume + PDF download
- `/projects` All projects
- `/projects/vulnerability-management-program`
- `/projects/disa-stig-remediation`
- `/projects/password-spray-threat-hunt`
- `/projects/akira-ransomware-threat-hunt`
- `/skills`
- `/contact`

Future optional route:
- `/writeups`

Do not build the blog/writeups section in version 1 unless explicitly asked.

## Design Direction

Use a dark theme by default with a professional cybersecurity feel.

Preferred style:
- Dark navy / charcoal background
- Soft white or gray text
- Blue, cyan, or muted green accent
- Clean cards
- Clear spacing
- Minimal animations
- Strong mobile responsiveness
- Professional SaaS/security-vendor feel

Avoid:
- Neon hacker aesthetic
- Overuse of terminal effects
- Excessive animations
- Fake dashboards
- Stock cyber graphics
- AI-sounding copy

## Featured Projects

Feature these first:

1. Vulnerability Management Program Implementation
2. DISA STIG Remediation with PowerShell
3. Password Spray Threat Hunt: RDP Compromise Investigation
4. Akira Ransomware Threat Hunt as a secondary featured project

Each project page should use this structure:

- Title
- One-sentence summary
- Role demonstrated
- Tools used
- Problem
- Approach
- Evidence
- Outcome
- What I learned
- Links to GitHub

## Content Rules

Do not invent metrics, employment history, certifications, tools, or project outcomes.

Use only provided resume/project facts unless explicitly asked to draft placeholder copy.

Known facts:
- Bryan has a B.S. in Cybersecurity, Computer Forensics & Vulnerability Management from Norwich University.
- Bryan has CompTIA Security+.
- Bryan’s current cybersecurity experience includes vulnerability scanning, reporting, PowerShell-based remediation, Tenable, DISA STIG compliance, MDE/Sentinel threat hunting, detection rules, dashboards, Azure NSG/firewall controls, and measurable vulnerability reduction.
- Resume metrics include 100% reduction in critical vulnerabilities, 92% reduction in high vulnerabilities, and 88% reduction in medium vulnerabilities for the server team.

Tone:
- Clear
- Professional
- Human
- Concise
- Evidence-based
- Avoid exaggerated claims
- Avoid corporate buzzword overload

## Project Evidence Style

The website should summarize. GitHub should hold the deeper evidence.

For each project page, include:
- 1 hero screenshot or visual
- 1 evidence screenshot or code/query block
- 1 concise outcome section
- GitHub repo link

Do not dump every screenshot from GitHub into the website.

## Code Quality Expectations

- Use TypeScript types.
- Keep components reusable.
- Use semantic HTML.
- Prioritize accessibility.
- Ensure responsive design.
- Use descriptive component and file names.
- Avoid hardcoded duplicated content when structured data would be cleaner.
- Keep dependencies minimal.
- Do not add production dependencies without explaining why.

## Security / Professional Polish

Add:
- SEO metadata
- Open Graph metadata
- Resume download link
- External links using safe attributes
- Security headers if supported by the framework/hosting target
- No secrets
- No analytics unless explicitly requested
- No contact form for version 1

## Verification

Before considering work complete, run:

- `npm run lint`
- `npm run build`

If tests are added, also run:

- `npm test`

After each task, summarize:
- What changed
- Files modified
- How it was verified
- Any known issues or follow-up tasks