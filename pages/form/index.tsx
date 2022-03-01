import React, { FormEvent, useState } from "react";
import axios from "axios";
import InputForm from "../../components/registration-form/InputForm";

export type FieldName =
  | "email"
  | "firstName"
  | "lastName"
  | "password"
  | "passwordConfirm";

export type FieldState = {
  value: string;
  error: string | null;
};

export type FormState = {
  [fieldName: string]: FieldState;
};

const initialFieldState: FieldState = {
  value: "",
  error: null,
};

const initialFormState: FormState = {
  email: initialFieldState,
  firstName: initialFieldState,
  lastName: initialFieldState,
  password: initialFieldState,
  passwordConfirm: initialFieldState,
};

const checkEmail = (email: string) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const updateError = (
  previousState: FormState,
  fieldName: FieldName,
  error: string | null
) => {
  return {
    ...previousState,
    [fieldName]: { ...previousState[fieldName], error },
  };
};

const RegisterForm = () => {
  const [state, setState] = useState(initialFormState);
  const { email, firstName, lastName, password, passwordConfirm } = state;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    let currentState = { ...state };

    currentState = updateError(
      currentState,
      "email",
      !email.value
        ? "Email is required."
        : !checkEmail(email.value)
        ? "Invalid email address."
        : null
    );

    currentState = updateError(
      currentState,
      "firstName",
      !firstName.value ? "First Name is required." : null
    );

    currentState = updateError(
      currentState,
      "lastName",
      !lastName.value ? "Last Name is required." : null
    );

    currentState = updateError(
      currentState,
      "password",
      !password.value
        ? "Password is required."
        : password.value.length < 8
        ? "Password must be at least length of 8"
        : null
    );

    currentState = updateError(
      currentState,
      "passwordConfirm",
      !passwordConfirm?.value
        ? "Confirm Password is required."
        : password.value !== passwordConfirm.value
        ? "Passwords do not match."
        : null
    );

    // submit data to `/api/register`
    if (Object.values(currentState).every((v) => !v.error)) {
      const result = await axios.post("/api/register");
      console.log(result);
      setState(initialFormState);
    } else {
      setState(currentState);
      console.log("Error still exists");
    }
  };

  return (
    <div className="flex">
      <form
        noValidate
        className="container w-1/2 mx-auto mt-4 bg-white shadow-md rounded px-8 py-6 mb-4 self-center"
        onSubmit={handleSubmit}
      >
        <InputForm
          text="Email"
          type="email"
          placeholder="email@example.com"
          state={email}
          onChange={(event) => {
            setState({
              ...state,
              email: { ...email, value: event.target.value.trim() },
            });
          }}
        />
        <InputForm
          text="First Name"
          type="text"
          placeholder="Enter your First Name here"
          state={firstName}
          onChange={(event) => {
            setState({
              ...state,
              firstName: { ...firstName, value: event.target.value.trim() },
            });
          }}
        />
        <InputForm
          text="Last Name"
          type="text"
          placeholder="Enter your Last Name here"
          state={lastName}
          onChange={(event) => {
            setState({
              ...state,
              lastName: { ...lastName, value: event.target.value.trim() },
            });
          }}
        />
        <InputForm
          text="Password"
          type="password"
          placeholder="Enter your Password here"
          state={password}
          onChange={(event) => {
            setState({
              ...state,
              password: { ...password, value: event.target.value.trim() },
            });
          }}
        />
        <InputForm
          text="Confirm Password"
          type="password"
          placeholder="Confirm your Password"
          state={passwordConfirm}
          onChange={(event) => {
            setState({
              ...state,
              passwordConfirm: {
                ...passwordConfirm,
                value: event.target.value.trim(),
              },
            });
          }}
        />
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
