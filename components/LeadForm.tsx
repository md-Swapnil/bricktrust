"use client";

import { useState } from "react";
import { PhoneCall, CheckCircle2 } from "lucide-react";

export default function LeadForm({ projectName }: { projectName: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card flex flex-col items-center p-7 text-center">
        <CheckCircle2 className="mb-3 h-9 w-9 text-gold-500" />
        <h3 className="font-serif text-lg text-navy-900">Thank You</h3>
        <p className="mt-2 text-sm text-stone-500">
          Our BrickTrust advisor will reach out to you shortly with verified details on {projectName}.
        </p>
      </div>
    );
  }

  return (
    <div className="card p-6 sm:p-7">
      <div className="mb-1 flex items-center gap-2 text-gold-600">
        <PhoneCall className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-widest2">Get Verified Details</span>
      </div>
      <h3 className="font-serif text-lg text-navy-900">Talk to a BrickTrust Advisor</h3>
      <p className="mt-1.5 text-sm text-stone-500">
        Pricing, floor plans, and site visit assistance for {projectName}.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
        <input
          required
          type="text"
          placeholder="Full Name"
          className="rounded-md border border-stone-200 px-3.5 py-2.5 text-sm focus:border-gold-400 focus:outline-none"
        />
        <input
          required
          type="tel"
          placeholder="Phone Number"
          className="rounded-md border border-stone-200 px-3.5 py-2.5 text-sm focus:border-gold-400 focus:outline-none"
        />
        <input
          required
          type="email"
          placeholder="Email Address"
          className="rounded-md border border-stone-200 px-3.5 py-2.5 text-sm focus:border-gold-400 focus:outline-none"
        />
        <button type="submit" className="btn-gold mt-1 w-full">
          Request Callback
        </button>
        <p className="text-center text-[11px] leading-relaxed text-stone-400">
          By submitting, you agree to be contacted by BrickTrust regarding this project. No
          brokerage. No spam.
        </p>
      </form>
    </div>
  );
}
