import { FaCheck } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

export default function Service() {
  return (
    <div className="grid grid-cols-2 text-white bg-orange-400 rounded-2xl shadow-lg shadow-orange-300">
      <div className="flex flex-col items-center p-3">
        <FaCheck size={30} color="black" />
        <p className="w-[70px] text-center text-sm">Premium Quality Product</p>
      </div>
      <div className="flex flex-col items-center p-3">
        <FaTruck size={30} color="black" />
        <p className="w-[70px] text-center">Express Shipping</p>
      </div>
      <div className="flex flex-col items-center p-3">
        <FaThumbsUp size={30} color="black" />
        <p className="w-[70px] text-center">Express Shipping</p>
      </div>
      <div className="flex flex-col items-center p-3">
        <BiSupport size={30} color="black" />
        <p className="w-[70px] text-center">Express Shipping</p>
      </div>
    </div>
  );
}
