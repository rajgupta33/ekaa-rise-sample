import { PageHero } from "@/components/hero/PageHero";
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
      <PageHero eyebrow="GUIDANCE THAT STARTS WITH YOU" title="Your questions." titleItalic="Our starting point." lead="Share your stage, interests and goals to prepare for a guidance conversation." imageSrc="/images/ekaa/hero-parents.webp" primaryCta={{label:"Share my goals",href:"#consultation"}} secondaryCta={{label:"Explore student assessment",href:"/career-assessment"}} />

      {/* Form */}
      <section id="consultation" className="shell">
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
          <span>Book EKAA Rise Psychometric Test</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </div>
  );
}
