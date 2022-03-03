import React from "react";
import useForm from "./hook";
import InputField from "./InputField";
import { FieldSpec, FormState } from "./types";

const Form = ({
  fieldSpec,
  submitForm,
}: {
  fieldSpec: FieldSpec;
  submitForm: (validForm: FormState) => Promise<void>;
}) => {
  const { formState, updateFieldValue, handleSubmit } = useForm(
    fieldSpec,
    submitForm
  );

  return (
    <div className="flex">
      <form
        noValidate
        className="container w-1/2 mx-auto mt-4 bg-white shadow-md rounded px-8 py-6 mb-4 self-center"
        onSubmit={handleSubmit}
      >
        {Object.entries(fieldSpec).map(([key, spec]) => (
          <InputField
            key={key}
            type={spec.type}
            text={spec.label}
            placeholder={spec.placeholder}
            state={formState[key]}
            onChange={(event) => {
              updateFieldValue(key, event.target.value);
            }}
          />
        ))}
        <button
          type="submit"
          className="px-4 py-2 rounded shadow mt-4 bg-lime-500 hover:bg-lime-400 focus:shadow-outline focus:outline-none text-white font-medium"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;
