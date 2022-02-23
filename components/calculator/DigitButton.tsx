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
