import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Farm Therapy" };

const therapies = [
  { emoji: "🦙", name: "Animal-Assisted Activities", body: "Spending time with alpacas, goats, chickens, horses and donkeys does something that medication cannot always do. Blood pressure drops. People who have been withdrawn for months will reach out to touch an animal." },
  { emoji: "🌱", name: "Horticultural Therapy", body: "Planting something and watching it grow gives people a reason to check on it tomorrow. Soil contact, movement, and the straightforward satisfaction of producing food are things no pill replicates." },
  { emoji: "☀️", name: "Green Care & Nature Exposure", body: "Sunlight, fresh air, birdsong, the feel of seasons changing. These are basic human needs. Most care facilities make them optional. Here they are the default." },
  { emoji: "🍳", name: "Culinary Participation", body: "The smell of food cooking reaches people in ways that conversation sometimes cannot. Preparing meals together is something most older Nigerians have done their whole lives. That familiarity matters." },
  { emoji: "🚜", name: "Farm Work & Occupation", body: "Collecting eggs. Feeding animals. Watering the garden. Simple tasks, but they give the day a shape and give the person a role. Feeling useful is not a luxury for older people. It is essential." },
  { emoji: "🎵", name: "Music & Cultural Activities", body: "Music, storytelling, prayer, celebration. Nigerian cultural life does not stop at a certain age. It is woven into the week, not treated as entertainment or filler." },
];

export default function FarmTherapyPage() {
  return (
    <>
      {/* Hero with real alpaca photo */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/farm/alpaca-golden-hour.jpg" alt="Walking the alpacas at golden hour, animal therapy at the Family & CareFarm" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/30 to-transparent" />
        </div>
        <div className="container-wide relative z-10 pb-16 pt-32">
          <p className="section-label" style={{ color: "#e9bf6e" }}>Services</p>
          <h1 className="font-display text-4xl md:text-5xl text-white font-bold leading-tight max-w-3xl mb-4">
            Farm Therapy
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            The farm is not a backdrop for care. It is the care. Animals, soil, seasons, and outdoor work are what make this different from anywhere else.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="container-narrow text-center">
          <p className="section-body max-w-2xl mx-auto">Nature-based care has solid evidence behind it. What Family &amp; Care International did was stop treating it as a programme and build a whole place around it instead.</p>
        </div>
      </section>

      {/* Alpaca walk photo feature */}
      <section className="py-0">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-3">
            <div className="relative rounded-sm overflow-hidden" style={{ height: "380px" }}>
              <Image src="/images/farm/alpaca-walk-sunset.jpg" alt="Elder and Nigerian delegate walking alpacas together at sunset" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-950/70 to-transparent p-5">
                <p className="text-white text-sm font-semibold">Walking the alpacas, resident and caregiver together</p>
                <p className="text-white/70 text-xs">Animal-assisted therapy in action at the Family & Care CareFarm</p>
              </div>
            </div>
            <div className="relative rounded-sm overflow-hidden" style={{ height: "380px" }}>
              <Image src="/images/farm/tractor-farmland.jpg" alt="Working farmland, sustainable agriculture at the Family & CareFarm" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-950/70 to-transparent p-5">
                <p className="text-white text-sm font-semibold">Working farmland</p>
                <p className="text-white/70 text-xs">Sustainable agriculture is at the heart of the CareFarm concept</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="section-label">Therapeutic Approaches</p>
            <h2 className="section-title">Six Forms of Farm Therapy</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapies.map((t) => (
              <div key={t.name} className="p-8 border border-forest-100 rounded-sm hover:shadow-md hover:border-forest-300 transition-all duration-200">
                <div className="text-4xl mb-5">{t.emoji}</div>
                <h3 className="font-display text-lg font-semibold text-forest-900 mb-3">{t.name}</h3>
                <p className="text-forest-700 text-sm leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest-950">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="section-title-light text-2xl mb-2">See farm therapy in action.</h2>
            <p className="text-white/60 text-sm">Learn about a typical day on the farm or apply for residency.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link href="/model/daily-life" className="btn-ghost">Daily Life</Link>
            <Link href="/apply/resident" className="btn-earth">Apply Now <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
