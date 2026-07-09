import { profile } from "@/lib/data/profile";

const securityPipelineUrl =
  "https://github.com/bryanpmiller/cybersecurity-portfolio-v2/actions/workflows/security-pipeline.yml";

const securityBadges = [
  {
    href: securityPipelineUrl,
    src: `${securityPipelineUrl}/badge.svg`,
    alt: "DevSecOps build status",
    label: "View DevSecOps build evidence"
  },
  {
    href: securityPipelineUrl,
    src: "https://img.shields.io/badge/Security-Semgrep-brightgreen",
    alt: "Semgrep SAST scan evidence",
    label: "View Semgrep SAST scan evidence"
  },
  {
    href: securityPipelineUrl,
    src: "https://img.shields.io/badge/Secrets-TruffleHog-blue",
    alt: "TruffleHog secrets scan evidence",
    label: "View TruffleHog secrets scan evidence"
  }
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <p>{profile.name} - Cybersecurity Portfolio</p>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <a className="text-link inline-flex min-h-10 items-center px-1" href={profile.emailUrl}>
              Email
            </a>
            <a className="text-link inline-flex min-h-10 items-center px-1" href={profile.githubUrl} rel="noreferrer" target="_blank">
              GitHub
            </a>
            <a className="text-link inline-flex min-h-10 items-center px-1" href={profile.linkedinUrl} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <a className="text-link inline-flex min-h-10 items-center px-1" href={profile.resumeUrl}>
              Resume PDF
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 border-t border-line/70 pt-4 lg:justify-end">
          {securityBadges.map((badge) => (
            <a
              aria-label={badge.label}
              className="inline-flex min-h-10 items-center rounded border border-line bg-white px-2 py-1 transition hover:border-slate-300"
              href={badge.href}
              key={badge.alt}
              rel="noreferrer"
              target="_blank"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- External SVG status badges are best rendered directly. */}
              <img alt={badge.alt} className="h-5 w-auto" loading="lazy" src={badge.src} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
