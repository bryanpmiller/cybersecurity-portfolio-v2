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

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-ink/75 shadow-[0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.28),transparent)]" />
      <nav
        aria-label="Primary navigation"
        className="relative mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"
      >
        <Link className="focus-ring w-fit rounded-md" href="/">
          <span>
            <span className="heading-text block text-base leading-tight">{profile.name}</span>
            <span className="mt-1 block font-mono text-[0.68rem] uppercase tracking-[0.12em] text-slate-400">
              {profile.title}
            </span>
          </span>
        </Link>
        <div className="flex flex-wrap gap-1.5 rounded-lg border border-line bg-surface/45 p-1 backdrop-blur">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "focus-ring rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition",
                  "hover:bg-surfaceElevated hover:text-white",
                  isActive && "bg-surfaceElevated text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
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
