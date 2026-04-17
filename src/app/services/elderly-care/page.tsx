import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Users, Leaf, Clock } from "lucide-react";

export const metadata: Metadata = { title: "Elderly Care" };

const features = [
  { icon: Heart, title: "Professional Care", body: "Qualified caregivers provide personal and medical care within the daily flow of farm life. Not scheduled visits — ongoing presence." },
  { icon: Users, title: "Small Living Groups", body: "Residents live in small groups, not large wards. Everyone knows everyone. That familiarity matters more than most people expect." },
  { icon: Leaf, title: "Nature Every Day", body: "Outdoor time, fresh air, animals, and gardens are part of the day. Not optional extras — built into how the farm works." },
  { icon: Clock, title: "Family Welcome Anytime", body: "No visiting hours. Family can come when they can come. They are welcome to stay for meals, join farm activities, or just sit outside." },
];

export default function ElderlyCare() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/farm/farm-photo-006.jpg" alt="Elderly care on the CareFarm — residents participate in daily farm life" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/30 to-transparent" />
        </div>
        <div className="container-wide relative z-10 pb-16 pt-32">
          <p className="section-label" style={{ color: "#e9bf6e" }}>Services</p>
          <h1 className="font-display text-4xl md:text-5xl text-white font-bold leading-tight max-w-3xl mb-4">
            Elderly Care
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Care delivered the way older Nigerians deserve. Not in a ward, not behind a schedule. In a community with purpose, nature, and people who know your name.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Who This Is For</p>
              <h2 className="section-title mb-6">For Older Nigerians Who Deserve More</h2>
              <p className="section-body mb-5">
                Many families want to care for their elders at home but cannot manage it alone. Work, distance, and the demands of modern life make that harder every year.
              </p>
              <p className="section-body mb-5">
                The CareFarm is not a nursing home. It is a living community where older people have roles, relationships, and reasons to get up in the morning. Professional caregivers are there. So are animals, gardens, other residents, and visiting families.
              </p>
              <p className="section-body mb-8">
                People with mild to moderate physical needs, people in early or mid-stage dementia, people who are physically well but need social connection and structure — all can live well on the CareFarm.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative rounded-sm overflow-hidden col-span-2" style={{ height: "220px" }}>
                <Image src="/images/farm/farm-photo-011.jpg" alt="Elder and delegate walking alpacas at sunset" fill className="object-cover" />
              </div>
              <div className="relative rounded-sm overflow-hidden" style={{ height: "160px" }}>
                <Image src="/images/farm/farm-photo-003.jpg" alt="Working farmland" fill className="object-cover" />
              </div>
              <div className="relative rounded-sm overflow-hidden" style={{ height: "160px" }}>
                <Image src="/images/farm/farm-photo-001.jpg" alt="Farmer and resident at tractor" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-50">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="section-label">What We Provide</p>
            <h2 className="section-title">What Residents Can Expect</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-8 bg-white border border-forest-100 rounded-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-forest-100 rounded-sm flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-forest-600" />
                </div>
                <h3 className="font-display text-lg font-semibold text-forest-900 mb-3">{title}</h3>
                <p className="text-forest-700 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-narrow text-center">
          <p className="section-label">For Families</p>
          <h2 className="section-title mb-6">What to Expect as a Family</h2>
          <p className="section-body max-w-2xl mx-auto mb-5">
            Moving a parent or grandparent into care is not easy. It carries guilt, uncertainty, and grief for what the family used to manage alone.
          </p>
          <p className="section-body max-w-2xl mx-auto mb-5">
            The CareFarm is designed to make that transition easier. You can visit anytime. You can eat with your family member. You can join a farm activity. You remain part of their life rather than watching from a distance.
          </p>
          <p className="section-body max-w-2xl mx-auto mb-10">
            Many families find that their relationship with their elder actually improves when the pressure of full-time caregiving is lifted. You come to visit, not to work.
          </p>
          <Link href="/apply/resident" className="btn-primary">
            Apply for a Resident Place <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-16 bg-forest-950">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="section-title-light text-2xl mb-2">Also see</h2>
            <p className="text-white/60 text-sm">Dementia support, farm therapy, and the training programme for caregivers.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link href="/services/dementia" className="btn-ghost">Dementia Support</Link>
            <Link href="/services/farm-therapy" className="btn-ghost">Farm Therapy</Link>
            <Link href="/apply/staff" className="btn-earth">Join as Caregiver <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
