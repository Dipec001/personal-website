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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Divine Chukwu",
  alternateName: "Dipec",
  url: SITE_URL,
  image: `${SITE_URL}/me.jpeg`,
  jobTitle: "DevOps & Backend Engineer",
  description:
    "DevOps & Backend Engineer. Co-Founder & CTO at Kira AI. Builds production systems that actually work — cloud infrastructure, payment platforms, and the unsexy plumbing that keeps the lights on.",
  email: "mailto:divine@divinechukwu.com",
  sameAs: [
    "https://www.linkedin.com/in/divine-chukwu-63bb04145/",
    "https://github.com/Dipec001",
    "https://x.com/dipec_pascal",
    "https://www.credly.com/users/divinechukwu",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Kira AI",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Nigeria, Nsukka",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
  },
  knowsAbout: [
    "AWS",
    "Amazon Web Services",
    "Kubernetes",
    "Terraform",
    "Docker",
    "Helm",
    "ArgoCD",
    "Python",
    "Django",
    "FastAPI",
    "Celery",
    "PostgreSQL",
    "Redis",
    "Prometheus",
    "Grafana",
    "DevOps",
    "Site Reliability Engineering",
    "Backend Engineering",
    "Cloud Infrastructure",
    "Fintech",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "AWS Certified Solutions Architect — Associate",
      credentialCategory: "certification",
      recognizedBy: { "@type": "Organization", name: "Amazon Web Services" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Certified Kubernetes Administrator (CKA)",
      credentialCategory: "certification",
      recognizedBy: { "@type": "Organization", name: "The Linux Foundation" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "HashiCorp Terraform Associate",
      credentialCategory: "certification",
      recognizedBy: { "@type": "Organization", name: "HashiCorp" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Kubernetes & Cloud Native Associate (KCNA)",
      credentialCategory: "certification",
      recognizedBy: { "@type": "Organization", name: "CNCF" },
    },
  ],
};

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
      "I build production systems that actually work. Cloud infrastructure, payment platforms, and the unsexy plumbing that keeps the lights on.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Chukwu — DevOps & Backend Engineer",
    description:
      "I build production systems that actually work. Cloud infrastructure, payment platforms, and the unsexy plumbing that keeps the lights on.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
