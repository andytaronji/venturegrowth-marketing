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
            description="Digital Mosaic Studios was founded in Marietta, GA with a mission to help local startups and small businesses turn their ideas into reality. We combine hands-on expertise in web design, marketing consulting, and SaaS development to deliver measurable, data-driven results. Our approach is client-centric and focused on tailoring strategies that drive real business growth for companies across Atlanta, Georgia, and beyond."
            features={[
              {
                title: "Discovery & Strategy",
                description: "We start by understanding your business goals, target audience, and competitive landscape to develop a comprehensive digital strategy."
              },
              {
                title: "Design & Development",
                description: "Our team creates custom solutions that reflect your brand and convert visitors into customers, from websites to SaaS tools."
              },
              {
                title: "Analytics & Support",
                description: "We provide ongoing analytics, optimization, and support to ensure your digital presence continues to drive growth. We pride ourselves on transparency, collaboration, and delivering solutions that make a real impact."
              }
            ]}
            imageSrc="u9524928111_A_crisp_professional_mosaic-style_timeline_beside_a26591de-e997-440a-a17c-edbf4462fc63_1_tnxl1s"
            imageAlt="Digital Mosaic Studios Story"
            imagePosition="right"
            backgroundColor="white"
            imageCrop="fit"
            imageGravity="auto"
            imageObjectFit="cover"
          />
          
          <EnhancedMissionValuesSection />
          
          {/* Testimonial Section */}
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                  What Our Clients Say
                </h2>
                <div className="max-w-4xl mx-auto">
                  <blockquote className="text-xl md:text-2xl text-white mb-8 italic">
                    "Digital Mosaic Studios helped us launch our business online quickly and professionally. Their guidance and expertise made a huge difference for our Atlanta startup."
                  </blockquote>
                  <cite className="text-lg text-white opacity-90 not-italic">
                    — Satisfied Client
                  </cite>
                </div>
              </div>
            </div>
          </section>
          
          <EnhancedWhyChooseUsSection />
          
          <EnhancedCTASection
            title="Ready to Work With Us?"
            description="Contact us today to learn more about how we can help grow your business!"
            buttons={[
              { text: "Book a Free Consultation", href: "/contact", variant: "primary" },
              { text: "View Our Services", href: "/services", variant: "secondary" }
            ]}
          />
        </div>
      </div>
    </>
  );
}
