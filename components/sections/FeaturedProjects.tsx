"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Activity, ArrowUpRight, CheckSquare, Search, ShieldCheck, Wrench } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { GitHubMarkIcon } from "@/components/ui/GitHubMarkIcon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Project } from "@/lib/data/projects";
import { projects as defaultProjects } from "@/lib/data/projects";

type FeaturedProjectsProps = {
  projects?: Project[];
  showHeader?: boolean;
};

const projectIcons: Record<string, LucideIcon> = {
  "vulnerability-management-program": ShieldCheck,
  "disa-stig-remediation": CheckSquare,
  "password-spray-threat-hunt": Search,
  "akira-ransomware-threat-hunt": Activity
};

function getStigStateClasses(state: string) {
  const normalizedState = state.toLowerCase();

  if (normalizedState === "failed" || normalizedState === "complete") {
    return "border-severityCritical/30 bg-severityCritical/10 text-severityCritical";
  }

  if (normalizedState === "open" || normalizedState === "executed") {
    return "border-severityMedium/30 bg-severityMedium/10 text-severityMedium";
  }

  if (normalizedState === "passed" || normalizedState === "remediated") {
    return "border-mint/30 bg-mint/10 text-mint";
  }

  return "border-remediation/30 bg-remediation/10 text-remediation";
}

function ProjectPreview({ shouldReduceMotion, slug }: { shouldReduceMotion: boolean; slug: string }) {
  if (slug === "vulnerability-management-program") {
    return (
      <div className="grid h-full min-w-0 gap-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-slate-400">Scan Summary</span>
          <span className="font-mono text-xs font-semibold text-mint">32 -&gt; 4</span>
        </div>
        <div className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-slate-400">
          <span>Critical</span>
          <div className="h-2 rounded-full bg-severityCritical/20">
            <div className="h-2 w-full rounded-full bg-[linear-gradient(90deg,rgba(255,138,138,0.92),rgba(125,211,199,0.82))]" />
          </div>
          <span className="text-mint">100%</span>
          <span>High</span>
          <div className="h-2 rounded-full bg-severityHigh/20">
            <div className="h-2 w-[92%] rounded-full bg-severityHigh" />
          </div>
          <span className="text-mint">92%</span>
          <span>Medium</span>
          <div className="h-2 rounded-full bg-severityMedium/20">
            <div className="h-2 w-[88%] rounded-full bg-severityMedium" />
          </div>
          <span className="text-mint">88%</span>
        </div>
        <div className="mt-auto flex h-8 items-end gap-1.5 border-t border-line pt-2">
          {[28, 22, 18, 13, 9, 6, 4].map((height, index) => (
            <div className="flex-1 rounded-t bg-evidence/25" key={height} style={{ height: `${height}px` }}>
              {index === 6 ? <div className="h-full rounded-t bg-mint/70" /> : null}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (slug === "disa-stig-remediation") {
    const rows = [
      ["DISA STIG Audit", "Scan", "Complete"],
      ["Remediation Scripts", "Powershell", "Executed"],
      ["STIG Remediation", "Automation", "Remediated"]
    ];

    return (
      <div className="grid h-full min-w-0 gap-1.5">
        <div className="grid min-w-0 grid-cols-[1fr_auto] gap-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-slate-400">
          <span>STIG Control</span>
          <span>State</span>
        </div>
        {rows.map(([control, hint, state]) => (
          <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded border border-line bg-ink-soft/70 px-3 py-2" key={control}>
            <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-2">
              <p className="truncate font-mono text-[0.7rem] font-semibold leading-none text-slate-100">{control}</p>
              <span className="hidden rounded border border-line bg-surface/70 px-1.5 py-1 font-mono text-[0.65rem] leading-none text-slate-400 sm:inline">
                {hint}
              </span>
            </div>
            <span className={`whitespace-nowrap rounded-full border px-2 py-1 font-mono text-[0.58rem] uppercase tracking-[0.08em] ${getStigStateClasses(state)}`}>
              {state}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (slug === "password-spray-threat-hunt") {
    const events = ["159.26.106.84", "RDP", "slflare", "slflarewinsysmo"];

    return (
      <div className="grid h-full min-w-0 content-between gap-3">
        <motion.div
          className="flex min-w-0 items-center gap-1.5 sm:gap-2"
          initial={shouldReduceMotion ? false : "hidden"}
          variants={{
            hidden: {},
            show: {
              transition: {
                delayChildren: 0.15,
                staggerChildren: 0.14
              }
            }
          }}
          viewport={{ amount: 0.6, once: true }}
          whileInView={shouldReduceMotion ? undefined : "show"}
        >
          {events.map((event, index) => (
            <motion.div
              className="flex min-w-0 flex-1 items-center gap-1.5 sm:gap-2"
              key={event}
              variants={{
                hidden: { opacity: 0, x: -14 },
                show: {
                  opacity: 1,
                  transition: { duration: 0.38 },
                  x: 0
                }
              }}
            >
              <div className="min-w-0 rounded border border-detection/30 bg-detection/10 px-1.5 py-2 text-center font-mono text-[0.62rem] font-semibold text-slate-100 sm:px-2 sm:text-[0.65rem]">
                <span className="block truncate">{event}</span>
              </div>
              {index < events.length - 1 ? (
                <motion.span
                  className="text-evidence"
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { duration: 0.25 } }
                  }}
                >
                  -&gt;
                </motion.span>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
        <div className="grid grid-cols-4 gap-2 border-t border-line pt-3">
          {["Fail", "Fail", "Fail", "Success"].map((state, index) => (
            <motion.div
              className="grid gap-1"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              key={`${state}-${index}`}
              transition={{ delay: 0.45 + index * 0.06, duration: 0.25 }}
              viewport={{ amount: 0.8, once: true }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            >
              <motion.span
                className={`h-2 rounded-full ${state === "Success" ? "bg-mint" : "bg-severityCritical/70"}`}
                initial={shouldReduceMotion ? false : { scaleX: 0 }}
                style={{ transformOrigin: "left" }}
                transition={{ delay: 0.5 + index * 0.06, duration: 0.3 }}
                viewport={{ amount: 0.8, once: true }}
                whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
              />
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-slate-400">{state}</span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (slug === "akira-ransomware-threat-hunt") {
    const stages = ["AnyDesk", "Staging", "Evasion", "Encryption"];
    const tags = ["T1219", "T1074", "T1562", "T1486"];

    return (
      <div className="grid h-full min-w-0 gap-4">
        <motion.div
          className="grid min-w-0 grid-cols-4 gap-1.5 sm:gap-2"
          initial={shouldReduceMotion ? false : "hidden"}
          variants={{
            hidden: {},
            show: {
              transition: {
                delayChildren: 0.12,
                staggerChildren: 0.16
              }
            }
          }}
          viewport={{ amount: 0.6, once: true }}
          whileInView={shouldReduceMotion ? undefined : "show"}
        >
          {stages.map((stage, index) => (
            <motion.div
              className="relative min-w-0 rounded border border-detection/30 bg-detection/10 px-1.5 py-3 text-center sm:px-2"
              key={stage}
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: {
                  opacity: 1,
                  transition: { duration: 0.38 },
                  y: 0
                }
              }}
            >
              {index < stages.length - 1 ? (
                <motion.span
                  className="absolute left-[calc(100%+0.25rem)] top-1/2 hidden h-px w-2 origin-left bg-evidence/60 md:block"
                  variants={{
                    hidden: { opacity: 0, scaleX: 0 },
                    show: { opacity: 1, scaleX: 1, transition: { duration: 0.28 } }
                  }}
                />
              ) : null}
              <p className="truncate font-mono text-[0.62rem] font-semibold text-slate-100 sm:text-[0.65rem]">{stage}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="mt-auto flex flex-wrap gap-2 border-t border-line pt-3"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
          transition={{ delay: 0.72, duration: 0.3 }}
          viewport={{ amount: 0.8, once: true }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        >
          {tags.map((tag) => (
            <span className="rounded border border-line bg-ink-soft/80 px-2 py-1 font-mono text-[0.65rem] text-slate-300" key={tag}>
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex h-full items-end">
      <div className="h-2 w-full rounded-full border border-lineStrong bg-evidence/20" />
    </div>
  );
}

function CaseStudySnapshot({ project }: { project: Project }) {
  if (!project.cardSummary) {
    return null;
  }

  const snapshotRows = [
    {
      label: "Problem",
      value: project.cardSummary.problem
    },
    {
      label: "Outcome",
      value: project.cardSummary.outcome
    },
    {
      label: "Concepts",
      value: project.cardSummary.concepts
    }
  ];

  return (
    <div aria-label={`${project.title} case study snapshot`} className="mt-5 grid gap-2 rounded-md border border-line bg-ink-soft/60 p-3">
      {snapshotRows.map((row) => (
        <div className="grid min-w-0 content-start gap-1 rounded border border-line/80 bg-surface/45 px-3 py-2 md:min-h-[5.75rem] transition-colors duration-200 group-hover/project:border-lineStrong/80 group-hover/project:bg-ink-soft/70" key={row.label}>
          <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-evidence">{row.label}</p>
          <p className="line-clamp-2 text-sm leading-5 text-slate-300">{row.value}</p>
        </div>
      ))}
    </div>
  );
}

function ToolingPanel({ tools }: { tools: string[] }) {
  return (
    <div className="mt-5 rounded-md border border-line bg-ink-soft/55 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-colors duration-200 group-hover/project:border-lineStrong/80 group-hover/project:bg-ink-soft/70">
      <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-slate-400">
        <Wrench aria-hidden="true" className="mr-2 inline size-3.5 align-[-0.2em] text-evidence" />
        Tools
      </p>
      <div className="mt-3 flex min-w-0 content-start flex-wrap gap-1.5 md:min-h-[4.875rem]">
        {tools.map((tool) => (
          <span
            className="max-w-full rounded border border-lineStrong/60 bg-surface/70 px-2.5 py-1.5 text-xs font-semibold leading-none text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            key={tool}
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="mt-auto grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 pt-6">
      <Link
        className="text-link focus-ring group/link inline-flex min-h-10 min-w-0 items-center justify-center gap-2 rounded-md border border-evidence/35 bg-evidence/10 px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.1em] text-evidence transition-[background,border-color,color] hover:border-evidence/70 hover:bg-evidence/15 hover:text-ink"
        href={`/projects/${project.slug}`}
      >
        <span className="truncate">View case study</span>
        <ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
      </Link>
      {project.githubUrl ? (
        <a
          aria-label={`Open GitHub repository for ${project.title}`}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-ink bg-ink text-white transition-[background,border-color] hover:border-evidence hover:bg-evidence focus:outline-none focus-visible:ring-2 focus-visible:ring-evidence/75 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          href={project.githubUrl}
          rel="noreferrer"
          target="_blank"
        >
          <GitHubMarkIcon className="size-4" />
        </a>
      ) : null}
    </div>
  );
}

export function FeaturedProjects({ projects = defaultProjects, showHeader = true }: FeaturedProjectsProps) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const ProjectTitle = showHeader ? "h3" : "h2";

  return (
    <section className={showHeader ? "mt-14 min-w-0 sm:mt-16" : "min-w-0"}>
      {showHeader ? (
        <Reveal>
          <SectionHeader
            description="Case studies covering vulnerability management, secure configuration, remediation automation, and threat hunting."
            eyebrow="Featured Projects"
            level="h2"
            title="Cybersecurity work organized for hiring review"
          />
        </Reveal>
      ) : null}
      <div className={showHeader ? "mt-8 grid min-w-0 items-stretch gap-5 md:auto-rows-fr md:grid-cols-2 lg:gap-6" : "grid min-w-0 items-stretch gap-5 md:auto-rows-fr md:grid-cols-2 lg:gap-6"}>
        {projects.map((project) => {
          const ProjectIcon = projectIcons[project.slug] ?? ShieldCheck;

          return (
            <motion.div
              className="min-w-0 h-full"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              key={project.slug}
              style={{ transformOrigin: "center" }}
              transition={{ duration: 0.42 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={shouldReduceMotion ? undefined : {
                transition: { duration: 0.16, ease: "easeOut" },
                y: -2
              }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            >
              <Card as="article" className="group/project flex h-full min-w-0 flex-col overflow-hidden focus-within:border-evidence/45" variant="project">
                <div className="mb-5 h-48 min-w-0 overflow-hidden rounded-md border border-line bg-ink-soft/55 p-3 transition-colors duration-200 group-hover/project:border-lineStrong/80 group-hover/project:bg-ink-soft/70 sm:p-4">
                  <ProjectPreview shouldReduceMotion={shouldReduceMotion} slug={project.slug} />
                </div>
                <div className="flex flex-1 flex-col">
                  <p className="eyebrow-text inline-flex min-h-8 items-start gap-2 text-mint">
                    <ProjectIcon aria-hidden="true" className="size-3.5" />
                    {project.role}
                  </p>
                  <ProjectTitle className="panel-title mt-3 md:min-h-[3.25rem]">{project.title}</ProjectTitle>
                  <p className="supporting-copy mt-3 md:min-h-28">{project.summary}</p>
                  <CaseStudySnapshot project={project} />
                  <ToolingPanel tools={project.tools} />
                  <ProjectActions project={project} />
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
