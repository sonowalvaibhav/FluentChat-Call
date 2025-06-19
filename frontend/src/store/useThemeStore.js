import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme:localStorage.getItem("Chat-App-theme") || "coffee",
  setTheme:(theme)=>{
    localStorage.setItem("Chat-App-theme", theme);
    set({theme})
  },
}));