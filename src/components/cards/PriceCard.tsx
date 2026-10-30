"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

interface PriceCardProps {
  className?: string;
}

export function PriceCard({ className = "" }: PriceCardProps) {
  return (
    <div className={`bg-ink-deep text-white rounded-3xl p-6 sm:p-8 border border-teal/20 shadow-elevated relative overflow-hidden ${className}`}>
      {/* Background glow accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal/15 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-teal-soft font-extrabold block">
              Transparent Pricing
            </span>
            <h3 className="font-display font-extrabold text-xl text-white">
              EKAA Rise Psychometric Test
            </h3>
          </div>
          <span className="bg-champagne/20 text-champagne text-xs font-mono font-bold px-2.5 py-1 rounded-full border border-champagne/30">
            Confirmed Offer
          </span>
        </div>

        {/* Big Price Display */}
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-mono uppercase text-teal-soft font-bold tracking-wider">
            AED
          </span>
          <span className="font-display font-extrabold text-5xl sm:text-6xl text-white tracking-tight">
            100
          </span>
          <span className="text-xs text-ivory/60 font-mono">
            / student assessment
          </span>
        </div>

        <p className="text-xs text-ivory/80 leading-relaxed">
          A structured, diagnostic starting point for students across IB, British, American and CBSE pathways in Dubai.
        </p>

        {/* Feature inclusions checklist */}
        <div className="space-y-2.5 text-xs text-ivory/90 pt-2">
          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-teal-soft flex-shrink-0 mt-0.5" />
            <span>Comprehensive evaluation of vocational interests and aptitudes</span>
          </div>
          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-teal-soft flex-shrink-0 mt-0.5" />
            <span>Insight-led data points to guide Grade 11 subject choices</span>
          </div>
          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-teal-soft flex-shrink-0 mt-0.5" />
            <span>Prepares constructive questions for university admissions planning</span>
          </div>
          <div className="flex items-start gap-2.5">
            <Check className="w-4 h-4 text-teal-soft flex-shrink-0 mt-0.5" />
            <span>Age-appropriate guardian involvement and consent protocols</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <Link
            href="/book-psychometric-test"
            className="w-full inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-soft text-white font-bold py-3.5 px-6 rounded-2xl text-sm transition-all shadow-md group"
          >
            <span>Book Psychometric Test — AED 100</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <p className="text-[10px] text-ivory/50 text-center leading-normal">
          Assessment format and reporting inclusions confirmed prior to payment. Safe demo mode active.
        </p>
      </div>
    </div>
  );
}
