import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Apexaa — Phase III Neuro-Inflammation & Neuro-Ischemia Therapeutics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0a1628 0%, #132041 25%, #1a3a6b 50%, #2d1b69 75%, #0a1628 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="64" height="64" viewBox="0 0 200 200">
            <ellipse cx="100" cy="100" rx="18" ry="78" fill="#ffffff" transform="rotate(0 100 100)" />
            <ellipse cx="100" cy="100" rx="18" ry="78" fill="#7c4dff" transform="rotate(45 100 100)" />
            <ellipse cx="100" cy="100" rx="18" ry="78" fill="#ffffff" transform="rotate(90 100 100)" />
            <ellipse cx="100" cy="100" rx="18" ry="78" fill="#7c4dff" transform="rotate(135 100 100)" />
            <circle cx="100" cy="100" r="14" fill="#7c4dff" />
          </svg>
          <div style={{ display: "flex", fontSize: "44px", fontWeight: 600, letterSpacing: "-0.02em" }}>
            <span>apexaa</span>
            <span style={{ color: "#b388ff" }}>bio</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "20px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#7c4dff",
              fontWeight: 600,
            }}
          >
            Phase III • Neurotherapeutics
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "76px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <span>Targeting&nbsp;</span>
              <span style={{ color: "#7c4dff" }}>Neuro-Inflammation</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <span>&amp;&nbsp;</span>
              <span style={{ color: "#c62828" }}>Neuro-Ischemia</span>
            </div>
            <div style={{ display: "flex" }}>
              <span>where they start.</span>
            </div>
          </div>
        </div>

        {/* Footer band */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#94a3b8",
            fontSize: "22px",
          }}
        >
          <span>apexaa.bio</span>
          <span>Late-stage CNS therapeutics</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
