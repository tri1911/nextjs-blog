import { useMemo, useState, useCallback } from "react";
import { BASE_THEME } from "../data";
import { ThemeRepo } from "../logic";
import { Theme } from "../model";

/**
 * This hook connects the theme repo to react life cycle
 * so any updates to themes would trigger re-render
 */
export function useThemeRepo() {
  // This creates themeRepo only once
  const themeRepo = useMemo(() => ThemeRepo(BASE_THEME), []);
  const [allThemes, updateThemes] = useState(themeRepo.allThemes());

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
    updateThemes(themeRepo.allThemes());
  }, []);

  return {
    themes: allThemes,
    getTheme: (n: string) => allThemes.find((t) => t.name === n),
    saveTheme,
  };
}
