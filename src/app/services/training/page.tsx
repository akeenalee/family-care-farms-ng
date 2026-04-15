import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, Globe, Award, Users } from "lucide-react";

export const metadata: Metadata = { title: "Training & Education" };

const programmes = [
  { icon: GraduationCap, title: "Caregiver Certification", body: "Professional training covering elder care, dementia support, farm-based therapy, and community care practice — certified to Family & Care International standards." },
  { icon: Globe, title: "Farm Manager Training", body: "Operational training covering farm management, sustainable agriculture, animal husbandry, and integration of care and farming for CareFarm operators across West Africa." },
  { icon: Users, title: "Community Coordinator Programme", body: "Training for community-facing roles — family liaison, volunteer coordination, intergenerational programming, and social development." },
  { icon: Award, title: "Master Trainer Certification", body: "Advanced certification enabling graduates to train others in the Family & Care network — building West Africa's own long-term training capacity." },
];

export default function TrainingPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="container-wide">
          <p className="section-label" style={{ color: "#e9bf6e" }}>Services</p>
          <h1 className="font-display text-4xl md:text-5xl text-white font-bold leading-tight max-w-3xl mb-6">Training &amp; Education Centre</h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">As West Africa&apos;s designated Master CareFarm, we train and certify caregivers, farm managers, and community workers to internationally recognised Family &amp; Care standards.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p className="section-label">Why This Matters</p>
              <h2 className="section-title mb-6">Building West Africa&apos;s Care Workforce</h2>
              <p className="section-body mb-5">Nigeria and West Africa face a deepening care deficit. As populations age and urbanisation accelerates, the gap between care needed and workforce available is growing.</p>
              <p className="section-body mb-5">Our Training Centre produces certified professionals who understand care in the African context, can operate farm-based environments, and meet international quality standards.</p>
              <p className="section-body mb-8">Graduates receive internationally recognised Family &amp; Care International certification and are eligible to work across the global CareFarm network — opening pathways beyond Nigeria.</p>
              <Link href="/apply/staff" className="btn-primary">Apply for Training <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="space-y-3">
              {[
                "International certification recognised globally",
                "Eligible to work across the Family & Care global network",
                "Practical, farm-based learning environment",
                "Covers care, agriculture, and community development",
                "Pathway to Master Trainer and leadership roles",
                "Designed for the West African context",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3 p-4 bg-forest-50 border border-forest-100 rounded-sm">
                  <span className="text-forest-500 text-lg">✅</span>
                  <span className="text-forest-800 font-medium text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {programmes.map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-8 border border-forest-100 rounded-sm hover:shadow-md hover:border-forest-300 transition-all duration-200">
                <div className="w-12 h-12 bg-earth-50 rounded-sm flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-earth-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-forest-900 mb-3">{title}</h3>
                <p className="text-forest-700 leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest-950">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="section-title-light text-2xl mb-2">Interested in training?</h2>
            <p className="text-white/60 text-sm">Apply to join our next cohort or contact us for programme details.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link href="/apply/staff" className="btn-earth">Apply for Training <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/contact" className="btn-ghost">Get Details</Link>
          </div>
        </div>
      </section>
    </>
  );
}
