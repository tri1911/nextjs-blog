import { useState } from "react";
import LoadingItem from "../common/LoadingItem";
import { useThemeAPIQuery, useThemeAPIUpdate, useThemes } from "./hook";
import { ThemeCreatorContext } from "./ThemeCreatorContext";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loadThemes } = useThemeAPIQuery();
  const { saveTheme } = useThemeAPIUpdate();
  const [selectedTheme, setSelectedTheme] = useState("default");
  const { themes, setThemes, _saveNewTheme, isLoading } = useThemes({
    loadThemes,
    saveTheme,
  });

  return (
    <ThemeCreatorContext.Provider
      value={{
        themes,
        setThemes,
        selectedTheme,
        setSelectedTheme,
        _saveNewTheme,
      }}
    >
      {isLoading ? <LoadingItem /> : children}
    </ThemeCreatorContext.Provider>
  );
}
