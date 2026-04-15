import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Dementia Support" };

const principles = [
  ["🌿", "Sensory Familiarity", "The smell of soil, sounds of animals, and texture of garden work reach people with dementia when words cannot. The farm is a sensory anchor."],
  ["🔄", "Routine Over Rules", "Predictable daily rhythms — morning animal feeding, communal meals, evening walks — create calm structure without institutional rigidity."],
  ["😊", "Familiar Faces", "Small household, consistent staff. Residents are known by name, history, and preference. There are no strangers here."],
  ["🐓", "Animal Therapy", "Daily contact with chickens, goats, and other animals significantly reduces agitation and brings moments of genuine joy."],
  ["👨‍👩‍👧", "Family Closeness", "Open farm policy ensures families remain a constant presence — not weekend visitors — which is critical for people with dementia."],
  ["🌳", "Safe Outdoor Freedom", "Secure outdoor spaces allow free movement in nature without the risks of wandering in unsafe environments."],
];

export default function DementiaPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container-wide">
          <p className="section-label" style={{ color: "#e9bf6e" }}>Services</p>
          <h1 className="font-display text-4xl md:text-5xl text-white font-bold leading-tight max-w-3xl mb-6">Dementia &amp; Memory Care</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">A farm environment provides what clinical settings cannot: the familiar, the sensory, the consistent — conditions in which people with dementia can still flourish.</p>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="container-narrow text-center">
          <p className="section-body max-w-2xl mx-auto">Evidence from Family &amp; Care International&apos;s German farms shows residents with dementia experience significantly reduced agitation, improved mood, and more genuine engagement than in traditional clinical settings.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="section-label">Our Approach</p>
            <h2 className="section-title">Why Farms Help People with Dementia</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map(([icon, title, body]) => (
              <div key={title as string} className="border border-forest-100 rounded-sm p-6 hover:border-forest-300 hover:shadow-sm transition-all">
                <div className="text-3xl mb-4">{icon as string}</div>
                <h3 className="font-display font-semibold text-forest-900 mb-2">{title as string}</h3>
                <p className="text-forest-700 text-sm leading-relaxed">{body as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest-950">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="section-title-light text-2xl mb-2">Caring for someone with dementia?</h2>
            <p className="text-white/60 text-sm">Talk to our care team about whether our programme is right for your loved one.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link href="/apply/resident" className="btn-earth">Apply for Residency <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/contact" className="btn-ghost">Speak to Our Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
