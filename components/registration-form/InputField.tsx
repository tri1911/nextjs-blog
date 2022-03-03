import React, { ChangeEventHandler, FC } from "react";
import { FieldState } from "./types";

interface InputFieldProps {
  text: string;
  type: string;
  placeholder?: string;
  state: FieldState;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputField: FC<InputFieldProps> = ({
  text,
  type,
  placeholder,
  state,
  onChange,
}: InputFieldProps) => {
  const { value, error } = state;
  return (
    <div className="mb-3">
      <label className="text-gray-700 text-lg font-medium mb-0">
        {text}
        <input
          className={`w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${
            error && "border-red-600 border-2"
          }`}
          type={type}
          name="firstName"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
