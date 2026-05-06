import Link from "next/link";
import SectionHeading from "./SectionHeading";

const channels = [
  {
    label: "Email",
    handle: "dpecchukwu@gmail.com",
    href: "mailto:dpecchukwu@gmail.com",
  },
  {
    label: "LinkedIn",
    handle: "in/divine-chukwu",
    href: "https://www.linkedin.com/in/divine-chukwu-63bb04145/",
  },
  {
    label: "GitHub",
    handle: "@Dipec001",
    href: "https://github.com/Dipec001",
  },
  {
    label: "Twitter / X",
    handle: "@dipec_pascal",
    href: "https://x.com/dipec_pascal",
  },
];

type Props = {
  variant?: "preview" | "full";
};

export default function ContactSection({ variant = "preview" }: Props) {
  return (
    <section
      className={`mx-auto max-w-5xl px-6 ${
        variant === "full" ? "py-16" : "py-24 border-t border-card-border/60"
      }`}
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk"
        description="Working on cloud infra, payments, or developer tools? I'm interested. Quickest path is email."
      />

      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {channels.map((c) => {
          const isExternal = c.href.startsWith("http");
          return (
            <li key={c.label}>
              <Link
                href={c.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between rounded-lg border border-card-border bg-card-bg px-5 py-4 transition-colors hover:border-accent/60 hover:bg-background-elevated"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">
                    {c.label}
                  </p>
                  <p className="mt-1 text-base text-foreground">{c.handle}</p>
                </div>
                <span className="text-muted group-hover:text-accent transition-colors">
                  →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
