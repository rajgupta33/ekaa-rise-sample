"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Compass } from "lucide-react";
import { siteConfig } from "@/config/site";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleItalic?: string;
  titleSuffix?: string;
  lead: string;
  imageSrc?: string;
  imageAlt?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  showPricePill?: boolean;
  curriculaBadges?: boolean;
  variant?: "split" | "centered" | "compact";
}

export function PageHero({
  eyebrow,
  title,
  titleItalic,
  titleSuffix,
  lead,
  imageSrc,
  imageAlt = "EKAA Rise education guidance",
  primaryCta = { label: "Book Psychometric Test — AED 100", href: "/book-psychometric-test" },
  secondaryCta = { label: "Explore Study Abroad", href: "/study-abroad-consultants-dubai" },
  showPricePill = false,
  curriculaBadges = false,
  variant = "split",
}: PageHeroProps) {
  if (variant === "compact") {
    return (
      <section className="bg-ivory border-b border-border py-12 md:py-16">
        <div className="shell max-w-4xl text-center space-y-4">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-teal">
              <span className="w-6 h-px bg-champagne" />
              <span>{eyebrow}</span>
            </div>
          )}
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight leading-tight">
            {title}{" "}
            {titleItalic && (
              <span className="font-serif italic font-semibold text-teal">
                {titleItalic}
              </span>
            )}{" "}
            {titleSuffix}
          </h1>
          <p className="text-sm sm:text-base text-muted max-w-2xl mx-auto leading-relaxed">
            {lead}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ivory-warm to-ivory border-b border-border py-12 md:py-20">
      {/* Background radial gradient accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-light/40 rounded-full filter blur-3xl -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Copy Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            {eyebrow && (
              <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-teal">
                <span className="w-8 h-px bg-champagne" />
                <span>{eyebrow}</span>
              </div>
            )}

            {/* H1 Heading */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-ink tracking-tight leading-[1.12]">
              {title}{" "}
              {titleItalic && (
                <span className="font-serif italic font-medium text-teal block sm:inline">
                  {titleItalic}
                </span>
              )}{" "}
              {titleSuffix}
            </h1>

            {/* Lead subcopy */}
            <p className="text-sm sm:text-base md:text-lg text-muted max-w-xl leading-relaxed">
              {lead}
            </p>

            {/* Price badge if requested */}
            {showPricePill && (
              <div className="inline-flex items-center gap-2 bg-teal-light/70 border border-teal/20 px-3.5 py-1.5 rounded-full text-xs text-ink">
                <Sparkles className="w-3.5 h-3.5 text-teal" />
                <span>
                  Psychometric Assessment Confirmed at{" "}
                  <strong className="text-teal font-extrabold font-mono">
                    AED 100
                  </strong>
                </span>
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center gap-2 bg-ink hover:bg-teal text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all group"
                >
                  <span>{primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center gap-2 bg-white hover:bg-ivory text-ink border border-border font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full transition-colors"
                >
                  <span>{secondaryCta.label}</span>
                </Link>
              )}
            </div>

            {/* Curriculum context badges */}
            {curriculaBadges && (
              <div className="pt-4 border-t border-border/80 flex items-center gap-3 text-xs text-muted flex-wrap">
                <span className="font-bold text-ink">Dubai Pathways:</span>
                <span className="px-2 py-0.5 bg-white border border-border rounded-md font-mono text-[11px]">
                  IB Diploma
                </span>
                <span className="px-2 py-0.5 bg-white border border-border rounded-md font-mono text-[11px]">
                  British A Levels
                </span>
                <span className="px-2 py-0.5 bg-white border border-border rounded-md font-mono text-[11px]">
                  American AP
                </span>
                <span className="px-2 py-0.5 bg-white border border-border rounded-md font-mono text-[11px]">
                  CBSE
                </span>
              </div>
            )}
          </div>

          {/* Visual Column */}
          {imageSrc && (
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-elevated bg-white">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating verified badge */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-border rounded-2xl p-3 sm:p-4 shadow-elevated flex items-center gap-3 max-w-[240px]">
                <div className="w-9 h-9 rounded-xl bg-teal-light text-teal flex items-center justify-center flex-shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-muted font-bold block">
                    Dubai Focus
                  </span>
                  <strong className="text-xs text-ink block font-display font-extrabold leading-snug">
                    Strengths First, Universities Second
                  </strong>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
