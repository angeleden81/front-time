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
        {/* Wallet en haut à droite */}
        <div style={styles.walletContainer}>
          <WalletSection />
        </div>

        {/* Titre centré */}
        <h1 style={styles.title}>⛏️ Time Circuit APY</h1>

        {/* Groupe supérieur : jauges principales */}
        <section style={styles.sectionRow}>
          <SpeedDisplay />
        </section>

        {/* Groupe central : circuit visuel */}
        <section style={styles.section}>
          <div style={styles.timeCircuitRow}>
            {/* Colonne de gauche avec tous les éléments empilés */}
            <div style={styles.leftColumn}>
              <div style={styles.scaledComponent}>
                <FuelCan active={isFuelAvailable} />
              </div>
              <div style={styles.scaledComponent}>
                <PowerButton initial={false} />
              </div>
              <div style={styles.scaledComponent}>
                <TemperatureGauge />
              </div>
              <div style={styles.scaledComponent}>
                <FuelGauge level={90} />
              </div>
            </div>
            {/* Colonne centrale */}
            <div style={styles.centerColumn}>
              <div style={styles.scaledComponent}>
                <TimeCircuitOverlay />
              </div>

              {/* Colonne droite : plutonium + flux */}
              <div style={styles.rightColumn}>
                <div style={styles.scaledComponent}>
                  <PlutoniumCapsule />
                </div>
                <div style={styles.scaledComponent}>
                  <PlutoniumButton />
                </div>
                <div style={styles.scaledComponent}>
                  <FluxCapacitor />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Groupe boutons d'action */}
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
    alignItems: "center",
    padding: "2rem",
    position: "relative" as const,
  },
  walletContainer: {
    position: "absolute" as const,
    top: "1rem",
    right: "1rem",
    zIndex: 10,
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "2rem",
    textShadow: "0 0 10px #8b43f1",
    textAlign: "center" as const,
  },
  section: {
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "1rem",
  },
  sectionRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    marginBottom: "2rem",
    flexWrap: "wrap" as const,
  },
  row: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    flexWrap: "wrap" as const,
  },
  buttonGroup: {
    display: "flex",
    gap: "1rem",
    marginTop: "2rem",
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
  timeCircuitRow: {
    display: "flex",
    flexDirection: "row" as const,
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
    marginBottom: "2rem",
    flexWrap: "wrap" as const,
  },
  leftColumn: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
    alignItems: "center",
    justifyContent: "center",
  },
  scaledComponent: {
    transform: "scale(0.75)",
    transformOrigin: "center",
  },
  centerColumn: {
    display: "flex",
    flexDirection: "row" as const,
    gap: "2rem",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap" as const,
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.2rem",
    alignItems: "center",
    justifyContent: "center",
  },
};
