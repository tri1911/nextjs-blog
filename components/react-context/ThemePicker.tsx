import React from "react";
import { ThemeList } from "./types";

const ThemePicker = ({
  onChangeHandler,
  themes,
  selectedTheme,
}: {
  onChangeHandler: React.ChangeEventHandler<HTMLSelectElement>;
  themes: ThemeList;
  selectedTheme: string;
}) => {
  return (
    <p>
      Pick theme color:{" "}
      <select
        className="p-1 rounded"
        value={selectedTheme}
        onChange={onChangeHandler}
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
