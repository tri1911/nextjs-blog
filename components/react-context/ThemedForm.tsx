import React from "react";
import { Theme } from "./types";
import InputTextField from "./InputTextField";
import Description from "./Description";
import ThemedButton from "./ThemedButton";

const ThemedForm = ({ theme }: { theme: Theme }) => {
  return (
    <form
      className={`${theme.main} flex flex-col space-y-5 mx-auto shadow-md rounded px-8 py-6`}
    >
      <InputTextField
        name="Main Background and Foreground"
        onChangeHandler={() => {}}
        theme={theme}
      />
      <InputTextField
        name="Input Color"
        onChangeHandler={() => {}}
        theme={theme}
      />
      <InputTextField
        name="Button Primary Color"
        onChangeHandler={() => {}}
        theme={theme}
      />
      <InputTextField
        name="Button Secondary Color"
        onChangeHandler={() => {}}
        theme={theme}
      />
      <Description onChangeHandler={() => {}} theme={theme} />
      <div className={`flex justify-end items-center space-x-4`}>
        <ThemedButton
          name="Add"
          type="submit"
          onClickHandler={() => {}}
          theme={theme}
        />
        <ThemedButton
          name="Reset"
          type="reset"
          onClickHandler={() => {}}
          theme={theme}
        />
      </div>
    </form>
  );
};

export default ThemedForm;
