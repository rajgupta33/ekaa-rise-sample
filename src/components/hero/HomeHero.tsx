import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const pathways = [
  {
    number: "01",
    title: "Understand strengths",
    description: "Start with a clearer picture of what makes you, you.",
    href: "/psychometric-test-dubai",
  },
  {
    number: "02",
    title: "Choose subjects",
    description: "Connect today’s choices with tomorrow’s possibilities.",
    href: "/subject-selection-counselling-dubai",
  },
  {
    number: "03",
    title: "Plan university",
    description: "Find courses and destinations that genuinely fit.",
    href: "/study-abroad-consultants-dubai",
  },
];

export function HomeHero() {
  return (
    <>
      <section id="hero" className="home-hero relative isolate overflow-hidden bg-[#10242B] text-[#F8F6F0]">
        <div className="home-hero-grid mx-auto grid max-w-[1600px] lg:min-h-[650px] lg:grid-cols-[51%_49%]">
          <div className="home-hero-copy relative z-10 order-2 flex flex-col justify-center px-5 pb-9 pt-6 sm:px-8 sm:pt-9 lg:order-1 lg:py-20 lg:pl-[max(3rem,calc((100vw-1240px)/2))] lg:pr-9 xl:pr-14">
            <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B8D4D0] sm:text-xs">
              <span className="h-px w-7 bg-[#B87955]" aria-hidden="true" />
              Student guidance in Dubai
            </div>

            <h1 className="max-w-[720px] font-display text-[clamp(2.75rem,5.4vw,5.2rem)] font-semibold leading-[1.04] tracking-[-0.055em]">
              More than one future?
              <span className="mt-1 block font-serif text-[1.06em] font-medium italic tracking-[-0.045em] text-[#BFE2D9]">
                Find yours.
              </span>
            </h1>

            <Link
              href="/pathway-explorer"
              className="group mt-5 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#DCECE8] px-6 py-3 text-sm font-bold text-[#10242B] transition-colors duration-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:hidden"
            >
              Explore your next step
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>

            <p className="mt-5 max-w-[530px] text-[15px] leading-[1.65] text-[#D9E4E0] sm:hidden">
              Choose subjects and a university path that fit you, with
              thoughtful guidance for Dubai students.
            </p>
            <p className="mt-5 hidden max-w-[530px] text-[17px] leading-[1.65] text-[#D9E4E0] sm:block lg:mt-7 lg:text-[18px]">
              From subject choices to universities abroad, EKAA Rise helps
              Dubai students and families turn strengths into a clear,
              considered plan.
            </p>

            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:mt-9">
              <Link
                href="/pathway-explorer"
                className="group hidden min-h-12 items-center justify-center gap-3 rounded-full bg-[#DCECE8] px-6 py-3 text-sm font-bold text-[#10242B] shadow-[0_10px_30px_rgba(0,0,0,.14)] transition-colors duration-200 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:inline-flex sm:min-h-[52px]"
              >
                Explore your next step
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link
                href="/psychometric-test-dubai"
                className="group inline-flex min-h-11 items-center justify-center gap-2 px-2 py-2 text-sm font-semibold text-[#F8F6F0] underline decoration-[#B87955] decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-[#BFE2D9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                See the AED 100 assessment
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-9 hidden max-w-[520px] lg:block" aria-hidden="true">
              <svg className="h-14 w-full text-[#8DBBB4]" viewBox="0 0 520 56" fill="none" preserveAspectRatio="none">
                <path className="home-hero-path" d="M2 30 C110 30 112 49 225 30 S373 8 471 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle className="home-hero-node" cx="471" cy="25" r="5" fill="#B87955" />
              </svg>
            </div>
          </div>

          <div className="home-hero-visual relative order-1 h-[210px] overflow-hidden sm:h-[300px] lg:order-2 lg:h-auto lg:min-h-[650px]">
            <picture>
              <source media="(max-width: 1023px)" srcSet="/images/ekaa/hero-home-mobile-v2.webp" />
              {/* Native picture selects one composition per viewport. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/ekaa/hero-home-desktop-v2.webp"
                alt="A student shares his thoughts while an education adviser listens during a guidance conversation"
                className="absolute inset-0 h-full w-full object-cover object-[50%_36%] saturate-[.88] lg:object-[49%_center]"
                width="1536"
                height="1024"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
            <div className="home-hero-image-blend pointer-events-none absolute inset-0" />
            <div className="pointer-events-none absolute bottom-4 right-5 hidden items-center gap-2 rounded-full border border-white/35 bg-[#10242B]/55 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm sm:flex lg:bottom-8 lg:right-8" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D7A982]" />
              Every path starts with understanding
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#D7DCD6] bg-[#F6F2EA]" aria-label="Explore our guidance pathways">
        <div className="shell grid gap-0 py-2 lg:grid-cols-3 lg:py-5">
          {pathways.map((pathway) => (
            <Link
              key={pathway.number}
              href={pathway.href}
              className="group flex items-start gap-4 border-b border-[#D7DCD6] px-1 py-5 transition-colors duration-200 hover:text-[#176C70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#176C70] last:border-b-0 lg:border-b-0 lg:border-r lg:px-8 lg:py-4 lg:first:pl-0 lg:last:border-r-0"
            >
              <span className="pt-1 text-xs font-bold tracking-[0.15em] text-[#B87955]">{pathway.number}</span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-[18px] font-bold tracking-tight text-[#172A32] transition-colors group-hover:text-[#176C70]">{pathway.title}</span>
                <span className="mt-1 block text-[13px] leading-snug text-[#40545B]">{pathway.description}</span>
              </span>
              <ArrowUpRight className="mt-1 h-4 w-4 flex-none text-[#176C70] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
