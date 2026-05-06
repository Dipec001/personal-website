import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { SERIES, getAllPosts, getSeriesWithCounts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog · AWS Daily with Divine, K8s with Divine, Notes",
  description:
    "Writing from Divine Chukwu — AWS Daily with Divine, K8s with Divine, and long-form notes on building production systems.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const seriesList = getSeriesWithCounts();

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <SectionHeading
        eyebrow="Writing"
        title="Blog"
        description="Three series. Real problems from production, what broke, and what held."
      />

      {/* Series cards */}
      <div className="mt-10 grid gap-3 sm:grid-cols-3">
        {seriesList.map((s) => (
          <Link
            key={s.slug}
            href={`/blog/series/${s.slug}`}
            className="group rounded-lg border border-card-border bg-card-bg p-4 transition-colors hover:border-accent/60 hover:bg-background-elevated"
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent group-hover:underline underline-offset-4">
              {s.name}
            </p>
            <p className="mt-2 font-mono text-xs text-muted">
              {s.count} {s.count === 1 ? "post" : "posts"}
            </p>
          </Link>
        ))}
      </div>

      {/* All posts list */}
      {posts.length === 0 ? (
        <p className="mt-12 text-muted">No posts yet — check back soon.</p>
      ) : (
        <ul className="mt-12 divide-y divide-card-border">
          {posts.map((p) => {
            const series = p.series ? SERIES[p.series] : null;
            return (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col gap-2 py-6 transition-colors"
                >
                  {series && (
                    <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                      {series.tagline}
                    </p>
                  )}
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
                      {p.title}
                    </h2>
                    <time
                      className="shrink-0 font-mono text-xs text-muted"
                      dateTime={p.date}
                    >
                      {formatDate(p.date)}
                    </time>
                  </div>
                  <p className="text-sm text-muted">{p.description}</p>
                  <p className="font-mono text-xs text-muted">{p.readTime}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
