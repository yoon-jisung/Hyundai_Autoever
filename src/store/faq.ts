import { create } from 'zustand';
import { TabType } from '@/types/faq';

interface FaqStore {
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const useFaqStore = create<FaqStore>((set) => ({
  selectedCategory: 'ALL',
  setSelectedCategory: (id) => set({ selectedCategory: id }),
  activeTab: 'CONSULT',
  setActiveTab: (tab) => set({ activeTab: tab, selectedCategory: 'ALL' }),
}));
