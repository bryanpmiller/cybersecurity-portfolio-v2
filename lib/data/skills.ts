export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Vulnerability Management",
    skills: [
      "Tenable",
      "Vulnerability scanning",
      "CVE/CWE management",
      "CVSS scoring",
      "Risk prioritization",
      "Remediation tracking",
      "Remediation validation"
    ]
  },
  {
    title: "Security Operations",
    skills: [
      "Microsoft Defender for Endpoint",
      "Microsoft Sentinel",
      "KQL",
      "SIEM/EDR analysis",
      "Threat hunting",
      "Incident triage",
      "Detection rules",
      "Dashboards"
    ]
  },
  {
    title: "Secure Configuration / Compliance",
    skills: [
      "DISA STIG",
      "Windows hardening",
      "Linux security basics",
      "NIST CSF",
      "NIST 800-37",
      "NIST 800-53",
      "NIST 800-61",
      "NIST 800-40",
      "PCI-DSS",
      "HIPAA",
      "GDPR"
    ]
  },
  {
    title: "Automation / Scripting",
    skills: ["PowerShell", "Bash", "Python", "KQL/SQL"]
  },
  {
    title: "Cloud / Network",
    skills: ["Azure NSGs", "Firewall rules", "pfSense", "VLANs", "SSH", "RDP", "Network security"]
  }
];
