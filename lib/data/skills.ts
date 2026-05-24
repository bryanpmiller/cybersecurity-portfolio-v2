export type SkillGroup = {
  title: string;
  primarySkills: string[];
  supportingSkills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Vulnerability Management",
    primarySkills: ["Tenable", "Vulnerability Scanning", "Risk Prioritization"],
    supportingSkills: [
      "CVE/CWE Management",
      "CVSS Scoring",
      "Remediation Tracking",
      "Remediation Validation"
    ]
  },
  {
    title: "SecOps / Detection Engineering",
    primarySkills: ["Microsoft Defender for Endpoint", "Microsoft Sentinel", "KQL"],
    supportingSkills: [
      "SIEM/EDR Analysis",
      "Threat Hunting",
      "Incident Triage",
      "Detection Rules",
      "Dashboards",
      "SQL"
    ]
  },
  {
    title: "Secure Configuration / Hardening",
    primarySkills: ["DISA STIG", "Windows Hardening", "Linux Security Basics"],
    supportingSkills: ["Active Directory", "Security Configuration", "Access Control", "NIST 800-53", "NIST 800-40"]
  },
  {
    title: "Automation / Scripting",
    primarySkills: ["PowerShell", "Bash", "Python"],
    supportingSkills: [
      "Automation Tools",
      "Automated Remediation",
      "Web App Development",
      "Full-Stack Development"
    ]
  },
  {
    title: "Cloud / Network Security",
    primarySkills: ["Azure NSGs", "Firewall Rules", "pfSense"],
    supportingSkills: ["Wireshark", "VLANs", "SSH", "RDP", "Network Security", "Network Forensics"]
  },
  {
    title: "Governance / Compliance Frameworks",
    primarySkills: ["NIST CSF", "NIST 800-37", "NIST 800-61"],
    supportingSkills: [
      "PCI-DSS",
      "HIPAA",
      "GDPR",
      "OWASP Top 10",
      "Disaster Recovery Planning",
      "Security Policies",
      "Information Security Management"
    ]
  }
];

export function getSkillsForGroup(group: SkillGroup) {
  return [...group.primarySkills, ...group.supportingSkills];
}
