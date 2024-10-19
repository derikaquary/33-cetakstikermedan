"use client";

import { FaSearch } from "react-icons/fa";

function SearchBox({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative w-full max-w-md mx-auto mt-5">
      <input
        type="text"
        value={searchQuery || ""} // Ensure it doesn't break if searchQuery is undefined
        onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)} // Safely calling setSearchQuery
        className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search products..."
      />
      <FaSearch
        className="absolute text-gray-500 transform -translate-y-1/2 cursor-pointer right-3 top-1/2"
        size={20}
      />
    </div>
  );
}

export default SearchBox;
