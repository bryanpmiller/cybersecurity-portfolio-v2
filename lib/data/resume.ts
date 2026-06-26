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
    body: "Vulnerability scanning, reporting, PowerShell-based remediation, Tenable, DISA STIG compliance, MDE/Sentinel threat hunting, detection rules, dashboards, and Azure NSG/firewall controls."
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
