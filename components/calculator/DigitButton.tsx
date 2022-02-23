import React, { FunctionComponent } from "react";
import { CalculatorActionKind, CalculatorAction, Digit } from "./types";

type DigitButtonProps = {
  digit: Digit;
  dispatch: React.Dispatch<CalculatorAction>;
};

const DigitButton: FunctionComponent<DigitButtonProps> = ({
  digit,
  dispatch,
}: DigitButtonProps) => {
  return (
    <button
      className="text-4xl ring p-5 rounded-lg bg-orange-300 shadow-lg"
      onClick={() =>
        dispatch({
          type: CalculatorActionKind.APPEND_DIGIT,
          payload: { digit },
        })
      }
    >
      {digit}
    </button>
  );
};

export default DigitButton;
