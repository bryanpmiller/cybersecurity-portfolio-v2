import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { profile } from "@/lib/data/profile";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Cybersecurity Portfolio`,
    template: `%s | ${profile.name}`
  },
  description: profile.headline,
  openGraph: {
    title: `${profile.name} | Cybersecurity Portfolio`,
    description: profile.headline,
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-body antialiased">
        <div className="site-shell flex min-h-screen flex-col">
          <a
            className="focus-ring sr-only fixed left-4 top-4 z-50 rounded-md border border-evidence/45 bg-ink px-4 py-3 text-sm font-semibold text-white shadow-soft focus:not-sr-only"
            href="#main-content"
          >
            Skip to content
          </a>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
