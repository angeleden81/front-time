import React from "react";
import "./FuelCan.css";
import { usePower } from "./PowerContext";

const FuelCan = () => {
  const { lightOn } = usePower();

  return (
    <div className={`fuel-can-wrapper ${lightOn ? "glow" : ""}`}>
      <img src="/fuel.png" alt="Fuel Can" className="fuel-can-img" />
    </div>
  );
};

export default FuelCan;
