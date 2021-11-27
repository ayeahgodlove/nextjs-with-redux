import { useDispatch, useSelector } from "react-redux";
import { useProduct } from "../hook/product/product.hook";
import { IRootState } from "../redux/root-reducer";
import { storeWrapper } from "../redux/store";
import * as productActions from "../redux/products/product.actions";


export default function Home(props) {
  const { getProducts } = useProduct();
  return (
    <div>
      <h1>Main Page</h1>
      <code>
      </code>
    </div>
  )
}
