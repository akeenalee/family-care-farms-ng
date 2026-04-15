"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle, Loader2, Globe, Building2, MapPin } from "lucide-react";
import { Turnstile } from "@/components/ui/Turnstile";

const schema = z.object({
  contactName: z.string().min(2, "Required"),
  organisation: z.string().optional(),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Required"),
  country: z.string().min(2, "Required"),
  state: z.string().min(2, "Required"),
  landAvailable: z.string().min(1, "Please select"),
  message: z.string().min(20, "Please provide more detail"),
});

type FormData = z.infer<typeof schema>;

const landOptions = ["Yes — I own land", "Yes — I can access land", "No — seeking land", "Not sure yet"];

export default function FranchiseInquiryPage() {
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
      const res = await fetch("/api/franchise-inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, turnstileToken }) });
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
          <h1 className="font-display text-3xl font-bold text-forest-900 mb-4">Inquiry Received</h1>
          <p className="text-forest-700 leading-relaxed mb-6">Thank you for your franchise interest. Our partnerships team will contact you within 5–10 business days to explore next steps.</p>
          <a href="/" className="btn-primary">Return Home <ArrowRight className="w-4 h-4" /></a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-50 pt-28 pb-20">
      <div className="container-narrow">
        <div className="mb-12">
          <p className="section-label">Expand the Network</p>
          <h1 className="section-title mb-4">Franchise Inquiry</h1>
          <p className="section-body max-w-xl">
            Interested in establishing a Family Care Farm in your state or country? As West Africa&apos;s Master CareFarm, we are actively building the regional franchise network.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[[Globe, "West Africa", "Nigeria to all neighbouring countries"], [Building2, "Proven Model", "Award-winning concept from Germany"], [MapPin, "Land Required", "Min. 2 hectares recommended"]].map(([Icon, title, sub]) => (
            <div key={title as string} className="bg-white border border-forest-100 rounded-sm p-5">
              <Icon className="w-6 h-6 text-forest-500 mb-3" />
              <div className="font-display font-semibold text-forest-900 text-sm mb-1">{title as string}</div>
              <div className="text-forest-500 text-xs">{sub as string}</div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-forest-100 rounded-sm p-8 md:p-10">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="input-label">Your Full Name *</label>
                <input {...register("contactName")} className="input-field" placeholder="Full name" />
                {errors.contactName && <p className="text-red-500 text-xs mt-1">{errors.contactName.message}</p>}
              </div>
              <div>
                <label className="input-label">Organisation (if applicable)</label>
                <input {...register("organisation")} className="input-field" placeholder="Company or NGO name" />
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
                <label className="input-label">Country *</label>
                <input {...register("country")} className="input-field" placeholder="e.g. Nigeria, Ghana, Cameroon..." />
                {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
              </div>
              <div>
                <label className="input-label">State / Region *</label>
                <input {...register("state")} className="input-field" placeholder="e.g. Ogun, Accra Region..." />
                {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
              </div>
              <div className="sm:col-span-2">
                <label className="input-label">Land Availability *</label>
                <select {...register("landAvailable")} className="input-field">
                  <option value="">Select...</option>
                  {landOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                {errors.landAvailable && <p className="text-red-500 text-xs mt-1">{errors.landAvailable.message}</p>}
              </div>
            </div>
            <div className="mb-6">
              <label className="input-label">Tell us about your interest and vision *</label>
              <textarea {...register("message")} rows={5} className="input-field resize-none" placeholder="What motivates you to establish a CareFarm? What resources do you bring? What are your goals?" />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <Turnstile onVerify={onVerify} />
            {error && <p className="text-red-600 text-sm mt-4 bg-red-50 px-4 py-3 rounded-sm border border-red-100">{error}</p>}

            <div className="mt-6">
              <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto justify-center min-w-48">
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : <>Send Inquiry <ArrowRight className="w-4 h-4" /></>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
