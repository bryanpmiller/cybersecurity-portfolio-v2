"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, Folder, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GitHubMarkIcon } from "@/components/ui/GitHubMarkIcon";
import { profile } from "@/lib/data/profile";

const heroProofPoints = [
  {
    label: "Risk reduction",
    value: "Reduced critical server vulnerabilities by 100% and high findings by 92%."
  },
  {
    label: "Remediation workflow",
    value: "Built PowerShell-based remediation and validation workflows for Windows security findings."
  },
  {
    label: "Security investigations",
    value: "Documented Defender, Sentinel-style KQL, and threat-hunting investigations with evidence trails."
  }
];

const proofItems = [
  "CompTIA Security+",
  "B.S. Cybersecurity | Vulnerability Management"
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const entrance = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55 }
      };
  const panelEntrance = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.55, delay: 0.12 }
      };

  return (
    <section className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-10">
      <motion.div {...entrance}>
        <div className="max-w-4xl">
          <h1 className="max-w-4xl font-heading text-3xl font-semibold leading-[1.06] tracking-normal text-slate-300 sm:text-4xl lg:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-3xl font-heading text-[1.1rem] font-semibold leading-tight text-evidence sm:text-xl lg:text-2xl">
            {profile.title}
          </p>
        </div>
        <p className="hero-lede mt-5 max-w-3xl sm:mt-6">{profile.positioning}</p>

        <div className="mt-7 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap">
          <Button className="w-full !min-h-10 !px-4 !py-2 !text-[0.82rem] sm:w-auto sm:min-w-36" href="#featured-case-studies" icon={<Folder aria-hidden="true" className="size-4" />}>
            View Case Studies
          </Button>
          <div className="grid grid-cols-2 gap-3 sm:contents">
            <Button className="w-full !min-h-10 gap-1.5 whitespace-nowrap !px-2.5 !py-2 !text-xs sm:w-auto sm:gap-2 sm:!px-4 sm:!text-[0.82rem]" href={profile.resumeUrl} icon={<Download aria-hidden="true" className="size-4" />} variant="secondary">
              Download Resume
            </Button>
            <Button className="w-full !min-h-10 gap-1.5 whitespace-nowrap !px-2.5 !py-2 !text-xs sm:w-auto sm:gap-2 sm:!px-4 sm:!text-[0.82rem]" external href={profile.githubUrl} icon={<GitHubMarkIcon className="size-4" />} variant="secondary">
              View GitHub
            </Button>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4 sm:gap-3">
          {proofItems.map((item) => (
            <span
              className="badge-text inline-flex items-center gap-2 rounded-full border border-lineStrong/35 bg-surface px-3.5 py-2 text-slate-300 shadow-[0_10px_24px_rgba(8,11,63,0.07)]"
              key={item}
            >
              <ShieldCheck aria-hidden="true" className="size-3.5 text-mint" />
              {item}
            </span>
          ))}
        </div>

      </motion.div>

      <motion.div {...panelEntrance}>
        <Card as="aside" className="p-5 sm:p-6" variant="evidence">
          <div className="border-b border-line pb-5">
            <p className="eyebrow-text">Portfolio Evidence</p>
            <h2 className="panel-title mt-2">Work tied to measurable security outcomes</h2>
            <p className="compact-copy mt-3">
              Case studies show how findings were prioritized, remediated, validated, and documented across lab security work.
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            {heroProofPoints.map((point) => (
              <div className="rounded-md border border-line bg-ink-soft/80 p-4" key={point.label}>
                <p className="eyebrow-text text-[0.62rem]">{point.label}</p>
                <p className="compact-copy mt-2">{point.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-md border border-lineStrong/25 bg-surfaceElevated/80 p-4">
            <p className="eyebrow-text text-[0.62rem]">Primary tools</p>
            <p className="compact-copy mt-2">
              Tenable, PowerShell, DISA STIG, Microsoft Defender, Sentinel-style KQL, and Windows security telemetry.
            </p>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
