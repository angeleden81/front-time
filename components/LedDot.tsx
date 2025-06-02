"use client";

import { useEffect, useState } from "react";

export default function LedDot({
  top,
  left,
  color,
}: {
  top: number;
  left: number;
  color: string;
}) {
  const [on, setOn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setOn((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: on ? color : "#111",
        boxShadow: on ? `0 0 8px ${color}` : "none",
        transition: "all 0.3s ease-in-out",
        pointerEvents: "none",
      }}
    />
  );
}
