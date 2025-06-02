"use client";

import React from "react";
import "./FluxCapacitor.css";

const FluxCapacitor = () => {
  return (
    <div className="flux-wrapper">
      <img
        src="/flux-capacitor.png"
        alt="Flux Capacitor"
        className="flux-img"
      />
      {/* Éclairs animés */}
      <div className="spark spark1" />
      <div className="spark spark2" />
      <div className="spark spark3" />
    </div>
  );
};

export default FluxCapacitor;
