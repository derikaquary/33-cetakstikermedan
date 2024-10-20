"use client";

import { useState } from "react";
import ProductsItem from "./ProductsItem";
import { products } from "../_data/productsList";
import SearchBox from "./SearchBox";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import OrderedItem from "./OrderedItem";

export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState(""); // State for managing the search query
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // State for managing the main category list
  const [selectedItem, setSelectedItem] = useState(null); // State for managing the selected item

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
      <div className="hidden w-full p-4 sm:block ">
        {/* Pass searchQuery and setSearchQuery as props to SearchBox */}
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className=" mx-auto flex max-w-6xl justify-center">
          <div className=" mt-4 flex h-full w-[300px] flex-col">
            <div
              className=" flex h-[70px]  cursor-pointer items-center justify-between bg-orange-500 px-[20px] "
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
              <div className="bg-orange-100 ">
                {/* Rendering of categories */}
                {[
                  {
                    name: "Print Lembaran",
                    isOpen: isSubCategory1Open,
                    setOpen: setIsSubCategory1Open,
                    items: ["Undangan", "Logo", "Logo Banner", "back"],
                  },
                  {
                    name: "Stationary",
                    isOpen: isSubCategory2Open,
                    setOpen: setIsSubCategory2Open,
                    items: ["Plank Pintu", "Stiker Tas", "Booklet", "back"],
                  },
                  {
                    name: "Print Kain",
                    isOpen: isSubCategory3Open,
                    setOpen: setIsSubCategory3Open,
                    items: ["Stiker Tas Variasi", "Stiker Cap", "Piagam", "back"],
                  },
                  {
                    name: "Large Format",
                    isOpen: isSubCategory4Open,
                    setOpen: setIsSubCategory4Open,
                    items: ["item 1", "item 2", "item 3", "back"],
                  },
                  {
                    name: "Promo and Gift",
                    isOpen: isSubCategory5Open,
                    setOpen: setIsSubCategory5Open,
                    items: ["item 1", "item 2", "item 3", "back"],
                  },
                  {
                    name: "Foto",
                    isOpen: isSubCategory6Open,
                    setOpen: setIsSubCategory6Open,
                    items: ["item 1", "item 2", "item 3", "back"],
                  },
                  {
                    name: "Marketing Tools",
                    isOpen: isSubCategory7Open,
                    setOpen: setIsSubCategory7Open,
                    items: ["item 1", "item 2", "item 3", "back"],
                  },
                  {
                    name: "Printerior",
                    isOpen: isSubCategory8Open,
                    setOpen: setIsSubCategory8Open,
                    items: ["item 1", "item 2", "item 3", "back"],
                  },
                  {
                    name: "Coworking Space",
                    isOpen: isSubCategory9Open,
                    setOpen: setIsSubCategory9Open,
                    items: ["item 1", "item 2", "item 3", "back"],
                  },
                  {
                    name: "Signage",
                    isOpen: isSubCategory10Open,
                    setOpen: setIsSubCategory10Open,
                    items: ["item 1", "item 2", "item 3", "back"],
                  },
                  {
                    name: "Packing",
                    isOpen: isSubCategory11Open,
                    setOpen: setIsSubCategory11Open,
                    items: ["item 1", "item 2", "item 3", "back"],
                  },
                  {
                    name: "UMKM",
                    isOpen: isSubCategory12Open,
                    setOpen: setIsSubCategory12Open,
                    items: ["item 1", "item 2", "item 3", "back"],
                  },
                ].map(({ name, isOpen, setOpen, items }, idx) => (
                  <div className="flex flex-col" key={idx}>
                    <div
                      className="flex h-[50px] cursor-pointer items-center justify-between px-[20px]"
                      onClick={() => setOpen((prev) => !prev)}
                    >
                      <p>{name}</p>
                      {isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {items.map((item, itemIdx) => (
                        <p
                          className="cursor-pointer pl-[50px]"
                          onClick={() => handleItemClick(item)}
                          key={itemIdx}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Conditional Rendering for Right Box */}
          <div className="flex-1 ">
            {selectedItem ? (
              <div className="p-4 ">
                <OrderedItem item={selectedItem} />
              </div>
            ) : (
              <div className="mt-4 grid grid-cols-2 justify-end gap-6 gap-y-10 ">
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
