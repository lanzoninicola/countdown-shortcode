import CountdownWidget from "./countdown-widget/countdown-widget";
import useEditorSettings from "./countdown-widget/hooks/useEditorSettings";
import { Countdown } from "./countdown-widget/types";

interface AppProps {
  current: Countdown["id"] | null;
}

function App({ current }: AppProps) {
  const { isError, isLoading } = useEditorSettings({
    isMockMode: true,
    current: current,
  });

  // // TODO: Error component
  // // TODO: Handling errors
  // if (isError) {
  //   return <div>failed to load</div>;
  // }

  // // TODO: Loading component
  // if (isLoading) {
  //   return <div>loading...</div>;
  // }

  // TODO: move the provider to the top level in App component

  return <CountdownWidget />;
}

export default App;
