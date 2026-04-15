import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Shield, Users, Clock } from "lucide-react";

export const metadata: Metadata = { title: "Elderly Care" };

const features = [
  { icon: Heart, title: "Person-Centred Care", body: "Every resident has an individual care plan built around their personal history, preferences, and needs. Care adapts to the person, not the institution." },
  { icon: Shield, title: "Professional Standards", body: "All caregivers are trained to Family & Care International standards and operate under certified protocols. Medical oversight is integrated into daily life." },
  { icon: Users, title: "Community Living", body: "Residents live as part of a household — not in isolation. Shared meals, communal spaces, and daily farm activity create genuine community." },
  { icon: Clock, title: "24-Hour Support", body: "Round-the-clock care is available for those who need it — provided by staff who know the person, not anonymous rotating shift workers." },
];

export default function ElderlyCare() {
  return (
    <>
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container-wide">
          <p className="section-label" style={{ color: "#e9bf6e" }}>Services</p>
          <h1 className="font-display text-4xl md:text-5xl text-white font-bold leading-tight max-w-3xl mb-6">Residential Elderly Care</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">Professional, compassionate care for older adults — delivered in a living farm community, not a clinical institution.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">What We Offer</p>
              <h2 className="section-title mb-6">Care That Feels Like Home</h2>
              <p className="section-body mb-5">Our residential care programme provides full-time, professional care for older adults in a farm setting — combining medical competence with genuine human warmth.</p>
              <p className="section-body mb-5">Residents are not patients. They are household members — with their own room, their own rhythm, and their own role in the daily life of the farm.</p>
              <p className="section-body mb-8">Meals are prepared with farm produce. Animals provide daily companionship. Family visits are welcomed at any time. Every resident is truly known by the people who care for them.</p>
              <Link href="/apply/resident" className="btn-primary">Apply for a Resident Place <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-cream-50 border border-cream-200 rounded-sm p-6">
                  <div className="w-9 h-9 bg-forest-100 rounded-sm flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-forest-600" />
                  </div>
                  <h3 className="font-display font-semibold text-forest-900 text-sm mb-2">{title}</h3>
                  <p className="text-forest-700 text-xs leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest-950">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="section-title-light text-2xl mb-2">Ready to talk about care for your loved one?</h2>
            <p className="text-white/60 text-sm">Apply for residency or contact our care team with your questions.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link href="/apply/resident" className="btn-earth">Apply Now <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/contact" className="btn-ghost">Ask a Question</Link>
          </div>
        </div>
      </section>
    </>
  );
}
