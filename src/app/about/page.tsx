import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Globe, Handshake } from "lucide-react";

export const metadata: Metadata = { title: "About Us" };

const timeline = [
  { year: "2019", event: "Family & Care International founded in Germany by Guido Pusch" },
  { year: "2022", event: "Deutscher Demografie-Preis awarded for the CareFarm concept" },
  { year: "2023", event: "Deutscher Pflegepreis — German Nursing Award" },
  { year: "2024", event: "Queen Silvia Nursing Award, presented at the Royal Palace, Stockholm" },
  { year: "Dec 2025", event: "MOU signed at the Deutscher Nachhaltigkeitspreis ceremony in Düsseldorf — Family Care Farms Initiatives Nigeria formally established" },
  { year: "2026", event: "West Africa Master CareFarm development begins. First pilot site in Nigeria." },
];

const partners = [
  { name: "Family & Care International", country: "Germany", role: "International Headquarters, know-how & certification", url: "https://familycare.farm" },
  { name: "Zakspreneur Limited Nigeria", country: "Nigeria", role: "Lead Nigerian partner — operational management & government relations" },
  { name: "A & B Strategic Partners Ltd", country: "Nigeria", role: "Strategic partner — business development & project implementation" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="container-wide relative z-10">
          <p className="section-label" style={{ color: "#e9bf6e" }}>About Us</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-3xl mb-6">
            Building West Africa&apos;s First Family Care Farm
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Family Care Farms Initiatives Nigeria is the official West African partner of Family &amp; Care International, Germany — bringing an award-winning elderly care model to Nigeria and the wider region.
          </p>
        </div>
      </section>

      {/* MOU Signing Photos */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div className="col-span-2 relative rounded-sm overflow-hidden" style={{ height: "320px" }}>
              <Image src="/images/gallery/partnership-awards.jpg" alt="Nigerian delegation with Guido Pusch holding the MOU at DNP25" fill className="object-cover" />
            </div>
            <div className="relative rounded-sm overflow-hidden" style={{ height: "320px" }}>
              <Image src="/images/gallery/dnp25-award-stage.jpg" alt="Prof. Olalekan receiving award on stage at DNP25" fill className="object-cover" />
            </div>
            <div className="relative rounded-sm overflow-hidden" style={{ height: "320px" }}>
              <Image src="/images/gallery/mou-signing-3-closeup.jpg" alt="MOU signing — Prof. Olalekan, Guido Pusch and delegate" fill className="object-cover" />
            </div>
          </div>
          <p className="text-forest-500 text-xs text-center">
            MOU signing ceremony at the Deutscher Nachhaltigkeitspreis (DNP25) awards, Düsseldorf — December 2025
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Our Mission</p>
              <h2 className="section-title mb-6">Dignity, Community &amp; Sustainable Care</h2>
              <p className="section-body mb-5">
                Nigeria is facing a quiet crisis in elderly care. Traditional family structures that once provided intergenerational support are under strain. Urbanisation, migration, and economic pressure mean more elders are isolated — without care, without purpose, without community.
              </p>
              <p className="section-body mb-5">
                Family Care Farms Initiatives Nigeria exists to change that. We are establishing Nigeria&apos;s first care farm — a place where professional care is delivered not in a clinical institution, but in a living farm community, surrounded by nature, animals, and people of all generations.
              </p>
              <p className="section-body mb-8">
                Our mandate extends beyond Nigeria. As the designated Master CareFarm for West Africa under our MOU with Family &amp; Care International, we are building the infrastructure, training systems, and franchise network to replicate this model across the region.
              </p>
              <Link href="/model/how-it-works" className="btn-primary">
                Our Model <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-5">
              {[
                { icon: Award, title: "Award-Winning Concept", body: "Built on a model that has won six major international awards in five years — including the Queen Silvia Nursing Award and the German Sustainability Prize 2026." },
                { icon: Globe, title: "West African Mandate", body: "Nigeria is the official Master CareFarm for West Africa — responsible for training, certification, and expanding the CareFarm franchise network across the region." },
                { icon: Handshake, title: "Tri-Party Partnership", body: "A formal MOU between Family & Care International (Germany), Zakspreneur Limited Nigeria, and A & B Strategic Partners Ltd — signed December 2025 at the DNP25 awards ceremony." },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-5 p-6 bg-cream-50 rounded-sm border border-cream-200">
                  <div className="w-10 h-10 bg-forest-100 rounded-sm flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-forest-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-forest-900 mb-1">{title}</h3>
                    <p className="text-forest-700 text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Partnership Team photo */}
      <section className="py-0">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-3">
            <div className="relative rounded-sm overflow-hidden" style={{ height: "280px" }}>
              <Image src="/images/gallery/mou-signing-4-people.jpg" alt="MOU signing — all four signatories" fill className="object-cover object-top" />
            </div>
            <div className="relative rounded-sm overflow-hidden" style={{ height: "280px" }}>
              <Image src="/images/gallery/dnp25-handshake1.jpg" alt="Prof. Olalekan networking at DNP25" fill className="object-cover" />
            </div>
            <div className="relative rounded-sm overflow-hidden" style={{ height: "280px" }}>
              <Image src="/images/gallery/dnp25-handshake2.jpg" alt="Partnership handshake at DNP25 gala" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-cream-50">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="section-label">Our Journey</p>
            <h2 className="section-title">From Germany to West Africa</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-forest-200 -translate-x-1/2 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.year} className={`flex gap-8 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="flex-1 hidden md:block" />
                  <div className="w-10 h-10 rounded-full bg-forest-600 text-white flex items-center justify-center text-xs font-bold shrink-0 relative z-10">
                    {i + 1}
                  </div>
                  <div className="flex-1 bg-white border border-forest-100 rounded-sm p-5 shadow-sm">
                    <div className="text-earth-600 font-bold text-sm mb-1">{item.year}</div>
                    <div className="text-forest-800 text-sm leading-relaxed">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="section-label">MOU Partners</p>
            <h2 className="section-title">The Founding Partnership</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((p) => (
              <div key={p.name} className="card p-7">
                <div className="text-xs font-semibold text-earth-500 tracking-widest uppercase mb-3">{p.country}</div>
                <h3 className="font-display text-lg font-semibold text-forest-900 mb-3">{p.name}</h3>
                <p className="text-forest-700 text-sm leading-relaxed mb-4">{p.role}</p>
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-forest-600 text-xs font-semibold hover:text-forest-800 transition-colors">
                    Visit website →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest-950">
        <div className="container-wide text-center">
          <h2 className="section-title-light mb-4">Ready to Get Involved?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">Whether as a resident family, a caregiver, an investor, or a future franchise partner — there&apos;s a place for you in this network.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/apply/resident" className="btn-earth">Apply for Residency <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/partners" className="btn-ghost">Partner With Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
