import NavigationBar from "@/components/navigation";
import FooterComponent from "@/components/Footer";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clicon: Home",
  description: "a eCommerce MarketPlace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className="w-[99vw]font-sans p-0 m-0">
        {/* <NavigationBar/> */}
        {children}
        {/* <FooterComponent/> */}
      </body>
    </html>
  );
}
