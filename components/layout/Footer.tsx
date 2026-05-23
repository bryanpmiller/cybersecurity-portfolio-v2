import { profile } from "@/lib/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>{profile.name} - Cybersecurity portfolio</p>
        <div className="flex flex-wrap gap-4">
          <a className="focus-ring rounded-md hover:text-white" href={profile.githubUrl} rel="noreferrer" target="_blank">
            GitHub
          </a>
          <a className="focus-ring rounded-md hover:text-white" href={profile.linkedinUrl} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a className="focus-ring rounded-md hover:text-white" href={profile.resumeUrl}>
            Resume PDF
          </a>
        </div>
      </div>
    </footer>
  );
}
