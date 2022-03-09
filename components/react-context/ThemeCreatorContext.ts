import { createContext } from "react";
import { ThemeList, initialThemeList, Theme } from "./types";

export type ThemeCreatorContextState = {
  themes: ThemeList;
  setThemes: React.Dispatch<React.SetStateAction<ThemeList>>;
  selectedTheme: string;
  setSelectedTheme: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  _saveNewTheme: (newTheme: Theme) => void;
};

export const ThemeCreatorContext = createContext<ThemeCreatorContextState>({
  themes: initialThemeList,
  setThemes: () => {},
  selectedTheme: "default",
  setSelectedTheme: () => {},
  setIsLoading: () => {},
  _saveNewTheme: () => {},
});
