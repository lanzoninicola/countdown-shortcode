import { createContext } from "use-context-selector";
import { CountdownWidgetThemeContextData } from "../types";

export const CountdownWidgetThemeContext =
  createContext<CountdownWidgetThemeContextData>(
    {} as CountdownWidgetThemeContextData
  );
