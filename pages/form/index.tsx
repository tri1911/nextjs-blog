import React from "react";
import axios from "axios";
import { FieldSpec, FormState } from "../../components/registration-form/types";
import Form from "../../components/registration-form/Form";
import validations from "../../components/registration-form/utils";

const registerFormFieldSpec: FieldSpec = {
  email: {
    type: "text",
    label: "Email",
    placeholder: "email@example.com",
    validationFn: validations.validateEmail,
  },
  firstName: {
    label: "First Name",
    type: "text",
    placeholder: "Enter your First Name here",
    validationFn: validations.validateFirstName,
  },
  lastName: {
    label: "Last Name",
    type: "text",
    placeholder: "Enter your Last Name here",
    validationFn: validations.validateLastName,
  },
  password: {
    label: "Password",
    type: "password",
    placeholder: "Enter your Password here",
    validationFn: validations.validatePassword,
  },
  passwordConfirm: {
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your Password",
    validationFn: validations.validatePasswordConfirm,
  },
};

const RegisterForm = () => {
  const submitForm = async (validForm: FormState) => {
    const result = await axios.post("/api/register", validForm);
    console.log(result);
  };

  return <Form fieldSpec={registerFormFieldSpec} submitForm={submitForm} />;
};

export default RegisterForm;
