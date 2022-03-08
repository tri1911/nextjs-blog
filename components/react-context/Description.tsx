import React from "react";
import { Fn, Theme } from "./types";

const Description = ({
  onChangeHandler,
  theme,
}: {
  onChangeHandler: Fn<[], void>;
  theme: Theme;
}) => {
  return (
    <textarea
      className={`${theme.input} border rounded p-3 leading-tight focus:outline-none focus:bg-white`}
      placeholder="Description"
      onChange={onChangeHandler}
    />
  );
};

export default Description;
