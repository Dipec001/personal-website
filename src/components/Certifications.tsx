import Link from "next/link";
import SectionHeading from "./SectionHeading";

type Cert = {
  name: string;
  date: string;
  issuer: string;
  score?: string;
  badge: string;
  verifyUrl?: string;
};

const certs: Cert[] = [
  {
    name: "AWS Certified Solutions Architect — Associate",
    date: "Jan 2026",
    issuer: "Amazon Web Services",
    badge: "/certs/saa-co3.png",
    verifyUrl:
      "https://www.credly.com/badges/5262a42a-23cf-4d82-b93c-5f5c50d1810c/public_url",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    date: "Apr 2026",
    issuer: "The Linux Foundation",
    score: "88%",
    badge: "/certs/cka.png",
    verifyUrl:
      "https://www.credly.com/badges/a0731dba-6099-48b4-8e7d-2be1aff8df2e/public_url",
  },
  {
    name: "HashiCorp Terraform Associate",
    date: "May 2026",
    issuer: "HashiCorp",
    badge: "/certs/terraform-associate.png",
  },
];

export default function Certifications() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeading
        eyebrow="Credentials"
        title="Certifications"
        description="Proof of work at the platforms I deploy to every day."
      />
      <ul className="mt-12 grid gap-3 md:grid-cols-3">
        {certs.map((c) => {
          const cardClass =
            "group relative flex h-full items-start gap-4 rounded-lg border border-card-border bg-card-bg p-5 transition-all duration-200 hover:border-accent hover:bg-background-elevated hover:-translate-y-0.5";
          const inner = (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.badge}
                alt={`${c.name} badge`}
                width={80}
                height={80}
                className="h-20 w-20 shrink-0 rounded-md object-contain"
                loading="lazy"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2 pr-5">
                  <span className="text-base font-medium leading-snug text-foreground decoration-accent underline-offset-4 group-hover:text-accent group-hover:underline transition-colors">
                    {c.name}
                  </span>
                  {c.score && (
                    <span className="shrink-0 rounded-md border border-accent/40 bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent">
                      {c.score}
                    </span>
                  )}
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted">
                  <span>{c.issuer}</span>
                  <span aria-hidden>•</span>
                  <span className="font-mono">{c.date}</span>
                </div>
              </div>
              {c.verifyUrl && (
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute top-3 right-3 h-3.5 w-3.5 text-muted opacity-60 transition-all duration-200 group-hover:text-accent group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              )}
            </>
          );
          return (
            <li key={c.name}>
              {c.verifyUrl ? (
                <Link
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {inner}
                </Link>
              ) : (
                <div className={cardClass}>{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
