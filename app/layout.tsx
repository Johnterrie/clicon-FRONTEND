import NavigationBar from "@/components/navigation";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home",
  description: "Chat App with NextJS and NestJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className="border border-black w-screen">
        <NavigationBar/>
        {children}
      </body>
    </html>
  );
}
