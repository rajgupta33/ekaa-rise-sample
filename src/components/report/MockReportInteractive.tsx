"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  BarChart3, 
  Compass, 
  HelpCircle, 
  Download, 
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  Bookmark
} from "lucide-react";

export function MockReportInteractive() {
  const [activeTab, setActiveTab] = useState<"interests" | "aptitudes" | "pathways" | "counselor">("interests");

  return (
    <div className="bg-white rounded-3xl border border-border shadow-elevated relative overflow-hidden">
      {/* Watermark Banner */}
      <div className="bg-champagne/15 border-b border-champagne/30 px-4 py-2 flex items-center justify-between text-xs text-ink/80">
        <div className="flex items-center gap-2 font-mono font-bold tracking-wider uppercase text-[11px]">
          <ShieldAlert className="w-3.5 h-3.5 text-champagne" />
          <span>Illustrative Sample Design · Not Real Student Results</span>
        </div>
        <span className="hidden sm:inline font-mono text-[10px] text-muted">
          Framework: Diagnostic Self-Reflection
        </span>
      </div>

      {/* Report Header Bar */}
      <div className="p-6 sm:p-8 bg-ivory border-b border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-teal font-bold tracking-wider uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EKAA Rise · Student Blueprint</span>
          </div>
          <h3 className="font-display font-extrabold text-2xl text-ink">
            Candidate Profile: Sample Student Report
          </h3>
          <p className="text-xs text-muted mt-1">
            Curriculum: IB Diploma Year 11 · Dubai, UAE · Illustrative Profile
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/book-psychometric-test"
            className="inline-flex items-center gap-1.5 bg-ink hover:bg-teal text-white text-xs font-bold px-4 py-2.5 rounded-full transition-colors shadow-sm"
          >
            <span>Book Psychometric Test — AED 100</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="flex border-b border-border bg-white overflow-x-auto scrollbar-none px-4 sm:px-8">
        {[
          { id: "interests", label: "1. Vocational Interests", icon: Sparkles },
          { id: "aptitudes", label: "2. Cognitive Aptitudes", icon: BarChart3 },
          { id: "pathways", label: "3. Potential Pathways", icon: Compass },
          { id: "counselor", label: "4. Discussion Questions", icon: HelpCircle },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 py-4 px-3 sm:px-4 text-xs font-bold border-b-2 whitespace-nowrap transition-colors ${
                isActive
                  ? "border-teal text-teal"
                  : "border-transparent text-muted hover:text-ink"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="p-6 sm:p-8 bg-white min-h-[380px]">
        {/* TAB 1: INTERESTS */}
        {activeTab === "interests" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h4 className="font-display font-bold text-lg text-ink">
                Occupational Interest Profile (RIASEC Model)
              </h4>
              <p className="text-xs text-muted leading-relaxed mt-1">
                Visualizing interest affinities across scientific investigation, enterprising initiative, and creative abstraction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-teal-light/40 border border-teal/20 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-extrabold block">
                  Primary Dimension
                </span>
                <h5 className="font-display font-bold text-base text-ink">Investigative (High)</h5>
                <p className="text-xs text-muted leading-relaxed">
                  Strong intrinsic appetite for scientific exploration, data analysis, and mathematical problem solving.
                </p>
                <div className="w-full bg-white rounded-full h-2 overflow-hidden mt-2">
                  <div className="bg-teal h-full rounded-full" style={{ width: "88%" }} />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-champagne-light/30 border border-champagne/30 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-champagne font-extrabold block">
                  Secondary Dimension
                </span>
                <h5 className="font-display font-bold text-base text-ink">Enterprising (Moderate)</h5>
                <p className="text-xs text-muted leading-relaxed">
                  Drawn to strategic leadership, project execution, and global technology ventures.
                </p>
                <div className="w-full bg-white rounded-full h-2 overflow-hidden mt-2">
                  <div className="bg-champagne h-full rounded-full" style={{ width: "72%" }} />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-ivory border border-border space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-muted font-extrabold block">
                  Supporting Dimension
                </span>
                <h5 className="font-display font-bold text-base text-ink">Artistic / Design (Balanced)</h5>
                <p className="text-xs text-muted leading-relaxed">
                  Values elegant design aesthetics, user-experience thinking, and spatial symmetry.
                </p>
                <div className="w-full bg-white rounded-full h-2 overflow-hidden mt-2">
                  <div className="bg-muted h-full rounded-full" style={{ width: "64%" }} />
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-ivory border border-border text-xs text-muted leading-relaxed">
              <strong>Advisory Note:</strong> High Investigative coupled with Enterprising scores typically thrives in Quantitative Finance, Technology Product Management, and Applied Engineering rather than purely isolated academic research.
            </div>
          </div>
        )}

        {/* TAB 2: APTITUDES */}
        {activeTab === "aptitudes" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h4 className="font-display font-bold text-lg text-ink">
                Cognitive Aptitude Velocity (Standardised Sample)
              </h4>
              <p className="text-xs text-muted leading-relaxed mt-1">
                Comparative benchmarks across fundamental reasoning dimensions. All percentiles are illustrative.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { name: "Numerical Reasoning", pct: "86%", desc: "Statistical deduction, quantitative pattern identification, mathematical modeling" },
                { name: "Spatial & Structural Logic", pct: "91%", desc: "Mental manipulation of 3D forms, architectural symmetry, physical systems" },
                { name: "Abstract Problem Solving", pct: "82%", desc: "Algorithmic thinking, fluid reasoning under unfamiliar constraints" },
                { name: "Verbal Comprehension", pct: "78%", desc: "Textual precision, complex argumentation analysis, conceptual synthesis" },
              ].map((item) => (
                <div key={item.name} className="p-3.5 rounded-xl border border-border bg-ivory/60 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-sm text-ink">{item.name}</span>
                    <span className="font-mono text-xs font-bold text-teal">{item.pct} (Sample)</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-2 overflow-hidden">
                    <div className="bg-teal-dark h-full rounded-full" style={{ width: item.pct }} />
                  </div>
                  <p className="text-[11px] text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: PATHWAYS */}
        {activeTab === "pathways" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h4 className="font-display font-bold text-lg text-ink">
                Sample Academic & Degree Pathways to Explore
              </h4>
              <p className="text-xs text-muted leading-relaxed mt-1">
                Not a rigid forecast, but promising fields where your profile indicators cluster naturally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-teal/20 bg-teal-light/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-base text-ink">
                    Computational Design & Engineering
                  </span>
                  <span className="text-[10px] font-mono bg-teal text-white px-2 py-0.5 rounded-full font-bold">
                    Primary Fit
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Combines spatial visualization strength with analytical problem solving. Degrees: Mechanical Engineering, Industrial Design, Architectural Informatics.
                </p>
                <div className="text-[11px] font-mono text-teal-dark pt-2 border-t border-teal/15">
                  Prerequisites to check: HL Mathematics AA, HL Physics
                </div>
              </div>

              <div className="p-5 rounded-2xl border border-border bg-ivory space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-base text-ink">
                    Data Science & Quantitative Economics
                  </span>
                  <span className="text-[10px] font-mono bg-champagne text-ink px-2 py-0.5 rounded-full font-bold">
                    Secondary Fit
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  Leverages numerical reasoning speed with strategic enterprising interests. Degrees: Econometrics, Operations Research, Financial Engineering.
                </p>
                <div className="text-[11px] font-mono text-muted pt-2 border-t border-border">
                  Prerequisites to check: HL Mathematics, Economics or CS
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: COUNSELOR */}
        {activeTab === "counselor" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h4 className="font-display font-bold text-lg text-ink">
                Structured Questions for Your Guidance Session
              </h4>
              <p className="text-xs text-muted leading-relaxed mt-1">
                A psychometric report achieves its true value when discussed with a qualified advisor.
              </p>
            </div>

            <div className="space-y-3">
              {[
                "How does my strong Spatial score reconcile with my uncertainty between Architecture and Mechanical Engineering?",
                "Which specific IB Higher Level mathematics course (AA vs AI) will UK and Canadian admissions officers demand for my target degrees?",
                "Does my Enterprising interest suggest I should explore dual-degrees (e.g. Engineering + Management or CS + Business)?",
                "What realistic university destinations (UK, US, Canada, Europe) best align with my balanced academic and design profile?",
              ].map((q, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-border bg-ivory flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal text-white text-xs font-mono font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs font-semibold text-ink leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Report Footer */}
      <div className="p-4 sm:p-6 bg-ivory-warm border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-muted text-center sm:text-left">
          Ready to experience structured self-discovery? <strong>AED 100 psychometric assessment</strong>.
        </div>
        <Link
          href="/book-psychometric-test"
          className="inline-flex items-center gap-2 bg-ink hover:bg-teal text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors"
        >
          <span>Book Psychometric Test — AED 100</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
