import type { Metadata } from "next";
import { profile } from "@/lib/data/profile";

const siteTitle = `${profile.name} | Cybersecurity Portfolio`;
const siteName = `${profile.name} Cybersecurity Portfolio`;

export const siteUrl = "https://bryanpmiller.com";

const keywords = [
  "Bryan Miller",
  "cybersecurity portfolio",
  "vulnerability management",
  "cybersecurity analyst",
  "security analyst",
  "SecOps",
  "threat hunting",
  "Microsoft Defender for Endpoint",
  "Microsoft Sentinel",
  "KQL",
  "Tenable",
  "PowerShell remediation",
  "DISA STIG",
  "Azure network security"
];

const robots: Metadata["robots"] = {
  follow: true,
  googleBot: {
    follow: true,
    index: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1
  },
  index: true
};

export const siteMetadata: Metadata = {
  alternates: {
    canonical: "/"
  },
  applicationName: siteName,
  authors: [{ name: profile.name, url: profile.githubUrl }],
  category: "Cybersecurity portfolio",
  creator: profile.name,
  description: profile.headline,
  keywords,
  metadataBase: new URL(siteUrl),
  openGraph: {
    description: profile.headline,
    siteName,
    title: siteTitle,
    type: "website",
    url: "/"
  },
  publisher: profile.name,
  robots,
  title: {
    default: siteTitle,
    template: `%s | ${profile.name}`
  },
  twitter: {
    card: "summary",
    description: profile.headline,
    title: siteTitle
  }
};

export function createPageMetadata(title: string, description: string, pathname: string): Metadata {
  const fullTitle = `${title} | ${profile.name}`;

  return {
    alternates: {
      canonical: pathname
    },
    description,
    keywords,
    openGraph: {
      description,
      siteName,
      title: fullTitle,
      type: "website",
      url: pathname
    },
    robots,
    title,
    twitter: {
      card: "summary",
      description,
      title: fullTitle
    }
  };
}
