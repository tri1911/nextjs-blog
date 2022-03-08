import React, { useState } from "react";
import { ThemeList } from "../../components/react-context/types";
import ThemePicker from "../../components/react-context/ThemePicker";
import ThemedForm from "../../components/react-context/ThemedForm";

/*
const themes: { [name: string]: Theme } = {
  cyan: {
    background: "bg-cyan-700",
    text: "text-white",
    input: "bg-amber-100 text-neutral-400",
    button: {
      primary: "bg-amber-600 text-white",
      secondary: "bg-amber-200 text-stone-500",
    },
  },
  red: {
    background: "bg-rose-400",
    text: "text-white",
    input: "bg-pink-500 text-red-50",
    button: {
      primary: "bg-pink-800 text-white",
      secondary: "bg-gray-200 text-stone-500",
    },
  },
  green: {
    background: "bg-lime-400",
    text: "text-white",
    input: "bg-teal-200 text-black",
    button: {
      primary: "bg-green-600 text-white",
      secondary: "bg-orange-200 text-stone-500",
    },
  },
};
*/

const initialThemeList: ThemeList = {
  default: {
    name: "default",
    description: "default theme",
    main: "bg-cyan-700 text-white",
    input: "bg-amber-100 text-violet-900",
    button: {
      primary: "bg-amber-600 text-white",
      secondary: "bg-amber-200 text-stone-500",
    },
  },
};

const ThemeCreator = () => {
  const [themes, setThemes] = useState<ThemeList>(initialThemeList);
  const [selectedTheme, setSelectedTheme] = useState("default");

  return (
    <div className="flex">
      <section className="h-fit p-3 m-3 bg-slate-300 rounded">
        <ThemePicker
          onChangeHandler={(e) => setSelectedTheme(e.target.value)}
          themes={themes}
          selectedTheme={selectedTheme}
        />
      </section>
      <section className="w-1/3 h-fit p-3">
        <ThemedForm theme={themes[selectedTheme]} />
      </section>
    </div>
  );
};

export default ThemeCreator;
