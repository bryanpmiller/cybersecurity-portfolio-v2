import { profile } from "@/lib/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>{profile.name} - Cybersecurity portfolio</p>
        <div className="flex flex-wrap gap-4">
          <a className="text-link" href={profile.githubUrl} rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a className="text-link" href={profile.linkedinUrl} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a className="text-link" href={profile.resumeUrl}>
            Resume PDF
          </a>
        </div>
      </div>
    </footer>
  );
}
