import { Countdown } from "../../../types";

export type AppContextData = AppStateData & AppStateSetter;

export interface AppStateData {
  currentCountdown: Countdown | Countdown["id"] | null;
}

export interface AppStateSetter {
  setCurrentCountdown: (countdown: Countdown | Countdown["id"] | null) => void;
}
