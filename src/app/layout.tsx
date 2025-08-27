import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Libre_Baskerville } from "next/font/google";
import CustomLayout from "@/components/layouts/custom-layout";
import SmoothScrollWrapper from "@/components/layouts/smooth-scroll/Smooth-Scroll";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"]
});

export const libre = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "italic"
})


const metadata: Metadata = {
  title: "E-Commerce | An advance E-Commerece Platform",
  description: "E-Commerce, an advance E-Commerece platform that fulfill your store needs and best user experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}
        ${poppins.className}
        ${poppins.style}
        scroll-smooth antialiased`}
      >
        <div id="portal-root" />
        <SmoothScrollWrapper>
          <CustomLayout>
            {children}
          </CustomLayout>
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
