import { useState } from "react";
import { CountdownThemeContext } from "./context/countdown-theme-context";
import { CountdownThemeStateData } from "./types";

// TODO: define the props in PRO licensing e verify if they are used. But HOW?. Limit client hacking.

const initState: CountdownThemeStateData = {
  title: {
    text: "Countdown to New Year",
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 24,
    fontColor: "#000000",
  },
  timer: {
    unitsShown: ["dd", "hh", "mm", "ss"],
    showSeparator: true,
    separatorChar: ":",
    digitFontFamily: "Inter",
    digitFontWeight: "400",
    digitFontSize: 48,
    digitFontColor: "#000000",
    lastUnitColor: "#e10b0b",
    labelFontFamily: "Inter",
    labelFontWeight: "400",
    labelFontSize: 16,
    labelFontColor: "#000000",
  },
};

interface CountdownThemeProviderProps {
  children: React.ReactNode;
  theme: CountdownThemeStateData | undefined;
}

// TODO: set the editor setting for the other properties
export function CountdownThemeProvider({
  children,
  theme,
}: CountdownThemeProviderProps) {
  const [title, setTitle] = useState(theme?.title || initState.title);
  const [timer, setTimer] = useState(theme?.timer || initState.timer);

  return (
    <CountdownThemeContext.Provider
      value={{
        title,
        setTitle,
        timer,
        setTimer,
      }}
    >
      {children}
    </CountdownThemeContext.Provider>
  );
}
