import { IRootState } from "../../redux/root-reducer";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import * as productActions from "../../redux/products/product.actions";
import { IProduct } from "../../models/product/product.model";
import { UpdateMode } from "../../models/update-mode/update-model.enum";
import productService from "../../services/product/product.service";

const useProduct = () => {
  const products = useSelector<IRootState, IProduct[]>(
    (state) => state.product.products
  );
  const isLoading = useSelector<IRootState, boolean>(
    (state) => state.product.isLoading
  );
  const initialFetch = useSelector<IRootState, boolean>(
    (state) => state.product.isLoading
  );
  const product = useSelector<IRootState, IProduct>(
    (state) => state.product.product
  );
  const updateMode = useSelector<IRootState, UpdateMode>(
    (state) => state.product.updateMode
  );

  const dispatch = useDispatch();

  const getProducts = useCallback(() => {
    if (initialFetch) {
      dispatch(productActions.fetchProductesAsync());
    }
  }, [dispatch, initialFetch]);
  const loadProductes = useCallback(() => {
    if (initialFetch) {
      dispatch(productActions.fetchProductesAsync());
    }
  }, [dispatch, initialFetch]);

  const addProduct = async (product: IProduct) => {
    return await productService
      .create(product)
      .then((product) => {
        dispatch(productActions.addProductSuccess(product));
        return true;
      })
      .catch((error) => {
        return false;
      });
  };

  const setProduct = (product: IProduct) => {
    dispatch(productActions.setActiveProduct(product));
  };

  const setUpdateMode = (updateMode: UpdateMode) => {
    dispatch(productActions.setProductUpdateMode(updateMode));
  };

  const editProduct = async (product: IProduct) => {
    return await productService
      .update(product)
      .then((product) => {
        dispatch(productActions.editProductSuccess(product));
        setProduct(product);
        return true;
      })
      .catch((error) => {
        return false;
      });
  };

  const saveProduct = async (product: IProduct, updateMode: UpdateMode) => {
    return updateMode === UpdateMode.ADD
      ? await addProduct(product)
      : await editProduct(product);
  };

  useEffect(() => {
    loadProductes();
  }, [product, products, isLoading, initialFetch, loadProductes]);

  console.log("products", products);

  return {
    product,
    products,
    isLoading,
    initialFetch,
    updateMode,
    setUpdateMode,
    addProduct,
    editProduct,
    saveProduct,
    setProduct,
    getProducts,
  };
};

export { useProduct };
