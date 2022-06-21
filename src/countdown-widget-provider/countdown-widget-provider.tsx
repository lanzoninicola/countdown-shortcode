import { useState } from "react";
import { Countdown } from "../countdown-widget/types";
import { CountdownWidgetContext } from "./context/countdown-widget-context";
import {
  CountdownWidgetSettingsStateData,
  CountdownWidgetStateData,
} from "./types";

const initState: CountdownWidgetStateData = {
  currentCountdown: null,
  timerExpired: false,
  targetDate: "2022-12-31T23:00",
  targetTimezone: "Europe/Berlin", // "America/Sao_Paulo" "Europe/Berlin", // America/Los_Angeles
};

interface CountdownWidgetProviderProps {
  children: React.ReactNode;
  settings: CountdownWidgetSettingsStateData | undefined;
  current?: Countdown | Countdown["id"] | null;
}

export default function CountdownWidgetProvider({
  children,
  settings,
  current,
}: CountdownWidgetProviderProps) {
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
    <CountdownWidgetContext.Provider
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
    </CountdownWidgetContext.Provider>
  );
}
