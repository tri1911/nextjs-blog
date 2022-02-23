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
