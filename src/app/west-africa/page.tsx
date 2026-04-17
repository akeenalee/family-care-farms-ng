import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = { title: "West Africa Hub" };

const countries = [
  { name: "Nigeria", status: "Flagship", detail: "West Africa Master CareFarm. First pilot site under development. Training and certification centre for the region." },
  { name: "Ghana", status: "Phase 2", detail: "Strong regulatory framework and growing middle class. High potential for early CareFarm adoption." },
  { name: "Senegal", status: "Phase 2", detail: "French-speaking West Africa gateway. Urban elderly population growing rapidly." },
  { name: "Ivory Coast", status: "Phase 3", detail: "Economic hub of francophone Africa. CareFarm franchise opportunities under review." },
  { name: "Cameroon", status: "Phase 3", detail: "Bilingual nation bridging anglophone and francophone West Africa." },
  { name: "Wider ECOWAS", status: "Long-term", detail: "The full ECOWAS region of 15 countries represents the long-term scope of the West Africa mandate." },
];

export default function WestAfricaPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/farm/farm-photo-002.jpg" alt="Nigerian delegation planning West Africa CareFarm expansion" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/40 to-transparent" />
        </div>
        <div className="container-wide relative z-10 pb-16 pt-32">
          <p className="section-label" style={{ color: "#e9bf6e" }}>West Africa Hub</p>
          <h1 className="font-display text-4xl md:text-5xl text-white font-bold leading-tight max-w-3xl mb-4">
            Nigeria Leads West Africa
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Under the MOU signed in December 2025, Family Care Farm Initiatives Nigeria holds the Master CareFarm mandate for the entire West African region.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">The Mandate</p>
              <h2 className="section-title mb-6">What the West Africa Mandate Means</h2>
              <p className="section-body mb-5">
                Nigeria is not just building one CareFarm. We are building the framework for an entire regional network. The MOU with Family &amp; Care International gives us the exclusive right to develop, certify, and franchise CareFarms across West Africa.
              </p>
              <p className="section-body mb-5">
                West Africa has over 400 million people. The elderly population is growing as life expectancy improves. Traditional family care structures are under the same pressures Nigeria faces — urbanisation, migration, economic change.
              </p>
              <p className="section-body mb-8">
                The need is real. The model is proven. Nigeria has the mandate to make it happen.
              </p>
              <Link href="/partners" className="btn-primary">
                Partner With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              <div className="relative rounded-sm overflow-hidden" style={{ height: "260px" }}>
                <Image src="/images/farm/farm-photo-002.jpg" alt="Nigeria map discussion at the German CareFarm" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-950/70 to-transparent p-4">
                  <p className="text-white text-xs">The Nigerian delegation with the Family & Care team — planning the West Africa rollout</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-sm overflow-hidden" style={{ height: "160px" }}>
                  <Image src="/images/dnp25/dnp25-photo-005.jpg" alt="MOU signing" fill className="object-cover" />
                </div>
                <div className="relative rounded-sm overflow-hidden" style={{ height: "160px" }}>
                  <Image src="/images/dnp25/dnp25-photo-011.jpg" alt="Partnership networking" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="section-label">Regional Rollout</p>
            <h2 className="section-title">Countries in Scope</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((c) => (
              <div key={c.name} className="bg-white border border-forest-100 rounded-sm p-7 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-forest-500 shrink-0" />
                    <h3 className="font-display text-lg font-semibold text-forest-900">{c.name}</h3>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-sm ${
                    c.status === "Flagship" ? "bg-forest-100 text-forest-700" :
                    c.status === "Phase 2" ? "bg-earth-100 text-earth-700" :
                    "bg-gray-100 text-gray-600"
                  }`}>
                    {c.status}
                  </span>
                </div>
                <p className="text-forest-600 text-sm leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-narrow text-center">
          <p className="section-label">Franchise Opportunity</p>
          <h2 className="section-title mb-6">Build a CareFarm in Your Country</h2>
          <p className="section-body max-w-2xl mx-auto mb-5">
            Family Care Farm Initiatives Nigeria is actively seeking franchise partners across West Africa. If you have land, investment capacity, or operational experience in care or agriculture, we want to talk.
          </p>
          <p className="section-body max-w-2xl mx-auto mb-10">
            We provide the model, the training, the certification, and the ongoing support of the Family &amp; Care International network. You bring local knowledge and commitment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/apply/franchise" className="btn-primary">
              Enquire About Franchise <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/partners" className="btn-secondary">
              Partnership Options
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest-950">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="section-title-light text-2xl mb-2">Ready to be part of this?</h2>
            <p className="text-white/60 text-sm">Investors, governments, NGOs, and individuals are all welcome.</p>
          </div>
          <Link href="/partners" className="btn-earth shrink-0">
            Partner With Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
