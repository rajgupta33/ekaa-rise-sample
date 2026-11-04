import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, ArrowRight, ShieldCheck, Lock, HelpCircle } from "lucide-react";
import { BookingWizard } from "@/components/forms/BookingWizard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Book Psychometric Test | EKAA Rise Dubai",
  description: "Begin an EKAA Rise psychometric test booking your assessment. Review the assessment details and complete the secure enquiry steps.",
  canonicalPath: "/book-psychometric-test",
  keywords: [
    "book student assessment Dubai",
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
            { label: "Book Assessment", href: "/book-psychometric-test" },
          ]}
        />
      </div>

      {/* Header */}
      <section className="shell text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-teal">
          <Sparkles className="w-3.5 h-3.5" />
          <span>YOUR JOURNEY STARTS HERE</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight">
          Let’s start with {" "}
          <span className="font-serif italic text-teal">you.</span>
        </h1>
        <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
          Tell us a little about the student. Review the assessment details and fee at the final step, before checkout. This booking is currently a demonstration; no details are submitted.
        </p>
      </section>

      {/* Interactive Booking Wizard */}
      <section className="shell">
        <div className="p-6 rounded-2xl border border-teal/30 bg-teal-light text-center">
          <h2 className="font-bold text-xl">Want to take the student career explorer now?</h2>
          <p className="text-sm my-3">The grade-specific exploratory assessments work immediately, with personal results and no payment required. This is separate from the advisory booking preview below.</p>
          <Link href="/career-assessment" className="inline-flex bg-ink text-white rounded-xl px-6 py-3 font-bold">Start student assessment →</Link>
        </div>
      </section>
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
