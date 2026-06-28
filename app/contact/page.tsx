import { FileText, Mail } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GitHubLogo } from "@/components/ui/GitHubLogo";
import { GitHubMarkIcon } from "@/components/ui/GitHubMarkIcon";
import { LinkedInLogo } from "@/components/ui/LinkedInLogo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { profile } from "@/lib/data/profile";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("Contact", "Contact links for Bryan Miller, including direct email, LinkedIn, GitHub, and resume access.", "/contact");

export default function ContactPage() {
  return (
    <PageContainer>
      <Reveal>
        <SectionHeader
          eyebrow="Contact"
          title="Let's get in touch"
          description="Email me directly for recruiter conversations, connect through LinkedIn, review my GitHub project evidence, or open my resume."
        />
      </Reveal>
      <section className="mt-8 grid min-w-0 gap-5 sm:mt-10 md:grid-cols-2 xl:grid-cols-4 lg:gap-6">
        <Reveal className="h-full" delay={0.03}>
          <Card as="section" className="group flex h-full flex-col overflow-hidden border-lineStrong/80" variant="evidence">
            <div className="flex min-w-0 items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-evidence/35 bg-evidence/10 text-evidence transition-[background,border-color] duration-200 group-hover:border-evidence/55 group-hover:bg-evidence/15">
                <Mail aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <p className="eyebrow-text text-evidence">Direct Communication</p>
                <h2 className="panel-title mt-2">Email</h2>
              </div>
            </div>
            <p className="compact-copy mt-5">Use email for recruiter messages, interview requests, and role-related questions.</p>
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
              <Button ariaLabel={`Email Bryan at ${profile.email}`} className="shrink-0" href={profile.emailUrl} icon={<Mail aria-hidden="true" className="size-4" />} variant="secondary">
                Email Me
              </Button>
              <a className="min-w-0 break-all text-sm font-semibold text-evidence underline-offset-4 hover:underline" href={profile.emailUrl}>
                {profile.email}
              </a>
            </div>
          </Card>
        </Reveal>
        <Reveal className="h-full" delay={0.06}>
          <Card as="section" className="group flex h-full flex-col overflow-hidden border-lineStrong/80" variant="evidence">
            <div className="flex min-w-0 items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-remediation/35 bg-remediation/10 text-remediation transition-[background,border-color] duration-200 group-hover:border-remediation/55 group-hover:bg-remediation/15">
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
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-ink bg-ink text-white transition-[background,border-color] duration-200 group-hover:border-evidence group-hover:bg-evidence">
                <GitHubLogo className="h-6 w-auto" variant="invertocat" />
              </span>
              <div className="min-w-0">
                <p className="eyebrow-text">Project evidence</p>
                <h2 className="panel-title mt-2">GitHub</h2>
              </div>
            </div>
            <p className="compact-copy mt-3">Review project repositories for full in depth project write ups and supporting technical evidence.</p>
            <div className="mt-auto pt-6">
              <Button external href={profile.githubUrl} icon={<GitHubMarkIcon className="size-4" />} variant="secondary">
                View GitHub
              </Button>
            </div>
          </Card>
        </Reveal>
        <Reveal className="h-full" delay={0.18}>
          <Card as="section" className="group flex h-full flex-col overflow-hidden border-lineStrong/80" variant="evidence">
            <div className="flex min-w-0 items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md border border-remediation/35 bg-remediation/10 text-remediation transition-[background,border-color] duration-200 group-hover:border-remediation/55 group-hover:bg-remediation/15">
                <FileText aria-hidden="true" className="size-5" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <p className="eyebrow-text text-remediation">Traditional Resume</p>
                <h2 className="panel-title mt-2">PDF</h2>
              </div>
            </div>
            <p className="compact-copy mt-5">
              Open the resume PDF to view my resume in the traditional format.
            </p>
            <div className="mt-auto pt-6">
              <Button accent="remediation" href={profile.resumeUrl} icon={<FileText aria-hidden="true" className="size-4" />} variant="secondary">
                Open Resume
              </Button>
            </div>
          </Card>
        </Reveal>
      </section>
    </PageContainer>
  );
}
