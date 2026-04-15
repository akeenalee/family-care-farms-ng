import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Apply" };

const paths = [
  {
    emoji: "🏡",
    title: "Apply as a Resident",
    description: "For families looking for professional, compassionate care for an elderly loved one — in a farm community rather than a clinical facility.",
    href: "/apply/resident",
    cta: "Resident Application",
    color: "border-forest-200 hover:border-forest-400",
    btnClass: "btn-primary",
  },
  {
    emoji: "👩‍⚕️",
    title: "Join Our Team",
    description: "Caregivers, farm workers, cooks, educators, and administrators — join us in building West Africa's first Family Care Farm.",
    href: "/apply/staff",
    cta: "Staff Application",
    color: "border-forest-200 hover:border-forest-400",
    btnClass: "btn-primary",
  },
  {
    emoji: "🌍",
    title: "Franchise Inquiry",
    description: "Interested in establishing a CareFarm in your state or country? Nigeria is the Master CareFarm — we support franchise expansion across West Africa.",
    href: "/apply/franchise",
    cta: "Franchise Inquiry",
    color: "border-earth-200 hover:border-earth-400",
    btnClass: "btn-earth",
  },
];

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-28 pb-20">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="section-label">Get Involved</p>
          <h1 className="section-title mb-5">How Would You Like to Engage?</h1>
          <p className="section-body max-w-xl mx-auto">
            Whether you&apos;re seeking care for a loved one, looking for meaningful work, or exploring our franchise model — there is a path for you.
          </p>
        </div>

        <div className="space-y-6">
          {paths.map((path) => (
            <div
              key={path.title}
              className={`bg-white border-2 rounded-sm p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-200 hover:shadow-md ${path.color}`}
            >
              <div className="text-5xl shrink-0">{path.emoji}</div>
              <div className="flex-1">
                <h2 className="font-display text-xl font-semibold text-forest-900 mb-2">{path.title}</h2>
                <p className="text-forest-700 text-sm leading-relaxed">{path.description}</p>
              </div>
              <div className="shrink-0">
                <Link href={path.href} className={`${path.btnClass} whitespace-nowrap`}>
                  {path.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-forest-900 rounded-sm p-8 text-center">
          <p className="text-white/80 text-sm mb-4">Not sure which path is right for you?</p>
          <Link href="/contact" className="btn-ghost">
            Talk to Our Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
