import SectionHeading from "./SectionHeading";

const groups = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Bash", "SQL"],
  },
  {
    label: "Cloud",
    items: [
      "AWS EC2",
      "ECS",
      "EKS",
      "RDS",
      "Lambda",
      "S3",
      "IAM",
      "VPC",
      "Route 53",
      "Secrets Manager",
      "CloudWatch",
    ],
  },
  {
    label: "Infrastructure",
    items: ["Linux", "Terraform", "Docker", "Kubernetes", "Helm", "ArgoCD", "Nginx"],
  },
  {
    label: "Backend",
    items: ["Django", "FastAPI"],
  },
  {
    label: "Messaging",
    items: ["SQS", "RabbitMQ", "Celery"],
  },
  {
    label: "Observability",
    items: ["Prometheus", "Grafana", "Loki", "Sentry", "CloudWatch Logs"],
  },
  {
    label: "CI/CD",
    items: ["GitHub Actions"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "Redis", "MySQL"],
  },
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 border-t border-card-border/60">
      <SectionHeading
        eyebrow="Toolbox"
        title="What I work with"
        description="The stack I reach for, organized by what it actually does."
      />
      <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.label} className="border-l-2 border-card-border pl-5">
            <dt className="font-mono text-xs uppercase tracking-widest text-muted">
              {g.label}
            </dt>
            <dd className="mt-3 flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-card-border bg-card-bg px-2.5 py-1 text-xs text-foreground/90"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
