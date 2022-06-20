import { useContextSelector } from "use-context-selector";
import { CountdownContext } from "../context/countdown-context";

export default function useCountdownSelector() {
  const targetDate = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.targetDate
  );

  const setTargetDate = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.setTargetDate
  );

  const targetTimezone = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.targetTimezone
  );

  const setTargetTimezone = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.setTargetTimezone
  );

  const timerExpired = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.timerExpired
  );

  const setTimerExpired = useContextSelector(
    CountdownContext,
    (ctx) => ctx?.setTimerExpired
  );

  return {
    targetDate,
    setTargetDate,
    targetTimezone,
    setTargetTimezone,
    timerExpired,
    setTimerExpired,
  };
}
