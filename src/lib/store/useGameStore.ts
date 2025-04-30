import { create } from "zustand";

type GameStore = {
  roundCount: number;
  incrementRound: () => void;
  resetRound: () => void;
};

export const useGameStore = create<GameStore>((set) => ({
  roundCount: 0,
  incrementRound: () => set((state) => ({ roundCount: state.roundCount + 1 })),
  resetRound: () => set({ roundCount: 0 }),
}));
