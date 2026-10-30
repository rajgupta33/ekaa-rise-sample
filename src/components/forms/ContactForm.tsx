"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Send, MapPin, Clock, Phone, Mail, ShieldAlert } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "Psychometric Assessment (AED 100)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-border p-8 text-center shadow-elevated animate-in zoom-in-95 duration-200">
        <div className="w-14 h-14 rounded-full bg-teal-light text-teal flex items-center justify-center mx-auto mb-4">
          <Check className="w-7 h-7 stroke-[3]" />
        </div>
        <h3 className="font-display font-extrabold text-2xl text-ink mb-2">
          Message Logged (Preview Mode)
        </h3>
        <p className="text-sm text-muted mb-6 leading-relaxed">
          Thank you, {formData.name}. Your enquiry regarding <strong>{formData.topic}</strong> has been received in preview demonstration mode.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs font-bold text-teal hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-border p-6 sm:p-8 shadow-elevated space-y-5">
      <div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-teal font-extrabold block mb-1">
          Direct Enquiry
        </span>
        <h3 className="font-display font-bold text-xl text-ink">
          Send a Message to EKAA Rise
        </h3>
      </div>

      <div>
        <label className="text-xs font-bold text-ink block mb-1">Full Name *</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Your full name"
          className="w-full px-4 py-3 rounded-xl border border-border text-sm text-ink focus:outline-none focus:ring-2 focus:ring-teal/40"
        />
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
          <label className="text-xs font-bold text-ink block mb-1">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+971 50 123 4567"
            className="w-full px-4 py-3 rounded-xl border border-border text-sm text-ink focus:outline-none focus:ring-2 focus:ring-teal/40"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-bold text-ink block mb-1">Inquiry Topic</label>
        <select
          value={formData.topic}
          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
          className="w-full px-3.5 py-3 rounded-xl border border-border text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-teal/40"
        >
          <option>Psychometric Assessment (AED 100)</option>
          <option>Subject Selection (IB / A Levels / CBSE / AP)</option>
          <option>Career Counselling in Dubai</option>
          <option>Study Abroad Admissions (Undergraduate)</option>
          <option>Study Abroad Admissions (Postgraduate)</option>
          <option>School or Institutional Collaboration</option>
          <option>Other Enquiry</option>
        </select>
      </div>

      <div>
        <label className="text-xs font-bold text-ink block mb-1">Your Message *</label>
        <textarea
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="How can EKAA Rise support your education planning?"
          className="w-full px-4 py-3 rounded-xl border border-border text-sm text-ink focus:outline-none focus:ring-2 focus:ring-teal/40"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-ink hover:bg-teal text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-colors shadow-sm"
      >
        <span>Submit Enquiry</span>
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}
