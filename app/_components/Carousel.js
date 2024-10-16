"use client"

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { id: 1, color: "bg-green-400", text: "image 1" },
    { id: 2, color: "bg-purple-400", text: "image 2" },
    { id: 3, color: "bg-red-400", text: "image 3" },
    { id: 4, color: "bg-blue-400", text: "image 4" },
  ];

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval); // Clean up on unmount
  }, [currentIndex, slides.length]);

  // Handle manual navigation (left and right buttons)
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Slide Container */}
      <div className="relative overflow-hidden h-[200px] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 w-full h-full transition-all duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 left-0" : "opacity-0 left-full"
            } flex items-center justify-center ${slide.color}`}
          >
            {slide.text}
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div
        className="absolute left-2 top-1/2 p-2 bg-gray-200 bg-opacity-50 rounded-full transform -translate-y-1/2 cursor-pointer"
        onClick={goToPrevSlide}
      >
        <FaArrowLeft size={20} />
      </div>

      {/* Right Arrow */}
      <div
        className="absolute right-2 top-1/2 p-2 bg-gray-200 bg-opacity-50 rounded-full transform -translate-y-1/2 cursor-pointer"
        onClick={goToNextSlide}
      >
        <FaArrowRight size={20} />
      </div>

      {/* Bullets */}
      <div className="flex absolute right-0 left-0 bottom-2 justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full bg-gray-300 ${
              index === currentIndex ? "bg-gray-900" : ""
            } cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
