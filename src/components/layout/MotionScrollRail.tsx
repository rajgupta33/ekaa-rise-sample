"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronUp, 
  Sparkles, 
  Compass, 
  BookOpen, 
  HelpCircle, 
  ArrowUpRight, 
  Layers, 
  Target 
} from "lucide-react";

interface SectionLandmark {
  id: string;
  label: string;
  shortLabel: string;
}

export function MotionScrollRail() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState<boolean>(false);

  const landmarks: SectionLandmark[] = [
    { id: "hero", label: "01 · Overview", shortLabel: "Home" },
    { id: "approach", label: "02 · The Approach", shortLabel: "Approach" },
    { id: "orbit", label: "03 · Discovery Orbit", shortLabel: "Orbit" },
    { id: "sample-report", label: "04 · Sample Report", shortLabel: "Report" },
    { id: "destinations", label: "05 · Destinations", shortLabel: "Abroad" },
    { id: "why-ekaa", label: "06 · Why EKAA", shortLabel: "Trust" },
    { id: "faq", label: "07 · Clear FAQs", shortLabel: "FAQs" },
  ];

  // Track scroll percentage and current section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setIsScrolledPastHero(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver to detect active section
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    landmarks.forEach((landmark) => {
      const el = document.getElementById(landmark.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ---------------- 1. TOP 3D KINETIC LASER PROGRESS BEAM ---------------- */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[3.5px] bg-black/10 backdrop-blur-sm pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full relative transition-all duration-150 ease-out"
          style={{
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, #0C5871 0%, #227F95 40%, #3DAEC3 75%, #C3A375 100%)",
            boxShadow: "0 0 12px rgba(61, 174, 195, 0.65), 0 0 24px rgba(34, 127, 149, 0.35)",
          }}
        >
          {/* Luminous lead spark particle at the tip */}
          {scrollProgress > 1 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white beam-spark flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-teal" />
            </div>
          )}
        </div>
      </div>

      {/* ---------------- 2. DESKTOP/TABLET 3D KINETIC FLOATING SCROLL RAIL ---------------- */}
      <aside
        className={`hidden md:flex fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center transition-all duration-500 ease-out select-none ${
          isScrolledPastHero ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
        aria-label="Page scroll progress and landmark navigation"
      >
        {/* 3D Glassmorphic Capsule */}
        <div className="relative py-4 px-2.5 rounded-full backdrop-blur-xl bg-ink-deep/85 border border-white/15 shadow-[0_20px_50px_rgba(16,42,59,0.35)] flex flex-col items-center gap-3.5 group hover:border-teal/50 hover:bg-ink-deep/95 transition-all">
          
          {/* Top: 3D Holographic Percentage Dial */}
          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-teal hover:text-white text-teal-soft flex items-center justify-center transition-all group/dial relative"
          >
            <span className="text-[10px] font-mono font-bold tracking-tighter leading-none">
              {Math.round(scrollProgress)}%
            </span>
          </button>

          {/* The Kinetic Vertical Motion Rail */}
          <div className="relative w-1.5 h-44 sm:h-52 bg-white/15 rounded-full overflow-hidden flex flex-col justify-start">
            {/* Liquid 3D Progress Fill */}
            <div
              className="w-full rounded-full transition-all duration-150 ease-out"
              style={{
                height: `${scrollProgress}%`,
                background: "linear-gradient(180deg, #3DAEC3 0%, #227F95 60%, #C3A375 100%)",
                boxShadow: "0 0 10px rgba(61, 174, 195, 0.8)",
              }}
            />
          </div>

          {/* Landmark Section Waypoints */}
          <nav className="flex flex-col items-center gap-2 py-1" aria-label="Section checkpoints">
            {landmarks.map((lm, idx) => {
              const isActive = activeSection === lm.id;
              const isHovered = hoveredNode === lm.id;

              return (
                <div key={lm.id} className="relative flex items-center">
                  {/* Waypoint Dot */}
                  <button
                    onClick={() => scrollToSection(lm.id)}
                    onMouseEnter={() => setHoveredNode(lm.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    aria-label={`Jump to ${lm.label}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 relative focus:outline-none ${
                      isActive
                        ? "bg-teal-soft scale-125 shadow-[0_0_10px_#3DAEC3]"
                        : "bg-white/30 hover:bg-white/80 hover:scale-110"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute -inset-1 rounded-full border border-teal-soft/80 animate-ping" />
                    )}
                  </button>

                  {/* 3D Glass Tooltip On Hover */}
                  {isHovered && (
                    <div
                      className="absolute right-7 py-1 px-3 rounded-xl backdrop-blur-md bg-ink-deep/95 border border-white/20 text-white shadow-2xl whitespace-nowrap animate-in fade-in slide-in-from-right-2 duration-150 z-50 pointer-events-none"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                        <span className="text-[11px] font-display font-bold tracking-tight">
                          {lm.label}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Bottom Quick-Action: Scroll to Top Chevron */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/20 text-ivory/70 hover:text-white flex items-center justify-center transition-colors"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Micro Floating Badge Under Rail */}
        <div className="mt-2 text-[9px] font-mono uppercase tracking-widest text-ink/40 font-bold bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded-full border border-border/50 shadow-sm">
          Nav Rail
        </div>
      </aside>

      {/* ---------------- 3. MOBILE 3D PROGRESS DIAL (< 768px) ---------------- */}
      <div
        className={`md:hidden fixed bottom-16 right-3 z-30 transition-all duration-300 ${
          isScrolledPastHero ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-11 h-11 rounded-full bg-ink-deep/90 backdrop-blur-md border border-white/20 shadow-elevated flex items-center justify-center text-white relative active:scale-95 transition-transform"
        >
          {/* Circular SVG Progress Ring */}
          <svg className="w-11 h-11 -rotate-90 absolute inset-0">
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2.5"
            />
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="#3DAEC3"
              strokeWidth="2.5"
              strokeDasharray={113}
              strokeDashoffset={113 - (113 * scrollProgress) / 100}
              strokeLinecap="round"
              className="transition-all duration-150 ease-out"
            />
          </svg>
          <ChevronUp className="w-4 h-4 text-teal-soft relative z-10" />
        </button>
      </div>
    </>
  );
}
