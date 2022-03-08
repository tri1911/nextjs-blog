import React, { useContext } from "react";
import { FormContext } from "./FormContext";

const Description = ({
  value,
  onChangeHandler,
}: {
  value: string;
  onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement>;
}) => {
  const currentTheme = useContext(FormContext);
  return (
    <label className={`text-lg font-medium`}>
      Description
      <textarea
        value={value}
        className={`${currentTheme.input} w-full border rounded p-3 mt-2 leading-tight focus:outline-none focus:bg-white`}
        placeholder="Description"
        onChange={onChangeHandler}
      />
    </label>
  );
};

export default Description;
