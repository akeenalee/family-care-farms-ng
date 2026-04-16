import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Photo Gallery" };

// Farm photos - 12 images
const farmPhotos = [
  { src: "/images/farm/farm-photo-006.jpg", alt: "Nigerian delegate walking alpaca at golden hour — animal therapy at the Family & CareFarm", caption: "Walking the alpacas at the Family & Care CareFarm, Germany" },
  { src: "/images/farm/farm-photo-011.jpg", alt: "Elder and Nigerian delegate walking alpacas together at sunset", caption: "Intergenerational connection — elder and caregiver with the alpacas" },
  { src: "/images/farm/farm-photo-003.jpg", alt: "Massey Ferguson tractor working the farmland", caption: "Working farmland at the Family & Care CareFarm — sustainable agriculture" },
  { src: "/images/farm/farm-photo-001.jpg", alt: "Guido Pusch with farm resident on tractor", caption: "Guido Pusch, Founder of Family & Care International, with a farm resident" },
  { src: "/images/farm/farm-photo-002.jpg", alt: "Nigerian delegation studying Nigeria map in Germany", caption: "The Nigerian delegation planning the West Africa CareFarm rollout" },
  { src: "/images/farm/farm-photo-012.jpg", alt: "Guido Pusch and daughter at DNP25", caption: "Guido Pusch at the Deutscher Nachhaltigkeitspreis 2025" },
];

// DNP25 highlights - best selection
const dnp25Photos = [
  { src: "/images/dnp25/dnp25-photo-005.jpg", alt: "MOU signing — all four signatories holding the signed agreement", caption: "The MOU signing — Family Care Farm Initiatives Nigeria formally established" },
  { src: "/images/dnp25/dnp25-photo-003.jpg", alt: "Guido Pusch receiving the DNP25 award on stage", caption: "Guido Pusch receiving the Deutscher Nachhaltigkeitspreis — one of six major awards" },
  { src: "/images/dnp25/dnp25-photo-001.jpg", alt: "Full DNP25 winners group on stage", caption: "Family & Care International among Germany's top sustainability innovators" },
  { src: "/images/dnp25/dnp25-photo-004.jpg", alt: "Nigerian partners on stage at DNP25", caption: "The Nigerian delegation on stage at the DNP25 ceremony, Düsseldorf" },
  { src: "/images/dnp25/dnp25-photo-013.jpg", alt: "Prof Olalekan joyful handshake at gala", caption: "Prof. Olalekan Busra Sakariyau at the DNP25 gala" },
  { src: "/images/dnp25/dnp25-photo-011.jpg", alt: "Nigerian and European partners together at gala", caption: "Building bridges — Nigerian and European partners at the DNP25 gala" },
  { src: "/images/dnp25/dnp25-photo-015.jpg", alt: "Nigerian delegates smiling at DNP25", caption: "The Nigerian delegation at the Deutscher Nachhaltigkeitspreis 2025" },
  { src: "/images/dnp25/dnp25-photo-019.jpg", alt: "Full winners stage DNP25", caption: "All DNP25 2025 winners — Düsseldorf, Germany" },
  { src: "/images/dnp25/dnp25-photo-006.jpg", alt: "MOU signing ceremony", caption: "Signing of the West Africa partnership agreement" },
  { src: "/images/dnp25/dnp25-photo-007.jpg", alt: "Networking at DNP25 gala", caption: "International networking — Nigeria joins the global Family & Care network" },
  { src: "/images/dnp25/dnp25-photo-012.jpg", alt: "Guido Pusch handshake at gala", caption: "Guido Pusch sealing the Nigeria partnership at the DNP25 gala" },
  { src: "/images/dnp25/dnp25-photo-082.jpg", alt: "Nigerian delegates at DNP25", caption: "The Nigerian delegation representing West Africa at DNP25" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label">Photo Gallery</p>
          <h1 className="section-title mb-4">Our Journey in Pictures</h1>
          <p className="section-body max-w-2xl">
            From the Family & Care CareFarm in Germany to the Deutscher Nachhaltigkeitspreis ceremony in Düsseldorf — documenting the birth of West Africa&apos;s first Family CareFarm.
          </p>
        </div>

        {/* Farm Life */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-semibold text-forest-900 mb-2">Life on the CareFarm</h2>
          <p className="text-forest-600 text-sm mb-8">The Nigerian delegation experiencing the Family & Care CareFarm concept firsthand in Germany</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {farmPhotos.map((photo, i) => (
              <div key={i} className="relative rounded-sm overflow-hidden group" style={{ height: "240px" }}>
                <Image src={photo.src} alt={photo.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs leading-snug">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DNP25 */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-semibold text-forest-900 mb-2">Deutscher Nachhaltigkeitspreis 2025</h2>
          <p className="text-forest-600 text-sm mb-8">The MOU signing and partnership celebration at Germany&apos;s most prestigious sustainability awards, Düsseldorf — December 2025</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {dnp25Photos.map((photo, i) => (
              <div key={i} className="relative rounded-sm overflow-hidden group" style={{ height: "200px" }}>
                <Image src={photo.src} alt={photo.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs leading-snug">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-forest-950 rounded-sm p-10 text-center">
          <h2 className="section-title-light mb-4">Be Part of This Story</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Family Care Farm Initiatives Nigeria is building West Africa&apos;s first CareFarm. Join us as a resident, caregiver, or partner.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/apply/resident" className="btn-earth">Apply for Residency <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/partners" className="btn-ghost">Partner With Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
