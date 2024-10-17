import { Poppins } from "next/font/google";
import "./_style/globals.css";
import Header from "@/app/_components/Header";
import WhatsApp from "./_components/WhatsApp";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Cetak Stiker Medan",
  description: "Stiker Medan Terbaik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Header />
        {children}
        <WhatsApp />
      </body>
    </html>
  );
}
