import React, { useContext } from "react";
import { ThemeCreatorContext } from "./ThemeCreatorContext";

const ThemePicker = () => {
  const { themes, selectedTheme, setSelectedTheme } =
    useContext(ThemeCreatorContext);

  return (
    <p>
      Pick theme color:{" "}
      <select
        className="p-1 rounded"
        value={selectedTheme}
        onChange={(e) => setSelectedTheme(e.target.value)}
      >
        {Object.entries(themes).map(([name, _]) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </p>
  );
};

export default ThemePicker;
