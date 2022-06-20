import { useContextSelector } from "use-context-selector";
import { Countdown } from "../../../types";
import { AppContext } from "../context";

interface UseCurrentCountdownSelector {
  currentCountdown: Countdown | Countdown["id"] | null;
  setCurrentCountdown: (countdown: Countdown | Countdown["id"] | null) => void;
}

export default function useCurrentCountdownSelector(): UseCurrentCountdownSelector {
  const currentCountdown = useContextSelector(
    AppContext,
    (state) => state.currentCountdown
  );

  const setCurrentCountdown = useContextSelector(
    AppContext,
    (state) => state.setCurrentCountdown
  );

  return { currentCountdown, setCurrentCountdown };
}
