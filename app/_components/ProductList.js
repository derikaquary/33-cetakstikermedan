import ProductsItem from "./ProductsItem";
import { products } from "../_data/productsList";

export default function ProductList() {
  return (
    <div className="grid w-full grid-cols-2 items-center justify-center gap-6 gap-y-10 p-2">
      {products.map((item) => (
        <ProductsItem item={item} key={item.id} />
      ))}
    </div>
  );
}
