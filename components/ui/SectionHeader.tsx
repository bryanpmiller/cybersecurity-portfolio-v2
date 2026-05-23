import type { LucideIcon } from "lucide-react";
import { Activity, FileText, Folder, Mail, ShieldCheck, UserRound, Wrench } from "lucide-react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  level?: "h1" | "h2";
};

const sectionIcons: Record<string, LucideIcon> = {
  About: UserRound,
  Contact: Mail,
  Evidence: Activity,
  "Featured Projects": Folder,
  Projects: Folder,
  "Project case study": ShieldCheck,
  Resume: FileText,
  Skills: Wrench
};

export function SectionHeader({ eyebrow, title, description, level = "h1" }: SectionHeaderProps) {
  const Heading = level;
  const Icon = eyebrow ? sectionIcons[eyebrow] : null;

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="eyebrow-text mb-3 inline-flex items-center gap-2">
          {Icon ? <Icon aria-hidden="true" className="size-3.5" strokeWidth={2} /> : null}
          {eyebrow}
        </p>
      ) : null}
      <Heading className="heading-text text-3xl sm:text-4xl">{title}</Heading>
      {description ? <p className="mt-4 text-base leading-7 text-slate-300">{description}</p> : null}
    </div>
  );
}
