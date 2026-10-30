"use client";

import React, { useState } from "react";
import { ArrowRight, Check, ShieldCheck, User, Mail, Phone, Compass, MessageSquare } from "lucide-react";

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "+971 ",
    applicantType: "student",
    curriculum: "IB Diploma",
    targetService: "Study Abroad Admissions",
    targetCountry: "United Kingdom",
    questions: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-border p-8 text-center max-w-xl mx-auto shadow-elevated animate-in zoom-in-95 duration-200">
        <div className="w-14 h-14 rounded-full bg-teal-light text-teal flex items-center justify-center mx-auto mb-4">
          <Check className="w-7 h-7 stroke-[3]" />
        </div>
        <h3 className="font-display font-extrabold text-2xl text-ink mb-2">
          Consultation Request Received
        </h3>
        <p className="text-sm text-muted mb-6 leading-relaxed">
          Thank you, {formData.name}. In preview mode, your enquiry has been captured as a demo. An EKAA Rise education advisor will follow up to review your academic aspirations.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-bold text-teal hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-border p-6 sm:p-8 shadow-elevated space-y-5 max-w-2xl mx-auto">
      <div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-teal font-extrabold block mb-1">
          Advisory Session
        </span>
        <h3 className="font-display font-bold text-xl text-ink">
          Request a Personal Guidance Consultation
        </h3>
        <p className="text-xs text-muted mt-1">
          Discuss school subject choices, degree shortlists, or international university admissions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-ink block mb-1">Your Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Maya Al-Hashimi"
            className="w-full px-4 py-3 rounded-xl border border-border text-sm text-ink focus:outline-none focus:ring-2 focus:ring-teal/40"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-ink block mb-1">I am a *</label>
          <select
            value={formData.applicantType}
            onChange={(e) => setFormData({ ...formData, applicantType: e.target.value })}
            className="w-full px-3.5 py-3 rounded-xl border border-border text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-teal/40"
          >
            <option value="parent">Parent / Guardian</option>
            <option value="student">Grade 11–12 Student</option>
            <option value="early-student">Grade 8–10 Student</option>
            <option value="undergrad">Undergraduate Student</option>
            <option value="postgrad">Postgraduate Applicant</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-ink block mb-1">Email Address *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@example.com"
            className="w-full px-4 py-3 rounded-xl border border-border text-sm text-ink focus:outline-none focus:ring-2 focus:ring-teal/40"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-ink block mb-1">Phone / WhatsApp Number *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+971 50 123 4567"
            className="w-full px-4 py-3 rounded-xl border border-border text-sm text-ink focus:outline-none focus:ring-2 focus:ring-teal/40"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-ink block mb-1">Service Interest</label>
          <select
            value={formData.targetService}
            onChange={(e) => setFormData({ ...formData, targetService: e.target.value })}
            className="w-full px-3.5 py-3 rounded-xl border border-border text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-teal/40"
          >
            <option>Study Abroad Admissions</option>
            <option>Subject Selection Guidance (IB/A Levels/CBSE)</option>
            <option>Career Counselling Conversation</option>
            <option>Undergraduate University Shortlisting</option>
            <option>Master's / Postgraduate Planning</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-bold text-ink block mb-1">Primary Destination Interest</label>
          <select
            value={formData.targetCountry}
            onChange={(e) => setFormData({ ...formData, targetCountry: e.target.value })}
            className="w-full px-3.5 py-3 rounded-xl border border-border text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-teal/40"
          >
            <option>United Kingdom</option>
            <option>United States</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>Germany</option>
            <option>Ireland</option>
            <option>Undecided / Comparing Options</option>
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs font-bold text-ink block mb-1">
          Tell us briefly about your current subjects, questions or goals
        </label>
        <textarea
          rows={3}
          value={formData.questions}
          onChange={(e) => setFormData({ ...formData, questions: e.target.value })}
          placeholder="e.g. Studying IB Year 12 at Dubai College; considering Computer Science in the UK vs Canada..."
          className="w-full px-4 py-3 rounded-xl border border-border text-sm text-ink focus:outline-none focus:ring-2 focus:ring-teal/40"
        />
      </div>

      <label className="flex items-start gap-2.5 cursor-pointer">
        <input
          type="checkbox"
          required
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-0.5 rounded text-teal focus:ring-teal"
        />
        <span className="text-xs text-muted leading-snug">
          I agree to the handling of my enquiry details under EKAA Rise's Privacy Policy.
        </span>
      </label>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-ink hover:bg-teal text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-colors shadow-sm"
      >
        <span>Request Guidance Session</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
