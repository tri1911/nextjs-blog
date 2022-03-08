export type Fn<T extends any[], R> = (...t: T) => R;

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
