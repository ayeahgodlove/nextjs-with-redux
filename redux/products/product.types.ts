/**
 * product.types.ts
 */

import { IProduct } from "../../models/product/product.model";
import { UpdateMode } from "../../models/update-mode/update-model.enum";

export enum ProductActionTypes {
  PRODUCTS_FETCH_REQUEST = "PRODUCTS_FETCH_REQUEST",
  PRODUCTS_FETCH_SUCCESS = "PRODUCTS_FETCH_SUCCESS",
  PRODUCTS_FETCH_ERROR = "PRODUCTS_FETCH_ERROR",
  PRODUCT_EDIT_SUCCESS = "PRODUCT_EDIT_SUCCESS",
  PRODUCT_ADD_SUCCESS = "PRODUCT_ADD_SUCCESS",
  PRODUCT_SET_ACTIVE = "PRODUCT_SET_ACTIVE",
  PRODUCT_SET_UPDATE_MODE = "PRODUCT_SET_UPDATE_MODE",
}

interface FetchProductsRequestAction {
  type: typeof ProductActionTypes.PRODUCTS_FETCH_REQUEST;
}

interface FetchProductsSuccessAction {
  type: typeof ProductActionTypes.PRODUCTS_FETCH_SUCCESS;
  payload: IProduct[];
}

interface FetchProductsFailureAction {
  type: typeof ProductActionTypes.PRODUCTS_FETCH_ERROR;
  payload: string;
}

interface AddProductsSuccessAction {
  type: typeof ProductActionTypes.PRODUCT_ADD_SUCCESS;
  payload: IProduct;
}

interface EditProductsSuccessAction {
  type: typeof ProductActionTypes.PRODUCT_EDIT_SUCCESS;
  payload: IProduct;
}

interface ProductsSetActiveAction {
  type: typeof ProductActionTypes.PRODUCT_SET_ACTIVE;
  payload: IProduct;
}

interface ProductsSetUpdateModeAction {
  type: typeof ProductActionTypes.PRODUCT_SET_UPDATE_MODE;
  payload: UpdateMode;
}

export type productActionsCreators =
  | FetchProductsRequestAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction
  | AddProductsSuccessAction
  | EditProductsSuccessAction
  | ProductsSetActiveAction
  | ProductsSetUpdateModeAction;
