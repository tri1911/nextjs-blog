import React from "react";
import { useTheme } from "./context/ThemeContext";

const ThemedButton = ({
  name,
  type,
  onClickHandler,
}: {
  name: string;
  type: "button" | "reset" | "submit" | undefined;
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const { themes, selectedTheme } = useTheme();
  const currentTheme = themes[selectedTheme];

  const color =
    type === "submit"
      ? currentTheme.button.primary
      : currentTheme.button.secondary;

  return (
    <button
      type={type}
      className={`${color} px-4 py-2 rounded shadow font-medium focus:shadow-outline focus:outline-none `}
      onClick={onClickHandler}
    >
      {name}
    </button>
  );
};

export default ThemedButton;