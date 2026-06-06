import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 30% 28%, #74282e, #5a1f24 55%, #3d1418 100%)",
          color: "#f7f0e4",
          position: "relative",
        }}
      >
        {/* Inner gold hairline frame */}
        <div
          style={{
            position: "absolute",
            inset: 14,
            borderRadius: 22,
            border: "1.4px solid rgba(214,178,122,0.55)",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            position: "absolute",
            top: 26,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            fontSize: 9,
            letterSpacing: 4,
            color: "#d6b27a",
            fontWeight: 600,
          }}
        >
          DR. PETRINA HARRISON
        </div>

        {/* Serif P monogram */}
        <div
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 130,
            fontWeight: 500,
            lineHeight: 1,
            marginTop: 6,
            color: "#f7f0e4",
          }}
        >
          P
        </div>

        {/* Tagline */}
        <div
          style={{
            position: "absolute",
            bottom: 22,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: 12,
            color: "rgba(214,178,122,0.85)",
          }}
        >
          No Woman Left Behind
        </div>
      </div>
    ),
    { ...size }
  );
}
