import useThemeTimer from "../../../../countdown-widget-theme-provider/hooks/useThemeTimer";
import { StringOrNumber } from "../../../types";
import Digit from "./digit/digit";
import UnitGroupWrapper from "./unit-group-wrapper/unit-group-wrapper";
import UnitLabel from "./unit-label/unit-label";
import UnitSeparator from "./unit-separator/unit-separator";

interface UnitGroupProps {
  label: string;
  value: StringOrNumber;
  isDanger?: boolean;
  isLastDigit?: boolean;
}

export default function UnitGroup({
  label,
  value,
  isDanger,
  isLastDigit,
}: UnitGroupProps) {
  const digitTheme = useThemeTimer("unit-digit");
  const labelTheme = useThemeTimer("unit-label");
  const separatorTheme = useThemeTimer("unit-separator");

  const separatorFontSize = digitTheme.digitFontSize * 0.5;

  return (
    <UnitGroupWrapper>
      <Digit
        value={value}
        isDanger={isDanger}
        isLastDigit={isLastDigit}
        gridArea={"digit"}
        theme={digitTheme}
      />
      <UnitLabel
        label={label}
        isLastDigit={isLastDigit}
        gridArea={"label"}
        theme={labelTheme}
      />
      {!isLastDigit && separatorTheme.showSeparator && (
        <UnitSeparator gridArea={"separator"} fontSize={separatorFontSize}>
          {separatorTheme.separatorChar}
        </UnitSeparator>
      )}
    </UnitGroupWrapper>
  );
}
