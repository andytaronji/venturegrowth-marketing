'use client';

import Script from "next/script";
import EnhancedServicesHero from "@/components/EnhancedServicesHero";
import DiscoveryAndAuditSection from "@/components/DiscoveryAndAuditSection";
import CustomerJourneyMappingSection from "@/components/CustomerJourneyMappingSection";
import DigitalChannelStrategySection from "@/components/DigitalChannelStrategySection";
import TechnologyStackPlanningSection from "@/components/TechnologyStackPlanningSection";
import MeasurementOptimizationFrameworkSection from "@/components/MeasurementOptimizationFrameworkSection";
import ComprehensiveDigitalStrategySection from "@/components/ComprehensiveDigitalStrategySection";
import EnhancedCTASection from "@/components/EnhancedCTASection";
import ServicesSchema from "@/components/ServicesSchema";
export default function ServicesPage() {
  // Removed gradient animation to eliminate moving line effect

  return (
    <>
      <Script src="/dms-animations.js" strategy="lazyOnload" />
      <ServicesSchema />
      
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
          <EnhancedServicesHero />
          
          <DiscoveryAndAuditSection />
          <CustomerJourneyMappingSection />
          <DigitalChannelStrategySection />
          <TechnologyStackPlanningSection />
          <MeasurementOptimizationFrameworkSection />
          <ComprehensiveDigitalStrategySection />
          
          <EnhancedCTASection
            title="Ready to Work With Us?"
            description="Serving Marietta, Atlanta, and all of Georgia. Book your free consultation now to discuss how our services can help your business grow."
            buttons={[
              { text: "Get Started", href: "/contact", variant: "primary" },
              { text: "About Us", href: "/about", variant: "secondary" }
            ]}
          />
        </div>
      </div>
    </>
  );
}
