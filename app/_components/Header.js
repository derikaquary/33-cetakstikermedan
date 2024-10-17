"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "@/public/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFullyVisible, setIsFullyVisible] = useState(false);

  // Toggle menu when hamburger icon is clicked
  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true); // Set menu open first
      setTimeout(() => setIsFullyVisible(true), 10); // Start animation
    } else {
      setIsFullyVisible(false); // Hide content
      setTimeout(() => setIsMenuOpen(false), 300); // Delay closing after transition
    }
  };

  // Hide menu when clicking outside of the menu
  const handleClickOutside = (e) => {
    if (!e.target.closest(".menu") && !e.target.closest(".hamburger")) {
      setIsFullyVisible(false); // Hide content
      setTimeout(() => setIsMenuOpen(false), 300); // Delay closing after transition
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-[1000] flex w-full max-w-7xl flex-col bg-orange-500">
      {/* Social Media Icons */}
      <div className="flex items-center justify-center gap-3 border-b-[1px] py-2">
        <FaInstagram color="white" size={20} />
        <FaTiktok color="white" size={20} />
        <FaYoutube color="white" size={20} />
        <FaFacebook color="white" size={20} />
      </div>

      {/* Logo and Hamburger Menu */}
      <div className="flex items-center justify-between px-3 py-2">
        <div className="relative h-[40px] w-[40px]">
          <Image src={logo} alt="company logo" fill className="object-fit" />
        </div>
        <RxHamburgerMenu
          size={30}
          color="white"
          onClick={toggleMenu}
          className="hamburger cursor-pointer"
        />
      </div>

      {/* Dropdown Menu with Curtain Drop Effect */}
      <div
        className={`absolute left-0 right-0 top-[93px] overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[200px]" : "max-h-0"
        } ${isFullyVisible ? "opacity-100" : "opacity-0"}`}
        style={{
          transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
        }}
      >
        <div className="menu flex flex-col gap-3 bg-black/50 px-3 py-2 text-white">
          <div>Home</div>
          <div>Category</div>
          <div>Branch</div>
          <div>Photobook</div>
          <div>Article</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
