'use client';

import { useEffect, useRef } from 'react';
import Link from "next/link";
import CldImageWrapper from "@/components/CldImageWrapper";
import EnhancedServicesHero from "@/components/EnhancedServicesHero";
import ConsultationsSection from "@/components/ConsultationsSection";
import AuditsSection from "@/components/AuditsSection";
import CustomSaasToolsSection from "@/components/CustomSaasToolsSection";
import WebDesignSection from "@/components/WebDesignSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import AiPromptingLessonsSection from "@/components/AiPromptingLessonsSection";
import EnhancedCTASection from "@/components/EnhancedCTASection";
import ServicesSchema from "@/components/ServicesSchema";
import { useGSAPAnimation } from "@/components/GSAPProvider";
import { Metadata } from "next";

// Metadata needs to be in a separate file or handled differently with client components
// This is just for reference and won't be used in the client component
const pageMetadata = {
  title: "Services | Digital Mosaic Studios",
  description: "Explore our comprehensive range of web design, development, maintenance, social media management, and content creation services.",
};

export default function ServicesPage() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { gsap } = useGSAPAnimation();

  // Removed gradient animation to eliminate moving line effect

  return (
    <>
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
          
          <ConsultationsSection />
          <AuditsSection />
          <CustomSaasToolsSection />
          <WebDesignSection />
          <AnalyticsSection />
          <AiPromptingLessonsSection />
          
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
