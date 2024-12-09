"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase"; // Ensure the correct path to your Supabase client

export default function Carousel() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const slideInterval = 3000; // Time in milliseconds between slides

  // Fetch the first four images from Supabase
  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("image_url") // Adjust column name if necessary
        .order("id", { ascending: true }) // Sort by 'id' or another column in ascending order
        .limit(4); // Fetch the first 4 images

      if (error) {
        console.error("Error fetching images:", error);
      } else {
        setImages(data.map((product) => product.image_url));
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      {/* Big Screen */}
      <div className="relative mx-auto hidden h-[300px] w-full max-w-4xl overflow-hidden sm:block">
        <div
          className="relative flex h-full w-full transition-transform duration-500 ease-in-out"
          ref={carouselRef}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              className="relative h-full w-full flex-shrink-0 rounded-2xl"
              key={index}
            >
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
