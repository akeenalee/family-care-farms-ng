import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, Sprout, Users, GraduationCap, Globe, Award, ChevronRight } from "lucide-react";

const services = [
  { icon: Heart, title: "Elderly Care", description: "Professional residential care woven into the rhythm of farm life — meaningful, dignified, and deeply human.", href: "/services/elderly-care", color: "text-earth-500", bg: "bg-earth-50" },
  { icon: Sprout, title: "Farm Therapy", description: "Animals, gardens, and seasonal harvests as healing tools. Nature as medicine, community as cure.", href: "/services/farm-therapy", color: "text-forest-600", bg: "bg-forest-50" },
  { icon: Users, title: "Dementia Support", description: "Familiar routines, trusted faces, and sensory-rich environments that bring safety and belonging to those with dementia.", href: "/services/dementia", color: "text-forest-500", bg: "bg-forest-50" },
  { icon: GraduationCap, title: "Training & Education", description: "Internationally certified programs for caregivers, farmers, and community workers — building West Africa's care workforce.", href: "/services/training", color: "text-earth-600", bg: "bg-earth-50" },
];

const stats = [
  { value: "2025", label: "MOU Signed", sub: "Düsseldorf, Germany" },
  { value: "6×", label: "Award-Winning", sub: "Family & Care International" },
  { value: "1st", label: "in West Africa", sub: "Master CareFarm" },
  { value: "5yr", label: "Partnership", sub: "Framework Agreement" },
];

const pillars = [
  { icon: "🌿", title: "Nature & Animals", body: "Daily contact with animals, gardens, and the changing seasons — proven to reduce stress, depression, and cognitive decline." },
  { icon: "👨‍👩‍👧‍👦", title: "Community Living", body: "Not a hospital. Not a nursing home. A home — where elders are woven into the fabric of daily life, needed and respected." },
  { icon: "🌍", title: "Nigerian Values", body: "We build on our culture of extended family, communal care, and respect for elders — with international infrastructure and standards." },
  { icon: "📜", title: "International Standards", body: "Certified by Family & Care International Germany. Graduates eligible to work across the global CareFarm network." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-forest-500/10 -mr-64 hidden lg:block" />
        <div className="container-wide relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
              <Globe className="w-3.5 h-3.5 text-earth-300" />
              West Africa Master CareFarm · Official Partner of Family &amp; Care International
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight mb-6">
              Care That Feels<span className="block italic text-earth-300">Like Coming Home.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Family & CareFarm Nigeria integrates professional elderly care with farm life, community, and nature — building West Africa&apos;s first CareFarm, certified by Family &amp; Care International, Germany.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/model/how-it-works" className="btn-earth">Discover Our Model <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/apply/resident" className="btn-ghost">Apply for Residency</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 20C1200 70 960 10 720 40C480 70 240 0 0 40L0 80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-forest-700 mb-1">{stat.value}</div>
                <div className="font-semibold text-forest-900 text-sm mb-0.5">{stat.label}</div>
                <div className="text-forest-500 text-xs">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP PHOTO BANNER */}
      <section className="py-0 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 relative rounded-sm overflow-hidden" style={{ height: "300px" }}>
              <Image src="/images/gallery/partnership-awards.jpg" alt="Nigerian partners with Guido Pusch (Family & Care International) at DNP25 Düsseldorf" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <div className="text-xs font-semibold tracking-widest uppercase text-earth-300 mb-1">December 2025 · Düsseldorf</div>
                <div className="font-display text-lg font-semibold">MOU Signed at Deutscher Nachhaltigkeitspreis</div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative rounded-sm overflow-hidden flex-1">
                <Image src="/images/gallery/dnp25-handshake1.jpg" alt="Prof. Olalekan networking at DNP25" fill className="object-cover object-center" />
              </div>
              <div className="relative rounded-sm overflow-hidden flex-1">
                <Image src="/images/gallery/dnp25-handshake2.jpg" alt="Partnership handshake at DNP25" fill className="object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-24 bg-cream-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">What We Do</p>
              <h2 className="section-title mb-6">A New Way to Care for Our Elders in Nigeria</h2>
              <p className="section-body mb-6">In Nigeria, caring for the elderly has always been a family matter. But urbanisation, migration, and changing family structures are making that harder. Elders are being left behind — separated from community, purpose, and the dignity they deserve.</p>
              <p className="section-body mb-8">Family & CareFarm Nigeria offers a third way: not a clinical nursing home, and not a burden on overstretched families — but a living, breathing community where elders participate, belong, and thrive.</p>
              <Link href="/model/how-it-works" className="btn-primary">How It Works <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="bg-white p-6 rounded-sm border border-forest-100 hover:border-forest-300 hover:shadow-md transition-all duration-200">
                  <div className="text-3xl mb-3">{pillar.icon}</div>
                  <h3 className="font-display text-base font-semibold text-forest-900 mb-2">{pillar.title}</h3>
                  <p className="text-forest-700 text-sm leading-relaxed">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-label">Our Services</p>
            <h2 className="section-title mb-4">Care, Community &amp; Training Under One Roof</h2>
            <p className="section-body">From residential elder care to internationally certified training programs — everything we offer is designed around the whole person and the whole community.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} href={service.href} className="group card p-6 hover:-translate-y-1 transition-all duration-200">
                  <div className={`w-10 h-10 rounded-sm ${service.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${service.color}`} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-forest-900 mb-2">{service.title}</h3>
                  <p className="text-forest-700 text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="text-forest-600 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ChevronRight className="w-3.5 h-3.5" /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* GUIDO QUOTE + OFFICIAL PARTNER BADGE */}
      <section className="py-20 bg-white">
        <div className="container-narrow text-center">
          {/* Official partner badge */}
          <div className="inline-flex items-center gap-3 border border-forest-200 rounded-sm px-5 py-3 mb-10">
            <Image src="/images/logo-fc-official.png" alt="Family & Care International" width={36} height={36} className="object-contain" />
            <span className="text-xs font-semibold text-forest-700 tracking-widest uppercase">
              Official Partner · Family &amp; Care International, Germany
            </span>
          </div>

          {/* Guido quote */}
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-forest-900 italic leading-relaxed max-w-3xl mx-auto mb-6">
            &ldquo;All&apos;s well that ends well — when life has a home until the very end, connecting trust and generations.&rdquo;
          </blockquote>
          <cite className="text-earth-600 text-sm font-semibold not-italic tracking-wide">
            — Guido Pusch, Founder · Family &amp; Care International
          </cite>
        </div>
      </section>

      {/* WEST AFRICA MANDATE */}
      <section className="py-24 bg-forest-950 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-earth-300 text-xs font-semibold tracking-widest uppercase mb-6">
              <Award className="w-4 h-4" /> Regional Mandate
            </div>
            <h2 className="section-title-light mb-6">Nigeria as the Gateway to West Africa</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">Under our MOU with Family &amp; Care International, Nigeria is designated the Master CareFarm and Training Center for all of West Africa. We are building the foundation for a regional network of CareFarms — creating jobs, certifying caregivers, and exporting a proven model across the continent.</p>
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[["Master CareFarm", "Pilot & model for Africa"], ["Training Hub", "Certified caregivers for West Africa"], ["Franchise Base", "Future CareFarms across the region"]].map(([title, sub]) => (
                <div key={title} className="bg-white/5 border border-white/10 rounded-sm p-5">
                  <div className="font-display text-white font-semibold mb-1">{title}</div>
                  <div className="text-forest-300 text-xs">{sub}</div>
                </div>
              ))}
            </div>
            <Link href="/west-africa" className="btn-earth">Our West Africa Vision <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* APPLY CTA */}
      <section className="py-24 bg-cream-50">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🏡", title: "Apply as a Resident", body: "For families seeking a compassionate, community-based home for their loved one.", cta: "Apply Now", href: "/apply/resident", variant: "btn-primary" },
              { icon: "👩‍⚕️", title: "Join Our Team", body: "Caregivers, farmers, cooks, and educators — be part of building something new.", cta: "See Roles", href: "/apply/staff", variant: "btn-primary" },
              { icon: "🤝", title: "Partner or Invest", body: "ESG investors, NGOs, land owners, and government agencies — let's build West Africa's care future together.", cta: "Get in Touch", href: "/partners", variant: "btn-earth" },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-forest-100 rounded-sm p-8 flex flex-col">
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="font-display text-xl font-semibold text-forest-900 mb-3">{item.title}</h3>
                <p className="text-forest-700 text-sm leading-relaxed mb-6 flex-1">{item.body}</p>
                <Link href={item.href} className={item.variant}>
                  {item.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
