import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "DevOps & Backend Engineer based in Lagos. Co-Founder & CTO at Kira AI. The path, what I value, and what I'm interested in.",
  openGraph: {
    title: "About · Divine Chukwu",
    description:
      "DevOps & Backend Engineer based in Lagos. Co-Founder & CTO at Kira AI. The path, what I value, and what I'm interested in.",
    url: "/about",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      {/* Header — intro + portrait */}
      <header className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            About
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Hey, I&apos;m Divine.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            DevOps, Backend & Cloud Engineer. Co-Founder & CTO at Kira AI.
            Senior DevOps Engineer at Travi Mobile. Based in Nigeria.
          </p>
        </div>
        <div className="relative aspect-[3/4] w-full max-w-[200px] overflow-hidden rounded-2xl border border-card-border-strong shadow-2xl shadow-black/40 sm:max-w-[180px]">
          <Image
            src="/IMG_9745.jpg"
            alt="Divine Chukwu at the Kira AI booth"
            fill
            sizes="200px"
            className="object-cover"
            priority
          />
        </div>
      </header>

      {/* The path */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          The path
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85">
          <p>
            I started building things in Nigeria, the way most engineers here
            start — figure out what&apos;s possible, then ship it before
            it&apos;s polished.
          </p>
          <p>
            University of Nigeria, Nsukka was where I learned the fundamentals
            — Computer &amp; Electronics Engineering. The years after were
            contract work, slowly figuring out what kind of engineer I wanted
            to be: the one who builds things that survive contact with real
            users — and runs the infrastructure they live on.
          </p>
          <p>
            In late 2023 I co-founded{" "}
            <Link
              href="/projects"
              className="text-accent underline-offset-4 hover:underline"
            >
              Y-Queue?
            </Link>{" "}
            — a social-feed-driven food delivery platform (think TikTok meets
            Uber Eats). I led backend. Two years later, we were acquired. That
            experience taught me something I now treat as gospel:{" "}
            <strong className="text-foreground">
              simplicity beats cleverness when real money is involved.
            </strong>
          </p>
          <p>
            Late 2025 I co-founded <strong className="text-foreground">Kira AI</strong>
            {" "}— WhatsApp-native banking. Send money, pay bills, manage
            accounts, all inside a chat. No app install, no friction. As CTO I
            designed the platform from zero — application architecture, cloud
            infrastructure on AWS, payment integrations, and the operational
            tooling that keeps it all running. Today: 9,000+ users, ₦519M+
            processed across five payment rails. Around the same time I joined
            Travi Mobile as a DevOps Engineer running production Kubernetes on
            AWS EKS; promoted to Senior three months later.
          </p>
          <p>
            Outside of that, I write. Two ongoing series —{" "}
            <Link
              href="/blog/series/aws-daily-with-divine"
              className="text-accent underline-offset-4 hover:underline"
            >
              AWS Daily with Divine
            </Link>{" "}
            and{" "}
            <Link
              href="/blog/series/k8s-with-divine"
              className="text-accent underline-offset-4 hover:underline"
            >
              K8s with Divine
            </Link>{" "}
            — are my way of turning operational scars into things other
            engineers can learn from before they get burned the same way.
          </p>
        </div>
      </section>

      {/* What I value */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          What I value
        </h2>
        <ul className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85">
          <li>
            <strong className="text-foreground">Boring tech wins.</strong>{" "}
            Pick the stack you can ship and operate. Novelty is a tax you pay
            every on-call shift.
          </li>
          <li>
            <strong className="text-foreground">
              Production over perfection.
            </strong>{" "}
            A working system in production beats an elegant system in a branch.
            Always.
          </li>
          <li>
            <strong className="text-foreground">
              Observability is a feature.
            </strong>{" "}
            If you can&apos;t answer &ldquo;what is the system doing right
            now?&rdquo; with data, you&apos;re flying blind.
          </li>
          <li>
            <strong className="text-foreground">
              Simplicity beats cleverness when real money is involved.
            </strong>{" "}
            Users care about their money arriving correctly — not how elegant
            your API design is.
          </li>
        </ul>
      </section>

      {/* What I'm interested in */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          What I&apos;m interested in
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85">
          <p>
            Co-Founder &amp; CTO at Kira AI.{" "}
            <strong className="text-foreground">
              I&apos;m happy to talk to teams working on:
            </strong>
          </p>
          <ul className="ml-6 list-disc space-y-3">
            <li>
              Senior{" "}
              <strong className="text-foreground">
                DevOps / Platform / SRE
              </strong>{" "}
              roles — especially at fintechs, payments companies, or
              infrastructure SaaS where the system actually runs in production
              with real users and real money.
            </li>
            <li>
              Senior{" "}
              <strong className="text-foreground">
                Cloud Engineering / Solutions Architect
              </strong>{" "}
              roles — designing and operating AWS-native systems for the same
              kind of company.
            </li>
            <li>
              Senior{" "}
              <strong className="text-foreground">backend engineering</strong>{" "}
              roles where the codebase carries the same weight.
            </li>
          </ul>
          <p>
            Based in Nigeria. Remote-first. Open to relocation{" "}
            <strong className="text-foreground">
              for the right opportunity.
            </strong>
          </p>
          <p>
            Less interested in ad-tech, crypto, or anywhere the pitch leads
            with &ldquo;we&apos;re disrupting.&rdquo; I want to ship
            infrastructure, not slogans.
          </p>
        </div>
      </section>

      {/* Quickest path */}
      <section className="mt-16 border-t border-card-border pt-10">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Quickest path
        </h2>
        <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-base">
          <li>
            <Link
              href="mailto:divine@divinechukwu.com"
              className="text-accent underline-offset-4 hover:underline"
            >
              divine@divinechukwu.com
            </Link>
          </li>
          <li aria-hidden className="text-muted">
            ·
          </li>
          <li>
            <a
              href="/divine-chukwu-cv.pdf"
              download
              className="text-accent underline-offset-4 hover:underline"
            >
              Download CV
            </a>
          </li>
          <li aria-hidden className="text-muted">
            ·
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/divine-chukwu-63bb04145/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              LinkedIn
            </Link>
          </li>
          <li aria-hidden className="text-muted">
            ·
          </li>
          <li>
            <Link
              href="https://github.com/Dipec001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
