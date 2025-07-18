'use client';

import { useEffect, useRef } from 'react';
import Script from "next/script";
import EnhancedContactHero from "@/components/EnhancedContactHero";
import EnhancedContactSection from "@/components/EnhancedContactSection";
import EnhancedMapSection from "@/components/EnhancedMapSection";
import ContactPageSchema from "@/components/ContactPageSchema";
import { useGSAPAnimation } from "@/components/GSAPProvider";

export default function ContactPage() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { gsap } = useGSAPAnimation();

  // Removed gradient animation to eliminate moving line effect

  return (
    <>
      {/* Google Conversion Tracking Script */}
      <Script id="google-conversion-tracking" strategy="afterInteractive">
        {`
          // Helper function to trigger conversion tracking
          function gtagReportConversion() {
            gtag('event', 'ads_conversion_Contact_Us_1', {
              // Additional event parameters can be added here if needed
            });
          }
          
          // Make function available globally for the contact form
          window.gtagReportConversion = gtagReportConversion;
        `}
      </Script>
      
      <ContactPageSchema />
      
      {/* Sophisticated dark background container */}
      <div className="relative min-h-screen overflow-hidden bg-dark-solid">
        {/* Elegant decorative elements for premium feel */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-20 left-20 w-16 h-16 bg-white opacity-3 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-accent opacity-8 rounded-full blur-2xl" />
          <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-white opacity-4 rounded-full blur-lg" />
          <div className="absolute bottom-1/2 left-1/3 w-20 h-20 bg-light-accent opacity-6 rounded-full blur-xl" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <EnhancedContactHero />
          <EnhancedContactSection />
          <EnhancedMapSection />
        </div>
      </div>
    </>
  );
}
