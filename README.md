# Bryan Miller Cybersecurity Portfolio

[![Portfolio Security Checks](https://github.com/bryanpmiller/cybersecurity-portfolio-v2/actions/workflows/security-pipeline.yml/badge.svg)](https://github.com/bryanpmiller/cybersecurity-portfolio-v2/actions/workflows/security-pipeline.yml)

An evidence-first portfolio covering cybersecurity, systems security, and operations. It connects Bryan Miller’s professional facility networking and operational leadership with cybersecurity education, lab remediation, and cyber-range investigations.

## Experience and evidence

- **Professional experience:** facility networking, IP camera maintenance, connectivity troubleshooting, and operations at UTB Ventures; Marine Corps communications/targeting systems, verification procedures, and small-team leadership.
- **Cybersecurity practice:** Log(N) Pacific’s simulated enterprise cyber range; vulnerability management, PowerShell remediation, hardening, and Defender/KQL investigations.
- **Case studies:** Vulnerability Management Program Implementation, DISA STIG Remediation, Password Spray/RDP Investigation, and The Buyer/Akira Ransomware Hunt. Project role labels describe alignment, not employment.
- **Measured results:** Windows Server lab findings decreased from 32 to 4 across seven scan cycles. Severity reductions are tied to that lab and its evidence. Access-control practice is described without an unsupported RDP reduction percentage.

The site supports recruiting for vulnerability management, SOC/SecOps, security analysis, systems/IT support, and security configuration or compliance support.

## Pages

Fourteen public HTML routes: Home, About, Resumes, Projects, Skills, Contact, four case-study pages, and four resume-view pages. Project routes and order remain stable. The public origin is `https://bryanpmiller.com`.

The resume page and PDF assets are excluded from this branch's edits. The merged `updates/resumepage` redesign, featured overall resume and tailored options are included unchanged from current `main` (52c1de7). General resume links lead to `/resume`.

Reworded About/home experience and skills data live in `lib/data/experience.ts` and `lib/data/portfolio-skills.ts`, separate from the unchanged resume dependencies.

## Implementation

Next.js App Router, React, TypeScript, Tailwind CSS, and Framer Motion. Copy is stored primarily in `lib/data`, with page-specific text in `app` and shared sections in `components`. The existing light-first palette, self-hosted fonts, editorial case studies, and responsive components are retained.

Metadata uses the Next.js Metadata API and one production origin. Robots and sitemap use framework-native route handlers. The site has no login, database, or contact form; contact uses email and professional profile links. The GitHub workflow runs Semgrep and TruffleHog checks.

## Local development and checks

```bash
npm ci
npm run dev
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

Development binds to `127.0.0.1`. To review a production build on a specific local port:

```bash
node node_modules/next/dist/bin/next start --hostname 127.0.0.1 --port 3100
```

Fonts are served locally from `public/fonts`; production builds do not require Google Fonts downloads. There is no dedicated test script; verify rendered routes, metadata, navigation, responsive layouts, and resume downloads alongside lint, types, and build.

## Content maintenance

Use the current resume variants and linked project artifacts as factual sources. Distinguish professional employment from labs and simulated environments. Preserve evidence limitations, scoped metrics, and script provenance. Do not invent employers, clients, certifications, production outcomes, or successful exfiltration.

For PDF updates, redact the underlying content rather than covering text with a rectangle. Check extracted text, metadata, annotations, links, rendering, and original-file hashes before making a public copy available.

Current rewrite tracking and validation are under `docs/seo`; copy guidance is in `docs/redesign/06_CONTENT_AND_COPY.md`. Historical redesign logs remain for context. Review changes locally before any separately authorized push, PR, merge, or deployment.

## Author

Bryan Miller · Cybersecurity, Systems Security & Operations

- [GitHub](https://github.com/bryanpmiller)
- [LinkedIn](https://linkedin.com/in/bryan-p-miller)
