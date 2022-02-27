export enum CalculatorActionKind {
  APPEND_DIGIT = "APPEND_DIGIT",
  SET_OPERATOR = "SET_OPERATOR",
  EVALUATE = "EVALUATE",
  RESET = "RESET",
}

export type Operator = "+" | "-";
export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface CalculatorState {
  total: number;
  current: number | null;
  operator: Operator | null;
  isNewCalculation: boolean;
}

export interface CalculatorAction {
  type: CalculatorActionKind;
  payload?: { digit?: Digit; operator?: Operator };
}

export const calculatorDefaultState = {
  total: 0,
  current: null,
  operator: null,
  isNewCalculation: true,
};
