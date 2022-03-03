import React, { FormEvent, useState } from "react";
import axios from "axios";
import InputField from "../../components/registration-form/InputField";

/**
 * Validations
 */

const validateEmail = (email: string) => {
  const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  return !email
    ? "Email is required."
    : !isValid
    ? "Invalid email address."
    : undefined;
};

const validateFirstName = (firstName: string) => {
  return !firstName.trim() ? "First Name is required." : undefined;
};

const validateLastName = (lastName: string) => {
  return !lastName.trim() ? "Last Name is required." : undefined;
};

const validatePassword = (password: string) => {
  return !password
    ? "Password is required."
    : password.length < 8
    ? "Password must be at least length of 8"
    : undefined;
};

const validatePasswordConfirm = (passwordConfirm: string, state: FormState) => {
  return !passwordConfirm
    ? "Confirm Password is required."
    : state["password"].value !== passwordConfirm
    ? "Passwords do not match."
    : undefined;
};

/**
 * Constants
 */

const registerFormFieldSpec: FieldSpec = {
  email: {
    type: "text",
    label: "Email",
    placeholder: "email@example.com",
    validationFn: validateEmail,
  },
  firstName: {
    label: "First Name",
    type: "text",
    placeholder: "Enter your First Name here",
    validationFn: validateFirstName,
  },
  lastName: {
    label: "Last Name",
    type: "text",
    placeholder: "Enter your Last Name here",
    validationFn: validateLastName,
  },
  password: {
    label: "Password",
    type: "password",
    placeholder: "Enter your Password here",
    validationFn: validatePassword,
  },
  passwordConfirm: {
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your Password",
    validationFn: validatePasswordConfirm,
  },
};

const initialFieldState: FieldState = {
  value: "",
  error: undefined,
};

/**
 * Types
 */

type FieldState = {
  value: string;
  error: string | undefined;
};

type FormState = {
  [fieldName: string]: FieldState;
};

type FieldSpec = {
  [fieldKey: string]: {
    type: "text" | "password";
    label: string;
    placeholder?: string;
    validationFn: (input: string, state: FormState) => string | undefined;
  };
};

/**
 * Custom Hook
 */

function useForm(
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
    }
  };

  return {
    initialState,
    formState,
    setFormState,
    updateFieldValue,
    handleSubmit,
  };
}

/**
 * Form Component
 */

const Form = ({ fieldSpec }: { fieldSpec: FieldSpec }) => {
  const submitForm = async (validForm: FormState) => {
    const result = await axios.post("/api/register", validForm);
    console.log(result);
    setFormState(initialState);
  };

  const {
    initialState,
    formState,
    setFormState,
    updateFieldValue,
    handleSubmit,
  } = useForm(fieldSpec, submitForm);

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

/**
 * Main component
 */

const RegisterForm = () => {
  return <Form fieldSpec={registerFormFieldSpec} />;
};

export default RegisterForm;
