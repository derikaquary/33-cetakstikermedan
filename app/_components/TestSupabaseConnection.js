"use client"

import { useEffect } from "react";
import {supabase} from "@/lib/supabase"; 


export default function TestSupabaseConnection() {
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase
        .from("products") // Adjust "products" to your actual table name
        .select("*");

      if (error) {
        console.error("Error:", error.message);
      } else {
        console.log("Fetched Data:", data);
      }
    };

    testConnection();
  }, []);

  return <div>Check your console for connection test results.</div>;
}
