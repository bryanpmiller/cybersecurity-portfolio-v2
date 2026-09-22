import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function NetworkSecurityProof() {
  return (
    <Reveal y={14}>
      <Card as="section" className="mt-5 p-5 sm:p-6 lg:p-7" variant="evidence">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(220px,0.45fr)] md:items-center">
          <div className="min-w-0">
            <p className="eyebrow-text">Cyber-range network controls</p>
            <h3 className="section-title mt-3">Restricting inbound RDP exposure</h3>
            <p className="body-copy mt-4 max-w-3xl">
              Configured Azure network security groups and VM host firewalls in the cyber range to restrict inbound
              access. This work complements the endpoint investigations by connecting authentication activity with
              practical access-control decisions.
            </p>
            <Link className="text-link mt-4 inline-flex min-h-11 items-center" href="/about">Review the cybersecurity experience summary</Link>
          </div>
          <div className="min-w-0 rounded-md border border-remediation/40 bg-ink-soft/70 p-4">
            <div className="flex items-center gap-2 text-remediation">
              <ShieldCheck aria-hidden="true" className="size-4" />
              <p className="text-xs font-semibold uppercase tracking-[0.12em]">Configuration practice</p>
            </div>
            <p className="mt-4 text-lg font-semibold text-ink">Azure NSGs + host firewalls</p>
            <p className="compact-copy mt-2">Layered inbound controls applied in a simulated environment.</p>
          </div>
        </div>
      </Card>
    </Reveal>
  );
}
