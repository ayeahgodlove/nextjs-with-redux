/**
 * Store.ts
 */
import { createStore, AnyAction, Store, Reducer, applyMiddleware } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { IRootState, rootReducer } from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middlewares: [any] = [thunk];

// create your reducer
const reducer: Reducer<IRootState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return rootReducer(state, action);
};

// create a makeStore function
const makeStore = () =>
  createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));

// export an assembled wrapper
export const storeWrapper = createWrapper<Store<IRootState>>(makeStore, {
  debug: true,
});
