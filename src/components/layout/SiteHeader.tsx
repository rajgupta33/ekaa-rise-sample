"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { navigationConfig } from "@/config/navigation";
import { Logo } from "@/components/ui/Logo";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 20);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setMobileExpandedSection(null);
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 border-b transition-[background-color,box-shadow,padding] duration-200 ${
        isScrolled
          ? "border-[#D7DCD6] bg-[#FFFCF7]/95 py-2 shadow-sm backdrop-blur-md"
          : "border-[#D7DCD6]/70 bg-[#FFFCF7]/95 py-2.5 backdrop-blur-sm"
      }`}
    >
      <div className="shell flex items-center justify-between gap-2 xl:gap-5">
        <Logo variant="header" />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main navigation">
          {navigationConfig.mainNav.map((item) => {
            const hasSubmenu = "items" in item && Array.isArray(item.items) && item.items.length > 0;
            const isCurrent = pathname === item.href || (hasSubmenu && item.items?.some((sub) => pathname === sub.href));

            if (!hasSubmenu) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-lg px-2.5 py-2 text-[13px] font-semibold transition-colors hover:bg-[#DCECE8]/60 hover:text-[#176C70] ${isCurrent ? "text-[#176C70]" : "text-[#172A32]"}`}
                >
                  {item.label}
                </Link>
              );
            }

            const isOpen = activeDropdown === item.label;
            const isStudyAbroad = item.label === "Study Abroad";

            return (
              <div
                key={item.label}
                className="relative"
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node)) setActiveDropdown(null);
                }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`desktop-menu-${item.label.toLowerCase().replaceAll(" ", "-")}`}
                  onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                  className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-2 text-[13px] font-semibold transition-colors hover:bg-[#DCECE8]/60 hover:text-[#176C70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#176C70] ${isOpen || isCurrent ? "bg-[#DCECE8]/60 text-[#176C70]" : "text-[#172A32]"}`}
                >
                  {item.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>

                {isOpen && (
                  <div className="absolute left-0 top-full z-50 pt-2">
                    <div
                      id={`desktop-menu-${item.label.toLowerCase().replaceAll(" ", "-")}`}
                      className={`nav-panel-enter max-h-[min(72vh,620px)] overflow-y-auto rounded-2xl border border-[#D7DCD6] bg-[#FFFCF7] p-4 shadow-[0_24px_55px_rgba(16,36,43,.18)] ${isStudyAbroad ? "w-[610px]" : "w-[350px]"}`}
                    >
                      <div className="mb-3 flex items-center justify-between border-b border-[#D7DCD6] pb-3">
                        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#176C70]">Explore {item.label}</span>
                        <Link href={item.href} onClick={() => setActiveDropdown(null)} className="text-xs font-semibold text-[#176C70] hover:underline">Overview →</Link>
                      </div>
                      <div className={isStudyAbroad ? "grid grid-cols-2 gap-1" : "grid gap-1"}>
                        {item.items?.filter((sub) => sub.href !== item.href).map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className={`group rounded-xl px-3 py-2.5 transition-colors hover:bg-[#EAF3EF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#176C70] ${pathname === sub.href ? "bg-[#EAF3EF]" : ""}`}
                          >
                            <span className="flex items-center gap-2 text-[13px] font-bold text-[#172A32] group-hover:text-[#176C70]">
                              {sub.label}
                              {sub.badge && <span className="rounded-full bg-[#DCECE8] px-1.5 py-0.5 text-[9px] font-bold text-[#176C70]">{sub.badge}</span>}
                            </span>
                            {sub.description && <span className="mt-0.5 block text-[11px] leading-snug text-[#5B6D70]">{sub.description}</span>}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Link
            href="/book-psychometric-test"
            className="book-test-cta group relative inline-flex min-h-[42px] max-w-[176px] items-center justify-center overflow-hidden rounded-full bg-[#123841] px-3 py-2 text-center text-[11px] font-bold leading-tight text-white shadow-[0_6px_18px_rgba(16,36,43,.22)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#176C70] hover:shadow-[0_10px_25px_rgba(23,108,112,.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#176C70] sm:max-w-none sm:px-4 sm:text-xs xl:min-h-[46px] xl:px-5 xl:text-[13px]"
          >
            <span className="relative z-10">Book Psychometric Test</span>
            <span className="relative z-10 ml-2 hidden rounded-full border border-white/25 bg-white/10 px-2 py-1 text-[10px] font-semibold text-[#E2F3E9] xl:inline">AED 100</span>
            <ArrowRight className="relative z-10 ml-1.5 hidden h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 xl:inline" aria-hidden="true" />
          </Link>

          <button
            type="button"
            onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setActiveDropdown(null); }}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-panel"
            className="rounded-lg p-1.5 text-[#172A32] hover:bg-[#DCECE8]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#176C70] xl:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation-panel" className="nav-panel-enter absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-80px)] overflow-y-auto border-t border-[#D7DCD6] bg-[#FFFCF7] px-5 pb-8 shadow-[0_25px_40px_rgba(16,36,43,.18)] xl:hidden">
          <nav aria-label="Mobile navigation" className="shell max-w-[680px] px-0 py-4">
            {navigationConfig.mainNav.map((item) => {
              const hasSubmenu = "items" in item && Array.isArray(item.items) && item.items.length > 0;
              if (!hasSubmenu) {
                return <Link key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block border-b border-[#D7DCD6] py-4 text-base font-semibold text-[#172A32]">{item.label}</Link>;
              }
              const expanded = mobileExpandedSection === item.label;
              const panelId = `mobile-menu-${item.label.toLowerCase().replaceAll(" ", "-")}`;
              return (
                <div key={item.label} className="border-b border-[#D7DCD6]">
                  <button
                    type="button"
                    onClick={() => setMobileExpandedSection(expanded ? null : item.label)}
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-[#172A32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#176C70]"
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 text-[#176C70] transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {expanded && (
                    <div id={panelId} className="pb-3 pl-3">
                      <Link href={item.href} onClick={() => setMobileMenuOpen(false)} className="block rounded-lg py-2.5 text-sm font-bold text-[#176C70]">View overview →</Link>
                      {item.items?.filter((sub) => sub.href !== item.href).map((sub) => (
                        <Link key={sub.href} href={sub.href} onClick={() => setMobileMenuOpen(false)} className="block rounded-lg py-2.5 text-sm font-medium text-[#40545B] hover:text-[#176C70]">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link href="/book-psychometric-test" onClick={() => setMobileMenuOpen(false)} className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#123841] px-5 py-3 text-sm font-bold text-white">
              Book Psychometric Test <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
