import { PageContainer } from "@/components/layout/PageContainer";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile, targetRoles } from "@/lib/data/profile";
import { cyberRangeExperience, professionalExperience, resumeHighlights } from "@/lib/data/experience";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "About",
  "Bryan Miller’s professional background in facility networking and Marine Corps leadership, alongside cybersecurity education and cyber-range practice.",
  "/about"
);

export default function AboutPage() {
  return (
    <PageContainer>
      <Reveal>
        <SectionHeader eyebrow="About" title="Systems experience. Operational perspective." description={profile.headline} />
      </Reveal>
      <Reveal delay={0.06}>
        <Card as="section" className="mt-8 sm:mt-10">
          <h2 className="panel-title">How my experience connects</h2>
          <p className="body-copy mt-4 max-w-4xl">{profile.professionalSummary}</p>
        </Card>
      </Reveal>

      <section className="mt-8 grid min-w-0 gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
        <div className="grid min-w-0 content-start gap-5">
          <Reveal delay={0.12}>
            <Card as="section">
              <h2 className="panel-title">Professional experience</h2>
              <div className="mt-6 grid gap-6">
                {professionalExperience.map((experience) => (
                  <div className="min-w-0 border-t border-line pt-4 first:border-t-0 first:pt-0" key={experience.organization}>
                    <h3 className="card-title">{experience.title}</h3>
                    <p className="compact-copy mt-2 font-semibold">{experience.organization} · {experience.dates}</p>
                    <p className="body-copy mt-3">{experience.body}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.15}>
            <Card as="section" variant="evidence">
              <p className="eyebrow-text">{cyberRangeExperience.environment}</p>
              <h2 className="panel-title mt-3">Cybersecurity practice</h2>
              <p className="compact-copy mt-3 font-semibold">{cyberRangeExperience.title} · {cyberRangeExperience.organization}</p>
              <p className="compact-copy mt-1">{cyberRangeExperience.dates}</p>
              <p className="body-copy mt-4">{cyberRangeExperience.body}</p>
            </Card>
          </Reveal>
        </div>
        <div className="grid min-w-0 content-start gap-5">
          <Reveal delay={0.18}>
            <Card as="aside">
              <h2 className="panel-title">Roles and areas of interest</h2>
              <ul className="mt-5 grid gap-3">
                {targetRoles.map((role) => (
                  <li className="chip-text rounded-md border border-line bg-ink-soft/70 px-4 py-3 text-slate-200" key={role}>{role}</li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal delay={0.21}>
            <Card as="section">
              <h2 className="panel-title">Qualifications</h2>
              <div className="mt-5 grid gap-5">
                {resumeHighlights.map((highlight) => (
                  <div key={highlight.title}>
                    <h3 className="card-title">{highlight.title}</h3>
                    <p className="compact-copy mt-2 whitespace-pre-line">{highlight.body}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </PageContainer>
  );
}
