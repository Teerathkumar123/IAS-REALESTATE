import type { Metadata } from "next";
import { Cinzel, Outfit, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-tamil",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "IAS Real Estate & Builders | Premium Land Promotion & Development",
  description:
    "IAS Real Estate & Builders - Premier real estate, land promotion, land development, property buying & selling, and structural builders across Tirupathur District, Tamil Nadu.",
  keywords: [
    "IAS Real Estate",
    "IAS Builders",
    "Land Promotion Tirupathur",
    "Land Development Vaniyambadi",
    "Real Estate Dealer Tirupathur",
    "Property Investment Tamil Nadu",
    "K Mohammed Ibrahim Real Estate",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${outfit.variable} ${notoSansTamil.variable} scroll-smooth`}>
      <body className="bg-[#080C15] text-foreground font-sans antialiased overflow-x-hidden selection:bg-[#00F0FF] selection:text-[#050811]">
        {children}
      </body>
    </html>
  );
}
