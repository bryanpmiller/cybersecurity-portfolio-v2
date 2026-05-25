"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 18 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className ? `min-w-0 ${className}` : "min-w-0"}
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
