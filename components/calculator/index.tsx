import React, { FunctionComponent, useReducer } from "react";
import DigitButton from "./DigitButton";
import OperatorButton from "./OperatorButton";
import { CalculatorActionKind, calculatorDefaultState } from "./types";

import { calculatorReducer } from "./reducer";

const Calculator: FunctionComponent = () => {
  const [state, dispatch] = useReducer(
    calculatorReducer,
    calculatorDefaultState
  );

  const { total, current, operator } = state;

  return (
    <div>
      <div>
        <div>{total}</div>
        <div>
          {operator} {current}{" "}
        </div>
      </div>
      <div>
        <DigitButton dispatch={dispatch} digit={"1"} />
        <DigitButton dispatch={dispatch} digit={"2"} />
        <DigitButton dispatch={dispatch} digit={"3"} />
        <br />
        <DigitButton dispatch={dispatch} digit={"4"} />
        <DigitButton dispatch={dispatch} digit={"5"} />
        <DigitButton dispatch={dispatch} digit={"6"} />
        <br />
        <DigitButton dispatch={dispatch} digit={"7"} />
        <DigitButton dispatch={dispatch} digit={"8"} />
        <DigitButton dispatch={dispatch} digit={"9"} />
        <br />
        <OperatorButton dispatch={dispatch} operator={"+"} />
        <DigitButton dispatch={dispatch} digit={"0"} />
        <OperatorButton dispatch={dispatch} operator={"-"} />
        <br />
        <button onClick={() => dispatch({ type: CalculatorActionKind.RESET })}>
          clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
