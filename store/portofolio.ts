import { create } from 'zustand';

interface PortfolioStore {
  activeSection: string;
  setActiveSection: (slug: string) => void;
}

export const usePortfolioStore = create<PortfolioStore>((set) => ({
  activeSection: 'home',
  setActiveSection: (slug) => set({ activeSection: slug }),
}));