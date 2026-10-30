import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  BookOpen, 
  ArrowRight, 
  Check, 
  FileText, 
  Compass, 
  Briefcase, 
  GraduationCap 
} from "lucide-react";
import { PageHero } from "@/components/hero/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Master's Admissions Guidance from Dubai | EKAA Rise",
  description: "Explore postgraduate programme fit, country choices, entry requirements and practical application planning from Dubai.",
  canonicalPath: "/study-abroad/masters-admissions",
  keywords: [
    "masters admissions counselling Dubai",
    "postgraduate study abroad Dubai",
    "MSc MBA applications Dubai",
    "master degree consultant UAE",
  ],
});

export default function MastersAdmissionsPage() {
  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs
          items={[
            { label: "Study Abroad", href: "/study-abroad-consultants-dubai" },
            { label: "Master's Admissions", href: "/study-abroad/masters-admissions" },
          ]}
        />
      </div>

      {/* Hero */}
      <PageHero
        eyebrow="POSTGRADUATE ADMISSIONS IN DUBAI"
        title="Master's & Postgraduate Admissions Guidance from Dubai —"
        titleItalic="Accelerate Your Trajectory"
        lead="Find an advanced degree that connects your undergraduate academic record and professional aspirations with world-class international universities."
        imageSrc="/images/ekaa/hero-study-abroad.webp"
        imageAlt="Postgraduate applicant reviewing university master's programmes in Dubai"
        primaryCta={{
          label: "Discuss Master's Plans",
          href: "/book-consultation",
        }}
        secondaryCta={{
          label: "Explore Destinations",
          href: "/study-abroad-consultants-dubai",
        }}
      />

      {/* 2. Key Pillars of Postgraduate Applications */}
      <section className="shell">
        <div className="bg-white rounded-3xl border border-border p-6 sm:p-10 shadow-sm space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
              Core Components
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
              What Top Master's Programmes Look For
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              Graduate admissions require a cohesive synthesis of academic rigour, research direction, and vocational intentionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-ivory border border-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-light text-teal flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-ink">
                Statement of Purpose (SOP)
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                A persuasive scholarly narrative outlining your research curiosity, specific faculty alignment, and long-term career impact.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ivory border border-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-champagne-light/40 text-champagne flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-ink">
                Academic & Professional CV
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Structured formatting showcasing internships, research publications, leadership, and technical software proficiencies.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ivory border border-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-ink text-white flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-ink">
                Prerequisites & Transcripts
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Confirming that your undergraduate credit hours (e.g. math/statistics for Data Science or Finance) satisfy faculty criteria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 1-Year vs 2-Year Comparison */}
      <section className="shell">
        <div className="p-6 sm:p-10 rounded-3xl bg-ivory border border-border space-y-6">
          <h2 className="font-display font-bold text-xl text-ink">
            Comparing Master's Models: 1-Year (UK / Europe) vs 2-Year (US / Germany)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-border space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-extrabold block">
                1-Year Intensive (UK & Ireland)
              </span>
              <h3 className="font-display font-bold text-base text-ink">Taught Master's (12 Months)</h3>
              <p className="text-xs text-muted leading-relaxed">
                Intense, fast-track coursework followed by a summer dissertation. Highly cost-effective with lower total living expenses and rapid re-entry into the UAE job market.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-border space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-champagne font-extrabold block">
                2-Year Research (USA, Germany, Canada)
              </span>
              <h3 className="font-display font-bold text-base text-ink">Comprehensive Master of Science</h3>
              <p className="text-xs text-muted leading-relaxed">
                Spans 4 academic semesters with structured summer internship or research assistantship opportunities. In Germany, most public university STEM Master's charge zero tuition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Consultation Request */}
      <section className="shell max-w-2xl mx-auto">
        <ConsultationForm />
      </section>
    </div>
  );
}
