import CountdownWidget from "./countdown-widget/countdown-widget";
import CountdownWidgetProvider from "./countdown-widget-provider/countdown-widget-provider";
import CountdownWidgetThemeProvider from "./countdown-widget-theme-provider";
import useEditorSettings from "./countdown-widget/hooks/useEditorSettings";
import { Countdown } from "./countdown-widget/types";

interface AppProps {
  current: Countdown | Countdown["id"] | null;
}

function App({ current }: AppProps) {
  const { settings, theme, isError, isLoading } = useEditorSettings({
    isMockMode: true,
    current: current,
  });

  console.log(settings);

  // TODO: Error component
  // TODO: Handling errors
  if (isError) {
    return <div>failed to load</div>;
  }

  // TODO: Loading component
  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <CountdownWidgetProvider settings={settings} current={current}>
      <CountdownWidgetThemeProvider theme={theme}>
        <CountdownWidget />
      </CountdownWidgetThemeProvider>
    </CountdownWidgetProvider>
  );
}

export default App;
