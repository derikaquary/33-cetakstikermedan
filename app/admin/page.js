// page
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase, supabaseUrl } from "@/lib/supabase";

export default function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
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
      let imageUrl = "";
      if (image) {
        // Upload the image to Supabase storage
        const { data, error } = await supabase.storage
          .from("product-images")
          .upload(`public/${image.name}`, image);
  
        if (error) throw error;
  
        // Construct the full URL to the image with the correct path
        imageUrl = `${supabaseUrl}/storage/v1/object/public/product-images/${data.path}`;
      }
  
      // Insert the product data with `alt` set to `name`
      const { error } = await supabase
        .from("products")
        .insert([{ name, price, category, image_url: imageUrl, alt: name }]);
  
      if (error) throw error;
      setStatus("Product added successfully!");
      setName("");
      setPrice("");
      setCategory("");
      setImage(null);
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
      router.push("/login");
    }
  };

  if (!isAuthenticated) return <p>Loading...</p>;

  return (
    <div className="container">
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
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </label>
        <label>
          Category:
          <input
            className="bg-yellow-400"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </label>
        <label>
          Upload Image:
          <input
            className="bg-blue-400"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            required
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
