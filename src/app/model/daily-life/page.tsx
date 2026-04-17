import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Daily Life" };

const schedule = [
  { time: "6:00 AM", activity: "Morning rise", detail: "The farm wakes up early. Animals need feeding, the day begins with light and purpose." },
  { time: "7:30 AM", activity: "Breakfast together", detail: "Shared meal in the farm kitchen. Food from the garden and the farm wherever possible." },
  { time: "9:00 AM", activity: "Morning farm activities", detail: "Feeding chickens, tending the garden, walking the alpacas. Everyone joins in as they are able." },
  { time: "12:00 PM", activity: "Lunch and rest", detail: "Midday meal together. A quiet hour after for those who need it." },
  { time: "2:00 PM", activity: "Afternoon activities", detail: "Crafts, storytelling, visitors from the community, music, or simply sitting outside." },
  { time: "4:00 PM", activity: "Evening farm round", detail: "Animals settled for the evening. A walk around the property as the day cools down." },
  { time: "6:30 PM", activity: "Evening meal", detail: "The day closes together around the table." },
  { time: "8:00 PM", activity: "Wind down", detail: "Evening prayers, quiet time, personal care, and rest." },
];

export default function DailyLifePage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/farm/farm-photo-011.jpg" alt="Elder and delegate walking alpacas at sunset on the CareFarm" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/30 to-transparent" />
        </div>
        <div className="container-wide relative z-10 pb-16 pt-32">
          <p className="section-label" style={{ color: "#e9bf6e" }}>Our Model</p>
          <h1 className="font-display text-4xl md:text-5xl text-white font-bold leading-tight max-w-3xl mb-4">
            A Day on the CareFarm
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            No two days are identical. But every day has structure, purpose, and people to share it with.
          </p>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="container-narrow text-center">
          <p className="section-body max-w-2xl mx-auto">
            The rhythm of farm life is itself therapeutic. Sunrise. Animals. Meals. Work. Community. Rest. These are not programmed activities — they are what happens when you live on a farm with other people.
          </p>
        </div>
      </section>

      <section className="py-0">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-3">
            <div className="relative rounded-sm overflow-hidden" style={{ height: "260px" }}>
              <Image src="/images/farm/farm-photo-006.jpg" alt="Walking alpacas at golden hour" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-950/70 to-transparent p-4">
                <p className="text-white text-xs">Morning alpaca walk — one of the daily farm rhythms</p>
              </div>
            </div>
            <div className="relative rounded-sm overflow-hidden" style={{ height: "260px" }}>
              <Image src="/images/farm/farm-photo-003.jpg" alt="Working the farm fields" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-950/70 to-transparent p-4">
                <p className="text-white text-xs">The working farm provides structure and purpose to every day</p>
              </div>
            </div>
            <div className="relative rounded-sm overflow-hidden" style={{ height: "260px" }}>
              <Image src="/images/farm/farm-photo-001.jpg" alt="Guido and elder at the tractor" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest-950/70 to-transparent p-4">
                <p className="text-white text-xs">Residents and farmers work alongside each other</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="section-label">The Day</p>
            <h2 className="section-title">A Typical Day on the Farm</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-0">
            {schedule.map((item, i) => (
              <div key={item.time} className={`flex gap-6 py-6 ${i < schedule.length - 1 ? "border-b border-forest-100" : ""}`}>
                <div className="w-20 shrink-0">
                  <div className="text-earth-600 font-bold text-sm">{item.time}</div>
                </div>
                <div>
                  <div className="font-display font-semibold text-forest-900 mb-1">{item.activity}</div>
                  <div className="text-forest-600 text-sm leading-relaxed">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">What This Means</p>
              <h2 className="section-title mb-6">Why Routine Matters</h2>
              <p className="section-body mb-5">
                For older people, especially those living with dementia, a predictable daily rhythm reduces anxiety and confusion. Knowing what comes next gives the day shape.
              </p>
              <p className="section-body mb-5">
                But this is not a schedule imposed from outside. The farm itself creates the rhythm. Animals need feeding at the same time each morning. Meals happen when food is ready. The day organises itself around real things.
              </p>
              <p className="section-body mb-8">
                That is very different from activities planned by a care coordinator at a nursing home. The difference shows.
              </p>
              <Link href="/services/dementia" className="btn-primary">
                Dementia Care <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative rounded-sm overflow-hidden" style={{ height: "400px" }}>
              <Image src="/images/farm/farm-photo-011.jpg" alt="Elder walking alpaca at sunset" fill className="object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest-950">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="section-title-light text-2xl mb-2">See the full model</h2>
            <p className="text-white/60 text-sm">Understand how the CareFarm works, or apply for a resident place.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link href="/model/how-it-works" className="btn-ghost">How It Works</Link>
            <Link href="/apply/resident" className="btn-earth">Apply Now <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
