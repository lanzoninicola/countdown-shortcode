import { useState } from "react";
import { Countdown } from "../countdown-widget/types";
import { CountdownContext } from "./context/countdown-context";
import { CountdownSettingsStateData, CountdownStateData } from "./types";

const initState: CountdownStateData = {
  currentCountdown: null,
  timerExpired: false,
  targetDate: "2022-12-31T23:00",
  targetTimezone: "Europe/Berlin", // "America/Sao_Paulo" "Europe/Berlin", // America/Los_Angeles
};

interface CountdownProviderProps {
  children: React.ReactNode;
  settings: CountdownSettingsStateData | undefined;
  current?: Countdown | Countdown["id"] | null;
}

export function CountdownProvider({
  children,
  settings,
  current,
}: CountdownProviderProps) {
  const [currentCountdown, setCurrentCountdown] = useState<
    Countdown | Countdown["id"] | null
  >(current || initState.currentCountdown);
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
        currentCountdown,
        setCurrentCountdown,
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
