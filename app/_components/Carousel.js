"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image"; // Import the Image component

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const slides = [
    { id: 1, src: "/image1.jpeg", alt: "Slide 1" },
    { id: 2, src: "/image2.jpeg", alt: "Slide 2" },
    { id: 3, src: "/image3.jpeg", alt: "Slide 3" },
    { id: 4, src: "/image4.jpeg", alt: "Slide 4" },
  ];

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right"); // New slide comes from the right
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);
    return () => clearInterval(interval); // Clean up on unmount
  }, [currentIndex, slides.length]);

  // Handle manual navigation (left and right buttons)
  const goToNextSlide = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToPrevSlide = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Slide Container */}
      <div className="relative h-[200px] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 h-full w-full transition-all duration-700 ease-in-out ${
              index === currentIndex
                ? direction === "right"
                  ? "left-0"
                  : "left-0"
                : direction === "right"
                  ? "left-full"
                  : "-left-full"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div
        className="absolute left-2 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-gray-200 bg-opacity-50 p-2"
        onClick={goToPrevSlide}
      >
        <FaArrowLeft size={20} />
      </div>

      {/* Right Arrow */}
      <div
        className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-gray-200 bg-opacity-50 p-2"
        onClick={goToNextSlide}
      >
        <FaArrowRight size={20} />
      </div>

      {/* Bullets */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full bg-gray-300 ${
              index === currentIndex ? "bg-gray-900" : ""
            } cursor-pointer`}
            onClick={() => {
              setDirection(index > currentIndex ? "right" : "left");
              setCurrentIndex(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
