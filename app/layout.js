import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";
import RickSVG from "./ui/icons/RickSVG";

import { Provider } from "../components/ui/provider";
import Header from "./ui/Layout/Header";
import TypeFilter from "./ui/filter/TypeFilter";
import Footer from "./ui/Footer/Footer";



const manrope = Manrope({subsets: ["latin"]});  

export const metadata = {
  title: "Rick and Morty Wiki",
  description: "A wiki for the Rick and Morty TV show",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} bg-[#353b48]`}>
        <Header/>
        <div className="relative flex justify-center items-center w-full bg-gradient-to-r from-[#8c7ae6] to-[#353b48]">
          <RickSVG width="378" height="376" />
          <div className="absolute inset-0 flex justify-center items-center p-4">
            <h2 className="text-[40px] sm:text-[50px] md:text-[61.6px] lg:text-[90.4px] font-extrabold text-[#fff] text-center">
              The Rick and Morty <span className="text-[#8c7ae6]">Wiki</span>
            </h2>
          </div>
        </div>
        <TypeFilter/>

        <Provider>{children}</Provider>
    <Footer/>
      </body>
    </html>
  );
}
