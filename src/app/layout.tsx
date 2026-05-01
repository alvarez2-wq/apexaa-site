import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apexaa | Phase III Neuro-Inflammation & Neuro-Ischemia Therapeutics",
  description:
    "Apexaa is a Phase III biotech advancing late-stage therapeutics for neuro-inflammation and neuro-ischemia — addressing the most under-served disorders of the central nervous system.",
  keywords: [
    "Apexaa",
    "neuro-inflammation",
    "neuro-ischemia",
    "Phase III biotech",
    "neurotherapeutics",
    "CNS therapeutics",
    "neurology pipeline",
    "stroke therapeutics",
    "neuroprotection",
    "clinical-stage biotech",
    "late-stage biotech",
    "central nervous system",
  ],
  authors: [{ name: "Apexaa" }],
  creator: "Apexaa",
  publisher: "Apexaa",
  metadataBase: new URL("https://apexaa.bio"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Apexaa | Phase III Neuro-Inflammation & Neuro-Ischemia Therapeutics",
    description:
      "Late-stage biotech advancing pivotal-trial therapeutics for neuro-inflammation and neuro-ischemia.",
    url: "https://apexaa.bio",
    siteName: "Apexaa",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apexaa | Phase III Neurotherapeutics",
    description:
      "Late-stage biotech advancing therapeutics for neuro-inflammation and neuro-ischemia.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
