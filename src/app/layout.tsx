import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import EnhancedFooter from "@/components/EnhancedFooter";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { GSAPProvider } from "@/components/GSAPProvider";

// Montserrat fonts are imported in globals.css via @fontsource
// Keep Roboto for monospace fallback
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

export const metadata: Metadata = {
  title: "Digital Mosaic Studios - US Marketing & Web Design",
  description: "Professional web design & marketing consulting in Marietta, GA. Custom websites, SaaS tools & digital marketing for Atlanta area businesses. Free consultation!",
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
    url: 'https://www.digitalmosaicstudios.com/',
    title: 'Digital Mosaic Studios - US Marketing & Web Design',
    description: 'Professional web design & marketing consulting in Marietta, GA. Custom websites, SaaS tools & digital marketing for Atlanta area businesses. Free consultation!',
    siteName: 'Digital Mosaic Studios',
    images: [
      {
        url: 'https://res.cloudinary.com/di4phdven/image/upload/c_fill,w_1200,h_630,g_auto/f_auto/q_auto:best/v1/nice_vnyvxy',
        width: 1200,
        height: 630,
        alt: 'Digital Mosaic Studios - Professional Web Design & Marketing Consulting in Marietta, GA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Mosaic Studios - US Marketing & Web Design',
    description: 'Professional web design & marketing consulting in Marietta, GA. Custom websites, SaaS tools & digital marketing for Atlanta area businesses.',
    images: ['https://res.cloudinary.com/di4phdven/image/upload/c_fill,w_1200,h_630,g_auto/f_auto/q_auto:best/v1/nice_vnyvxy'],
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
        className="antialiased min-h-screen flex flex-col font-sans"
      >
        <GSAPProvider>
          <LocalBusinessSchema />
          <BreadcrumbSchema />
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
