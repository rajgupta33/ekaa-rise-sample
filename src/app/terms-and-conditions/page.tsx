import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { AlertCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Terms and Conditions (Draft) | EKAA Rise",
  description: "Terms and conditions governing the use of the EKAA Rise website and booking of education advisory services in Dubai.",
  canonicalPath: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  return (
    <div className="space-y-8 pb-20">
      <div className="shell pt-4">
        <Breadcrumbs items={[{ label: "Terms & Conditions (Draft)", href: "/terms-and-conditions" }]} />
      </div>

      <div className="shell max-w-3xl mx-auto space-y-6">
        <div className="p-4 rounded-2xl bg-champagne-light/30 border border-champagne/40 flex items-start gap-3 text-xs text-ink/80">
          <AlertCircle className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
          <div>
            <strong className="block text-ink">Client Review Note — Draft Terms:</strong>
            These terms represent the proposed commercial framework for client review. Live checkout remains disabled until legal counsel approval.
          </div>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
          Terms and Conditions
        </h1>
        <p className="text-xs text-muted">
          Last Updated: October 2026 · Jurisdiction: Dubai, United Arab Emirates
        </p>

        <div className="space-y-6 text-xs sm:text-sm text-ink/80 leading-relaxed font-sans pt-4 border-t border-border">
          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-ink">1. Nature of Advisory Services</h2>
            <p>
              EKAA Rise provides student psychometric assessments, career guidance, subject selection advice, and international university admissions strategy. We do not act as an accredited degree-awarding institution, immigration authority, or employment agency.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-ink">2. Psychometric Test Fee (AED 100)</h2>
            <p>
              The confirmed public fee for the EKAA Rise Psychometric Test is AED 100. Prior to any financial charge, the precise assessment modality, testing duration, and reporting inclusions are fully disclosed. Applicable VAT and payment processing terms will be confirmed upon checkout integration.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-ink">3. No Guarantee of Admission Outcomes</h2>
            <p>
              Admissions decisions, scholarship awards, and visa issuances remain solely within the discretion of the respective educational institutions and government border agencies. EKAA Rise provides preparation and guidance; no guarantee of admission or visa approval is expressed or implied.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-ink">4. Intellectual Property</h2>
            <p>
              All trademarks, illustrative sample reports, text, original graphics, and layouts on this website are the intellectual property of EKAA Rise and protected under applicable copyright laws.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
