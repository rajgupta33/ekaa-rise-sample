import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  Compass, 
  ArrowRight, 
  Check, 
  Calendar, 
  GraduationCap, 
  BookOpen, 
  AlertCircle,
  HelpCircle,
  FileCheck2,
  CheckCircle2
} from "lucide-react";
import { destinations, Destination } from "@/config/destinations";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { constructMetadata } from "@/lib/seo";

interface DestinationPageProps {
  params: {
    country: string;
  };
}

export function generateStaticParams() {
  return Object.keys(destinations).map((country) => ({
    country,
  }));
}

export function generateMetadata({ params }: DestinationPageProps): Metadata {
  const dest = destinations[params.country];
  if (!dest) return {};

  return constructMetadata({
    title: dest.metaTitle,
    description: dest.metaDescription,
    canonicalPath: `/study-abroad/${dest.slug}`,
    keywords: [
      `study in ${dest.name} from Dubai`,
      `${dest.name} university admissions Dubai`,
      `study abroad ${dest.name} consultant`,
    ],
    ogImage: dest.heroImage,
  });
}

export default function DestinationDetailPage({ params }: DestinationPageProps) {
  const dest: Destination | undefined = destinations[params.country];

  if (!dest) {
    notFound();
  }

  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs
          items={[
            { label: "Study Abroad", href: "/study-abroad-consultants-dubai" },
            { label: dest.name, href: `/study-abroad/${dest.slug}` },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-teal">
              <span className="w-8 h-px bg-champagne" />
              <span>Destination · {dest.name}</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-ink tracking-tight leading-tight">
              {dest.h1}
            </h1>

            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-xl">
              {dest.tagline} {dest.overview}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-2 bg-ink hover:bg-teal text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-sm transition-all"
              >
                <span>Discuss {dest.name} Admissions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pathway-explorer"
                className="inline-flex items-center gap-2 bg-white hover:bg-ivory text-ink border border-border font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full transition-colors"
              >
                <span>Try Pathway Explorer</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[16/11] rounded-3xl overflow-hidden border border-border shadow-elevated">
            <Image
              src={dest.heroImage}
              alt={dest.altText}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 right-5 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest text-teal-soft font-bold block">
                Higher Education
              </span>
              <span className="font-display font-bold text-lg">{dest.name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Undergraduate vs Master's Split */}
      <section className="shell">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-3xl bg-white border border-border shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-light text-teal flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-extrabold block">
                  Degree Level
                </span>
                <h3 className="font-display font-bold text-xl text-ink">
                  Undergraduate Pathways
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {dest.undergraduateFocus}
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-border shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-champagne-light/40 text-champagne flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-champagne font-extrabold block">
                  Degree Level
                </span>
                <h3 className="font-display font-bold text-xl text-ink">
                  Master's & Postgraduate
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {dest.mastersFocus}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Curriculum Conversion Notes */}
      <section className="shell">
        <div className="bg-ivory rounded-3xl border border-border p-6 sm:p-10 space-y-6">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
              Curriculum Conversions
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
              How {dest.name} Evaluates Dubai Curricula
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              Key admission expectations across the four predominant schooling systems in Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dest.curriculumNotes.map((cn, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-border space-y-1.5">
                <span className="text-xs font-mono font-bold text-teal block uppercase tracking-wider">
                  {cn.curriculum}
                </span>
                <p className="text-xs text-muted leading-relaxed">{cn.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Application Timeline Milestones */}
      <section className="shell">
        <div className="bg-white rounded-3xl border border-border p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-light text-teal flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-teal font-extrabold block">
                Typical Admissions Cycle
              </span>
              <h2 className="font-display font-extrabold text-2xl text-ink">
                Application Timeline for {dest.name}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dest.applicationTimeline.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-ivory border border-border space-y-2">
                <span className="text-xs font-mono font-bold text-teal block">
                  Milestone 0{idx + 1}
                </span>
                <h3 className="font-display font-bold text-sm text-ink">{item.phase}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-2 p-3.5 rounded-xl bg-ivory border border-border text-[11px] text-muted">
            <AlertCircle className="w-4 h-4 text-muted flex-shrink-0 mt-0.5" />
            <span>
              <strong>Admissions Note:</strong> Deadlines vary by faculty and programme. Official published university regulations and immigration visa guidelines must always be confirmed prior to submission.
            </span>
          </div>
        </div>
      </section>

      {/* 5. Destination FAQs */}
      {dest.faqs && dest.faqs.length > 0 && (
        <section className="shell space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
              Destination FAQs
            </span>
            <h2 className="font-display font-extrabold text-2xl text-ink">
              Frequently Asked Questions: {dest.name}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {dest.faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-border space-y-2 shadow-sm">
                <h3 className="font-display font-bold text-sm sm:text-base text-ink">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Consultation Form */}
      <section className="shell max-w-2xl mx-auto">
        <ConsultationForm />
      </section>
    </div>
  );
}
