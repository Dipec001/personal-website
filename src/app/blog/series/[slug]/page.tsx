import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionHeading from "@/components/SectionHeading";
import {
  SERIES,
  type SeriesSlug,
  getPostsBySeries,
} from "@/lib/blog";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return Object.keys(SERIES).map((slug) => ({ slug }));
}

function isSeriesSlug(s: string): s is SeriesSlug {
  return s in SERIES;
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  if (!isSeriesSlug(slug)) return {};
  const series = SERIES[slug];
  return {
    title: series.name,
    description: series.description,
    openGraph: {
      title: series.name,
      description: series.description,
      url: `/blog/series/${slug}`,
      type: "website",
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function SeriesPage(props: {
  params: Promise<Params>;
}) {
  const { slug } = await props.params;
  if (!isSeriesSlug(slug)) notFound();

  const series = SERIES[slug];
  const posts = getPostsBySeries(slug);

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/blog"
        className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent"
      >
        ← All series
      </Link>

      <div className="mt-8">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Series
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {series.name}
        </h1>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
          {series.description}
        </p>
        <p className="mt-2 font-mono text-xs text-muted">
          {posts.length} {posts.length === 1 ? "post" : "posts"} so far
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="mt-12 text-muted">No posts in this series yet.</p>
      ) : (
        <ul className="mt-12 divide-y divide-card-border">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex flex-col gap-2 py-6"
              >
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
          ))}
        </ul>
      )}
    </section>
  );
}
