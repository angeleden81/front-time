// src/components/PlutoniumEmptyCapsule.tsx
"use client";

import React from "react";
import "./PlutoniumCapsule.css";

const PlutoniumEmptyCapsule = () => {
  return (
    <div className="plutonium-wrapper">
      <img
        src="/plutoniumEmpty.png"
        alt="Plutonium Empty Capsule"
        className="plutonium-img plutonium-inactive"
      />
    </div>
  );
};

export default PlutoniumEmptyCapsule;
