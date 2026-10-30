import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  AlertCircle, 
  ShieldCheck, 
  BookOpen, 
  Compass, 
  UserCheck, 
  Clock,
  HelpCircle,
  FileText
} from "lucide-react";
import { PageHero } from "@/components/hero/PageHero";
import { PriceCard } from "@/components/cards/PriceCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MockReportInteractive } from "@/components/report/MockReportInteractive";
import { PsychometricOrbit } from "@/components/report/PsychometricOrbit";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Psychometric Test in Dubai for Students — AED 100 | EKAA Rise",
  description: "Explore your interests and strengths with EKAA Rise's AED 100 psychometric test in Dubai. Understand the process, limitations and next steps.",
  canonicalPath: "/psychometric-test-dubai",
  keywords: [
    "psychometric test in Dubai",
    "psychometric test for students in Dubai",
    "career aptitude test Dubai",
    "student career assessment Dubai",
    "career interest assessment UAE",
    "AED 100 psychometric test",
  ],
});

export default function PsychometricTestPage() {
  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs items={[{ label: "Psychometric Test in Dubai", href: "/psychometric-test-dubai" }]} />
      </div>

      {/* Hero */}
      <PageHero
        eyebrow="STANDARDISED ASSESSMENT IN DUBAI"
        title="Psychometric Test in Dubai for Students —"
        titleItalic="AED 100"
        lead="A clearer, objective starting point for your next big educational decision. Explore vocational interests, cognitive aptitudes, and working styles to guide subject selection and university admissions."
        imageSrc="/images/ekaa/hero-psychometric.webp"
        imageAlt="Student reviewing psychometric assessment feedback on laptop in Dubai"
        primaryCta={{
          label: "Book Psychometric Test — AED 100",
          href: "/book-psychometric-test",
        }}
        secondaryCta={{
          label: "View Illustrative Sample Report",
          href: "/psychometric-test-dubai/sample-report",
        }}
        showPricePill={true}
        curriculaBadges={true}
      />

      {/* 2. What is a Psychometric Test for Students? */}
      <section className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-border p-6 sm:p-10 shadow-sm">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
              Educational Context
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
              What Is an Educational Psychometric Test?
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
              <p>
                In an educational advisory setting, a psychometric assessment is a standardized, diagnostic instrument designed to measure a student's cognitive capabilities, vocational interests, and behavioural learning preferences. Rather than testing memorized syllabus content like classroom exams, it evaluates underlying reasoning velocity — such as numerical logic, spatial perception, abstract pattern deduction, and verbal comprehension.
              </p>
              <p>
                Administered under appropriate norms, these structured data points provide students and families in Dubai with an objective vocabulary. Instead of guessing whether a student should pursue Engineering, Economics, Architecture or Law, the assessment illuminates where natural curiosity and cognitive velocity intersect with university course prerequisites.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 bg-teal-light/40 border border-teal/20 rounded-2xl p-6 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-extrabold block">
              The AED 100 Difference
            </span>
            <h3 className="font-display font-bold text-lg text-ink">
              Accessible Self-Discovery
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              We believe every family in Dubai deserves access to transparent aptitude discovery without exorbitant agency fees.
            </p>
            <div className="pt-2">
              <Link
                href="/book-psychometric-test"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:underline"
              >
                <span>Reserve Assessment (AED 100)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who Is It For? */}
      <section className="shell space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
            Target Audience
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
            Who Can Benefit From the Assessment?
          </h2>
          <p className="text-xs sm:text-sm text-muted">
            Tailored reflection points across critical Dubai schooling milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              stage: "Grades 8–10 Students",
              role: "Subject & Stream Crossroads",
              desc: "Identify whether upcoming curriculum choices (IB DP subjects, A Levels, or CBSE streams) align with natural cognitive strengths and future degree options.",
            },
            {
              stage: "Grades 11–12 Students",
              role: "Degree & Career Shortlisting",
              desc: "Translate academic progress into realistic undergraduate degrees, university course requirements, and balanced international application lists.",
            },
            {
              stage: "Undergraduate Students",
              role: "Postgraduate & Career Pivot",
              desc: "Evaluate whether to pursue specialized Master's degrees, technical graduate programmes, or dynamic career transitions.",
            },
            {
              stage: "Parents & Guardians",
              role: "Informed Family Support",
              desc: "Gain independent, objective insights to support your child's aspirations constructively without relying solely on peer trends.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-border shadow-sm flex flex-col justify-between space-y-3"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-bold block">
                  {item.role}
                </span>
                <h3 className="font-display font-bold text-base text-ink mt-0.5">
                  {item.stage}
                </h3>
                <p className="text-xs text-muted mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="pt-2 border-t border-border/60">
                <span className="text-[11px] font-mono text-teal-dark font-semibold">
                  Includes AED 100 Test Review
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Inside the Experience: Orbit & Sample Report */}
      <section id="orbit" className="shell space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
            Inside the Experience
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
            What Does the Assessment Explore?
          </h2>
          <p className="text-xs sm:text-sm text-muted">
            The assessment covers four interconnected discovery dimensions, illustrated below.
          </p>
        </div>

        <PsychometricOrbit />

        <div className="pt-8">
          <MockReportInteractive />
        </div>
      </section>

      {/* 5. Process Step-by-Step */}
      <section className="shell">
        <div className="bg-ivory rounded-3xl border border-border p-6 sm:p-10 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
              Step-by-Step
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
              The Assessment Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                title: "Register & Select",
                desc: "Choose the AED 100 assessment package and confirm the student's curriculum and current academic year.",
              },
              {
                step: "02",
                title: "Guardian Consent",
                desc: "Complete age-appropriate consent protocols ensuring transparent, privacy-protected assessment for minors.",
              },
              {
                step: "03",
                title: "Complete Assessment",
                desc: "Engage with standardized cognitive aptitude and interest inventory modules in a focused, low-stress environment.",
              },
              {
                step: "04",
                title: "Interpret & Plan",
                desc: "Review structured findings to guide Grade 11 subject choices and international university admissions shortlists.",
              },
            ].map((st) => (
              <div key={st.step} className="p-5 rounded-2xl bg-white border border-border space-y-2">
                <span className="font-mono font-extrabold text-xl text-teal block">
                  {st.step}
                </span>
                <h3 className="font-display font-bold text-sm text-ink">{st.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Comparison: Psychometric Test vs Career Counselling */}
      <section className="shell">
        <div className="bg-white rounded-3xl border border-border p-6 sm:p-10 space-y-6 shadow-sm">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
              Clarity on Roles
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
              Psychometric Testing vs Career Counselling
            </h2>
            <p className="text-xs sm:text-sm text-muted mt-1 max-w-2xl">
              Understanding how testing and advisory dialogue complement each other without being conflated.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-border bg-ivory">
                  <th className="p-3 sm:p-4 font-bold text-ink font-display">Dimension</th>
                  <th className="p-3 sm:p-4 font-bold text-teal font-display">Psychometric Assessment (AED 100)</th>
                  <th className="p-3 sm:p-4 font-bold text-ink font-display">Career & Subject Counselling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-ink">Primary Nature</td>
                  <td className="p-3 sm:p-4 text-muted">Standardised, objective measurement instrument</td>
                  <td className="p-3 sm:p-4 text-muted">Personalised, conversational advisory dialogue</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-ink">Output Provided</td>
                  <td className="p-3 sm:p-4 text-muted">Diagnostic percentiles, interest codes & working style traits</td>
                  <td className="p-3 sm:p-4 text-muted">Subject roadmaps, university shortlists & application plans</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-ink">Decision Making</td>
                  <td className="p-3 sm:p-4 text-muted">Identifies potential clusters; does not dictate careers</td>
                  <td className="p-3 sm:p-4 text-muted">Considers grades, family budget, visas and institutional prerequisites</td>
                </tr>
                <tr>
                  <td className="p-3 sm:p-4 font-semibold text-ink">Ideal Frequency</td>
                  <td className="p-3 sm:p-4 text-muted">Taken at pivotal transitions (e.g. Grade 10 or 12)</td>
                  <td className="p-3 sm:p-4 text-muted">Ongoing mentoring across application milestones</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Limitations & Ethical Guardrails */}
      <section className="shell">
        <div className="p-6 sm:p-8 rounded-3xl bg-champagne-light/25 border border-champagne/40 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-ink">
            <AlertCircle className="w-4 h-4 text-champagne" />
            <span>Ethical Boundaries & Transparency</span>
          </div>
          <h3 className="font-display font-bold text-lg text-ink">
            What the Assessment Does Not Claim
          </h3>
          <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
            The EKAA Rise psychometric test is strictly an educational reflective guide. It is not a clinical psychological evaluation, IQ benchmark, or guaranteed prediction of university admissions or lifelong vocational success. Assessment validity depends upon appropriate norms and honest student participation.
          </p>
          <div className="pt-2">
            <Link
              href="/assessment-disclaimer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:underline"
            >
              <span>Read Full Assessment Information & Limitations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Price Card Highlight */}
      <section className="shell max-w-3xl mx-auto">
        <PriceCard />
      </section>

      {/* 9. FAQs */}
      <section className="shell space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
            Assessment FAQs
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">
            Frequently Asked Questions About the Assessment
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion initialCategory="psychometric" limit={6} />
        </div>
      </section>
    </div>
  );
}
