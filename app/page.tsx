"use client";

import ConnectWallet from "@/components/ConnectWallet";
import TimeCircuitOverlay from "@/components/TimeCircuitOverlay";

export default function Home() {
  return (
    <main style={styles.main}>
      <h1 style={styles.title}>⛏️ Time Circuit APY</h1>

      <TimeCircuitOverlay />

      <div style={styles.buttonGroup}>
        <button
          style={styles.neomorphButton}
          onMouseDown={(e) =>
            (e.currentTarget.style.transform = "translateY(2px)")
          }
          onMouseUp={(e) =>
            (e.currentTarget.style.transform = "translateY(0px)")
          }
        >
          Démarrer
        </button>
        <button
          style={styles.neomorphButton}
          onMouseDown={(e) =>
            (e.currentTarget.style.transform = "translateY(2px)")
          }
          onMouseUp={(e) =>
            (e.currentTarget.style.transform = "translateY(0px)")
          }
        >
          Récolter
        </button>
        <button
          style={styles.neomorphButton}
          onMouseDown={(e) =>
            (e.currentTarget.style.transform = "translateY(2px)")
          }
          onMouseUp={(e) =>
            (e.currentTarget.style.transform = "translateY(0px)")
          }
        >
          Refroidir
        </button>
      </div>

      <ConnectWallet />
    </main>
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
};
