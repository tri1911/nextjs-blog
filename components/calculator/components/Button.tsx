import React, { FunctionComponent } from "react";
import { Digit, Operator } from "../types";
export type ButtonValue = Operator | Digit | "clear";

interface ButtonProps {
  color: string;
  value: ButtonValue;
  onClick: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({
  color,
  value,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`flex-auto w-1/4 h-14 border-none bg-${color}-600 hover:bg-${color}-400 text-2xl text-white font-semibold uppercase cursor-pointer rounded-lg outline-none`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
