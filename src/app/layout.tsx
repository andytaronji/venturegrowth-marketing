import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import EnhancedFooter from "@/components/EnhancedFooter";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { GSAPProvider } from "@/components/GSAPProvider";

// Montserrat fonts are imported in globals.css via @fontsource
// Roboto removed to reduce bundle size - using system fonts as fallback

export const metadata: Metadata = {
  title: "Digital Mosaic Studios - US Marketing & Web Design",
  description: "Professional web design & marketing consulting in Marietta, GA. Custom websites, SaaS tools & digital marketing for Atlanta area businesses. Free consultation!",
  keywords: "marketing consulting, business strategy consulting, web design services, website development, digital marketing consulting, custom web design, business growth solutions, marketing strategy, web development services, nationwide marketing consulting",
  icons: {
    icon: [
      { url: 'https://res.cloudinary.com/di4phdven/image/upload/w_16,h_16,c_fill,r_max,f_png/v1752194892/u9524928111_A_crisp_white_circle_intersected_by_layered_geome_350a4477-3775-4097-b658-86a65017fdc3_3_vheyy9.png', sizes: '16x16', type: 'image/png' },
      { url: 'https://res.cloudinary.com/di4phdven/image/upload/w_32,h_32,c_fill,r_max,f_png/v1752194892/u9524928111_A_crisp_white_circle_intersected_by_layered_geome_350a4477-3775-4097-b658-86a65017fdc3_3_vheyy9.png', sizes: '32x32', type: 'image/png' },
      { url: 'https://res.cloudinary.com/di4phdven/image/upload/w_32,h_32,c_fill,r_max,f_ico/v1752194892/u9524928111_A_crisp_white_circle_intersected_by_layered_geome_350a4477-3775-4097-b658-86a65017fdc3_3_vheyy9.png', sizes: 'any' }
    ],
    apple: 'https://res.cloudinary.com/di4phdven/image/upload/w_180,h_180,c_fill,r_max,f_png/v1752194892/u9524928111_A_crisp_white_circle_intersected_by_layered_geome_350a4477-3775-4097-b658-86a65017fdc3_3_vheyy9.png',
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
        url: 'https://res.cloudinary.com/di4phdven/image/upload/c_fill,w_1200,h_630/f_auto/q_auto:best/v1/nice_vnyvxy',
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
    images: ['https://res.cloudinary.com/di4phdven/image/upload/c_fill,w_1200,h_630/f_auto/q_auto:best/v1/nice_vnyvxy'],
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
        {/* Google tag (gtag.js) - Combined Analytics & Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8ZZWWGRYWN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-combined" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Google Analytics
            gtag('config', 'G-8ZZWWGRYWN');
            
            // Google Ads
            gtag('config', 'AW-17079402860');
          `}
        </Script>
        
        {/* Google Ads Conversion Tracking */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtagReportConversion() {
              gtag('event', 'conversion', {
                'send_to': 'AW-17079402860/QG_OCM67oeQaEOyCjNA_'
              });
            }
            window.gtagReportConversion = gtagReportConversion;
          `}
        </Script>
        
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
