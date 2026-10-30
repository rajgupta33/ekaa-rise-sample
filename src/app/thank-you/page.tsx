import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Check, ArrowRight, ShieldCheck, Home } from "lucide-react";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Thank You | EKAA Rise",
  description: "Enquiry confirmation page.",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <div className="shell py-20 text-center max-w-xl mx-auto space-y-6">
      <div className="w-16 h-16 rounded-full bg-teal-light text-teal flex items-center justify-center mx-auto">
        <Check className="w-8 h-8 stroke-[3]" />
      </div>

      <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal block">
        Demo Journey Complete
      </span>

      <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-ink">
        Your Preview Is Complete
      </h1>

      <p className="text-sm text-muted leading-relaxed">
        You have reached the end of the client review journey. No booking was created, no personal data was transferred to an external CRM, and no payment was charged.
      </p>

      <div className="p-4 rounded-2xl bg-teal-light/40 border border-teal/20 text-xs text-ink/80 text-left space-y-1">
        <strong className="text-teal font-bold block">Production Transition:</strong>
        <p>
          After client approval, payment gateway and scheduling integrations can connect this confirmation page to a real booking. Those integrations are not active in this preview.
        </p>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-ink hover:bg-teal text-white text-xs font-bold py-3 px-6 rounded-full transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          href="/psychometric-test-dubai/sample-report"
          className="inline-flex items-center justify-center gap-2 bg-white text-ink border border-border text-xs font-bold py-3 px-6 rounded-full hover:bg-ivory"
        >
          <span>View Sample Report</span>
        </Link>
      </div>
    </div>
  );
}
