import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  ArrowLeft, 
  Share2, 
  CheckCircle2,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { articlesData, Article } from "@/config/articles";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { constructMetadata } from "@/lib/seo";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = articlesData[params.slug];
  if (!article) return {};

  return constructMetadata({
    title: article.metaTitle,
    description: article.metaDescription,
    canonicalPath: `/resources/${article.slug}`,
    keywords: [article.title, "Dubai education article", "EKAA Rise insights"],
    ogImage: article.heroImage,
  });
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article: Article | undefined = articlesData[params.slug];

  if (!article) {
    notFound();
  }

  const relatedArticles = article.relatedSlugs
    .map((s) => articlesData[s])
    .filter(Boolean);

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: `https://ekaarise.ae${article.heroImage}`,
    datePublished: "2026-10-15T09:00:00+04:00",
    dateModified: "2026-10-29T10:00:00+04:00",
    author: {
      "@type": "Organization",
      name: "EKAA Rise Editorial Team",
      url: "https://ekaarise.ae",
    },
    publisher: {
      "@type": "Organization",
      name: "EKAA Rise",
      logo: {
        "@type": "ImageObject",
        url: "https://ekaarise.ae/images/ekaa/ekaa-rise-official.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ekaarise.ae/resources/${article.slug}`,
    },
  };

  return (
    <article className="space-y-10 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs
          items={[
            { label: "Resources", href: "/resources" },
            { label: article.title, href: `/resources/${article.slug}` },
          ]}
        />
      </div>

      {/* Article Header */}
      <header className="shell max-w-4xl mx-auto space-y-4">
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="bg-teal text-white font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
            {article.category}
          </span>
          <span className="text-muted flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
          <span className="text-muted">•</span>
          <span className="text-muted">{article.publishDate}</span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight leading-tight">
          {article.h1}
        </h1>

        <p className="text-base sm:text-lg text-muted leading-relaxed font-sans border-l-2 border-teal pl-4 italic">
          {article.summary}
        </p>
      </header>

      {/* Hero Image */}
      <div className="shell max-w-4xl mx-auto">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-border shadow-elevated bg-ivory">
          <Image
            src={article.heroImage}
            alt={article.altText}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Body */}
      <div className="shell max-w-3xl mx-auto space-y-8 font-sans">
        {article.sections.map((sec, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="font-display font-extrabold text-xl sm:text-2xl text-ink tracking-tight">
              {sec.heading}
            </h2>

            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-sm sm:text-base text-ink/80 leading-relaxed">
                {p}
              </p>
            ))}

            {sec.bulletPoints && (
              <ul className="space-y-2.5 pt-2">
                {sec.bulletPoints.map((bp, bIdx) => (
                  <li key={bIdx} className="p-3.5 rounded-xl bg-ivory border border-border/80 text-xs sm:text-sm text-ink/85 flex items-start gap-3 leading-relaxed">
                    <span className="text-teal font-bold mt-0.5">•</span>
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            )}

            {sec.callout && (
              <div className="p-5 rounded-2xl bg-teal-light/40 border-l-4 border-teal text-xs sm:text-sm text-teal-dark leading-relaxed font-medium">
                {sec.callout}
              </div>
            )}
          </section>
        ))}

        {/* In-Article Promotion Card: AED 100 Test */}
        <div className="p-6 sm:p-8 rounded-3xl bg-ink text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-elevated my-10">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[10px] font-mono uppercase tracking-widest text-teal-soft font-bold block">
              Direct Application
            </span>
            <h3 className="font-display font-bold text-xl text-white">
              EKAA Rise Psychometric Assessment · AED 100
            </h3>
            <p className="text-xs text-ivory/70 max-w-md">
              Translate the principles in this article into objective data for your student.
            </p>
          </div>
          <Link
            href="/book-psychometric-test"
            className="inline-flex items-center gap-2 bg-teal hover:bg-teal-soft text-white font-bold text-xs px-5 py-3 rounded-full transition-colors flex-shrink-0"
          >
            <span>Book for AED 100</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Back Link */}
        <div className="pt-6 border-t border-border flex items-center justify-between">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-xs font-bold text-teal hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Editorial Guides</span>
          </Link>
          <span className="text-xs text-muted">
            Published by EKAA Rise Advisory
          </span>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="shell max-w-4xl mx-auto space-y-6 pt-10 border-t border-border">
          <h3 className="font-display font-bold text-xl text-ink">
            Related Guides for Dubai Students & Parents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <ArticleCard key={rel.slug} article={rel} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
