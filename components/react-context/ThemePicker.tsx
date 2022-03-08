import React from "react";
import { useTheme, useThemeUpdate } from "./hook";

const ThemePicker = () => {
  const { themes, selectedTheme } = useTheme();
  const { setSelectedTheme } = useThemeUpdate();

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
