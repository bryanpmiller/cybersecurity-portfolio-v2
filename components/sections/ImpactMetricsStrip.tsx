"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { supplementalImpactMetrics } from "@/lib/data/resume";

export function NetworkSecurityDashboard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Card as="section" className="mt-8" variant="terminal">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(121,134,155,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(121,134,155,0.11)_1px,transparent_1px)] bg-[size:36px_36px] opacity-25" />
      <div className="relative p-5 sm:p-6">
        <div className="flex flex-col gap-4 border-b border-line pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow-text text-mint">Network security dashboard</p>
            <h3 className="section-title mt-2">Network Security Dashboard</h3>
          </div>
          <span className="badge-text w-fit rounded-md border border-remediation/40 bg-ink-soft/80 px-3 py-2 text-remediation">
            Brute Force
          </span>
        </div>

        <div className="mt-5 grid gap-4">
          {supplementalImpactMetrics.map((stat) => (
            <Card
              className="before:bg-remediation"
              key={stat.label}
              variant="metric"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-remediation">
                    Brute Force
                  </p>
                  <p className="heading-text mt-3 text-4xl leading-none">{stat.value}</p>
                </div>
                <span className="badge-text grid rounded-md border border-mint/30 bg-mint/10 px-3 py-2 text-center text-mint">
                  <span>Incidents</span>
                  <span>Reduced</span>
                </span>
              </div>
              <p className="stat-label mt-4 text-slate-300">{stat.label}</p>
              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.12em] text-slate-500">
                  <span>Reduction</span>
                  <span>{stat.value}</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-remediation/15">
                  <motion.div
                    className="h-full rounded-full bg-[linear-gradient(90deg,rgba(138,180,248,0.94)_0%,rgba(125,211,199,0.84)_100%)]"
                    initial={shouldReduceMotion ? false : { width: 0 }}
                    transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    whileInView={shouldReduceMotion ? undefined : { width: stat.value }}
                    style={shouldReduceMotion ? { width: stat.value } : undefined}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
}
