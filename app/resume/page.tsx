import { ArrowUpRight, Download } from "lucide-react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { mainResume, roleResumes } from "@/lib/data/resume";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Resumes",
  "Explore Bryan Miller's main resume and focused versions for SOC analyst, vulnerability management, and IT support roles. View or download each PDF.",
  "/resume"
);

export default function ResumePage() {
  return (
    <PageContainer>
      <header>
        <p className="eyebrow-text mb-6">Resume</p>
        <h1 className="max-w-4xl font-heading text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl">
          Experience, focused<br className="hidden sm:block" /> on the opportunity.
        </h1>
        <p className="lede-text mt-6 max-w-2xl">
          Start with my main resume for the full overview, or choose a focused
          version closest to your opening.
        </p>
      </header>

      <section aria-labelledby="main-resume" className="mt-10 grid gap-7 rounded-md border border-ink bg-ink p-6 text-white shadow-soft sm:mt-12 sm:p-8 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:gap-12">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/75">Start here · Complete overview</p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl" id="main-resume">Main Resume</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85">{mainResume.description}</p>
        </div>
        <div className="flex flex-col gap-3 lg:items-stretch">
          <Button ariaLabel="View main resume" className="!border-white !bg-white !text-ink !shadow-none hover:!bg-surfaceElevated focus-visible:!outline-white" href={mainResume.href}>
            View main resume <ArrowUpRight aria-hidden="true" className="size-4" />
          </Button>
          <Button ariaLabel="Download main resume PDF" className="!border-white/50 !bg-transparent !text-white !shadow-none hover:!bg-white/10 focus-visible:!outline-white" download href={mainResume.pdfUrl} variant="secondary" icon={<Download aria-hidden="true" className="size-4" />}>
            Download PDF
          </Button>
          <p className="text-center text-xs text-white/75">One-page PDF</p>
        </div>
      </section>

      <h2 className="section-title mt-12">Resumes by role</h2>
      <section aria-label="Choose a role-specific resume" className="mt-6 grid gap-10 lg:grid-cols-3 lg:gap-8">
        {roleResumes.map((resume, index) => (
          <article className="flex min-w-0 flex-col border-t-2 border-ink pt-6 sm:pt-8" key={resume.slug}>
            <p aria-hidden="true" className="eyebrow-text mb-5 text-slate-400">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="font-heading text-[1.75rem] font-medium leading-tight tracking-[-0.025em] text-ink lg:min-h-[4.375rem]">
              {resume.title}
            </h3>
            <p className="supporting-copy mt-4 mb-7">{resume.description}</p>
            <div className="mt-auto">
              <Button
                ariaLabel={`View ${resume.title} resume`}
                className="w-full justify-between border-ink bg-ink shadow-none sm:w-auto sm:gap-6"
                href={resume.href}
              >
                View resume
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Button>
            </div>
          </article>
        ))}
      </section>

      <section aria-labelledby="experience-context" className="mt-12 grid gap-5 rounded-md bg-evidence/[0.05] p-6 sm:mt-14 sm:p-8 lg:grid-cols-[0.9fr_1.3fr] lg:gap-12">
        <h2 className="section-title" id="experience-context">
          Professional experience.<br /> Clear training context.
        </h2>
        <p className="supporting-copy">
          My Log(N) Pacific internship takes place in a simulated enterprise environment.
          My professional background includes facilities operations and Marine Corps leadership.
        </p>
      </section>
    </PageContainer>
  );
}
