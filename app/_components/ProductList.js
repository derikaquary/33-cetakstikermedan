"use client";

import { useState } from "react";
import ProductsItem from "./ProductsItem";
import { products } from "../_data/productsList";
import SearchBox from "./SearchBox";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState(""); // State for managing the search query
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // State for managing the main category list

  // States for each category's item list visibility
  const [isSubCategory1Open, setIsSubCategory1Open] = useState(false);
  const [isSubCategory2Open, setIsSubCategory2Open] = useState(false);
  const [isSubCategory3Open, setIsSubCategory3Open] = useState(false);
  const [isSubCategory4Open, setIsSubCategory4Open] = useState(false);
  const [isSubCategory5Open, setIsSubCategory5Open] = useState(false);
  const [isSubCategory6Open, setIsSubCategory6Open] = useState(false);
  const [isSubCategory7Open, setIsSubCategory7Open] = useState(false);
  const [isSubCategory8Open, setIsSubCategory8Open] = useState(false);
  const [isSubCategory9Open, setIsSubCategory9Open] = useState(false);
  const [isSubCategory10Open, setIsSubCategory10Open] = useState(false);
  const [isSubCategory11Open, setIsSubCategory11Open] = useState(false);
  const [isSubCategory12Open, setIsSubCategory12Open] = useState(false);

  // Toggle main category list visibility
  const toggleCategory = () => {
    setIsCategoryOpen((prev) => !prev);
  };

  // Filter products based on the search query
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Big Screen */}
      <div className="hidden w-full p-4 sm:block">
        {/* Pass searchQuery and setSearchQuery as props to SearchBox */}
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="mx-auto flex max-w-4xl">
          <div className="mt-4 flex h-full w-[300px] flex-col">
            <div
              className="bg-orange-500 flex h-[70px] cursor-pointer items-center justify-between px-[20px]"
              onClick={toggleCategory} // Toggle on click
            >
              <p>Categories</p>
              {isCategoryOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </div>
            <div
              className={`overflow-hidden transition-all duration-100 ease-in-out ${
                isCategoryOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
              }`}
              style={{
                transition:
                  "max-height 0.1s ease-in-out, opacity 0.1s ease-in-out",
              }}
            >
              <div className="bg-orange-100">
                {/* Category 1 */}
                <div className="flex flex-col">
                  <div
                    className=" flex h-[50px] cursor-pointer items-center justify-between px-[20px]"
                    onClick={() => setIsSubCategory1Open((prev) => !prev)}
                  >
                    <p>category 1</p>
                    {isSubCategory1Open ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </div>
                  <div
                    className={` overflow-hidden transition-all duration-300 ease-in-out ${
                      isSubCategory1Open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pl-[50px]">item 1</p>
                    <p className="pl-[50px]">item 2</p>
                    <p className="pl-[50px]">item 3</p>
                  </div>
                </div>

                {/* Category 2 */}
                <div className="flex flex-col">
                  <div
                    className=" flex h-[50px] cursor-pointer items-center justify-between px-[20px]"
                    onClick={() => setIsSubCategory2Open((prev) => !prev)}
                  >
                    <p>category 2</p>
                    {isSubCategory2Open ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </div>
                  <div
                    className={` overflow-hidden transition-all duration-300 ease-in-out ${
                      isSubCategory2Open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pl-[50px]">item 1</p>
                    <p className="pl-[50px]">item 2</p>
                    <p className="pl-[50px]">item 3</p>
                  </div>
                </div>

                {/* Category 3 */}
                <div className="flex flex-col">
                  <div
                    className=" flex h-[50px] cursor-pointer items-center justify-between px-[20px]"
                    onClick={() => setIsSubCategory3Open((prev) => !prev)}
                  >
                    <p>category 3</p>
                    {isSubCategory3Open ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </div>
                  <div
                    className={` overflow-hidden transition-all duration-300 ease-in-out ${
                      isSubCategory3Open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pl-[50px]">item 1</p>
                    <p className="pl-[50px]">item 2</p>
                    <p className="pl-[50px]">item 3</p>
                  </div>
                </div>

                {/* Repeat similar structure for Category 4 to Category 12 */}

                {/* Category 4 */}
                <div className="flex flex-col">
                  <div
                    className=" flex h-[50px] cursor-pointer items-center justify-between px-[20px]"
                    onClick={() => setIsSubCategory4Open((prev) => !prev)}
                  >
                    <p>category 4</p>
                    {isSubCategory4Open ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </div>
                  <div
                    className={` overflow-hidden transition-all duration-300 ease-in-out ${
                      isSubCategory4Open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pl-[50px]">item 1</p>
                    <p className="pl-[50px]">item 2</p>
                    <p className="pl-[50px]">item 3</p>
                  </div>
                </div>

                {/* Category 5 */}
                <div className="flex flex-col">
                  <div
                    className=" flex h-[50px] cursor-pointer items-center justify-between px-[20px]"
                    onClick={() => setIsSubCategory5Open((prev) => !prev)}
                  >
                    <p>category 5</p>
                    {isSubCategory5Open ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </div>
                  <div
                    className={` overflow-hidden transition-all duration-300 ease-in-out ${
                      isSubCategory5Open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pl-[50px]">item 1</p>
                    <p className="pl-[50px]">item 2</p>
                    <p className="pl-[50px]">item 3</p>
                  </div>
                </div>

                {/* Category 6 */}
                <div className="flex flex-col">
                  <div
                    className=" flex h-[50px] cursor-pointer items-center justify-between px-[20px]"
                    onClick={() => setIsSubCategory6Open((prev) => !prev)}
                  >
                    <p>category 6</p>
                    {isSubCategory6Open ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </div>
                  <div
                    className={` overflow-hidden transition-all duration-300 ease-in-out ${
                      isSubCategory6Open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pl-[50px]">item 1</p>
                    <p className="pl-[50px]">item 2</p>
                    <p className="pl-[50px]">item 3</p>
                  </div>
                </div>

                {/* Category 7 */}
                <div className="flex flex-col">
                  <div
                    className=" flex h-[50px] cursor-pointer items-center justify-between px-[20px]"
                    onClick={() => setIsSubCategory7Open((prev) => !prev)}
                  >
                    <p>category 7</p>
                    {isSubCategory7Open ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </div>
                  <div
                    className={` overflow-hidden transition-all duration-300 ease-in-out ${
                      isSubCategory7Open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pl-[50px]">item 1</p>
                    <p className="pl-[50px]">item 2</p>
                    <p className="pl-[50px]">item 3</p>
                  </div>
                </div>

                {/* Category 8 */}
                <div className="flex flex-col">
                  <div
                    className=" flex h-[50px] cursor-pointer items-center justify-between px-[20px]"
                    onClick={() => setIsSubCategory8Open((prev) => !prev)}
                  >
                    <p>category 8</p>
                    {isSubCategory8Open ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </div>
                  <div
                    className={` overflow-hidden transition-all duration-300 ease-in-out ${
                      isSubCategory8Open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pl-[50px]">item 1</p>
                    <p className="pl-[50px]">item 2</p>
                    <p className="pl-[50px]">item 3</p>
                  </div>
                </div>

                {/* Category 9 */}
                <div className="flex flex-col">
                  <div
                    className=" flex h-[50px] cursor-pointer items-center justify-between px-[20px]"
                    onClick={() => setIsSubCategory9Open((prev) => !prev)}
                  >
                    <p>category 9</p>
                    {isSubCategory9Open ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </div>
                  <div
                    className={` overflow-hidden transition-all duration-300 ease-in-out ${
                      isSubCategory9Open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pl-[50px]">item 1</p>
                    <p className="pl-[50px]">item 2</p>
                    <p className="pl-[50px]">item 3</p>
                  </div>
                </div>

                {/* Category 10 */}
                <div className="flex flex-col">
                  <div
                    className=" flex h-[50px] cursor-pointer items-center justify-between px-[20px]"
                    onClick={() => setIsSubCategory10Open((prev) => !prev)}
                  >
                    <p>category 10</p>
                    {isSubCategory10Open ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </div>
                  <div
                    className={` overflow-hidden transition-all duration-300 ease-in-out ${
                      isSubCategory10Open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pl-[50px]">item 1</p>
                    <p className="pl-[50px]">item 2</p>
                    <p className="pl-[50px]">item 3</p>
                  </div>
                </div>

                {/* Category 11 */}
                <div className="flex flex-col">
                  <div
                    className=" flex h-[50px] cursor-pointer items-center justify-between px-[20px]"
                    onClick={() => setIsSubCategory11Open((prev) => !prev)}
                  >
                    <p>category 11</p>
                    {isSubCategory11Open ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </div>
                  <div
                    className={` overflow-hidden transition-all duration-300 ease-in-out ${
                      isSubCategory11Open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pl-[50px]">item 1</p>
                    <p className="pl-[50px]">item 2</p>
                    <p className="pl-[50px]">item 3</p>
                  </div>
                </div>

                {/* Category 12 */}
                <div className="flex flex-col">
                  <div
                    className=" flex h-[50px] cursor-pointer items-center justify-between px-[20px]"
                    onClick={() => setIsSubCategory12Open((prev) => !prev)}
                  >
                    <p>category 12</p>
                    {isSubCategory12Open ? <IoIosArrowDown /> : <IoIosArrowForward />}
                  </div>
                  <div
                    className={` overflow-hidden transition-all duration-300 ease-in-out ${
                      isSubCategory12Open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pl-[50px]">item 1</p>
                    <p className="pl-[50px]">item 2</p>
                    <p className="pl-[50px]">item 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 grid flex-1 grid-cols-2 items-center justify-center gap-6 gap-y-10 ">
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
