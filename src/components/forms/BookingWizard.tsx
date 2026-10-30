"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Sparkles, 
  Check, 
  ArrowRight, 
  AlertCircle, 
  Lock,
  Calendar
} from "lucide-react";

export function BookingWizard() {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState({
    userType: "parent", // "student" | "parent"
    studentName: "",
    guardianName: "",
    grade: "Grade 11 (Year 12 / IB 1)",
    curriculum: "IB Diploma (IBDP)",
    email: "",
    phone: "+971 ",
    preferredMode: "Online Digital Assessment",
    interestArea: "Subject & Degree Exploration",
    parentConsent: false,
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.studentName.trim()) {
      errs.studentName = "Please enter the student's name";
    }
    if (formData.userType === "parent" && !formData.guardianName.trim()) {
      errs.guardianName = "Please enter the parent/guardian name";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!formData.privacyConsent) {
      errs.privacyConsent = "Please acknowledge the privacy policy";
    }
    if (!formData.parentConsent) {
      errs.parentConsent = "Parent/guardian consent is required for students";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/checkout-demo");
    }, 450);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
      {/* Wizard Form Column */}
      <div className="lg:col-span-7 bg-white rounded-3xl border border-border shadow-elevated p-6 sm:p-8">
        {/* Step indicator */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-border">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-teal font-extrabold block">
              Step 0{step} of 03
            </span>
            <h3 className="font-display font-bold text-lg text-ink">
              {step === 1 && "Student & Academic Profile"}
              {step === 2 && "Contact & Guardian Consent"}
              {step === 3 && "Review Order & Confirmation"}
            </h3>
          </div>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-8 h-1.5 rounded-full transition-colors ${
                  s <= step ? "bg-teal" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* STAGE 1: Profile */}
        {step === 1 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <label className="text-xs font-bold text-ink block mb-2">
                Who is initiating this enquiry?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, userType: "parent" })}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                    formData.userType === "parent"
                      ? "border-teal bg-teal-light/50 text-teal-dark shadow-sm"
                      : "border-border text-muted hover:border-teal/40"
                  }`}
                >
                  Parent / Guardian
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, userType: "student" })}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                    formData.userType === "student"
                      ? "border-teal bg-teal-light/50 text-teal-dark shadow-sm"
                      : "border-border text-muted hover:border-teal/40"
                  }`}
                >
                  Student
                </button>
              </div>
            </div>

            {formData.userType === "parent" && (
              <div>
                <label className="text-xs font-bold text-ink block mb-1.5">
                  Parent / Guardian Full Name *
                </label>
                <input
                  type="text"
                  value={formData.guardianName}
                  onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-3 rounded-xl border border-border text-sm text-ink focus:outline-none focus:ring-2 focus:ring-teal/40"
                />
                {errors.guardianName && (
                  <p className="text-[11px] text-red-500 mt-1">{errors.guardianName}</p>
                )}
              </div>
            )}

            <div>
              <label className="text-xs font-bold text-ink block mb-1.5">
                Student Full Name *
              </label>
              <input
                type="text"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                placeholder="e.g. Michael Jenkins"
                className="w-full px-4 py-3 rounded-xl border border-border text-sm text-ink focus:outline-none focus:ring-2 focus:ring-teal/40"
              />
              {errors.studentName && (
                <p className="text-[11px] text-red-500 mt-1">{errors.studentName}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-ink block mb-1.5">
                  Current Grade / Year
                </label>
                <select
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl border border-border text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-teal/40"
                >
                  <option>Grade 8–9 (Middle School)</option>
                  <option>Grade 10 (Year 11 / IGCSE)</option>
                  <option>Grade 11 (Year 12 / IB 1)</option>
                  <option>Grade 12 (Year 13 / IB 2)</option>
                  <option>Undergraduate Student</option>
                  <option>Postgraduate / Working</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-ink block mb-1.5">
                  Current Curriculum
                </label>
                <select
                  value={formData.curriculum}
                  onChange={(e) => setFormData({ ...formData, curriculum: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl border border-border text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-teal/40"
                >
                  <option>IB Diploma (IBDP)</option>
                  <option>British (A Levels / IGCSE)</option>
                  <option>American High School / AP</option>
                  <option>CBSE / Indian Board</option>
                  <option>Other / Dual Curriculum</option>
                </select>
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-full mt-4 flex items-center justify-center gap-2 bg-ink hover:bg-teal text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-colors shadow-sm"
            >
              <span>Continue to Contact & Consent</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STAGE 2: Contact & Consent */}
        {step === 2 && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <label className="text-xs font-bold text-ink block mb-1.5">
                Primary Contact Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-border text-sm text-ink focus:outline-none focus:ring-2 focus:ring-teal/40"
              />
              {errors.email && (
                <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-xs font-bold text-ink block mb-1.5">
                Contact Phone / WhatsApp Number (UAE or International) *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+971 50 123 4567"
                className="w-full px-4 py-3 rounded-xl border border-border text-sm text-ink focus:outline-none focus:ring-2 focus:ring-teal/40"
              />
              {errors.phone && (
                <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Consents */}
            <div className="pt-2 space-y-3">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={formData.parentConsent}
                  onChange={(e) => setFormData({ ...formData, parentConsent: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded text-teal focus:ring-teal"
                />
                <span className="text-xs text-ink/80 leading-relaxed">
                  I confirm that a parent or legal guardian authorizes this assessment enquiry and will be informed of scheduling arrangements. *
                </span>
              </label>
              {errors.parentConsent && (
                <p className="text-[11px] text-red-500 pl-7">{errors.parentConsent}</p>
              )}

              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={formData.privacyConsent}
                  onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded text-teal focus:ring-teal"
                />
                <span className="text-xs text-ink/80 leading-relaxed">
                  I have read and agree to EKAA Rise's{" "}
                  <Link href="/privacy-policy" className="text-teal underline font-medium" target="_blank">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/assessment-disclaimer" className="text-teal underline font-medium" target="_blank">
                    Assessment Limitations
                  </Link>
                  . *
                </span>
              </label>
              {errors.privacyConsent && (
                <p className="text-[11px] text-red-500 pl-7">{errors.privacyConsent}</p>
              )}
            </div>

            <div className="flex items-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="py-3.5 px-4 rounded-xl border border-border text-xs font-bold text-muted hover:text-ink"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 flex items-center justify-center gap-2 bg-ink hover:bg-teal text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-colors shadow-sm"
              >
                <span>Review Order — AED 100</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STAGE 3: Review Order & Submit */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-200">
            <div className="p-4 rounded-2xl bg-ivory border border-border space-y-3">
              <h4 className="font-display font-bold text-sm text-ink uppercase tracking-wider">
                Order Summary Details
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-muted block">Candidate:</span>
                  <strong className="text-ink">{formData.studentName}</strong>
                </div>
                <div>
                  <span className="text-muted block">Academic Level:</span>
                  <strong className="text-ink">{formData.grade}</strong>
                </div>
                <div>
                  <span className="text-muted block">Curriculum:</span>
                  <strong className="text-ink">{formData.curriculum}</strong>
                </div>
                <div>
                  <span className="text-muted block">Contact Email:</span>
                  <strong className="text-ink">{formData.email}</strong>
                </div>
              </div>
            </div>

            {/* Price block */}
            <div className="p-5 rounded-2xl bg-teal-light/40 border border-teal/20 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-dark font-extrabold block">
                  Total Payable
                </span>
                <span className="text-xs text-muted">
                  EKAA Rise Psychometric Assessment
                </span>
              </div>
              <div className="text-right">
                <span className="font-display font-extrabold text-2xl text-ink">
                  AED 100
                </span>
                <span className="text-[10px] text-muted block font-mono">
                  Exact scope confirmed before payment
                </span>
              </div>
            </div>

            {/* Demo Notice */}
            <div className="p-3.5 rounded-xl bg-champagne-light/30 border border-champagne/40 text-xs text-ink/80 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
              <span>
                <strong>Preview demonstration:</strong> Continue to a dummy checkout for client review. No booking is saved and no card details are requested.
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="py-3.5 px-4 rounded-xl border border-border text-xs font-bold text-muted hover:text-ink"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 flex items-center justify-center gap-2 bg-ink hover:bg-teal text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Processing Preview...</span>
                ) : (
                  <>
                    <span>Continue to Demo Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Trust & Guarantee Sidebar Column */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-ivory rounded-3xl border border-border p-6 sm:p-7 space-y-5">
          <div className="flex items-center gap-3 pb-4 border-b border-border">
            <div className="w-10 h-10 rounded-xl bg-teal-light text-teal flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-teal font-extrabold block">
                Confirmed Offer
              </span>
              <h4 className="font-display font-extrabold text-base text-ink">
                EKAA Rise Assessment · AED 100
              </h4>
            </div>
          </div>

          <div className="space-y-3 text-xs text-ink/85">
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
              <span>Diagnostic exploration of vocational interests and cognitive aptitudes</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
              <span>Designed specifically for Dubai school students (IB, British, American, CBSE)</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
              <span>Actionable alignment with Grade 11 subject choices and international degree paths</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
              <span>Guardian involvement supported with strict minor data privacy controls</span>
            </div>
          </div>

          <div className="pt-4 border-t border-border space-y-2">
            <div className="flex items-center gap-2 text-xs text-muted">
              <Lock className="w-3.5 h-3.5 text-teal" />
              <span>Safe enquiry submission · No spam guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted">
              <Calendar className="w-3.5 h-3.5 text-teal" />
              <span>Scheduling arranged post-confirmation</span>
            </div>
          </div>
        </div>

        {/* Client review note */}
        <div className="p-4 rounded-2xl bg-white border border-border/80 text-xs text-muted leading-relaxed">
          <strong className="text-ink block mb-1">Notice for Client Review:</strong>
          This preview leads to a visual checkout mockup. A live payment provider and checkout integration require separate approval and implementation.
        </div>
      </div>
    </div>
  );
}
