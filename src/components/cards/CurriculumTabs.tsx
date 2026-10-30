"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  ArrowRight,
  Compass,
  HelpCircle
} from "lucide-react";
import { curriculaData } from "@/config/curricula";

export function CurriculumTabs() {
  const [activeCurriculum, setActiveCurriculum] = useState<string>("ib");

  const current = curriculaData[activeCurriculum];

  return (
    <div className="bg-white rounded-3xl border border-border shadow-elevated p-6 sm:p-10">
      {/* Curriculum Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-border scrollbar-none">
        {Object.values(curriculaData).map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCurriculum(c.id)}
            className={`py-3 px-5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeCurriculum === c.id
                ? "bg-ink text-white shadow-md scale-[1.02]"
                : "bg-ivory text-ink/75 hover:bg-teal-light/50 border border-border"
            }`}
          >
            <span className="font-mono text-[10px] bg-white/20 px-1.5 py-0.5 rounded">
              {c.id.toUpperCase()}
            </span>
            <span>{c.name.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      {/* Selected Curriculum Header */}
      <div className="space-y-6 animate-in fade-in duration-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
              {current.badge}
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
              {current.name}
            </h3>
            <p className="text-sm text-teal-dark font-medium mt-1">
              {current.tagline}
            </p>
          </div>

          <Link
            href="/book-psychometric-test"
            className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white text-xs font-bold px-4 py-2.5 rounded-full transition-colors flex-shrink-0"
          >
            <span>Align with AED 100 Test</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Dubai Context */}
        <div className="p-4 rounded-2xl bg-teal-light/40 border border-teal/20 text-xs sm:text-sm text-ink leading-relaxed">
          <strong className="text-teal-dark block mb-1">Dubai School Landscape:</strong>
          {current.dubaiContext} {current.coreStructure}
        </div>

        {/* Strategic Considerations */}
        <div className="space-y-3">
          <h4 className="font-display font-bold text-base text-ink flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal" />
            <span>Strategic Subject Rules for University Eligibility</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {current.strategicConsiderations.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-ivory border border-border text-xs text-muted leading-relaxed"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Myths vs Facts */}
        <div className="space-y-3 pt-2">
          <h4 className="font-display font-bold text-base text-ink flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-champagne" />
            <span>Common Misconceptions Among Dubai Families</span>
          </h4>
          <div className="grid grid-cols-1 gap-2.5">
            {current.commonMisconceptions.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-champagne-light/20 border border-champagne/30 text-xs text-ink/85 leading-relaxed"
              >
                {m}
              </div>
            ))}
          </div>
        </div>

        {/* Sample Pathways */}
        <div className="space-y-3 pt-2">
          <h4 className="font-display font-bold text-base text-ink flex items-center gap-2">
            <Compass className="w-4 h-4 text-teal" />
            <span>Illustrative Subject Combinations by Target Degree</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {current.samplePathways.map((path, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-border bg-white space-y-2 flex flex-col justify-between"
              >
                <div>
                  <span className="font-display font-bold text-sm text-ink block">
                    {path.targetDegree}
                  </span>
                  <p className="text-xs font-mono text-teal font-semibold mt-1">
                    {path.recommendedSubjects}
                  </p>
                </div>
                <p className="text-[11px] text-muted leading-relaxed pt-2 border-t border-border/60">
                  {path.rationale}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Questions Checklist */}
        <div className="p-4 rounded-2xl bg-ivory border border-border space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted font-bold block">
            Questions for Your Family to Review
          </span>
          <ul className="space-y-1.5 text-xs text-ink/80">
            {current.questionsToAsk.map((q, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-teal font-bold">•</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
