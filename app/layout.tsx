import NavigationBar from "@/components/navigation";

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
      <body className="border border-black w-screen font-sans">
        <NavigationBar/>
        {children}
      </body>
    </html>
  );
}
