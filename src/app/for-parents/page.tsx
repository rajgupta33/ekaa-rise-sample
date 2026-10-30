import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  Users, 
  Sparkles, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  HeartHandshake, 
  HelpCircle,
  FileCheck2,
  Lock
} from "lucide-react";
import { PageHero } from "@/components/hero/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Career & University Guidance for Parents in Dubai | EKAA Rise",
  description: "A thoughtful parent guide to psychometric testing, subject selection and planning universities abroad for Dubai families.",
  canonicalPath: "/for-parents",
  keywords: [
    "career guidance for parents Dubai",
    "parent education advisory Dubai",
    "high school guidance parents UAE",
  ],
});

export default function ForParentsPage() {
  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs items={[{ label: "For Parents & Guardians", href: "/for-parents" }]} />
      </div>

      {/* Hero */}
      <PageHero
        eyebrow="SUPPORTING YOUR CHILD'S FUTURE"
        title="Career and University Guidance for Parents in Dubai —"
        titleItalic="Clarity Without Pressure"
        lead="Help your child make informed academic choices without deciding for them. Objective testing and structured guidance turn anxiety into constructive family collaboration."
        imageSrc="/images/ekaa/hero-parents.webp"
        imageAlt="Parent and teenager discussing education plans at home in Dubai"
        primaryCta={{
          label: "Explore the AED 100 Test",
          href: "/book-psychometric-test",
        }}
        secondaryCta={{
          label: "Request Family Consultation",
          href: "/book-consultation",
        }}
        showPricePill={true}
      />

      {/* 2. Common Parent Concerns */}
      <section className="shell space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
            Addressing Your Concerns
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
            Common Dilemmas Facing Dubai Parents
          </h2>
          <p className="text-xs sm:text-sm text-muted">
            Navigating high-stakes educational decisions requires balance, patience, and verified facts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Academic Indecision",
              desc: "Your child excels across several subjects but cannot settle on a clear university major or future vocation.",
              solution: "Our AED 100 psychometric test clarifies underlying cognitive patterns to identify viable degree clusters.",
            },
            {
              title: "Peer & Trend Pressure",
              desc: "Friends are picking courses simply because they are popular, rather than matching individual student stamina.",
              solution: "We provide an objective, neutral reality check against actual coursework workloads and entry requirements.",
            },
            {
              title: "Prerequisite Risks",
              desc: "Uncertainty whether dropping a science or picking Math AI instead of AA will close university doors.",
              solution: "We map international university criteria directly to Dubai school curriculum options (IB, A Levels, AP, CBSE).",
            },
            {
              title: "Global Investment & Fit",
              desc: "Balancing international tuition and living costs with campus safety, career outcomes, and student happiness.",
              solution: "We compare realistic total budgets across the UK, USA, Canada, Australia, Germany, and Ireland.",
            },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-border shadow-sm flex flex-col justify-between space-y-3">
              <div>
                <span className="text-teal font-mono font-bold text-xs">0{i + 1}</span>
                <h3 className="font-display font-bold text-base text-ink mt-1">{item.title}</h3>
                <p className="text-xs text-muted mt-2 leading-relaxed">{item.desc}</p>
              </div>
              <p className="text-xs text-teal-dark font-medium pt-3 border-t border-border/60">
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Privacy, Consent & Minor Data Protection */}
      <section className="shell">
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-border shadow-sm space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-light text-teal flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-teal font-extrabold block">
                Safety & Compliance
              </span>
              <h3 className="font-display font-bold text-xl text-ink">
                Student Data Protection & Guardian Consent
              </h3>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
            <p>
              At EKAA Rise, we treat student assessment data as strictly confidential. In compliance with applicable UAE personal data protection laws, all assessment registrations for students under 18 years old require explicit parental or guardian consent.
            </p>
            <p>
              Student responses are used solely to generate educational guidance reflections and are never monetized, indexed by search engines, or disclosed to third-party commercial advertisers.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Family Discussion Checklist */}
      <section className="shell">
        <div className="p-6 sm:p-10 rounded-3xl bg-ivory border border-border space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-champagne-light/40 text-champagne flex items-center justify-center">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-teal font-extrabold block">
                Practical Toolkit
              </span>
              <h3 className="font-display font-bold text-xl text-ink">
                Questions to Discuss Around the Family Table
              </h3>
            </div>
          </div>

          <div className="space-y-2.5">
            {[
              "1. What types of problems does the student solve when working independently without adult supervision?",
              "2. How does the student manage sustained exam pressure and coursework deadlines across the school year?",
              "3. Is the family open to exploring collegiate degrees in continental Europe (e.g. Germany, Ireland) alongside the UK and US?",
              "4. Have we set a realistic international tuition and living expense budget before falling in love with a campus?",
              "5. Are we listening to the student's authentic curiosity, or projecting unfulfilled family expectations?",
            ].map((q, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-border text-xs sm:text-sm text-ink/85 flex items-start gap-3">
                <Check className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                <span>{q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTAs */}
      <section className="shell text-center max-w-2xl mx-auto space-y-4">
        <h3 className="font-display font-bold text-2xl text-ink">
          Empower Your Child's Journey
        </h3>
        <p className="text-xs sm:text-sm text-muted">
          Begin with our confirmed AED 100 psychometric test or request a family consultation with an EKAA Rise advisor.
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
            <span>Request Consultation</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
