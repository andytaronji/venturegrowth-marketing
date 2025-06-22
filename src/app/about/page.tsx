'use client';

import Link from "next/link";
import CldImageWrapper from "@/components/CldImageWrapper";
import EnhancedAboutHero from "@/components/EnhancedAboutHero";
import EnhancedTeamSection from "@/components/EnhancedTeamSection";
import EnhancedAboutSection from "@/components/EnhancedAboutSection";
import EnhancedServiceDetailSection from "@/components/EnhancedServiceDetailSection";
import EnhancedWhyChooseUsSection from "@/components/EnhancedWhyChooseUsSection";
import EnhancedCTASection from "@/components/EnhancedCTASection";
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
      
      {/* Our Mission & Values */}
      <section className="py-16 md:py-24 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Mission & Values</h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
              At Digital Mosaic Studios, we're guided by a set of core values that inform everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-lg shadow-subtle p-8 border border-bg-secondary">
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center bg-bg-secondary rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary text-center mb-4">Excellence</h3>
              <p className="text-secondary text-sm text-center">
                We're committed to delivering the highest quality work in everything we do, from website design to content creation.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white rounded-lg shadow-subtle p-8 border border-bg-secondary">
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center bg-bg-secondary rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary text-center mb-4">Partnership</h3>
              <p className="text-secondary text-sm text-center">
                We view our clients as partners, working collaboratively to achieve their business goals and vision.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white rounded-lg shadow-subtle p-8 border border-bg-secondary">
              <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center bg-bg-secondary rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary text-center mb-4">Innovation</h3>
              <p className="text-secondary text-sm text-center">
                We stay at the forefront of digital trends and technologies to provide cutting-edge solutions for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      
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
