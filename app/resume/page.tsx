import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/lib/data/profile";
import { impactMetrics, resumeHighlights } from "@/lib/data/resume";
import { getSkillsForGroup, skillGroups } from "@/lib/data/skills";

export const metadata: Metadata = {
  title: "Resume",
  description: "Web resume and PDF download for Bryan Miller's full resume."
};

export default function ResumePage() {
  const experienceHighlight = resumeHighlights.find((highlight) => highlight.title === "Experience");
  const profileHighlights = resumeHighlights.filter(
    (highlight) => highlight.title === "Education" || highlight.title === "Certificates"
  );
  const snapshotTitleClassName =
    "card-title break-words border-l-2 border-evidence/70 pl-3 text-[1.05rem] text-white";

  return (
    <PageContainer>
      <Reveal>
        <div className="flex min-w-0 flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader eyebrow="Resume" title="Resume Snapshot" description={profile.resumeSnapshot} />
          <Button className="w-full sm:w-auto" href={profile.resumeUrl} icon={<Download aria-hidden="true" className="size-4" />}>
            Full Resume
          </Button>
        </div>
      </Reveal>

      {experienceHighlight ? (
        <Reveal delay={0.06}>
          <Card as="section" className="mt-8 overflow-hidden sm:mt-10" variant="evidence">
            <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="min-w-0">
                <p className="eyebrow-text">Experience</p>
                <h2 className="section-title mt-2">Experience Snapshot</h2>
                <p className="body-copy mt-4">{experienceHighlight.body}</p>
              </div>

              <div className="min-w-0 rounded-md border border-line bg-ink-soft/60 p-4 sm:p-5">
                <p className="eyebrow-text">Supported Metrics</p>
                <div className="mt-4 grid gap-3">
                  {impactMetrics.map((stat) => (
                    <div
                      className="grid min-w-0 grid-cols-[5.25rem_1fr] items-center gap-3 rounded-md border border-line bg-surface/70 p-3"
                      key={stat.label}
                    >
                      <p className="heading-text text-2xl leading-none text-evidence">{stat.value}</p>
                      <p className="compact-copy">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      ) : null}

      <Reveal delay={0.12}>
        <Card as="section" className="mt-8 sm:mt-10">
          <h2 className="panel-title">Profile</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {profileHighlights.map((highlight) => (
              <div className="min-w-0 rounded-md border border-line bg-ink-soft/70 p-4" key={highlight.title}>
                <h3 className={snapshotTitleClassName}>{highlight.title}</h3>
                <p className="compact-copy mt-2 whitespace-pre-line">{highlight.body}</p>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>

      <Reveal delay={0.18}>
        <Card as="section" className="mt-8">
          <h2 className="panel-title">Skills Snapshot</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div className="min-w-0 rounded-md border border-line bg-ink-soft/70 p-4" key={group.title}>
                <div className="flex min-w-0 items-start justify-between gap-3">
                  <h3 className={`${snapshotTitleClassName} min-w-0`}>{group.title}</h3>
                  <span className="badge-text shrink-0 rounded-md border border-lineStrong/70 bg-surface/70 px-2 py-1 text-slate-300">
                    {getSkillsForGroup(group).length} skills
                  </span>
                </div>
                <p className="technical-block mt-3">{group.primarySkills.join(", ")}</p>
                <p className="compact-copy mt-2">{group.supportingSkills.join(", ")}</p>
              </div>
            ))}
          </div>
        </Card>
      </Reveal>
    </PageContainer>
  );
}
