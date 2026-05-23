import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <main className={cn("page-depth mx-auto w-full max-w-6xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16", className)}>
      {children}
    </main>
  );
}
