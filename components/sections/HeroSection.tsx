"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, BadgeCheck, Download, Folder, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GitHubMarkIcon } from "@/components/ui/GitHubMarkIcon";
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

const getMetricWidth = (value: string) => (value.endsWith("%") ? value : undefined);

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
    <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
      <motion.div {...entrance}>
        <div className="max-w-4xl">
          <h1 className="display-text">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-3xl font-heading text-[1.35rem] font-semibold leading-tight text-evidence sm:text-3xl lg:text-[2.05rem]">
            {profile.title}
          </p>
        </div>
        <p className="hero-lede mt-4 max-w-3xl sm:mt-5">{profile.positioning}</p>
        <div className="mt-7 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap">
          <Button className="w-full sm:w-auto sm:min-w-40" href="/projects" icon={<Folder aria-hidden="true" className="size-4" />}>
            View Projects
          </Button>
          <div className="grid grid-cols-2 gap-3 sm:contents">
            <Button className="w-full gap-1.5 whitespace-nowrap px-2 text-xs sm:w-auto sm:gap-2 sm:px-5 sm:text-sm" href={profile.resumeUrl} icon={<Download aria-hidden="true" className="size-4" />} variant="secondary">
              Download Resume
            </Button>
            <Button className="w-full gap-1.5 whitespace-nowrap px-2 text-xs sm:w-auto sm:gap-2 sm:px-5 sm:text-sm" external href={profile.githubUrl} icon={<GitHubMarkIcon className="size-4" />} variant="secondary">
              View GitHub
            </Button>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-4 sm:mt-7 sm:gap-3 sm:pt-5">
          {proofItems.map((item) => (
            <span className="badge-text inline-flex items-center gap-2 rounded-full border border-lineStrong/60 bg-ink-soft/75 px-3 py-2 text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]" key={item}>
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
          <div className="relative p-5 sm:p-6">
            <div className="flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="eyebrow-text inline-flex items-center gap-2 text-mint">
                  <Activity aria-hidden="true" className="size-3.5" />
                  Active Portfolio Signal
                </p>
                <h2 className="panel-title mt-2">Security work snapshot</h2>
              </div>
              <span className="badge-text w-fit rounded-full border border-mint/30 bg-mint/10 px-3 py-2 text-mint">
                <BadgeCheck aria-hidden="true" className="mr-1 inline size-3.5" />
                Live Evidence
              </span>
            </div>

            <div className="mt-5 grid gap-3">
              {portfolioSignals.map((signal, index) => (
                <div
                  className="grid gap-3 rounded-md border border-lineStrong/60 bg-ink-soft/80 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] sm:grid-cols-[auto_1fr_auto] sm:items-center sm:px-4"
                  key={signal.label}
                >
                  <span
                    aria-hidden="true"
                    className="hidden size-6 items-center justify-center rounded border border-evidence/25 bg-evidence/10 font-mono text-[0.58rem] font-semibold text-evidence sm:inline-flex"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.95rem] font-medium leading-6 text-slate-200">{signal.label}</span>
                  <span className="badge-text w-fit rounded-full border border-evidence/30 bg-evidence/10 px-3 py-1 text-evidence">
                    {signal.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-md border border-lineStrong/80 bg-surface/70 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-4">
              <p className="eyebrow-text text-slate-300">Recent Evidence</p>
              <div className="mt-4 grid gap-3">
                {evidenceRows.map((row) => (
                  <div className="grid gap-2 text-sm" key={row.label}>
                    <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-baseline">
                      <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-400">
                        <span className="text-evidence" aria-hidden="true">
                          &gt;
                        </span>{" "}
                        {row.label}
                      </p>
                      <p className="font-mono text-sm font-semibold text-white">{row.value}</p>
                    </div>
                    {getMetricWidth(row.value) ? (
                      <div aria-hidden="true" className="h-1.5 overflow-hidden rounded-full bg-line/70">
                        <div
                          className="h-full rounded-full bg-[linear-gradient(90deg,rgba(255,138,138,0.92),rgba(246,193,119,0.88),rgba(110,231,216,0.95))] shadow-[0_0_18px_rgba(110,231,216,0.22)]"
                          style={{ width: getMetricWidth(row.value) }}
                        />
                      </div>
                    ) : null}
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
