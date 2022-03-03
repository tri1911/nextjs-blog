import { FormEvent, useState } from "react";
import { FieldSpec, FormState, initialFieldState } from "./types";

export default function useForm(
  fieldSpec: FieldSpec,
  submitForm: (validForm: FormState) => Promise<void>
) {
  const initialState: FormState = Object.fromEntries(
    Object.keys(fieldSpec).map((fieldKey) => {
      return [fieldKey, initialFieldState];
    })
  );

  const [formState, setFormState] = useState(initialState);

  const updateFieldValue = (fieldKey: string, newValue: string) => {
    setFormState({
      ...formState,
      [fieldKey]: { ...formState[fieldKey], value: newValue },
    });
  };

  const updateFormState = (
    errors: [string, string | undefined][]
  ): FormState => {
    const callback = (
      previousState: FormState,
      [key, reason]: [key: string, reason: string | undefined]
    ): FormState => {
      return {
        ...previousState,
        [key]: { ...previousState[key], error: reason },
      };
    };
    return errors.reduce(callback, formState);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // validate fields, which returns error messages (or undefined if the field is valid)
    const errors = Object.entries(fieldSpec).map(([key, spec]) => {
      return [key, spec.validationFn(formState[key].value, formState)] as [
        string,
        string | undefined
      ];
    });

    // check whether all fields are valid
    const hasError = errors.some(([_, reason]) => !!reason);

    // update all field states
    const newState = updateFormState(errors);

    // takes action based on whether all fields are valid
    if (hasError) {
      setFormState(newState);
    } else {
      await submitForm(newState);
      setFormState(initialState);
    }
  };

  return {
    formState,
    updateFieldValue,
    handleSubmit,
  };
}
