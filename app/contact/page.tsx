import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact links for Bryan Miller, including LinkedIn, GitHub, and resume access."
};

export default function ContactPage() {
  return (
    <PageContainer>
      <Reveal>
        <SectionHeader
          eyebrow="Contact"
          title="Where to find me"
          description="Connect through LinkedIn, review my GitHub project evidence, or open my resume for direct contact details."
        />
      </Reveal>
      <section className="mt-8 grid min-w-0 gap-5 sm:mt-10 md:grid-cols-3 lg:gap-6">
        <Reveal delay={0.06}>
          <Card>
            <h2 className="panel-title">LinkedIn</h2>
            <p className="compact-copy mt-3">Connect for recruiting conversations and professional background.</p>
            <div className="mt-5">
              <Button external href={profile.linkedinUrl} variant="secondary">
                View LinkedIn
              </Button>
            </div>
          </Card>
        </Reveal>
        <Reveal delay={0.12}>
          <Card>
            <h2 className="panel-title">GitHub</h2>
            <p className="compact-copy mt-3">Review project repositories and supporting technical evidence.</p>
            <div className="mt-5">
              <Button external href={profile.githubUrl} variant="secondary">
                View GitHub
              </Button>
            </div>
          </Card>
        </Reveal>
        <Reveal delay={0.18}>
          <Card>
            <h2 className="panel-title">Resume</h2>
            <p className="compact-copy mt-3">Use the resume PDF for direct contact details until a verified email link is added.</p>
            <div className="mt-5">
              <Button href={profile.resumeUrl} variant="secondary">
                Open Resume
              </Button>
            </div>
          </Card>
        </Reveal>
      </section>
    </PageContainer>
  );
}
