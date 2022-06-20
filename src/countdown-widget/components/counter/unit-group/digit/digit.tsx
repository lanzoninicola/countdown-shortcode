import { Text } from "@chakra-ui/react";

import { ThemeUnitDigit } from "../../../../../countdown-theme-provider/types/timer";
import { StringOrNumber } from "../../../../types";

interface DigitProps {
  value: StringOrNumber;
  isDanger?: boolean;
  isLastDigit?: boolean;
  theme: ThemeUnitDigit;
  [key: string]: any;
}

export default function Digit({
  value,
  isDanger,
  isLastDigit,
  theme,
  ...props
}: DigitProps) {
  return (
    <Text
      as="span"
      fontSize={theme.digitFontSize}
      fontWeight={theme.digitFontWeight}
      fontFamily={theme.digitFontFamily}
      color={isLastDigit ? theme.lastUnitColor : theme.digitFontColor}
      {...props}
    >
      {value}
    </Text>
  );
}
