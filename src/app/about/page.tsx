'use client';

import { useEffect, useRef } from 'react';
import Link from "next/link";
import CldImageWrapper from "@/components/CldImageWrapper";
import EnhancedAboutHero from "@/components/EnhancedAboutHero";
import EnhancedAboutSection from "@/components/EnhancedAboutSection";
import AboutBusinessFocusSection from "@/components/AboutBusinessFocusSection";
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
  const testimonialsRef = useRef<HTMLElement>(null);
  const testimonialsHeaderRef = useRef<HTMLDivElement>(null);
  const { gsap } = useGSAPAnimation();

  // Removed gradient animation to eliminate moving line effect

  // IntersectionObserver for testimonials section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in when section is at center of viewer's screen
            // First animate the header
            if (testimonialsHeaderRef.current) {
              testimonialsHeaderRef.current.classList.add('is-visible');
            }
            
            // Then animate the content with a delay to ensure header completes first
            setTimeout(() => {
              const content = entry.target.querySelector('.animate-card');
              if (content) {
                content.classList.add('is-visible');
              }
            }, 600); // 600ms delay after header starts animating
          }
        });
      },
      {
        threshold: 1.0,
        rootMargin: '0px'
      }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

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
          
          <AboutBusinessFocusSection />
          
          <EnhancedMissionValuesSection />
          
          {/* Blue-Collar Testimonial Section */}
          <section 
            ref={testimonialsRef}
            className="py-16 md:py-24 bg-luxury-navy bg-opacity-10"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div ref={testimonialsHeaderRef} className="text-center mb-16 animate-header">
                <h2 className="font-figtree text-4xl md:text-5xl font-bold text-white mb-6">
                  What Growing Business Leaders Say
                </h2>
                <p className="text-xl text-white opacity-90 max-w-3xl mx-auto font-figtree">
                  Real results from ambitious entrepreneurs and business owners who chose luxury-level marketing
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto animate-card">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-accent hover:border-opacity-40 transition-all duration-300 hover:transform hover:scale-105 shadow-card hover:shadow-card-hover">
                  <blockquote className="text-lg md:text-xl text-card-body mb-6 italic font-figtree leading-relaxed">
                    "We doubled our beta users in just six weeks. Their understanding of the startup ecosystem and growth strategies is unmatched. ROI has never been higher."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full mr-4 border-2 border-accent border-opacity-30 bg-accent flex items-center justify-center">
                      <span className="text-white font-semibold text-sm font-figtree">MC</span>
                    </div>
                    <div>
                      <cite className="text-accent font-semibold font-figtree not-italic">
                        Mia Chen
                      </cite>
                      <div className="text-card-body text-sm font-figtree">
                        LaunchPad Apps, Atlanta GA
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-accent hover:border-opacity-40 transition-all duration-300 hover:transform hover:scale-105 shadow-card hover:shadow-card-hover">
                  <blockquote className="text-lg md:text-xl text-card-body mb-6 italic font-figtree leading-relaxed">
                    "The custom CRM tool saved us 10 hours per week, and our website now converts visitors into paying customers. Fast turnaround, premium results."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full mr-4 border-2 border-accent border-opacity-30 bg-accent flex items-center justify-center">
                      <span className="text-white font-semibold text-sm font-figtree">DW</span>
                    </div>
                    <div>
                      <cite className="text-accent font-semibold font-figtree not-italic">
                        Dana Williams
                      </cite>
                      <div className="text-card-body text-sm font-figtree">
                        Metro Realty Group, Alpharetta GA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-12 animate-card">
                <div className="bg-luxury-gold bg-opacity-10 rounded-xl p-6 max-w-2xl mx-auto border border-luxury-gold border-opacity-30">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-luxury-gold font-bold text-2xl font-figtree">3x</div>
                      <div className="text-white text-sm font-figtree">Demo Signups</div>
                    </div>
                    <div className="text-center">
                      <div className="text-luxury-gold font-bold text-2xl font-figtree">40%</div>
                      <div className="text-white text-sm font-figtree">Sales Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-luxury-gold font-bold text-2xl font-figtree">60 Days</div>
                      <div className="text-white text-sm font-figtree">Double Leads</div>
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
