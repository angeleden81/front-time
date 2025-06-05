"use client";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    kasware?: any;
  }
}

const KaswareWalletConnect = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null); // en sompi
  const [network, setNetwork] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    if (typeof window === "undefined" || !window.kasware) {
      setError("Kasware Wallet non détecté. Redirection vers kasware.app...");
      window.open("https://www.kasware.app/", "_blank");
      return;
    }

    setLoading(true);
    try {
      const accounts: string[] = await window.kasware.requestAccounts();
      const addr = accounts[0];
      setAddress(addr);
      setError(null);
      fetchBalance();
      fetchNetwork();
    } catch (err: any) {
      console.error("Erreur Kasware:", err);
      setError(err?.message || "Erreur lors de la connexion.");
    } finally {
      setLoading(false);
    }
  };

  const disconnectWallet = async () => {
    try {
      await window.kasware.disconnect(window.location.origin);
      setAddress(null);
      setBalance(null);
      setNetwork(null);
      setError(null);
    } catch (err: any) {
      console.error("Erreur de déconnexion :", err);
      setError(err?.message || "Erreur lors de la déconnexion.");
    }
  };

  const fetchBalance = async () => {
    try {
      const result = await window.kasware.getBalance();
      setBalance(result.total);
    } catch (e) {
      console.error("Erreur récupération balance:", e);
    }
  };

  const fetchNetwork = async () => {
    try {
      const net = await window.kasware.getNetwork();
      setNetwork(net);
    } catch (e) {
      console.error("Erreur récupération réseau:", e);
    }
  };

  useEffect(() => {
    if (!window.kasware) return;

    const handleAccountsChanged = (accounts: string[]) => {
      setAddress(accounts[0] || null);
      fetchBalance();
    };

    const handleNetworkChanged = (net: string) => {
      setNetwork(net);
    };

    const handleBalanceChanged = (res: any) => {
      setBalance(res.balance?.total || 0);
    };

    // Vérifie si l'utilisateur est déjà connecté
    window.kasware.getAccounts?.().then((accounts: string[]) => {
      if (accounts.length > 0) {
        setAddress(accounts[0]);
        fetchBalance();
        fetchNetwork();
      }
    });

    // Abonnement
    window.kasware.on("accountsChanged", handleAccountsChanged);
    window.kasware.on("networkChanged", handleNetworkChanged);
    window.kasware.on("balanceChanged", handleBalanceChanged);

    // Nettoyage
    return () => {
      window.kasware?.removeListener?.(
        "accountsChanged",
        handleAccountsChanged
      );
      window.kasware?.removeListener?.("networkChanged", handleNetworkChanged);
      window.kasware?.removeListener?.("balanceChanged", handleBalanceChanged);
    };
  }, []);

  return (
    <div className="p-4 rounded-lg shadow-md bg-gray-900 text-white max-w-md mx-auto space-y-4">
      <h2 className="text-xl font-bold">Kasware Wallet</h2>

      {address ? (
        <>
          <p className="text-green-400">Adresse : {address}</p>
          {balance !== null && (
            <p className="text-blue-400">
              Balance : {(balance / 1e8).toFixed(8)} KAS
            </p>
          )}
          <p className="text-yellow-400">Réseau : {network}</p>
          <button
            onClick={disconnectWallet}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-full transition"
          >
            Déconnecter
          </button>
        </>
      ) : (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-full transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Connexion..." : "Connecter Kasware"}
        </button>
      )}

      {error && <p className="text-red-400">{error}</p>}
    </div>
  );
};

export default KaswareWalletConnect;
