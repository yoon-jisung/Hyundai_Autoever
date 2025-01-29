import { create } from 'zustand';

interface FaqStore {
  selectedCategory: number;
  setSelectedCategory: (id: number) => void;
  activeTab: 'intro' | 'usage';
  setActiveTab: (tab: 'intro' | 'usage') => void;
}

export const useFaqStore = create<FaqStore>((set) => ({
  selectedCategory: 0,
  setSelectedCategory: (id) => set({ selectedCategory: id }),
  activeTab: 'intro',
  setActiveTab: (tab) => set({ activeTab: tab, selectedCategory: 0 }),
}));
