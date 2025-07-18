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
  title: "Luxury Marketing Solutions for Small Businesses & Startups | Digital Mosaic Studios",
  description: "Premium web design, custom SaaS tools & data-driven marketing for startups, small businesses, and growing companies in Atlanta, Georgia, and nationwide.",
  keywords: "small business marketing Atlanta, startup marketing consulting, small business web design Georgia, startup growth marketing, small business digital marketing, Atlanta startup consulting, premium marketing solutions, custom SaaS tools, data-driven marketing",
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
    title: 'Luxury Marketing Solutions for Small Businesses & Startups | Digital Mosaic Studios',
    description: 'Premium web design, custom SaaS tools & data-driven marketing for startups, small businesses, and growing companies in Atlanta, Georgia, and nationwide.',
    siteName: 'Digital Mosaic Studios',
    images: [
      {
        url: 'https://res.cloudinary.com/di4phdven/image/upload/c_fill,w_1200,h_630/f_auto/q_auto:best/v1/nice_vnyvxy',
        width: 1200,
        height: 630,
        alt: 'Digital Mosaic Studios - Professional Web Design & Marketing Consulting for Small Businesses & Startups',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Marketing Solutions for Small Businesses & Startups | Digital Mosaic Studios',
    description: 'Premium web design, custom SaaS tools & data-driven marketing for startups, small businesses, and growing companies in Atlanta, Georgia, and nationwide.',
    images: ['https://res.cloudinary.com/di4phdven/image/upload/c_fill,w_1200,h_630/f_auto/q_auto:best/v1/nice_vnyvxy'],
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
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/montserrat/montserrat-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/montserrat/montserrat-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//res.cloudinary.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body
        className="antialiased min-h-screen flex flex-col font-sans"
      >
        {/* Deferred Google Analytics - Load after page interaction */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8ZZWWGRYWN"
          strategy="lazyOnload"
        />
        <Script id="google-analytics-combined" strategy="lazyOnload">
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
        
        {/* Google Ads Conversion Tracking - Deferred */}
        <Script id="google-ads-conversion" strategy="lazyOnload">
          {`
            function gtagReportConversion() {
              gtag('event', 'conversion', {
                'send_to': 'AW-17079402860/QG_OCM67oeQaEOyCjNA_'
              });
            }
            window.gtagReportConversion = gtagReportConversion;
          `}
        </Script>
        
        {/* Facebook Pixel - For remarketing and conversion tracking */}
        <Script id="facebook-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            
            // Initialize Facebook Pixel (replace with actual Pixel ID when available)
            // fbq('init', 'YOUR_PIXEL_ID');
            // fbq('track', 'PageView');
            
            // For now, create placeholder function
            window.fbq = window.fbq || function() {
              console.log('Facebook Pixel would track:', arguments);
            };
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
