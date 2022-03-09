import { useState } from "react";
import LoadingItem from "../common/LoadingItem";
import { useThemeAPIQuery, useThemeAPIUpdate, useThemes } from "./hook";
import { ThemeCreatorContext } from "./ThemeCreatorContext";
import { initialThemeList } from "./types";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedTheme, setSelectedTheme] = useState("default");
  const [isLoading, setIsLoading] = useState(false);
  const [themes, setThemes] = useState(initialThemeList);

  const { loadThemes } = useThemeAPIQuery();
  const { saveTheme } = useThemeAPIUpdate();
  const { _saveNewTheme } = useThemes({ loadThemes, saveTheme });

  return (
    <ThemeCreatorContext.Provider
      value={{
        themes,
        setThemes,
        selectedTheme,
        setSelectedTheme,
        setIsLoading,
        _saveNewTheme,
      }}
    >
      {isLoading ? <LoadingItem /> : children}
    </ThemeCreatorContext.Provider>
  );
}
