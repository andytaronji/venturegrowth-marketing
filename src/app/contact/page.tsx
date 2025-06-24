'use client';

import Script from "next/script";
import EnhancedContactHero from "@/components/EnhancedContactHero";
import EnhancedContactSection from "@/components/EnhancedContactSection";
import EnhancedMapSection from "@/components/EnhancedMapSection";
import ContactPageSchema from "@/components/ContactPageSchema";

export default function ContactPage() {
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
      <EnhancedContactHero />
      <EnhancedContactSection />
      <EnhancedMapSection />
    </>
  );
}
