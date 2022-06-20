export interface Countdown {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export type StringOrNumber = string | number;

export type Milliseconds = number;

/** Values can be string or number depending if the user decide to pad with zeros the digits  */
export interface RemainingTime {
  /** The number of seconds in the countdown */
  seconds: StringOrNumber;
  /** The number of minutes in the countdown */
  minutes: StringOrNumber;
  /** The number of hours in the countdown */
  hours: StringOrNumber;
  /** The number of days in the countdown */
  days: StringOrNumber;
}
