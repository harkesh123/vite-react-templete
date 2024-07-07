import { create } from 'zustand';

interface useCountStore {
  count: number;
  setCount: (count:number) => void;
}


export const buttonCount = create<useCountStore>()((set) => ({
  count: 0,
  setCount: (count) => set(() => ({ count: count }))
}))
