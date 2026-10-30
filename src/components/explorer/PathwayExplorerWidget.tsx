"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Compass, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  Globe,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

export function PathwayExplorerWidget() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [stage, setStage] = useState<string>("");
  const [curriculum, setCurriculum] = useState<string>("");
  const [primaryGoal, setPrimaryGoal] = useState<string>("");
  const [destination, setDestination] = useState<string>("");

  const totalSteps = 4;

  const handleRestart = () => {
    setCurrentStep(1);
    setStage("");
    setCurriculum("");
    setPrimaryGoal("");
    setDestination("");
  };

  // Recommendations logic
  const getRecommendation = () => {
    if (primaryGoal === "subjects" || stage === "grades-8-10") {
      return {
        title: "Curriculum Subject Selection + Diagnostic Assessment",
        summary: `As a ${stage === "grades-8-10" ? "Grade 8–10 student" : "student selecting subjects"} in the ${curriculum.toUpperCase()} curriculum, high-stakes decisions like Math HL vs SL or A Level choices dictate university prerequisites.`,
        recommendedService: "EKAA Rise Psychometric Test (AED 100) + Subject Selection Guidance",
        primaryAction: {
          label: "Explore Subject Selection Guide",
          href: "/subject-selection-counselling-dubai",
        },
        secondaryAction: {
          label: "Book AED 100 Psychometric Test",
          href: "/book-psychometric-test",
        },
      };
    }

    if (primaryGoal === "abroad" || primaryGoal === "shortlist" || stage === "postgrad") {
      const destName = destination === "undecided" ? "global destinations" : destination.toUpperCase();
      return {
        title: `University Admissions Strategy (${destName})`,
        summary: `Your academic profile in ${curriculum.toUpperCase()} requires building a balanced university shortlist (Dream, Target, Safety) aligned with institutional prerequisites and entry intakes.`,
        recommendedService: "Study Abroad Admissions Counselling",
        primaryAction: {
          label: destination && destination !== "undecided" ? `Explore Study in ${destName}` : "Explore Study Abroad Hub",
          href: destination && destination !== "undecided" ? `/study-abroad/${destination}` : "/study-abroad-consultants-dubai",
        },
        secondaryAction: {
          label: "Request Guidance Session",
          href: "/book-consultation",
        },
      };
    }

    // Default recommendation
    return {
      title: "Self-Discovery & Career Aptitude Assessment",
      summary: "Start with structured objective data regarding your vocational interests and cognitive aptitudes before narrowing down university courses.",
      recommendedService: "EKAA Rise Psychometric Test (AED 100)",
      primaryAction: {
        label: "Book Psychometric Test — AED 100",
        href: "/book-psychometric-test",
      },
      secondaryAction: {
        label: "Review Illustrative Sample Report",
        href: "/psychometric-test-dubai/sample-report",
      },
    };
  };

  return (
    <div className="bg-white rounded-3xl border border-border shadow-elevated p-6 sm:p-10 max-w-3xl mx-auto">
      {/* Progress header */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal-light flex items-center justify-center text-teal">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-teal font-extrabold block">
              Orientation Intake
            </span>
            <h3 className="font-display font-bold text-base text-ink">
              Pathway Explorer (Step {Math.min(currentStep, totalSteps)} of {totalSteps})
            </h3>
          </div>
        </div>

        {currentStep <= totalSteps && (
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`w-7 h-1.5 rounded-full transition-colors ${
                  s <= currentStep ? "bg-teal" : "bg-border"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* STEP 1: Current Stage */}
      {currentStep === 1 && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div>
            <h4 className="font-display font-bold text-xl text-ink">
              Where are you currently in your education journey?
            </h4>
            <p className="text-sm text-muted mt-1">
              Select the applicant profile that best matches your family.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: "grades-8-10", label: "Grades 8–10 (Middle / Early High)", desc: "Choosing upcoming curriculum streams & subjects" },
              { id: "grades-11-12", label: "Grades 11–12 (Senior High School)", desc: "Finalizing career paths & university applications" },
              { id: "undergrad", label: "Undergraduate Student", desc: "Planning transfer or postgraduate admissions abroad" },
              { id: "postgrad", label: "Master's / Working Professional", desc: "Exploring career acceleration or specialized degrees" },
              { id: "parent", label: "Parent or Guardian", desc: "Navigating choices for my child in Dubai schools" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setStage(item.id);
                  setCurrentStep(2);
                }}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                  stage === item.id
                    ? "border-teal bg-teal-light/40 text-ink shadow-sm"
                    : "border-border bg-ivory/60 hover:bg-white hover:border-teal/50 text-ink/80"
                }`}
              >
                <span className="font-display font-bold text-sm block">{item.label}</span>
                <span className="text-xs text-muted mt-1">{item.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 2: Curriculum */}
      {currentStep === 2 && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div>
            <h4 className="font-display font-bold text-xl text-ink">
              Which curriculum does the student study in Dubai?
            </h4>
            <p className="text-sm text-muted mt-1">
              Curriculum structures define which university pathways and prerequisite subjects apply.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: "ib", label: "IB Diploma (IBDP)", desc: "6 subjects (HL & SL), TOK, Extended Essay & CAS" },
              { id: "british", label: "British (GCSE & A Levels)", desc: "3 to 4 specialized A Levels for depth" },
              { id: "american", label: "American High School / AP", desc: "4-year cumulative GPA + Advanced Placement courses" },
              { id: "cbse", label: "CBSE / Indian Boards", desc: "Science, Commerce, or Humanities stream" },
              { id: "other", label: "Other / University Level", desc: "French Baccalaureate, SABIS, or undergraduate degree" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurriculum(item.id);
                  setCurrentStep(3);
                }}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  curriculum === item.id
                    ? "border-teal bg-teal-light/40 text-ink shadow-sm"
                    : "border-border bg-ivory/60 hover:bg-white hover:border-teal/50 text-ink/80"
                }`}
              >
                <span className="font-display font-bold text-sm block">{item.label}</span>
                <span className="text-xs text-muted mt-1">{item.desc}</span>
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => setCurrentStep(1)}
              className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to stage
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Primary Goal */}
      {currentStep === 3 && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div>
            <h4 className="font-display font-bold text-xl text-ink">
              What is your primary decision or question right now?
            </h4>
            <p className="text-sm text-muted mt-1">
              Tell us what you would most like clarity on.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {[
              { id: "direction", label: "Finding Career Direction & Strengths", desc: "Uncertain what fields match my aptitudes; need structured testing" },
              { id: "subjects", label: "Choosing Grade 11 / High School Subjects", desc: "Ensuring HL/A Level choices keep university options open" },
              { id: "abroad", label: "Planning International University Admissions", desc: "Understanding applications, timelines, and country requirements" },
              { id: "shortlist", label: "Building a Course & University Shortlist", desc: "Comparing specific degrees, costs, and career prospects" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPrimaryGoal(item.id);
                  setCurrentStep(4);
                }}
                className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                  primaryGoal === item.id
                    ? "border-teal bg-teal-light/40 text-ink shadow-sm"
                    : "border-border bg-ivory/60 hover:bg-white hover:border-teal/50 text-ink/80"
                }`}
              >
                <div>
                  <span className="font-display font-bold text-sm block">{item.label}</span>
                  <span className="text-xs text-muted mt-0.5">{item.desc}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-muted flex-shrink-0" />
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => setCurrentStep(2)}
              className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to curriculum
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Destination Interest */}
      {currentStep === 4 && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div>
            <h4 className="font-display font-bold text-xl text-ink">
              Do you have a preferred country or destination in mind?
            </h4>
            <p className="text-sm text-muted mt-1">
              Select one to tailor your roadmap, or choose undecided.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { id: "uk", label: "United Kingdom", flag: "🇬🇧" },
              { id: "usa", label: "United States", flag: "🇺🇸" },
              { id: "canada", label: "Canada", flag: "🇨🇦" },
              { id: "australia", label: "Australia", flag: "🇦🇺" },
              { id: "germany", label: "Germany", flag: "🇩🇪" },
              { id: "ireland", label: "Ireland", flag: "🇮🇪" },
              { id: "undecided", label: "Not Sure Yet", flag: "🌍" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setDestination(item.id);
                  setCurrentStep(5); // Show results
                }}
                className={`p-4 rounded-2xl border text-center transition-all ${
                  destination === item.id
                    ? "border-teal bg-teal-light/40 text-ink shadow-sm"
                    : "border-border bg-ivory/60 hover:bg-white hover:border-teal/50 text-ink/80"
                }`}
              >
                <span className="text-2xl block mb-1">{item.flag}</span>
                <span className="font-display font-bold text-xs block">{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => setCurrentStep(3)}
              className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to primary goal
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: RECOMMENDATION RESULT */}
      {currentStep > totalSteps && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="p-6 rounded-3xl bg-teal-light/30 border border-teal/20 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-teal">
              <Sparkles className="w-4 h-4" />
              <span>Recommended Next Step For You</span>
            </div>

            <h4 className="font-display font-extrabold text-2xl text-ink">
              {getRecommendation().title}
            </h4>

            <p className="text-sm text-ink/80 leading-relaxed">
              {getRecommendation().summary}
            </p>

            <div className="pt-2 border-t border-teal/15 text-xs text-muted">
              Suggested Focus: <strong>{getRecommendation().recommendedService}</strong>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href={getRecommendation().primaryAction.href}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-ink hover:bg-teal text-white text-sm font-bold py-3.5 px-6 rounded-full transition-colors shadow-sm"
            >
              <span>{getRecommendation().primaryAction.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={getRecommendation().secondaryAction.href}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-ivory text-ink border border-border text-sm font-bold py-3.5 px-6 rounded-full transition-colors"
            >
              <span>{getRecommendation().secondaryAction.label}</span>
            </Link>
          </div>

          {/* Non-diagnostic notice */}
          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-ivory border border-border text-[11px] text-muted leading-relaxed">
            <AlertCircle className="w-4 h-4 text-muted flex-shrink-0 mt-0.5" />
            <span>
              <strong>Ethical Notice:</strong> This orientation tool provides informational navigation based on user inputs. It is not an unvalidated psychological assessment, clinical diagnostic test, or admission prediction.
            </span>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Restart Pathway Explorer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
