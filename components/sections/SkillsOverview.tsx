import type { LucideIcon } from "lucide-react";
import { Activity, ClipboardCheck, ShieldCheck, Wrench } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillGroups } from "@/lib/data/skills";

type SkillsOverviewProps = {
  showHeader?: boolean;
};

const categoryIcons: Record<string, LucideIcon> = {
  "Automation / Scripting": Wrench,
  "Hardening & Compliance": ClipboardCheck,
  "Security Operations & Investigation": Activity,
  "Vulnerability Management": Activity
};

export function SkillsOverview({ showHeader = true }: SkillsOverviewProps) {
  const GroupHeading = showHeader ? "h3" : "h2";

  return (
    <section className={showHeader ? "mt-14 min-w-0 sm:mt-16" : "min-w-0"}>
      {showHeader ? (
        <Reveal>
          <SectionHeader
            description="Skills used across vulnerability management, Windows hardening, PowerShell remediation, and security investigations."
            eyebrow="Skills"
            level="h2"
            title="Security skills"
          />
        </Reveal>
      ) : null}
      <div
        className={
          showHeader
            ? "mt-8 grid min-w-0 gap-4 lg:grid-cols-2"
            : "grid min-w-0 gap-4 lg:grid-cols-2"
        }
      >
        {skillGroups.map((group, index) => {
          const Icon = categoryIcons[group.title] ?? ShieldCheck;

          return (
            <Reveal className="h-full" delay={index * 0.05} key={group.title} y={12}>
              <Card as="section" className="group h-full p-0" variant="evidence">
                <div className="grid h-full min-w-0 gap-5 p-5 sm:p-6">
                  <div className="flex min-w-0 items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-lineStrong/35 bg-surfaceElevated text-evidence transition-colors duration-200 group-hover:border-lineStrong/55">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.9} />
                    </span>
                    <div className="min-w-0">
                      <GroupHeading className="panel-title">{group.title}</GroupHeading>
                      <p className="compact-copy mt-2">{group.description}</p>
                    </div>
                  </div>

                  <div className="grid min-w-0 gap-5 border-t border-line pt-5 sm:grid-cols-[0.9fr_1.1fr]">
                    <div className="min-w-0">
                      <p className="eyebrow-text text-[0.62rem]">Focus</p>
                      <ul className="mt-3 grid min-w-0 gap-2.5">
                        {group.primarySkills.map((skill) => (
                          <li
                            className="compact-copy flex min-w-0 items-start gap-2 font-medium"
                            key={skill}
                          >
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-evidence" aria-hidden="true" />
                            <span className="min-w-0">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="min-w-0 rounded-md border border-line bg-ink-soft/65 p-4">
                      <p className="eyebrow-text text-[0.62rem]">Tools / Methods</p>
                      <p className="compact-copy mt-2">{group.supportingSkills.join(", ")}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
