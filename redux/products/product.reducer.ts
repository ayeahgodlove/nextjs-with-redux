/**
 * product.reducer.ts
 */

import { Reducer } from "redux";
import {
  emptyProduct,
  IProductState,
} from "../../models/product/product.model";
import { UpdateMode } from "../../models/update-mode/update-model.enum";
import { ProductActionTypes, productActionsCreators } from "./product.types";

/**
 * Initial state object
 */
export const INITIAL_STATE: IProductState = {
  products: [],
  errors: "",
  product: emptyProduct,
  isLoading: false,
  initialFetch: true,
  updateMode: UpdateMode.NONE,
};

const reducer: Reducer<IProductState> = (
  state: IProductState = INITIAL_STATE,
  action: productActionsCreators
): IProductState => {
  switch (action.type) {
    case ProductActionTypes.PRODUCTS_FETCH_REQUEST: {
      return { ...state, isLoading: true };
    }
    case ProductActionTypes.PRODUCTS_FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        initialFetch: false,
        products: action.payload,
      };
    }
    case ProductActionTypes.PRODUCT_EDIT_SUCCESS: {
      return {
        ...state,
        products: state.products.map((branch) => {
          return branch.name === action.payload.name ? action.payload : branch;
        }),
        updateMode: UpdateMode.NONE,
      };
    }
    case ProductActionTypes.PRODUCT_ADD_SUCCESS: {
      return {
        ...state,
        products: [...state.products, action.payload],
        updateMode: UpdateMode.NONE,
      };
    }
    case ProductActionTypes.PRODUCT_SET_ACTIVE: {
      return {
        ...state,
        product: action.payload,
      };
    }
    case ProductActionTypes.PRODUCT_SET_UPDATE_MODE: {
      return {
        ...state,
        updateMode: action.payload,
      };
    }
    case ProductActionTypes.PRODUCTS_FETCH_ERROR: {
      return { ...state, isLoading: false, errors: action.payload };
    }
    default:
      return state;
  }
};

export { reducer as productReducer };
