import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest-950 text-white">
      {/* Main footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 shrink-0">
                <Image
                  src="/images/logo-icon.svg"
                  alt="Family Care Farms Nigeria"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <div className="font-display font-semibold text-sm leading-tight text-white">
                  Family Care Farms
                </div>
                <div className="text-[9px] tracking-[0.2em] uppercase text-earth-400">
                  Initiatives Nigeria
                </div>
              </div>
            </div>
            <p className="text-forest-300 text-sm leading-relaxed mb-5">
              West Africa&apos;s Master CareFarm — where professional elderly care
              meets sustainable agriculture and community living.
            </p>
            <p className="text-forest-500 text-xs">
              An official partner of{" "}
              <a
                href="https://familycare.farm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-300 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                Family & Care International
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-forest-300">
              {[
                ["Elderly Care", "/services/elderly-care"],
                ["Dementia Support", "/services/dementia"],
                ["Farm Therapy", "/services/farm-therapy"],
                ["Training & Education", "/services/training"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Get Involved
            </h4>
            <ul className="space-y-3 text-sm text-forest-300">
              {[
                ["Apply as Resident", "/apply/resident"],
                ["Join Our Team", "/apply/staff"],
                ["Franchise Inquiry", "/apply/franchise"],
                ["Partner & Invest", "/partners"],
                ["West Africa Hub", "/west-africa"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-forest-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-earth-400 mt-0.5 shrink-0" />
                <span>Nigeria (Location TBC)</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-earth-400 shrink-0" />
                <a
                  href="mailto:info@familycarefarmsinit.org"
                  className="hover:text-white transition-colors"
                >
                  info@familycarefarmsinit.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-earth-400 shrink-0" />
                <span>+234 — TBC</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact" className="btn-ghost text-xs px-4 py-2.5">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-forest-800">
        <div className="container-wide py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-forest-500">
          <p>
            © {new Date().getFullYear()} Family Care Farms Initiatives Nigeria.
            All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-forest-300 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-forest-300 transition-colors">
              Contact
            </Link>
            <span className="text-forest-700">
              Partner of Family & Care International, Germany
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
