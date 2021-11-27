/**
 * root-reducer.ts
 */
import { Action, combineReducers } from "redux";
import { ThunkAction } from "redux-thunk";
import { productReducer } from "./products/product.reducer";

export const rootReducer = combineReducers({
  // independent reducers
  product: productReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export type IAppThunk = ThunkAction<void, IRootState, unknown, Action<string>>;
