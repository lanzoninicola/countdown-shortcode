import { VStack } from "@chakra-ui/react";
import useCountdownSelector from "../../../countdown-provider/hooks/useCountdownSelector";

import useCountdown from "../../hooks/useCountdown";
import CounterTitle from "../counter-title/counter-title";
import Counter from "../counter/counter";

// TODO: add padToZeros settings

const CountdownTimer = () => {
  const {
    targetDate: HTMLInputTargetDate,
    targetTimezone: HTMLInputTargetTimezone,
  } = useCountdownSelector();
  const { days, hours, minutes, seconds } = useCountdown({
    HTMLInputTargetDate,
    HTMLInputTargetTimezone,
  });

  return (
    <VStack id="countdown" p="1rem" bg="white">
      <CounterTitle />
      <Counter days={days} hours={hours} minutes={minutes} seconds={seconds} />
    </VStack>
  );
};

export default CountdownTimer;
