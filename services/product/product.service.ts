import { IProduct } from "../../models/product/product.model";
import { products } from "../../utils/data";
import { wait } from "../../utils/wait";

const productService = {
  get: async (): Promise<IProduct[]> => {
    await wait(500);
    return products;
  },
  create: async (product: IProduct): Promise<IProduct> => {
    await wait(500);
    // return products.push(product);
    const newProduct: IProduct = { ...product };
    products.push(newProduct);
    return newProduct;
  },
  update: async (product: IProduct): Promise<IProduct> => {
    await wait(500);
    // return products.push(product);
    // const findProduct: IProduct = products.find(p => p.name === product.name);
    // products.push(newProduct);
    // return newProduct;
    return { ...product };
  },
};

export default productService;
