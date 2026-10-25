import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CHECKLIST } from "@/data/trip";

type State = {
  checked: Record<string, boolean>;
  toggle: (id: string) => void;
  reset: () => void;
};

export const useChecklist = create<State>()(
  persist(
    (set, get) => ({
      checked: {},
      toggle: (id) => set({ checked: { ...get().checked, [id]: !get().checked[id] } }),
      reset: () => set({ checked: {} }),
    }),
    { name: "nanyang-checklist" },
  ),
);

export function checklistProgress(checked: Record<string, boolean>) {
  const items = CHECKLIST.flatMap((g) => g.items);
  const done = items.filter((i) => checked[i.id]).length;
  return { done, total: items.length, pct: items.length ? Math.round((done / items.length) * 100) : 0 };
}
