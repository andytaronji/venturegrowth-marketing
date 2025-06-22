import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import EnhancedFooter from "@/components/EnhancedFooter";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { GSAPProvider } from "@/components/GSAPProvider";

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
  title: "Digital Mosaic Studios - US Marketing & Web Design",
  description: "Expert marketing consulting and professional web design services across the United States. Strategic business growth solutions and custom websites for high-value businesses nationwide.",
  keywords: "marketing consulting, business strategy consulting, web design services, website development, digital marketing consulting, custom web design, business growth solutions, marketing strategy, web development services, nationwide marketing consulting",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.digitalmosaicsstudios.com/',
    title: 'Digital Mosaic Studios - US Marketing & Web Design',
    description: 'Expert marketing consulting and professional web design services across the United States. Strategic business growth solutions and custom websites for high-value businesses nationwide.',
    siteName: 'Digital Mosaic Studios',
    images: [
      {
        url: 'https://res.cloudinary.com/demo/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/samples/landscapes/landscape-panorama',
        width: 1200,
        height: 630,
        alt: 'Digital Mosaic Studios - Marketing Consulting & Web Design Across the United States',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Mosaic Studios - US Marketing & Web Design',
    description: 'Expert marketing consulting and professional web design services across the United States. Strategic business growth solutions nationwide.',
    images: ['https://res.cloudinary.com/demo/image/upload/w_1200,h_630,c_fill,q_auto,f_auto/samples/landscapes/landscape-panorama'],
  },
  alternates: {
    canonical: 'https://www.digitalmosaicsstudios.com',
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
        <GSAPProvider>
          <LocalBusinessSchema />
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <EnhancedFooter />
        </GSAPProvider>
      </body>
    </html>
  );
}
