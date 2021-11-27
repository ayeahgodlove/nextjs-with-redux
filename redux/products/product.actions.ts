import { action } from "typesafe-actions";
import { productActionsCreators, ProductActionTypes } from "./product.types";
import { IAppThunk } from "../root-reducer";
import { IProduct } from "../../models/product/product.model";
import { UpdateMode } from "../../models/update-mode/update-model.enum";
import productService from "../../services/product/product.service";

export const fetchProductesRequest = (): productActionsCreators => {
  return action(ProductActionTypes.PRODUCTS_FETCH_REQUEST);
};

export const fetchProductesSuccess = (
  products: IProduct[]
): productActionsCreators =>
  action(ProductActionTypes.PRODUCTS_FETCH_SUCCESS, products);

export const fetchProductesError = (message: string): productActionsCreators =>
  action(ProductActionTypes.PRODUCTS_FETCH_ERROR, message);

export const fetchProductesAsync = (): IAppThunk => async (dispatch) => {
  dispatch(fetchProductesRequest());

  await productService
    .get()
    .then((products) => {
      console.log("products: ", products);
      dispatch(fetchProductesSuccess(products));
    })
    .catch((error) => dispatch(fetchProductesError(error.message)));
};

export const editProductSuccess = (product: IProduct): productActionsCreators =>
  action(ProductActionTypes.PRODUCT_EDIT_SUCCESS, product);

export const addProductSuccess = (product: IProduct): productActionsCreators =>
  action(ProductActionTypes.PRODUCT_ADD_SUCCESS, product);

export const setActiveProduct = (product: IProduct): productActionsCreators =>
  action(ProductActionTypes.PRODUCT_SET_ACTIVE, product);

export const setProductUpdateMode = (
  updateMode: UpdateMode
): productActionsCreators =>
  action(ProductActionTypes.PRODUCT_SET_UPDATE_MODE, updateMode);
