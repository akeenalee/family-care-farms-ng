"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Turnstile } from "@/components/ui/Turnstile";

const schema = z.object({
  fullName: z.string().min(2, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Required"),
  role: z.string().min(1, "Please select a role"),
  experience: z.string().min(1, "Required"),
  location: z.string().min(2, "Required"),
  motivation: z.string().min(30, "Please write at least 30 characters"),
});

type FormData = z.infer<typeof schema>;

const roles = ["Caregiver", "Farm Worker", "Cook / Nutritionist", "Educator / Trainer", "Community Coordinator", "Administration", "Other"];
const experienceLevels = ["Less than 1 year", "1–2 years", "3–5 years", "6–10 years", "10+ years"];

export default function StaffApplicationPage() {
  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onVerify = useCallback((token: string) => setTurnstileToken(token), []);

  const onSubmit = async (data: FormData) => {
    if (!turnstileToken) { setError("Please complete the security check."); return; }
    setLoading(true); setError("");
    try {
      const res = await fetch("/api/staff-application", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, turnstileToken }) });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch { setError("Something went wrong. Please try again."); }
    finally { setLoading(false); }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center px-4 pt-20">
        <div className="max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-forest-500 mx-auto mb-6" />
          <h1 className="font-display text-3xl font-bold text-forest-900 mb-4">Application Received!</h1>
          <p className="text-forest-700 leading-relaxed mb-6">Thank you for your interest in joining our team. We&apos;ll review your application and be in touch within 5–7 business days.</p>
          <a href="/" className="btn-primary">Return Home <ArrowRight className="w-4 h-4" /></a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 pt-28 pb-20">
      <div className="container-narrow">
        <div className="mb-12">
          <p className="section-label">Careers</p>
          <h1 className="section-title mb-4">Join Our Team</h1>
          <p className="section-body max-w-xl">
            Be part of building something new in Nigeria. We&apos;re looking for compassionate, committed people across care, farming, education, and community work.
          </p>
        </div>

        {/* Open roles highlight */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[["👩‍⚕️", "Caregivers", "Professional care staff"], ["🌱", "Farm Workers", "Agriculture & animals"], ["📚", "Educators", "Training & community"]].map(([icon, title, sub]) => (
            <div key={title} className="bg-white border border-forest-100 rounded-sm p-5 text-center">
              <div className="text-3xl mb-2">{icon}</div>
              <div className="font-display font-semibold text-forest-900">{title}</div>
              <div className="text-forest-500 text-xs">{sub}</div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-forest-100 rounded-sm p-8 md:p-10">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <fieldset className="mb-8">
              <legend className="font-display text-lg font-semibold text-forest-900 mb-6 pb-2 border-b border-forest-100 w-full">Personal Details</legend>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="input-label">Full Name *</label>
                  <input {...register("fullName")} className="input-field" placeholder="Your full name" />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                </div>
                <div>
                  <label className="input-label">Email Address *</label>
                  <input {...register("email")} type="email" className="input-field" placeholder="your@email.com" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="input-label">Phone / WhatsApp *</label>
                  <input {...register("phone")} className="input-field" placeholder="+234..." />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="input-label">Current Location (State) *</label>
                  <input {...register("location")} className="input-field" placeholder="e.g. Abuja, Lagos..." />
                  {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
                </div>
              </div>
            </fieldset>

            <fieldset className="mb-8">
              <legend className="font-display text-lg font-semibold text-forest-900 mb-6 pb-2 border-b border-forest-100 w-full">Role & Experience</legend>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="input-label">Role Applying For *</label>
                  <select {...register("role")} className="input-field">
                    <option value="">Select a role...</option>
                    {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                  {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>}
                </div>
                <div>
                  <label className="input-label">Years of Relevant Experience *</label>
                  <select {...register("experience")} className="input-field">
                    <option value="">Select...</option>
                    {experienceLevels.map((e) => <option key={e} value={e}>{e}</option>)}
                  </select>
                  {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>}
                </div>
              </div>
              <div className="mt-5">
                <label className="input-label">Why do you want to join Family Care Farm Initiatives Nigeria? *</label>
                <textarea {...register("motivation")} rows={5} className="input-field resize-none" placeholder="Tell us what draws you to this work and what you'd bring to the team..." />
                {errors.motivation && <p className="text-red-500 text-xs mt-1">{errors.motivation.message}</p>}
              </div>
            </fieldset>

            <Turnstile onVerify={onVerify} />
            {error && <p className="text-red-600 text-sm mt-4 bg-red-50 px-4 py-3 rounded-sm border border-red-100">{error}</p>}

            <div className="mt-6">
              <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto justify-center min-w-48">
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <>Submit Application <ArrowRight className="w-4 h-4" /></>}
              </button>
              <p className="text-forest-500 text-xs mt-3">We&apos;ll be in touch within 5–7 business days.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
