import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, AlertCircle, Lock } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy (Draft for Legal Review) | EKAA Rise",
  description: "Privacy policy framework governing student assessment data collection and guardian consent under UAE regulations.",
  canonicalPath: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8 pb-20">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs items={[{ label: "Privacy Policy (Draft)", href: "/privacy-policy" }]} />
      </div>

      <div className="shell max-w-3xl mx-auto space-y-6">
        {/* Draft Notice */}
        <div className="p-4 rounded-2xl bg-champagne-light/30 border border-champagne/40 flex items-start gap-3 text-xs text-ink/80">
          <AlertCircle className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
          <div>
            <strong className="block text-ink">Client Review Note — Draft Policy:</strong>
            This privacy policy is a structured draft prepared for formal corporate legal counsel review prior to live payment gateway activation.
          </div>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-muted">
          Last Updated: October 2026 · Target Jurisdiction: Dubai, United Arab Emirates
        </p>

        <div className="space-y-6 text-xs sm:text-sm text-ink/80 leading-relaxed font-sans pt-4 border-t border-border">
          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-ink">1. Data Controller Identification</h2>
            <p>
              EKAA Rise operates this website to provide education advisory and psychometric assessment services to students and families in Dubai, UAE. Legal entity registration details will be published upon final regulatory approval.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-ink">2. Categories of Information Collected</h2>
            <p>
              We collect information necessary to deliver educational guidance and schedule the AED 100 psychometric assessment:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-muted">
              <li>Candidate and Guardian names and contact identifiers (email, telephone).</li>
              <li>Current school curriculum (IB, British, American, CBSE) and school year.</li>
              <li>Aptitude assessment responses administered via validated testing instruments.</li>
              <li>Advisory session notes and destination country preferences.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-ink">3. Guardian Consent for Minors</h2>
            <p>
              In accordance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection, the collection and processing of personal data relating to minors (under 18 years of age) is contingent upon explicit consent provided by a parent or legal guardian.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-ink">4. How Assessment Data Is Used</h2>
            <p>
              Assessment responses and candidate profiles are utilized strictly to generate diagnostic educational reports and facilitate guidance conversations. We do not sell, rent, or monetize student data with third-party advertising brokers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-ink">5. Data Retention & Erasure Requests</h2>
            <p>
              Families retain the right to request access to, correction of, or permanent erasure of their student records at any time by contacting our advisory office at privacy@ekaarise.ae (pending domain activation).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
