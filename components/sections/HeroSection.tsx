"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, BadgeCheck, Download, Folder, GitBranch, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { profile } from "@/lib/data/profile";
import { vulnerabilityReductionStats } from "@/lib/data/resume";

const portfolioSignals = [
  {
    label: "Vulnerability Management",
    status: "Verified"
  },
  {
    label: "PowerShell Remediation",
    status: "Built"
  },
  {
    label: "MDE / Sentinel Hunting",
    status: "Documented"
  },
  {
    label: "DISA STIG Hardening",
    status: "Validated"
  }
];

const proofItems = [
  "Security+",
  "B.S. Cybersecurity",
  `${vulnerabilityReductionStats[0].value} critical reduction`
];

const evidenceRows = [
  {
    label: "Critical findings reduced",
    value: vulnerabilityReductionStats[0].value
  },
  {
    label: "High findings reduced",
    value: vulnerabilityReductionStats[1].value
  },
  {
    label: "Tools",
    value: "Tenable, PowerShell, MDE, Sentinel"
  }
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const entrance = shouldReduceMotion
    ? {}
    : {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.55 }
    };
  const panelEntrance = shouldReduceMotion
    ? {}
    : {
      initial: { opacity: 0, y: 18 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.55, delay: 0.12 }
    };

  return (
    <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <motion.div {...entrance}>
        <p className="eyebrow-text mb-4">{profile.title}</p>
        <h1 className="heading-text max-w-4xl text-4xl sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-200">{profile.positioning}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/projects" icon={<Folder aria-hidden="true" className="size-4" />}>
            View Projects
          </Button>
          <Button href={profile.resumeUrl} icon={<Download aria-hidden="true" className="size-4" />} variant="secondary">
            Download Resume
          </Button>
          <Button external href={profile.githubUrl} icon={<GitBranch aria-hidden="true" className="size-4" />} variant="secondary">
            View GitHub
          </Button>
        </div>
        <div className="mt-7 flex flex-wrap gap-3 border-t border-line pt-5">
          {proofItems.map((item) => (
            <span className="badge-text inline-flex items-center gap-2 rounded-full border border-line bg-ink-soft/70 px-3 py-2 text-slate-300" key={item}>
              <ShieldCheck aria-hidden="true" className="size-3.5 text-mint" />
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div {...panelEntrance}>
        <Card
          as="aside"
          variant="terminal"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(121,134,155,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(121,134,155,0.12)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(110,231,216,0.72),rgba(167,139,250,0.5),transparent)]" />
          <div className="relative p-6">
            <div className="flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="eyebrow-text inline-flex items-center gap-2 text-mint">
                  <Activity aria-hidden="true" className="size-3.5" />
                  Active Portfolio Signal
                </p>
                <h2 className="heading-text mt-2 text-xl">Security work snapshot</h2>
              </div>
              <span className="badge-text w-fit rounded-full border border-mint/30 bg-mint/10 px-3 py-2 text-mint">
                <BadgeCheck aria-hidden="true" className="mr-1 inline size-3.5" />
                Live Evidence
              </span>
            </div>

            <div className="mt-5 grid gap-3">
              {portfolioSignals.map((signal) => (
                <div
                  className="grid gap-3 rounded-md border border-line bg-ink-soft/80 px-4 py-3 sm:grid-cols-[1fr_auto] sm:items-center"
                  key={signal.label}
                >
                  <span className="text-sm font-medium text-slate-200">{signal.label}</span>
                  <span className="badge-text w-fit rounded-full border border-evidence/30 bg-evidence/10 px-3 py-1 text-evidence">
                    {signal.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-md border border-lineStrong bg-surface/70 p-4">
              <p className="eyebrow-text text-slate-300">Recent Evidence</p>
              <div className="mt-4 grid gap-3">
                {evidenceRows.map((row) => (
                  <div className="grid gap-2 text-sm sm:grid-cols-[1fr_auto] sm:items-baseline" key={row.label}>
                    <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-400">
                      <span className="text-evidence" aria-hidden="true">
                        &gt;
                      </span>{" "}
                      {row.label}
                    </p>
                    <p className="font-mono text-sm font-semibold text-white">{row.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
