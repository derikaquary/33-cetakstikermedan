import { products } from "../_data/productsList";
import ProductsItem from "./ProductsItem";

export default function NewProductsDisplay() {
  return (
    <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 justify-end gap-6 gap-y-10">
      {products.map((item) => (
        <ProductsItem item={item} key={item.id} />
      ))}
    </div>
  );
}
