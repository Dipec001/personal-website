import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Production systems Divine Chukwu has built and shipped, uptime monitoring, fintech, and queue management.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects"
        description="Things I've built that ran in production with real users and real money on the line."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
