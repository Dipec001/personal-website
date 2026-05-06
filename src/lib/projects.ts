export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  featured?: boolean;
  status?: "live" | "acquired" | "in-production";
  liveUrl?: string;
  repoUrl?: string;
  metrics: string[];
  stack: string[];
  role?: string;
  badges?: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: "alive-checks",
    name: "Alive Checks",
    tagline: "Production-grade uptime & heartbeat monitoring.",
    description:
      "A monitoring platform that watches services from outside and from inside. HTTP probes, heartbeat endpoints for cron jobs, multi-region checks, and a proper alerting story. Built like a real product, not a demo.",
    featured: true,
    status: "live",
    liveUrl: "https://alivechecks.com",
    repoUrl: "https://github.com/Dipec001/uptime-monitor",
    metrics: [
      "40+ Prometheus metrics exposed",
      "Multi-AZ PostgreSQL on AWS RDS",
      "Terraform-managed infra end to end",
      "ECS Fargate deployment with blue/green",
    ],
    stack: [
      "Django",
      "Celery",
      "React",
      "PostgreSQL",
      "Redis",
      "Prometheus",
      "Grafana",
      "AWS ECS",
      "Terraform",
    ],
    badges: [
      {
        src: "https://github.com/Dipec001/uptime-monitor/actions/workflows/ci.yml/badge.svg",
        alt: "CI status",
      },
    ],
  },
  {
    slug: "kira-ai",
    name: "Kira AI",
    tagline: "WhatsApp-native banking platform.",
    description:
      "Banking that meets people where they already are. Kira lets users open accounts, send money, and pay bills entirely through WhatsApp — no app install, no friction. Co-founded and built the platform from zero.",
    status: "in-production",
    role: "Co-Founder & CTO",
    metrics: [
      "7,500+ users onboarded",
      "₦280M+ processed in production",
      "Integrated 5 payment rails",
    ],
    stack: [
      "Python",
      "Django",
      "FastAPI",
      "Paystack",
      "Flutterwave",
      "Monnify",
      "9PSB",
      "Rubies",
      "AWS",
    ],
  },
  {
    slug: "y-queue",
    name: "Y-Queue",
    tagline: "Queue management — acquired.",
    description:
      "Took the pain out of physical queues for service businesses. Customers join from their phone, get notified when it's their turn, and businesses see real-time queue analytics. Successfully acquired.",
    status: "acquired",
    metrics: ["4,000+ users", "Successfully acquired"],
    stack: ["Python", "Django", "PostgreSQL", "AWS"],
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
