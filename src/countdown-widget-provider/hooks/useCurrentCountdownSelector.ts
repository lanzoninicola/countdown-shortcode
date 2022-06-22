import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { Countdown } from "../../countdown-widget/types";
import COUNTDOWN_WIDGET_INITIAL_STATE from "../constants/initial-state";
import { CountdownWidgetContext } from "../context/countdown-widget-context";

interface UseCurrentCountdownSelector {
  currentCountdown: Countdown["id"] | null;
  setCurrentCountdown: (countdown: Countdown["id"] | null) => void;
  resetState: () => void;
}

export default function useCurrentCountdownSelector(): UseCurrentCountdownSelector {
  const currentCountdown = useContextSelector(
    CountdownWidgetContext,
    (state) => state.currentCountdown
  );

  const setCurrentCountdown = useContextSelector(
    CountdownWidgetContext,
    (state) => state.setCurrentCountdown
  );

  const resetState = () => {
    const { currentCountdown } = COUNTDOWN_WIDGET_INITIAL_STATE;

    setCurrentCountdown(currentCountdown);
  };

  useEffect(() => {
    if (currentCountdown === undefined) {
      console.error(
        "useCurrentCountdownSelector hook must be used within a CountdownWidgetProvider"
      );
    }
  }, [currentCountdown]);

  return { currentCountdown, setCurrentCountdown, resetState };
}
