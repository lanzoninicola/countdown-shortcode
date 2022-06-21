import { Heading } from "@chakra-ui/react";
import useThemeTitleSelector from "../../../countdown-widget-theme-provider/hooks/useThemeTitleSelector";
import { GoogleFontsLinkTag } from "../../../countdown-widget-typography/countdown-widget-theme-provider";

// TODO: custom unit size for the fontSize

export default function CounterTitle() {
  const { text, fontColor, fontFamily, fontSize, fontWeight } =
    useThemeTitleSelector();

  return (
    <>
      <GoogleFontsLinkTag
        googleFonts={[
          {
            fontFamily,
            fontWeight,
          },
        ]}
      />
      <Heading
        as="h2"
        fontFamily={fontFamily}
        fontSize={`${fontSize}px`}
        color={fontColor}
        fontWeight={fontWeight}
      >
        {text}
      </Heading>
    </>
  );
}
