import { useContextSelector } from "use-context-selector";
import { CountdownThemeContext } from "../context/countdown-theme-context";

export default function useThemeTimerSelector() {
  const timer = useContextSelector(CountdownThemeContext, (ctx) => ctx?.timer);

  const unitsShown = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.unitsShown
  );

  const showSeparator = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.showSeparator
  );

  const separatorChar = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.separatorChar
  );

  const digitFontFamily = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.digitFontFamily
  );

  const digitFontWeight = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.digitFontWeight
  );

  const digitFontSize = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.digitFontSize
  );

  const digitFontColor = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.digitFontColor
  );

  const lastUnitColor = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.lastUnitColor
  );

  const labelFontFamily = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.labelFontFamily
  );

  const labelFontWeight = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.labelFontWeight
  );

  const labelFontSize = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.labelFontSize
  );

  const labelFontColor = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.timer.labelFontColor
  );

  const setTimer = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.setTimer
  );

  function setUnitsShown(unitsShown: string[]) {
    setTimer({ ...timer, unitsShown });
  }

  function setShowSeparator(showSeparator: boolean) {
    setTimer({ ...timer, showSeparator });
  }

  function setSeparatorChar(separatorChar: string) {
    setTimer({ ...timer, separatorChar });
  }

  function setDigitFontFamily(digitFontFamily: string) {
    setTimer({ ...timer, digitFontFamily });
  }

  function setDigitFontWeight(digitFontWeight: string) {
    setTimer({ ...timer, digitFontWeight });
  }

  function setDigitFontSize(digitFontSize: number) {
    setTimer({ ...timer, digitFontSize });
  }

  function setDigitFontColor(digitFontColor: string) {
    setTimer({ ...timer, digitFontColor });
  }

  function setLastUnitColor(lastUnitColor: string) {
    setTimer({ ...timer, lastUnitColor });
  }

  function setLabelFontFamily(labelFontFamily: string) {
    setTimer({ ...timer, labelFontFamily });
  }

  function setLabelFontWeight(labelFontWeight: string) {
    setTimer({ ...timer, labelFontWeight });
  }

  function setLabelFontSize(labelFontSize: number) {
    setTimer({ ...timer, labelFontSize });
  }

  function setLabelFontColor(labelFontColor: string) {
    setTimer({ ...timer, labelFontColor });
  }

  return {
    unitsShown,
    showSeparator,
    separatorChar,
    digitFontFamily,
    digitFontWeight,
    digitFontSize,
    digitFontColor,
    lastUnitColor,
    labelFontFamily,
    labelFontWeight,
    labelFontSize,
    labelFontColor,
    setUnitsShown,
    setShowSeparator,
    setSeparatorChar,
    setDigitFontFamily,
    setDigitFontWeight,
    setDigitFontSize,
    setDigitFontColor,
    setLastUnitColor,
    setLabelFontFamily,
    setLabelFontWeight,
    setLabelFontSize,
    setLabelFontColor,
  };
}
