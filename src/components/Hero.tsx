import Image from "next/image";
import Link from "next/link";
import AnimatedRole from "./AnimatedRole";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-card-border/60">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16 lg:py-36">
        <div className="min-w-0">
          <p className="animate-fade-in-up flex items-center gap-3 font-mono text-xs font-semibold text-accent">
            <span aria-hidden className="h-px w-8 bg-accent" />
            Boring Tech Wins.
          </p>
          <h1 className="animate-fade-in-up-delay-1 mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Divine Chukwu.
          </h1>
          <p className="animate-fade-in-up-delay-1 mt-2 whitespace-nowrap text-xl font-medium tracking-tight text-muted sm:text-2xl lg:text-3xl">
            <AnimatedRole />
          </p>
          <p className="animate-fade-in-up-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I build production systems that actually work. Cloud infrastructure,
            payment platforms, and the unsexy plumbing that keeps the lights on.
          </p>
          <div className="animate-fade-in-up-delay-3 mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              View Projects
            </Link>
            <Link
              href="/blog"
              className="rounded-md border border-card-border-strong bg-card-bg px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background-elevated hover:border-accent"
            >
              Read Blog
            </Link>
          </div>
        </div>

        <div className="animate-fade-in-up-delay-2 relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-transparent blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-card-border-strong shadow-2xl shadow-black/40">
            <Image
              src="/me.jpeg"
              alt="Divine Chukwu"
              fill
              priority
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 384px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
