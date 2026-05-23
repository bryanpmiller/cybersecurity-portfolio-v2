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

      <Card as="section" className="mt-10">
        <h2 className="heading-text text-xl">Cybersecurity focus</h2>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300">{profile.professionalSummary}</p>
      </Card>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card as="section">
          <h2 className="heading-text text-xl">Profile highlights</h2>
          <div className="mt-6 grid gap-3">
            {resumeHighlights.map((highlight) => (
              <div className="rounded-md border border-line bg-ink-soft/70 p-4" key={highlight.title}>
                <h3 className="heading-text text-base">{highlight.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{highlight.body}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card as="aside">
          <h2 className="heading-text text-xl">Target roles</h2>
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
