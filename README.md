# Bryan Miller Cybersecurity Portfolio

[![DevSecOps Portfolio Pipeline](https://github.com/bryanpmiller/cybersecurity-portfolio-v2/actions/workflows/security-pipeline.yml/badge.svg)](https://github.com/bryanpmiller/cybersecurity-portfolio-v2/actions/workflows/security-pipeline.yml)

A professional cybersecurity portfolio website for Bryan Miller, built to showcase hands-on work in vulnerability management, remediation automation, secure configuration, threat hunting, and security operations.

The site is designed for cybersecurity hiring managers and recruiters evaluating candidates for roles such as Vulnerability Management Analyst, Cybersecurity Analyst, SecOps Analyst, SOC Analyst, and Technical GRC / STIG Compliance Analyst.



## Purpose

This project has two main goals:

1. Provide a clean, professional portfolio site for resume and job applications.
2. Demonstrate the ability to plan, build, document, and deploy a modern technical project using secure and maintainable practices.

## Target Roles

The portfolio is built around the following role targets:

- Vulnerability Management Analyst
- Cybersecurity Analyst / Security Analyst
- SecOps Analyst
- SOC / Threat Detection Analyst
- Technical GRC / STIG Compliance Analyst

## Featured Work

The website highlights selected cybersecurity projects, including:

- Vulnerability Management Program Implementation
- DISA STIG Remediation with PowerShell
- Password Spray Threat Hunt: RDP Compromise Investigation
- Akira Ransomware Threat Hunt

Each project page is structured as a case study with:

- Role demonstrated
- Tools used
- Problem statement
- Technical approach
- Evidence and artifacts
- Outcome
- GitHub project links

## Tech Stack

Current stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Structured TypeScript content
- `next/font` typography
- Static-first content and Git-based deployment

## Current Site Pages

- `/` Home
- `/about` About
- `/resume` Web resume and PDF download
- `/projects` Project index
- `/projects/vulnerability-management-program`
- `/projects/disa-stig-remediation`
- `/projects/password-spray-threat-hunt`
- `/projects/akira-ransomware-threat-hunt`
- `/skills`
- `/contact`

## Key Features

- Professional dark cybersecurity theme
- Premium typography using Space Grotesk, Inter, and JetBrains Mono
- Reusable card variants for default, metric, project, terminal, evidence, and glass panels
- Dashboard-style homepage hero and risk reduction metrics
- Project-specific visual previews instead of generic placeholder graphics
- Responsive design
- Resume page with downloadable PDF
- Project case study pages
- Skills grouped by cybersecurity role relevance
- External links to GitHub and LinkedIn
- SEO metadata
- Security-conscious configuration
- No unnecessary backend or user data collection

## Project Structure

Current structure:

```text
app/
  about/
  contact/
  projects/
    akira-ransomware-threat-hunt/
    disa-stig-remediation/
    password-spray-threat-hunt/
    vulnerability-management-program/
  resume/
  skills/
components/
  layout/
  sections/
  ui/
lib/
  data/
docs/
public/
```

Content is primarily stored in structured TypeScript data under `lib/data`, while page and section presentation lives under `app` and `components`.

## Local Development

Install the required dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

The local development server binds to `127.0.0.1` so it is available only from the local machine. Do not use `npm run dev` for production hosting.

Build the site for production:

```bash
npm run build
```

Start the production server after a build:

```bash
npm run start
```

Run linting checks:

```bash
npm run lint
```

Note: `next/font/google` fetches font metadata during production builds. In network-restricted sandboxes this may fail even when local development works normally. On a normal development machine or hosting provider with network access, the configured fonts should build correctly.

## Render Deployment

If deployed to Render as a Web Service, use:

- Build Command: `npm run build`
- Start Command: `npm run start`

Do not configure Render to use `npm run dev`; it is for local development only.

## Security and Privacy Notes

This portfolio is designed as a static-first site.

- No login system
- No database
- No contact form in version 1
- No stored visitor data
- No secrets committed to the repository
- External links should use safe attributes
- Security headers should be configured where supported by the hosting provider

## Development Approach

This project may use an AI-assisted development workflow with OpenAI Codex.

Codex is used to help scaffold, build, review, and improve the website. All major architecture, content, security decisions, and final review remain human-directed.

Development expectations:

- Keep code readable and maintainable
- Use reusable components
- Avoid unnecessary dependencies
- Keep dependencies minimal and avoid unnecessary backend features
- Do not invent project claims or resume metrics
- Run lint and build checks before considering work complete
- Keep the site professional, evidence-based, and hiring-focused

## Status

Version 1 is focused on building and polishing the core portfolio experience:

- Professional homepage
- Resume page
- Project index
- Individual project case studies
- Skills page
- Contact links
- Recruiter-friendly dark design system
- Evidence-focused project presentation

Future improvements may include:

- Short technical writeups
- Additional project pages
- Accessibility improvements
- Responsive navigation menu
- Expanded deployment documentation
- Additional security header documentation
- Light/dark theme toggle

## Author

Bryan Miller  
Cybersecurity Analyst focused on vulnerability management, secure configuration, remediation automation, and threat hunting.

- GitHub: https://github.com/bryanpmiller
- LinkedIn: https://linkedin.com/in/bryan-p-miller

