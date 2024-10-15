import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "@/public/logo.png";

function Header() {
  return (
    <div className="fixed z-[1000] flex w-full max-w-7xl flex-col bg-orange-400">
      <div className="flex items-center justify-center gap-3 border-b-[1px] py-2">
        <FaInstagram color="white" size={20} />
        <FaTiktok color="white" size={20} />
        <FaYoutube color="white" size={20} />
        <FaFacebook color="white" size={20} />
      </div>
      <div className="flex items-center justify-between px-3 py-2">
        <div className="relative h-[40px] w-[40px]">
          <Image src={logo} alt="company logo" fill className="object-fit" />
        </div>
        <RxHamburgerMenu size={30} color="white" />
      </div>
    </div>
  );
}

export default Header;
