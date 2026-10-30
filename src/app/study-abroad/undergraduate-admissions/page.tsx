import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { 
  GraduationCap, 
  ArrowRight, 
  Check, 
  Compass, 
  FileCheck, 
  Calendar, 
  BookOpen,
  CheckCircle2
} from "lucide-react";
import { PageHero } from "@/components/hero/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Undergraduate University Admissions from Dubai | EKAA Rise",
  description: "Explore overseas bachelor's degree applications, subject prerequisites, university shortlists and timelines for students based in Dubai.",
  canonicalPath: "/study-abroad/undergraduate-admissions",
  keywords: [
    "undergraduate admissions consultants Dubai",
    "bachelor degree admissions abroad Dubai",
    "UCAS Common App consultants Dubai",
    "IB A level university admissions Dubai",
  ],
});

export default function UndergraduateAdmissionsPage() {
  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs
          items={[
            { label: "Study Abroad", href: "/study-abroad-consultants-dubai" },
            { label: "Undergraduate Admissions", href: "/study-abroad/undergraduate-admissions" },
          ]}
        />
      </div>

      {/* Hero */}
      <PageHero
        eyebrow="BACHELOR'S DEGREE ADMISSIONS"
        title="Undergraduate Admissions Guidance for Students in Dubai —"
        titleItalic="Strategic Roadmaps"
        lead="Turn your school curriculum achievements, subject combinations, and personal interests into a practical, balanced international university application plan."
        imageSrc="/images/ekaa/hero-study-abroad.webp"
        imageAlt="High school student organizing university application documents"
        primaryCta={{
          label: "Request Guidance Session",
          href: "/book-consultation",
        }}
        secondaryCta={{
          label: "Try Pathway Explorer",
          href: "/pathway-explorer",
        }}
        curriculaBadges={true}
      />

      {/* 2. UK vs US vs Canada vs Australia Matrix */}
      <section className="shell">
        <div className="bg-white rounded-3xl border border-border p-6 sm:p-10 shadow-sm space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
              Global Comparison
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
              Undergraduate Systems at a Glance
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              How the world's most sought-after higher education destinations evaluate Dubai applicants.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-border bg-ivory">
                  <th className="p-3 sm:p-4 font-bold text-ink font-display">Destination</th>
                  <th className="p-3 sm:p-4 font-bold text-ink font-display">Degree Duration</th>
                  <th className="p-3 sm:p-4 font-bold text-ink font-display">Admissions Focus</th>
                  <th className="p-3 sm:p-4 font-bold text-ink font-display">Application Portal</th>
                  <th className="p-3 sm:p-4 font-bold text-teal font-display">Key Prerequisite Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-xs">
                <tr>
                  <td className="p-3 sm:p-4 font-bold text-ink">United Kingdom</td>
                  <td className="p-3 sm:p-4 text-muted">3 years (4 in Scotland)</td>
                  <td className="p-3 sm:p-4 text-muted">Academic subject depth & personal statement</td>
                  <td className="p-3 sm:p-4 text-muted font-mono">UCAS (5 choices)</td>
                  <td className="p-3 sm:p-4 text-teal-dark font-medium">Strict HL/A Level subject prerequisites</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-bold text-ink">United States</td>
                  <td className="p-3 sm:p-4 text-muted">4 years</td>
                  <td className="p-3 sm:p-4 text-muted">Holistic review: 4-yr GPA, essays, leadership</td>
                  <td className="p-3 sm:p-4 text-muted font-mono">Common App / Coalition</td>
                  <td className="p-3 sm:p-4 text-teal-dark font-medium">Curricular rigour (Honours/APs/HLs)</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-bold text-ink">Canada</td>
                  <td className="p-3 sm:p-4 text-muted">4 years (Co-op)</td>
                  <td className="p-3 sm:p-4 text-muted">Academic cut-off averages & supplemental essays</td>
                  <td className="p-3 sm:p-4 text-muted font-mono">OUAC (Ontario) / Direct</td>
                  <td className="p-3 sm:p-4 text-teal-dark font-medium">Specific Math/Science minimum grades</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-bold text-ink">Australia</td>
                  <td className="p-3 sm:p-4 text-muted">3 years (Double degrees 4-5)</td>
                  <td className="p-3 sm:p-4 text-muted">Direct ATAR / IB / A Level score conversion</td>
                  <td className="p-3 sm:p-4 text-muted font-mono">Direct / VTAC / UAC</td>
                  <td className="p-3 sm:p-4 text-teal-dark font-medium">Predictable published score thresholds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. 5-Step Undergraduate Roadmap */}
      <section className="shell">
        <div className="bg-ivory rounded-3xl border border-border p-6 sm:p-10 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
              Chronological Preparation
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
              The 5-Step Undergraduate Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Diagnostic Profile", desc: "Aptitude testing (AED 100 test), curriculum audit and subject choice calibration in Grade 10." },
              { step: "02", title: "Country Research", desc: "Comparing university models, 3 vs 4 year degrees, living budgets and campus environments." },
              { step: "03", title: "Balanced Shortlist", desc: "Constructing a 10–12 university matrix categorized into Dream, Target, and Safety tiers." },
              { step: "04", title: "Application Craft", desc: "Drafting compelling personal statements, supplemental essays, and securing recommendation letters." },
              { step: "05", title: "Offers & Visas", desc: "Reviewing conditional vs unconditional offers, housing deposits, and student visa compliance." },
            ].map((item) => (
              <div key={item.step} className="p-5 rounded-2xl bg-white border border-border space-y-2 flex flex-col justify-between">
                <div>
                  <span className="font-mono font-bold text-lg text-teal block">{item.step}</span>
                  <h3 className="font-display font-bold text-sm text-ink mt-1">{item.title}</h3>
                  <p className="text-xs text-muted mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
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
