"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { Article } from "@/config/articles";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/resources/${article.slug}`}
      className="group bg-white rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-elevated transition-all flex flex-col justify-between"
    >
      <div className="relative aspect-[16/10] w-full bg-teal-light/40 overflow-hidden">
        <Image
          src={article.heroImage}
          alt={article.altText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-teal">
          {article.category}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-3 text-[11px] text-muted mb-2 font-mono">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
            <span>•</span>
            <span>{article.publishDate}</span>
          </div>

          <h3 className="font-display font-bold text-base sm:text-lg text-ink group-hover:text-teal transition-colors leading-snug">
            {article.title}
          </h3>

          <p className="text-xs text-muted mt-2 line-clamp-2 leading-relaxed">
            {article.summary}
          </p>
        </div>

        <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-bold text-teal group-hover:text-teal-dark">
          <span>Read Full Guide</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
