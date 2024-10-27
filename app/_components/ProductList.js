"use client";

import { useState, useEffect } from "react";
import ProductsItem from "./ProductsItem";
import SearchBox from "./SearchBox";
import NewProducts from "./NewProducts";
import CategorySidebar from "./CategorySidebar";
import ProductDisplay from "./ProductDisplay";
import NewProductsDisplay from "./NewProductsDisplay";
import About from "./About";
import AboutContent from "./AboutContent";
import LatestArticle from "./LatestArticle";
import { supabase } from "@/lib/supabase"; // Ensure supabase client is correctly imported

export default function ProductList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [products, setProducts] = useState([]); // State for storing products from Supabase
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    // Fetch products from Supabase
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from("products").select("*"); // Fetch all products
        if (error) throw error;
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  console.log(products)

  // Handle item click
  const handleItemClick = (itemName) => {
    const item = products.find((product) => product.name === itemName);
    setSelectedItem(item);
  };

  // Filter products based on the search query
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading products...</p>; // Show loading while fetching data

  return (
    <div>
      {/* Big Screen */}
      <div className="hidden w-full p-4 sm:block">
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="mx-auto flex max-w-4xl justify-between">
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
          {/* New Products Section */}
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
