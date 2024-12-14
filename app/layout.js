import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

import { Provider } from "../components/ui/provider";
import Header from "./ui/Layout/Header";



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
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
