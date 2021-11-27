export interface IProduct {
  name: string;
  category: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
  createdOn: Date;
}

export const emptyProduct: IProduct = {
  name: "",
  category: "",
  image: "",
  price: 0,
  brand: "",
  rating: 0.3,
  numReviews: 0,
  countInStock: 0,
  description: "",
  createdOn: new Date(),
};
