"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    // No backend yet — this is UI-only as specified.
    setTimeout(() => setStatus("done"), 400);
  };

  if (status === "done") {
    return (
      <p className="text-sm text-foreground/85">
        Got it — <span className="font-mono text-accent">{email}</span> is on the
        list. Episode 1 lands first.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@domain.com"
        className="flex-1 rounded-md border border-card-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "…" : "Join waitlist"}
      </button>
    </form>
  );
}
