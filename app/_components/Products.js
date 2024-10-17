import HeaderProducts from "./HeaderProducts";
import ProductList from "./ProductList";

export default function Products() {
  return (
    <div className="flex flex-col gap-3">
      <HeaderProducts />
      <ProductList />
    </div>
  );
}
