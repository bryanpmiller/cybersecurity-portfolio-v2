"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/data/profile";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" }
];

const securityPipelineUrl =
  "https://github.com/bryanpmiller/cybersecurity-portfolio-v2/actions/workflows/security-pipeline.yml";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-surfaceElevated/95 shadow-soft backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="relative mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:px-8"
      >
        <div className="flex w-fit flex-col items-start">
          <Link className="focus-ring flex min-h-11 items-center rounded-md pr-2" href="/">
            <span>
              <span className="heading-text block text-base leading-tight">{profile.name}</span>
              <span className="mt-1 hidden text-xs font-medium text-slate-400 sm:block">
                {profile.title}
              </span>
            </span>
          </Link>
          <a
            aria-label="View DevSecOps, Semgrep SAST, and TruffleHog secret scanning evidence"
            className="mt-1 hidden rounded sm:inline-flex"
            href={securityPipelineUrl}
            rel="noreferrer"
            target="_blank"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- External SVG status badge should render directly. */}
            <img
              alt="DevSecOps build status"
              className="h-4 w-auto"
              loading="lazy"
              src={`${securityPipelineUrl}/badge.svg`}
            />
          </a>
        </div>
        <div className="flex flex-wrap gap-1.5 rounded-md border border-lineStrong/25 bg-surface/90 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.82),0_10px_28px_rgba(8,11,63,0.05)]">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "focus-ring inline-flex min-h-11 items-center rounded-md border px-3 text-[0.82rem] font-medium transition-[background,border-color,color] sm:px-3.5 sm:text-sm",
                  isActive
                    ? "border-lineStrong/35 bg-evidence/[0.08] text-ink"
                    : "border-transparent text-slate-300 hover:border-lineStrong/35 hover:bg-surfaceElevated hover:text-ink"
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
