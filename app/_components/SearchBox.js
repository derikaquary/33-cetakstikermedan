import { FaSearch } from "react-icons/fa";

function SearchBox() {
  return (
    <div className="relative mx-auto mt-4 w-full max-w-md">
      <input
        type="text"
        className="w-full rounded-full border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
      />
      <FaSearch
        className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-gray-500"
        size={20}
      />
    </div>
  );
}

export default SearchBox;
