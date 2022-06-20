/**
 * This describes the shape of the context data used in the components logic.
 * This is used to pass data between the components.
 *
 * This contains part of the information coming from the editor and other from the logic of components.
 */
export type CountdownContextData = CountdownStateData & CountdownStateSetter;

export interface CountdownStateData extends CountdownSettingsStateData {
  /** Flag that tell us if the timer is expired */
  timerExpired: boolean;
}

export interface CountdownStateSetter extends CountdownSettingsStateSetter {
  setTimerExpired: (timerExpired: boolean) => void;
}

/**
 *  This inteface describes the shape of data coming from the Editor (General Section)
 *  It's shared with the Editor component to maintain syncrhronized between them
 */
export interface CountdownSettingsStateData {
  /** The date in the future, it is used for the timer calculation */
  /** format: 'YYYY-MM-DDTHH:MM' */
  targetDate: string;
  /** The timezone to which the target date refers  */
  targetTimezone: string;
}

/**
 * This inteface describes the group of setters for the Countdown Settings
 */
export interface CountdownSettingsStateSetter {
  setTargetDate: (date: string) => void;
  setTargetTimezone: (timezone: string) => void;
}
