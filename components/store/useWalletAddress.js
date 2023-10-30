import { create } from "zustand"

export const useWalletAddress = create((set) => ({
  walletAddress: "",
  setWalletAddress: (address) => set({ walletAddress: address }),
}))
