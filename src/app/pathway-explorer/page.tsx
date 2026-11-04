import { PageHero } from "@/components/hero/PageHero";
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
      <PageHero eyebrow="FIND YOUR STARTING POINT" title="A few questions." titleItalic="A fresh direction." lead="Explore a useful next step through four short questions about your education and goals." imageSrc="/images/ekaa/hero-study-abroad.webp" primaryCta={{label:"Explore my path",href:"#explorer"}} secondaryCta={{label:"Explore student assessment",href:"/career-assessment"}} />

      {/* Widget */}
      <section id="explorer" className="shell">
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
          <span>Book EKAA Rise Psychometric Assessment</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </div>
  );
}
