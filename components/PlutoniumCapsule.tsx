// src/components/PlutoniumCapsule.tsx
"use client";

import React from "react";
import "./PlutoniumCapsule.css";

const PlutoniumCapsule = () => {
  return (
    <div className="plutonium-wrapper">
      <img
        src="/plutonium.png"
        alt="Plutonium Capsule"
        className="plutonium-img"
      />
      <div className="glow-effect" />
      <div className="inner-red-glow" /> {/* ✅ barre rouge superposée */}
    </div>
  );
};

export default PlutoniumCapsule;
