"use client";

import { useState } from "react";
import ProductsItem from "./ProductsItem";
import { products } from "../_data/productsList";
import SearchBox from "./SearchBox";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState(""); // State for managing the search query
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // State for managing the category list

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
              className="flex h-[70px] cursor-pointer items-center justify-between bg-teal-400 px-[20px]"
              onClick={toggleCategory} // Toggle on click
            >
              <p>Categories</p>
              {/* Conditional rendering for arrow direction */}
              {isCategoryOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </div>
            {/* Category list: apply curtain drop effect */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isCategoryOpen
                  ? "max-h-[600px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              style={{
                transition:
                  "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
              }}
            >
              <div className="bg-light-green-400">
                <div className="flex h-[50px] items-center justify-between px-[20px] accent-light-green-500">
                  <p>category 1</p> <IoIosArrowForward />
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
                <div className="flex h-[50px] items-center justify-between px-[20px] accent-light-green-500">
                  category 7 <IoIosArrowForward />
                </div>
                <div className="flex h-[50px] items-center justify-between px-[20px] accent-light-green-500">
                  category 8 <IoIosArrowForward />
                </div>
                <div className="flex h-[50px] items-center justify-between px-[20px] accent-light-green-500">
                  category 9 <IoIosArrowForward />
                </div>
                <div className="flex h-[50px] items-center justify-between px-[20px] accent-light-green-500">
                  category 10 <IoIosArrowForward />
                </div>
                <div className="flex h-[50px] items-center justify-between px-[20px] accent-light-green-500">
                  category 11 <IoIosArrowForward />
                </div>
                <div className="flex h-[50px] items-center justify-between px-[20px] accent-light-green-500">
                  category 12 <IoIosArrowForward />
                </div>
              </div>
            </div>
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
