import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Refund & Cancellation Policy (Draft) | EKAA Rise",
  description: "Draft cancellation and rescheduling framework for the AED 100 psychometric assessment and advisory sessions in Dubai.",
  canonicalPath: "/refund-and-cancellation-policy",
});

export default function RefundPolicyPage() {
  return (
    <div className="space-y-8 pb-20">
      <div className="shell pt-4">
        <Breadcrumbs items={[{ label: "Refund & Cancellation Policy (Draft)", href: "/refund-and-cancellation-policy" }]} />
      </div>

      <div className="shell max-w-3xl mx-auto space-y-6">
        <div className="p-4 rounded-2xl bg-champagne-light/30 border border-champagne/40 flex items-start gap-3 text-xs text-ink/80">
          <AlertCircle className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
          <div>
            <strong className="block text-ink">Client Review Note — Draft Policy:</strong>
            Specific refund terms and rescheduling windows are subject to client confirmation before enabling live payment processing.
          </div>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
          Refund & Cancellation Policy
        </h1>
        <p className="text-xs text-muted">
          Last Updated: October 2026 · Target Jurisdiction: Dubai, United Arab Emirates
        </p>

        <div className="space-y-6 text-xs sm:text-sm text-ink/80 leading-relaxed font-sans pt-4 border-t border-border">
          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-ink">1. Current Preview Status</h2>
            <p>
              In this client review build, the booking process operates in demonstration preview mode. No live payments or automated card charges occur.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-ink">2. Proposed Rescheduling Framework</h2>
            <p>
              Families who have booked an AED 100 psychometric assessment or personal guidance session may request rescheduling up to 24 hours prior to the scheduled appointment without penalty.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-ink">3. Assessment Digital Access & Consumables</h2>
            <p>
              Once a candidate has generated their individualized assessment login credentials with a licensed testing provider and initiated the assessment, the assessment fee is generally non-refundable due to vendor licensing costs. Prior to initiation, full cancellation requests will be honoured under client-approved terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
