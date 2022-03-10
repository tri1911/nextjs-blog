import { createContext } from "react";
import { ThemeList, initialThemeList, Theme } from "./types";

export type ThemeCreatorContextState = {
  themes: ThemeList;
  setThemes: React.Dispatch<React.SetStateAction<ThemeList>>;
  selectedTheme: string;
  setSelectedTheme: React.Dispatch<React.SetStateAction<string>>;
  _saveNewTheme: (newTheme: Theme) => void;
};

const noop = () => {};

export const ThemeCreatorContext = createContext<ThemeCreatorContextState>({
  themes: initialThemeList,
  setThemes: noop,
  selectedTheme: "default",
  setSelectedTheme: noop,
  _saveNewTheme: noop,
});
