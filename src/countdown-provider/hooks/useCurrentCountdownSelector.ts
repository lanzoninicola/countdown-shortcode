import { useContextSelector } from "use-context-selector";
import { Countdown } from "../../countdown/types";
import { CountdownContext } from "../context/countdown-context";

interface UseCurrentCountdownSelector {
  currentCountdown: Countdown | Countdown["id"] | null;
  setCurrentCountdown: (countdown: Countdown | Countdown["id"] | null) => void;
}

export default function useCurrentCountdownSelector(): UseCurrentCountdownSelector {
  const currentCountdown = useContextSelector(
    CountdownContext,
    (state) => state.currentCountdown
  );

  const setCurrentCountdown = useContextSelector(
    CountdownContext,
    (state) => state.setCurrentCountdown
  );

  return { currentCountdown, setCurrentCountdown };
}
