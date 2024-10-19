"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Carousel() {
  const images = [
    "/image1.jpeg",
    "/image2.jpeg",
    "/image3.jpeg",
    "/image4.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const slideInterval = 3000; // Time in milliseconds between slides

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        return nextIndex;
      });
    }, slideInterval);

    return () => clearInterval(intervalId);
  }, [images, slideInterval]);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      return newIndex;
    });
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % images.length;
      return nextIndex;
    });
  };

  return (
    <>
      {/* Big Screen */}
      <div className="relative hidden h-[200px] w-full max-w-7xl overflow-hidden sm:block">
        <div
          className="relative flex h-full w-full transition-transform duration-500 ease-in-out"
          ref={carouselRef}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="relative h-full w-full flex-shrink-0" key={index}>
              {" "}
              {/* Added flex-shrink-0 and relative */}
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 flex w-full justify-center space-x-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-4 w-4 rounded-full bg-gray-300 ${
                index === currentIndex ? "bg-gray-700" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
        <div className="absolute left-0 top-[60px] p-4">
          <button
            className="rounded-full bg-gray-500/30 p-2 text-white hover:bg-blue-700"
            onClick={handlePrevSlide}
          >
            {"<"}
          </button>
        </div>
        <div className="absolute right-0 top-[60px] p-4">
          <button
            className="rounded-full bg-gray-500/30 p-2 text-white hover:bg-blue-700"
            onClick={handleNextSlide}
          >
            {">"}
          </button>
        </div>
      </div>
      {/* Small Screen */}
      <div className="relative h-[200px] w-full overflow-hidden sm:hidden">
        <div
          className="relative flex h-full w-full transition-transform duration-500 ease-in-out"
          ref={carouselRef}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="relative h-full w-full flex-shrink-0" key={index}>
              {" "}
              {/* Added flex-shrink-0 and relative */}
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="rounded-2xl object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 flex w-full justify-center space-x-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-4 w-4 rounded-full bg-gray-300 ${
                index === currentIndex ? "bg-gray-700" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
        <div className="absolute left-0 top-[60px] p-4">
          <button
            className="rounded-full bg-gray-500/30 p-2 text-white hover:bg-blue-700"
            onClick={handlePrevSlide}
          >
            {"<"}
          </button>
        </div>
        <div className="absolute right-0 top-[60px] p-4">
          <button
            className="rounded-full bg-gray-500/30 p-2 text-white hover:bg-blue-700"
            onClick={handleNextSlide}
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
}
