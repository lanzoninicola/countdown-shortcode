import { CountdownProvider } from "./countdown-provider/countdown-provider";
import { CountdownThemeProvider } from "./countdown-theme-provider/countdown-theme-provider";
import Countdown from "./countdown/countdown";
import useEditorSettings from "./countdown/hooks/useEditorSettings";

function App() {
  const { settings, theme, isError, isLoading } = useEditorSettings({
    isMockMode: false,
  });

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
    <CountdownProvider settings={settings}>
      <CountdownThemeProvider theme={theme}>
        <Countdown />
      </CountdownThemeProvider>
    </CountdownProvider>
  );
}

export default App;
