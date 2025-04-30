import { create } from "zustand";

type LeaveStore = {
  leaveCount: number;
  hasVoted: boolean;
  voteToLeave: () => void;
  cancelVote: () => void;
  resetLeave: () => void;
};

export const useLeaveStore = create<LeaveStore>((set, get) => ({
  leaveCount: 0,
  hasVoted: false,
  voteToLeave: () => {
    const { hasVoted } = get();
    if (!hasVoted) {
      set((state) => ({
        leaveCount: state.leaveCount + 1,
        hasVoted: true,
      }));
    }
  },
  cancelVote: () => {
    const { hasVoted } = get();
    if (hasVoted) {
      set((state) => ({
        leaveCount: state.leaveCount > 0 ? state.leaveCount - 1 : 0,
        hasVoted: false,
      }));
    }
  },
  resetLeave: () => set({ leaveCount: 0, hasVoted: false }),
}));
