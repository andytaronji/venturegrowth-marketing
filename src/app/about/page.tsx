'use client';

import { useEffect, useRef } from 'react';
import Link from "next/link";
import CldImageWrapper from "@/components/CldImageWrapper";
import EnhancedAboutHero from "@/components/EnhancedAboutHero";
import EnhancedAboutSection from "@/components/EnhancedAboutSection";
import EnhancedServiceDetailSection from "@/components/EnhancedServiceDetailSection";
import EnhancedWhyChooseUsSection from "@/components/EnhancedWhyChooseUsSection";
import EnhancedCTASection from "@/components/EnhancedCTASection";
import EnhancedMissionValuesSection from "@/components/EnhancedMissionValuesSection";
import AboutPageSchema from "@/components/AboutPageSchema";
import { useGSAPAnimation } from "@/components/GSAPProvider";
import { Metadata } from "next";

// Metadata needs to be in a separate file or handled differently with client components
// This is just for reference and won't be used in the client component
const pageMetadata = {
  title: "About Us | Digital Mosaic Studios",
  description: "Learn about Digital Mosaic Studios, our mission, values, and the team behind our professional web design and digital marketing services.",
};

export default function AboutPage() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { gsap } = useGSAPAnimation();

  // Removed gradient animation to eliminate moving line effect

  return (
    <>
      <AboutPageSchema />
      
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
          <EnhancedAboutHero />
          
          <EnhancedServiceDetailSection
            title="Our Story"
            description="Digital Mosaic Studios was founded with a simple mission: to help businesses establish a powerful online presence that drives real growth and success."
            features={[
              {
                title: "Comprehensive Solutions",
                description: "We recognized that many businesses struggle to navigate the complex digital landscape, often working with multiple agencies for different aspects of their online presence."
              },
              {
                title: "Strategic Vision",
                description: "Our vision was to create a comprehensive digital marketing agency that could handle all aspects of a business's online presence."
              },
              {
                title: "Proven Results",
                description: "Today, we're proud to partner with businesses of all sizes, helping them achieve their goals through strategic, results-driven digital solutions."
              }
            ]}
            imageSrc="samples/landscapes/nature-mountains"
            imageAlt="Digital Mosaic Studios Story"
            imagePosition="right"
            backgroundColor="white"
            imageCrop="fit"
            imageGravity="auto"
            imageObjectFit="cover"
          />
          
          <EnhancedMissionValuesSection />
          
          <EnhancedWhyChooseUsSection />
          
          <EnhancedCTASection
            title="Ready to Work With Us?"
            description="Let's discuss how we can help your business grow through innovative digital solutions."
            buttons={[
              { text: "Get in Touch", href: "/contact", variant: "primary" },
              { text: "View Our Services", href: "/services", variant: "secondary" }
            ]}
          />
        </div>
      </div>
    </>
  );
}
