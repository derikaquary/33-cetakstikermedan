import { useRef, useState } from "react";
import { article } from "../_data/article";
import ArticleItem from "./ArticleItem";

export default function LatestArticle() {
  const scrollRef = useRef(null); // Reference to the scrollable container
  const [isDragging, setIsDragging] = useState(false); // State to track if dragging
  const [startX, setStartX] = useState(0); // Initial x position when dragging starts
  const [scrollLeft, setScrollLeft] = useState(0); // Initial scroll position when dragging starts

  // Handle mouse down (start dragging)
  const handleMouseDown = (e) => {
    const scrollContainer = scrollRef.current;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainer.offsetLeft); // Track starting point
    setScrollLeft(scrollContainer.scrollLeft); // Record initial scroll position
  };

  // Handle mouse up (stop dragging)
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle mouse movement (dragging)
  const handleMouseMove = (e) => {
    if (!isDragging) return; // Only perform if dragging
    const scrollContainer = scrollRef.current;
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Scroll amount (adjust the multiplier for sensitivity)
    scrollContainer.scrollLeft = scrollLeft - walk; // Update the scroll position
  };

  return (
    <>
      {/* Big Screen */}
      <div className="hidden w-full justify-center bg-gray-200 px-4 py-10 sm:flex">
        <div className="flex w-full flex-col gap-4 sm:max-w-4xl">
          <div className="hidden items-center justify-center gap-8 sm:mx-auto sm:flex sm:w-full">
            <div className="h-[3px] w-full bg-gray-400 sm:w-full"></div>
            <div className="w-[100px] text-center text-xl font-semibold text-orange-500 sm:w-full sm:text-3xl">
              Latest Article
            </div>
            <div className="h-[3px] w-full bg-gray-400 sm:w-full"></div>
          </div>
          {/* Horizontal scrolling container */}
          <div
            ref={scrollRef} // Attach the ref to the scrollable container
            className={`flex gap-3 overflow-x-auto cursor-${isDragging ? "grabbing" : "grab"}`} // Dynamic cursor
            onMouseDown={handleMouseDown} // Start dragging
            onMouseLeave={handleMouseUp} // Stop dragging if the mouse leaves the container
            onMouseUp={handleMouseUp} // Stop dragging on mouse up
            onMouseMove={handleMouseMove} // Handle mouse move
          >
            {article.map((item) => (
              <div key={item.id} className="w-[300px] flex-shrink-0">
                <ArticleItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Small Screen */}
      <div className="flex w-full justify-center bg-gray-200 px-4 py-10 sm:hidden">
        <div className="flex w-full flex-col gap-4 sm:max-w-4xl">
          <div className="flex items-center justify-center gap-8 sm:mx-auto sm:hidden sm:w-full sm:max-w-4xl">
            <div className="h-[3px] w-[40px] bg-gray-400 sm:w-full"></div>
            <div className="w-[100px] text-center text-xl font-semibold text-orange-500 sm:w-full sm:text-3xl">
              Latest Article
            </div>
            <div className="h-[3px] w-[40px] bg-gray-400 sm:w-full"></div>
          </div>
          {/* Horizontal scrolling container */}
          <div
            ref={scrollRef} // Attach the ref to the scrollable container
            className={`flex gap-3 overflow-x-auto cursor-${isDragging ? "grabbing" : "grab"}`} // Dynamic cursor
            onMouseDown={handleMouseDown} // Start dragging
            onMouseLeave={handleMouseUp} // Stop dragging if the mouse leaves the container
            onMouseUp={handleMouseUp} // Stop dragging on mouse up
            onMouseMove={handleMouseMove} // Handle mouse move
          >
            {article.map((item) => (
              <div key={item.id} className="w-[300px] flex-shrink-0">
                <ArticleItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
