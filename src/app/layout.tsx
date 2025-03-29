import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VentureGrowth Marketing | Professional Web Design & Digital Marketing",
  description: "VentureGrowth Marketing offers professional website design, development, maintenance, social media management, and content creation services to help your business grow.",
  keywords: "web design, web development, website maintenance, social media management, content creation, digital marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
