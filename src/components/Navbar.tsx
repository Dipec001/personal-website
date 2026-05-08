import Link from "next/link";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-card-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-foreground hover:text-accent transition-colors"
        >
          divine<span className="text-accent">.</span>chukwu
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-md px-3 py-1.5 text-sm text-muted hover:text-foreground hover:bg-card-bg transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="ml-1">
            <a
              href="/divine-chukwu-cv.pdf"
              download
              className="rounded-md border border-card-border-strong bg-card-bg px-3 py-1.5 text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors"
            >
              CV
            </a>
          </li>
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
