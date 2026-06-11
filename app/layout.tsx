import type { Metadata } from "next";
import { Raleway, Abril_Fatface } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
});

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-abril",
});

export const metadata: Metadata = {
  title: "Studio UNDO/REDO — A Creative Design Agency",
  description:
    "We hit CTRL+Z on the ordinary and CTRL+SHIFT+Z into a world of groundbreaking ideas. Undo the doubts, redo the results.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${raleway.variable} ${abril.variable}`}>
      <body>
        <LenisProvider>
          <NavBar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
