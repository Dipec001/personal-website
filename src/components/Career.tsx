import SectionHeading from "./SectionHeading";

type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  location?: string;
  blurb: string;
  status?: "current" | "acquired" | "contract";
  note?: string;
};

const roles: Role[] = [
  {
    company: "Kira AI",
    title: "Co-Founder & CTO",
    start: "Oct 2025",
    end: "Present",
    blurb:
      "Building WhatsApp-native banking from zero. 7,500+ users, ₦280M+ processed in production across 5 payment rails.",
    status: "current",
  },
  {
    company: "Travi Mobile Ltd",
    title: "Senior DevOps Engineer",
    start: "Oct 2025",
    end: "Present",
    location: "Remote",
    blurb:
      "Production Kubernetes on AWS EKS, GitOps with ArgoCD, GitHub Actions CI/CD, Terraform-managed infrastructure, cost & performance optimization.",
    status: "current",
    note: "Promoted from DevOps Engineer · Jan 2026",
  },
  {
    company: "Nanocodes Programming Limited",
    title: "Backend Developer",
    start: "Mar 2025",
    end: "Jan 2026",
    location: "Remote",
    blurb:
      "Backend services for production clients. Django, FastAPI, PostgreSQL, AWS.",
  },
  {
    company: "Y-Queue?",
    title: "Co-Founder & Lead Backend Engineer",
    start: "Nov 2023",
    end: "Nov 2025",
    location: "Nigeria · Remote",
    blurb:
      "Co-founded an on-demand food ordering and delivery platform (think Chowdeck / Uber Eats). Built the backend handling orders, payments, and dispatch. 4,000+ users. Successfully acquired.",
    status: "acquired",
  },
  {
    company: "Reispar Technologies",
    title: "Full Stack (Backend) Developer",
    start: "Nov 2023",
    end: "Feb 2024",
    location: "Nigeria · Remote",
    blurb: "Backend services and full-stack delivery.",
    status: "contract",
  },
];

const education = {
  school: "University of Nigeria, Nsukka",
  degree: "B.Eng., Computer & Electronics Engineering",
  start: "Sep 2017",
  end: "Aug 2022",
};

const statusBadge = (status: Role["status"]) => {
  if (!status) return null;
  const map = {
    current: { label: "Current", className: "border-accent/40 bg-accent-soft text-accent" },
    acquired: { label: "Acquired", className: "border-accent/40 bg-accent-soft text-accent" },
    contract: { label: "Contract", className: "border-card-border-strong bg-card-bg text-muted" },
  } as const;
  const { label, className } = map[status];
  return (
    <span className={`shrink-0 rounded-md border px-2 py-0.5 font-mono text-[11px] ${className}`}>
      {label}
    </span>
  );
};

export default function Career() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 border-t border-card-border/60">
      <SectionHeading
        eyebrow="Background"
        title="Career"
        description="Where I've been, what I've built. Reverse chronological."
      />

      <ol className="mt-12 relative">
        {/* The vertical line */}
        <span
          aria-hidden
          className="absolute left-2 top-2 bottom-2 w-px bg-card-border"
        />

        {roles.map((role) => (
          <li key={`${role.company}-${role.start}`} className="relative pl-10 pb-10 last:pb-0">
            {/* The dot */}
            <span
              aria-hidden
              className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-card-border-strong bg-background"
            />
            <span
              aria-hidden
              className={`absolute left-1 top-2.5 h-2 w-2 rounded-full ${
                role.status === "current" ? "bg-accent" : "bg-muted/50"
              }`}
            />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-foreground">
                {role.company}
              </h3>
              <span className="font-mono text-xs text-muted">
                {role.start} — {role.end}
              </span>
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="text-foreground/85">{role.title}</span>
              {role.location && (
                <>
                  <span aria-hidden className="text-muted">·</span>
                  <span className="text-muted">{role.location}</span>
                </>
              )}
              {statusBadge(role.status)}
            </div>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80">
              {role.blurb}
            </p>

            {role.note && (
              <p className="mt-2 font-mono text-[11px] text-muted">{role.note}</p>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-12 border-t border-card-border pt-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Education
        </p>
        <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-base font-medium text-foreground">{education.school}</h3>
          <span className="font-mono text-xs text-muted">
            {education.start} — {education.end}
          </span>
        </div>
        <p className="mt-1 text-sm text-foreground/80">{education.degree}</p>
      </div>
    </section>
  );
}
