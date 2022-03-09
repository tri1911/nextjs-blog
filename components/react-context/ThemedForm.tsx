import React, { useEffect, useState } from "react";
import { emptyTheme } from "./types";
import InputTextField from "./InputTextField";
import Description from "./Description";
import ThemedButton from "./ThemedButton";
import { useTheme, useThemeUpdate } from "./hook";

const ThemedForm = () => {
  const { themes, selectedTheme } = useTheme();
  const { _saveNewTheme, setThemes } = useThemeUpdate();

  const currentTheme = themes[selectedTheme];

  const [state, setState] = useState(currentTheme);
  useEffect(() => setState(currentTheme), [currentTheme]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // setThemes({ ...themes, [state.name]: state });
    _saveNewTheme(state);
    setState(emptyTheme);
  };

  return (
    <form
      className={`${currentTheme.main} flex flex-col space-y-5 mx-auto shadow-md rounded px-8 py-6`}
      onSubmit={handleSubmit}
    >
      <InputTextField
        name="Theme Name"
        value={state.name}
        onChangeHandler={(e) => {
          setState({ ...state, name: e.target.value });
        }}
      />
      <InputTextField
        name="Main Background and Foreground"
        value={state.main}
        onChangeHandler={(e) => {
          setState({ ...state, main: e.target.value });
        }}
      />
      <InputTextField
        name="Input Color"
        value={state.input}
        onChangeHandler={(e) => {
          setState({ ...state, input: e.target.value });
        }}
      />
      <InputTextField
        name="Button Primary Color"
        value={state.button.primary}
        onChangeHandler={(e) => {
          setState({
            ...state,
            button: { ...state.button, primary: e.target.value },
          });
        }}
      />
      <InputTextField
        name="Button Secondary Color"
        value={state.button.secondary}
        onChangeHandler={(e) => {
          setState({
            ...state,
            button: { ...state.button, secondary: e.target.value },
          });
        }}
      />
      <Description
        value={state.description}
        onChangeHandler={(e) =>
          setState({ ...state, description: e.target.value })
        }
      />
      <div className={`flex justify-end items-center space-x-4`}>
        <ThemedButton name="Add" type="submit" />
        <ThemedButton
          name="Reset"
          type="reset"
          onClickHandler={() => {
            setState(emptyTheme);
          }}
        />
      </div>
    </form>
  );
};

export default ThemedForm;
