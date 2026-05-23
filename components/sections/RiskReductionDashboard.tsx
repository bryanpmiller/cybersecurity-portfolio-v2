"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { vulnerabilityReductionStats } from "@/lib/data/resume";

const metricBadges: Record<string, string> = {
  "Critical vulnerabilities reduced for the server team": "2 -> 0",
  "High vulnerabilities reduced for the server team": "12 -> 1",
  "Medium vulnerabilities reduced for the server team": "17 -> 2"
};

function getReductionSeverity(label: string) {
  const normalizedLabel = label.toLowerCase();

  if (normalizedLabel.includes("critical")) {
    return {
      name: "Critical",
      accent: "text-severityCritical",
      border: "border-severityCritical/35",
      bar: "bg-[linear-gradient(90deg,rgba(248,113,113,0.95)_0%,rgba(45,212,191,0.82)_100%)]",
      rail: "bg-severityCritical/15",
      marker: "before:bg-[linear-gradient(180deg,rgba(248,113,113,0.95)_0%,rgba(45,212,191,0.82)_100%)]"
    };
  }

  if (normalizedLabel.includes("high")) {
    return {
      name: "High",
      accent: "text-severityHigh",
      border: "border-severityHigh/35",
      bar: "bg-severityHigh",
      rail: "bg-severityHigh/15",
      marker: "before:bg-severityHigh"
    };
  }

  return {
    name: "Medium",
    accent: "text-severityMedium",
    border: "border-severityMedium/35",
    bar: "bg-severityMedium",
    rail: "bg-severityMedium/15",
    marker: "before:bg-severityMedium"
  };
}

function getReductionPercent(value: string) {
  return Number.parseInt(value.replace("%", ""), 10);
}

export function RiskReductionDashboard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
    >
      <Card as="section" className="mt-8" variant="terminal">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(49,80,111,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(49,80,111,0.12)_1px,transparent_1px)] bg-[size:36px_36px] opacity-25" />
        <div className="relative p-5 sm:p-6">
          <div className="flex flex-col gap-4 border-b border-line pb-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow-text text-mint">Remediation dashboard</p>
              <h3 className="heading-text mt-2 text-2xl">Vulnerability Reduction Metrics</h3>
            </div>
            <div className="grid w-full grid-cols-3 gap-2 md:w-auto md:min-w-64">
              {vulnerabilityReductionStats.map((stat, index) => {
                const severity = getReductionSeverity(stat.label);

                return (
                  <motion.div
                    className={`rounded-md border bg-ink-soft/75 px-3 py-2 ${severity.border}`}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                    key={stat.label}
                    transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
                    viewport={{ once: true }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  >
                    <p className={`font-mono text-lg font-semibold leading-none ${severity.accent}`}>{stat.value}</p>
                    <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-slate-500">
                      {severity.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {vulnerabilityReductionStats.map((stat, index) => {
              const severity = getReductionSeverity(stat.label);
              const percent = getReductionPercent(stat.value);
              const badgeText = metricBadges[stat.label] ?? "Reduced";

              return (
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  key={stat.label}
                  style={{ transformOrigin: "center" }}
                  transition={{ duration: 0.42, delay: 0.1 + index * 0.08, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                >
                  <Card variant="metric" className={severity.marker}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={`font-mono text-xs font-semibold uppercase tracking-[0.14em] ${severity.accent}`}>
                          {severity.name}
                        </p>
                        <p className="heading-text mt-3 text-4xl">{stat.value}</p>
                      </div>
                      <span className="badge-text grid rounded-md border border-mint/30 bg-mint/10 px-3 py-2 text-center text-mint">
                        <span>Findings</span>
                        <span>{badgeText}</span>
                      </span>
                    </div>
                    <p className="stat-label mt-4 text-slate-300">{stat.label}</p>
                    <div className="mt-5">
                      <div className="mb-2 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.12em] text-slate-500">
                        <span>Reduction</span>
                        <span>{stat.value}</span>
                      </div>
                      <div className={`h-2.5 overflow-hidden rounded-full ${severity.rail}`}>
                        <motion.div
                          className={`h-full rounded-full ${severity.bar}`}
                          initial={shouldReduceMotion ? false : { width: 0 }}
                          transition={{ duration: 0.65, delay: 0.2 + index * 0.08, ease: "easeOut" }}
                          viewport={{ once: true }}
                          whileInView={shouldReduceMotion ? undefined : { width: `${percent}%` }}
                          style={shouldReduceMotion ? { width: `${percent}%` } : undefined}
                        />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
