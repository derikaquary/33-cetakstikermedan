"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export default function CategorySidebar({ handleItemClick }) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // State for managing the main category list
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

  const categories = [
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
  ];

  return (
    <div className="mt-4 flex h-full w-[300px] flex-col ">
      <div
        className="flex h-[70px] cursor-pointer items-center justify-between bg-orange-500 px-[20px]"
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
          transition: "max-height 0.1s ease-in-out, opacity 0.1s ease-in-out",
        }}
      >
        <div className="bg-orange-100">
          {/* Rendering of categories */}
          {categories.map(({ name, isOpen, setOpen, items }, idx) => (
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
                  isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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
  );
}
