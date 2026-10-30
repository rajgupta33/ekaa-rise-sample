import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Assessment Information & Limitations | EKAA Rise",
  description: "Important information regarding the educational scope, ethical boundaries and diagnostic limitations of the EKAA Rise psychometric test.",
  canonicalPath: "/assessment-disclaimer",
});

export default function AssessmentDisclaimerPage() {
  return (
    <div className="space-y-8 pb-20">
      <div className="shell pt-4">
        <Breadcrumbs items={[{ label: "Assessment Limitations", href: "/assessment-disclaimer" }]} />
      </div>

      <div className="shell max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-teal">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Ethical Transparency</span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
          Assessment Information & Limitations
        </h1>
        <p className="text-xs text-muted">
          Last Updated: October 2026 · EKAA Rise Ethical Practice Standards
        </p>

        <div className="space-y-6 text-xs sm:text-sm text-ink/80 leading-relaxed font-sans pt-4 border-t border-border">
          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-ink">1. Educational & Reflective Purpose</h2>
            <p>
              The EKAA Rise Psychometric Test (AED 100) is administered strictly as an educational self-reflection and guidance instrument. It is designed to evaluate general cognitive aptitudes, vocational interest affinities (such as Holland RIASEC categories), and study environment preferences.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-ink">2. Not a Clinical or Psychological Diagnosis</h2>
            <p>
              This assessment is <strong>not</strong> a clinical psychological evaluation, psychiatric assessment, or medical diagnosis. It does not screen for learning disabilities (such as dyslexia or ADHD) or mental health conditions. Families seeking clinical or neuropsychological evaluations should consult licensed clinical psychologists.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-ink">3. No Deterministic Career Verdicts</h2>
            <p>
              No psychometric instrument can definitively determine a student's singular future vocation or lifelong success. Test findings represent one structured data point that must be evaluated alongside school attainment, teacher feedback, personal motivation, and university prerequisites.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-ink">4. Status of Sample Reports</h2>
            <p>
              All sample reports displayed on this website (including the interactive report at /psychometric-test-dubai/sample-report) are synthetic, illustrative models designed solely for client design review and demonstration of format.
            </p>
          </section>
        </div>

        <div className="p-6 rounded-2xl bg-ivory border border-border flex items-center justify-between gap-4">
          <div className="text-xs text-muted">
            Have questions about assessment ethics or suitability for your child?
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal hover:underline flex-shrink-0"
          >
            <span>Ask Our Advisory Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
