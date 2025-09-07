'use client';

import { useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import EnhancedHero from "@/components/EnhancedHero";
import EnhancedServicesSection from "@/components/EnhancedServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import PopInCTASection from "@/components/PopInCTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ReadyToJoinCTASection from "@/components/ReadyToJoinCTASection";
import EnhancedAboutSection from "@/components/EnhancedAboutSection";
import EnhancedCTASection from "@/components/EnhancedCTASection";
import CldImageWrapper from "@/components/CldImageWrapper";
import OrganizationSchema from "@/components/OrganizationSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import ReviewSchema from "@/components/ReviewSchema";
import { useGSAPAnimation } from "@/components/GSAPProvider";

export default function Home() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { gsap } = useGSAPAnimation();

  // Removed gradient animation to eliminate moving line effect

  return (
    <>
      <OrganizationSchema />
      <LocalBusinessSchema />
      <FAQSchema />
      <ReviewSchema />
      
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
          <EnhancedHero />
          <EnhancedServicesSection />
          <WhyChooseUsSection />
          <PopInCTASection />
          <TestimonialsSection />
          <ReadyToJoinCTASection />
          <EnhancedAboutSection />
          <EnhancedCTASection 
            title="Ready to Work With Us?"
          />
        </div>
      </div>
    </>
  );
}
