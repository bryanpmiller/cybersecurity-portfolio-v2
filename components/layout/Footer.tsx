import { profile } from "@/lib/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>{profile.name} - Cybersecurity Portfolio</p>
        <div className="flex flex-wrap gap-2 sm:gap-4">
          <a className="text-link inline-flex min-h-10 items-center px-1" href={profile.emailUrl}>
            Email
          </a>
          <a className="text-link inline-flex min-h-10 items-center px-1" href={profile.githubUrl} rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a className="text-link inline-flex min-h-10 items-center px-1" href={profile.linkedinUrl} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a className="text-link inline-flex min-h-10 items-center px-1" href={profile.resumeUrl}>
            Resume PDF
          </a>
        </div>
      </div>
    </footer>
  );
}
