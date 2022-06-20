import useSWR from "swr";

import { CountdownSettingsStateData } from "../../countdown-provider/types";
import { CountdownThemeStateData } from "../../countdown-theme-provider/types";
import mockedSettings from "../mock-data/settings.json";
import mocketTheme from "../mock-data/theme.json";
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
    | { settings: CountdownSettingsStateData; theme: CountdownThemeStateData }
    | undefined
  >("mockData-editorSettings", fetcher);

  return {
    settings: data?.settings,
    theme: data?.theme,
    isLoading: !error && !data,
    isError: error,
  };
}
