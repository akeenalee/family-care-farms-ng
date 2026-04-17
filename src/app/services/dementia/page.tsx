import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Dementia Support" };

const principles = [
  { title: "Familiarity over novelty", body: "People with dementia thrive in predictable environments. The farm rhythm — the same animals, the same smells, the same faces — provides exactly that." },
  { title: "Occupation without pressure", body: "Simple farm tasks give the day shape without cognitive demand. Collecting eggs. Watering plants. Folding laundry. Things the hands remember even when the mind struggles." },
  { title: "Nature as anchor", body: "Outdoor time, sunlight, and contact with animals consistently reduce agitation in people with dementia. No medication achieves this so reliably." },
  { title: "Community without overwhelm", body: "Small living groups mean fewer unfamiliar faces, less noise, less confusion. People with dementia can become part of a community without being lost in it." },
  { title: "Dignity in every interaction", body: "Caregivers are trained to meet people where they are. No correction, no frustration, no trying to bring someone back to a reality that no longer makes sense to them." },
];

export default function DementiaPage() {
  return (
    <>
      <section className="relative min-h-[58vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/farm/farm-photo-011.jpg" alt="Elder walking with support on the CareFarm" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/40 to-transparent" />
        </div>
        <div className="container-wide relative z-10 pb-16 pt-32">
          <p className="section-label" style={{ color: "#e9bf6e" }}>Services</p>
          <h1 className="font-display text-4xl md:text-5xl text-white font-bold leading-tight max-w-3xl mb-4">
            Dementia Support
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            The CareFarm is particularly well suited to people living with dementia. Not because of a specialist programme, but because of what the farm already is.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="container-narrow">
          <p className="section-body text-center max-w-2xl mx-auto">
            Dementia care in most institutions is reactive. Manage the behaviour. Reduce the risk. Keep the person safe. The CareFarm approach is different. It asks not how to manage the person, but how to create an environment where they can still live well.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="section-label">Why the Farm Works</p>
              <h2 className="section-title mb-6">What the Farm Offers That Institutions Cannot</h2>
              <p className="section-body mb-5">
                Dementia does not erase everything at once. It takes recent memory first, and preserves older, deeper memories much longer. The smells of cooking, the feel of soil, the sound of animals — these reach people through channels that remain open long after other things have closed.
              </p>
              <p className="section-body mb-5">
                The CareFarm is full of these triggers. Not designed stimuli in a therapy room. Real things, encountered naturally in the course of the day.
              </p>
              <p className="section-body">
                Families consistently report that their relatives are calmer, more engaged, and more recognisably themselves on the CareFarm than they were in institutional settings.
              </p>
            </div>
            <div className="space-y-3">
              <div className="relative rounded-sm overflow-hidden" style={{ height: "240px" }}>
                <Image src="/images/farm/farm-photo-006.jpg" alt="Resident engaging with alpaca" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-950/70 to-transparent p-4">
                  <p className="text-white text-xs">Animal contact reaches people in ways that words sometimes cannot</p>
                </div>
              </div>
              <div className="relative rounded-sm overflow-hidden" style={{ height: "160px" }}>
                <Image src="/images/farm/farm-photo-003.jpg" alt="Farm landscape" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="section-label">Our Approach</p>
            <h2 className="section-title">Five Principles for Dementia Care</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <div key={p.title} className={`p-8 border border-forest-100 rounded-sm ${i === 4 ? "lg:col-start-2" : ""}`}>
                <div className="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center text-forest-600 font-bold text-sm mb-5">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg font-semibold text-forest-900 mb-3">{p.title}</h3>
                <p className="text-forest-700 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-50">
        <div className="container-narrow">
          <p className="section-label text-center">For Families</p>
          <h2 className="section-title text-center mb-8">What Families Need to Know</h2>
          <div className="space-y-6 text-forest-700 leading-relaxed">
            <p>Placing a family member with dementia into any kind of care is one of the hardest decisions a family makes. There is grief in it, even when it is the right choice.</p>
            <p>We do not try to replace the family. We support them. You remain part of your relative&apos;s life. You can visit any time, join for meals, sit with them outside. The CareFarm is not a place where people disappear.</p>
            <p>Our caregivers communicate regularly with families. If something changes, you know. If your relative has a particularly good day, you know that too.</p>
            <p>Nobody should be excluded from good care because of finances. We work with families on an individual basis to find arrangements that work.</p>
          </div>
          <div className="mt-12 text-center">
            <Link href="/apply/resident" className="btn-primary">
              Discuss a Place for Your Family Member <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest-950">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="section-title-light text-2xl mb-2">Related services</h2>
            <p className="text-white/60 text-sm">Elderly care, farm therapy, and daily life on the CareFarm.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link href="/services/elderly-care" className="btn-ghost">Elderly Care</Link>
            <Link href="/services/farm-therapy" className="btn-ghost">Farm Therapy</Link>
            <Link href="/model/daily-life" className="btn-earth">Daily Life <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
