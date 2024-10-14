
import "./_style/globals.css";


export const metadata = {
  title: "Cetak Stiker Medan",
  description: "Stiker Medan Terbaik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
