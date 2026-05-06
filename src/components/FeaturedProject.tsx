import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { featuredProject } from "@/lib/projects";

export default function FeaturedProject() {
  const p = featuredProject;
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 border-t border-card-border/60">
      <SectionHeading
        eyebrow="Featured"
        title={p.name}
        description={p.tagline}
      />

      <div className="mt-10 grid gap-8 rounded-xl border border-card-border bg-card-bg p-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-base leading-relaxed text-foreground/85">
            {p.description}
          </p>

          <ul className="mt-6 space-y-2 text-sm text-foreground/85">
            {p.metrics.map((m) => (
              <li key={m} className="flex gap-2">
                <span className="text-accent">→</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {p.badges?.map((b) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={b.alt}
                src={b.src}
                alt={b.alt}
                className="h-5"
              />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {p.liveUrl && (
              <Link
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
              >
                Visit alivechecks.com
              </Link>
            )}
            {p.repoUrl && (
              <Link
                href={p.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-card-border-strong bg-background px-4 py-2 text-sm font-medium text-foreground hover:border-accent"
              >
                View source
              </Link>
            )}
          </div>
        </div>

        <div className="border-t border-card-border lg:border-l lg:border-t-0 lg:pl-8 pt-8 lg:pt-0">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Stack
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded border border-card-border bg-background px-2 py-1 font-mono text-[11px] text-foreground/90"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
