'use client'

import { useState } from 'react'

export default function ConnectWallet() {
  const [address, setAddress] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const connectKasware = async () => {
    try {
      if (typeof window === 'undefined' || !window.kasware) {
        setError('KasWare Wallet non détecté.')
        return
      }

      const accounts = await window.kasware.requestAccounts()
      setAddress(accounts[0])
      setError(null)
    } catch (err) {
      console.error('Connexion KasWare échouée :', err)
      setError('Connexion échouée.')
    }
  }

  return (
    <div style={{ marginTop: '1rem', textAlign: 'center' }}>
      {address ? (
        <p style={{ color: 'green' }}>Connecté : {address}</p>
      ) : (
        <button
          onClick={connectKasware}
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Connecter KasWare
        </button>
      )}
      {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}
    </div>
  )
}
//test