import { useState } from "react";
import LoadingItem from "../../common/LoadingItem";
import { useThemeAPI, useThemes } from "../utils/hook";
import { CurrentThemeContext, ThemesContext } from "./ThemeContext";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loadThemes, saveTheme } = useThemeAPI();
  const { themes, setThemes, _saveNewTheme, isLoading } = useThemes({
    loadThemes,
    saveTheme,
  });

  const [selectedTheme, setSelectedTheme] = useState("default");

  return (
    <ThemesContext.Provider value={{ themes, setThemes, _saveNewTheme }}>
      <CurrentThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
        {isLoading ? <LoadingItem /> : children}
      </CurrentThemeContext.Provider>
    </ThemesContext.Provider>
  );
}
