"use client";

import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { supabase } from "@/lib/supabase";


export default function CategorySidebar({ handleItemClick }) {
  const [categories, setCategories] = useState([]);
  const [openCategories, setOpenCategories] = useState({}); // Track open/close state per category

  useEffect(() => {
    const fetchCategoriesAndItems = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("category, name")
        .order("category", { ascending: true });

      if (error) {
        console.error("Error fetching categories:", error);
        return;
      }

      // Organize items by category
      const groupedCategories = data.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item.name);
        return acc;
      }, {});

      // Convert to array format with names and items for easier rendering
      const categoriesArray = Object.keys(groupedCategories).map((category) => ({
        name: category,
        items: groupedCategories[category],
      }));
      
      setCategories(categoriesArray);
    };

    fetchCategoriesAndItems();
  }, []);

  const toggleCategory = (categoryName) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [categoryName]: !prevState[categoryName],
    }));
  };

  return (
    <div className="mt-4 flex h-full w-[300px] flex-col">
      <div
        className="flex h-[70px] cursor-pointer items-center justify-between bg-orange-500 px-[20px]"
        onClick={() => setOpenCategories((prev) => !prev)} 
      >
        <p>Categories</p>
        {Object.values(openCategories).includes(true) ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </div>

      {categories.length > 0 ? (
        <div className="bg-orange-100">
          {categories.map((category) => (
            <div className="flex flex-col" key={category.name}>
              <div
                className="flex h-[50px] cursor-pointer items-center justify-between px-[20px]"
                onClick={() => toggleCategory(category.name)}
              >
                <p>{category.name}</p>
                {openCategories[category.name] ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openCategories[category.name] ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {category.items.map((item, idx) => (
                  <p
                    className="cursor-pointer pl-[50px]"
                    onClick={() => handleItemClick(item)}
                    key={idx}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="p-4">No categories found.</p>
      )}
    </div>
  );
}
