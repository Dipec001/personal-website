import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { getSeriesWithCounts } from "@/lib/blog";

export default function Writing() {
  const seriesList = getSeriesWithCounts();

  return (
    <section className="mx-auto max-w-5xl px-6 py-24 border-t border-card-border/60">
      <SectionHeading
        eyebrow="Writing"
        title="Three series, one mission."
        description="I publish what I learn from running production systems — the practical knowledge that doesn't show up in docs."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {seriesList.map((s) => (
          <Link
            key={s.slug}
            href={`/blog/series/${s.slug}`}
            className="group flex flex-col rounded-xl border border-card-border bg-card-bg p-6 transition-all duration-200 hover:border-accent/60 hover:bg-background-elevated hover:-translate-y-0.5"
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              Series
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
              {s.name}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80">
              {s.description}
            </p>
            <div className="mt-5 flex items-center justify-between border-t border-card-border pt-4 font-mono text-xs">
              <span className="text-muted">
                {s.count} {s.count === 1 ? "post" : "posts"}
              </span>
              <span className="text-accent">Read series →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
        >
          See all posts →
        </Link>
      </div>
    </section>
  );
}
