export type Theme = {
  name: string;
  description: string;
  main: string;
  input: string;
  button: {
    primary: string;
    secondary: string;
  };
};

export type ThemeList = { [name: string]: Theme };

export const initialThemeList: ThemeList = {
  default: {
    name: "default",
    description: "default theme",
    main: "bg-cyan-700 text-white",
    input: "bg-amber-100 text-violet-900",
    button: {
      primary: "bg-amber-600 text-white",
      secondary: "bg-amber-200 text-stone-500",
    },
  },
};
