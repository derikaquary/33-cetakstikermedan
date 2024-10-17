import ProductsItem from "./ProductsItem";
import { products } from "../_data/productsList";

export default function ProductList() {
  return (
    <div className="grid grid-cols-2 gap-6 justify-center items-center p-2 w-full">
      {products.map((item) => (
        <ProductsItem item={item} key={item.id} />
      ))}
    </div>
  );
}
