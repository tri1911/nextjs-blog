import axios from "axios";
import { useEffect, useState } from "react";
import { initialThemeList, Theme, ThemeList } from "./types";

export function useThemeAPI() {
  return {
    loadThemes: async function () {
      try {
        const { data } = await axios.get("/api/themes");
        return data;
      } catch (error) {
        console.error(`Could not get themes: ${error}`);
      }
    },
    saveTheme: async function (newTheme: Theme) {
      try {
        const response = await axios.post("/api/themes", newTheme);
        // console.log(response);
      } catch (error) {
        console.error(`Could not save theme: ${error}`);
      }
    },
  };
}

/**
 * Main logic of ThemeCreator
 * @param loadThemes - load themes asynchronously
 * @param saveTheme - save theme asynchronously
 * @returns _saveTheme - a function to save theme in both API and local state
 */
export function useThemes({
  loadThemes,
  saveTheme,
}: {
  loadThemes: () => Promise<ThemeList>;
  saveTheme: (newTheme: Theme) => Promise<void>;
}) {
  const [themes, setThemes] = useState<ThemeList>(initialThemeList);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const themes = await loadThemes();
      // network loading simulation
      await new Promise((r) => setTimeout(r, 1500));
      setThemes(themes);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  async function _saveNewTheme(newTheme: Theme) {
    await saveTheme(newTheme);
    setThemes({ ...themes, [newTheme.name]: newTheme });
  }

  return {
    themes,
    setThemes,
    _saveNewTheme,
    isLoading,
  };
}
