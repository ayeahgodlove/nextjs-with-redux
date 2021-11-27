import { UpdateMode } from "../update-mode/update-model.enum";

export interface IBaseState {
  readonly isLoading: boolean;
  readonly errors?: string;
  readonly initialFetch: boolean;
  readonly updateMode: UpdateMode;
}
