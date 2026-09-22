export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  environment: "Lab project" | "Cyber-range investigation";
  tools: string[];
  githubUrl?: string;
  supportingLinks?: Array<{
    label: string;
    href: string;
  }>;
  cardSummary?: {
    problem: string;
    concepts: string;
    outcome: string;
  };
  caseStudy?: {
    problem: string;
    approach: string[];
    evidence: string[];
    outcome: string;
    lessons: string[];
    hiringRelevance: string;
    visual: {
      label: string;
      stats: Array<{
        label: string;
        value: string;
      }>;
    };
    evidenceBlock: {
      label: string;
      lines: string[];
    };
  };
  featured?: boolean;
};

export const projectCaseStudyOrder = [
  "password-spray-threat-hunt",
  "akira-ransomware-threat-hunt",
  "vulnerability-management-program",
  "disa-stig-remediation"
];

export const projects: Project[] = [
  {
    slug: "vulnerability-management-program",
    title: "Vulnerability Management Program Implementation",
    role: "Vulnerability Management Analyst",
    environment: "Lab project",
    tools: ["Tenable", "Azure Cloud Infrastructure", "Azure Virtual Machines", "PowerShell", "Windows Server"],
    summary:
      "Windows Server lab covering authenticated Tenable scanning, prioritized remediation, and verification, alongside simulated policy and stakeholder coordination.",
    githubUrl: "https://github.com/bryanpmiller/vulnerability-management-program/blob/main/README.md",
    supportingLinks: [
      {
        label: "CVE Remediation Mapping Repository",
        href: "https://github.com/bryanpmiller/programmatic-vulnerability-remediations"
      },
      {
        label: "Remediation Scripts Repository",
        href: "https://github.com/bryanpmiller/scripts"
      }
    ],
    cardSummary: {
      problem: "A simulated organization needed a scanning, prioritization, and verification process.",
      concepts: "Governance, authenticated scanning, risk prioritization, and validation.",
      outcome: "Lab findings fell from 32 to 4 across seven scans; critical findings fell from 2 to 0."
    },
    caseStudy: {
      problem:
        "The simulated organization began without an established vulnerability management policy or operating process. The project needed to move from an unmanaged baseline to a repeatable program with governance, scanning permission, prioritized remediation, and verification.",
      approach: [
        "Drafted a vulnerability management policy that defined scope, responsibilities, remediation timelines, and a stakeholder review path.",
        "Simulated stakeholder and server-team meetings to secure buy-in, adjust remediation expectations, and authorize credentialed scanning.",
        "Provisioned an intentionally vulnerable Windows Server environment in Azure and performed authenticated vulnerability scans with Tenable Nessus.",
        "Prioritized remediation work by impact and ease of remediation, including third-party software removal, insecure protocol and cipher hardening, guest account group membership, Windows updates, WinVerifyTrust validation, and outdated software cleanup.",
        "Prepared remediation scripts and scan reports as part of the simulated team workflow, then checked progress through follow-up scans."
      ],
      evidence: [
        "The repository documents policy drafting, mock stakeholder and CAB meetings, scanning permission, remediation communication, and seven scan cycles with reports or screenshots.",
        "The remediation workflow includes generating PowerShell scripts for Wireshark removal, insecure protocol and cipher remediation, guest account cleanup, Windows updates, WinVerifyTrust validation, and outdated software removal or updates.",
        "The supporting CVE remediation mapping repository connects findings to Tenable plugin IDs, CVEs, CVE descriptions, remediation method, and script locations.",
        "The scripts repository provides the remediation scripts referenced by the vulnerability-to-remediation mapping."
      ],
      outcome:
        "The Windows Server lab finished with 4 findings, down from 32 across seven scans. Critical findings fell from 2 to 0, high from 12 to 1, and medium from 17 to 2. The high and medium reductions round to 92% and 88%; these are lab scan results, not production-wide risk measurements.",
      lessons: [
        "Vulnerability reduction depends as much on governance and stakeholder coordination as it does on technical scanning.",
        "Authenticated scanning and follow-up validation provide the evidence needed to show whether remediation actually worked.",
        "Prioritizing fixes by operational impact and remediation effort creates a practical path from baseline discovery to maintenance mode."
      ],
      hiringRelevance:
        "The vulnerability management project shows the ability to turn scan output into prioritized remediation, communicate risk clearly, and validate that fixes reduced exposure.",
      visual: {
        label: "Windows Server lab remediation cycle",
        stats: [
          {
            label: "32 to 4",
            value: "Lab Findings"
          },
          {
            label: "100%",
            value: "Critical Reduction"
          },
          {
            label: "92%",
            value: "High Reduction (Rounded)"
          },
          {
            label: "88%",
            value: "Medium Reduction (Rounded)"
          }
        ]
      },
      evidenceBlock: {
        label: "Evidence chain",
        lines: [
          "1. Tenable authenticated scan identifies vulnerable findings",
          "2. Finding is mapped to Tenable plugin ID and CVE details",
          "3. CVE score and description support remediation context",
          "4. Remediation method is identified as PowerShell or Bash",
          "5. Mapping links to the specific remediation script",
          "6. Follow-up scans validate remediation progress",
          "7. Final trend data shows reduction from 32 to 4 findings"
        ]
      }
    },
    featured: true
  },
  {
    slug: "disa-stig-remediation",
    title: "DISA STIG Remediation Project",
    role: "Security Analyst / Technical Compliance Analyst",
    environment: "Lab project",
    tools: ["PowerShell", "DISA STIG", "Custom DISA STIG GPT", "Windows 11", "Windows Registry", "auditpol", "gpupdate"],
    summary:
      "PowerShell remediation scripts with screenshot validation for selected Windows 11 DISA STIG findings in a lab environment.",
    githubUrl: "https://github.com/bryanpmiller/DISA-STIG-Remediation/blob/main/README.md",
    supportingLinks: [
      {
        label: "Scripts Folder",
        href: "https://github.com/bryanpmiller/DISA-STIG-Remediation/tree/main/scripts"
      },
      {
        label: "Validation Evidence Folder",
        href: "https://github.com/bryanpmiller/DISA-STIG-Remediation/tree/main/assets"
      }
    ],
    cardSummary: {
      problem: "Windows 11 STIG findings needed scripted fixes and validation proof.",
      concepts: "Registry policy, audit policy, PowerShell checks, and evidence capture.",
      outcome: "Selected controls are documented without claiming full compliance."
    },
    caseStudy: {
      problem:
        "Selected Windows 11 DISA STIG findings required configuration changes and validation evidence showing failed, remediated, and passed states.",
      approach: [
        "Used a custom GPT to help generate STIG-specific PowerShell scripts, then tested selected changes and checked the resulting configuration.",
        "Used registry policy keys for Windows security configuration controls.",
        "Used auditpol for audit-policy remediation where the STIG control required audit settings.",
        "Included verification commands in scripts to confirm configured values.",
        "Organized evidence by STIG ID with failed, remediation, and passed screenshots where available."
      ],
      evidence: [
        "The repository README maps STIG IDs to matching scripts and screenshot evidence folders.",
        "The indexed remediations include audit policy, event log sizing, lock-screen camera disablement, Group Policy reprocessing, HTTP printing disablement, wake-from-sleep password requirement, Microsoft consumer experience disablement, Game DVR disablement, Windows Installer elevated privilege disablement, and Kernel DMA Protection device enumeration policy.",
        "Screenshot evidence is organized to show failed, remediation, and passed states for supported controls.",
        "The repository notes that WN11-00-000210 remained unresolved and may require policy-level management through Intune."
      ],
      outcome:
        "The project documents selected Windows 11 STIG remediations with script-based changes and validation evidence. The repository does not claim full STIG compliance or production deployment.",
      lessons: [
        "Individual STIG findings can often be translated into discrete, testable remediation scripts.",
        "Compliance evidence is stronger when remediation commands are paired with verification output and screenshots.",
        "Some configuration findings may require policy-level enforcement instead of local scripting alone."
      ],
      hiringRelevance:
        "The STIG remediation work shows practical secure-configuration judgment: interpreting control requirements, translating them into repeatable PowerShell changes, and preserving validation evidence without overstating compliance.",
      visual: {
        label: "STIG Remediation Evidence",
        stats: [
          {
            label: "11",
            value: "Indexed STIG Controls"
          },
          {
            label: "Fail / Fix / Pass",
            value: "Evidence States"
          },
          {
            label: "PowerShell",
            value: "Primary Automation"
          },
        ]
      },
      evidenceBlock: {
        label: "STIG evidence workflow",
        lines: [
          "1. Select Windows 11 DISA STIG finding",
          "2. Map STIG ID to remediation script",
          "3. Apply registry, auditpol, or policy-related change",
          "4. Run verification command",
          "5. Capture failed, remediation, and passed evidence where available",
          "6. Document unresolved finding separately when local scripting is insufficient"
        ]
      }
    },
    featured: true
  },
  {
    slug: "password-spray-threat-hunt",
    title: "Password Spray Threat Hunt: RDP Compromise Investigation",
    role: "SecOps Analyst / SOC Analyst / Threat Detection Analyst",
    environment: "Cyber-range investigation",
    tools: ["MDE Advanced Hunting", "Microsoft Sentinel", "Microsoft Defender for Endpoint", "SIEM", "KQL", "MITRE ATT&CK"],
    summary:
      "Cyber-range investigation using Microsoft Defender for Endpoint and KQL to trace RDP access, execution, persistence, defense evasion, command-and-control activity, and attempted exfiltration.",
    githubUrl: "https://github.com/bryanpmiller/password-spray-threat-hunt/blob/main/README.md",
    supportingLinks: [
      {
        label: "Screenshot Evidence Folder",
        href: "https://github.com/bryanpmiller/password-spray-threat-hunt/tree/main/screenshots"
      }
    ],
    cardSummary: {
      problem: "Suspicious RDP access in a cyber range required investigation across endpoint telemetry.",
      concepts: "RDP logon analysis, KQL pivots, ATT&CK mapping, and exfiltration evidence review.",
      outcome: "The report reconstructs the attack path and attempted exfiltration."
    },
    caseStudy: {
      problem:
        "A cloud-hosted Windows VM in a cyber range showed activity consistent with password-spray-driven compromise over RDP. The hunt needed to identify the attacker source, compromised account, execution artifacts, persistence, evasion, discovery, collection, C2, and exfiltration attempt.",
      approach: [
        "Investigated RDP logon activity against devices matching the target environment.",
        "Pivoted from successful logon events into process execution by the compromised account.",
        "Queried suspicious execution from user-writable paths such as Public, Temp, and Downloads.",
        "Reviewed scheduled task creation for persistence and registry changes for Defender exclusions.",
        "Searched discovery commands, archive creation, and outbound network activity tied to C2 and exfiltration indicators.",
        "Mapped observed behavior to MITRE ATT&CK techniques."
      ],
      evidence: [
        "The repository includes a full threat hunt report with executive summary, scope, reconstructed attack flow, ATT&CK mapping, flag-by-flag findings, KQL queries, screenshots, detection gaps, and recommendations.",
        "KQL evidence uses DeviceLogonEvents, DeviceProcessEvents, DeviceEvents, DeviceRegistryEvents, DeviceFileEvents, and DeviceNetworkEvents.",
        "Documented artifacts include source IP 159.26.106.84, compromised account slflare, endpoint slflarewinsysmo, msupdate.exe, MicrosoftUpdateSync scheduled task, Defender exclusion path C:\\Windows\\Temp, backup_sync.zip, and destination 185.92.220.87:8081.",
        "The repository supports attempted exfiltration, not confirmed successful data theft."
      ],
      outcome:
        "The investigation reconstructs the observed cyber-range attack chain and preserves reproducible KQL for major findings, including an attempted exfiltration path. It does not claim real-world containment or confirmed data theft.",
      lessons: [
        "Successful RDP logons can become the pivot point for a full endpoint investigation.",
        "Process, registry, file, identity, and network telemetry need to be correlated to build a reliable attack timeline.",
        "Scheduled tasks, Defender exclusions, discovery commands, archive creation, and outbound connections can form a defensible intrusion narrative."
      ],
      hiringRelevance:
        "The RDP compromise investigation shows the ability to pivot across endpoint telemetry, explain what the evidence supports, and separate confirmed activity from unsupported assumptions.",
      visual: {
        label: "Threat hunt chain",
        stats: [
          {
            label: "159.26.106.84",
            value: "Source IP"
          },
          {
            label: "slflare",
            value: "Compromised Account"
          },
          {
            label: "MicrosoftUpdateSync",
            value: "Persistence Artifact"
          },
          {
            label: "Attempted",
            value: "Exfiltration Status"
          }
        ]
      },
      evidenceBlock: {
        label: "KQL investigation pivots",
        lines: [
          "1. DeviceLogonEvents: identify RDP activity and compromised account",
          "2. DeviceProcessEvents: pivot into suspicious execution",
          "3. DeviceEvents: review scheduled task creation",
          "4. DeviceRegistryEvents: identify Defender exclusion changes",
          "5. DeviceFileEvents: locate archive creation and staging",
          "6. DeviceNetworkEvents: correlate C2 and exfiltration destination",
          "7. MITRE ATT&CK: map password spraying, valid accounts, persistence, evasion, discovery, collection, C2, and exfiltration"
        ]
      }
    },
    featured: true
  },
  {
    slug: "akira-ransomware-threat-hunt",
    title: "The Buyer / Akira Ransomware Threat Hunt",
    role: "Threat Hunter / SecOps Analyst",
    environment: "Cyber-range investigation",
    tools: ["MDE Advanced Hunting", "Microsoft Sentinel", "Microsoft Defender for Endpoint", "SIEM", "KQL", "MITRE ATT&CK"],
    summary:
      "Cyber-range Akira ransomware hunt using Microsoft Defender telemetry to reconstruct remote access, staging, lateral movement, defense evasion, data staging, and impact artifacts.",
    githubUrl: "https://github.com/bryanpmiller/the-buyer-threathunt/blob/main/README.md",
    supportingLinks: [
      {
        label: "Screenshot Evidence",
        href: "https://github.com/bryanpmiller/the-buyer-threathunt/tree/main/screenshots"
      }
    ],
    cardSummary: {
      problem: "A cyber-range ransomware scenario required host scoping, timeline analysis, and detection-gap review.",
      concepts: "Ransomware timeline, remote access triage, tampering, and impact.",
      outcome: "Two affected lab hosts, investigation findings, and detection recommendations are documented."
    },
    caseStudy: {
      problem:
        "This cyber-range investigation examined ransomware-related activity across AS-PC2 and AS-SRV, linked findings to telemetry, mapped observed behavior to ATT&CK, and documented detection gaps.",
      approach: [
        "Scoped the hunt to Microsoft Defender Advanced Hunting tables covering process, file, network, registry, logon, and device events.",
        "Used Akira ransom-note and .akira file artifacts to anchor the impact phase.",
        "Pivoted from AnyDesk relay traffic to suspicious execution path, external IP, and user context.",
        "Correlated wsync.exe, suspicious domains, hashes, and follow-on tooling.",
        "Investigated Defender registry tampering, LSASS-related telemetry, internal enumeration, SMB traffic, PowerShell downloads, data staging, shadow copy deletion, and cleanup behavior.",
        "Mapped the observed activity to MITRE ATT&CK and documented detection opportunities."
      ],
      evidence: [
        "The repository README contains an executive summary, scope, ATT&CK mapping, 40 flag analyses, KQL queries, screenshots, detection gaps, and final assessment.",
        "Documented ransomware indicators include an Akira ransom note, .akira marker, updater.exe, and SHA256 e609d070ee9f76934d73353be4ef7ff34b3ecc3a2d1e5d052140ed4cb9e4752b.",
        "Remote access evidence includes AnyDesk activity from C:\\Users\\Public, relay-0b975d23.net.anydesk.com, external IP 88.97.164.155, and user David.Mitchell.",
        "Defense evasion and impact evidence includes kill.bat, DisableAntiSpyware, reg.exe, wmic shadowcopy delete, vssadmin delete shadows /all /quiet, and clean.bat.",
        "The report supports data staging through exfil_data.zip but does not claim confirmed successful exfiltration."
      ],
      outcome:
        "The cyber-range report identified AS-PC2 and AS-SRV as affected hosts and documented activity on January 27–28, 2026. It connects remote access, Defender tampering, tool transfer, data staging, and recovery-inhibition artifacts to detection recommendations. Data staging is supported; successful exfiltration and real-world containment are not claimed.",
      lessons: [
        "Ransomware investigations require correlating impact artifacts with earlier remote access, staging, discovery, and defense evasion activity.",
        "MDE telemetry can support a timeline across process, file, registry, network, and logon evidence.",
        "Detection recommendations are stronger when tied to specific observed commands, hashes, paths, accounts, and ATT&CK techniques."
      ],
      hiringRelevance:
        "The ransomware hunt demonstrates the ability to reconstruct ransomware activity from telemetry, preserve a defensible timeline, and turn observed behavior into detection opportunities.",
      visual: {
        label: "Ransomware investigation scope",
        stats: [
          {
            label: "2",
            value: "Affected Hosts"
          },
          {
            label: "40",
            value: "Flag Analyses"
          },
          {
            label: "Jan 27, 2026",
            value: "Documented Activity"
          },
          {
            label: "Jan 28, 2026",
            value: "Documented Activity"
          }
        ]
      },
      evidenceBlock: {
        label: "Ransomware Hunt Pivots",
        lines: [
          "1. Anchor investigation on Akira ransom-note and .akira artifacts",
          "2. Pivot to AnyDesk remote access activity and user context",
          "3. Correlate staged tools, suspicious domains, and file hashes",
          "4. Investigate Defender tampering and LSASS-related telemetry",
          "5. Trace enumeration, SMB activity, downloads, and data staging",
          "6. Confirm shadow copy deletion and cleanup commands",
          "7. Convert observed activity into ATT&CK mapping and detection recommendations"
        ]
      }
    },
    featured: true
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getOrderedCaseStudyProjects() {
  return projectCaseStudyOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project));
}
