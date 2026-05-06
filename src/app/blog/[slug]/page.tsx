import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERIES, getAllPostSlugs, getPostMeta } from "@/lib/blog";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const meta = getPostMeta(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      publishedTime: meta.date,
      url: `/blog/${meta.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage(props: {
  params: Promise<Params>;
}) {
  const { slug } = await props.params;
  const meta = getPostMeta(slug);
  if (!meta) notFound();

  const { default: Post } = await import(`@/content/blog/${slug}.mdx`);
  const series = meta.series ? SERIES[meta.series] : null;

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/blog"
        className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent"
      >
        ← Back to blog
      </Link>

      <header className="mt-8 border-b border-card-border pb-8">
        {series && (
          <Link
            href={`/blog/series/${series.slug}`}
            className="inline-block font-mono text-[11px] uppercase tracking-widest text-accent hover:underline underline-offset-4"
          >
            {series.tagline}
          </Link>
        )}
        <h1 className={`${series ? "mt-3" : ""} text-3xl font-semibold tracking-tight text-foreground sm:text-4xl`}>
          {meta.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted">
          <time dateTime={meta.date} className="font-mono">
            {formatDate(meta.date)}
          </time>
          <span aria-hidden>•</span>
          <span className="font-mono">{meta.readTime}</span>
          {meta.tags && meta.tags.length > 0 && (
            <>
              <span aria-hidden>•</span>
              <div className="flex flex-wrap gap-1.5">
                {meta.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-card-border bg-card-bg px-2 py-0.5 font-mono text-[11px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </header>

      <div className="mt-8">
        <Post />
      </div>

      {series && (
        <div className="mt-16 border-t border-card-border pt-8">
          <Link
            href={`/blog/series/${series.slug}`}
            className="group block rounded-lg border border-card-border bg-card-bg p-5 transition-colors hover:border-accent/60"
          >
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
              Part of the series
            </p>
            <p className="mt-2 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
              {series.name} →
            </p>
            <p className="mt-1 text-sm text-muted">{series.description}</p>
          </Link>
        </div>
      )}

      {meta.linkedinUrl && (
        <p className="mt-6 text-xs text-muted">
          Originally shared on{" "}
          <Link
            href={meta.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline underline-offset-4"
          >
            LinkedIn
          </Link>
          .
        </p>
      )}
    </article>
  );
}
