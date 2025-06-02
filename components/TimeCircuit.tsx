"use client";

import { useEffect, useState } from "react";

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

function formatTime(date: Date) {
  const month = months[date.getMonth()];
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  let hour = date.getHours();
  const min = String(date.getMinutes()).padStart(2, "0");
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return { month, day, year, hour: String(hour).padStart(2, "0"), min, ampm };
}

export default function TimeCircuit() {
  const [dates, setDates] = useState({
    destination: formatTime(new Date(2050, 10, 15, 21, 45)),
    present: formatTime(new Date()),
    last: formatTime(new Date(1985, 9, 26, 1, 20)),
  });

  return (
    <div style={styles.container}>
      <TimeRow
        label="DESTINATION TIME"
        data={dates.destination}
        color="#ff4c4c"
      />
      <TimeRow label="PRESENT TIME" data={dates.present} color="#00ff80" />
      <TimeRow label="LAST TIME DEPARTED" data={dates.last} color="#ffcc00" />
    </div>
  );
}

function TimeRow({
  label,
  data,
  color,
}: {
  label: string;
  data: any;
  color: string;
}) {
  return (
    <div style={{ ...styles.row }}>
      <div style={styles.fields}>
        <Field text={data.month} color={color} />
        <Field text={data.day} color={color} />
        <Field text={data.year} color={color} />
        <Field text={data.hour} color={color} />
        <Field text={data.min} color={color} />
        <Field text={data.ampm} color={color} />
      </div>
      <p style={styles.label}>{label}</p>
    </div>
  );
}

function Field({ text, color }: { text: string; color: string }) {
  return (
    <span
      style={{ ...styles.field, color: color, textShadow: `0 0 10px ${color}` }}
    >
      {text}
    </span>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
    marginBottom: "2rem",
    padding: "1rem",
    backgroundColor: "#111",
    borderRadius: "8px",
  },
  row: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
  },
  fields: {
    display: "flex",
    gap: "1rem",
    fontFamily: "monospace",
    fontSize: "2rem",
  },
  field: {
    width: "80px",
    textAlign: "center" as const,
    backgroundColor: "#000",
    padding: "0.5rem 0",
    borderRadius: "4px",
  },
  label: {
    marginTop: "0.3rem",
    fontSize: "0.75rem",
    color: "#888",
  },
};
