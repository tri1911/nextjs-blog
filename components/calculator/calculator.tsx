import React, { FunctionComponent, useReducer } from "react";

enum CalculatorActionKind {
  APPEND_DIGIT = "APPEND_DIGIT",
  SET_OPERATOR = "SET_OPERATOR",
  EVALUATE = "EVALUATE",
  RESET = "RESET",
}

type Operator = "+" | "-";
type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

interface CalculatorState {
  total: string | null;
  current: string | null;
  operator: Operator | null;
  isNewCalculation: boolean;
}

interface CalculatorAction {
  type: CalculatorActionKind;
  payload?: { digit?: Digit; operator?: Operator };
}

const calculatorDefaultState = {
  total: null,
  current: null,
  operator: null,
  isNewCalculation: true,
};

const calculatorReducer = (
  state: CalculatorState,
  { type, payload }: CalculatorAction
) => {
  switch (type) {
    case CalculatorActionKind.APPEND_DIGIT:
      if (state.isNewCalculation) {
        return {
          ...state,
          current: payload.digit,
          isNewCalculation: false,
        };
      }
      if (state.current === "0" && payload.digit === "0") {
        return state;
      }
      return {
        ...state,
        current: state.current?.concat(payload.digit) || payload.digit,
      };
    case CalculatorActionKind.SET_OPERATOR:
      // both current and total do not exist
      if (!state.current && !state.total) {
        return state;
      }
      // only total is exist
      if (!state.current) {
        return {
          ...state,
          operator: payload.operator,
        };
      }
      // only current is exist
      if (!state.total) {
        return {
          ...state,
          total: state.current,
          current: null,
          operator: payload.operator,
        };
      }
      // both are exist
      return {
        ...state,
        total: evaluate(state),
        current: null,
        operator: payload.operator,
      };
    case CalculatorActionKind.RESET:
      return calculatorDefaultState;
  }
};

const evaluate = ({ current, total, operator }: CalculatorState) => {
  const totalVal = parseInt(total);
  const currentVal = parseInt(current);
  if (isNaN(totalVal) || isNaN(currentVal)) {
    return "";
  }
  switch (operator) {
    case "+":
      return (totalVal + currentVal).toString();
    case "-":
      return (totalVal - currentVal).toString();
  }
};

const Calculator: FunctionComponent = () => {
  const [state, dispatch] = useReducer(
    calculatorReducer,
    calculatorDefaultState
  );

  console.log(state);
  const { total, current, operator } = state;

  return (
    <div className="container">
      <div className="output">
        <div className="total">{total}</div>
        <div className="current">
          {operator} {current}
        </div>
      </div>
      <div className="keypad">
        <button
          onClick={() =>
            dispatch({
              type: CalculatorActionKind.APPEND_DIGIT,
              payload: { digit: "1" },
            })
          }
        >
          1
        </button>
        <button
          onClick={() =>
            dispatch({
              type: CalculatorActionKind.APPEND_DIGIT,
              payload: { digit: "2" },
            })
          }
        >
          2
        </button>
        <button>3</button>
        <br />
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <br />
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <br />
        <button
          onClick={() =>
            dispatch({
              type: CalculatorActionKind.SET_OPERATOR,
              payload: { operator: "+" },
            })
          }
        >
          +
        </button>
        <button>0</button>
        <button>-</button>
        <br />
        <button
          className="span-three"
          onClick={() => dispatch({ type: CalculatorActionKind.RESET })}
        >
          clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
