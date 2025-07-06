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
      
      {/* Dark gradient background container */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div 
          ref={backgroundRef}
          className="fixed inset-0 bg-gradient-to-br from-primary via-secondary to-primary z-0"
          style={{
            backgroundSize: '200% 200%',
            backgroundPosition: '0% center'
          }}
        />
        
        {/* Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-accent opacity-10 rounded-full blur-xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-light-accent opacity-5 rounded-full blur-2xl" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-accent opacity-8 rounded-full blur-lg" />
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-light-accent opacity-6 rounded-full blur-xl" />
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
