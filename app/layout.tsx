import type { Metadata } from "next";
import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";

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
    // <ClerkProvider>

    <html lang="en">
      <body className="">{children}</body>
    </html>
    // </ClerkProvider>
  );
}
