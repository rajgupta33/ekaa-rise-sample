import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  Compass, 
  BookOpen, 
  GraduationCap, 
  Users, 
  ArrowUpRight,
  ShieldCheck,
  Award,
  Globe
} from "lucide-react";
import { HomeHero } from "@/components/hero/HomeHero";
import { PriceCard } from "@/components/cards/PriceCard";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { MockReportInteractive } from "@/components/report/MockReportInteractive";
import { PsychometricOrbit } from "@/components/report/PsychometricOrbit";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { destinations } from "@/config/destinations";
import { articlesData } from "@/config/articles";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const destinationList = Object.values(destinations);
  const featuredArticles = Object.values(articlesData).slice(0, 3);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. EDITORIAL HERO AND GUIDANCE PATHWAYS */}
      <HomeHero />

      {/* 3. THREE-PART VALUE PROPOSITION */}
      <section id="approach" className="shell space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
            The EKAA Philosophy
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
            Guidance That Starts With <span className="font-serif italic text-teal">Understanding</span>
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Instead of pushing a generic list of universities, we start with the learner: examining cognitive velocity, subject prerequisites, and personal motivation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-7 rounded-3xl bg-white border border-border shadow-sm hover:shadow-elevated transition-all flex flex-col justify-between space-y-5 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-light text-teal flex items-center justify-center group-hover:bg-teal group-hover:text-white transition-colors">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-ink">
                1. Understand Strengths
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Objective evaluation of vocational interests, spatial reasoning, and numerical velocity via our validated <strong>AED 100 psychometric assessment</strong>.
              </p>
            </div>
            <Link
              href="/psychometric-test-dubai"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal group-hover:text-teal-dark pt-3 border-t border-border"
            >
              <span>Explore Assessment</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="p-7 rounded-3xl bg-white border border-border shadow-sm hover:shadow-elevated transition-all flex flex-col justify-between space-y-5 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-champagne-light/40 text-champagne flex items-center justify-center group-hover:bg-champagne group-hover:text-ink transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-ink">
                2. Choose Subjects with Clarity
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Strategic subject selection for IB Diploma, A Levels, AP and CBSE that aligns with international degree entry prerequisites.
              </p>
            </div>
            <Link
              href="/subject-selection-counselling-dubai"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal group-hover:text-teal-dark pt-3 border-t border-border"
            >
              <span>Subject Guidance</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="p-7 rounded-3xl bg-white border border-border shadow-sm hover:shadow-elevated transition-all flex flex-col justify-between space-y-5 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-ink text-white flex items-center justify-center group-hover:bg-teal transition-colors">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-ink">
                3. Plan Beyond Borders
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Structured university admissions guidance across the UK, USA, Canada, Australia, Germany, and Ireland based on genuine student fit.
              </p>
            </div>
            <Link
              href="/study-abroad-consultants-dubai"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal group-hover:text-teal-dark pt-3 border-t border-border"
            >
              <span>Study Abroad Hub</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FEATURED AED 100 OFFER & ORBIT VISUAL */}
      <section id="orbit" className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <PriceCard />
          </div>
          <div className="lg:col-span-7">
            <PsychometricOrbit />
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE SAMPLE REPORT PREVIEW */}
      <section id="sample-report" className="shell space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
            Inside the Experience
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
            An Insight-Led Starting Point
          </h2>
          <p className="text-xs sm:text-sm text-muted">
            Explore our interactive mock report to see how structured diagnostic insights translate into constructive family dialogue.
          </p>
        </div>

        <MockReportInteractive />
      </section>

      {/* 6. AUDIENCE CHOOSER */}
      <section id="audiences" className="shell space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
            Tailored For Your Academic Stage
          </span>
          <h2 className="font-display font-extrabold text-3xl text-ink tracking-tight">
            Where Are You in Your Education Journey?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            {
              title: "Grades 8–10",
              desc: "Subject choices, IGCSE transitions, and stream selection.",
              link: "/subject-selection-counselling-dubai",
            },
            {
              title: "Grades 11–12",
              desc: "A Level / IB prep, career mapping, and admissions testing.",
              link: "/psychometric-test-dubai",
            },
            {
              title: "Undergraduate",
              desc: "Bachelor's degrees, UCAS, Common App, and shortlists.",
              link: "/study-abroad/undergraduate-admissions",
            },
            {
              title: "Postgraduate",
              desc: "Master's degrees, career acceleration, and prerequisites.",
              link: "/study-abroad/masters-admissions",
            },
            {
              title: "Parents",
              desc: "Curriculum insights, family checklists, and privacy.",
              link: "/for-parents",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="p-5 rounded-3xl bg-white border border-border shadow-sm hover:border-teal hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                <h3 className="font-display font-bold text-base text-ink group-hover:text-teal transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1 text-xs font-bold text-teal">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. STUDY ABROAD DESTINATION RAIL */}
      <section id="destinations" className="shell space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
              Global Education Pathways
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
              Study Abroad Destinations
            </h2>
            <p className="text-xs sm:text-sm text-muted mt-1">
              Curated admissions intelligence tailored specifically for Dubai applicants.
            </p>
          </div>
          <Link
            href="/study-abroad-consultants-dubai"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:text-teal-dark hover:underline"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinationList.map((dest) => (
            <DestinationCard key={dest.slug} destination={dest} />
          ))}
        </div>
      </section>

      {/* 8. WHY EKAA EDITORIAL SPLIT */}
      <section id="why-ekaa" className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl border border-border p-6 sm:p-12 shadow-elevated">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
              Ethical Advisory
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
              Why Dubai Families Choose <span className="font-serif italic text-teal">EKAA Rise</span>
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              We reject the high-pressure sales culture common in overseas education. We do not invent partner quotas, push unaccredited colleges, or promise guaranteed visas.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { title: "Understand the Person First", desc: "Our AED 100 psychometric assessment anchors conversations in real aptitudes before recommending degree courses." },
                { title: "Deep Dubai Curriculum Fluency", desc: "We understand how IB Higher Levels, A Levels, AP courses and CBSE board marks convert to international admission criteria." },
                { title: "Guardian Involvement with Student Voice", desc: "Constructive family consultations where students are empowered to articulate their genuine intellectual curiosity." },
                { title: "No Invented Claims or False Guarantees", desc: "Transparent advice based strictly on validated institutional prerequisites and published criteria." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-light text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-ink">{item.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-ink hover:bg-teal text-white text-xs font-bold px-5 py-3 rounded-full transition-colors"
              >
                <span>Read About Our Advisory Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
            <Image
              src="/images/ekaa/career-counselling.webp"
              alt="Education guidance consultation in Dubai"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 9. FOR PARENTS CALLOUT */}
      <section className="shell">
        <div className="p-8 sm:p-12 rounded-3xl bg-ivory-warm border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
              For Parents & Guardians
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
              Better Questions Today. More Considered Choices Tomorrow.
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Help your child navigate high school subjects and study abroad admissions without unnecessary anxiety. Download our family discussion checklist.
            </p>
          </div>
          <Link
            href="/for-parents"
            className="inline-flex items-center gap-2 bg-white hover:bg-ivory text-ink border border-border font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-colors flex-shrink-0"
          >
            <span>Guidance For Parents</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 10. EDITORIAL GUIDES PREVIEW */}
      <section id="resources" className="shell space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
              Editorial Insights
            </span>
            <h2 className="font-display font-extrabold text-3xl text-ink tracking-tight">
              Guidance & Research Articles
            </h2>
          </div>
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:underline"
          >
            <span>View All Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((art) => (
            <ArticleCard key={art.slug} article={art} />
          ))}
        </div>
      </section>

      {/* 11. FAQ PREVIEW */}
      <section id="faq" className="shell space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
            Clear Answers
          </span>
          <h2 className="font-display font-extrabold text-3xl text-ink tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-muted">
            Everything you need to know about our AED 100 psychometric test and admissions advisory.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FAQAccordion limit={5} showCategoryFilters={false} />
          <div className="text-center pt-6">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:underline"
            >
              <span>Explore all frequently asked questions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. CLOSING BOTTOM HERO CTA */}
      <section className="bg-ink-deep text-white py-16 sm:py-20 border-t border-teal/20">
        <div className="shell text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-soft font-extrabold block">
            Your Education Pathway
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Start With Your Strengths. <span className="font-serif italic text-champagne">Go Further.</span>
          </h2>
          <p className="text-sm sm:text-base text-ivory/80 leading-relaxed max-w-xl mx-auto">
            Book our confirmed <strong>AED 100 psychometric assessment</strong> today or connect with an advisor to discuss international university admissions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/book-psychometric-test"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal-soft text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all shadow-md"
            >
              <span>Book Psychometric Test — AED 100</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-colors"
            >
              <span>Talk About Admissions</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
