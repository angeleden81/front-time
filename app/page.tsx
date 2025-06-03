"use client";

import WalletSection from "@/components/wallets/WalletSection";
import TimeCircuitOverlay from "@/components/TimeCircuitOverlay";
import FluxCapacitor from "@/components/FluxCapacitor";
import FuelGauge from "@/components/FuelGauge";
import SpeedDisplay from "@/components/SpeedDisplay";
import TemperatureGauge from "@/components/TemperatureGauge";
import PlutoniumCapsule from "@/components/PlutoniumCapsule";
import PlutoniumEmptyCapsule from "@/components/PlutoniumEmptyCapsule";
import FuelCan from "@/components/FuelCan";
import PowerButton from "@/components/PowerButton";
import { PowerProvider } from "@/components/PowerContext";
import PlutoniumButton from "@/components/PlutoniumButton";

export default function Home() {
  const hasPlutonium = true;
  const isFuelAvailable = true;

  return (
    <PowerProvider>
      <main style={styles.main}>
        <h1 style={styles.title}>⛏️ Time Circuit APY</h1>
        <FuelGauge level={90} />
        <SpeedDisplay />
        <FluxCapacitor />
        <TemperatureGauge />

        <FuelCan active={isFuelAvailable} />
        <PowerButton initial={false} />
        <PlutoniumButton />
        <TimeCircuitOverlay />

        <div style={styles.buttonGroup}>
          {["Démarrer", "Récolter", "Refroidir"].map((label) => (
            <button
              key={label}
              style={styles.neomorphButton}
              onMouseDown={(e) =>
                (e.currentTarget.style.transform = "translateY(2px)")
              }
              onMouseUp={(e) =>
                (e.currentTarget.style.transform = "translateY(0px)")
              }
            >
              {label}
            </button>
          ))}
        </div>

        <WalletSection />
      </main>
    </PowerProvider>
  );
}

const styles = {
  main: {
    backgroundColor: "#1f1f1f",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
    textShadow: "0 0 10px #8b43f1",
  },
  buttonGroup: {
    display: "flex",
    gap: "1rem",
    marginBottom: "2rem",
    flexWrap: "wrap" as const,
    justifyContent: "center",
  },
  neomorphButton: {
    padding: "1rem 2rem",
    borderRadius: "40px",
    background: "linear-gradient(145deg, #2e2e2e, #373737)",
    boxShadow: "20px 20px 48px #2b2b2b, -20px -20px 48px #3b3b3b",
    border: "none",
    color: "#ffffff",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "transform 0.1s ease-in-out",
  },
  section: {
    marginBottom: "2rem",
  },
};
