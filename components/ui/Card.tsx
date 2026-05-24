import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "article" | "aside" | "div" | "section";
  variant?: "default" | "metric" | "project" | "terminal" | "evidence" | "glass";
};

const cardVariants: Record<NonNullable<CardProps["variant"]>, string> = {
  default:
    "border-line/90 bg-[linear-gradient(180deg,rgba(24,33,49,0.78)_0%,rgba(17,23,34,0.88)_100%)] p-5 shadow-soft shadow-black/25 ring-1 ring-white/[0.025] sm:p-6",
  metric:
    "relative overflow-hidden border-lineStrong/90 bg-[linear-gradient(180deg,rgba(24,33,49,0.84)_0%,rgba(17,23,34,0.94)_100%)] p-4 pl-5 shadow-soft shadow-black/30 ring-1 ring-white/[0.03] before:absolute before:bottom-5 before:left-0 before:top-5 before:w-1 before:rounded-r-full sm:p-5 sm:pl-6",
  project:
    "border-line/90 bg-[linear-gradient(180deg,rgba(24,33,49,0.78)_0%,rgba(17,23,34,0.9)_100%)] p-5 shadow-soft shadow-black/25 ring-1 ring-white/[0.025] transition-[background,border-color,box-shadow] duration-200 hover:border-evidence/45 hover:bg-surface/90 hover:shadow-[0_28px_86px_rgba(0,0,0,0.48)] sm:p-6",
  terminal:
    "relative overflow-hidden border-lineStrong/90 bg-[linear-gradient(180deg,rgba(24,33,49,0.94)_0%,rgba(13,17,26,0.98)_100%)] p-0 shadow-soft shadow-black/35 ring-1 ring-white/[0.035]",
  evidence:
    "border-lineStrong/80 bg-[linear-gradient(180deg,rgba(17,23,34,0.82)_0%,rgba(13,17,26,0.9)_100%)] p-5 shadow-soft shadow-black/25 ring-1 ring-white/[0.025] sm:p-6",
  glass:
    "border-line/90 bg-surface/65 p-5 shadow-soft shadow-black/25 ring-1 ring-white/[0.03] backdrop-blur sm:p-6"
};

export function Card({ children, className, as: Component = "div", variant = "default" }: CardProps) {
  return (
    <Component className={cn("min-w-0 rounded-lg border", cardVariants[variant], className)}>
      {children}
    </Component>
  );
}
