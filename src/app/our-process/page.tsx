import { ServiceExplorer } from "@/components/interior/ServiceExplorer";
import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, ArrowRight, Compass, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/hero/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JourneyTimeline } from "@/components/journey/JourneyTimeline";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "How EKAA Rise Works | From Career Discovery to Admissions",
  description: "See how EKAA Rise connects assessment-led reflection with academic choices and international university guidance.",
  canonicalPath: "/our-process",
  keywords: [
    "EKAA Rise student guidance process",
    "education advisory methodology Dubai",
    "career guidance process Dubai",
  ],
});

export default function OurProcessPage() {
  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs items={[{ label: "Our Process", href: "/our-process" }]} />
      </div>

      {/* Hero */}
      <PageHero
        eyebrow="THE EKAA METHODOLOGY"
        title="From a question"
        titleItalic="to a next step."
        lead="Explore how discovery, conversation and thoughtful planning come together."
        primaryCta={{
          label: "Book Psychometric Test",
          href: "/book-psychometric-test",
        }}
        secondaryCta={{
          label: "Discuss Admissions",
          href: "/book-consultation",
        }}
        showPricePill={false}
        variant="compact"
      />
      <ServiceExplorer kind="process" />
      <details className="interior-deep"><summary>Explore the full guidance and frequently asked questions</summary><div className="interior-deep-content">

      {/* Timeline Component */}
      <section className="shell">
        <JourneyTimeline />
      </section>

      {/* Closing CTA */}
      <section className="shell text-center max-w-2xl mx-auto space-y-4 pt-4">
        <h3 className="font-display font-bold text-2xl text-ink">
          Begin Your 5-Stage Journey Today
        </h3>
        <p className="text-xs sm:text-sm text-muted">
          Start with our confirmed psychometric assessment or talk directly with an admissions advisor.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/book-psychometric-test"
            className="inline-flex items-center gap-2 bg-ink hover:bg-teal text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-colors shadow-sm"
          >
            <span>Book Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 bg-white text-ink border border-border font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full hover:bg-ivory"
          >
            <span>Request Consultation</span>
          </Link>
        </div>
      </section>
      </div></details>
    </div>
  );
}
