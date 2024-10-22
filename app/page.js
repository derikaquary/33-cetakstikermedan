import { Poppins } from "next/font/google";
import Carousel from "./_components/Carousel";
import Service from "./_components/Service";
import Products from "./_components/Products";
import Footer from "./_components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <div className={`flex flex-col gap-8 px-3 mt-4 sm:px-0 ${poppins.className}`}>
      <Carousel />
      <Service />
      <Products />
      <Footer/>

    </div>
  );
}
