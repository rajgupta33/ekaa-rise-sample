"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Headphones, 
  Sparkles, 
  MessageSquare, 
  Compass, 
  CalendarCheck, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export function JourneyTimeline() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const stages = [
    {
      step: 1,
      title: "Listen & Understand",
      label: "Diagnostic Intake",
      summary: "We begin by understanding the student's current school curriculum (IB, British, American, CBSE), academic history, emerging interests, and family aspirations.",
      details: "Before administering any assessment or recommending universities, we listen to the human context: which subjects ignite genuine curiosity, where exam stress occurs, and what values the family prioritizes.",
      icon: Headphones,
      outcome: "Clarified student profile & targeted questions",
    },
    {
      step: 2,
      title: "Discover via Assessment",
      label: "Psychometric Testing · AED 100",
      summary: "Administering a validated diagnostic tool evaluating cognitive aptitudes, vocational interests, and learning style preferences.",
      details: "Our flagship AED 100 assessment provides structured, objective benchmarks rather than guesswork, capturing spatial, numerical, abstract, and verbal reasoning velocity alongside Holland vocational codes.",
      icon: Sparkles,
      outcome: "Comprehensive candidate diagnostic data",
    },
    {
      step: 3,
      title: "Reflect with Counselling",
      label: "Personalized Interpretation",
      summary: "Translating raw assessment percentiles into meaningful personal reflections through structured, conversational advisory sessions.",
      details: "We ensure test results are never delivered as cold verdicts. Instead, we examine intersections: connecting strong spatial reasoning with industrial design, or analytical thinking with quantitative finance.",
      icon: MessageSquare,
      outcome: "Identified viable career clusters & academic directions",
    },
    {
      step: 4,
      title: "Explore Universities & Courses",
      label: "Global Admissions Fit",
      summary: "Evaluating prospective degrees across the UK, USA, Canada, Australia, Germany, and Ireland based on prerequisite match, culture, and cost.",
      details: "We look beyond generic rankings to examine specific course syllabi, internship/co-op structures, campus environments, entry grade requirements, and total international tuition budgets.",
      icon: Compass,
      outcome: "Balanced 10–12 university shortlist (Dream, Target, Safety)",
    },
    {
      step: 5,
      title: "Plan & Execute Applications",
      label: "Strategic Application Roadmap",
      summary: "Structuring application milestones across Grade 11 and 12: personal statements, supplemental essays, recommendation letters, and test timelines.",
      details: "From UCAS personal statements to Common App holistic essays, we provide clear editorial guidance, deadline pacing, and interview readiness to present authentic, compelling candidacies.",
      icon: CalendarCheck,
      outcome: "Polished international submissions & offer management",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Step Selector Pills for quick navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {stages.map((st) => (
          <button
            key={st.step}
            onClick={() => setActiveStep(st.step)}
            className={`py-2 px-3.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              activeStep === st.step
                ? "bg-ink text-white shadow-sm"
                : "bg-white text-ink/70 hover:bg-teal-light/50 border border-border"
            }`}
          >
            <span className="font-mono text-[10px] opacity-75">0{st.step}</span>
            <span>{st.title.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      {/* Vertical Timeline Card Stack */}
      <div className="space-y-4">
        {stages.map((st) => {
          const Icon = st.icon;
          const isActive = activeStep === st.step;

          return (
            <div
              key={st.step}
              onClick={() => setActiveStep(st.step)}
              className={`p-6 sm:p-7 rounded-3xl border transition-all cursor-pointer ${
                isActive
                  ? "bg-white border-teal/50 shadow-elevated"
                  : "bg-white/80 border-border hover:border-teal/30"
              }`}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive ? "bg-teal text-white shadow-sm" : "bg-teal-light text-teal"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-teal font-extrabold">
                        Stage 0{st.step} · {st.label}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-ink mt-0.5">
                      {st.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed max-w-2xl">
                      {st.summary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end md:self-center">
                  <span className="text-xs font-mono text-teal-dark font-semibold hidden sm:inline">
                    {st.outcome}
                  </span>
                </div>
              </div>

              {isActive && (
                <div className="mt-4 pt-4 border-t border-border/60 text-xs sm:text-sm text-ink/80 leading-relaxed space-y-3 animate-in fade-in duration-200">
                  <p>{st.details}</p>
                  <div className="p-3 rounded-xl bg-ivory border border-border flex items-center gap-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                    <span><strong>Milestone Deliverable:</strong> {st.outcome}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Alternative Entry Point Callout */}
      <div className="p-6 rounded-3xl bg-teal-light/40 border border-teal/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-teal-dark font-extrabold block">
            Alternative Pathway
          </span>
          <h4 className="font-display font-bold text-base text-ink">
            Already know what course or career you want to pursue?
          </h4>
          <p className="text-xs text-muted mt-1 max-w-xl">
            You can bypass initial exploratory testing and begin directly with Stage 4: University Admissions & Shortlist Strategy.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-1.5 bg-ink hover:bg-teal text-white text-xs font-bold px-4 py-2.5 rounded-full transition-colors"
          >
            <span>Discuss Admissions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
