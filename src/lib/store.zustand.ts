import { create } from "zustand";

interface ThemeType {
  theme: string;
  setTheme: (theme: string) => void;
}

export const useTheme = create<ThemeType>((set) => ({
  theme: "dark",
  setTheme: (theme) => set((state) => ({ ...state, theme })),
}));

interface JobSearchType {
  search: string;
  category: string;
  location: string;
  setSearch: (search: string) => void;
  setCategory: (category: string) => void;
  setLocation: (location: string) => void;
  setResetSearch: () => void;
}

export const useJobSearch = create<JobSearchType>((set) => ({
  search: "",
  category: "",
  location: "",
  setSearch: (search) => set((state) => ({ ...state, search })),
  setCategory: (category) => set((state) => ({ ...state, category })),
  setLocation: (location) => set((state) => ({ ...state, location })),
  setResetSearch: () =>
    set((state) => ({ ...state, search: "", category: "", location: "" })),
}));
