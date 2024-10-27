"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import TestSupabaseConnection from "../_components/TestSupabaseConnection";

export default function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setIsAuthenticated(true);
      } else {
        router.push("/login"); // Redirect to login page if not authenticated
      }
    };

    checkUser();
  }, []);

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Uploading...");

    try {
      // 1. Upload the image
      let imageUrl = "";
      if (image) {
        const { data, error } = await supabase.storage
          .from("product-images")
          .upload(`public/${image.name}`, image);

        if (error) throw error;
        imageUrl = data.path;
      }

      // 2. Insert the product data
      const { error } = await supabase
        .from("products")
        .insert([{ name, price, image_url: imageUrl }]);

      if (error) throw error;
      setStatus("Product added successfully!");
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
    } else {
      setIsAuthenticated(false);
      router.push("/login"); // Redirect to login page after logout
    }
  };

  if (!isAuthenticated) return <p>Loading...</p>; // Show loading while checking auth

  return (
    <div className="container">
      <TestSupabaseConnection />
      <h1>Admin Interface - Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            className="bg-green-400"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Price:
          <input
            className="bg-red-400"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label>
          Upload Image:
          <input
            className="bg-blue-400"
            type="file"
            onChange={handleImageUpload}
          />
        </label>
        <button className="border-2 border-black" type="submit">
          Add Product
        </button>
      </form>
      <button onClick={handleLogout} className="border-2 border-black">
        Logout
      </button>
      <p>{status}</p>
    </div>
  );
}
