import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  icon?: ReactNode;
};

export function Button({ href, children, variant = "primary", external = false, icon }: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-cyan text-ink hover:bg-blue"
      : "border border-line bg-surfaceElevated text-slate-100 hover:border-lineStrong hover:bg-surfaceElevated/80 hover:text-white";

  const className = cn(
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition",
    classes
  );

  if (external) {
    return (
      <a className={className} href={href} rel="noreferrer" target="_blank">
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {icon}
      {children}
    </Link>
  );
}
