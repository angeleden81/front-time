"use client";

import React, { useState, useEffect, useRef } from "react";
import PlutoniumCapsule from "./PlutoniumCapsule";
import PlutoniumEmptyCapsule from "./PlutoniumEmptyCapsule";
import "./PlutoniumButton.css";

const PlutoniumButton = () => {
  const [isHeld, setIsHeld] = useState(false);
  const [lightOn, setLightOn] = useState(true);
  const [capsuleFull, setCapsuleFull] = useState(true);
  const [isCooldown, setIsCooldown] = useState(false);
  const cooldownTimer = useRef<NodeJS.Timeout | null>(null);

  const handleMouseDown = () => {
    setIsHeld(true);

    if (lightOn && !isCooldown) {
      setCapsuleFull((prev) => !prev);
      setLightOn(false);
      setIsCooldown(true);

      cooldownTimer.current = setTimeout(() => {
        setLightOn(true);
        setIsCooldown(false);
      }, 20000);
    }
  };

  const handleMouseUp = () => {
    setIsHeld(false);
  };

  useEffect(() => {
    return () => {
      if (cooldownTimer.current) clearTimeout(cooldownTimer.current);
    };
  }, []);

  return (
    <div className="plutonium-button-wrapper">
      <div
        className="button-zone"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          src={isHeld ? "/buttonOffOrange.png" : "/buttonOnOrange.png"}
          alt="Plutonium Button"
          className="plutonium-img"
        />
        {lightOn && <div className="orange-light" />}
      </div>

      <div style={{ marginTop: "1rem" }}>
        {capsuleFull ? <PlutoniumCapsule /> : <PlutoniumEmptyCapsule />}
      </div>
    </div>
  );
};

export default PlutoniumButton;
