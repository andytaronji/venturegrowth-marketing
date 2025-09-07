'use client';

import { useEffect, useRef } from 'react';
import CldImageWrapper from './CldImageWrapper';

interface WhyChooseUsFeature {
  title: string;
  description: string;
}

interface EnhancedWhyChooseUsSectionProps {
  title?: string;
  description?: string;
  features?: WhyChooseUsFeature[];
  imageSrc?: string;
  imageAlt?: string;
}

const EnhancedWhyChooseUsSection = ({
  title = "Why Small Businesses & Startups Choose Us",
  description = "We're not just another marketing agency. We're specialists who understand the unique challenges and opportunities in tech startups, SaaS platforms, professional services, and e-commerce.",
  features = [
    {
      title: "Comprehensive Services",
      description: "We offer end-to-end digital solutions, eliminating the need to work with multiple agencies."
    },
    {
      title: "Tailored Approach",
      description: "We develop customized strategies based on your unique business goals and target audience."
    },
    {
      title: "Results-Driven",
      description: "We focus on delivering measurable results that contribute to your business growth."
    },
    {
      title: "Transparent Communication",
      description: "We maintain open, honest communication throughout every project."
    }
  ],
  imageSrc = "samples/imagecon-group",
  imageAlt = "Why Choose Digital Mosaic Studios"
}: EnhancedWhyChooseUsSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate in when scrolling down and reaching trigger point
            // First animate the header
            if (headerRef.current) {
              headerRef.current.classList.add('is-visible');
            }
            
            // Then animate the cards with a delay to ensure header completes first
            setTimeout(() => {
              const cards = entry.target.querySelectorAll('.animate-card');
              cards.forEach((card) => {
                card.classList.add('is-visible');
              });
            }, 600); // 600ms delay after header starts animating to ensure it completes
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -80% 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-padding"
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div ref={headerRef} className="section-header animate-header text-center mb-16">
          <h2 className="font-figtree text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto font-figtree leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-card">
              <div className="ice-card">
                <div className="p-8 pt-12">
                  <h3 className="font-figtree text-xl font-bold text-white text-center mb-8">
                    {feature.title}
                  </h3>
                  <p className="text-white text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedWhyChooseUsSection;
