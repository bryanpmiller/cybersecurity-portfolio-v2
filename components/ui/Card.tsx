import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "article" | "aside" | "div" | "section";
  variant?: "default" | "metric" | "project" | "terminal" | "evidence" | "glass";
};

const cardVariants: Record<NonNullable<CardProps["variant"]>, string> = {
  default: "border-line bg-surface/80 p-6 shadow-soft",
  metric:
    "relative overflow-hidden border-lineStrong bg-surface/90 p-5 pl-6 shadow-soft before:absolute before:bottom-5 before:left-0 before:top-5 before:w-1 before:rounded-r-full",
  project:
    "border-line bg-surface/80 p-6 shadow-soft transition-colors hover:border-lineStrong hover:bg-surface/90",
  terminal:
    "relative overflow-hidden border-lineStrong bg-[linear-gradient(180deg,rgba(17,31,50,0.94)_0%,rgba(9,24,39,0.98)_100%)] p-0 shadow-soft",
  evidence: "border-lineStrong bg-ink-soft/70 p-6 shadow-soft",
  glass: "border-line bg-surface/65 p-6 shadow-soft backdrop-blur"
};

export function Card({ children, className, as: Component = "div", variant = "default" }: CardProps) {
  return (
    <Component className={cn("rounded-lg border", cardVariants[variant], className)}>
      {children}
    </Component>
  );
}
