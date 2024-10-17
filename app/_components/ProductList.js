"use client";

import { useState } from "react";
import ProductsItem from "./ProductsItem";
import { products } from "../_data/productsList";
import SearchBox from "./SearchBox";

export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState(""); // State for managing the search query

  // Filter products based on the search query
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="w-full p-4">
      {/* Pass searchQuery and setSearchQuery as props to SearchBox */}
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="mt-4 grid grid-cols-2 items-center justify-center gap-6 gap-y-10">
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
    </div>
  );
}
