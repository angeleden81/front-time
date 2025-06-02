"use client";

import Image from "next/image";
import LedDot from "./LedDot";
import TimeBlock from "./TimeBlock";

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function formatHour24to12(hour24: number): {
  hour12: string;
  ampm: "AM" | "PM";
} {
  const ampm = hour24 >= 12 ? "PM" : "AM";
  const hour = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return { hour12: String(hour).padStart(2, "0"), ampm };
}

function getCurrentTime() {
  const now = new Date();
  const month = months[now.getMonth()];
  const day = String(now.getDate()).padStart(2, "0");
  const year = String(now.getFullYear());
  const { hour12, ampm } = formatHour24to12(now.getHours());
  const min = String(now.getMinutes()).padStart(2, "0");
  return { month, day, year, hour: hour12, min, ampm };
}

// Tu pourras modifier ces valeurs dynamiquement par fonction plus tard
const destinationTime = {
  month: "JAN",
  day: "15",
  year: "2050",
  hour: "08",
  min: "21",
  ampm: "PM",
};
const presentTime = getCurrentTime();
const lastTime = {
  month: "OCT",
  day: "26",
  year: "1985",
  hour: "01",
  min: "20",
  ampm: "PM",
};

export default function TimeCircuitOverlay() {
  return (
    <div style={styles.wrapper}>
      <Image
        src="/time-circuits.png"
        alt="Time Circuit"
        width={700}
        height={400}
        style={{ width: "100%", height: "auto" }}
      />

      <div style={styles.overlay}>
        <TimeBlock
          data={destinationTime}
          positions={positionMap.destination}
          color="#ff4c4c"
        />
        <TimeBlock
          data={presentTime}
          positions={positionMap.present}
          color="#00ff80"
        />
        <TimeBlock
          data={lastTime}
          positions={positionMap.departed}
          color="#ffcc00"
        />

        {/* LED entre heures et minutes */}
        <LedDot top={53} left={555} color="#ff4c4c" />
        <LedDot top={71} left={555} color="#ff4c4c" />
        <LedDot top={198} left={550} color="#00ff80" />
        <LedDot top={217} left={550} color="#00ff80" />
        <LedDot top={341} left={548} color="#ffcc00" />
        <LedDot top={360} left={548} color="#ffcc00" />
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative" as const,
    width: "700px",
    maxWidth: "100%",
    marginBottom: "2rem",
  },
  overlay: {
    position: "absolute" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    fontSize: "16px",
  },
};

const positionMap = {
  destination: {
    month: [48, 35],
    day: [195, 35],
    year: [300, 35],
    hour: [480, 35],
    min: [580, 35],
    ampmAM: [450, 45],
    ampmPM: [448, 83],
  },
  present: {
    month: [48, 180],
    day: [185, 180],
    year: [290, 180],
    hour: [480, 180],
    min: [580, 180],
    ampmAM: [441, 192],
    ampmPM: [441, 225],
  },
  departed: {
    month: [48, 325],
    day: [175, 325],
    year: [300, 325],
    hour: [480, 325],
    min: [580, 325],
    ampmAM: [441, 300],
    ampmPM: [440, 370],
  },
};
