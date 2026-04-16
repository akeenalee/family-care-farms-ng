import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Intergenerational Community" };

const connections = [
  { from: "Elders", to: "Youth", what: "Wisdom, stories, traditional knowledge, life experience, mentorship" },
  { from: "Youth", to: "Elders", what: "Energy, technology help, music, new perspectives, companionship" },
  { from: "Families", to: "Elders", what: "Continuity, love, cultural identity, presence" },
  { from: "Elders", to: "Families", what: "Rootedness, values, belonging, living memory" },
];

export default function IntergenerationalPage() {
  return (
    <>
      <section className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/farm/alpaca-walk-sunset.jpg" alt="Elder and Nigerian delegate walking alpacas together — intergenerational connection at the Family CareFarm" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/30 to-transparent" />
        </div>
        <div className="container-wide relative z-10 pb-16 pt-32">
          <p className="section-label" style={{ color: "#e9bf6e" }}>Our Model</p>
          <h1 className="font-display text-4xl md:text-5xl text-white font-bold leading-tight max-w-3xl mb-6">
            Where Generations Meet
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            The CareFarm is not a place for old people — it is a place for everyone. Young and old share work, meals, stories, and purpose.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">The Philosophy</p>
              <h2 className="section-title mb-6">Separation is the Problem. Community is the Cure.</h2>
              <p className="section-body mb-5">
                Across the world, societies have made a quiet mistake — separating the elderly from the rest of life. The result is loneliness for elders, lost wisdom for youth, and fractured communities for everyone.
              </p>
              <p className="section-body mb-5">
                The CareFarm model reverses this. By placing care in a living farm community — where school groups visit, apprentices learn farming, young caregivers grow professionally, and families come freely — we rebuild the intergenerational fabric that once held communities together.
              </p>
              <p className="section-body mb-8">
                In Nigeria, this is not a foreign idea. It is a return to something we already know: that caring for elders is not a burden but a privilege, and that doing it well requires the whole community.
              </p>
            </div>
            <div className="space-y-4">
              {connections.map((c) => (
                <div key={c.from + c.to} className="bg-cream-50 border border-cream-200 rounded-sm p-6 flex items-start gap-5">
                  <div className="shrink-0">
                    <span className="inline-block bg-forest-100 text-forest-700 text-xs font-bold px-3 py-1.5 rounded-full">{c.from}</span>
                    <div className="text-center text-forest-300 text-xl my-1">↓</div>
                    <span className="inline-block bg-earth-100 text-earth-700 text-xs font-bold px-3 py-1.5 rounded-full">{c.to}</span>
                  </div>
                  <p className="text-forest-700 text-sm leading-relaxed pt-1">{c.what}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-forest-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="section-label" style={{ color: "#e9bf6e" }}>Who Comes to the Farm</p>
            <h2 className="section-title-light">Everyone Is Welcome</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ["🏫", "School Groups", "Students visit to learn about farming, animal care, and how communities care for their elders."],
              ["🌱", "Apprentices", "Young people train in care, agriculture, and community work — gaining internationally recognised certificates."],
              ["👨‍👩‍👦", "Families", "Open farm policy means family can visit anytime, share meals, and be part of their loved one's daily life."],
              ["🤝", "Volunteers", "Community members, faith groups, and organisations contribute time and skills to the farm community."],
            ].map(([icon, title, body]) => (
              <div key={title as string} className="bg-white/5 border border-white/10 rounded-sm p-6">
                <div className="text-4xl mb-4">{icon as string}</div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{title as string}</h3>
                <p className="text-forest-300 text-sm leading-relaxed">{body as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-forest-900 mb-2">Want to be part of this community?</h2>
            <p className="text-forest-600 text-sm">As a resident, caregiver, volunteer, or partner — there&apos;s a place for you.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link href="/apply/staff" className="btn-primary">Join the Team <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/contact" className="btn-secondary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
