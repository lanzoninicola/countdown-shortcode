export interface APIResponse<T> {
  code: "error" | "success" | "warning";
  message: string;
  data: { status: number; payload?: T };
}

export interface EditorSettingsPayload {
  settings: string;
}
