/**
 * root-reducer.ts
 */
import { Action, combineReducers } from "redux";
import { ThunkAction } from "redux-thunk";

export const rootReducer = combineReducers({
  // independent reducers
});

export type IRootState = ReturnType<typeof rootReducer>;
export type IAppThunk = ThunkAction<void, IRootState, unknown, Action<string>>;
