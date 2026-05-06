import Link from "next/link";
import SectionHeading from "./SectionHeading";

const PINNED = [
  {
    name: "uptime-monitor",
    description:
      "Production-grade uptime & heartbeat monitoring (Alive Checks).",
    href: "https://github.com/Dipec001/uptime-monitor",
  },
];

export default function GitHubActivity() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 border-t border-card-border/60">
      <SectionHeading
        eyebrow="GitHub"
        title="Recent activity"
        description="What I've been shipping lately."
      />

      <div className="mt-10 overflow-hidden rounded-xl border border-card-border bg-card-bg p-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://ghchart.rshah.org/40c463/Dipec001"
          alt="Dipec001 GitHub contribution chart"
          className="w-full"
          loading="lazy"
        />
        <p className="mt-3 text-xs text-muted">
          Live contribution graph for{" "}
          <Link
            href="https://github.com/Dipec001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline underline-offset-4"
          >
            @Dipec001
          </Link>
          .
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {PINNED.map((repo) => (
          <Link
            key={repo.name}
            href={repo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-lg border border-card-border bg-card-bg p-5 transition-colors hover:border-accent/60"
          >
            <p className="font-mono text-sm text-accent group-hover:underline underline-offset-4">
              {repo.name}
            </p>
            <p className="mt-2 text-sm text-foreground/80">{repo.description}</p>
          </Link>
        ))}
        <Link
          href="https://github.com/Dipec001?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg border border-dashed border-card-border bg-transparent p-5 text-sm text-muted hover:text-accent hover:border-accent/60 transition-colors"
        >
          View all repositories →
        </Link>
      </div>
    </section>
  );
}
