import useSWR from "swr";

import { CountdownWidgetSettingsStateData } from "../../countdown-widget-provider/types";
import { CountdownWidgetThemeStateData } from "../../countdown-widget-theme-provider/types";
import mockedSettings from "../../countdown-widget/mock-data/settings.json";
import mocketTheme from "../../countdown-widget/mock-data/theme.json";
import { UseEditorSettingsAPIResponse } from "./useEditorSettings";

/**
 * Hook used to returns the settings from a local json file.
 * This is used in development mode to load the mock data.
 */
export default function useMockEditorSettings(): UseEditorSettingsAPIResponse {
  const fetcher = async () => {
    return {
      settings: { ...mockedSettings },
      theme: { ...mocketTheme },
    };
  };
  let { data, error } = useSWR<
    | {
        settings: CountdownWidgetSettingsStateData;
        theme: CountdownWidgetThemeStateData;
      }
    | undefined
  >("mockData-editorSettings", fetcher);

  return {
    settings: data?.settings,
    theme: data?.theme,
    isLoading: !error && !data,
    isError: error,
  };
}
