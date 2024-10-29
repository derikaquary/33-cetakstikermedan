"use client";

import { useState, useEffect } from "react";
import ProductsItem from "./ProductsItem";
import { supabase } from "@/lib/supabase";

export default function NewProductsDisplay() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("new-products")
          .select("*");

        if (error) throw error;

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid justify-end grid-cols-2 gap-6 mt-4 sm:grid-cols-5 gap-y-10">
      {products.map((item) => (
        <ProductsItem item={item} key={item.id} />
      ))}
    </div>
  );
}
