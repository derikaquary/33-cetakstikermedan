import HeaderProducts from "./HeaderProducts";
import ProductList from "./ProductList";


export default function Products() {
  return (
    <div className="flex flex-col mt-5 ">
      <HeaderProducts />
      <ProductList />
    </div>
  );
}
