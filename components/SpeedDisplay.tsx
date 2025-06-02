"use client";

import React, { useEffect, useState } from "react";
import "./SpeedDisplay.css";

const SpeedDisplay = () => {
  const [speed, setSpeed] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed((prev) => {
        if (prev >= 99) setDirection(-1);
        if (prev <= 0) setDirection(1);
        return prev + direction;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="speed-display">
      <img
        src="/set88.png"
        alt="Speed Display Background"
        className="speed-bg"
      />
      <div className="speed-overlay">{speed.toString().padStart(2, "0")}</div>
    </div>
  );
};

export default SpeedDisplay;
