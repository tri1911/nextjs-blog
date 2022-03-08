import { createContext } from "react";
import { initialThemeList } from "./types";

export const FormContext = createContext(initialThemeList["default"]);
