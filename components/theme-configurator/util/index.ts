import { Theme } from "../model";

export type Fn<T extends any[], U> = (...ts: T) => U;

export type Maybe<T> = T | undefined;

export function noop() {}

export function cloneTheme(t: Theme): Theme {
  return {
    name: t.name,
    description: t.description,
    style: {
      button: {
        primary: { ...t.style.button.primary },
        secondary: { ...t.style.button.secondary },
      },
      input: { ...t.style.input },
      root: { ...t.style.root },
    },
  };
}
