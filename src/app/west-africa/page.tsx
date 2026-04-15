import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, GraduationCap, Network, TrendingUp } from "lucide-react";

export const metadata: Metadata = { title: "West Africa Hub" };

const countries = [
  { name: "Nigeria", status: "Master CareFarm", note: "Pilot site — Phase 1 underway", active: true },
  { name: "Ghana", status: "Planned", note: "Franchise network expansion" },
  { name: "Cameroon", status: "Planned", note: "Francophone West Africa entry" },
  { name: "Côte d'Ivoire", status: "Planned", note: "Francophone expansion" },
  { name: "Senegal", status: "Planned", note: "Under evaluation" },
  { name: "Benin Republic", status: "Planned", note: "Proximity to Nigeria hub" },
];

const objectives = [
  { icon: MapPin, title: "Establish the Pilot", body: "Build Nigeria's first Master CareFarm as a proof-of-concept that integrates elderly care, farming, training, and community — demonstrating the model works in the African context." },
  { icon: GraduationCap, title: "Train the Region's Workforce", body: "Operate as the Training and Education Center for West Africa. Certify caregivers, farm managers, and community coordinators to international Family & Care standards." },
  { icon: Network, title: "Grow the Franchise Network", body: "Use the Nigerian Master CareFarm as the foundation to support, certify, and launch franchise CareFarms in neighbouring countries under the global Family & Care International framework." },
  { icon: TrendingUp, title: "Attract Regional Investment", body: "Position Nigeria as a hub for ESG, development bank, and impact investment in care infrastructure — a model that delivers social return alongside financial sustainability." },
];

export default function WestAfricaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-forest-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="container-wide relative z-10">
          <p className="section-label" style={{ color: "#e9bf6e" }}>Regional Mandate</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-3xl mb-6">
            Nigeria: Gateway to West Africa
          </h1>
          <p className="text-white/75 text-lg max-w-2xl leading-relaxed mb-10">
            Under our MOU with Family &amp; Care International, Nigeria is not just the first CareFarm in Africa — it is the Master CareFarm, Training Center, and franchise base for the entire West African region.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-6 py-4 rounded-sm">
            <div className="w-2 h-2 rounded-full bg-earth-400 animate-pulse" />
            <span className="text-white/90 text-sm font-semibold">Phase 1 Development — Nigeria Pilot Site Active</span>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Strategic Objectives</p>
            <h2 className="section-title">Four Pillars of the West Africa Vision</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {objectives.map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-8 border border-forest-100 rounded-sm hover:border-forest-300 hover:shadow-md transition-all duration-200">
                <div className="w-12 h-12 bg-forest-50 rounded-sm flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-forest-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-forest-900 mb-3">{title}</h3>
                <p className="text-forest-700 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country rollout */}
      <section className="py-24 bg-cream-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label">Expansion Roadmap</p>
              <h2 className="section-title mb-6">Building Country by Country</h2>
              <p className="section-body mb-6">
                The CareFarm franchise model is designed for replication. The Master CareFarm Nigeria acts as the operational template, the training base, and the certification authority — enabling rapid, quality-controlled expansion across West Africa.
              </p>
              <p className="section-body mb-8">
                Each franchise CareFarm operates under the global Family &amp; Care International quality standards, ensuring graduates and residents across the network receive internationally recognised care and training.
              </p>
              <Link href="/apply/franchise" className="btn-primary">
                Inquire About a Franchise <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-3">
              {countries.map((c) => (
                <div key={c.name} className={`flex items-center justify-between p-5 rounded-sm border ${c.active ? "bg-forest-600 border-forest-600 text-white" : "bg-white border-forest-100"}`}>
                  <div>
                    <div className={`font-display font-semibold ${c.active ? "text-white" : "text-forest-900"}`}>{c.name}</div>
                    <div className={`text-xs mt-0.5 ${c.active ? "text-white/70" : "text-forest-500"}`}>{c.note}</div>
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${c.active ? "bg-white/20 text-white" : "bg-forest-50 text-forest-600"}`}>
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOU context */}
      <section className="py-24 bg-forest-900">
        <div className="container-narrow text-center">
          <p className="section-label" style={{ color: "#e9bf6e" }}>Formal Framework</p>
          <h2 className="section-title-light mb-6">Backed by International Agreement</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            The West Africa mandate is formalised in a 5-year MOU signed in December 2025 between Family &amp; Care International (Germany), Zakspreneur Limited Nigeria, and A &amp; B Strategic Partners Ltd. Strategic leadership and certification remain with International Headquarters; operational management is handled locally.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-10">
            {[["5 Years", "MOU Duration"], ["3 Parties", "Signatories"], ["West Africa", "Regional Scope"]].map(([val, lab]) => (
              <div key={lab} className="bg-white/5 border border-white/10 rounded-sm p-5">
                <div className="font-display text-2xl font-bold text-white mb-1">{val}</div>
                <div className="text-forest-300 text-xs">{lab}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/about" className="btn-earth">About the Partnership <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/partners" className="btn-ghost">Invest & Partner</Link>
          </div>
        </div>
      </section>
    </>
  );
}
