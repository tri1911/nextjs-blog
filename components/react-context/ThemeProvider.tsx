import { useState } from "react";
import { FormContext } from "./FormContext";
import { initialThemeList, ThemeList } from "./types";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedTheme, setSelectedTheme] = useState("default");
  const [themes, setThemes] = useState<ThemeList>(initialThemeList);

  return (
    <FormContext.Provider
      value={{ themes, setThemes, selectedTheme, setSelectedTheme }}
    >
      {children}
    </FormContext.Provider>
  );
}
