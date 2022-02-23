import {
  CalculatorActionKind,
  CalculatorState,
  calculatorDefaultState,
  CalculatorAction,
} from "./types";

export const calculatorReducer = (
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
