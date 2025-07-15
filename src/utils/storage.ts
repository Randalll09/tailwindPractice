import {create} from "zustand";

interface themeState {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const useThemeStore = create<themeState>((set) => ({
  theme: "light",
  toggleTheme: () => {
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    }));
  },
}));
