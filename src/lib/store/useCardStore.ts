import { create } from "zustand";

type CardStore = {
  truth: string;
  dare: string;
  setTruth: (value: string) => void;
  setDare: (value: string) => void;
  resetCards: () => void;
};

export const useCardStore = create<CardStore>((set) => ({
  truth: "",
  dare: "",
  setTruth: (value) => set({ truth: value }),
  setDare: (value) => set({ dare: value }),
  resetCards: () => set({ truth: "", dare: "" }),
}));
