import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Globe, Handshake } from "lucide-react";

export const metadata: Metadata = { title: "About Us" };

const timeline = [
  { year: "2019", event: "Family & Care International founded in Germany by Guido Pusch" },
  { year: "2022", event: "Deutscher Demografiepreis — recognised for innovation in rural elderly care" },
  { year: "2023", event: "Deutscher Pflegepreis — German Nursing Award" },
  { year: "2024", event: "Queen Silvia Nursing Award, presented at the Royal Palace, Stockholm" },
  { year: "2025", event: "Deutscher Nachhaltigkeitspreis 2025 — Germany's top sustainability prize" },
  { year: "Dec 2025", event: "MOU signed at the DNP25 ceremony in Düsseldorf. Family Care Farm Initiatives Nigeria formally established as West Africa Master CareFarm." },
  { year: "2026", event: "Deutscher Nachhaltigkeitspreis 2026 won. West Africa Master CareFarm development begins." },
];

const partners = [
  { name: "Family & Care International", country: "Germany", role: "International headquarters. Know-how, certification, and franchise standards.", url: "https://familycare.farm" },
  { name: "Zakspreneur Limited Nigeria", country: "Nigeria", role: "Lead Nigerian partner. Operational management and government relations." },
  { name: "A & B Strategic Partners Ltd", country: "Nigeria", role: "Strategic partner. Business development and project implementation." },
];

const awards = [
  { year: "2026", name: "Deutscher Nachhaltigkeitspreis Unternehmen", category: "Winner" },
  { year: "2026", name: "Deutscher Nachhaltigkeitspreis", category: "Winner" },
  { year: "2025", name: "Deutscher Nachhaltigkeitspreis", category: "Finalist" },
  { year: "2024", name: "Queen Silvia Nursing Award", category: "Winner, Stockholm Royal Palace" },
  { year: "2023", name: "Deutscher Pflegepreis", category: "Winner" },
  { year: "2022", name: "Deutscher Demografiepreis", category: "Winner" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/dnp25/dnp25-photo-005.jpg" alt="MOU signing at DNP25 Dusseldorf" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/40 to-transparent" />
        </div>
        <div className="container-wide relative z-10 pb-16 pt-32">
          <p className="section-label" style={{ color: "#e9bf6e" }}>About Us</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-3xl mb-6">
            Building West Africa&apos;s First Family CareFarm
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Family Care Farm Initiatives Nigeria is the official West African partner of Family &amp; Care International, Germany. The MOU was signed in December 2025 at Germany&apos;s most prestigious sustainability awards ceremony.
          </p>
        </div>
      </section>

      <section className="py-3 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-4 gap-3">
            {[
              { src: "/images/dnp25/dnp25-photo-005.jpg", alt: "MOU signing ceremony" },
              { src: "/images/dnp25/dnp25-photo-003.jpg", alt: "Guido Pusch receiving DNP25 award" },
              { src: "/images/dnp25/dnp25-photo-013.jpg", alt: "Prof Olalekan at DNP25 gala" },
              { src: "/images/dnp25/dnp25-photo-001.jpg", alt: "DNP25 winners on stage" },
            ].map((photo, i) => (
              <div key={i} className="relative rounded-sm overflow-hidden" style={{ height: "180px" }}>
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
          <p className="text-forest-400 text-xs text-center mt-3">
            Deutscher Nachhaltigkeitspreis 2025, Düsseldorf. MOU signing, award presentation, and gala.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label">Our Mission</p>
              <h2 className="section-title mb-6">Care That Feels Like Home</h2>
              <p className="section-body mb-5">
                Nigeria is facing a quiet crisis in elderly care. The extended family structures that once held everything together are under real pressure. Urbanisation, economic migration, and the pace of modern life mean more older Nigerians are isolated, without consistent care, without purpose, without community.
              </p>
              <p className="section-body mb-5">
                Family Care Farm Initiatives Nigeria exists to change that. We are building Nigeria&apos;s first care farm where professional care is delivered not in a clinical institution, but in a working farm community surrounded by nature, animals, and people of all ages.
              </p>
              <p className="section-body mb-8">
                Our mandate goes beyond Nigeria. As the designated Master CareFarm for West Africa under our MOU with Family &amp; Care International, we are building the training systems and franchise network to replicate this model across the region.
              </p>
              <Link href="/model/how-it-works" className="btn-primary">
                How the Model Works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-5">
              {[
                { icon: Award, title: "Six Awards in Five Years", body: "The German parent model has won six major international prizes including the Queen Silvia Nursing Award and Germany's top sustainability prize, twice." },
                { icon: Globe, title: "West African Mandate", body: "Nigeria is the official Master CareFarm for West Africa. We are responsible for training, certification, and expanding the CareFarm network across the region." },
                { icon: Handshake, title: "Formally Established", body: "A signed MOU between Family & Care International Germany, Zakspreneur Limited Nigeria, and A & B Strategic Partners Ltd. Signed December 2025 at the DNP25 ceremony." },
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

      <section className="py-24 bg-cream-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Recognition</p>
              <h2 className="section-title mb-4">An Award-Winning Concept</h2>
              <p className="section-body mb-8">
                Six awards in five years from Germany&apos;s most respected institutions. This is the concept Nigeria is bringing to West Africa.
              </p>
              <div className="space-y-3">
                {awards.map((a) => (
                  <div key={a.name + a.year} className="flex items-center gap-4 py-3 border-b border-forest-100">
                    <div className="text-earth-600 font-bold text-sm w-12 shrink-0">{a.year}</div>
                    <div className="flex-1">
                      <div className="text-forest-900 font-semibold text-sm">{a.name}</div>
                      <div className="text-forest-500 text-xs">{a.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-sm overflow-hidden col-span-2" style={{ height: "250px" }}>
                <Image src="/images/dnp25/dnp25-photo-001.jpg" alt="DNP25 winners on stage" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-950/70 to-transparent p-4">
                  <p className="text-white text-xs">Family & Care International among Germany&apos;s top sustainability innovators, #DNP25</p>
                </div>
              </div>
              <div className="relative rounded-sm overflow-hidden" style={{ height: "180px" }}>
                <Image src="/images/dnp25/dnp25-photo-003.jpg" alt="Guido receiving award" fill className="object-cover" />
              </div>
              <div className="relative rounded-sm overflow-hidden" style={{ height: "180px" }}>
                <Image src="/images/dnp25/dnp25-photo-004.jpg" alt="Nigerian partners on stage" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="section-label">The Journey</p>
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

      <section className="py-0 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-3 gap-3">
            {[
              { src: "/images/farm/farm-photo-006.jpg", alt: "Nigerian delegate walking alpaca", caption: "Experiencing the CareFarm firsthand in Germany" },
              { src: "/images/farm/farm-photo-002.jpg", alt: "Nigeria map discussion", caption: "Planning the West Africa rollout" },
              { src: "/images/farm/farm-photo-011.jpg", alt: "Elder and delegate walking alpacas", caption: "The CareFarm concept in action" },
            ].map((photo, i) => (
              <div key={i} className="relative rounded-sm overflow-hidden" style={{ height: "240px" }}>
                <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-950/70 to-transparent p-4">
                  <p className="text-white text-xs">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-50">
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

      <section className="py-16 bg-forest-950">
        <div className="container-wide text-center">
          <h2 className="section-title-light mb-4">Get Involved</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Whether as a resident family, a caregiver, an investor, or a future franchise partner, there is a place for you in this network.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/apply/resident" className="btn-earth">Apply for Residency <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/partners" className="btn-ghost">Partner With Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
