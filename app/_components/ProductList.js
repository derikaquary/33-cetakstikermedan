"use client";

import { useState } from "react";
import ProductsItem from "./ProductsItem";
import { products } from "../_data/productsList";
import SearchBox from "./SearchBox";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState(""); // State for managing the search query
  const [isCategoryOpen, setIsCategoryOpen] = useState(true); // State for managing the category list

  // Toggle category list visibility
  const toggleCategory = () => {
    setIsCategoryOpen((prev) => !prev);
  };

  // Filter products based on the search query
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      {/* Big Screen */}
      <div className="hidden w-full p-4 sm:block sm:bg-red-400">
        {/* Pass searchQuery and setSearchQuery as props to SearchBox */}
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="mx-auto flex max-w-4xl bg-yellow-400">
          <div className="mt-4 flex h-full w-[300px] flex-col bg-blue-400">
            <div
              className="flex h-[70px] items-center justify-between bg-teal-400 px-[20px] cursor-pointer"
              onClick={toggleCategory} // Toggle on click
            >
              <p>Categories</p>
              {/* Conditional rendering for arrow direction */}
              {isCategoryOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </div>
            {/* Category list: show/hide based on isCategoryOpen */}
            {isCategoryOpen && (
              <div className="bg-light-green-400">
                <div className="flex h-[50px] items-center justify-between px-[20px] accent-light-green-500">
                  category 1 <IoIosArrowForward />
                </div>
                <div className="flex h-[50px] items-center justify-between px-[20px] accent-light-green-500">
                  category 2 <IoIosArrowForward />
                </div>
                <div className="flex h-[50px] items-center justify-between px-[20px] accent-light-green-500">
                  category 3 <IoIosArrowForward />
                </div>
                <div className="flex h-[50px] items-center justify-between px-[20px] accent-light-green-500">
                  category 4 <IoIosArrowForward />
                </div>
                <div className="flex h-[50px] items-center justify-between px-[20px] accent-light-green-500">
                  category 5 <IoIosArrowForward />
                </div>
                <div className="flex h-[50px] items-center justify-between px-[20px] accent-light-green-500">
                  category 6 <IoIosArrowForward />
                </div>
              </div>
            )}
          </div>
          <div className="mt-4 grid flex-1 grid-cols-2 items-center justify-center gap-6 gap-y-10 bg-green-400">
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
      </div>

      {/* Small Screen */}
      <div className="w-full p-4 sm:hidden">
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
    </div>
  );
}
