"use client";

import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export default function UpArrow() {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This adds a smooth scroll effect
    });
  };

  return (
    <div
      className="fixed bottom-[130px] right-3 cursor-pointer rounded-full bg-orange-600 px-2 py-2"
      onClick={scrollToTop} // Add onClick to trigger scroll
    >
      <MdKeyboardDoubleArrowUp size={20} color="white" />
    </div>
  );
}
