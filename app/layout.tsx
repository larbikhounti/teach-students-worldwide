import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import NavBar from "./ui/header/navbar/navbar";

const roboto = Roboto({ weight: "500", subsets :["cyrillic"] });

export const metadata: Metadata = {
  title: "tach student worldwide",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <NavBar/>
        {children}
        </body>
    </html>
  );
}
