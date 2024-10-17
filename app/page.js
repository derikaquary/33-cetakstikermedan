import Image from "next/image";
import SearchBox from "./_components/SearchBox";
import Carousel from "./_components/Carousel";
import Service from "./_components/Service";
import Products from "./_components/Products";

export default function Home() {
  return (
    <>
      {/* Big Screen */}
      <div className="hidden max-w-7xl"></div>
      {/* Small Screen */}
      <div className="flex flex-col gap-5 px-3 mt-3 sm:hidden">
        <SearchBox />
        <Carousel />
        <Service />
        <Products/>
      </div>
    </>
  );
}
