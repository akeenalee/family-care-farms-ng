"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  {
    label: "Our Model",
    href: "/model",
    children: [
      { label: "How It Works", href: "/model/how-it-works" },
      { label: "Daily Life", href: "/model/daily-life" },
      { label: "Intergenerational", href: "/model/intergenerational" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Elderly Care", href: "/services/elderly-care" },
      { label: "Dementia Support", href: "/services/dementia" },
      { label: "Farm Therapy", href: "/services/farm-therapy" },
      { label: "Training & Education", href: "/services/training" },
    ],
  },
  { label: "West Africa Hub", href: "/west-africa" },
  { label: "News", href: "/news" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = isHome && !scrolled
    ? "bg-transparent"
    : "bg-white shadow-sm border-b border-gray-100";

  const textColor = isHome && !scrolled ? "text-white" : "text-gray-800";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 shrink-0">
              <Image
                src="/images/logo-fc-official.png"
                alt="Family & Care"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className={`font-display font-bold text-sm leading-tight transition-colors ${isHome && !scrolled ? "text-white" : "text-forest-900"}`}>
                Family & CareFarm
              </div>
              <div className={`text-[9px] tracking-[0.18em] uppercase transition-colors ${isHome && !scrolled ? "text-white/70" : "text-earth-500"}`}>
                Nigeria · West Africa
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold tracking-wide transition-colors rounded-sm ${textColor} hover:opacity-75`}>
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-100 shadow-lg rounded-sm overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-forest-50 hover:text-forest-700 transition-colors border-b border-gray-50 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-semibold tracking-wide transition-colors rounded-sm hover:opacity-75 ${textColor} ${pathname === link.href ? "underline underline-offset-4" : ""}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/partners"
              className={`text-sm font-semibold transition-colors ${isHome && !scrolled ? "text-white/80 hover:text-white" : "text-forest-700 hover:text-forest-900"}`}
            >
              Partner With Us
            </Link>
            <Link href="/apply/resident" className="btn-primary text-xs px-5 py-2.5">
              Apply Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-sm transition-colors ${textColor}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container-wide py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-forest-50 rounded-sm transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-6 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-forest-50 rounded-sm transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <Link href="/partners" onClick={() => setIsOpen(false)} className="btn-secondary w-full justify-center text-xs">
                Partner With Us
              </Link>
              <Link href="/apply/resident" onClick={() => setIsOpen(false)} className="btn-primary w-full justify-center text-xs">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
