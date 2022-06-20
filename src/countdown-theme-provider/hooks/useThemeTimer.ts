import {
  ThemeUnitDigit,
  ThemeUnitsShown,
  ThemeUnitLabel,
  ThemeSeparator,
  ThemeTimerContextData,
} from "../types/timer";
import useThemeTimerSelector from "./useThemeTimerSelector";

type UseThemeTimer =
  | ThemeUnitsShown
  | ThemeSeparator
  | ThemeUnitDigit
  | ThemeUnitLabel
  | ThemeTimerContextData;

type ThemeTimerSlice =
  | "unitsShown"
  | "unit-separator"
  | "unit-digit"
  | "unit-label";

/**
 * Read-only hook to get the theme timer data based on the slice given.
 *
 * @param slice The slice of the theme timer data to get.
 * @returns
 */
function useThemeTimer(slice: "unitsShown"): ThemeUnitsShown;
function useThemeTimer(slice: "unit-separator"): ThemeSeparator;
function useThemeTimer(slice: "unit-digit"): ThemeUnitDigit;
function useThemeTimer(slice: "unit-label"): ThemeUnitLabel;
function useThemeTimer(slice: ThemeTimerSlice): UseThemeTimer {
  const {
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
  } = useThemeTimerSelector();

  if (slice === "unitsShown") {
    return { unitsShown };
  }

  if (slice === "unit-separator") {
    return {
      showSeparator,
      separatorChar,
    };
  }

  if (slice === "unit-digit") {
    return {
      digitFontFamily,
      digitFontWeight,
      digitFontSize,
      digitFontColor,
      lastUnitColor,
    };
  }

  if (slice === "unit-label") {
    return {
      labelFontFamily,
      labelFontWeight,
      labelFontSize,
      labelFontColor,
      lastUnitColor,
    };
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
  };
}

export default useThemeTimer;
