import { useContext } from "react";
import { FormContext } from "./FormContext";

export function useTheme() {
  const { themes, selectedTheme } = useContext(FormContext);
  return { themes, selectedTheme };
}

export function useThemeUpdate() {
  const { setThemes, setSelectedTheme } = useContext(FormContext);
  return { setThemes, setSelectedTheme };
}
