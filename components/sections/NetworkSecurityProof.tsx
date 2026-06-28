"use client";

import { ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { supplementalImpactMetrics } from "@/lib/data/resume";

export function NetworkSecurityProof() {
  const bruteForceMetric = supplementalImpactMetrics[0];

  if (!bruteForceMetric) {
    return null;
  }

  return (
    <Reveal y={14}>
      <Card as="section" className="mt-5 p-5 sm:p-6 lg:p-7" variant="evidence">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(220px,0.35fr)] md:items-center">
          <div className="min-w-0">
            <p className="eyebrow-text">Network security proof</p>
            <h3 className="section-title mt-3">RDP brute-force attempts reduced through access controls</h3>
            <p className="body-copy mt-4 max-w-3xl">
              Inbound NSG and firewall controls were applied to restrict RDP exposure, reducing observed
              RDP-related brute-force attempts by 100%.
            </p>
          </div>

          <div className="min-w-0 rounded-md border border-remediation/40 bg-ink-soft/70 p-4">
            <div className="flex items-center gap-2 text-remediation">
              <ShieldCheck aria-hidden="true" className="size-4" />
              <p className="text-xs font-semibold uppercase tracking-[0.12em]">Verified reduction</p>
            </div>
            <p className="heading-text mt-4 text-5xl leading-none text-remediation">{bruteForceMetric.value}</p>
            <p className="mt-3 text-sm font-semibold text-ink">RDP brute-force attempts reduced</p>
            <p className="compact-copy mt-2">Access controls reduced observed RDP brute-force attempts.</p>
          </div>
        </div>
      </Card>
    </Reveal>
  );
}
