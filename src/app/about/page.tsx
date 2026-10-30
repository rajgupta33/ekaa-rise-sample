import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  Compass, 
  ShieldCheck, 
  Heart, 
  Eye, 
  Target,
  Users
} from "lucide-react";
import { PageHero } from "@/components/hero/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About EKAA Rise | Student-Centred Education Guidance",
  description: "Learn the philosophy behind EKAA Rise and our assessment-led approach to subject decisions and global education planning in Dubai.",
  canonicalPath: "/about",
  keywords: [
    "about EKAA Rise Dubai",
    "education consultancy philosophy Dubai",
    "student guidance advisory Dubai",
  ],
});

export default function AboutPage() {
  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs items={[{ label: "About EKAA Rise", href: "/about" }]} />
      </div>

      {/* Hero */}
      <PageHero
        eyebrow="OUR PHILOSOPHY & STORY"
        title="About EKAA Rise: Guidance That Starts With"
        titleItalic="Understanding"
        lead="EKAA Rise brings together student discovery, academic decision-making, and international education planning under one considered approach. We believe good guidance starts by understanding the learner — not by pushing a predetermined course or university."
        imageSrc="/images/ekaa/career-counselling.webp"
        imageAlt="Advisory session representing EKAA Rise education values"
        primaryCta={{
          label: "Book Psychometric Test — AED 100",
          href: "/book-psychometric-test",
        }}
        secondaryCta={{
          label: "Contact Advisory Team",
          href: "/contact",
        }}
        showPricePill={true}
      />

      {/* 2. Four Core Values */}
      <section className="shell space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
            Guiding Principles
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
            The Principles That Define Our Practice
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Eye,
              title: "Clarity Before Choice",
              desc: "We prioritize deep diagnostic understanding of student strengths and cognitive styles before discussing university rankings.",
            },
            {
              icon: Compass,
              title: "Unbiased Pathways",
              desc: "We do not accept commissions from third-party unaccredited colleges. Our recommendations prioritize genuine student fit.",
            },
            {
              icon: ShieldCheck,
              title: "Rigorous Transparency",
              desc: "Clear public pricing (AED 100 test), honest prerequisite audits, and no false admission guarantees.",
            },
            {
              icon: Users,
              title: "Family Collaboration",
              desc: "Constructive spaces where students are empowered to express authentic curiosity while keeping parents informed.",
            },
          ].map((val, i) => {
            const Icon = val.icon;
            return (
              <div key={i} className="p-6 rounded-3xl bg-white border border-border shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-teal-light text-teal flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base text-ink">{val.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. The Assessment-to-Admissions Logic */}
      <section className="shell">
        <div className="bg-white rounded-3xl border border-border p-6 sm:p-10 shadow-sm space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
              Unique Proposition
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
              Why the Assessment-to-Admissions Logic Matters
            </h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Traditional agencies start with a list of destination flags and push whatever university offers the highest agent margin. EKAA Rise inverts this outdated model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-ivory border border-border space-y-2">
              <span className="font-mono font-bold text-sm text-teal">Phase 1</span>
              <h3 className="font-display font-bold text-base text-ink">Discover the Individual</h3>
              <p className="text-xs text-muted leading-relaxed">
                Using our AED 100 assessment, we establish a reliable baseline of vocational interests, spatial logic, and cognitive velocity.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ivory border border-border space-y-2">
              <span className="font-mono font-bold text-sm text-teal">Phase 2</span>
              <h3 className="font-display font-bold text-base text-ink">Calibrate School Curricula</h3>
              <p className="text-xs text-muted leading-relaxed">
                We ensure that Grade 11/12 subjects in IB, A Levels, AP or CBSE preserve essential degree prerequisites.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ivory border border-border space-y-2">
              <span className="font-mono font-bold text-sm text-teal">Phase 3</span>
              <h3 className="font-display font-bold text-base text-ink">Target Global Fit</h3>
              <p className="text-xs text-muted leading-relaxed">
                We craft an international university application roadmap optimized for admissions success, budget, and career outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Serving Dubai Families */}
      <section className="shell text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
          Dubai, United Arab Emirates
        </span>
        <h3 className="font-display font-bold text-2xl text-ink">
          Proudly Serving Families Across the Emirates
        </h3>
        <p className="text-xs sm:text-sm text-muted leading-relaxed">
          From Jumeirah to Downtown, Dubai Hills to Emirates Hills, our mission is to provide accessible, premium educational direction to Dubai's multicultural student community.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-ink hover:bg-teal text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-colors shadow-sm"
          >
            <span>Connect with EKAA Rise</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
