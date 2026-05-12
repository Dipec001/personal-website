import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-10 mb-4 text-3xl font-bold tracking-tight text-foreground">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 mb-3 text-2xl font-semibold tracking-tight text-foreground">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-2 text-xl font-semibold text-foreground">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="my-4 leading-relaxed text-foreground/80">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-4 ml-6 list-disc space-y-1 text-foreground/80">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 ml-6 list-decimal space-y-1 text-foreground/80">
      {children}
    </ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-2 border-accent pl-4 italic text-muted">
      {children}
    </blockquote>
  ),
  a: ({ href = "", children }) => {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-accent underline-offset-4 hover:underline"
      >
        {children}
      </Link>
    );
  },
  code: ({ children, className }) => {
    if (className) return <code className={className}>{children}</code>;
    return (
      <code className="rounded bg-card-bg border border-card-border px-1.5 py-0.5 text-sm font-mono text-foreground">
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-card-border bg-card-bg p-4 text-sm leading-relaxed"
      {...props}
    >
      {children}
    </pre>
  ),
  hr: () => <hr className="my-10 border-card-border" />,
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-card-border">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-card-bg border-b border-card-border-strong">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-card-border">{children}</tbody>
  ),
  tr: ({ children }) => <tr>{children}</tr>,
  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-semibold text-foreground">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 align-top text-foreground/85">{children}</td>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
