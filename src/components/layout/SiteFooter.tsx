"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ShieldCheck, MapPin, Mail, Clock, ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-ink-deep text-ivory/80 pt-16 pb-24 lg:pb-12 border-t border-teal/15 font-sans">
      <div className="shell">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/95 rounded-2xl p-2 inline-block shadow-sm">
              <Logo variant="standalone" />
            </div>
            <p className="text-sm text-ivory/70 max-w-sm leading-relaxed">
              Psychometric-led student career guidance and international university admissions advisory based in Dubai, UAE. Connecting self-discovery to global academic futures.
            </p>
            
            {/* Offer highlight */}
            <div className="p-3.5 bg-white/5 border border-white/10 rounded-xl max-w-sm space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-teal-soft font-bold">
                  Flagship Product
                </span>
                <span className="text-xs bg-champagne/20 text-champagne px-2 py-0.5 rounded font-mono font-bold">
                  AED 100
                </span>
              </div>
              <p className="text-xs text-ivory/90 font-medium">
                EKAA Rise Student Psychometric Assessment
              </p>
            </div>

            {/* Verification & Location */}
            <div className="space-y-2 text-xs text-ivory/60 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-teal-soft flex-shrink-0" />
                <span>{siteConfig.contact.locationServed}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-teal-soft flex-shrink-0" />
                <span>{siteConfig.contact.officialHours}</span>
              </div>
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-champagne">
              Services & Guidance
            </h3>
            <ul className="space-y-2 text-xs">
              {navigationConfig.footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-teal-soft transition-colors inline-flex items-center gap-1 text-ivory/80"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Study Abroad */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-champagne">
              Study Abroad
            </h3>
            <ul className="space-y-2 text-xs">
              {navigationConfig.footerNav.studyAbroad.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-teal-soft transition-colors inline-flex items-center gap-1 text-ivory/80"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources & Legal */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-champagne">
              Resources & Policies
            </h3>
            <ul className="space-y-2 text-xs">
              {navigationConfig.footerNav.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-teal-soft transition-colors inline-flex items-center gap-1 text-ivory/80"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10 font-medium text-ivory/50">
                Policies (Draft):
              </li>
              {navigationConfig.footerNav.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-teal-soft transition-colors text-ivory/60 hover:text-ivory"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ethical Disclaimer & Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-ivory/50">
          <div className="max-w-2xl text-[11px] leading-relaxed">
            <p>
              <strong>Ethical Notice:</strong> Psychometric testing is a structured reflective tool, not a clinical diagnostic assessment or guarantee of university admission or career success. EKAA Rise does not invent partner agreements, test claims, or visa guarantees. Final operational scope, assessment modality and taxes are confirmed upon direct booking.
            </p>
          </div>
          <div className="flex-shrink-0 text-right text-[11px]">
            <p>© {new Date().getFullYear()} EKAA Rise. All rights reserved.</p>
            <p className="text-ivory/40">Dubai, United Arab Emirates</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
