import { createContext } from "react";
import { ThemeList, initialThemeList } from "./types";

export type ThemeCreatorContextState = {
  themes: ThemeList;
  setThemes: React.Dispatch<React.SetStateAction<ThemeList>>;
  selectedTheme: string;
  setSelectedTheme: React.Dispatch<React.SetStateAction<string>>;
};

export const FormContext = createContext<ThemeCreatorContextState>({
  themes: initialThemeList,
  setThemes: () => {},
  selectedTheme: "default",
  setSelectedTheme: () => {},
});
