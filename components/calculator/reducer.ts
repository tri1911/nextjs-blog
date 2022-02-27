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
  const { total, current, operator, isNewCalculation } = state;
  switch (type) {
    case CalculatorActionKind.APPEND_DIGIT:
      const { digit } = payload;
      if (isNewCalculation) {
        return {
          ...state,
          current: digit,
          isNewCalculation: false,
        };
      }
      if (!current && !digit) {
        return state;
      }
      return {
        ...state,
        current: current ? current * 10 + digit : digit,
      };
    case CalculatorActionKind.SET_OPERATOR:
      const { operator } = payload;
      // both current and total do not exist
      if (!current && !total) {
        return state;
      }
      // only `total` exists
      if (!current) {
        return {
          ...state,
          operator,
        };
      }
      // only `current` exists
      if (!total) {
        return {
          ...state,
          total: current,
          current: null,
          operator: payload.operator,
        };
      }
      // both `total` and `current` exist
      return {
        ...state,
        total: evaluate(state),
        current: null,
        operator,
      };
    case CalculatorActionKind.RESET:
      return calculatorDefaultState;
  }
};

const evaluate = ({ total, current, operator }: CalculatorState) => {
  return operator === "+" ? total + current : total - current;
};
