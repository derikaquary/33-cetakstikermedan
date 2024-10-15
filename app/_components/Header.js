"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "@/public/logo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu when hamburger icon is clicked
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Hide menu when clicking outside of the menu
  const handleClickOutside = (e) => {
    if (!e.target.closest(".menu") && !e.target.closest(".hamburger")) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-[1000] flex w-full max-w-7xl flex-col bg-orange-400">
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

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="menu absolute left-0 right-0 top-[93px] flex h-[300px] flex-col bg-black px-3 py-2 text-white">
          <div>Home</div>
          <div>Category</div>
          <div>Branch</div>
          <div>Photobook</div>
          <div>Article</div>
        </div>
      )}
    </div>
  );
}

export default Header;
