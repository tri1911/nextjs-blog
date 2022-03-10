import React, { createContext, useContext } from "react";
import { ThemeList, initialThemeList, Theme } from "../utils/types";

/**
 * Context Value Types
 */

export type ThemesContextValue = {
  themes: ThemeList;
  setThemes: React.Dispatch<React.SetStateAction<ThemeList>>;
  _saveNewTheme: (newTheme: Theme) => void;
};

export type CurrentThemeContextValue = {
  selectedTheme: string;
  setSelectedTheme: React.Dispatch<React.SetStateAction<string>>;
};

const noop = () => {};

/**
 * Context Definition
 */

export const ThemesContext = createContext<ThemesContextValue>({
  themes: initialThemeList,
  setThemes: noop,
  _saveNewTheme: noop,
});

export const CurrentThemeContext = createContext<CurrentThemeContextValue>({
  selectedTheme: "default",
  setSelectedTheme: noop,
});

/**
 * Custom Hooks to access Context Values
 */

export function useTheme() {
  const { selectedTheme } = useContext(CurrentThemeContext);
  const { themes } = useContext(ThemesContext);
  return { themes, selectedTheme };
}

export function useThemeUpdate() {
  const { setSelectedTheme } = useContext(CurrentThemeContext);
  const { _saveNewTheme } = useContext(ThemesContext);
  return { setSelectedTheme, _saveNewTheme };
}
