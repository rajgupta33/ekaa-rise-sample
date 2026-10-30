import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, Mail, Phone, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Contact EKAA Rise Dubai | Assessment & Admissions Enquiries",
  description: "Ask about the AED 100 psychometric test, career guidance, subject selection or international university admissions in Dubai.",
  canonicalPath: "/contact",
  keywords: [
    "contact EKAA Rise Dubai",
    "education consultant contact Dubai",
    "psychometric test enquiry Dubai",
  ],
});

export default function ContactPage() {
  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      {/* Breadcrumbs */}
      <div className="shell pt-4">
        <Breadcrumbs items={[{ label: "Contact EKAA Rise", href: "/contact" }]} />
      </div>

      {/* Header */}
      <section className="shell text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-teal">
          <Mail className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight">
          Contact EKAA Rise in Dubai
        </h1>
        <p className="text-sm sm:text-base text-muted max-w-xl mx-auto leading-relaxed">
          Have questions regarding the AED 100 psychometric assessment, school subject selection, or international university admissions? Our team is here to assist.
        </p>
      </section>

      {/* Grid: Details + Contact Form */}
      <section className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-border p-6 sm:p-8 shadow-sm space-y-6">
              <h3 className="font-display font-bold text-lg text-ink pb-4 border-b border-border">
                Advisory Office & Operations
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-light text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-ink block">Service Location</strong>
                    <span className="text-muted leading-relaxed block">
                      {siteConfig.contact.locationServed}
                    </span>
                    <span className="text-[11px] text-muted-light mt-1 block">
                      {siteConfig.contact.verifiedNote}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-light text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-ink block">Advisory Hours</strong>
                    <span className="text-muted block">
                      {siteConfig.contact.officialHours}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-light text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-ink block">Email Correspondence</strong>
                    <span className="text-muted block">
                      {siteConfig.contact.emailPlaceholder}
                    </span>
                  </div>
                </div>
              </div>

              {/* Offer pill */}
              <div className="p-4 rounded-2xl bg-teal-light/40 border border-teal/20 text-xs text-ink/85 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-teal font-extrabold block">
                  Quick Booking
                </span>
                <p>
                  To register immediately for the <strong>AED 100 psychometric test</strong>, use our dedicated booking journey.
                </p>
                <Link
                  href="/book-psychometric-test"
                  className="inline-flex items-center gap-1 text-teal font-bold hover:underline pt-1"
                >
                  <span>Go to Assessment Booking (AED 100)</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="shell space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-teal font-extrabold block">
            Got Questions?
          </span>
          <h2 className="font-display font-extrabold text-2xl text-ink">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <FAQAccordion limit={4} showCategoryFilters={false} />
        </div>
      </section>
    </div>
  );
}
