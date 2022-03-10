import { useState, useCallback, useEffect } from "react";
import { ThemeRepoApi } from "../logic";
import { Theme } from "../model";

// Moving themeRepo out to reduce noise
const themeRepo = ThemeRepoApi();

/**
 * This hook connects the theme repo to react life cycle
 * so any updates to themes would trigger re-render
 */
export function useThemeRepo() {
  const [allThemes, updateThemes] = useState([] as Theme[]);

  const refresh = () => {
    themeRepo.allThemes().then((res) => {
      updateThemes(res.data);
    });
  };
  useEffect(() => {
    refresh();
  }, []);

  // We can choose to not wrap with `useCallback`, but that means
  // each rendering, we would instantiate `saveTheme` once. Which means
  // all components depending on `saveTheme` may re-render.
  //
  // - To determine which arguments are needed, start with all captured
  // variables that aren't arguments (themeRepo, updateThemes)
  // - Then decide on which of those may change (neither because
  // updateThemes preserves function identity, and themeRepo only
  // gets initialized once)
  const saveTheme = useCallback((theme: Theme) => {
    themeRepo.saveTheme(theme);
    refresh();
  }, []);

  return {
    themes: allThemes,
    saveTheme,
  };
}
