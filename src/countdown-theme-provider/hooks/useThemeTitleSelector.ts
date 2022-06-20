import { useContextSelector } from "use-context-selector";
import { CountdownThemeContext } from "../context/countdown-theme-context";

export default function useThemeTitleSelector() {
  const title = useContextSelector(CountdownThemeContext, (ctx) => ctx?.title);

  const text = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.title.text
  );

  const fontFamily = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.title.fontFamily
  );

  const fontWeight = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.title.fontWeight
  );

  const fontSize = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.title.fontSize
  );

  const fontColor = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.title.fontColor
  );

  const setTitle = useContextSelector(
    CountdownThemeContext,
    (ctx) => ctx?.setTitle
  );

  function setText(text: string) {
    setTitle({ ...title, text });
  }

  function setFontFamily(fontFamily: string) {
    setTitle({ ...title, fontFamily });
  }

  function setFontWeight(fontWeight: string) {
    setTitle({ ...title, fontWeight });
  }

  function setFontSize(fontSize: number) {
    setTitle({ ...title, fontSize });
  }

  function setFontColor(fontColor: string) {
    setTitle({ ...title, fontColor });
  }

  return {
    text,
    fontFamily,
    fontWeight,
    fontSize,
    fontColor,
    setText,
    setFontFamily,
    setFontWeight,
    setFontSize,
    setFontColor,
  };
}
