// src/components/FuelGauge.tsx
import React from "react";
import "./FuelGauge.css";

type Props = {
  level: number; // 0 à 100
};

const FuelGauge: React.FC<Props> = ({ level }) => {
  const clamped = Math.max(0, Math.min(level, 100));
  const angle = -90 + (clamped * 180) / 100; // -90° (vide) → +90° (plein)

  return (
    <div className="gauge-container">
      <img src="/fuel-gauge.png" alt="Fuel Gauge" className="gauge-bg" />
      <div
        className="gauge-needle"
        style={{ transform: `rotate(${angle}deg)` }}
      />
      <div className="gauge-center" />
    </div>
  );
};

export default FuelGauge;
