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
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
