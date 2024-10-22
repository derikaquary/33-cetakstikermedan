import { FaCheck } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

export default function Service() {
  return (
    <div>
      {/* Big Screen */}
      <div className="hidden w-full items-center justify-between bg-orange-400 px-[150px] text-white shadow-lg shadow-orange-300 max-w-6xl sm:flex rounded-2xl mx-auto">
        <div className="flex flex-col items-center p-3">
          <FaCheck size={40} color="black" />
          <p className="w-[70px] text-center text-sm">
            Premium Quality Product
          </p>
        </div>
        <div className="flex flex-col items-center p-3">
          <FaTruck size={40} color="black" />
          <p className="w-[70px] text-center">Express Shipping</p>
        </div>
        <div className="flex flex-col items-center p-3">
          <FaThumbsUp size={40} color="black" />
          <p className="w-[70px] text-center">Excellent Services</p>
        </div>
        <div className="flex flex-col items-center p-3">
          <BiSupport size={40} color="black" />
          <p className="w-[70px] text-center">24&#47;7 Support</p>
        </div>
      </div>

      {/* Small Screen */}
      <div className="grid w-full grid-cols-2 text-white bg-orange-400 shadow-lg rounded-2xl shadow-orange-300 sm:hidden">
        <div className="flex flex-col items-center p-3">
          <FaCheck size={30} color="black" />
          <p className="w-[70px] text-center text-sm">
            Premium Quality Product
          </p>
        </div>
        <div className="flex flex-col items-center p-3">
          <FaTruck size={30} color="black" />
          <p className="w-[70px] text-center text-sm">Express Shipping</p>
        </div>
        <div className="flex flex-col items-center p-3">
          <FaThumbsUp size={30} color="black" />
          <p className="w-[70px] text-center text-sm">Excellent Services</p>
        </div>
        <div className="flex flex-col items-center p-3">
          <BiSupport size={30} color="black" />
          <p className="w-[70px] text-center text-sm">24&#47;7 Support</p>
        </div>
      </div>
    </div>
  );
}
