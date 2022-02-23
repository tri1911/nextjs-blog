import React, { FunctionComponent } from "react";
import { CalculatorActionKind, CalculatorAction, Operator } from "./types";

type OperatorButtonProps = {
  operator: Operator;
  dispatch: React.Dispatch<CalculatorAction>;
};

const OperatorButton: FunctionComponent<OperatorButtonProps> = ({
  operator,
  dispatch,
}: OperatorButtonProps) => {
  return (
    <button
      className="text-4xl ring p-5 rounded-lg bg-green-300 shadow-lg"
      onClick={() =>
        dispatch({
          type: CalculatorActionKind.SET_OPERATOR,
          payload: { operator },
        })
      }
    >
      {operator}
    </button>
  );
};

export default OperatorButton;
