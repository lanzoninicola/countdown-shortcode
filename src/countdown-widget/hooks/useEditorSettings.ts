import { CountdownWidgetSettingsStateData } from "../../countdown-widget-provider/types";
import { CountdownWidgetThemeStateData } from "../../countdown-widget-theme-provider/types";
import { Countdown } from "../types";
import useMockEditorSettings from "./useMockEditorSettings";

interface UseEditorSettingsProps {
  /** if true load the mock data of the editor settings */
  isMockMode?: boolean;
  /** The current countdown rendered to the DOM by data-id attribute.
   * This value must be set to NULL if the component is used inside the editor
   */
  current: Countdown | Countdown["id"] | null;
}

export interface UseEditorSettingsAPIResponse {
  settings: CountdownWidgetSettingsStateData | undefined;
  theme: CountdownWidgetThemeStateData | undefined;
  isLoading?: boolean;
  isError?: any;
}

/**
 * Hook used to call the API to retrieve the data generated by the editor.
 */
export default function useEditorSettings({
  isMockMode,
}: UseEditorSettingsProps): UseEditorSettingsAPIResponse {
  if (isMockMode) {
    return useMockEditorSettings();
  }

  return {
    settings: undefined,
    theme: undefined,
    isLoading: false,
    isError: undefined,
  };
}
