"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle, Loader2, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { Turnstile } from "@/components/ui/Turnstile";

const schema = z.object({
  name: z.string().min(2, "Required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Required"),
  message: z.string().min(20, "Please write at least 20 characters"),
});
type FormData = z.infer<typeof schema>;

export default function ContactPage() {
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
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, turnstileToken }) });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch { setError("Something went wrong. Please try again."); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-cream-50 pt-28 pb-20">
      <div className="container-wide">
        <div className="mb-12">
          <p className="section-label">Contact</p>
          <h1 className="section-title mb-4">Get in Touch</h1>
          <p className="section-body max-w-xl">Questions about care, partnership, or careers? We&apos;d love to hear from you.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "info@familycarefarmsinit.org", href: "mailto:info@familycarefarmsinit.org" },
              { icon: Phone, label: "Phone / WhatsApp", value: "+234 — TBC", href: "#" },
              { icon: MapPin, label: "Location", value: "Nigeria (Site TBC)", href: "#" },
              { icon: MessageSquare, label: "WhatsApp", value: "Message us directly", href: "#" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-forest-100 rounded-sm flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-forest-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-forest-500 uppercase tracking-wider mb-0.5">{label}</div>
                  <a href={href} className="text-forest-800 text-sm hover:text-forest-600 transition-colors">{value}</a>
                </div>
              </div>
            ))}

            <div className="mt-8 p-5 bg-forest-50 border border-forest-100 rounded-sm">
              <div className="font-display font-semibold text-forest-900 mb-2 text-sm">Quick Links</div>
              <div className="space-y-2 text-sm">
                {[["Apply for Residency", "/apply/resident"], ["Join Our Team", "/apply/staff"], ["Franchise Inquiry", "/apply/franchise"], ["Partner & Invest", "/partners"]].map(([label, href]) => (
                  <a key={href as string} href={href as string} className="flex items-center gap-2 text-forest-700 hover:text-forest-900 transition-colors">
                    <ArrowRight className="w-3 h-3" /> {label as string}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white border border-forest-100 rounded-sm p-10 text-center">
                <CheckCircle className="w-12 h-12 text-forest-500 mx-auto mb-5" />
                <h2 className="font-display text-2xl font-bold text-forest-900 mb-3">Message Sent</h2>
                <p className="text-forest-700 mb-6">We&apos;ll get back to you within 2–3 business days.</p>
                <a href="/" className="btn-primary">Return Home <ArrowRight className="w-4 h-4" /></a>
              </div>
            ) : (
              <div className="bg-white border border-forest-100 rounded-sm p-8">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="input-label">Your Name *</label>
                      <input {...register("name")} className="input-field" placeholder="Full name" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="input-label">Email *</label>
                      <input {...register("email")} type="email" className="input-field" placeholder="your@email.com" />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="input-label">Phone / WhatsApp</label>
                      <input {...register("phone")} className="input-field" placeholder="+234..." />
                    </div>
                    <div>
                      <label className="input-label">Subject *</label>
                      <input {...register("subject")} className="input-field" placeholder="What is your message about?" />
                      {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="input-label">Message *</label>
                    <textarea {...register("message")} rows={6} className="input-field resize-none" placeholder="Write your message here..." />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>
                  <Turnstile onVerify={onVerify} />
                  {error && <p className="text-red-600 text-sm mt-4 bg-red-50 px-4 py-3 rounded-sm border border-red-100">{error}</p>}
                  <div className="mt-6">
                    <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto justify-center min-w-44">
                      {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <>Send Message <ArrowRight className="w-4 h-4" /></>}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
