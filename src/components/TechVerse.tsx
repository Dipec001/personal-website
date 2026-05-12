import WaitlistForm from "./WaitlistForm";

export default function TechVerse() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 border-t border-card-border/60">
      <div className="relative overflow-hidden rounded-xl border border-card-border bg-card-bg p-10 sm:p-14">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Coming soon
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            TechVerse · Kubernetes Explained Through Story.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            A new way to learn Kubernetes through a cinematic city universe.
            Episodes coming soon.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
