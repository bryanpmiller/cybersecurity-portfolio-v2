import type { LucideIcon } from "lucide-react";
import { Activity, FileText, ShieldCheck, Wrench } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillGroups } from "@/lib/data/skills";

type SkillsOverviewProps = {
  showHeader?: boolean;
};

const categoryIcons: Record<string, LucideIcon> = {
  "Automation / Scripting": Wrench,
  "Cloud / Network Security": ShieldCheck,
  "Governance / Compliance Frameworks": FileText,
  "SecOps / Detection Engineering": Activity,
  "Secure Configuration / Hardening": ShieldCheck,
  "Vulnerability Management": Activity
};

export function SkillsOverview({ showHeader = true }: SkillsOverviewProps) {
  const GroupHeading = showHeader ? "h3" : "h2";

  return (
    <section className={showHeader ? "mt-14 min-w-0 sm:mt-16" : "min-w-0"}>
      {showHeader ? (
        <Reveal>
          <SectionHeader
            description="A role-focused view of the tools, frameworks, and technical skills used across vulnerability management, secure configuration, automation, and threat hunting work."
            eyebrow="Skills"
            level="h2"
            title="Cybersecurity skills grouped by role relevance"
          />
        </Reveal>
      ) : null}
      <div
        className={
          showHeader
            ? "mt-8 grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3"
            : "grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3"
        }
      >
        {skillGroups.map((group, index) => {
          const Icon = categoryIcons[group.title] ?? ShieldCheck;

          return (
            <Reveal className="h-full" delay={index * 0.05} key={group.title} y={12}>
              <Card as="section" className="group h-full overflow-hidden" variant="evidence">
                <div className="flex min-w-0 items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-evidence/25 bg-evidence/10 text-evidence shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors duration-200 group-hover:border-evidence/45 group-hover:bg-evidence/15">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <GroupHeading className="panel-title">{group.title}</GroupHeading>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Core Tools / Methods
                  </p>
                  <ul className="mt-3 flex min-w-0 flex-wrap gap-2">
                    {group.primarySkills.map((skill) => (
                      <li
                        className="badge-text min-w-0 rounded-md border border-evidence/65 bg-[linear-gradient(180deg,rgba(110,231,216,0.2)_0%,rgba(24,33,49,0.9)_100%)] px-3 py-2 font-semibold text-slate-50 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_26px_rgba(0,0,0,0.24)]"
                        key={skill}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-md border border-line bg-ink-soft/55 p-4">
                  <p className="eyebrow-text">Supporting Capabilities</p>
                  <ul className="mt-3 grid min-w-0 gap-2">
                    {group.supportingSkills.map((skill) => (
                      <li className="compact-copy flex min-w-0 items-start gap-2" key={skill}>
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-remediation" aria-hidden="true" />
                        <span className="min-w-0">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
