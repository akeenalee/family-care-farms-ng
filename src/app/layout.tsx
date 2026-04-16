import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Family & CareFarm Nigeria",
    template: "%s | Family & CareFarm Nigeria",
  },
  description:
    "West Africa's first Family & Care Farm — integrating professional elderly care with sustainable agriculture, community living, and intergenerational connection. Master CareFarm for West Africa.",
  keywords: [
    "elderly care Nigeria", "care farm Nigeria", "senior care West Africa",
    "dementia care Nigeria", "family care farms", "intergenerational care",
    "sustainable agriculture Nigeria",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Family & CareFarm Nigeria",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
