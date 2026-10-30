import React from "react";
import Link from "next/link";
import { Compass, ArrowRight, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="shell py-24 text-center max-w-lg mx-auto space-y-6">
      <div className="w-16 h-16 rounded-3xl bg-teal-light text-teal flex items-center justify-center mx-auto shadow-sm">
        <Compass className="w-8 h-8" />
      </div>

      <span className="text-xs font-mono font-bold uppercase tracking-widest text-muted block">
        Error 404 · Page Not Found
      </span>

      <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">
        This Pathway Seems to Have Moved
      </h1>

      <p className="text-sm text-muted leading-relaxed">
        The page you are looking for does not exist or may have been relocated. Explore our main educational pathways below.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-ink hover:bg-teal text-white text-xs font-bold py-3 px-6 rounded-full transition-colors shadow-sm"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
        <Link
          href="/psychometric-test-dubai"
          className="inline-flex items-center justify-center gap-2 bg-teal hover:bg-teal-dark text-white text-xs font-bold py-3 px-6 rounded-full transition-colors shadow-sm"
        >
          <Sparkles className="w-4 h-4" />
          <span>Psychometric Test (AED 100)</span>
        </Link>
        <Link
          href="/study-abroad-consultants-dubai"
          className="inline-flex items-center justify-center gap-2 bg-white text-ink border border-border text-xs font-bold py-3 px-6 rounded-full hover:bg-ivory"
        >
          <span>Study Abroad</span>
        </Link>
      </div>
    </div>
  );
}
