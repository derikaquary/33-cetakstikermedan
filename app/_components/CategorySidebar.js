"use client";

import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { supabase } from "@/lib/supabase";



export default function CategorySidebar({ handleItemClick }) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleCategory = () => setIsCategoryOpen((prev) => !prev);

  // Fetch unique categories from Supabase
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase
          .from("products") // Replace with your actual table name
          .select("category") // Adjusted to match your column name
          .neq("category", null);

        if (error) throw error;

        // Extract unique category names
        const uniqueCategories = Array.from(new Set(data.map((item) => item.category)));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="mt-4 flex h-full w-[300px] flex-col">
      <div
        className="flex h-[70px] cursor-pointer items-center justify-between bg-orange-500 px-[20px]"
        onClick={toggleCategory}
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
          {loading ? (
            <p>Loading...</p>
          ) : categories.length > 0 ? (
            categories.map((category, idx) => (
              <div
                className="flex h-[50px] cursor-pointer items-center justify-between px-[20px]"
                key={idx}
              >
                <p onClick={() => handleItemClick(category)}>{category}</p>
              </div>
            ))
          ) : (
            <p>No categories found</p>
          )}
        </div>
      </div>
    </div>
  );
}
