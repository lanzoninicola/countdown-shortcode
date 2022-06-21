import { useContextSelector } from "use-context-selector";
import { CountdownWidgetContext } from "../context/countdown-widget-context";

export default function useCountdownSelector() {
  const targetDate = useContextSelector(
    CountdownWidgetContext,
    (ctx) => ctx?.targetDate
  );

  const setTargetDate = useContextSelector(
    CountdownWidgetContext,
    (ctx) => ctx?.setTargetDate
  );

  const targetTimezone = useContextSelector(
    CountdownWidgetContext,
    (ctx) => ctx?.targetTimezone
  );

  const setTargetTimezone = useContextSelector(
    CountdownWidgetContext,
    (ctx) => ctx?.setTargetTimezone
  );

  const timerExpired = useContextSelector(
    CountdownWidgetContext,
    (ctx) => ctx?.timerExpired
  );

  const setTimerExpired = useContextSelector(
    CountdownWidgetContext,
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
