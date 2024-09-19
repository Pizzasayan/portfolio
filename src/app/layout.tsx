import type { Metadata } from "next";
import {Inter, Calistoga} from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const caligosta = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Portfolio de Safari Farda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={twMerge(
          inter.variable,
          caligosta.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
