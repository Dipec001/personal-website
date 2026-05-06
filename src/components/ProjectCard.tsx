import Link from "next/link";
import type { Project } from "@/lib/projects";

const statusLabel: Record<NonNullable<Project["status"]>, string> = {
  live: "Live",
  acquired: "Acquired",
  "in-production": "In production",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-lg border border-card-border bg-card-bg p-6 transition-colors hover:border-accent/60 hover:bg-background-elevated">
      <header className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {project.name}
        </h3>
        {project.status && (
          <span className="shrink-0 rounded-md border border-accent/40 bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent">
            {statusLabel[project.status]}
          </span>
        )}
      </header>
      <p className="mt-1 text-sm text-muted">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-foreground/80">
        {project.description}
      </p>

      {project.role && (
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-accent">
          {project.role}
        </p>
      )}

      <ul className="mt-5 space-y-1.5 text-sm text-foreground/85">
        {project.metrics.map((m) => (
          <li key={m} className="flex gap-2">
            <span className="text-accent">→</span>
            <span>{m}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded border border-card-border bg-background px-2 py-0.5 font-mono text-[11px] text-muted"
          >
            {s}
          </span>
        ))}
      </div>

      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-6 flex items-center gap-4 border-t border-card-border pt-4 text-sm">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline underline-offset-4"
            >
              Visit site →
            </Link>
          )}
          {project.repoUrl && (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-foreground"
            >
              GitHub →
            </Link>
          )}
        </div>
      )}
    </article>
  );
}
