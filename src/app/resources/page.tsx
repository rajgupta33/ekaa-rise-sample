import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, Sparkles, ArrowRight, Clock, Search } from "lucide-react";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { articlesData } from "@/config/articles";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Career & Study Abroad Guides for Dubai Students | EKAA Rise",
  description: "Read practical guides on psychometric testing, Dubai school subject choices and international university applications.",
  canonicalPath: "/resources",
  keywords: [
    "career guidance resources Dubai",
    "study abroad guides Dubai",
    "high school education articles UAE",
  ],
});

export default function ResourcesHubPage() {
  const articlesList = Object.values(articlesData);

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs items={[{ label: "Resources & Insights", href: "/resources" }]} />
      </div>

      {/* Header */}
      <section className="shell text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-teal">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Editorial Library</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight">
          Practical Guides for Students and Parents in Dubai
        </h1>
        <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
          Deep, research-led analyses on psychometric assessments, Dubai high school subject selection, and global university admissions strategy.
        </p>
      </section>

      {/* Featured Editorial Grid */}
      <section className="shell">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articlesList.map((art) => (
            <ArticleCard key={art.slug} article={art} />
          ))}
        </div>
      </section>

      {/* Assessment banner */}
      <section className="shell">
        <div className="p-8 sm:p-12 rounded-3xl bg-teal-light/40 border border-teal/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <span className="text-xs font-mono uppercase tracking-wider text-teal font-extrabold block">
              Direct Application
            </span>
            <h3 className="font-display font-extrabold text-2xl text-ink">
              Experience the AED 100 Psychometric Test
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              Connect the insights from our guides directly with your student's cognitive aptitude and vocational interest profile.
            </p>
          </div>
          <Link
            href="/book-psychometric-test"
            className="inline-flex items-center gap-2 bg-ink hover:bg-teal text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-colors flex-shrink-0"
          >
            <span>Book Assessment — AED 100</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
