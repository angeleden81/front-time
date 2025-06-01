export {}

declare global {
  interface Window {
    kasware?: {
      requestAccounts(): Promise<string[]>
      getAccounts(): Promise<string[]>
      getVersion(): Promise<string>
      getNetwork(): Promise<string>
      getPublicKey(): Promise<string>
      getBalance(): Promise<{
        confirmed: number
        unconfirmed: number
        total: number
      }>
      disconnect(origin: string): Promise<void>
      sendKaspa(to: string, sompi: number, options?: { priorityFee?: number; payload?: string }): Promise<string>
      signMessage(msg: string, type?: 'ecdsa' | 'bip322-simple'): Promise<string>
      on(event: string, handler: (...args: any[]) => void): void
      removeListener(event: string, handler: (...args: any[]) => void): void
    }
  }
}
