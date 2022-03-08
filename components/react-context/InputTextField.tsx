import React from "react";
import { Fn, Theme } from "./types";

const InputTextField = ({
  name,
  onChangeHandler,
  theme,
}: {
  name: string;
  onChangeHandler: Fn<[], void>;
  theme: Theme;
}) => {
  return (
    <input
      className={`${theme.input} border rounded p-3 leading-tight focus:outline-none focus:bg-white`}
      type="text"
      placeholder={name}
      onChange={onChangeHandler}
    />
  );
};

export default InputTextField;
