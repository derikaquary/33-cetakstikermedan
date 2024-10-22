"use client";

import { useState } from "react";
import ProductsItem from "./ProductsItem"; // Import ProductsItem
import SearchBox from "./SearchBox";
import TextInfo from "./TextInfo";
import NewProducts from "./NewProducts";
import CategorySidebar from "./CategorySidebar";
import ProductDisplay from "./ProductDisplay"; // Import ProductDisplay
import { products } from "../_data/productsList";
import NewProductsDisplay from "./NewProductsDisplay";
import About from "./About";
import AboutContent from "./AboutContent";
import LatestArticle from "./LatestArticle";

export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState(""); // State for managing the search query
  const [selectedItem, setSelectedItem] = useState(null); // State for managing the selected item

  // Handle item click
  const handleItemClick = (itemName) => {
    const item = products.find((product) => product.name === itemName);
    setSelectedItem(item); // Set the selected item
  };

  // Filter products based on the search query
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      {/* Big Screen */}
      <div className="hidden w-full p-4 sm:block">
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className=" mx-auto flex max-w-4xl  justify-between">
          <CategorySidebar handleItemClick={handleItemClick} />
          <ProductDisplay
            selectedItem={selectedItem}
            filteredProducts={filteredProducts}
          />
        </div>
        <div className="mx-auto mt-[40px] flex w-full max-w-7xl flex-col items-center justify-center gap-3">
          <NewProducts />
          <NewProductsDisplay />
        </div>
        <div className="mx-auto mt-[40px] flex w-full max-w-7xl flex-col items-center justify-center gap-3">
          <About />
          <AboutContent />
        </div>
        <div className="mx-auto mt-[40px] flex w-full max-w-4xl flex-col items-center justify-center gap-3">
          <LatestArticle />
          
        </div>
      </div>

      {/* Small Screen */}
      <div className="w-full p-4 sm:hidden">
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div>
          <div className="mt-4 grid grid-cols-2 justify-center gap-6">
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
          {/* New Proucts Section */}
          <div className="mx-auto mt-[40px] flex w-full max-w-7xl flex-col items-center justify-center gap-3">
            <NewProducts />
            <NewProductsDisplay />
          </div>
        </div>
        <div className="mx-auto mt-[40px] flex w-full max-w-7xl flex-col items-center justify-center gap-3">
          <About />
          <AboutContent />
        </div>
        <div className="mx-auto mt-[40px] flex w-full max-w-7xl flex-col items-center justify-center gap-3">
          <LatestArticle />
          
        </div>
      </div>
    </div>
  );
}
