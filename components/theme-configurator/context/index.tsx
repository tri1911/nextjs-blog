import { createContext, useContext, useState, useMemo } from "react";
import { useThemeRepo } from "../hook";
import { Theme } from "../model";
import { noop, Fn, Maybe } from "../util";

const AvailableThemesContext = createContext({
  themes: [] as Theme[],
  saveTheme: noop as Fn<[Theme], void>,
});

export function useAvailableThemes() {
  return useContext(AvailableThemesContext);
}

// 👋🏻 Turns out we have most of it in `useThemeRepo` already
//
// - you can think of useThemeRepo's role is to maintain a local copy of the
//   themes, but it doesn't care about which theme you are looking at
//
// - every descendants WILL USE AvailableThemesContext instead of interacting
// with `useThemeRepo`
//
// - why?: because useThemeRepo may expose more functionalities like "refresh"
// that the descendants don't need, so AvailableThemesContext provides that
// wall to safeguard
export function AvailableThemes({ children }: { children: React.ReactNode }) {
  const { themes, saveTheme } = useThemeRepo();
  return (
    <AvailableThemesContext.Provider
      value={{
        themes,
        saveTheme,
      }}
    >
      {children}
    </AvailableThemesContext.Provider>
  );
}

const FocusedThemeContext = createContext({
  focus: undefined as Maybe<string>,
  focusedTheme: undefined as Maybe<Theme>,
  switchTheme: noop as Fn<[string], void>,
});

export function useFocusedTheme() {
  return useContext(FocusedThemeContext);
}

// 👋🏻 Since focused theme maintains a reference to the focused theme,
// it needs to know about all the available themes
export function FocusedTheme({ children }: { children: React.ReactNode }) {
  // By calling `useContext`, it would trigger a re-render when
  // AvailableThemesContext changes
  const { themes } = useContext(AvailableThemesContext);
  const [selectedThemeId, setThemeId] = useState<Maybe<string>>(undefined);
  const focusedTheme = useMemo(() => {
    return themes.find((t) => t.name === selectedThemeId);
  }, [selectedThemeId, themes]);

  return (
    <FocusedThemeContext.Provider
      value={{
        focus: selectedThemeId,
        focusedTheme,
        switchTheme: setThemeId,
      }}
    >
      {children}
    </FocusedThemeContext.Provider>
  );
}
