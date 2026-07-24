import { Header } from "@/Components/Layout/Header";
import { Pacifico, Poppins } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "ABZO",
  description: "My portfolio",
};

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` `}>
      <body
        className={`text-white ${pacifico.variable} ${poppins.variable} font-poppins`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
