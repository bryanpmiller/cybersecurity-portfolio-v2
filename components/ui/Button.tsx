import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  icon?: ReactNode;
};

export function Button({ href, children, className, variant = "primary", external = false, icon }: ButtonProps) {
  const classes =
    variant === "primary"
      ? "border border-evidence/55 bg-[linear-gradient(180deg,rgba(110,231,216,1)_0%,rgba(125,211,199,1)_100%)] text-ink shadow-[0_16px_34px_rgba(110,231,216,0.14),inset_0_1px_0_rgba(255,255,255,0.42)] hover:border-evidence hover:bg-[linear-gradient(180deg,rgba(110,231,216,1)_0%,rgba(138,180,248,1)_100%)] hover:shadow-[0_18px_42px_rgba(110,231,216,0.2),inset_0_1px_0_rgba(255,255,255,0.5)]"
      : "border border-lineStrong/80 bg-surfaceElevated/80 text-slate-100 shadow-[0_14px_34px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-evidence/50 hover:bg-surfaceElevated hover:text-white hover:shadow-[0_18px_42px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.08)]";

  const buttonClassName = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-[background,border-color,box-shadow,color,transform] duration-200 hover:-translate-y-0.5 active:translate-y-0",
    classes,
    className
  );

  if (external) {
    return (
      <a className={buttonClassName} href={href} rel="noreferrer" target="_blank">
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link className={buttonClassName} href={href}>
      {icon}
      {children}
    </Link>
  );
}
