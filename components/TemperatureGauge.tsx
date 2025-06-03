import React from "react";
import "./TemperatureGauge.css";

const TemperatureGauge = () => {
  const level = 10; // 100% allumé pour test

  return (
    <div className="temp-wrapper">
      <div className="temp-gauge">
        {[...Array(10)].map((_, index) => {
          const levelIndex = 10 - index;
          const isActive = level >= levelIndex;

          return (
            <div
              key={index}
              className={`temp-bar ${isActive ? `on level-${levelIndex}` : ""}`}
            />
          );
        })}
      </div>
      <div className="temp-label">TEMP</div>
    </div>
  );
};

export default TemperatureGauge;
