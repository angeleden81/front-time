"use client";

export default function StaticLedDot({
  top,
  left,
  color,
  on = false,
}: {
  top: number;
  left: number;
  color: string;
  on?: boolean;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width: "14px",
        height: "14px",
        borderRadius: "50%",
        backgroundColor: on ? color : "#111",
        boxShadow: on ? `0 0 12px ${color}` : "none",
        transition: "all 0.3s ease-in-out",
        pointerEvents: "none",
      }}
    />
  );
}
