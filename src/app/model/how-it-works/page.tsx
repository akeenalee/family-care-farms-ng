import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = { title: "How It Works" };

const steps = [
  {
    number: "01",
    title: "A Farm, Not a Facility",
    body: "The CareFarm is a working agricultural property — with animals, gardens, crops, and open land. It is not a hospital or nursing home. Residents live in the farm household as part of the community.",
  },
  {
    number: "02",
    title: "Professional Care Integrated into Daily Life",
    body: "Qualified caregivers provide medical and personal care — but within the context of ordinary farm life, not a clinical setting. Morning routines, meals, and activities happen naturally alongside farm rhythms.",
  },
  {
    number: "03",
    title: "Residents Have Roles and Purpose",
    body: "Every resident contributes according to their ability — feeding chickens, harvesting vegetables, telling stories to younger visitors, preparing food. Participation creates dignity, not dependence.",
  },
  {
    number: "04",
    title: "Intergenerational by Design",
    body: "Young people — students, volunteers, apprentices — are part of the community. Children visit. Youth learn caregiving and farming. Elders share wisdom. Generations mix naturally.",
  },
  {
    number: "05",
    title: "Nature as Therapy",
    body: "Animals, soil, seasons, and fresh air are not incidental — they are the therapy. Evidence shows regular contact with nature and animals reduces depression, agitation, and cognitive decline in elders.",
  },
  {
    number: "06",
    title: "Families Stay Connected",
    body: "Unlike traditional institutions, the CareFarm welcomes family visits any time. Families participate in farm life, share meals, and remain genuinely present in their loved one's world.",
  },
];

const differences = [
  ["Traditional Nursing Home", "CareFarm"],
  ["Clinical environment", "Living farm community"],
  ["Passive residents", "Active participants"],
  ["Separated from family", "Family welcome daily"],
  ["Indoor/sedentary", "Outdoors, animals, gardens"],
  ["Standardised care", "Personalised daily rhythm"],
  ["Isolated from society", "Intergenerational community"],
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="container-wide relative z-10">
          <p className="section-label" style={{ color: "#e9bf6e" }}>Our Model</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-3xl mb-6">
            How the CareFarm Model Works
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            A fundamentally different approach to elderly care — built on community, nature, purpose, and human connection rather than clinical separation.
          </p>
        </div>
      </section>

      {/* Intro quote */}
      <section className="py-16 bg-cream-100">
        <div className="container-narrow text-center">
          <blockquote className="font-display text-2xl md:text-3xl text-forest-900 italic leading-relaxed">
            &ldquo;All&apos;s well that ends well when life has a home until the very end, connecting trust and generations.&rdquo;
          </blockquote>
          <cite className="text-forest-500 text-sm mt-4 block not-italic">
            — Guido Pusch, Founder, Family &amp; Care International
          </cite>
        </div>
      </section>

      {/* The 6 Steps */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">How It Works</p>
            <h2 className="section-title">Six Principles of the CareFarm</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="p-8 border border-forest-100 rounded-sm hover:border-forest-300 hover:shadow-md transition-all duration-200">
                <div className="font-display text-5xl font-bold text-forest-100 mb-4 leading-none">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-semibold text-forest-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-forest-700 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 bg-cream-50">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="section-label">The Difference</p>
            <h2 className="section-title">CareFarm vs. Traditional Care</h2>
          </div>
          <div className="bg-white border border-forest-100 rounded-sm overflow-hidden shadow-sm">
            <div className="grid grid-cols-2 bg-forest-900 text-white text-sm font-semibold">
              <div className="px-6 py-4 border-r border-forest-700">{differences[0][0]}</div>
              <div className="px-6 py-4">{differences[0][1]}</div>
            </div>
            {differences.slice(1).map(([left, right], i) => (
              <div key={left} className={`grid grid-cols-2 text-sm ${i % 2 === 0 ? "bg-white" : "bg-forest-50/50"}`}>
                <div className="px-6 py-4 border-r border-forest-100 text-forest-600 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-300 shrink-0" />
                  {left}
                </div>
                <div className="px-6 py-4 text-forest-900 font-medium flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-forest-500 shrink-0" />
                  {right}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nigeria context */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Why Nigeria Needs This</p>
              <h2 className="section-title mb-6">Built for Our Reality</h2>
              <p className="section-body mb-5">
                Nigeria has a deep cultural tradition of caring for elders within the extended family. But rapid urbanisation, rising mobility, and the pressures of modern economic life mean millions of families can no longer maintain that tradition alone.
              </p>
              <p className="section-body mb-5">
                The CareFarm model does not replace the family — it supports it. It provides a community that feels like family: familiar, purposeful, connected to nature, and rooted in respect.
              </p>
              <p className="section-body mb-8">
                Adapted from the award-winning German model and tailored to the Nigerian and West African context, Family Care Farms Initiatives Nigeria is building something that belongs here.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/apply/resident" className="btn-primary">
                  Apply for Residency <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/model/daily-life" className="btn-secondary">
                  See Daily Life
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["🌾", "Rural Job Creation", "Every farm creates employment for local caregivers, farm workers, cooks, and educators"],
                ["🐓", "Food Security", "Residents and staff benefit from on-farm food production — vegetables, poultry, livestock"],
                ["👴", "Elder Dignity", "Residents are participants, not patients — retaining purpose and value in community"],
                ["🎓", "Skills Training", "Internationally certified training programs build West Africa's professional care workforce"],
              ].map(([icon, title, body]) => (
                <div key={title} className="bg-cream-50 border border-cream-200 rounded-sm p-5">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-display font-semibold text-forest-900 text-sm mb-2">{title}</h3>
                  <p className="text-forest-700 text-xs leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA row */}
      <section className="py-16 bg-forest-950">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="section-title-light text-2xl mb-2">Ready to learn more?</h2>
              <p className="text-white/60 text-sm">Explore daily life, or apply for a resident place today.</p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link href="/model/daily-life" className="btn-ghost">Daily Life on the Farm</Link>
              <Link href="/apply/resident" className="btn-earth">Apply Now <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
