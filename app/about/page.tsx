import { PageContainer } from "@/components/layout/PageContainer";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile, targetRoles } from "@/lib/data/profile";
import { resumeHighlights } from "@/lib/data/resume";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("About", "Professional summary for Bryan Miller's cybersecurity portfolio.", "/about");

export default function AboutPage() {
  return (
    <PageContainer>
      <Reveal>
        <SectionHeader eyebrow="About" title="Professional summary" description={profile.headline} />
      </Reveal>

      <Reveal delay={0.06}>
        <Card as="section" className="mt-8 sm:mt-10">
          <h2 className="panel-title">Cybersecurity focus</h2>
          <p className="body-copy mt-4 max-w-4xl">{profile.professionalSummary}</p>
        </Card>
      </Reveal>

      <section className="mt-8 grid min-w-0 gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        <Reveal delay={0.12}>
          <Card as="section">
            <h2 className="panel-title">Profile highlights</h2>
            <div className="mt-6 grid gap-3">
              {resumeHighlights.map((highlight) => (
                <div className="min-w-0 rounded-md border border-line bg-ink-soft/70 p-4" key={highlight.title}>
                  <h3 className="card-title">{highlight.title}</h3>
                  <p className="compact-copy mt-2 whitespace-pre-line">{highlight.body}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.18}>
          <Card as="aside">
            <h2 className="panel-title">Target roles</h2>
            <div className="mt-5 grid gap-3">
              {targetRoles.map((role) => (
                <div className="chip-text rounded-md border border-line bg-ink-soft/70 px-4 py-3 text-slate-200" key={role}>
                  {role}
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </section>
    </PageContainer>
  );
}
