import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GitHubLogo } from "@/components/ui/GitHubLogo";
import { LinkedInLogo } from "@/components/ui/LinkedInLogo";
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
        <Reveal className="h-full" delay={0.06}>
          <Card as="section" className="group flex h-full flex-col overflow-hidden border-lineStrong/80" variant="evidence">
            <div className="flex min-w-0 items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-remediation/35 bg-remediation/10 text-remediation shadow-[0_0_18px_rgba(138,180,248,0.13),inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-remediation/10 transition-[background,border-color,box-shadow] duration-200 group-hover:border-remediation/55 group-hover:bg-remediation/15 group-hover:shadow-[0_0_24px_rgba(138,180,248,0.2),inset_0_1px_0_rgba(255,255,255,0.12)]">
                <LinkedInLogo className="h-auto w-6" variant="bug" />
              </span>
              <div className="min-w-0">
                <p className="eyebrow-text text-remediation">Professional profile</p>
                <h2 className="panel-title mt-2">LinkedIn</h2>
              </div>
            </div>
            <p className="compact-copy mt-5">Connect for recruiting conversations and work history.</p>
            <div className="mt-auto pt-6">
              <Button accent="remediation" ariaLabel="View LinkedIn" external href={profile.linkedinUrl} variant="secondary">
                <LinkedInLogo className="h-5 w-auto" />
              </Button>
            </div>
          </Card>
        </Reveal>
        <Reveal className="h-full" delay={0.12}>
          <Card as="section" className="group flex h-full flex-col overflow-hidden border-lineStrong/80" variant="evidence">
            <div className="flex min-w-0 items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-white/35 bg-white/5 text-white shadow-[0_0_18px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/10 transition-[background,border-color,box-shadow] duration-200 group-hover:border-white/55 group-hover:bg-white/10 group-hover:shadow-[0_0_24px_rgba(255,255,255,0.18),inset_0_1px_0_rgba(255,255,255,0.16)]">
                <GitHubLogo className="h-6 w-auto" variant="invertocat" />
              </span>
              <div className="min-w-0">
                <p className="eyebrow-text">Project evidence</p>
                <h2 className="panel-title mt-2">GitHub</h2>
              </div>
            </div>
            <p className="compact-copy mt-3">Review project repositories and supporting technical evidence.</p>
            <div className="mt-auto pt-6">
              <Button accent="white" ariaLabel="View GitHub" external href={profile.githubUrl} variant="secondary">
                <GitHubLogo className="h-5 w-auto" />
              </Button>
            </div>
          </Card>
        </Reveal>
        <Reveal className="h-full" delay={0.18}>
          <Card as="section" className="group flex h-full flex-col overflow-hidden border-lineStrong/80" variant="evidence">
            <div className="flex min-w-0 items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-mint/35 bg-mint/10 text-mint shadow-[0_0_18px_rgba(125,211,199,0.13),inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-mint/10 transition-[background,border-color,box-shadow] duration-200 group-hover:border-mint/55 group-hover:bg-mint/15 group-hover:shadow-[0_0_24px_rgba(125,211,199,0.2),inset_0_1px_0_rgba(255,255,255,0.12)]">
                <FileText aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <p className="eyebrow-text text-mint">Resume PDF</p>
                <h2 className="panel-title mt-2">Resume</h2>
              </div>
            </div>
            <p className="compact-copy mt-5">
              Use the resume PDF for direct contact details until a verified email link is added.
            </p>
            <div className="mt-auto pt-6">
              <Button accent="mint" href={profile.resumeUrl} icon={<FileText aria-hidden="true" className="size-4" />} variant="secondary">
                Open Resume
              </Button>
            </div>
          </Card>
        </Reveal>
      </section>
    </PageContainer>
  );
}
