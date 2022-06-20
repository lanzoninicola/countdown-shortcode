import { CountdownProvider } from "./countdown-provider/countdown-provider";
import { CountdownThemeProvider } from "./countdown-theme-provider/countdown-theme-provider";
import CountdownWidget from "./countdown-widget/countdown-widget";
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
    <CountdownProvider settings={settings} current={current}>
      <CountdownThemeProvider theme={theme}>
        <CountdownWidget />
      </CountdownThemeProvider>
    </CountdownProvider>
  );
}

export default App;
