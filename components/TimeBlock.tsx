"use client";

import StaticLedDot from "./StaticLedDot";

type TimeData = {
  month: string;
  day: string;
  year: string;
  hour: string;
  min: string;
  ampm: "AM" | "PM";
};

type PositionMap = Record<
  keyof TimeData | "ampmAM" | "ampmPM",
  [number, number]
>;

export default function TimeBlock({
  data,
  positions,
  color,
}: {
  data: TimeData;
  positions: PositionMap;
  color: string;
}) {
  return (
    <>
      {Object.entries(data).map(([key, value]) => {
        if (key === "ampm") return null;
        return (
          <span
            key={key}
            style={{
              position: "absolute",
              top: positions[key as keyof TimeData][1],
              left: positions[key as keyof TimeData][0],
              fontFamily: "Digital7, monospace",
              fontSize: "4rem",
              letterSpacing: "4px",
              color,
              textShadow: `0 0 12px ${color}`,
            }}
          >
            {value}
          </span>
        );
      })}

      {/* LEDs AM & PM (une seule allumée à la fois) */}
      <StaticLedDot
        top={positions.ampmAM[1]}
        left={positions.ampmAM[0]}
        color={color}
        on={data.ampm === "AM"}
      />
      <StaticLedDot
        top={positions.ampmPM[1]}
        left={positions.ampmPM[0]}
        color={color}
        on={data.ampm === "PM"}
      />
    </>
  );
}
