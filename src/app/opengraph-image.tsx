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
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <svg width="56" height="56" viewBox="0 0 32 32">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#1a3a6b" />
                <stop offset="60%" stopColor="#7c4dff" />
                <stop offset="100%" stopColor="#c62828" />
              </linearGradient>
            </defs>
            <path d="M16 3 L29 27 L22 27 L16 14 L10 27 L3 27 Z" fill="url(#g)" />
          </svg>
          <div style={{ display: "flex", fontSize: "44px", fontWeight: 600, letterSpacing: "-0.02em" }}>
            <span>Apex</span>
            <span style={{ color: "#b388ff" }}>aa</span>
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
              <span>at the root cause.</span>
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
