import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { 
  Compass, 
  ArrowRight, 
  Check, 
  GraduationCap, 
  BookOpen, 
  Globe, 
  ArrowUpRight,
  ShieldCheck,
  Award
} from "lucide-react";
import { PageHero } from "@/components/hero/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { destinations } from "@/config/destinations";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Study Abroad Admissions Guidance in Dubai | EKAA Rise",
  description: "Plan international university applications from Dubai with a focus on course fit, country choice, eligibility and realistic next steps.",
  canonicalPath: "/study-abroad-consultants-dubai",
  keywords: [
    "study abroad consultants in Dubai",
    "overseas education counselling Dubai",
    "university admissions guidance Dubai",
    "study abroad advisory UAE",
  ],
});

export default function StudyAbroadHubPage() {
  const destinationList = Object.values(destinations);

  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs items={[{ label: "Study Abroad Admissions", href: "/study-abroad-consultants-dubai" }]} />
      </div>

      {/* Hero */}
      <PageHero
        eyebrow="GLOBAL UNIVERSITY PLANNING FROM DUBAI"
        title="Study Abroad Admissions Guidance from Dubai —"
        titleItalic="Fit Over Rankings"
        lead="A meaningful university shortlist begins with a deep understanding of the student. We guide families across course selection, prerequisites, strategic shortlists and international applications."
        imageSrc="/images/ekaa/hero-study-abroad.webp"
        imageAlt="Student exploring international university options in a modern library"
        primaryCta={{
          label: "Discuss Your Study Abroad Plans",
          href: "/book-consultation",
        }}
        secondaryCta={{
          label: "Try Pathway Explorer",
          href: "/pathway-explorer",
        }}
        curriculaBadges={true}
      />

      {/* 2. Degree Pathway Cards: UG & PG */}
      <section className="shell space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
            Admissions Verticals
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
            Tailored Admissions by Academic Level
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-border shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-light text-teal flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-ink">
                Undergraduate Admissions (Bachelor's Degrees)
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                For high school students in Dubai completing IB, A Levels, AP or CBSE. Centralized admissions via UCAS (UK), Common App (US), OUAC (Canada) and direct portals.
              </p>
              <div className="space-y-2 text-xs text-ink/80 pt-2">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal" />
                  <span>Subject prerequisite evaluation & predicted grade calibration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal" />
                  <span>Holistic profile building & personal statement mentorship</span>
                </div>
              </div>
            </div>

            <Link
              href="/study-abroad/undergraduate-admissions"
              className="inline-flex items-center gap-2 text-xs font-bold text-teal hover:text-teal-dark pt-4 border-t border-border"
            >
              <span>Explore Undergraduate Admissions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-border shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-champagne-light/40 text-champagne flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-ink">
                Master's & Postgraduate Admissions
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                For university graduates and young professionals in the UAE seeking targeted academic depth, career pivots, or prestigious Master of Science (MSc) and MBA programmes.
              </p>
              <div className="space-y-2 text-xs text-ink/80 pt-2">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal" />
                  <span>Statements of purpose, CV editing & academic reference alignment</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-teal" />
                  <span>1-year UK/Ireland vs 2-year US/German Master's comparisons</span>
                </div>
              </div>
            </div>

            <Link
              href="/study-abroad/masters-admissions"
              className="inline-flex items-center gap-2 text-xs font-bold text-teal hover:text-teal-dark pt-4 border-t border-border"
            >
              <span>Explore Master's Admissions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. The 6 Destination Portals */}
      <section className="shell space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
            Premier Study Destinations
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
            Explore Countries by Admissions Fit
          </h2>
          <p className="text-xs sm:text-sm text-muted">
            Detailed guides reflecting Dubai curricula, entry expectations, and student lifestyles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinationList.map((dest) => (
            <DestinationCard key={dest.slug} destination={dest} />
          ))}
        </div>
      </section>

      {/* 4. What to Compare Beyond Rankings */}
      <section className="shell">
        <div className="bg-white rounded-3xl border border-border p-6 sm:p-10 shadow-sm space-y-6">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
              Strategic Evaluation
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
              What to Compare Besides Rankings
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              World league tables often obscure what actually drives undergraduate engagement and graduate success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Course Structure & Breadth",
                desc: "3-year focused degrees (UK) vs 4-year flexible liberal arts (USA) vs integrated Co-op (Canada).",
              },
              {
                title: "Total Cost of Attendance",
                desc: "Factoring annual international tuition, accommodation, health insurance, and city living expenses.",
              },
              {
                title: "Prerequisite Compatibility",
                desc: "Confirming that your IB HL subjects, A Level choices, or CBSE stream satisfy published course criteria.",
              },
              {
                title: "Industry & Internship Networks",
                desc: "Proximity to commercial hubs, tech incubators, hospital rotations, or research institutes.",
              },
              {
                title: "Campus Culture & Environment",
                desc: "Urban collegiate campuses integrated into bustling cities vs self-contained university college towns.",
              },
              {
                title: "Post-Study Regulations",
                desc: "Official government post-study graduate visas and international student employment frameworks.",
              },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-2xl bg-ivory border border-border space-y-1.5">
                <span className="text-teal font-mono font-bold text-xs">0{i + 1}</span>
                <h3 className="font-display font-bold text-sm text-ink">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Consultation Request Form */}
      <section className="shell max-w-2xl mx-auto">
        <ConsultationForm />
      </section>

      {/* 6. FAQs */}
      <section className="shell space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
            Admissions FAQs
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
            Frequently Asked Questions on Study Abroad
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion initialCategory="admissions" limit={5} />
        </div>
      </section>
    </div>
  );
}
