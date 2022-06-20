import { createContext } from "use-context-selector";
import { AppContextData } from "../types";

export const AppContext = createContext<AppContextData>({} as AppContextData);
