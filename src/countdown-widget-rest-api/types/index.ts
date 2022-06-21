export interface APIResponse<T = undefined> {
  code: "error" | "success" | "warning";
  message: string;
  data: { status: number; payload?: T };
}
