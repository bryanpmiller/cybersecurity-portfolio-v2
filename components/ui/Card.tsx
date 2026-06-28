import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: "article" | "aside" | "div" | "section";
  variant?: "default" | "evidence" | "glass";
};

const cardVariants: Record<NonNullable<CardProps["variant"]>, string> = {
  default:
    "border-line bg-surface p-5 shadow-soft sm:p-6",
  evidence:
    "border-line bg-surface p-5 shadow-soft sm:p-6",
  glass:
    "border-line bg-surface/95 p-5 shadow-soft sm:p-6"
};

export function Card({ children, className, as: Component = "div", variant = "default" }: CardProps) {
  return (
    <Component className={cn("min-w-0 rounded-md border", cardVariants[variant], className)}>
      {children}
    </Component>
  );
}
