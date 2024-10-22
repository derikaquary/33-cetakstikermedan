import ProductsItem from "./ProductsItem";
import OrderedItem from "./OrderedItem";
import { products } from "../_data/productsList";

export default function ProductDisplay({ selectedItem, filteredProducts }) {
  return (
    <div className="flex-1">
      {/* Conditional rendering based on whether an item is selected */}
      {selectedItem ? (
        <div className="p-4">
          <OrderedItem item={selectedItem} />
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-3 justify-end gap-6 gap-y-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ProductsItem item={item} key={item.id} />
            ))
          ) : (
            <p className="col-span-2 text-center text-gray-500">
              No products found.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
