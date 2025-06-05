"use client";

import WalletSection from "@/components/wallets/WalletSection";
import TimeCircuitOverlay from "@/components/TimeCircuitOverlay";
import FluxCapacitor from "@/components/FluxCapacitor";
import FuelGauge from "@/components/FuelGauge";
import SpeedDisplay from "@/components/SpeedDisplay";
import TemperatureGauge from "@/components/TemperatureGauge";
import PlutoniumCapsule from "@/components/PlutoniumCapsule";
import FuelCan from "@/components/FuelCan";
import PowerButton from "@/components/PowerButton";
import { PowerProvider } from "@/components/PowerContext";
import PlutoniumButton from "@/components/PlutoniumButton";

export default function Home() {
  const hasPlutonium = true;
  const isFuelAvailable = true;

  return (
    <>
      <PowerProvider>
        <main className="main-container">
          <video autoPlay muted loop playsInline className="background">
            <source src="/background.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo HTML5.
          </video>

          <div className="wallet-container">
            <WalletSection />
          </div>

          <h1>⛏️ Time Circuit APY</h1>

          <section className="section-row">
            <SpeedDisplay />
          </section>

          <section>
            <div className="section-row">
              <div className="column">
                <div className="scaled">
                  <FuelCan active={isFuelAvailable} />
                </div>
                <div className="scaled">
                  <PowerButton initial={false} />
                </div>
                <div className="scaled">
                  <TemperatureGauge />
                </div>
                <div className="scaled">
                  <FuelGauge level={90} />
                </div>
              </div>

              <div className="section-row">
                <div className="scaled">
                  <TimeCircuitOverlay />
                </div>
                <div className="column">
                  <div className="scaled">
                    <PlutoniumCapsule />
                  </div>
                  <div className="scaled">
                    <PlutoniumButton />
                  </div>
                  <div className="scaled">
                    <FluxCapacitor />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="button-group">
            {["Démarrer", "Récolter", "Refroidir"].map((label) => (
              <button
                key={label}
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
    </>
  );
}
