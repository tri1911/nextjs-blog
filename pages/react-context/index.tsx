import React, { useState } from "react";

type Theme = {
  background: string;
  text: string;
  input: string;
  button: {
    primary: string;
    secondary: string;
  };
};

const themes: { [name: string]: Theme } = {
  cyan: {
    background: "bg-cyan-700",
    text: "text-white",
    input: "bg-amber-100 text-neutral-400",
    button: {
      primary: "bg-amber-600 text-white",
      secondary: "bg-amber-200 text-stone-500",
    },
  },
  red: {
    background: "bg-rose-400",
    text: "text-white",
    input: "bg-pink-500 text-red-50",
    button: {
      primary: "bg-pink-800 text-white",
      secondary: "bg-gray-200 text-stone-500",
    },
  },
  green: {
    background: "bg-lime-400",
    text: "text-white",
    input: "bg-teal-200 text-black",
    button: {
      primary: "bg-green-600 text-white",
      secondary: "bg-orange-200 text-stone-500",
    },
  },
};

const FormWithTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState("red");
  const theme = themes[selectedTheme];

  return (
    <div className="flex">
      <section className="max-w-sm h-fit p-3 m-3 bg-slate-300 rounded">
        <p>
          Pick theme color:{" "}
          <select
            className="p-1 rounded"
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}
          >
            <option value="cyan">Cyan</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
          </select>
        </p>
      </section>
      <section className="w-1/3 p-3">
        <form
          className={`${theme.background} ${theme.text} flex flex-col space-y-5 mx-auto shadow-md rounded px-8 py-6`}
        >
          <input
            className={`w-full ${theme.input} border rounded p-3 leading-tight focus:outline-none focus:bg-white`}
            type="text"
            placeholder="First Name"
            onChange={() => {}}
          />
          <input
            className={`w-full ${theme.input} border rounded p-3 leading-tight focus:outline-none focus:bg-white`}
            type="text"
            placeholder="Last Name"
            onChange={() => {}}
          />
          <textarea
            className={`p-3 ${theme.input} border leading-tight rounded focus:outline-none focus:bg-white`}
            placeholder="Description"
            onChange={() => {}}
          />
          <div className={`flex justify-end items-center space-x-4`}>
            <button
              type="submit"
              className={`${theme.button.primary} px-4 py-2 rounded shadow  focus:shadow-outline focus:outline-none font-medium`}
            >
              Submit
            </button>
            <button
              type="submit"
              className={`${theme.button.secondary} px-4 py-2 rounded shadow  focus:shadow-outline focus:outline-none font-medium`}
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FormWithTheme;
