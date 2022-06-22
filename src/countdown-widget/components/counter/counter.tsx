import { HStack } from "@chakra-ui/react";

import { RemainingTime } from "../../types";
import UnitGroup from "./unit-group/unit-group";

export default function Counter({
  days,
  hours,
  minutes,
  seconds,
}: RemainingTime) {
  //TODO: based on configuration some values might be hidden
  // TODO: check the responsiveness of the timer
  //TODO: check if the digit has two digits
  // TODO: check isDanger

  return (
    <HStack>
      <UnitGroup label="Days" value={days} />
      <UnitGroup label="Hours" value={hours} />
      <UnitGroup label="Minutes" value={minutes} />
      <UnitGroup label="Seconds" value={seconds} isLastDigit={true} />
    </HStack>
  );
}
