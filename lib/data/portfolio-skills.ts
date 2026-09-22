export type SkillGroup = {
  title: string;
  description: string;
  primarySkills: string[];
  supportingSkills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Security Operations & Threat Detection",
    description: "Cyber-range investigations that correlate endpoint and authentication evidence, document findings, and identify detection opportunities.",
    primarySkills: ["Microsoft Defender for Endpoint", "KQL investigation", "Threat hunting", "Incident triage"],
    supportingSkills: ["Microsoft Sentinel", "Azure Log Analytics", "SIEM/EDR analysis", "MITRE ATT&CK mapping", "Evidence documentation"]
  },
  {
    title: "Vulnerability Management",
    description: "Lab assessment and remediation workflows, from authenticated scanning and prioritization to follow-up validation.",
    primarySkills: ["Tenable/Nessus", "Authenticated scanning", "Risk prioritization", "Remediation tracking"],
    supportingSkills: ["CVE review", "CVSS", "Finding verification", "Scan comparison", "Remediation reporting"]
  },
  {
    title: "Hardening & Technical Compliance",
    description: "Selected Windows lab controls translated into configuration changes and verification evidence; scoped remediation rather than a claim of full compliance.",
    primarySkills: ["DISA STIG interpretation", "Windows hardening", "Secure configuration", "Control validation"],
    supportingSkills: ["Windows Registry", "Audit policy", "auditpol", "gpupdate", "Access controls"]
  },
  {
    title: "PowerShell Automation",
    description: "Developing, adapting, and testing lab scripts for repeatable system configuration, remediation, and verification.",
    primarySkills: ["PowerShell", "Remediation scripts", "System-state checks", "Technical documentation"],
    supportingSkills: ["Software removal and updates", "Configuration workflows", "Registry checks", "AI-assisted scripting with validation"]
  },
  {
    title: "Systems & Network Support",
    description: "Professional facility networking and device troubleshooting, complemented by Windows/Linux systems and network security practice in labs.",
    primarySkills: ["Network connectivity", "Device-access troubleshooting", "IP security cameras", "Facility network maintenance"],
    supportingSkills: ["Windows and Linux labs", "Azure virtual machines", "Azure NSGs", "Host firewalls", "RDP access restrictions"]
  },
  {
    title: "Operational Leadership",
    description: "Professional experience coordinating facility operations and leading small Marine Corps teams with clear procedures and accountability.",
    primarySkills: ["Small-team leadership", "Training", "Operational coordination", "Verification procedures"],
    supportingSkills: ["Vendor and client communication", "Scheduling", "Inventory accountability", "Maintenance coordination", "Data accuracy"]
  }
];

export function getSkillsForGroup(group: SkillGroup) {
  return [...group.primarySkills, ...group.supportingSkills];
}
