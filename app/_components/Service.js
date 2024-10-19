import { FaCheck } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

export default function Service() {
  return (
    <div className="grid w-full max-w-5xl grid-cols-2 text-white bg-orange-400 shadow-lg sm:mx-auto rounded-2xl shadow-orange-300 sm:flex sm:items-center sm:justify-between px-[150px]">
      <div className="flex flex-col items-center p-3">
        <FaCheck size={50} color="black" />
        <p className="w-[70px] text-center text-sm">Premium Quality Product</p>
      </div>
      <div className="flex flex-col items-center p-3">
        <FaTruck size={50} color="black" />
        <p className="w-[70px] text-center">Express Shipping</p>
      </div>
      <div className="flex flex-col items-center p-3">
        <FaThumbsUp size={50} color="black" />
        <p className="w-[70px] text-center">Express Shipping</p>
      </div>
      <div className="flex flex-col items-center p-3">
        <BiSupport size={50} color="black" />
        <p className="w-[70px] text-center">Express Shipping</p>
      </div>
    </div>
  );
}
