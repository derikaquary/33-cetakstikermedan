"use client";

import { useState, useEffect } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaCodeBranch } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";

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
    <div>
      {/* Big Screen */}
      <div className="flex justify-center w-full bg-orange-500">
        <div className="relative z-[1000] hidden w-full max-w-4xl flex-col bg-orange-500 sm:flex">
          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-9 border-b-[1px] py-2">
            <Link
              href="https://www.instagram.com/cetakstikermedan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram color="white" size={30} />
            </Link>

            <Link
              href="https://www.facebook.com/cetakstikermedan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook color="white" size={30} />
            </Link>
          </div>
          {/* Logo and Hamburger Menu */}
          <div className="flex items-center justify-between px-2 py-2">
            <div className="relative h-[50px] w-[50px]">
              <Image
                src={logo}
                alt="company logo"
                fill
                className="object-fit"
              />
            </div>
            <div className="flex gap-6 py-2 text-white">
              <Link href="/" className="flex gap-1">
                <FaHome />
                <p className="text-sm">Home</p>
              </Link>
              <div className="flex gap-1">
                <BiCategory />
                <p className="text-sm">Category</p>
              </div>
              <div className="flex gap-1">
                <FaCodeBranch />
                <p className="text-sm">Branch</p>
              </div>
              <div className="flex gap-1">
                <FaPhotoVideo /> <p className="text-sm">Photobook</p>
              </div>
              <div className="flex gap-1">
                <MdOutlineArticle />
                <p className="text-sm">Article</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Small Screen */}
      <div className="relative z-[1000] flex w-full max-w-7xl flex-col bg-orange-500 sm:hidden">
        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-9 border-b-[1px] py-2">
          <Link
            href="https://www.instagram.com/cetakstikermedan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram color="white" size={20} />
          </Link>

          <Link
            href="https://www.facebook.com/cetakstikermedan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook color="white" size={20} />
          </Link>
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
            className="cursor-pointer hamburger"
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
          <div className="flex flex-col gap-3 px-3 py-2 text-white menu bg-black/50">
            <Link href="/" className="flex items-center gap-3">
              <FaHome />
              <p>Home</p>
            </Link>
            <div className="flex gap-3 first:items-center">
              <BiCategory />
              <p>Category</p>
            </div>
            <div className="flex gap-3 first:items-center">
              <FaCodeBranch />
              <p>Branch</p>
            </div>
            <div className="flex gap-3 first:items-center">
              <FaPhotoVideo /> <p>Photobook</p>
            </div>
            <div className="flex gap-3 first:items-center">
              <MdOutlineArticle />
              <p>Article</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
