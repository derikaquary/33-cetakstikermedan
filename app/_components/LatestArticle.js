"use client";

import ReactMarkdown from "react-markdown";
import { useRef, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase"; // Ensure this path is correct
import ArticleItem from "./ArticleItem";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function LatestArticle() {
  const scrollRef = useRef(null); // Reference to the scrollable container
  const [isDragging, setIsDragging] = useState(false); // State to track if dragging
  const [startX, setStartX] = useState(0); // Initial x position when dragging starts
  const [scrollLeft, setScrollLeft] = useState(0); // Initial scroll position when dragging starts
  const [articles, setArticles] = useState([]); // State to store articles from Supabase
  const [selectedArticle, setSelectedArticle] = useState(null); // State to store clicked article's title and text

  // Fetch articles from Supabase
  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("article")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching articles:", error);
      } else {
        setArticles(data);
      }
    };

    fetchArticles();
  }, []);

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

  // Handle clicking on an article item
  const handleArticleClick = (article) => {
    setSelectedArticle(article); // Set the clicked article as selected
  };

  return (
    <>
      {/* Big Screen */}
      <div
        className={`${poppins.className} hidden w-full justify-center bg-gray-200 px-4 py-10 sm:flex`}
      >
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
            ref={scrollRef}
            className={`flex gap-3 overflow-x-auto cursor-${isDragging ? "grabbing" : "grab"}`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {articles.map((item) => (
              <div
                key={item.id}
                className="w-[300px] flex-shrink-0"
                onClick={() => handleArticleClick(item)}
              >
                <ArticleItem item={item} />
              </div>
            ))}
          </div>
          <div className="p-4 text-black">
            {selectedArticle ? (
              <>
                <h2 className="mb-2 text-lg font-semibold">
                  {selectedArticle.title}
                </h2>
                <ReactMarkdown>{selectedArticle.text}</ReactMarkdown>
              </>
            ) : (
              <p>Select an article to view details here.</p>
            )}
          </div>
        </div>
      </div>

      {/* Small Screen */}
      <div
        className={`${poppins.className} flex w-full justify-center bg-gray-200 px-4 py-10 sm:hidden`}
      >
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
            ref={scrollRef}
            className={`flex gap-3 overflow-x-auto cursor-${isDragging ? "grabbing" : "grab"}`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {articles.map((item) => (
              <div
                key={item.id}
                className="w-[300px] flex-shrink-0"
                onClick={() => handleArticleClick(item)}
              >
                <ArticleItem item={item} />
              </div>
            ))}
          </div>
          <div className="p-4 text-black">
            {selectedArticle ? (
              <>
                <h2 className="mb-2 text-lg font-semibold">
                  {selectedArticle.title}
                </h2>
                <ReactMarkdown>{selectedArticle.text}</ReactMarkdown>
              </>
            ) : (
              <p>Select an article to view details here.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
