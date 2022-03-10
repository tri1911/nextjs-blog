import React from "react";
import { useTheme } from "./context/ThemeContext";

const InputTextField = ({
  name,
  value,
  onChangeHandler,
}: {
  name: string;
  value: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  const { selectedTheme, themes } = useTheme();
  const currentTheme = themes[selectedTheme];

  return (
    <label className={`text-lg font-medium`}>
      {name}
      <input
        className={`w-full ${currentTheme.input} border rounded p-3 mt-2 leading-tight focus:outline-none focus:bg-white`}
        type="text"
        value={value}
        placeholder={name}
        onChange={onChangeHandler}
      />
    </label>
  );
};

export default InputTextField;