import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { HelpCircle, ArrowRight, MessageSquare } from "lucide-react";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Psychometric Test & Study Abroad FAQs | EKAA Rise",
  description: "Answers about EKAA Rise's AED 100 psychometric test, subject selection, international admissions and parent questions.",
  canonicalPath: "/faq",
  keywords: [
    "psychometric test Dubai FAQ",
    "study abroad questions Dubai",
    "AED 100 test price questions",
  ],
});

export default function FAQPage() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs items={[{ label: "Frequently Asked Questions", href: "/faq" }]} />
      </div>

      {/* Header */}
      <section className="shell text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-teal">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Knowledge & Answers</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight">
          Frequently Asked Questions About EKAA Rise
        </h1>
        <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
          Transparent answers regarding our confirmed AED 100 psychometric test, Dubai school curricula, overseas university admissions, and family privacy.
        </p>
      </section>

      {/* Accordion with filters */}
      <section className="shell max-w-3xl mx-auto">
        <FAQAccordion showCategoryFilters={true} />
      </section>

      {/* Direct Contact Callout */}
      <section className="shell max-w-2xl mx-auto text-center p-8 rounded-3xl bg-white border border-border shadow-sm space-y-3">
        <h3 className="font-display font-bold text-lg text-ink">
          Have a Question Not Listed Here?
        </h3>
        <p className="text-xs text-muted max-w-md mx-auto">
          Our advisors are happy to address your family's unique curriculum situation or study abroad destination queries.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-ink hover:bg-teal text-white font-bold text-xs px-5 py-3 rounded-full transition-colors"
          >
            <span>Contact EKAA Rise Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
