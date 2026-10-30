"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { Destination } from "@/config/destinations";

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      href={`/study-abroad/${destination.slug}`}
      className="group bg-white rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-elevated transition-all flex flex-col justify-between"
    >
      {/* Image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ivory">
        <Image
          src={destination.heroImage}
          alt={destination.altText}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        
        {/* Country badge */}
        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-teal-soft font-extrabold block">
              Destination · {destination.countryCode}
            </span>
            <h3 className="font-display font-extrabold text-xl text-white">
              {destination.name}
            </h3>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-ink transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Body content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs text-muted leading-relaxed line-clamp-2">
          {destination.overview}
        </p>

        <div className="space-y-1.5 pt-3 border-t border-border/60">
          <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-extrabold block">
            Admissions Highlights
          </span>
          {destination.keyHighlights.slice(0, 2).map((h, i) => (
            <div key={i} className="flex items-start gap-2 text-[11px] text-ink/80">
              <Check className="w-3.5 h-3.5 text-teal flex-shrink-0 mt-0.5" />
              <span className="line-clamp-1">{h}</span>
            </div>
          ))}
        </div>

        <div className="pt-2 flex items-center justify-between text-xs font-bold text-teal group-hover:text-teal-dark">
          <span>Explore {destination.name} Guide</span>
          <span className="text-xs font-mono">→</span>
        </div>
      </div>
    </Link>
  );
}
