import useThemeTimerSelector from "../countdown-widget-theme-provider/hooks/useThemeTimerSelector";
import { GoogleFontsLinkTag } from "../countdown-widget-typography/countdown-widget-typography";
import CountdownTimer from "./components/countdown-timer/countdown-timer";

export default function CountdownWidget() {
  const { digitFontFamily, digitFontWeight, labelFontFamily, labelFontWeight } =
    useThemeTimerSelector();

  const googleFonts = [];
  googleFonts.push({
    fontFamily: digitFontFamily,
    fontWeight: digitFontWeight,
  });

  if (
    labelFontFamily !== digitFontFamily ||
    labelFontWeight !== digitFontWeight
  ) {
    googleFonts.push({
      fontFamily: labelFontFamily,
      fontWeight: labelFontWeight,
    });
  }

  return (
    <>
      <GoogleFontsLinkTag googleFonts={googleFonts} />
      <CountdownTimer />
    </>
  );
}
