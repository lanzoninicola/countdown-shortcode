import { useState } from "react";
import { CountdownContext } from "./context/countdown-context";
import { CountdownSettingsStateData, CountdownStateData } from "./types";

const initState: CountdownStateData = {
  timerExpired: false,
  targetDate: "2022-12-31T23:00",
  targetTimezone: "Europe/Berlin", // "America/Sao_Paulo" "Europe/Berlin", // America/Los_Angeles
};

interface CountdownProviderProps {
  children: React.ReactNode;
  settings: CountdownSettingsStateData | undefined;
}

export function CountdownProvider({
  children,
  settings,
}: CountdownProviderProps) {
  const [timerExpired, setTimerExpired] = useState(initState.timerExpired);
  const [targetDate, setTargetDate] = useState(
    settings?.targetDate || initState.targetDate
  );
  const [targetTimezone, setTargetTimezone] = useState(
    settings?.targetTimezone || initState.targetTimezone
  );

  return (
    <CountdownContext.Provider
      value={{
        timerExpired,
        setTimerExpired,
        targetDate,
        setTargetDate,
        targetTimezone,
        setTargetTimezone,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
