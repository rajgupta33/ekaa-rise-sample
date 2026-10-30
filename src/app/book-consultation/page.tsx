import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Compass, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Request Career or Study Abroad Consultation | EKAA Rise",
  description: "Tell EKAA Rise about your academic stage, career questions or international university plans and request a guidance conversation.",
  canonicalPath: "/book-consultation",
  keywords: [
    "book career guidance Dubai",
    "study abroad consultation Dubai",
    "education advisor meeting Dubai",
  ],
});

export default function BookConsultationPage() {
  return (
    <div className="space-y-10 pb-20">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs items={[{ label: "Book Consultation", href: "/book-consultation" }]} />
      </div>

      {/* Header */}
      <section className="shell text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-teal">
          <Compass className="w-3.5 h-3.5" />
          <span>One-on-One Advisory</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight">
          Book a Personal Guidance Conversation
        </h1>
        <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
          Tell us about your current academic curriculum, emerging questions, or target university destinations. We will schedule a personalized conversation.
        </p>
      </section>

      {/* Form */}
      <section className="shell">
        <ConsultationForm />
      </section>

      {/* Alternative */}
      <section className="shell max-w-xl mx-auto text-center space-y-3 pt-6 border-t border-border">
        <p className="text-xs text-muted">
          Looking specifically for the aptitude assessment first?
        </p>
        <Link
          href="/book-psychometric-test"
          className="inline-flex items-center gap-2 text-xs font-bold text-teal hover:underline"
        >
          <span>Book EKAA Rise Psychometric Test (AED 100)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </div>
  );
}
