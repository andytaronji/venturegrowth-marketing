'use client';

import { useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import EnhancedHero from "@/components/EnhancedHero";
import EnhancedServicesSection from "@/components/EnhancedServicesSection";
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
          <EnhancedHero />
          <EnhancedServicesSection />
          <EnhancedAboutSection />
          <EnhancedCTASection />
        </div>
      </div>
    </>
  );
}
