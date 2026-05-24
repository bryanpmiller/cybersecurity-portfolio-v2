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
    <header className="sticky top-0 z-20 border-b border-line bg-ink/78 shadow-[0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(110,231,216,0.26),transparent)]" />
      <nav
        aria-label="Primary navigation"
        className="relative mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:px-8"
      >
        <Link className="focus-ring w-fit rounded-md" href="/">
          <span>
            <span className="heading-text block text-base leading-tight">{profile.name}</span>
            <span className="mt-1 hidden font-mono text-[0.68rem] uppercase tracking-[0.12em] text-slate-400 sm:block">
              {profile.title}
            </span>
          </span>
        </Link>
        <div className="flex flex-wrap gap-1.5 rounded-lg border border-lineStrong/55 bg-surface/50 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "focus-ring rounded-md border border-transparent px-2.5 py-1.5 text-[0.82rem] font-medium text-slate-300 transition-[background,border-color,box-shadow,color] sm:px-3 sm:py-2 sm:text-sm",
                  "hover:border-lineStrong/60 hover:bg-surfaceElevated/80 hover:text-white",
                  isActive && "border-lineStrong/70 bg-surfaceElevated text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_10px_24px_rgba(0,0,0,0.18)]"
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
