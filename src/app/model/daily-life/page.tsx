import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sun, Coffee, Sunset, Moon } from "lucide-react";

export const metadata: Metadata = { title: "Daily Life on the Farm" };

const schedule = [
  {
    time: "6:00 – 8:00 AM",
    icon: Sun,
    title: "Morning Rise & Farm Chores",
    activities: [
      "Wake at own pace — no institutional bells",
      "Feeding chickens and checking on animals",
      "Morning garden walk with staff",
      "Personal care with caregiver assistance as needed",
    ],
  },
  {
    time: "8:00 – 10:00 AM",
    icon: Coffee,
    title: "Breakfast & Community Time",
    activities: [
      "Communal breakfast — freshly prepared farm food",
      "Morning conversation and news",
      "Medication and health checks where applicable",
      "Planning the day together as a household",
    ],
  },
  {
    time: "10:00 AM – 1:00 PM",
    icon: Sun,
    title: "Morning Activities",
    activities: [
      "Light farm work — planting, watering, harvesting",
      "Cooking preparation with kitchen team",
      "Crafts, storytelling, or skills sharing",
      "Visits from family, school groups, or volunteers",
    ],
  },
  {
    time: "1:00 – 3:00 PM",
    icon: Coffee,
    title: "Lunch & Rest",
    activities: [
      "Main meal together — prepared with farm produce",
      "Afternoon rest time",
      "Medical or therapy appointments as needed",
      "Quiet activities — reading, music, reflection",
    ],
  },
  {
    time: "3:00 – 6:00 PM",
    icon: Sunset,
    title: "Afternoon Life",
    activities: [
      "Afternoon farm walk or sitting in garden",
      "Group activities — music, games, storytelling",
      "Family visit time — open to all",
      "Evening animal care and farm closing",
    ],
  },
  {
    time: "6:00 – 9:00 PM",
    icon: Moon,
    title: "Evening & Rest",
    activities: [
      "Communal dinner — the heart of the day",
      "Evening prayer, reflection, or social time",
      "Personal wind-down with caregiver support",
      "Sleep at own rhythm — no fixed lights-out",
    ],
  },
];

const pillars = [
  { emoji: "🐔", title: "Animals", body: "Chickens, goats, rabbits — daily animal contact is proven to reduce agitation, loneliness, and cognitive decline. Residents develop bonds and responsibilities." },
  { emoji: "🥬", title: "Garden & Food", body: "Residents participate in growing, harvesting, and preparing food. The connection between soil, plant, and plate restores a sense of cycle and meaning." },
  { emoji: "👩‍👧", title: "Family Integration", body: "Families are not visitors — they are participants. Open farm means family members can spend full days, share meals, and celebrate milestones naturally." },
  { emoji: "🎶", title: "Culture & Tradition", body: "Music, storytelling, prayer, and local traditions are woven into daily life. Elders are not cut off from their cultural identity — they are its carriers." },
  { emoji: "🌳", title: "Outdoor Life", body: "Time outdoors is a cornerstone of wellbeing. Shade trees, paths for gentle walking, and open spaces mean residents spend time in nature every day." },
  { emoji: "🤝", title: "Intergenerational", body: "Young apprentices, school groups, and volunteers bring energy and questions. Elders bring wisdom and continuity. Both are enriched." },
];

export default function DailyLifePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="container-wide relative z-10">
          <p className="section-label" style={{ color: "#e9bf6e" }}>Our Model</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-3xl mb-6">
            A Day on the Family Care Farm
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            No two days are the same — but every day is built around rhythm, purpose, community, and the quiet dignity of living well.
          </p>
        </div>
      </section>

      {/* Daily schedule */}
      <section className="py-24 bg-white">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <p className="section-label">A Typical Day</p>
            <h2 className="section-title">Life at Its Own Rhythm</h2>
          </div>
          <div className="space-y-4">
            {schedule.map((block, i) => {
              const Icon = block.icon;
              return (
                <div key={block.time} className={`flex gap-6 p-6 rounded-sm border ${i % 2 === 0 ? "bg-cream-50 border-cream-200" : "bg-white border-forest-100"}`}>
                  <div className="shrink-0 text-center w-16">
                    <div className="w-10 h-10 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-5 h-5 text-forest-600" />
                    </div>
                    <div className="text-xs text-forest-500 font-semibold leading-tight">{block.time}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-forest-900 mb-3">{block.title}</h3>
                    <ul className="grid sm:grid-cols-2 gap-1.5">
                      {block.activities.map((a) => (
                        <li key={a} className="flex items-start gap-2 text-sm text-forest-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-earth-400 mt-1.5 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Life pillars */}
      <section className="py-24 bg-forest-950">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="section-label" style={{ color: "#e9bf6e" }}>What Makes It Work</p>
            <h2 className="section-title-light">The Six Elements of Farm Life</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white/5 border border-white/10 rounded-sm p-7 hover:bg-white/10 transition-colors duration-200">
                <div className="text-4xl mb-4">{p.emoji}</div>
                <h3 className="font-display text-lg font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-forest-300 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dementia note */}
      <section className="py-24 bg-cream-50">
        <div className="container-narrow">
          <div className="bg-white border border-forest-200 rounded-sm p-10">
            <p className="section-label">Special Note</p>
            <h2 className="section-title mb-5">A Particularly Healing Place for Dementia</h2>
            <p className="section-body mb-5">
              For residents living with dementia, the farm environment offers something clinical settings cannot — the familiar. The smell of soil and animals, the texture of garden work, the sound of chickens — these sensory cues reach people even when words cannot.
            </p>
            <p className="section-body mb-5">
              Routine and ritual replace institutional schedules. Familiar faces replace rotating clinical staff. The farm&apos;s rhythm — morning, noon, and evening chores — creates a reliable, calming structure for people who find change distressing.
            </p>
            <p className="section-body mb-8">
              Evidence from Family &amp; Care International&apos;s German farms shows that residents with dementia show significantly reduced agitation, improved mood, and longer periods of calm engagement compared to traditional care settings.
            </p>
            <Link href="/services/dementia" className="btn-primary">
              Our Dementia Programme <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-forest-100">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-forest-900 mb-2">Imagine your loved one living this life.</h2>
            <p className="text-forest-600 text-sm">Apply for a resident place or speak to our care team.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link href="/apply/resident" className="btn-primary">Apply Now <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/contact" className="btn-secondary">Ask a Question</Link>
          </div>
        </div>
      </section>
    </>
  );
}
