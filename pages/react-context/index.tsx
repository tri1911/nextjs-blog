import React, { useState } from "react";
import {
  initialThemeList,
  ThemeList,
} from "../../components/react-context/types";
import ThemePicker from "../../components/react-context/ThemePicker";
import ThemedForm from "../../components/react-context/ThemedForm";
import { FormContext } from "../../components/react-context/FormContext";

const ThemeCreator = () => {
  const [themes, setThemes] = useState<ThemeList>(initialThemeList);
  const [selectedTheme, setSelectedTheme] = useState("default");

  return (
    <div className="flex">
      <FormContext.Provider
        value={{ themes, setThemes, selectedTheme, setSelectedTheme }}
      >
        <section className="h-fit p-3 m-3 bg-slate-300 rounded">
          <ThemePicker />
        </section>
        <section className="w-1/2 h-fit p-3">
          <ThemedForm />
        </section>
      </FormContext.Provider>
    </div>
  );
};

export default ThemeCreator;
