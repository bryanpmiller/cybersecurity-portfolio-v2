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
    <header className="sticky top-0 z-20 border-b border-line bg-surface/88 shadow-soft backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="relative mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-4 lg:px-8"
      >
        <Link className="focus-ring w-fit rounded-md" href="/">
          <span>
            <span className="heading-text block text-base leading-tight">{profile.name}</span>
            <span className="mt-1 hidden text-xs font-medium text-slate-400 sm:block">
              {profile.title}
            </span>
          </span>
        </Link>
        <div className="flex flex-wrap gap-1.5 rounded-md border border-line bg-ink-soft p-1">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "focus-ring rounded-md border border-transparent px-2.5 py-1.5 text-[0.82rem] font-medium text-slate-300 transition-[background,border-color,color] sm:px-3 sm:py-2 sm:text-sm",
                  "hover:border-lineStrong hover:bg-surface hover:text-ink",
                  isActive && "border-lineStrong bg-surface text-ink"
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
