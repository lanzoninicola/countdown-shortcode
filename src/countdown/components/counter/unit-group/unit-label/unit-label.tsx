import { Text } from "@chakra-ui/react";

import { ThemeUnitLabel } from "../../../../../countdown-theme-provider/types/timer";

interface UnitLabelProps {
  label: string;
  isDanger?: boolean;
  isLastDigit?: boolean;
  theme: ThemeUnitLabel;
  [key: string]: any;
}

export default function UnitLabel({
  label,
  isLastDigit,
  theme,
  ...props
}: UnitLabelProps) {
  return (
    <Text
      as="span"
      fontSize={theme.labelFontSize}
      fontWeight={theme.labelFontWeight}
      fontFamily={theme.labelFontFamily}
      color={isLastDigit ? theme.lastUnitColor : theme.labelFontColor}
      {...props}
    >
      {label}
    </Text>
  );
}
