"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle, Loader2, TrendingUp, Heart, Globe, Landmark } from "lucide-react";
import { Turnstile } from "@/components/ui/Turnstile";

const schema = z.object({
  contactName: z.string().min(2, "Required"),
  organisation: z.string().optional(),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Required"),
  partnerType: z.string().min(1, "Please select"),
  message: z.string().min(20, "Please provide more detail"),
});
type FormData = z.infer<typeof schema>;

const partnerTypes = ["ESG / Impact Investor", "Development Bank", "NGO / Foundation", "Government Agency", "Corporate CSR", "Individual Donor", "Other"];

const reasons = [
  { icon: TrendingUp, title: "ESG-Aligned Investment", body: "Care infrastructure that delivers measurable social impact — employment creation, elderly welfare, food security, and skills development across West Africa." },
  { icon: Heart, title: "Social Development", body: "Directly address elder isolation and inadequate care in Nigeria. Build community resilience and intergenerational solidarity at scale." },
  { icon: Globe, title: "Regional Multiplier", body: "Your investment in the Nigeria Master CareFarm creates the foundation for a franchise network across West Africa — amplifying impact beyond a single site." },
  { icon: Landmark, title: "Development Finance Ready", body: "Structured to receive national, private, and international development funding. Franchise fees and licensing rights governed by a formal Franchise & License Agreement." },
];

export default function PartnersPage() {
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
      const res = await fetch("/api/partner-inquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, turnstileToken }) });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch { setError("Something went wrong. Please try again."); }
    finally { setLoading(false); }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="container-wide relative z-10">
          <p className="section-label" style={{ color: "#e9bf6e" }}>Invest & Partner</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-3xl mb-6">
            Build West Africa&apos;s Care Future With Us
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            We are seeking ESG investors, development banks, NGOs, government agencies, and visionary partners to co-build Nigeria&apos;s Master CareFarm and the wider West Africa network.
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="section-label">Why Partner With Us</p>
            <h2 className="section-title">Impact at Every Level</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-8 border border-forest-100 rounded-sm hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 bg-earth-50 rounded-sm flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-earth-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-forest-900 mb-3">{title}</h3>
                <p className="text-forest-700 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership types */}
      <section className="py-24 bg-cream-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="section-label">Who We Work With</p>
            <h2 className="section-title">Partnership Pathways</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ["💰", "ESG & Impact Investors", "Co-invest in care infrastructure with measurable social ROI. Franchise model provides financial sustainability."],
              ["🏦", "Development Banks", "Finance rural development, food security, and care infrastructure aligned with SDG 3, 8, and 11."],
              ["🤝", "NGOs & Foundations", "Partner on community integration, elder welfare programmes, and youth employment in care."],
              ["🏛️", "Government Agencies", "Collaborate on policy, land access, regulatory support, and scaling care provision in rural Nigeria."],
              ["🏢", "Corporate CSR", "Align your corporate social responsibility with tangible, measurable community care outcomes."],
              ["🌐", "International Partners", "Connect your organisation to the global Family & Care International network across Europe and Africa."],
            ].map(([icon, title, body]) => (
              <div key={title as string} className="bg-white border border-forest-100 rounded-sm p-6">
                <div className="text-3xl mb-4">{icon as string}</div>
                <h3 className="font-display font-semibold text-forest-900 mb-2">{title as string}</h3>
                <p className="text-forest-700 text-sm leading-relaxed">{body as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-24 bg-white">
        <div className="container-narrow">
          <div className="mb-12 text-center">
            <p className="section-label">Get in Touch</p>
            <h2 className="section-title mb-4">
              {submitted ? "Message Received" : "Start the Conversation"}
            </h2>
          </div>

          {submitted ? (
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-forest-500 mx-auto mb-6" />
              <p className="text-forest-700 leading-relaxed mb-6 max-w-md mx-auto">
                Thank you for your interest. Our partnerships team will contact you within 5–10 business days.
              </p>
              <a href="/" className="btn-primary">Return Home <ArrowRight className="w-4 h-4" /></a>
            </div>
          ) : (
            <div className="bg-white border border-forest-100 rounded-sm p-8 md:p-10 shadow-sm">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="input-label">Your Full Name *</label>
                    <input {...register("contactName")} className="input-field" placeholder="Full name" />
                    {errors.contactName && <p className="text-red-500 text-xs mt-1">{errors.contactName.message}</p>}
                  </div>
                  <div>
                    <label className="input-label">Organisation</label>
                    <input {...register("organisation")} className="input-field" placeholder="Company, bank, NGO..." />
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
                  <div className="sm:col-span-2">
                    <label className="input-label">Partner Type *</label>
                    <select {...register("partnerType")} className="input-field">
                      <option value="">Select your organisation type...</option>
                      {partnerTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.partnerType && <p className="text-red-500 text-xs mt-1">{errors.partnerType.message}</p>}
                  </div>
                </div>
                <div className="mb-6">
                  <label className="input-label">Tell us about your interest *</label>
                  <textarea {...register("message")} rows={5} className="input-field resize-none" placeholder="What kind of partnership are you interested in? What goals or resources are you bringing?" />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <Turnstile onVerify={onVerify} />
                {error && <p className="text-red-600 text-sm mt-4 bg-red-50 px-4 py-3 rounded-sm border border-red-100">{error}</p>}
                <div className="mt-6">
                  <button type="submit" disabled={loading} className="btn-primary w-full sm:w-auto justify-center min-w-48">
                    {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <>Send Message <ArrowRight className="w-4 h-4" /></>}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
