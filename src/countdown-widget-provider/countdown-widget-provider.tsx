import { useState } from "react";

import { Countdown } from "../countdown-widget/types";
import COUNTDOWN_WIDGET_INITIAL_STATE from "./constants/initial-state";
import { CountdownWidgetContext } from "./context/countdown-widget-context";

interface CountdownWidgetProviderProps {
  children: React.ReactNode;
  current?: Countdown["id"] | null;
}

/**
 * This provides the state of the countdown widget that contains the following informations:
 *  1. the basic settings of the countdown widget (target date, timezone). Data are provided by calling the REST API.
 *  2. the current countdown value is provided in different ways depending on the context.:
 *
 *     *** WHEN WORKING WITH THE EDITOR ***
 *    - it is the countdown that is currently being edited.
 *    - it is updated when the user choose a countdown to edit from the list of countdowns.
 *
 *    *** WHEN WORKING WITH THE COUNTDOWN WIDGET ***
 *    - it is the countdown that is currently being displayed, isolated on the front-end pages.
 *    - it is provided by the [data-id] attribute when is rendered to the DOM when the user add the shortcode with the id attribute in the page.
 *
 * @param current  - the current countdown ID is currently being edited/displayed
 *
 * @returns
 */
export default function CountdownWidgetProvider({
  children,
  current,
}: CountdownWidgetProviderProps) {
  const [currentCountdown, setCurrentCountdown] = useState<
    Countdown["id"] | null
  >(current || COUNTDOWN_WIDGET_INITIAL_STATE.currentCountdown);
  const [timerExpired, setTimerExpired] = useState(
    COUNTDOWN_WIDGET_INITIAL_STATE.timerExpired
  );
  const [targetDate, setTargetDate] = useState(
    COUNTDOWN_WIDGET_INITIAL_STATE.targetDate
  );
  const [targetTimezone, setTargetTimezone] = useState(
    COUNTDOWN_WIDGET_INITIAL_STATE.targetTimezone
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
