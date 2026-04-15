import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Farm Therapy" };

const therapies = [
  { emoji: "🐐", name: "Animal-Assisted Activities", body: "Daily contact with goats, chickens, and rabbits reduces cortisol, lowers blood pressure, and creates genuine moments of joy. Even residents with advanced dementia respond to animals." },
  { emoji: "🌱", name: "Horticultural Therapy", body: "Planting, tending, and harvesting creates a cycle of care and reward. Soil contact, physical movement, and the satisfaction of growing food are powerful therapeutic tools." },
  { emoji: "☀️", name: "Green Care & Nature Exposure", body: "Time outdoors — sunlight, fresh air, birdsong, and seasons — regulates mood, sleep, and physical health in ways no indoor programme can match." },
  { emoji: "🍳", name: "Culinary Participation", body: "Preparing and sharing farm food connects residents to a lifelong familiar activity. The smell of cooking and the act of preparing are deeply embedded in memory and identity." },
  { emoji: "🤲", name: "Occupational Engagement", body: "Light meaningful tasks — folding, sorting, crafting — maintain motor skills, cognitive engagement, and the profound human need to feel useful and valued." },
  { emoji: "🎵", name: "Music & Cultural Activities", body: "Nigerian music traditions, storytelling, prayer, and celebration are woven into the week. Culture is not an add-on — it is the fabric of wellbeing." },
];

export default function FarmTherapyPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container-wide">
          <p className="section-label" style={{ color: "#e9bf6e" }}>Services</p>
          <h1 className="font-display text-4xl md:text-5xl text-white font-bold leading-tight max-w-3xl mb-6">Farm Therapy</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">Nature, animals, soil, and seasons are not backdrop — they are the medicine. The farm itself is the therapeutic environment.</p>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="container-narrow text-center">
          <p className="section-body max-w-2xl mx-auto">Green care — therapeutic approaches using nature, animals, and agriculture — has decades of evidence behind it. What Family &amp; Care International did was build an entire living model around it. Not a programme. A place.</p>
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
