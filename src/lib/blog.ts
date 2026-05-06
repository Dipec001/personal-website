import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type SeriesSlug = "aws-daily-with-divine" | "k8s-with-divine" | "notes";

export type Series = {
  slug: SeriesSlug;
  name: string;
  description: string;
  tagline: string;
};

export const SERIES: Record<SeriesSlug, Series> = {
  "aws-daily-with-divine": {
    slug: "aws-daily-with-divine",
    name: "AWS Daily with Divine",
    description:
      "Daily AWS scenarios from production. Real problems, real fixes — the practical knowledge AWS docs don't teach.",
    tagline: "AWS Daily with Divine",
  },
  "k8s-with-divine": {
    slug: "k8s-with-divine",
    name: "K8s with Divine",
    description:
      "Kubernetes deep dives covering the operational details most engineers miss — eviction order, resource requests, DaemonSets, and more.",
    tagline: "K8s with Divine",
  },
  notes: {
    slug: "notes",
    name: "Notes from Production",
    description:
      "Longer-form essays on building, shipping, and operating real systems with real users.",
    tagline: "Notes from Production",
  },
};

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags?: string[];
  series?: SeriesSlug;
  linkedinUrl?: string;
};

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

function wordsPerMinute(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} min read`;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostMeta(slug: string): PostMeta | null {
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? new Date().toISOString().slice(0, 10),
    readTime: data.readTime ?? wordsPerMinute(content),
    tags: data.tags ?? [],
    series: data.series,
    linkedinUrl: data.linkedinUrl,
  };
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostMeta(slug))
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsBySeries(series: SeriesSlug): PostMeta[] {
  return getAllPosts().filter((p) => p.series === series);
}

export function getSeriesWithCounts(): Array<Series & { count: number; latest?: PostMeta }> {
  const all = getAllPosts();
  return Object.values(SERIES).map((s) => {
    const inSeries = all.filter((p) => p.series === s.slug);
    return {
      ...s,
      count: inSeries.length,
      latest: inSeries[0],
    };
  });
}
