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
