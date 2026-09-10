import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { roles, site } from "@/lib/content";

export const dynamic = "force-static";
export const alt = `${site.name} — ${roles[0]}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const palette = {
  background: "#fdfdfc",
  foreground: "#1d1d1b",
  muted: "#70706c",
  line: "#e4e4e1",
};

async function loadSans() {
  return readFile(join(process.cwd(), "public/SF-Pro-Display-Regular.otf"));
}

/**
 * Instrument Serif is served by next/font at runtime, but the image renderer
 * needs the raw file. Google Fonts hands back a TTF when asked without a
 * browser user agent; if that request fails the card falls back to a system
 * serif rather than failing the build.
 */
async function loadSerif() {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0 (compatible; next-og)" } },
    ).then((response) => response.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((response) => response.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const [sans, serif] = await Promise.all([loadSans(), loadSerif()]);

  const fonts = [
    { name: "Sans", data: sans, weight: 400 as const, style: "normal" as const },
    ...(serif ? [{ name: "Serif", data: serif, weight: 400 as const, style: "normal" as const }] : []),
  ];

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          background: palette.background,
          color: palette.foreground,
          fontFamily: "Sans",
          letterSpacing: "-0.01em",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            color: palette.muted,
          }}
        >
          <span style={{ fontFamily: serif ? "Serif" : "Georgia, serif", color: palette.foreground }}>
            {site.shortName}
          </span>
          <span>{site.location}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontFamily: serif ? "Serif" : "Georgia, serif",
              fontSize: 112,
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            {site.name}
          </div>
          <div style={{ fontSize: 34, color: palette.muted }}>{roles[0]}</div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: `2px solid ${palette.line}`,
            fontSize: 24,
            color: palette.muted,
          }}
        >
          <span>Web applications, automation tools, and consumer products</span>
          <span>{site.url.replace("https://", "")}</span>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
