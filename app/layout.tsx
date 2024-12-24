import type { Metadata } from "next";

import { Geist } from "next/font/google";
import Image from "next/image";

import "./globals.css";

const font = Geist({
  variable: "--font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Near Buddy",
  description: "Near Blockchain Buddy",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`flex flex-col bg-violet-950 relative h-lvh ${font.className} antialiased`}
      >
        {children}
        <div className="fixed inset-0 h-lvh -z-10 opacity-25">
          <Image
            className="ellipse ellipse-left"
            src="/ellipse-left.webp"
            alt="EL"
            width={1475}
            height={1114}
            priority
          />
          <Image
            className="ellipse ellipse-right"
            src="/ellipse-right.webp"
            alt="ER"
            width={1475}
            height={1114}
          />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
