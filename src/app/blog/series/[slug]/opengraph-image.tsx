import { ImageResponse } from "next/og";
import { SERIES, type SeriesSlug, getPostsBySeries } from "@/lib/blog";

export const alt = "Divine Chukwu — Blog series";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function isSeriesSlug(s: string): s is SeriesSlug {
  return s in SERIES;
}

export default async function SeriesOG(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const series = isSeriesSlug(slug) ? SERIES[slug] : null;
  const count = isSeriesSlug(slug) ? getPostsBySeries(slug).length : 0;

  const name = series?.name ?? "Divine Chukwu";
  const description = series?.description ?? "";

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
          Series
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a1a1aa",
              maxWidth: "85%",
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            {description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#a1a1aa",
          }}
        >
          <span
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: 22,
            }}
          >
            {count} {count === 1 ? "post" : "posts"} · by Divine Chukwu
          </span>
          <span
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: 22,
            }}
          >
            divinechukwu.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
