import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getBrowserColorMode } from "@/hooks/getBrowserColorMode";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grow Your Boat | The best way to grow your boat",
  description: "Grow Your Boat is the best way to grow your boat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const browserColorMode = getBrowserColorMode();
  
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${browserColorMode}-mode antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
