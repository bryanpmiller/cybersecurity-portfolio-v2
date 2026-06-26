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
    "border-line bg-surface p-5 shadow-soft sm:p-6",
  metric:
    "relative overflow-hidden border-line bg-surface p-4 pl-5 shadow-soft before:absolute before:bottom-5 before:left-0 before:top-5 before:w-1 before:rounded-r-full sm:p-5 sm:pl-6",
  project:
    "border-line bg-surface p-5 shadow-soft transition-[background,border-color,box-shadow] duration-200 hover:border-lineStrong hover:shadow-raised sm:p-6",
  terminal:
    "relative overflow-hidden border-line bg-surface p-0 shadow-soft",
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
