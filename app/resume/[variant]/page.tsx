import { ArrowLeft, ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getResumeVariant, resumeVariants } from "@/lib/data/resume";
import { createPageMetadata } from "@/lib/metadata";

type ResumePageProps = { params: Promise<{ variant: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return resumeVariants.map((resume) => ({ variant: resume.slug }));
}

export async function generateMetadata({ params }: ResumePageProps) {
  const resume = getResumeVariant((await params).variant);
  if (!resume) notFound();

  return createPageMetadata(
    `${resume.title} Resume`,
    `View or download Bryan Miller's ${resume.title} resume. ${resume.description}`,
    resume.href
  );
}

export default async function ResumeDetailPage({ params }: ResumePageProps) {
  const resume = getResumeVariant((await params).variant);
  if (!resume) notFound();

  return (
    <PageContainer>
      <Link className="text-link mb-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold" href="/resume">
        <ArrowLeft aria-hidden="true" className="size-4" />
        All resumes
      </Link>
      <SectionHeader eyebrow="Resume" title={`${resume.title} Resume`} description={resume.description} />
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button
          ariaLabel={`Open ${resume.title} resume PDF in a new tab`}
          external
          href={resume.pdfUrl}
          icon={<ArrowUpRight aria-hidden="true" className="size-4" />}
        >
          Open PDF <span className="text-xs font-normal">(new tab)</span>
        </Button>
        <Button
          ariaLabel={`Download ${resume.title} resume PDF`}
          download
          href={resume.pdfUrl}
          icon={<Download aria-hidden="true" className="size-4" />}
          variant="secondary"
        >
          Download PDF
        </Button>
      </div>

      <section aria-label={`${resume.title} resume preview`} className="mt-8 overflow-hidden rounded-md border border-line bg-surface shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-4 py-3 sm:px-6">
          <h2 className="text-sm font-semibold text-ink">PDF preview</h2>
          <p className="text-xs text-slate-400">Bryan Miller · 1 page</p>
        </div>
        <iframe
          className="block h-[70vh] min-h-[28rem] w-full border-0 bg-surfaceElevated lg:h-[850px]"
          src={`${resume.pdfUrl}#view=FitH`}
          title={`${resume.title} resume PDF`}
        />
        <p className="compact-copy border-t border-line px-4 py-4 sm:px-6">
          Preview unavailable or hard to read?{" "}
          <a className="text-link" href={resume.pdfUrl} rel="noreferrer" target="_blank">
            Open the PDF in a new tab
          </a>{" "}
          or use Download PDF above.
        </p>
      </section>
    </PageContainer>
  );
}
