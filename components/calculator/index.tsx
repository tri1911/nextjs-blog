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
    <div className="p-5 bg-gray-400 max-w-xs mx-auto mt-8 flex flex-col gap-3 items-center">
      <div className="text-4xl bg-teal-500 w-56 h-10 text-right ring rounded">
        {total}
      </div>
      <div className="text-2xl bg-amber-500 w-56 h-10 text-right ring rounded">
        {operator} {current}
      </div>
      <div className="m-4 flex flex-col gap-3">
        <div className="flex gap-3">
          <DigitButton dispatch={dispatch} digit="1" />
          <DigitButton dispatch={dispatch} digit="2" />
          <DigitButton dispatch={dispatch} digit="3" />
        </div>
        <div className="flex gap-3">
          <DigitButton dispatch={dispatch} digit="4" />
          <DigitButton dispatch={dispatch} digit="5" />
          <DigitButton dispatch={dispatch} digit="6" />
        </div>
        <div className="flex gap-3">
          <DigitButton dispatch={dispatch} digit="7" />
          <DigitButton dispatch={dispatch} digit="8" />
          <DigitButton dispatch={dispatch} digit="9" />
        </div>
        <div className="flex gap-3">
          <OperatorButton dispatch={dispatch} operator="+" />
          <DigitButton dispatch={dispatch} digit="0" />
          <OperatorButton dispatch={dispatch} operator="-" />
        </div>
        <button
          className="uppercase text-4xl ring p-5 rounded-lg bg-purple-300 shadow-lg"
          onClick={() => dispatch({ type: CalculatorActionKind.RESET })}
        >
          clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
