import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

// Import the font CSS
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Mosaic Studios | Professional Web Design & Digital Marketing in Marietta, GA",
  description: "Digital Mosaic Studios offers professional website design, development, maintenance, social media management, and content creation services in Marietta, GA and surrounding areas.",
  keywords: "web design Marietta GA, web development Marietta, website maintenance Georgia, social media management Atlanta, content creation Marietta, digital marketing Georgia, Marietta web designer, Atlanta web development, Roswell website services, Alpharetta digital marketing",
  icons: {
    icon: '/digital-mosaics-logo.svg',
    apple: '/digital-mosaics-logo.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitalmosaicsstudios.com/',
    title: 'Digital Mosaic Studios | Web Design & Digital Marketing in Marietta, GA',
    description: 'Professional website design, development, and digital marketing services in Marietta, GA and surrounding areas. Serving local businesses in Atlanta, Roswell, Alpharetta, and Woodstock.',
    siteName: 'Digital Mosaic Studios',
    images: [
      {
        url: 'https://res.cloudinary.com/demo/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/samples/landscapes/landscape-panorama',
        width: 1200,
        height: 630,
        alt: 'Digital Mosaic Studios - Web Design & Digital Marketing in Marietta, GA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Mosaic Studios | Web Design & Digital Marketing in Marietta, GA',
    description: 'Professional website design, development, and digital marketing services in Marietta, GA and surrounding areas.',
    images: ['https://res.cloudinary.com/demo/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/samples/landscapes/landscape-panorama'],
  },
  alternates: {
    canonical: 'https://www.digitalmosaicstudios.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token', // Replace with actual Google verification token when available
  },
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
        <LocalBusinessSchema />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
