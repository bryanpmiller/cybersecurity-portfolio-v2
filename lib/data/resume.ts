export const resumeVariants = [
  {
    slug: "main",
    title: "Main",
    description: "A broad overview of my cybersecurity experience, projects, education, and technical skills, spanning vulnerability management, security operations, and automation.",
    pdfUrl: "/resume/bryanpmiller_resume.pdf"
  },
  {
    slug: "soc",
    title: "SOC Analyst",
    description: "Microsoft Defender and KQL investigations, Microsoft Sentinel, incident triage, and technical reporting.",
    pdfUrl: "/resume/Bryan_Miller_soc.pdf"
  },
  {
    slug: "vulnerability",
    title: "Vulnerability Management",
    description: "Authenticated scanning, Windows hardening, PowerShell remediation, and follow-up validation.",
    pdfUrl: "/resume/Bryan_Miller_vulnerability.pdf"
  },
  {
    slug: "it-support",
    title: "IT Support",
    description: "Professional networking and device troubleshooting, vendor coordination, and Windows lab experience.",
    pdfUrl: "/resume/Bryan_Miller_it_support.pdf"
  }
].map((resume) => ({ ...resume, href: `/resume/${resume.slug}` }));

export const mainResume = resumeVariants[0];
export const roleResumes = resumeVariants.filter((resume) => resume.slug !== "main");

export function getResumeVariant(slug: string) {
  return resumeVariants.find((resume) => resume.slug === slug);
}

export const resumeHighlights = [
  {
    title: "Education",
    body: "Norwich University (NSA-Accredited College)\nBachelor of Science in Cybersecurity\nFocus on: Computer Forensics & Vulnerability Management\nGPA 3.99 Summa Cum Laude"
  },
  {
    title: "Certificates",
    body: "CompTIA Security+\n Verification ID: 83026b02794c46548b423e8bffc9d9e5"
  },
  {
    title: "Experience",
    body: "Vulnerability scanning, reporting, PowerShell-based remediation, Tenable, DISA STIG compliance, MDE/Sentinel threat hunting, detection rules, Sentinel workbooks, and Azure NSG/firewall controls."
  },
  {
    title: "Security Impact Metrics",
    body: "100% reduction in critical vulnerabilities\n92% reduction in high vulnerabilities\n88% reduction in medium vulnerabilities\n100% reduction in RDP-related brute-force attempts through inbound NSG and firewall controls."
  }
];

export const vulnerabilityReductionStats = [
  {
    value: "100%",
    label: "Critical vulnerabilities reduced for the server team"
  },
  {
    value: "92%",
    label: "High vulnerabilities reduced for the server team"
  },
  {
    value: "88%",
    label: "Medium vulnerabilities reduced for the server team"
  }
];

export const impactMetrics = [
  ...vulnerabilityReductionStats,
  {
    value: "100%",
    label: "RDP-related brute-force attempts reduced through inbound NSG and firewall controls"
  }
];

export const supplementalImpactMetrics = impactMetrics.slice(vulnerabilityReductionStats.length);
