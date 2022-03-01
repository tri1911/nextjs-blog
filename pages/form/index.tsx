import React, { FormEvent, useState } from "react";
import axios from "axios";
import InputField from "../../components/registration-form/InputField";

/**
 * Types
 */

export type FieldState = {
  value: string;
  error: string | undefined;
};

export type FormState = {
  [fieldName: string]: FieldState;
};

type FieldDescription = {
  type: "text" | "password";
  label: string;
  placeholder?: string;
};

/**
 * Constants
 */

const fields: { [key: string]: FieldDescription } = {
  email: {
    type: "text",
    label: "Email",
    placeholder: "email@example.com",
  },
  firstName: {
    label: "First Name",
    type: "text",
    placeholder: "Enter your First Name here",
  },
  lastName: {
    label: "Last Name",
    type: "text",
    placeholder: "Enter your Last Name here",
  },
  password: {
    label: "Password",
    type: "password",
    placeholder: "Enter your Password here",
  },
  passwordConfirm: {
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your Password",
  },
};

const initialFieldState: FieldState = {
  value: "",
  error: undefined,
};

const initialFormState: FormState = {
  email: initialFieldState,
  firstName: initialFieldState,
  lastName: initialFieldState,
  password: initialFieldState,
  passwordConfirm: initialFieldState,
};

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

const fieldsValidations = {
  email: validateEmail,
  firstName: validateFirstName,
  lastName: validateLastName,
  password: validatePassword,
  passwordConfirm: validatePasswordConfirm,
};

/**
 * Main component
 */

const RegisterForm = () => {
  const [state, setState] = useState(initialFormState);

  const updateFieldValue = (fieldName: string, value: string) => {
    setState({ ...state, [fieldName]: { ...state[fieldName], value } });
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
    return errors.reduce(callback, state);
  };

  const submitForm = async (validForm: FormState) => {
    const result = await axios.post("/api/register", validForm);
    console.log(result);
    setState(initialFormState);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // validate fields, which returns error messages (or undefined if the field is valid)
    const errors = Object.entries(fieldsValidations).map(
      ([key, validationFn]) => {
        return [key, validationFn(state[key].value, state)] as [
          string,
          string | undefined
        ];
      }
    );

    // check whether all fields are valid
    const hasError = errors.some(([_, reason]) => !!reason);

    // update all field states
    const newState = updateFormState(errors);

    // takes action based on whether all fields are valid
    if (hasError) {
      setState(newState);
    } else {
      await submitForm(newState);
    }
  };

  return (
    <div className="flex">
      <form
        noValidate
        className="container w-1/2 mx-auto mt-4 bg-white shadow-md rounded px-8 py-6 mb-4 self-center"
        onSubmit={handleSubmit}
      >
        {Object.entries(fields).map(([key, desc]) => (
          <InputField
            key={key}
            type={desc.type}
            text={desc.label}
            placeholder={desc.placeholder}
            state={state[key]}
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

export default RegisterForm;
