import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Divine Chukwu — DevOps, Backend & Cloud Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photoBuffer = await readFile(
    join(process.cwd(), "public", "me.jpeg")
  );
  const photoSrc = `data:image/jpeg;base64,${photoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          padding: 80,
          fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
          color: "#ededed",
        }}
      >
        {/* Left column — text */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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
              fontWeight: 600,
              letterSpacing: "-0.01em",
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
            boring tech wins.
          </div>

          {/* Name + role */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 96,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
              }}
            >
              Divine Chukwu.
            </div>
            <div
              style={{
                marginTop: 18,
                fontSize: 38,
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "#a1a1aa",
              }}
            >
              DevOps, Backend & Cloud Engineer.
            </div>
          </div>

          {/* URL */}
          <div
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: 22,
              color: "#a1a1aa",
            }}
          >
            divinechukwu.com
          </div>
        </div>

        {/* Right column — photo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: 60,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img
            src={photoSrc}
            width={340}
            height={425}
            style={{
              width: 340,
              height: 425,
              objectFit: "cover",
              borderRadius: 24,
              border: "2px solid #2a2a30",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
