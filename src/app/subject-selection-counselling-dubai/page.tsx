import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Compass, 
  HelpCircle,
  FileCheck2
} from "lucide-react";
import { PageHero } from "@/components/hero/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CurriculumTabs } from "@/components/cards/CurriculumTabs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Subject Selection Counselling in Dubai | IB, A Levels, CBSE & AP",
  description: "Compare subject-choice considerations across IB, A Levels, CBSE and AP in Dubai, including future degree entry requirements.",
  canonicalPath: "/subject-selection-counselling-dubai",
  keywords: [
    "subject selection counselling Dubai",
    "IB subject choices Dubai",
    "A Level subject selection Dubai",
    "CBSE stream selection Dubai",
    "AP courses Dubai",
  ],
});

export default function SubjectSelectionPage() {
  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs items={[{ label: "Subject Selection Counselling", href: "/subject-selection-counselling-dubai" }]} />
      </div>

      {/* Hero */}
      <PageHero
        eyebrow="DUBAI CURRICULUM STRATEGY"
        title="Subject Selection Counselling in Dubai —"
        titleItalic="IB, A Levels, CBSE & AP"
        lead="A strong subject choice is not simply the most difficult option. It is one that keeps realistic academic pathways open while reflecting the student's authentic capabilities and target degree prerequisites."
        imageSrc="/images/ekaa/articles/subject-selection-guide.webp"
        imageAlt="Student and parent reviewing high school curriculum subject options in Dubai"
        primaryCta={{
          label: "Align with AED 100 Test",
          href: "/book-psychometric-test",
        }}
        secondaryCta={{
          label: "Request Subject Session",
          href: "/book-consultation",
        }}
        curriculaBadges={true}
      />

      {/* 2. Main Interactive Curriculum Explorer Component */}
      <section className="shell space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
            Curriculum Deep-Dive
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
            Select Your School Curriculum
          </h2>
          <p className="text-xs sm:text-sm text-muted">
            Explore prerequisite rules, common pitfalls, and degree alignments for your specific system.
          </p>
        </div>

        <CurriculumTabs />
      </section>

      {/* 3. Four Illustrative Student Scenarios */}
      <section className="shell space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
            Illustrative Cases
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
            How Subject Choices Impact University Doors
          </h2>
          <p className="text-xs sm:text-sm text-muted">
            Hypothetical decision scenarios common among Dubai families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-border shadow-sm space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-bold block">
              Scenario 01 · IB Diploma
            </span>
            <h3 className="font-display font-bold text-base text-ink">
              The Math Analysis (AA) vs Applications (AI) Dilemma
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              <strong>Context:</strong> A student aiming for Economics at top UK universities took Math AI HL thinking any HL Math would suffice.
            </p>
            <p className="text-xs text-ink/80 leading-relaxed bg-teal-light/30 p-3 rounded-xl border border-teal/20">
              <strong>Advisory Outcome:</strong> Premier UK universities (LSE, Cambridge, Warwick) explicitly demand Math Analysis & Approaches (AA) HL. We guided the student in Year 11 to switch early, preserving elite degree eligibility.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-border shadow-sm space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-bold block">
              Scenario 02 · British A Levels
            </span>
            <h3 className="font-display font-bold text-base text-ink">
              Overloading with 4 A Levels vs Maximizing 3 High Grades
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              <strong>Context:</strong> A student took 4 full A Levels (Math, Physics, Chemistry, Economics) and was risking a BBB profile due to exhaustion.
            </p>
            <p className="text-xs text-ink/80 leading-relaxed bg-teal-light/30 p-3 rounded-xl border border-teal/20">
              <strong>Advisory Outcome:</strong> UK offers are made on 3 A Levels. Dropping the 4th allowed the student to focus, achieving A*AA and securing admission to Imperial College London.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-border shadow-sm space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-bold block">
              Scenario 03 · CBSE Senior Secondary
            </span>
            <h3 className="font-display font-bold text-base text-ink">
              Commerce Stream Without Mathematics
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              <strong>Context:</strong> A student chose Commerce with Informatics Practices instead of Mathematics, aspiring to study Business Finance in Canada.
            </p>
            <p className="text-xs text-ink/80 leading-relaxed bg-teal-light/30 p-3 rounded-xl border border-teal/20">
              <strong>Advisory Outcome:</strong> Canadian Business faculties (Rotman, Sauder) require senior secondary Math. Identifying this in Grade 10 avoided a severe qualification barrier.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-border shadow-sm space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-bold block">
              Scenario 04 · American High School
            </span>
            <h3 className="font-display font-bold text-base text-ink">
              US High School Diploma Without Standardized AP Scores
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              <strong>Context:</strong> A student with an American Diploma applied directly to UK and European universities without AP examinations.
            </p>
            <p className="text-xs text-ink/80 leading-relaxed bg-teal-light/30 p-3 rounded-xl border border-teal/20">
              <strong>Advisory Outcome:</strong> European and UK universities generally require 3 to 5 College Board AP exams with scores of 4 or 5 to validate an American high school diploma.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Pre-Selection Checklist */}
      <section className="shell">
        <div className="p-6 sm:p-10 rounded-3xl bg-ivory border border-border space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-light text-teal flex items-center justify-center">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-teal font-extrabold block">
                Family Checklist
              </span>
              <h3 className="font-display font-bold text-xl text-ink">
                5 Questions to Answer Before Signing Subject Forms
              </h3>
            </div>
          </div>

          <div className="space-y-3">
            {[
              "1. Have you checked the undergraduate admissions pages for at least 3 international universities to verify prerequisite subjects?",
              "2. Does the subject combination keep at least two distinct degree pathways open in case interests evolve?",
              "3. Are you taking an exceptionally rigorous subject (e.g. 4 HLs) out of peer pressure, or does the student possess demonstrated aptitude?",
              "4. Have you considered the internal assessment, coursework, and examination calendar workload in Year 12 and 13?",
              "5. Have you validated the student's cognitive velocity and spatial/numerical aptitudes through diagnostic psychometrics?",
            ].map((q, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-border flex items-start gap-3 text-xs sm:text-sm text-ink/85">
                <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                <span>{q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="shell text-center max-w-2xl mx-auto space-y-4">
        <h3 className="font-display font-bold text-2xl text-ink">
          Need Guidance Navigating Subject Options?
        </h3>
        <p className="text-xs sm:text-sm text-muted">
          Our AED 100 psychometric assessment provides the diagnostic baseline your family needs before finalizing high-stakes curriculum choices.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/book-psychometric-test"
            className="inline-flex items-center gap-2 bg-ink hover:bg-teal text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-colors shadow-sm"
          >
            <span>Book Assessment — AED 100</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/book-consultation"
            className="inline-flex items-center gap-2 bg-white text-ink border border-border font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full hover:bg-ivory"
          >
            <span>Request Subject Consultation</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
