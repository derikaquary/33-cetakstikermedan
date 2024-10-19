import Image from "next/image";
import Carousel from "./_components/Carousel";
import Service from "./_components/Service";
import Products from "./_components/Products";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 px-3 mt-4 sm:px-0">
      <Carousel />
      <Service />
      <Products />
    </div>
  );
}
