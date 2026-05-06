"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="rounded-md p-2 text-foreground hover:bg-card-bg transition-colors"
      >
        <svg
          width={22}
          height={22}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          {open ? (
            <>
              <path d="M18 6 6 18" />
              <path d="M6 6l12 12" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-x-0 top-14 bottom-0 z-30 bg-background/95 backdrop-blur-md"
          onClick={close}
        >
          <nav
            className="border-b border-card-border bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="mx-auto max-w-5xl px-6 py-4 space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={close}
                    className="block rounded-md px-3 py-3 text-base text-foreground hover:bg-card-bg transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/divine-chukwu-cv.pdf"
                  download
                  onClick={close}
                  className="block rounded-md border border-card-border-strong bg-card-bg px-3 py-3 text-base font-medium text-foreground hover:border-accent transition-colors"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
