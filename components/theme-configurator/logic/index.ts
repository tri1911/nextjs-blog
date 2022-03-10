import { Theme } from "../model";
import { cloneTheme } from "../util";

/**
 * A basic Theme Repository factory to manage themes
 * NOTE: This DOES NOT involve React in any fashion
 *
 * - think of this as our eventual backend implementation
 */
export function ThemeRepo(baseThemes: Theme[]) {
  const themes = baseThemes.map(cloneTheme);
  return {
    allThemes() {
      return themes.map(cloneTheme);
    },
    saveTheme(theme: Theme) {
      const i = themes.findIndex((t) => t.name === theme.name);
      if (i === -1) {
        themes.push(theme);
      } else {
        themes[i] = theme;
      }
    },
  };
}
