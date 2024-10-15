import "./_style/globals.css";
import Header from "@/app/_components/Header";

export const metadata = {
  title: "Cetak Stiker Medan",
  description: "Stiker Medan Terbaik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
