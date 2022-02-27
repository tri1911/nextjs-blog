import React, { FunctionComponent, useReducer } from "react";
import { calculatorReducer } from "./reducer";
import { CalculatorActionKind, calculatorDefaultState } from "./types";
import Wrapper from "./components/Wrapper";
import Display, { Current, Total } from "./components/Display";
import ButtonsWrapper from "./components/ButtonsWrapper";
import Button, { ButtonValue } from "./components/Button";

const btnValues: ButtonValue[][] = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  ["-", 0, "+"],
  ["clear"],
];

const getColor = (value: ButtonValue) => {
  if (value === "+" || value === "-") {
    return "violet";
  } else if (value === "clear") {
    return "red";
  } else {
    return "lime";
  }
};

const Calculator: FunctionComponent = () => {
  const [state, dispatch] = useReducer(
    calculatorReducer,
    calculatorDefaultState
  );

  const { total, current } = state;

  const clickHandler = (value: ButtonValue) => {
    if (value === "+" || value === "-") {
      return () =>
        dispatch({
          type: CalculatorActionKind.SET_OPERATOR,
          payload: { operator: value },
        });
    } else if (value === "clear") {
      return () =>
        dispatch({
          type: CalculatorActionKind.RESET,
        });
    } else {
      return () =>
        dispatch({
          type: CalculatorActionKind.APPEND_DIGIT,
          payload: { digit: value },
        });
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Wrapper>
        <Display>
          <Total value={total} />
          <Current value={current} />
        </Display>
        <ButtonsWrapper>
          {btnValues.flat().map((btn) => {
            return (
              <Button
                key={btn}
                color={getColor(btn)}
                value={btn}
                onClick={clickHandler(btn)}
              />
            );
          })}
        </ButtonsWrapper>
      </Wrapper>
    </div>
  );
};

export default Calculator;
