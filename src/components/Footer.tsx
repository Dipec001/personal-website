import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-card-border/60 mt-24">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Divine Chukwu</p>
        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/Dipec001"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/divine-chukwu-63bb04145/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:dpecchukwu@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
