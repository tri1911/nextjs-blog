import React from "react";
import ThemePicker from "../../components/react-context/ThemePicker";
import ThemedForm from "../../components/react-context/ThemedForm";
import ThemeProvider from "../../components/react-context/context/ThemeProvider";

const ThemeCreator = () => {
  return (
    <ThemeProvider>
      <div className="flex">
        <section className="h-fit p-3 m-3 bg-slate-300 rounded">
          <ThemePicker />
        </section>
        <section className="w-1/2 h-fit p-3">
          <ThemedForm />
        </section>
      </div>
    </ThemeProvider>
  );
};

export default ThemeCreator;
