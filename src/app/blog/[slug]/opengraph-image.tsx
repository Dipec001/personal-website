import { ImageResponse } from "next/og";
import { SERIES, getPostMeta } from "@/lib/blog";

export const alt = "Divine Chukwu · Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function BlogPostOG(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const meta = getPostMeta(slug);
  const series = meta?.series ? SERIES[meta.series] : null;
  const title = meta?.title ?? "Divine Chukwu";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
          color: "#ededed",
        }}
      >
        {/* Eyebrow with accent line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#d4884a",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: 48,
              height: 2,
              background: "#d4884a",
              display: "block",
            }}
          />
          {series ? series.name : "Notes from Production"}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            display: "flex",
            maxWidth: "90%",
          }}
        >
          {title}
        </div>

        {/* Author byline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#a1a1aa",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "#0a0a0a",
                border: "2px solid #2a2a30",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d4884a",
                fontSize: 28,
                fontWeight: 800,
                letterSpacing: "-0.04em",
              }}
            >
              D
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  color: "#ededed",
                  fontSize: 24,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                Divine Chukwu
              </span>
              <span
                style={{
                  fontSize: 18,
                  color: "#a1a1aa",
                }}
              >
                DevOps, Backend & Cloud Engineer
              </span>
            </div>
          </div>
          <div
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: 20,
              color: "#a1a1aa",
            }}
          >
            divinechukwu.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
