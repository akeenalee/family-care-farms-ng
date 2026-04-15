"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Turnstile } from "@/components/ui/Turnstile";

const schema = z.object({
  residentName: z.string().min(2, "Required"),
  residentAge: z.coerce.number().min(50, "Must be 50+").max(120),
  familyName: z.string().min(2, "Required"),
  familyEmail: z.string().email("Valid email required"),
  familyPhone: z.string().min(7, "Required"),
  location: z.string().min(2, "Required"),
  careNeeds: z.string().min(1, "Please select"),
  additionalInfo: z.string().optional(),
  howHeard: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const careOptions = [
  "General elderly care",
  "Dementia / memory care",
  "Post-hospital recovery",
  "Palliative / end-of-life care",
  "Companionship / mild assistance",
];

export default function ResidentApplicationPage() {
  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema) as any,
  });

  const onVerify = useCallback((token: string) => setTurnstileToken(token), []);

  const onSubmit = async (data: FormData) => {
    if (!turnstileToken) { setError("Please complete the security check."); return; }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/resident-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4 pt-20">
        <div className="max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-forest-500 mx-auto mb-6" />
          <h1 className="font-display text-3xl font-bold text-forest-900 mb-4">Application Received</h1>
          <p className="text-forest-700 leading-relaxed mb-6">
            Thank you for reaching out. Our team will review your application and contact you within 3–5 business days.
          </p>
          <a href="/" className="btn-primary">Return Home <ArrowRight className="w-4 h-4" /></a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 pt-28 pb-20">
      <div className="container-narrow">
        {/* Header */}
        <div className="mb-12">
          <p className="section-label">Residency</p>
          <h1 className="section-title mb-4">Apply for a Resident Place</h1>
          <p className="section-body max-w-xl">
            Complete the form below and our care team will get in touch to discuss your loved one&apos;s needs and guide you through the next steps.
          </p>
        </div>

        <div className="bg-white border border-forest-100 rounded-sm p-8 md:p-10">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Resident Details */}
            <fieldset className="mb-8">
              <legend className="font-display text-lg font-semibold text-forest-900 mb-6 pb-2 border-b border-forest-100 w-full">
                About the Resident
              </legend>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="input-label">Resident&apos;s Full Name *</label>
                  <input {...register("residentName")} className="input-field" placeholder="e.g. Alhaji Ibrahim Musa" />
                  {errors.residentName && <p className="text-red-500 text-xs mt-1">{errors.residentName.message}</p>}
                </div>
                <div>
                  <label className="input-label">Resident&apos;s Age *</label>
                  <input {...register("residentAge")} type="number" className="input-field" placeholder="e.g. 72" />
                  {errors.residentAge && <p className="text-red-500 text-xs mt-1">{errors.residentAge.message}</p>}
                </div>
                <div>
                  <label className="input-label">Current Location (State) *</label>
                  <input {...register("location")} className="input-field" placeholder="e.g. Lagos, Abuja, Oyo..." />
                  {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
                </div>
                <div>
                  <label className="input-label">Primary Care Need *</label>
                  <select {...register("careNeeds")} className="input-field">
                    <option value="">Select one...</option>
                    {careOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  {errors.careNeeds && <p className="text-red-500 text-xs mt-1">{errors.careNeeds.message}</p>}
                </div>
              </div>
              <div className="mt-5">
                <label className="input-label">Additional Information</label>
                <textarea {...register("additionalInfo")} rows={4} className="input-field resize-none" placeholder="Any medical conditions, mobility needs, dietary requirements, or other details we should know..." />
              </div>
            </fieldset>

            {/* Family Contact */}
            <fieldset className="mb-8">
              <legend className="font-display text-lg font-semibold text-forest-900 mb-6 pb-2 border-b border-forest-100 w-full">
                Family Contact Details
              </legend>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="input-label">Your Full Name *</label>
                  <input {...register("familyName")} className="input-field" placeholder="Your name" />
                  {errors.familyName && <p className="text-red-500 text-xs mt-1">{errors.familyName.message}</p>}
                </div>
                <div>
                  <label className="input-label">Email Address *</label>
                  <input {...register("familyEmail")} type="email" className="input-field" placeholder="your@email.com" />
                  {errors.familyEmail && <p className="text-red-500 text-xs mt-1">{errors.familyEmail.message}</p>}
                </div>
                <div>
                  <label className="input-label">Phone / WhatsApp *</label>
                  <input {...register("familyPhone")} className="input-field" placeholder="+234..." />
                  {errors.familyPhone && <p className="text-red-500 text-xs mt-1">{errors.familyPhone.message}</p>}
                </div>
                <div>
                  <label className="input-label">How did you hear about us?</label>
                  <input {...register("howHeard")} className="input-field" placeholder="e.g. Social media, referral, newspaper..." />
                </div>
              </div>
            </fieldset>

            <Turnstile onVerify={onVerify} />

            {error && <p className="text-red-600 text-sm mt-4 bg-red-50 px-4 py-3 rounded-sm border border-red-100">{error}</p>}

            <div className="mt-6">
              <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto justify-center min-w-48">
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <>Submit Application <ArrowRight className="w-4 h-4" /></>}
              </button>
              <p className="text-forest-500 text-xs mt-3">We&apos;ll respond within 3–5 business days. Your information is kept strictly confidential.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
