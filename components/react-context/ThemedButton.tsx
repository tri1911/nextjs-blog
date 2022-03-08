import React from "react";
import { Fn, Theme } from "./types";

const ThemedButton = ({
  name,
  type,
  onClickHandler,
  theme,
}: {
  name: string;
  type: "button" | "reset" | "submit" | undefined;
  onClickHandler: Fn<[], void>;
  theme: Theme;
}) => {
  const color =
    type === "submit" ? theme.button.primary : theme.button.secondary;

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
