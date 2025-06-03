"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type PowerContextType = {
  lightOn: boolean;
  setLightOn: (on: boolean) => void;
};

const PowerContext = createContext<PowerContextType | undefined>(undefined);

export const PowerProvider = ({ children }: { children: ReactNode }) => {
  const [lightOn, setLightOn] = useState(true);
  return (
    <PowerContext.Provider value={{ lightOn, setLightOn }}>
      {children}
    </PowerContext.Provider>
  );
};

export const usePower = () => {
  const context = useContext(PowerContext);
  if (!context) throw new Error("usePower must be used within PowerProvider");
  return context;
};
