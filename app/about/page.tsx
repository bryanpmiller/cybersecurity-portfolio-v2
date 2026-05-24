import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile, targetRoles } from "@/lib/data/profile";
import { resumeHighlights } from "@/lib/data/resume";

export const metadata: Metadata = {
  title: "About",
  description: "Professional summary for Bryan Miller's cybersecurity portfolio."
};

export default function AboutPage() {
  return (
    <PageContainer>
      <SectionHeader eyebrow="About" title="Professional summary" description={profile.headline} />

      <Card as="section" className="mt-8 sm:mt-10">
        <h2 className="panel-title">Cybersecurity focus</h2>
        <p className="body-copy mt-4 max-w-4xl">{profile.professionalSummary}</p>
      </Card>

      <section className="mt-8 grid min-w-0 gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        <Card as="section">
          <h2 className="panel-title">Profile highlights</h2>
          <div className="mt-6 grid gap-3">
            {resumeHighlights.map((highlight) => (
              <div className="min-w-0 rounded-md border border-line bg-ink-soft/70 p-4" key={highlight.title}>
                <h3 className="card-title">{highlight.title}</h3>
                <p className="compact-copy mt-2">{highlight.body}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card as="aside">
          <h2 className="panel-title">Target roles</h2>
          <div className="mt-5 grid gap-3">
            {targetRoles.map((role) => (
              <div className="badge-text rounded-md border border-line bg-ink-soft/70 px-4 py-3 text-slate-200" key={role}>
                {role}
              </div>
            ))}
          </div>
        </Card>
      </section>
    </PageContainer>
  );
}
