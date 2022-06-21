import { Grid } from "@chakra-ui/react";

import useThemeTimerSelector from "../../../countdown-widget-theme-provider/hooks/useThemeTimerSelector";
import { RemainingTime } from "../../types";
import UnitGroup from "./unit-group/unit-group";

export default function Counter({
  days,
  hours,
  minutes,
  seconds,
}: RemainingTime) {
  const { unitsShown } = useThemeTimerSelector();
  //TODO: based on configuration some values might be hidden
  // TODO: check the responsiveness of the timer
  //TODO: check if the digit has two digits
  // TODO: check isDanger

  const columnsNumber = unitsShown.length;
  const templateColumnsGrid: string = unitsShown.map(() => "1fr").join(" ");

  return (
    <Grid
      // gridTemplateColumns={"1fr .1fr 1fr .1fr 1fr .1fr 1fr"}
      gridTemplateColumns={templateColumnsGrid}
      gridTemplateRows={"auto"}
      w="100%"
    >
      {unitsShown.map((unit, index) => {
        switch (unit) {
          case "dd":
            return (
              <UnitGroup
                key={index}
                label="Days"
                value={days}
                isLastDigit={index === columnsNumber - 1}
              />
            );
          case "hh":
            return (
              <UnitGroup
                key={index}
                label="Hours"
                value={hours}
                isLastDigit={index === columnsNumber - 1}
              />
            );
          case "mm":
            return (
              <UnitGroup
                key={index}
                label="Minutes"
                value={minutes}
                isLastDigit={index === columnsNumber - 1}
              />
            );
          case "ss":
            return (
              <UnitGroup
                key={index}
                label="Seconds"
                value={seconds}
                isLastDigit={index === columnsNumber - 1}
              />
            );
          default:
            return null;
        }
      })}
    </Grid>
  );
}
