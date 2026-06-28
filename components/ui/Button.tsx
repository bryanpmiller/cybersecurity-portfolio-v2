import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  accent?: "evidence" | "remediation" | "white";
  ariaLabel?: string;
  className?: string;
  variant?: "primary" | "secondary" | "featured";
  external?: boolean;
  icon?: ReactNode;
};

const focusAccentClasses = {
  evidence: "focus-visible:ring-evidence/80",
  remediation: "focus-visible:ring-remediation/80",
  white: "focus-visible:ring-white/75"
};

const secondaryAccentClasses = {
  evidence:
    "hover:border-evidence/45 hover:bg-surfaceElevated hover:text-ink",
  remediation:
    "hover:border-remediation/45 hover:bg-remediation/10 hover:text-ink",
  white:
    "hover:border-lineStrong hover:bg-surfaceElevated hover:text-ink"
};

export function Button({ href, children, accent = "evidence", ariaLabel, className, variant = "primary", external = false, icon }: ButtonProps) {
  const isNativeLink = href.startsWith("mailto:") || href.startsWith("tel:");
  const classes =
    variant === "primary"
      ? "border border-evidence bg-evidence text-white shadow-soft hover:border-ink hover:bg-ink hover:text-white"
      : variant === "featured"
        ? "border border-blue/45 bg-blue/[0.14] text-evidence shadow-[0_14px_34px_rgba(36,59,143,0.10)] hover:border-evidence hover:bg-evidence hover:text-white"
      : cn(
          "border border-line bg-surface text-slate-200 shadow-soft",
          secondaryAccentClasses[accent]
        );

  const buttonClassName = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-[background,border-color,box-shadow,color] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:bg-surfaceElevated",
    focusAccentClasses[accent],
    classes,
    className
  );

  if (external || isNativeLink) {
    return (
      <a aria-label={ariaLabel} className={buttonClassName} href={href} rel={external ? "noreferrer" : undefined} target={external ? "_blank" : undefined}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link aria-label={ariaLabel} className={buttonClassName} href={href}>
      {icon}
      {children}
    </Link>
  );
}
