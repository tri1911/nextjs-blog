import React, { useContext } from "react";
import { ThemeCreatorContext } from "./ThemeCreatorContext";

const ThemedButton = ({
  name,
  type,
  onClickHandler,
}: {
  name: string;
  type: "button" | "reset" | "submit" | undefined;
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const { themes, selectedTheme } = useContext(ThemeCreatorContext);
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
