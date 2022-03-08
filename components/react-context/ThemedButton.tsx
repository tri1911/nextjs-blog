import React, { useContext } from "react";
import { FormContext } from "./FormContext";

const ThemedButton = ({
  name,
  type,
  onClickHandler,
}: {
  name: string;
  type: "button" | "reset" | "submit" | undefined;
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const currentTheme = useContext(FormContext);
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
