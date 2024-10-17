"use client";

import { FaSearch } from "react-icons/fa";

function SearchBox({ searchQuery, setSearchQuery }) {
  return (
    <div className="relative mx-auto mt-5 w-full max-w-md">
      <input
        type="text"
        value={searchQuery || ""} // Ensure it doesn't break if searchQuery is undefined
        onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)} // Safely calling setSearchQuery
        className="px-4 py-2 pr-10 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search products..."
      />
      <FaSearch
        className="absolute right-3 top-1/2 text-gray-500 transform -translate-y-1/2 cursor-pointer"
        size={20}
      />
    </div>
  );
}

export default SearchBox;
