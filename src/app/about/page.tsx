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
          <EnhancedAboutHero />
          
          <EnhancedServiceDetailSection
            title="Why We Focus on Small Business & Startup Growth"
            description="After working with hundreds of businesses across every industry, we discovered something powerful: small businesses and startups—tech companies, SaaS platforms, professional services, and e-commerce—have the strongest entrepreneurial drive, the clearest growth potential, and the most innovative solutions. Yet they were being underserved by generic marketing agencies who didn't understand their unique scaling challenges, customer acquisition costs, and rapid growth needs."
            features={[
              {
                title: "Growth Specialization",
                description: "We made the strategic decision to focus on small businesses and startups. This specialization allows us to understand your scaling challenges, customer acquisition strategies, and growth metrics better than any generalist agency ever could."
              },
              {
                title: "Proven Growth Framework",
                description: "Our clients see remarkable results: 3x increase in demo signups for tech startups, 40% sales growth for retailers, and doubled inbound leads in 60 days because we've perfected the marketing strategies that work specifically for growing businesses."
              },
              {
                title: "Premium Service Standards",
                description: "We treat your business with the same level of professionalism and attention to detail that you bring to your innovation. Direct access to experts, monthly strategy calls, and transparent reporting—no outsourced support or cookie-cutter solutions."
              }
            ]}
            imageSrc="u9524928111_A_crisp_professional_mosaic-style_timeline_beside_a26591de-e997-440a-a17c-edbf4462fc63_1_tnxl1s"
            imageAlt="Digital Mosaic Studios Blue-Collar Expertise"
            imagePosition="right"
            backgroundColor="white"
            imageCrop="fit"
            imageGravity="auto"
            imageObjectFit="cover"
          />
          
          <EnhancedMissionValuesSection />
          
          {/* Blue-Collar Testimonial Section */}
          <section className="py-16 md:py-24 bg-luxury-navy bg-opacity-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="font-luxury-serif text-4xl md:text-5xl font-bold text-white mb-6">
                  What Growing Business Leaders Say
                </h2>
                <p className="text-xl text-white opacity-90 max-w-3xl mx-auto font-luxury-sans">
                  Real results from ambitious entrepreneurs and business owners who chose luxury-level marketing
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-accent hover:border-opacity-40 transition-all duration-300 hover:transform hover:scale-105 shadow-card hover:shadow-card-hover">
                  <blockquote className="text-lg md:text-xl text-card-body mb-6 italic font-luxury-sans leading-relaxed">
                    "We doubled our beta users in just six weeks. Their understanding of the startup ecosystem and growth strategies is unmatched. ROI has never been higher."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full mr-4 border-2 border-accent border-opacity-30 bg-accent flex items-center justify-center">
                      <span className="text-white font-semibold text-sm font-luxury-sans">MC</span>
                    </div>
                    <div>
                      <cite className="text-accent font-semibold font-luxury-sans not-italic">
                        Mia Chen
                      </cite>
                      <div className="text-card-body text-sm font-luxury-sans">
                        LaunchPad Apps, Atlanta GA
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-accent hover:border-opacity-40 transition-all duration-300 hover:transform hover:scale-105 shadow-card hover:shadow-card-hover">
                  <blockquote className="text-lg md:text-xl text-card-body mb-6 italic font-luxury-sans leading-relaxed">
                    "The custom CRM tool saved us 10 hours per week, and our website now converts visitors into paying customers. Fast turnaround, premium results."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full mr-4 border-2 border-accent border-opacity-30 bg-accent flex items-center justify-center">
                      <span className="text-white font-semibold text-sm font-luxury-sans">DW</span>
                    </div>
                    <div>
                      <cite className="text-accent font-semibold font-luxury-sans not-italic">
                        Dana Williams
                      </cite>
                      <div className="text-card-body text-sm font-luxury-sans">
                        Metro Realty Group, Alpharetta GA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <div className="bg-luxury-gold bg-opacity-10 rounded-xl p-6 max-w-2xl mx-auto border border-luxury-gold border-opacity-30">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-luxury-gold font-bold text-2xl font-luxury-serif">3x</div>
                      <div className="text-white text-sm font-luxury-sans">Demo Signups</div>
                    </div>
                    <div className="text-center">
                      <div className="text-luxury-gold font-bold text-2xl font-luxury-serif">40%</div>
                      <div className="text-white text-sm font-luxury-sans">Sales Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-luxury-gold font-bold text-2xl font-luxury-serif">60 Days</div>
                      <div className="text-white text-sm font-luxury-sans">Double Leads</div>
                    </div>
                  </div>
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
