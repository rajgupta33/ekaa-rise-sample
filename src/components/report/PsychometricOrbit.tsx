"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Compass, 
  UserCheck, 
  BookOpen, 
  ArrowUpRight, 
  Play, 
  Pause, 
  RotateCw, 
  CheckCircle2, 
  Zap, 
  Layers 
} from "lucide-react";

export function PsychometricOrbit() {
  const [activeRing, setActiveRing] = useState<number>(0);
  const [isAutoCycling, setIsAutoCycling] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const bands = [
    {
      id: 0,
      title: "Interests & Passions",
      subtitle: "Vocational Affinity & Curiosities",
      description: "Maps intrinsic occupational curiosities using the validated Holland RIASEC framework. Uncovers natural engagement with STEM investigation, creative design architecture, and enterprising leadership.",
      color: "#227F95",
      accentGlow: "rgba(34, 127, 149, 0.45)",
      ringRadius: 180,
      icon: Sparkles,
      tag: "Vocational Inventory",
      traits: ["Investigative Logic", "Enterprising Drive", "Spatial Design"],
      metric: "Primary Affinity: Investigative (88%)",
      metricLabel: "Measured via Holland RIASEC Framework",
      animClass: "orbit-anim-ring-1",
    },
    {
      id: 1,
      title: "Cognitive Aptitudes",
      subtitle: "Mental Velocity & Processing",
      description: "Structured diagnostic benchmarks examining raw cognitive velocity: spatial manipulation of 3D structures, numerical deductions under time constraints, and abstract pattern solving.",
      color: "#3DAEC3",
      accentGlow: "rgba(61, 174, 195, 0.55)",
      ringRadius: 140,
      icon: Compass,
      tag: "Aptitude Velocity",
      traits: ["3D Spatial Perception", "Numerical Speed", "Abstract Deduction"],
      metric: "Spatial Reasoning: 91st Percentile (Sample)",
      metricLabel: "Standardized Cognitive Battery",
      animClass: "orbit-anim-ring-2",
    },
    {
      id: 2,
      title: "Study & Work Context",
      subtitle: "Learning Stamina & Environment",
      description: "Evaluates behavioural learning preferences: stamina for independent research, collaborative team dynamics, risk threshold, and pacing required for demanding high school curricula.",
      color: "#C3A375",
      accentGlow: "rgba(195, 163, 117, 0.55)",
      ringRadius: 100,
      icon: UserCheck,
      tag: "Environmental Fit",
      traits: ["Autonomous Stamina", "Collaborative Grit", "Exam Resilience"],
      metric: "Independent Research Stamina: High",
      metricLabel: "Behavioral Work-Style Profile",
      animClass: "orbit-anim-ring-3",
    },
    {
      id: 3,
      title: "Actionable Pathways",
      subtitle: "Curriculum & Degree Mapping",
      description: "Translates diagnostic data directly into strategic high school decisions: selecting IB Higher Levels, A Levels, AP courses, or CBSE streams to satisfy global university prerequisites.",
      color: "#102A3B",
      accentGlow: "rgba(16, 42, 59, 0.5)",
      ringRadius: 60,
      icon: BookOpen,
      tag: "Curriculum Alignment",
      traits: ["IB HL Math AA Match", "Russell Group Prereqs", "US College Fit"],
      metric: "Degree Prerequisites: 100% Validated",
      metricLabel: "International Matrix Audit",
      animClass: "orbit-anim-ring-4",
    },
  ];

  // Auto-cycle through the 4 bands
  useEffect(() => {
    if (!isAutoCycling || isHovered) return;

    timerRef.current = setInterval(() => {
      setActiveRing((prev) => (prev + 1) % bands.length);
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoCycling, isHovered, bands.length]);

  // Interactive 3D mouse parallax tracker
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -9; // Max 9 deg tilt
    const tiltY = ((x - centerX) / centerX) * 9;

    setTilt({ x: tiltX, y: tiltY });
    setMousePos({
      x: Math.round((x / rect.width) * 100),
      y: Math.round((y / rect.height) * 100),
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const currentBand = bands[activeRing];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl p-6 sm:p-8 border border-border/80 shadow-elevated overflow-hidden transition-all duration-300 group"
      style={{
        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(230, 243, 245, 0.75) 0%, #FFFFFF 65%, #F8FAF9 100%)`,
      }}
    >
      {/* Dynamic Ambient Color Glow */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full filter blur-3xl opacity-25 transition-all duration-700 pointer-events-none"
        style={{ backgroundColor: currentBand.color }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full filter blur-3xl opacity-20 transition-all duration-700 pointer-events-none"
        style={{ backgroundColor: "#3DAEC3" }}
      />

      {/* Top Header Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border/60">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-[10px] uppercase font-mono tracking-widest text-teal font-extrabold block">
              Kinetic Discovery Visual
            </span>
          </div>
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink tracking-tight mt-0.5">
            The 4-Band Discovery Orbit
          </h3>
        </div>

        {/* Live Orbit Status & Auto-Tour Switch */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setIsAutoCycling(!isAutoCycling)}
            className={`inline-flex items-center gap-1.5 text-[11px] font-mono font-bold px-3 py-1.5 rounded-full border transition-all ${
              isAutoCycling
                ? "bg-teal-light/80 text-teal-dark border-teal/30 shadow-sm"
                : "bg-white text-muted border-border hover:text-ink"
            }`}
            title={isAutoCycling ? "Pause Automatic Orbit Tour" : "Resume Automatic Orbit Tour"}
          >
            {isAutoCycling ? (
              <>
                <Pause className="w-3 h-3 text-teal animate-pulse" />
                <span>Auto-Tour Active</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-teal" />
                <span>Manual Focus</span>
              </>
            )}
          </button>

          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono bg-white/80 text-muted px-2.5 py-1 rounded-full border border-border">
            <RotateCw className="w-3 h-3 text-teal-soft animate-spin" style={{ animationDuration: "12s" }} />
            <span>Interactive 3D Orbit</span>
          </span>
        </div>
      </div>

      {/* Main Grid: 3D Orbit on Left, Dynamic Dimension Telemetry on Right */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* ----------------- LEFT: 3D CELESTIAL ORBIT ----------------- */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center py-2 relative">
          <div
            className="w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 relative flex items-center justify-center select-none preserve-3d transition-transform duration-200 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            {/* Luminous Core Backdrop Halo */}
            <div
              className="absolute inset-4 rounded-full filter blur-2xl opacity-40 transition-all duration-700 pointer-events-none"
              style={{
                background: `radial-gradient(circle, ${currentBand.color} 0%, rgba(255,255,255,0) 70%)`,
              }}
            />

            {/* SVG Visual System */}
            <svg
              viewBox="0 0 440 440"
              className="w-full h-full overflow-visible"
              aria-label="Interactive 4-Band Discovery Orbit"
            >
              <defs>
                {/* Radial gradients for orbits */}
                <radialGradient id="orbitAtmosphere" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E6F3F5" stopOpacity="0.85" />
                  <stop offset="60%" stopColor="#F8FAF9" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="laserBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#227F95" stopOpacity="1" />
                  <stop offset="50%" stopColor="#3DAEC3" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#C3A375" stopOpacity="0.2" />
                </linearGradient>

                {/* Filter for celestial glow */}
                <filter id="celestialGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background ambient disk */}
              <circle cx="220" cy="220" r="215" fill="url(#orbitAtmosphere)" />

              {/* Static grid crosshairs (astronomical alignment) */}
              <line x1="220" y1="25" x2="220" y2="415" stroke="#DCE6E8" strokeWidth="1" strokeDasharray="3 6" opacity="0.45" />
              <line x1="25" y1="220" x2="415" y2="220" stroke="#DCE6E8" strokeWidth="1" strokeDasharray="3 6" opacity="0.45" />

              {/* ---------------- THE 4 ORBITAL RINGS ---------------- */}
              {bands.map((band, idx) => {
                const isSelected = activeRing === idx;
                const r = band.ringRadius;

                return (
                  <g
                    key={band.title}
                    onClick={() => {
                      setActiveRing(idx);
                      setIsAutoCycling(false);
                    }}
                    className="cursor-pointer group"
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${band.title}`}
                  >
                    {/* Ring Static Base Track */}
                    <circle
                      cx="220"
                      cy="220"
                      r={r}
                      fill="none"
                      stroke={isSelected ? band.color : "#DCE6E8"}
                      strokeWidth={isSelected ? "3" : "1.25"}
                      strokeDasharray={idx === 1 ? "6 8" : idx === 3 ? "3 5" : undefined}
                      opacity={isSelected ? "1" : "0.55"}
                      className="transition-all duration-500 group-hover:stroke-teal group-hover:opacity-90"
                    />

                    {/* Ring Animated Kinetic Satellite Layer */}
                    <g className={band.animClass}>
                      {/* Primary Orbiting Node / Planetary Satellite */}
                      <circle
                        cx={220 + r}
                        cy="220"
                        r={isSelected ? "8" : "5"}
                        fill={band.color}
                        filter="url(#celestialGlow)"
                        className="transition-all duration-300 group-hover:scale-125"
                      />

                      {/* Satellite Halo Pulse */}
                      <circle
                        cx={220 + r}
                        cy="220"
                        r={isSelected ? "14" : "9"}
                        fill="none"
                        stroke={band.color}
                        strokeWidth="1.5"
                        opacity={isSelected ? "0.8" : "0.3"}
                        className="transition-all duration-300 animate-ping"
                        style={{ animationDuration: isSelected ? "2.2s" : "4s" }}
                      />

                      {/* Opposing micro satellite node for balance */}
                      <circle
                        cx={220 - r}
                        cy="220"
                        r={isSelected ? "4.5" : "3"}
                        fill={band.color}
                        opacity={isSelected ? "0.9" : "0.4"}
                      />
                    </g>

                    {/* Active Dimension Constellation Energy Ray */}
                    {isSelected && (
                      <g className="animate-in fade-in duration-300">
                        <line
                          x1="220"
                          y1="220"
                          x2={220 + r * 0.707}
                          y2={220 - r * 0.707}
                          stroke={band.color}
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                          opacity="0.6"
                        />
                        <circle
                          cx={220 + r * 0.707}
                          cy={220 - r * 0.707}
                          r="3"
                          fill={band.color}
                        />
                      </g>
                    )}
                  </g>
                );
              })}

              {/* ---------------- CENTER STUDENT NUCLEUS ("you.") ---------------- */}
              <g className="orbit-center-core cursor-pointer" onClick={() => setActiveRing((activeRing + 1) % 4)}>
                {/* Luminous corona ring */}
                <circle
                  cx="220"
                  cy="220"
                  r="34"
                  fill="none"
                  stroke={currentBand.color}
                  strokeWidth="2"
                  opacity="0.4"
                  strokeDasharray="4 6"
                />

                {/* Nucleus body */}
                <circle
                  cx="220"
                  cy="220"
                  r="27"
                  fill="#102A3B"
                  filter="url(#celestialGlow)"
                  className="transition-all duration-500 shadow-elevated"
                />

                {/* Luminous border */}
                <circle
                  cx="220"
                  cy="220"
                  r="27"
                  fill="none"
                  stroke={currentBand.color}
                  strokeWidth="2"
                  className="transition-colors duration-500"
                />

                {/* Core Typographic Symbol */}
                <text
                  x="220"
                  y="225"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="14"
                  fontFamily="var(--font-playfair)"
                  fontStyle="italic"
                  fontWeight="600"
                  className="select-none pointer-events-none tracking-tight"
                >
                  you.
                </text>
              </g>

              {/* Orbiting Compass Cross Ticks */}
              <circle cx="220" cy="220" r="180" fill="none" stroke="rgba(34,127,149,0.15)" strokeWidth="1" strokeDasharray="1 15" />
            </svg>

            {/* Orbit Label Micro Badges */}
            <div className="absolute top-2 left-2 text-[9px] font-mono text-muted/70 bg-white/70 px-2 py-0.5 rounded border border-border/40 pointer-events-none">
              R-01 · Interests
            </div>
            <div className="absolute bottom-2 right-2 text-[9px] font-mono text-muted/70 bg-white/70 px-2 py-0.5 rounded border border-border/40 pointer-events-none">
              R-04 · Pathways
            </div>
          </div>

          {/* Quick interactive hint */}
          <div className="flex items-center gap-2 mt-2 text-[11px] text-muted font-mono">
            <span className="w-2 h-2 rounded-full bg-teal-soft" />
            <span>Hover or tap any orbit to inspect dimension</span>
          </div>
        </div>

        {/* ----------------- RIGHT: DYNAMIC TELEMETRY & INSIGHTS ----------------- */}
        <div className="lg:col-span-6 space-y-5">
          {/* Active Dimension Highlight Card */}
          <div
            className="p-5 sm:p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden space-y-4"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: currentBand.color,
              boxShadow: `0 14px 35px -8px ${currentBand.accentGlow}`,
            }}
          >
            {/* Top pill bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-mono font-bold shadow-sm"
                  style={{ backgroundColor: currentBand.color }}
                >
                  0{activeRing + 1}
                </span>
                <span
                  className="text-xs font-mono font-extrabold uppercase tracking-wider"
                  style={{ color: currentBand.color }}
                >
                  {currentBand.tag}
                </span>
              </div>
              <span className="text-[10px] font-mono text-muted px-2 py-0.5 rounded bg-ivory border border-border">
                Band {activeRing + 1} of 4
              </span>
            </div>

            {/* Dimension Title & Subtitle */}
            <div>
              <h4 className="font-display font-extrabold text-xl sm:text-2xl text-ink tracking-tight">
                {currentBand.title}
              </h4>
              <p className="text-xs text-teal font-semibold mt-0.5">
                {currentBand.subtitle}
              </p>
            </div>

            {/* Deep Explanation */}
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {currentBand.description}
            </p>

            {/* Trait Clusters */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted font-bold block">
                Diagnostic Traits Evaluated
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentBand.traits.map((trait) => (
                  <span
                    key={trait}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-ivory border border-border/80 text-ink/80 flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3 h-3 text-teal" />
                    <span>{trait}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Diagnostic Metric Bar */}
            <div className="p-3 rounded-xl bg-ivory border border-border/80 flex items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-ink block">{currentBand.metric}</span>
                <span className="text-[10px] text-muted block">{currentBand.metricLabel}</span>
              </div>
              <div
                className="w-3 h-3 rounded-full flex-shrink-0 animate-ping"
                style={{ backgroundColor: currentBand.color }}
              />
            </div>

            {/* Link to Report / Booking */}
            <div className="pt-2 border-t border-border flex items-center justify-between text-xs font-bold">
              <Link
                href="/psychometric-test-dubai/sample-report"
                className="inline-flex items-center gap-1 text-teal hover:text-teal-dark hover:underline"
              >
                <span>View in Sample Report</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/book-psychometric-test"
                className="text-ink hover:text-teal transition-colors font-mono text-[11px]"
              >
                Book for AED 100 →
              </Link>
            </div>
          </div>

          {/* Quick Band Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {bands.map((band, idx) => {
              const isSelected = activeRing === idx;
              return (
                <button
                  key={band.title}
                  onClick={() => {
                    setActiveRing(idx);
                    setIsAutoCycling(false);
                  }}
                  className={`p-2.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-ink text-white border-ink shadow-sm"
                      : "bg-white hover:bg-teal-light/40 text-ink/70 border-border"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono opacity-80">0{idx + 1}</span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: band.color }}
                    />
                  </div>
                  <span className="text-xs font-bold font-display line-clamp-1">
                    {band.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
