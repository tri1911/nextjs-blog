import axios from "axios";
import { useContext, useEffect } from "react";
import { ThemeCreatorContext } from "./ThemeCreatorContext";
import { Theme, ThemeList } from "./types";

/**
 * @returns themes and selectedTheme state
 */
export function useTheme() {
  const { themes, selectedTheme } = useContext(ThemeCreatorContext);
  return { themes, selectedTheme };
}

/**
 * @returns setThemes and setSelectedTheme functions to update theme creator's states
 */
export function useThemeUpdate() {
  const { setThemes, setSelectedTheme, _saveNewTheme } =
    useContext(ThemeCreatorContext);
  return { setThemes, setSelectedTheme, _saveNewTheme };
}

/**
 * custom hook for loading themes from API
 * @returns loadThemes - async function to load themes from API
 */
export function useThemeAPIQuery() {
  return {
    loadThemes: async function () {
      try {
        const { data } = await axios.get("/api/themes");
        return data;
      } catch (error) {
        console.error(`Could not get themes: ${error}`);
      }
    },
  };
}

/**
 * custom hook for saving theme into API
 * @returns saveTheme - async function to save/update theme to API
 */
export function useThemeAPIUpdate() {
  return {
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
  const { themes, setThemes, setIsLoading } = useContext(ThemeCreatorContext);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await loadThemes();
      setIsLoading(false);
    }
    fetchData();
  }, []);

  async function _saveNewTheme(newTheme: Theme) {
    await saveTheme(newTheme);
    setThemes({ ...themes, [newTheme.name]: newTheme });
  }

  return {
    _saveNewTheme,
  };
}
