import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, ArrowRight, ShieldCheck, Lock, HelpCircle } from "lucide-react";
import { BookingWizard } from "@/components/forms/BookingWizard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Book Psychometric Test — AED 100 | EKAA Rise Dubai",
  description: "Begin an EKAA Rise psychometric test booking for AED 100. Review the assessment details and complete the secure enquiry steps.",
  canonicalPath: "/book-psychometric-test",
  keywords: [
    "book psychometric test Dubai AED 100",
    "student aptitude test booking Dubai",
    "psychometric assessment registration Dubai",
  ],
});

export default function BookPsychometricTestPage() {
  return (
    <div className="space-y-10 pb-20">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs
          items={[
            { label: "Psychometric Test in Dubai", href: "/psychometric-test-dubai" },
            { label: "Book Assessment (AED 100)", href: "/book-psychometric-test" },
          ]}
        />
      </div>

      {/* Header */}
      <section className="shell text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-teal">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Confirmed Commercial Offer</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight">
          Book Your EKAA Rise Psychometric Test —{" "}
          <span className="text-teal font-mono">AED 100</span>
        </h1>
        <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
          Begin your assessment booking in three simple stages. All entries in this client review environment operate in safe preview demonstration mode.
        </p>
      </section>

      {/* Interactive Booking Wizard */}
      <section className="shell">
        <BookingWizard />
      </section>

      {/* Assurance Footer */}
      <section className="shell max-w-3xl mx-auto text-center space-y-3 pt-6 border-t border-border">
        <div className="flex items-center justify-center gap-6 text-xs text-muted flex-wrap">
          <span className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-teal" />
            Minor Privacy Protected
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-teal" />
            No Automated Cards Charged
          </span>
          <span className="flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-teal" />
            Need help?{" "}
            <Link href="/faq" className="text-teal underline font-medium">
              View FAQs
            </Link>
          </span>
        </div>
      </section>
    </div>
  );
}
