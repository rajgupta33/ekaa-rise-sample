import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Compass, Sparkles, ArrowRight, ShieldAlert } from "lucide-react";
import { PathwayExplorerWidget } from "@/components/explorer/PathwayExplorerWidget";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Explore Your Education Pathway | EKAA Rise",
  description: "A short non-diagnostic guide to help students identify a useful next step in career, subject and study-abroad planning.",
  canonicalPath: "/pathway-explorer",
  keywords: [
    "student education pathway explorer",
    "career choice intake tool Dubai",
    "study abroad planning quiz Dubai",
  ],
});

export default function PathwayExplorerPage() {
  return (
    <div className="space-y-10 pb-20">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs items={[{ label: "Pathway Explorer", href: "/pathway-explorer" }]} />
      </div>

      {/* Header */}
      <section className="shell text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-teal">
          <Compass className="w-3.5 h-3.5" />
          <span>Interactive Guidance Tool</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight">
          Where Could Your Education Journey Begin?
        </h1>
        <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
          Take 90 seconds to answer four simple questions about your academic stage and goals to discover your recommended next step.
        </p>
      </section>

      {/* Widget */}
      <section className="shell">
        <PathwayExplorerWidget />
      </section>

      {/* Flagship Notice */}
      <section className="shell max-w-xl mx-auto text-center space-y-2 pt-6 border-t border-border">
        <p className="text-xs text-muted">
          Ready for a full diagnostic evaluation?
        </p>
        <Link
          href="/book-psychometric-test"
          className="inline-flex items-center gap-2 text-xs font-bold text-teal hover:underline"
        >
          <span>Book EKAA Rise Psychometric Assessment (AED 100)</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </div>
  );
}
