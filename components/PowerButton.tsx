"use client";

import React, { useEffect, useRef, useState } from "react";
import "./PowerButton.css";
import { usePower } from "./PowerContext"; // ⚠️ important : importer le contexte

const PowerButton = () => {
  const [isHeld, setIsHeld] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const { lightOn, setLightOn } = usePower(); // 🔌 on récupère le state global

  const handleMouseDown = () => {
    setIsHeld(true);

    if (lightOn && !isCooldown) {
      setLightOn(false);
      setIsCooldown(true);

      timerRef.current = setTimeout(() => {
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
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      className="power-button-wrapper"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <img
        src={isHeld ? "/buttonOff.png" : "/buttonOn.png"}
        alt="Push Button"
        className="power-img"
        style={{ cursor: "pointer" }}
      />
      {lightOn && <div className="red-light" />}
    </div>
  );
};

export default PowerButton;
