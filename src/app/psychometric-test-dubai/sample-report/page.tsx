import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, ArrowRight, ShieldCheck, Download, AlertCircle, CheckCircle2 } from "lucide-react";
import { MockReportInteractive } from "@/components/report/MockReportInteractive";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Student Psychometric Test Sample Report | EKAA Rise",
  description: "View an illustrative student assessment report and learn how structured insights can support career and subject discussions.",
  canonicalPath: "/psychometric-test-dubai/sample-report",
  keywords: [
    "student psychometric assessment sample report",
    "psychometric test report sample Dubai",
    "career assessment report student",
  ],
});

export default function SampleReportPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs
          items={[
            { label: "Psychometric Test in Dubai", href: "/psychometric-test-dubai" },
            { label: "Sample Report", href: "/psychometric-test-dubai/sample-report" },
          ]}
        />
      </div>

      {/* Header */}
      <section className="shell text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-teal">
          <span className="w-6 h-px bg-champagne" />
          <span>Interactive Diagnostic Visual</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ink tracking-tight">
          Explore an Illustrative Student Career Assessment Report
        </h1>
        <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
          See firsthand how structured reflections translate into constructive conversations. Every chart and dimension below is an illustrative model of candidate discovery.
        </p>
      </section>

      {/* Main Interactive Report Module */}
      <section className="shell">
        <MockReportInteractive />
      </section>

      {/* Explanatory Guidance: How to Read Results Responsibly */}
      <section className="shell">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-3xl border border-border p-6 sm:p-10 shadow-sm">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-extrabold block">
              Guideline 01
            </span>
            <h3 className="font-display font-bold text-lg text-ink">
              Look for Clustering Patterns
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              No single percentile defines a student. Look at where cognitive strengths (e.g. spatial logic) reinforce interest clusters (e.g. engineering, design, technology).
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-extrabold block">
              Guideline 02
            </span>
            <h3 className="font-display font-bold text-lg text-ink">
              Check School Prerequisites
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Use test findings to cross-reference degree prerequisites. If interested in Economics, verify that Math AA is taken rather than Math AI.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-extrabold block">
              Guideline 03
            </span>
            <h3 className="font-display font-bold text-lg text-ink">
              Pair with Open Dialogue
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Results achieve their greatest impact when discussed constructively with parents and an experienced advisor who knows Dubai school systems.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Closing Bar */}
      <section className="shell">
        <div className="p-8 sm:p-10 rounded-3xl bg-ink-deep text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-elevated">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-soft font-bold block">
              Ready For Real Assessment?
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Book Your Student Assessment — AED 100
            </h2>
            <p className="text-xs text-ivory/70 max-w-lg">
              Start your journey today with our confirmed AED 100 psychometric assessment for Dubai students.
            </p>
          </div>
          <Link
            href="/book-psychometric-test"
            className="inline-flex items-center gap-2 bg-teal hover:bg-teal-soft text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all flex-shrink-0"
          >
            <span>Book Assessment — AED 100</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
