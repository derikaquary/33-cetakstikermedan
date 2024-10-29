import ProductsItem from "./ProductsItem";
import OrderedItem from "./OrderedItem";


export default function ProductDisplay({ selectedItem, filteredProducts }) {
  return (
    <div className="flex-1">
      {/* Conditional rendering based on whether an item is selected */}
      {selectedItem ? (
        <div className="p-4">
          <OrderedItem item={selectedItem} />
        </div>
      ) : (
        <div className="grid justify-end grid-cols-3 gap-6 mt-4 gap-y-10">
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
