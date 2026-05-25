import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  accent?: "evidence" | "remediation" | "mint" | "white";
  ariaLabel?: string;
  className?: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  icon?: ReactNode;
};

const focusAccentClasses = {
  evidence: "focus-visible:ring-evidence/80",
  remediation: "focus-visible:ring-remediation/80",
  mint: "focus-visible:ring-mint/80",
  white: "focus-visible:ring-white/75"
};

const secondaryAccentClasses = {
  evidence:
    "hover:border-evidence/50 hover:bg-surfaceElevated hover:text-white hover:shadow-[0_18px_42px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.08)]",
  remediation:
    "hover:border-remediation/55 hover:bg-remediation/10 hover:text-white hover:shadow-[0_18px_42px_rgba(138,180,248,0.14),inset_0_1px_0_rgba(255,255,255,0.08)]",
  mint:
    "hover:border-mint/55 hover:bg-mint/10 hover:text-white hover:shadow-[0_18px_42px_rgba(125,211,199,0.14),inset_0_1px_0_rgba(255,255,255,0.08)]",
  white:
    "hover:border-white/55 hover:bg-white/10 hover:text-white hover:shadow-[0_18px_42px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.1)]"
};

export function Button({ href, children, accent = "evidence", ariaLabel, className, variant = "primary", external = false, icon }: ButtonProps) {
  const classes =
    variant === "primary"
      ? "border border-evidence/55 bg-[linear-gradient(180deg,rgba(110,231,216,1)_0%,rgba(125,211,199,1)_100%)] text-ink shadow-[0_16px_34px_rgba(110,231,216,0.14),inset_0_1px_0_rgba(255,255,255,0.42)] hover:border-evidence hover:bg-[linear-gradient(180deg,rgba(110,231,216,1)_0%,rgba(138,180,248,1)_100%)] hover:shadow-[0_18px_42px_rgba(110,231,216,0.2),inset_0_1px_0_rgba(255,255,255,0.5)]"
      : cn(
          "border border-lineStrong/80 bg-surfaceElevated/80 text-slate-100 shadow-[0_14px_34px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.06)]",
          secondaryAccentClasses[accent]
        );

  const buttonClassName = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-[background,border-color,box-shadow,color,transform] duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:translate-y-0",
    focusAccentClasses[accent],
    classes,
    className
  );

  if (external) {
    return (
      <a aria-label={ariaLabel} className={buttonClassName} href={href} rel="noreferrer" target="_blank">
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
