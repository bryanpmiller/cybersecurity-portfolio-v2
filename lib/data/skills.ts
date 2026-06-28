export type SkillGroup = {
  title: string;
  description: string;
  primarySkills: string[];
  supportingSkills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Security Operations & Investigation",
    description: "Evidence-led investigation workflows using endpoint, identity, network, and query-based telemetry.",
    primarySkills: ["Microsoft Defender for Endpoint", "Sentinel-style KQL", "Threat hunting", "Incident triage"],
    supportingSkills: [
      "Microsoft Sentinel",
      "SIEM/EDR analysis",
      "Windows telemetry",
      "MITRE ATT&CK mapping",
      "Network forensics"
    ]
  },
  {
    title: "Vulnerability Management",
    description: "Assessment and remediation work that turns scan results into prioritized, validated risk reduction.",
    primarySkills: ["Tenable scanning", "Risk prioritization", "Remediation tracking", "Validation reporting"],
    supportingSkills: [
      "CVE/CWE review",
      "CVSS scoring",
      "Authenticated scanning",
      "Finding verification"
    ]
  },
  {
    title: "Hardening & Compliance",
    description: "Secure configuration and compliance remediation for Windows-focused lab environments.",
    primarySkills: ["DISA STIG review", "Windows hardening", "Secure configuration", "PowerShell remediation"],
    supportingSkills: [
      "Windows Registry",
      "auditpol",
      "gpupdate",
      "NIST 800-53",
      "Access control"
    ]
  },
  {
    title: "Automation / Scripting",
    description: "Repeatable scripts and operational controls that make remediation and validation work easier to reproduce.",
    primarySkills: ["PowerShell", "Automated remediation", "Repeatable security checks", "Operational documentation"],
    supportingSkills: [
      "Bash",
      "Python",
      "Azure NSGs",
      "Firewall rules",
      "pfSense",
      "Wireshark"
    ]
  }
];

export function getSkillsForGroup(group: SkillGroup) {
  return [...group.primarySkills, ...group.supportingSkills];
}
