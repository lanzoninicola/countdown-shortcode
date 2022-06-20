import { createContext } from "use-context-selector";
import { CountdownThemeContextData } from "../types";

export const CountdownThemeContext = createContext<CountdownThemeContextData>(
  {} as CountdownThemeContextData
);
