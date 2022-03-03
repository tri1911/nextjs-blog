import { FormState } from "./types";

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

export default {
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassword,
  validatePasswordConfirm,
};
