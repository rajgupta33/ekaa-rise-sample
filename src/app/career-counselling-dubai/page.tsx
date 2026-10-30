import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  MessageSquare, 
  HelpCircle, 
  Compass, 
  BookOpen, 
  Users,
  ShieldCheck 
} from "lucide-react";
import { PageHero } from "@/components/hero/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Career Counselling in Dubai for Students | EKAA Rise",
  description: "Personalised career guidance for IB, British, American and CBSE students in Dubai. Explore interests, courses and informed next steps.",
  canonicalPath: "/career-counselling-dubai",
  keywords: [
    "career counselling Dubai students",
    "career guidance Dubai schools",
    "student career counselling UAE",
    "career advisor Dubai high school",
  ],
});

export default function CareerCounsellingPage() {
  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs items={[{ label: "Career Counselling in Dubai", href: "/career-counselling-dubai" }]} />
      </div>

      {/* Hero */}
      <PageHero
        eyebrow="STUDENT CAREER GUIDANCE IN DUBAI"
        title="Career Counselling for Students in Dubai —"
        titleItalic="Beyond a Single Score"
        lead="Make sense of your emerging interests, academic choices, and future possibilities with personalized guidance that looks deeply at the person, not just an algorithm."
        imageSrc="/images/ekaa/career-counselling.webp"
        imageAlt="Student and counsellor in a warm discussion in Dubai"
        primaryCta={{
          label: "Request Guidance Session",
          href: "/book-consultation",
        }}
        secondaryCta={{
          label: "Start with AED 100 Assessment",
          href: "/book-psychometric-test",
        }}
        curriculaBadges={true}
      />

      {/* 2. Common Student Dilemmas (Question-Led Cards) */}
      <section className="shell space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
            Real Student Questions
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
            Sound Familiar? You Are Not Alone.
          </h2>
          <p className="text-xs sm:text-sm text-muted">
            High school students in Dubai navigate intense academic expectations. Here is where we help bring clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              q: "I enjoy many different subjects — where do I even begin?",
              a: "Multi-potentiality is a strength, not a flaw. We explore interdisciplinary degrees like Computing & Business, Cognitive Science, or Design Engineering that combine your varied interests.",
            },
            {
              q: "What if I choose a field now and change my mind later?",
              a: "We structure subject choices and university lists (particularly in the US, Canada, and Scotland) that preserve curriculum flexibility and permit internal major transfers.",
            },
            {
              q: "How do I balance genuine passion with practical job markets?",
              a: "We look at transferable skills, emerging industries in the UAE and globally, and real employment data rather than transient social media hype.",
            },
            {
              q: "What if my parents and I see completely different futures?",
              a: "We act as an objective, neutral facilitator. Objective psychometric data helps ground discussions in verified aptitudes, building mutual family confidence.",
            },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-border shadow-sm flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-bold block mb-1">
                  Question 0{i + 1}
                </span>
                <h3 className="font-display font-bold text-sm text-ink leading-snug">
                  "{item.q}"
                </h3>
                <p className="text-xs text-muted mt-2 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The 4-Stage Dialogue */}
      <section className="shell">
        <div className="bg-white rounded-3xl border border-border p-6 sm:p-10 shadow-sm space-y-8">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
              Our Methodology
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
              From Self-Awareness to Actionable Pathways
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              How a typical guidance dialogue unfolds over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Diagnostic Discovery",
                desc: "Reviewing student hobbies, school performance, extracurricular commitments, and findings from our AED 100 psychometric assessment.",
              },
              {
                step: "02",
                title: "Curriculum Alignment",
                desc: "Mapping Grade 11/12 subjects (IB HL/SL, A Levels, APs, CBSE) to satisfy prospective university prerequisite matrices.",
              },
              {
                step: "03",
                title: "Degree Exploration",
                desc: "Examining real university course catalogues across the UK, USA, Canada, and Europe to discover modern interdisciplinary programmes.",
              },
              {
                step: "04",
                title: "Family Next Steps",
                desc: "Formulating a clear timeline for profile deepening, reading lists, entrance examinations, and university application deadlines.",
              },
            ].map((st) => (
              <div key={st.step} className="p-5 rounded-2xl bg-ivory border border-border space-y-2">
                <span className="font-mono font-bold text-xl text-teal">{st.step}</span>
                <h3 className="font-display font-bold text-sm text-ink">{st.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Consultation Request Form */}
      <section className="shell max-w-2xl mx-auto">
        <ConsultationForm />
      </section>

      {/* 5. FAQs */}
      <section className="shell space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
            Guidance FAQs
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
            Frequently Asked Questions on Career Guidance
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion initialCategory="counselling" limit={5} />
        </div>
      </section>
    </div>
  );
}
