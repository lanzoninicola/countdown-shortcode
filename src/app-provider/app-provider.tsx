import { useState } from "react";
import { Countdown } from "../countdown/types";

import { AppContext } from "./context";
import { AppStateData } from "./types";

interface AppProviderProps {
  children: React.ReactNode;
  current: Countdown["id"] | null;
}

export function AppProvider({ children, current }: AppProviderProps) {
  const [currentCountdown, setCurrentCountdown] = useState<
    Countdown | Countdown["id"] | null
  >(current);

  return (
    <AppContext.Provider
      value={{
        currentCountdown,
        setCurrentCountdown,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
