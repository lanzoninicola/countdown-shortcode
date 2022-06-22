import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { CountdownWidgetThemeContext } from "../context/countdown-theme-context";

/**
 *
 * Hook that let works with the macro-groups of Theme state.
 *
 */
export default function useThemeSelector() {
  const timer = useContextSelector(
    CountdownWidgetThemeContext,
    (state) => state.timer
  );

  const title = useContextSelector(
    CountdownWidgetThemeContext,
    (state) => state.title
  );

  const setTimer = useContextSelector(
    CountdownWidgetThemeContext,
    (state) => state.setTimer
  );

  const setTitle = useContextSelector(
    CountdownWidgetThemeContext,
    (state) => state.setTitle
  );

  useEffect(() => {
    if (timer === undefined || title === undefined) {
      console.error(
        "useThemeSelector hook must be used within a CountdownWidgetProvider"
      );
    }
  }, [timer]);

  return {
    timer,
    title,
    setTimer,
    setTitle,
  };
}
