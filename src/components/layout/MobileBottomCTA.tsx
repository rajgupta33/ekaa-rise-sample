"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";

export function MobileBottomCTA() {
  const pathname = usePathname();
  const [homepageHeroVisible, setHomepageHeroVisible] = useState(pathname === "/");

  useEffect(() => {
    if (pathname !== "/") return;
    const hero = document.querySelector(".home-hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHomepageHeroVisible(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  // Hide on forms and checkout pages to avoid blocking inputs or submissions
  const hideOnPaths = [
    "/book-psychometric-test",
    "/checkout-demo",
    "/book-consultation",
    "/contact",
    "/thank-you",
  ];

  if (hideOnPaths.includes(pathname) || (pathname === "/" && homepageHeroVisible)) {
    return null;
  }

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-border p-3 shadow-elevated safe-bottom">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-mono tracking-wider text-muted font-bold flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-teal" /> Assessment Offer
          </span>
          <span className="text-xs font-bold text-ink">
            Psychometric Test · <strong className="text-teal font-extrabold">AED 100</strong>
          </span>
        </div>
        <Link
          href="/book-psychometric-test"
          className="book-test-cta relative inline-flex items-center gap-1.5 overflow-hidden bg-[#123841] hover:bg-[#176C70] text-white text-[11px] font-bold px-4 py-3 rounded-full shadow-md transition-all active:scale-95"
        >
          <span className="relative z-10">Book Psychometric Test</span>
          <ArrowRight className="relative z-10 w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
