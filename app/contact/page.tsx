import type { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact links for Bryan Miller, including LinkedIn, GitHub, and resume access."
};

export default function ContactPage() {
  return (
    <PageContainer>
      <SectionHeader
        eyebrow="Contact"
        title="Where to find me"
        description="Connect through LinkedIn, review my GitHub project evidence, or open my resume for direct contact details."
      />
      <section className="mt-10 grid gap-6 md:grid-cols-3">
        <Card>
          <h2 className="heading-text text-xl">LinkedIn</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Connect for recruiting conversations and professional background.</p>
          <div className="mt-5">
            <Button external href={profile.linkedinUrl} variant="secondary">
              View LinkedIn
            </Button>
          </div>
        </Card>
        <Card>
          <h2 className="heading-text text-xl">GitHub</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Review project repositories and supporting technical evidence.</p>
          <div className="mt-5">
            <Button external href={profile.githubUrl} variant="secondary">
              View GitHub
            </Button>
          </div>
        </Card>
        <Card>
          <h2 className="heading-text text-xl">Resume</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Use the resume PDF for direct contact details until a verified email link is added.</p>
          <div className="mt-5">
            <Button href={profile.resumeUrl} variant="secondary">
              Open Resume
            </Button>
          </div>
        </Card>
      </section>
    </PageContainer>
  );
}
