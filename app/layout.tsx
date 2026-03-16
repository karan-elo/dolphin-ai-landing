import type { Metadata } from "next";
import type React from "react";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Dolphin AI — Upload Ready Videos Instantly",
  description:
    "Generate up to 90 second AI videos in 3 clicks. Multi-lingual lip-sync, character swap, motion control, and more. Powered by the latest AI models.",
  keywords: [
    "AI video generation",
    "Dolphin AI",
    "lip sync video",
    "AI studio",
    "90 second videos",
    "motion control",
    "character swap",
  ],
  openGraph: {
    title: "Dolphin AI — Upload Ready Videos Instantly",
    description:
      "Generate up to 90 second AI videos in 3 clicks. Multi-lingual lip-sync, character swap, motion control, and more.",
    type: "website",
    locale: "en_US",
    siteName: "Dolphin AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dolphin AI — Upload Ready Videos Instantly",
    description:
      "Generate up to 90 second AI videos in 3 clicks. The fastest AI video platform.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
