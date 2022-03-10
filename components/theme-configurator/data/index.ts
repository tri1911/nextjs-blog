export type TextBg = { text: string; bg: string };

export type ThemeStyle = {
  button: { primary: TextBg; secondary: TextBg };
  input: TextBg;
  root: TextBg;
};

export type Theme = {
  name: string;
  description: string;
  style: ThemeStyle;
};

export const BASE_THEME: Theme[] = [
  {
    name: "red",
    description: "Red Style",
    style: {
      button: {
        primary: { text: `text-white`, bg: `bg-red-600` },
        secondary: { text: `text-red-600`, bg: `border-red-600 border` },
      },
      input: { text: `text-gray-700`, bg: `bg-white` },
      root: { text: `text-gray-700`, bg: `bg-red-100` },
    },
  },
  {
    name: "blue",
    description: "Blue Style",
    style: {
      button: {
        primary: { text: `text-white`, bg: `bg-blue-600` },
        secondary: { text: `text-blue-600`, bg: `border-blue-600 border` },
      },
      input: { text: `text-gray-700`, bg: `bg-white` },
      root: { text: `text-gray-700`, bg: `bg-blue-100` },
    },
  },
];
