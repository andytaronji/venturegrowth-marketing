'use client';

import Link from "next/link";
import CldImageWrapper from "@/components/CldImageWrapper";
import EnhancedAboutHero from "@/components/EnhancedAboutHero";
import EnhancedTeamSection from "@/components/EnhancedTeamSection";
import EnhancedAboutSection from "@/components/EnhancedAboutSection";
import EnhancedServiceDetailSection from "@/components/EnhancedServiceDetailSection";
import EnhancedWhyChooseUsSection from "@/components/EnhancedWhyChooseUsSection";
import EnhancedCTASection from "@/components/EnhancedCTASection";
import EnhancedMissionValuesSection from "@/components/EnhancedMissionValuesSection";
import AboutPageSchema from "@/components/AboutPageSchema";
import { Metadata } from "next";

// Metadata needs to be in a separate file or handled differently with client components
// This is just for reference and won't be used in the client component
const pageMetadata = {
  title: "About Us | Digital Mosaic Studios",
  description: "Learn about Digital Mosaic Studios, our mission, values, and the team behind our professional web design and digital marketing services.",
};

export default function AboutPage() {
  return (
    <>
      <AboutPageSchema />
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
      
      <EnhancedTeamSection />
      
      <EnhancedWhyChooseUsSection />
      
      <EnhancedCTASection
        title="Ready to Work With Us?"
        description="Let's discuss how we can help your business grow through innovative digital solutions."
        buttons={[
          { text: "Get in Touch", href: "/contact", variant: "primary" },
          { text: "View Our Services", href: "/services", variant: "secondary" }
        ]}
      />
    </>
  );
}
