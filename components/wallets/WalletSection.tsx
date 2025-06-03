import React from "react";
import KaswareWalletConnect from "./KaswareWalletConnect";
//import SolanaWalletConnect from "./SolanaWalletConnect";
//import XRPWalletConnect from "./XRPWalletConnect";

const WalletSection = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>🪙 Connexions Blockchain</h2>
      <div style={styles.buttonGroup}>
        <KaswareWalletConnect />
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    marginTop: "2rem",
    textAlign: "center" as const,
  },
  title: {
    marginBottom: "1rem",
    fontSize: "1.5rem",
    color: "#ccc",
  },
  buttonGroup: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "1rem",
    justifyContent: "center",
  },
};

export default WalletSection;
