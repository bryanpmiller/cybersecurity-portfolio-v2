import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/lib/data/profile";
import { resumeHighlights } from "@/lib/data/resume";
import { skillGroups } from "@/lib/data/skills";

export const metadata: Metadata = {
  title: "Resume",
  description: "Web resume and PDF download for Bryan Miller."
};

export default function ResumePage() {
  return (
    <PageContainer>
      <div className="flex min-w-0 flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader eyebrow="Resume" title="Resume Snapshot" description={profile.resumeSnapshot} />
        <Button href={profile.resumeUrl}>Download PDF</Button>
      </div>

      <Card as="section" className="mt-8 sm:mt-10">
        <h2 className="panel-title">Profile</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {resumeHighlights.map((highlight) => (
            <div className="min-w-0 rounded-md border border-line bg-ink-soft/70 p-4" key={highlight.title}>
              <h3 className="card-title">{highlight.title}</h3>
              <p className="compact-copy mt-2 whitespace-pre-line">{highlight.body}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card as="section" className="mt-8">
        <h2 className="panel-title">Skills Snapshot</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {skillGroups.slice(0, 4).map((group) => (
            <div className="min-w-0 rounded-md border border-line bg-ink-soft/70 p-4" key={group.title}>
              <h3 className="card-title">{group.title}</h3>
              <p className="technical-block mt-2">{group.skills.join(", ")}</p>
            </div>
          ))}
        </div>
      </Card>
    </PageContainer>
  );
}
