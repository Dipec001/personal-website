import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://divinechukwu.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Divine Chukwu — DevOps & Backend Engineer",
    template: "%s · Divine Chukwu",
  },
  description:
    "Divine Chukwu builds production systems that actually work — cloud infrastructure, payment platforms, and the unsexy plumbing that keeps the lights on.",
  keywords: [
    "Divine Chukwu",
    "DevOps Engineer",
    "Backend Engineer",
    "AWS",
    "Kubernetes",
    "Terraform",
    "Django",
    "FastAPI",
    "Fintech",
  ],
  authors: [{ name: "Divine Chukwu", url: SITE_URL }],
  creator: "Divine Chukwu",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Divine Chukwu",
    title: "Divine Chukwu — DevOps & Backend Engineer",
    description:
      "Production systems, cloud infrastructure, and payment platforms — built like real products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Chukwu — DevOps & Backend Engineer",
    description:
      "Production systems, cloud infrastructure, and payment platforms — built like real products.",
    creator: "@dipec_pascal",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
