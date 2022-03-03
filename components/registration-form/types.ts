export type FieldState = {
  value: string;
  error: string | undefined;
};

export const initialFieldState: FieldState = {
  value: "",
  error: undefined,
};

export type FormState = {
  [fieldName: string]: FieldState;
};

export type FieldSpec = {
  [fieldKey: string]: {
    type: "text" | "password";
    label: string;
    placeholder?: string;
    validationFn: (input: string, state: FormState) => string | undefined;
  };
};
