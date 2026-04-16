import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = { title: "How It Works" };

const steps = [
  {
    number: "01",
    title: "A Farm, Not a Facility",
    body: "This is a real farm. Animals, gardens, crops, open land. Not a clinic or nursing home. People who live here are part of the household, not patients in a facility.",
    photo: "/images/farm/farm-photo-003.jpg",
    photoAlt: "Working farmland at the Family & Care CareFarm",
    photoCaption: "A real working farm, not an institution",
  },
  {
    number: "02",
    title: "Professional Care Integrated into Daily Life",
    body: "Qualified caregivers handle medical and personal care, but it happens within ordinary farm life. Morning routines, meals, outdoor work. Care is woven in, not imposed on top.",
    photo: "/images/farm/farm-photo-001.jpg",
    photoAlt: "Guido Pusch with farm resident on tractor",
    photoCaption: "The farmer and the resident, working side by side",
  },
  {
    number: "03",
    title: "Residents Have Roles and Purpose",
    body: "Feeding chickens. Harvesting vegetables. Helping prepare food. Telling stories to younger visitors. Everyone has something to give, and that matters more than most people expect.",
    photo: "/images/farm/farm-photo-006.jpg",
    photoAlt: "Nigerian delegate walking alpaca at golden hour",
    photoCaption: "Walking the alpacas, everyone has a role on the farm",
  },
  {
    number: "04",
    title: "Intergenerational by Design",
    body: "Students, apprentices, volunteers, children visiting grandparents. The farm brings different ages together without trying to. That is just what happens when a community shares a place.",
    photo: "/images/farm/farm-photo-011.jpg",
    photoAlt: "Elder and Nigerian delegate walking alpacas together at sunset",
    photoCaption: "Generations walking together, the CareFarm way",
  },
  {
    number: "05",
    title: "Nature as Therapy",
    body: "The animals, the soil, the changing seasons. These are not background scenery. Research consistently shows that regular contact with nature and animals reduces depression and agitation in older people. The farm is the treatment.",
    photo: "/images/gallery/mou-signing-3-closeup.jpg",
    photoAlt: "Partnership bringing the CareFarm concept to Nigeria",
    photoCaption: "Bringing nature-based care to West Africa",
  },
  {
    number: "06",
    title: "Families Stay Connected",
    body: "Family can visit any time. They can join for meals, help with the animals, sit outside. People do not disappear into a facility here. Families stay involved.",
    photo: "/images/farm/farm-photo-002.jpg",
    photoAlt: "Nigerian delegation planning West Africa CareFarm",
    photoCaption: "Planning West Africa's first CareFarm, Nigeria leads the way",
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
      {/* Hero with real farm photo */}
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/farm/farm-photo-003.jpg"
            alt="Working farmland at the Family & Care CareFarm"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/30 to-transparent" />
        </div>
        <div className="container-wide relative z-10 pb-16 pt-32">
          <p className="section-label" style={{ color: "#e9bf6e" }}>Our Model</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-3xl mb-6">
            How the CareFarm Model Works
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            A fundamentally different approach to elderly care, built on community, nature, purpose, and human connection.
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
           , Guido Pusch, Founder, Family &amp; Care International
          </cite>
        </div>
      </section>

      {/* The 6 Steps with photos */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">How It Works</p>
            <h2 className="section-title">Six Principles of the CareFarm</h2>
          </div>
          <div className="space-y-16">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Text */}
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="font-display text-6xl font-bold text-forest-100 mb-4 leading-none">
                    {step.number}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-forest-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-forest-700 leading-relaxed">{step.body}</p>
                </div>
                {/* Photo */}
                <div className={`relative rounded-sm overflow-hidden shadow-md ${i % 2 === 1 ? "md:order-1" : ""}`} style={{ height: "300px" }}>
                  <Image
                    src={step.photo}
                    alt={step.photoAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-950/60 to-transparent p-4">
                    <p className="text-white text-xs">{step.photoCaption}</p>
                  </div>
                </div>
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
                Nigeria has always cared for its elders within the family. That tradition runs deep. But urbanisation, economic pressure, and distance are making it harder for families to hold that responsibility alone.
              </p>
              <p className="section-body mb-5">
                The CareFarm does not replace the family. It supports it. A community with purpose, connection to the land, and genuine respect for older people.
              </p>
              <p className="section-body mb-8">
                Family Care Farm Initiatives Nigeria is adapting this award-winning German model for our own soil, our own culture, our own families.
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
            {/* 2x2 photo grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { src: "/images/dnp25/dnp25-photo-005.jpg", alt: "MOU signing ceremony Düsseldorf" },
                { src: "/images/dnp25/dnp25-photo-003.jpg", alt: "Guido Pusch receiving DNP25 award" },
                { src: "/images/dnp25/dnp25-photo-001.jpg", alt: "DNP25 winners on stage" },
                { src: "/images/farm/farm-photo-002.jpg", alt: "Nigeria map discussion in Germany" },
              ].map((photo, i) => (
                <div key={i} className="relative rounded-sm overflow-hidden" style={{ height: "180px" }}>
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
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
